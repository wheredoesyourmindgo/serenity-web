'use client'

import {useEffect, useMemo, useRef} from 'react'
import AlphaKeyboard from './Alphas'
import {letterFrequency} from '@/lib/letterFrequency'

/*
 * Homepage keyboard with a heatmap that comes alive on hover. While hovered the keyboard "types"
 * the snippets below, and every keystroke adds heat to its key (symbols light the key they live on)
 * that slowly cools, so the map builds from the code being typed. When the pointer leaves, it
 * cools away. With reduced motion, hovering shows a still English letter-frequency map instead.
 *
 * The heat is drawn by one WebGL fragment shader on a single canvas (a 2D canvas if WebGL is
 * unavailable), and all animation state lives in refs (the caption is written straight to the
 * DOM), so nothing re-renders in React while it runs. Colors are the --heat-* tokens in globals.css.
 */

const SNIPPETS = [
  'git commit -m "tune the home row"',
  'const layer = keymap[current];',
  "const reach = keys.filter((k) => k.row === 'home');",
  'type Serenity = Calm & Comfortable;',
  'def rest(hands): return hands.on_home_row()',
  'while typing: posture.relax()',
  'if (is_shifted) return tap_code(kc);',
  'fn flow() -> Calm { keys.iter().map(ease).collect() }',
  'defer hands.Rest()',
  'select letter, count(*) from keys group by letter;',
  '.hands { position: home-row; tension: none; }',
  'hs.hotkey.bind({"cmd", "alt"}, "s", rest)',
  'ergonomics = filter onHomeRow . map press',
  'export default function keyboard() {}',
  'alias calm="tmux new -s serenity"',
  'git log --oneline -- wrists',
  'for key in rows; do echo "$key"; done',
  'qmk compile -kb planck -km serenity',
  ':wq is fine, but so is cmd-s.'
]

/*
 * Where each symbol lives on Serenity, as the homepage key at that position: shifted legends on
 * the base layer, then the Symbol layer (see BaseLyr.tsx and SymLyr.tsx). Typing a symbol lights
 * that key; the layer and Shift keys sit on the bottom row, which the homepage doesn't show.
 */
const SYMBOL_KEYS: Record<string, string> = {
  // base layer, shifted
  _: '-',
  ':': ';',
  '"': "'",
  '<': ',',
  '>': '.',
  // Symbol layer, top row
  '!': 'q',
  '@': 'z',
  '#': 'm',
  $: 'w',
  '%': 'v',
  '^': 'j',
  '&': 'f',
  '*': 'o',
  '(': 'u',
  ')': '-',
  // Symbol layer, home row
  '[': 'r',
  ']': 'n',
  '=': 't',
  '/': 's',
  '\\': 'g',
  // Symbol layer, bottom row
  '{': 'x',
  '}': 'l',
  '+': 'd',
  '?': 'c',
  '|': 'b',
  '~': 'p',
  '`': "'"
}

// heat per keystroke, and seconds to cool to ~37% while hovered and after the pointer leaves
const KEYSTROKE_HEAT = 0.3
const MAX_HEAT = 1.6
const COOL_TIME = 4
const LEAVE_COOL_TIME = 0.7
// the caption starts centered and grows outward to CAPTION_LENGTH, then trims from the left;
// each keystroke glides the text over instead of jumping
const CAPTION_LENGTH = 48
const CAPTION_GLIDE_TIME = 0.09
// spaces typed one at a time between snippets, then a pause
const SNIPPET_GAP = 3
// 0 = full opacity at peak heat; 0.6 caps the hottest keys at ~62%
const TOP_DAMPING = 0.6
// glow size in layout pixels (wide enough for neighbors to bleed together), and room around the
// keyboard for glows to spill into
const GLOW_SIGMA = 29
const MARGIN = 60
const MAX_KEYS = 40

const VERTEX_SHADER = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

const FRAGMENT_SHADER = `
precision mediump float;
uniform vec2 uRes;
uniform vec3 uKeys[${MAX_KEYS}]; // x, y in canvas pixels (y down), heat
uniform int uCount;
uniform float uSigma;
uniform float uDamp;
uniform vec3 uRamp[4];

void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  // glows layer like translucent paint: field = 1 - (1 - a)(1 - b)..., so overlaps warm up and
  // bleed together without saturating (the 2D fallback layers the same way)
  float cool = 1.0;
  for (int i = 0; i < ${MAX_KEYS}; i++) {
    if (i >= uCount) break;
    float t = pow(clamp(uKeys[i].z / 1.2, 0.0, 1.0), 0.75);
    // hotter keys glow a little wider
    float sigma = uSigma * (0.7 + 0.5 * t);
    vec2 d = p - uKeys[i].xy;
    cool *= 1.0 - min(t * exp(-dot(d, d) / (2.0 * sigma * sigma)), 0.999);
  }
  float field = 1.0 - cool;
  float s = min(field, 0.999) * 3.0;
  vec3 color = mix(uRamp[0], uRamp[1], clamp(s, 0.0, 1.0));
  color = mix(color, uRamp[2], clamp(s - 1.0, 0.0, 1.0));
  color = mix(color, uRamp[3], clamp(s - 2.0, 0.0, 1.0));
  float alpha = field / (1.0 + uDamp * field * field);
  gl_FragColor = vec4(color * alpha, alpha);
}
`

type Renderer = {
  draw: (keys: Float32Array, count: number, width: number, height: number, sigma: number) => void
  setRamp: (colors: number[]) => void
}

// heat value -> 0..1 on the color ramp, matching the shader
function heatT(heat: number) {
  return Math.min(1, Math.max(0, heat) / 1.2) ** 0.75
}

// sample the shader's Gaussian falloff out to GAUSSIAN_EXTENT sigmas
const GAUSSIAN_EXTENT = 2.6
const GAUSSIAN_STOPS = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1]
function gaussianAt(stop: number) {
  if (stop >= 1) return 0
  const r = stop * GAUSSIAN_EXTENT
  return Math.exp(-(r * r) / 2)
}

// fallback when WebGL is unavailable (e.g. hardware acceleration turned off): one radial gradient
// per key on a 2D canvas, with the same colors and falloff as the shader
function create2DRenderer(canvas: HTMLCanvasElement): Renderer | null {
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  let ramp = new Array(12).fill(0)
  const rampAt = (t: number) => {
    const s = Math.min(t, 0.999) * 3
    const i = Math.floor(s)
    const f = s - i
    return [0, 1, 2].map((c) =>
      Math.round((ramp[i * 3 + c] * (1 - f) + ramp[(i + 1) * 3 + c] * f) * 255)
    )
  }
  return {
    setRamp: (colors) => {
      ramp = colors
    },
    draw: (keys, count, width, height, sigma) => {
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < count; i++) {
        const t = heatT(keys[i * 3 + 2])
        if (t < 0.01) continue
        const [r, g, b] = rampAt(t)
        const alpha = t / (1 + TOP_DAMPING * t * t)
        const glowSigma = sigma * (0.7 + 0.5 * t)
        const radius = glowSigma * GAUSSIAN_EXTENT
        const x = keys[i * 3]
        const y = keys[i * 3 + 1]
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        for (const stop of GAUSSIAN_STOPS) {
          gradient.addColorStop(stop, `rgb(${r} ${g} ${b} / ${alpha * gaussianAt(stop)})`)
        }
        ctx.fillStyle = gradient
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2)
      }
    }
  }
}

function createRenderer(canvas: HTMLCanvasElement): Renderer | null {
  const gl = canvas.getContext('webgl', {premultipliedAlpha: true, antialias: false})
  if (!gl) return create2DRenderer(canvas)

  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type)!
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    return shader
  }
  const program = gl.createProgram()!
  gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX_SHADER))
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER))
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null
  gl.useProgram(program)

  // one triangle that covers the whole canvas
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const aPos = gl.getAttribLocation(program, 'aPos')
  gl.enableVertexAttribArray(aPos)
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

  const u = (name: string) => gl.getUniformLocation(program, name)
  const uRes = u('uRes')
  const uKeys = u('uKeys')
  const uCount = u('uCount')
  const uRamp = u('uRamp')
  const uSigma = u('uSigma')
  gl.uniform1f(u('uDamp'), TOP_DAMPING)

  return {
    setRamp: (colors) => gl.uniform3fv(uRamp, colors),
    draw: (keys, count, width, height, sigma) => {
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
      gl.viewport(0, 0, width, height)
      gl.uniform2f(uRes, width, height)
      gl.uniform1f(uSigma, sigma)
      gl.uniform3fv(uKeys, keys)
      gl.uniform1i(uCount, count)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
  }
}

// read the --heat-* hex tokens for the current mode as RGB floats
function readRamp() {
  const style = getComputedStyle(document.documentElement)
  return [0, 1, 2, 3].flatMap((i) => {
    const hex = style.getPropertyValue(`--heat-${i}`).trim().replace('#', '')
    return [0, 2, 4].map((j) => parseInt(hex.slice(j, j + 2), 16) / 255 || 0)
  })
}

// English letter frequency scaled so E sits at the top of the color ramp, for the reduced-motion map
function frequencyHeat(key: string) {
  const freq = letterFrequency[key as keyof typeof letterFrequency] ?? 0
  return (freq / letterFrequency.e) * 1.2
}

type KeyState = {key: string; x: number; y: number; target: number; heat: number}

export default function HeatmapAlphas() {
  const boardRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const captionRef = useRef<HTMLSpanElement>(null)
  const captionLineRef = useRef<HTMLParagraphElement>(null)
  const captionTrackRef = useRef<HTMLSpanElement>(null)
  const startRef = useRef<(on: boolean) => void>(() => {})
  const touchOnRef = useRef(false)
  // the keyboard never needs to re-render for the heatmap
  const keyboard = useMemo(() => <AlphaKeyboard />, [])

  useEffect(() => {
    const board = boardRef.current
    const canvas = canvasRef.current
    if (!board || !canvas) return
    const renderer = createRenderer(canvas)
    if (!renderer) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const keys: KeyState[] = Array.from(board.querySelectorAll<HTMLElement>('[data-key]')).map(
      (el) => ({key: el.dataset.key ?? '', x: 0, y: 0, target: 0, heat: 0})
    )
    const uniforms = new Float32Array(MAX_KEYS * 3)
    const byKey = new Map(keys.map((k) => [k.key, k]))
    let width = 0
    let height = 0
    let active = false
    let frame = 0
    let typingTimer: ReturnType<typeof setTimeout> | undefined

    // key centers in canvas pixels, from layout offsets so the page's CSS scale doesn't matter.
    // The glows are soft, so the canvas renders at 1x even on high-density screens.
    const measure = () => {
      width = board.offsetWidth + MARGIN * 2
      height = board.offsetHeight + MARGIN * 2
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      board.querySelectorAll<HTMLElement>('[data-key]').forEach((el) => {
        const k = byKey.get(el.dataset.key ?? '')
        if (!k) return
        k.x = el.offsetLeft + el.offsetWidth / 2 + MARGIN
        k.y = el.offsetTop + el.offsetHeight / 2 + MARGIN
        k.target = frequencyHeat(k.key)
      })
    }

    const draw = () => {
      keys.forEach((k, i) => {
        uniforms[i * 3] = k.x
        uniforms[i * 3 + 1] = k.y
        uniforms[i * 3 + 2] = k.heat
      })
      renderer.draw(uniforms, Math.min(keys.length, MAX_KEYS), width, height, GLOW_SIGMA)
    }

    let snippet = 0
    let index = 0
    let gap = 0
    let typed = ''
    // in ch; starts where the text was before the keystroke and glides to 0 in tick()
    let captionOffset = 0

    // cool every key; slowly while hovered so the map builds up, quickly once the pointer leaves
    const tick = (now: number, last: number) => {
      const dt = Math.min(0.1, (now - last) / 1000)
      const cooling = Math.exp(-dt / (active ? COOL_TIME : LEAVE_COOL_TIME))
      let remaining = 0
      for (const k of keys) {
        k.heat *= cooling
        remaining = Math.max(remaining, k.heat)
      }
      draw()
      captionOffset *= Math.exp(-dt / CAPTION_GLIDE_TIME)
      if (captionTrackRef.current) {
        captionTrackRef.current.style.transform = `translateX(${captionOffset}ch)`
      }
      if (active || remaining > 0.005) {
        frame = requestAnimationFrame((t) => tick(t, now))
      } else {
        for (const k of keys) k.heat = 0
        draw()
        frame = 0
      }
    }

    const append = (ch: string) => {
      const before = typed.length
      typed = (typed + ch).slice(-CAPTION_LENGTH)
      if (captionRef.current) captionRef.current.textContent = typed
      // a growing centered line shifts the text half a character; a full one shifts a whole one
      captionOffset = Math.min(captionOffset + (typed.length > before ? 0.5 : 1), 3)
      // applied right away so the text never jumps before the next frame picks up the glide
      if (captionTrackRef.current) {
        captionTrackRef.current.style.transform = `translateX(${captionOffset}ch)`
      }
    }

    const type = () => {
      if (gap > 0) {
        append(' ')
        gap -= 1
        typingTimer = setTimeout(type, gap > 0 ? 110 : 700)
        return
      }

      const text = SNIPPETS[snippet]
      const ch = text[index]
      const k = byKey.get(SYMBOL_KEYS[ch] ?? ch.toLowerCase())
      if (k) k.heat = Math.min(k.heat + KEYSTROKE_HEAT, MAX_HEAT)
      append(ch)

      index += 1
      let delay = 60 + Math.random() * 80
      if (ch === ' ') delay += 30
      if (index >= text.length) {
        index = 0
        snippet = (snippet + 1) % SNIPPETS.length
        gap = SNIPPET_GAP
        delay = 300
      }
      typingTimer = setTimeout(type, delay)
    }

    const applyRamp = () => {
      renderer.setRamp(readRamp())
      draw()
    }

    startRef.current = (on) => {
      if (on === active) return
      active = on
      if (reducedMotion) {
        // a still frequency map, no animation
        for (const k of keys) k.heat = on ? k.target : 0
        draw()
        return
      }
      if (captionLineRef.current) captionLineRef.current.style.opacity = on ? '1' : '0'
      clearTimeout(typingTimer)
      if (on) {
        typed = ''
        captionOffset = 0
        if (captionRef.current) captionRef.current.textContent = ''
        // start somewhere new each hover
        snippet = Math.floor(Math.random() * SNIPPETS.length)
        index = 0
        gap = 0
        typingTimer = setTimeout(type, 400)
      }
      if (!frame) {
        const now = performance.now()
        frame = requestAnimationFrame((t) => tick(t, now))
      }
    }

    measure()
    applyRamp()
    const resizeObserver = new ResizeObserver(() => {
      measure()
      draw()
    })
    resizeObserver.observe(board)
    // next-themes flips the class on <html>; re-read the colors for the new mode
    const themeObserver = new MutationObserver(applyRamp)
    themeObserver.observe(document.documentElement, {attributes: true, attributeFilter: ['class']})

    return () => {
      resizeObserver.disconnect()
      themeObserver.disconnect()
      cancelAnimationFrame(frame)
      clearTimeout(typingTimer)
      startRef.current = () => {}
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      {/* mouse and pen hover; touch has no hover, so a tap toggles it instead */}
      <div
        className="relative"
        onPointerEnter={(e) => e.pointerType !== 'touch' && startRef.current(true)}
        onPointerLeave={(e) => e.pointerType !== 'touch' && startRef.current(false)}
        onPointerDown={(e) => {
          if (e.pointerType !== 'touch') return
          touchOnRef.current = !touchOnRef.current
          startRef.current(touchOnRef.current)
        }}
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute mix-blend-multiply dark:mix-blend-screen"
          style={{left: -MARGIN, top: -MARGIN}}
        />
        <div ref={boardRef} className="relative">
          {keyboard}
        </div>
      </div>
      <p
        ref={captionLineRef}
        aria-hidden="true"
        className="text-nushu-ink-faint font-body mt-10 h-7 mask-[linear-gradient(to_right,transparent,black_35%)] text-xl whitespace-pre opacity-0 transition-opacity duration-500"
      >
        <span ref={captionTrackRef} className="inline-block">
          <span ref={captionRef} />
          <span className="bg-nushu-ink-muted ml-px inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-pulse" />
        </span>
      </p>
    </div>
  )
}
