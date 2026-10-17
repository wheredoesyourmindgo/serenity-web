'use client'

import {useEffect, useRef, useState} from 'react'
import AlphaKeyboard from './Alphas'
import {letterFrequency} from '@/lib/letterFrequency'

/*
 * Homepage keyboard with a heatmap that comes alive on hover. Each key warms to how often its
 * letter occurs in English, hottest letters first, so the map blooms out from E, T, A and O.
 * While hovered the keyboard also "types" the sentences below; each keystroke adds a small, quick
 * pulse on top of the frequency map without changing it. When the pointer leaves, it cools away.
 *
 * Heat is kept in refs and painted from a requestAnimationFrame loop straight to the glow
 * elements, so React doesn't re-render per frame. Colors are the --heat-* tokens in globals.css.
 */

const SENTENCES = [
  'serenity keeps the most common letters right under your fingers.',
  'the home row carries the weight, so your hands can rest.',
  'reach less, type more, and let the words arrive on their own.',
  'a calm layout for long days of writing code and prose.',
  'the quick brown fox jumps over the lazy dog.',
  "it's not about speed; it's about comfort over a lifetime of typing.",
  'fewer stretches - fewer mistakes - more flow.'
]

// seconds for the hottest key to reach ~63% of its frequency; rarer letters take up to BLOOM_SPREAD longer
const BLOOM_TIME = 0.35
const BLOOM_SPREAD = 0.9
const LEAVE_COOL_TIME = 0.5
// keystroke pulses are small and short so they never distort the frequency map
const PULSE_HEAT = 0.18
const PULSE_TIME = 0.3
const CAPTION_LENGTH = 48
// 0 = full opacity at peak heat; 0.6 caps the hottest keys at ~62%
const TOP_DAMPING = 0.6

type KeyGeometry = {key: string; glow: HTMLDivElement; target: number}

function heatColor(t: number) {
  // three segments across the four --heat-* stops
  const scaled = Math.min(t, 0.999) * 3
  const i = Math.floor(scaled)
  const pct = Math.round((scaled - i) * 100)
  return `color-mix(in oklab, var(--heat-${i + 1}) ${pct}%, var(--heat-${i}))`
}

function paint(glow: HTMLDivElement, heat: number) {
  const t = Math.min(1, heat / 1.2) ** 0.75
  // ease off at the top so the hottest keys don't overpower; the low end is nearly untouched
  glow.style.opacity = String(t / (1 + TOP_DAMPING * t * t))
  glow.style.transform = `translate(-50%, -50%) scale(${0.55 + 0.6 * t})`
  glow.style.setProperty('--glow', heatColor(t))
}

// English letter frequency scaled so E sits at the top of the color ramp; punctuation stays cold
function frequencyHeat(key: string) {
  const freq = letterFrequency[key as keyof typeof letterFrequency] ?? 0
  return (freq / letterFrequency.e) * 1.2
}

export default function HeatmapAlphas() {
  const boardRef = useRef<HTMLDivElement>(null)
  const glowLayerRef = useRef<HTMLDivElement>(null)
  const keysRef = useRef<KeyGeometry[]>([])
  const heatRef = useRef(new Map<string, number>())
  const pulseRef = useRef(new Map<string, number>())
  const activeRef = useRef(false)
  const frameRef = useRef(0)
  const [keyNames, setKeyNames] = useState<string[]>([])
  const [active, setActive] = useState(false)
  const [caption, setCaption] = useState('')
  const [reducedMotion, setReducedMotion] = useState(false)

  // find the keys once the keyboard has rendered
  useEffect(() => {
    const board = boardRef.current
    if (!board) return
    const names = Array.from(board.querySelectorAll<HTMLElement>('[data-key]'))
      .map((el) => el.dataset.key ?? '')
      .filter(Boolean)
    setKeyNames(names)
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  // position a glow at each key's center (layout coordinates, so the page's CSS scale doesn't matter)
  useEffect(() => {
    const board = boardRef.current
    const layer = glowLayerRef.current
    if (!board || !layer || keyNames.length === 0) return

    const measure = () => {
      keysRef.current = Array.from(board.querySelectorAll<HTMLElement>('[data-key]')).flatMap(
        (el) => {
          const key = el.dataset.key ?? ''
          const glow = layer.querySelector<HTMLDivElement>(`[data-glow="${CSS.escape(key)}"]`)
          if (!glow) return []
          glow.style.left = `${el.offsetLeft + el.offsetWidth / 2}px`
          glow.style.top = `${el.offsetTop + el.offsetHeight / 2}px`
          return [{key, glow, target: frequencyHeat(key)}]
        }
      )
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(board)
    return () => observer.disconnect()
  }, [keyNames])

  // cool and paint; runs while active and until the last of the heat has faded
  const startLoop = () => {
    if (frameRef.current) return
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000)
      last = now
      const active = activeRef.current
      const heat = heatRef.current
      const pulse = pulseRef.current
      const pulseFade = Math.exp(-dt / PULSE_TIME)
      let remaining = 0
      for (const k of keysRef.current) {
        // ease toward the letter's frequency while hovered (common letters faster), toward 0 after
        const target = active ? k.target : 0
        const tau = active ? BLOOM_TIME + BLOOM_SPREAD * (1 - k.target / 1.2) : LEAVE_COOL_TIME
        const base = heat.get(k.key) ?? 0
        const h = target + (base - target) * Math.exp(-dt / tau)
        const p = (pulse.get(k.key) ?? 0) * pulseFade
        heat.set(k.key, h)
        pulse.set(k.key, p)
        paint(k.glow, h + p)
        remaining = Math.max(remaining, h + p)
      }
      if (activeRef.current || remaining > 0.01) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        for (const k of keysRef.current) paint(k.glow, 0)
        heat.clear()
        pulse.clear()
        frameRef.current = 0
      }
    }
    frameRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => () => cancelAnimationFrame(frameRef.current), [])

  // typing loop, only while hovered
  useEffect(() => {
    if (!active || keyNames.length === 0) return
    if (reducedMotion) {
      for (const k of keysRef.current) paint(k.glow, k.target)
      return () => {
        for (const k of keysRef.current) paint(k.glow, 0)
      }
    }

    let sentence = 0
    let index = 0
    let typed = ''
    let timer: ReturnType<typeof setTimeout>

    const step = () => {
      const text = SENTENCES[sentence]
      const ch = text[index]
      const pulse = pulseRef.current
      const key = ch.toLowerCase()
      pulse.set(key, (pulse.get(key) ?? 0) + PULSE_HEAT)
      typed = (typed + ch).slice(-CAPTION_LENGTH)
      setCaption(typed)

      index += 1
      let delay = 70 + Math.random() * 90
      if (ch === ' ') delay += 40
      if (ch === ',' || ch === ';') delay += 180
      if (index >= text.length) {
        index = 0
        sentence = (sentence + 1) % SENTENCES.length
        typed += ' '
        delay = 1100
      }
      timer = setTimeout(step, delay)
    }
    startLoop()
    timer = setTimeout(step, 400)
    return () => clearTimeout(timer)
  }, [active, reducedMotion, keyNames])

  const setHover = (on: boolean) => {
    activeRef.current = on
    setActive(on)
    if (on) setCaption('')
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative"
        // mouse and pen hover; touch has no hover, so a tap toggles it instead
        onPointerEnter={(e) => e.pointerType !== 'touch' && setHover(true)}
        onPointerLeave={(e) => e.pointerType !== 'touch' && setHover(false)}
        onPointerDown={(e) => e.pointerType === 'touch' && setHover(!activeRef.current)}
      >
        <div
          ref={glowLayerRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-multiply dark:mix-blend-screen"
        >
          {keyNames.map((key) => (
            <div
              key={key}
              data-glow={key}
              className="absolute size-[120px] rounded-full opacity-0"
              style={{
                background: 'radial-gradient(circle, var(--glow) 0%, transparent 68%)',
                willChange: 'transform, opacity'
              }}
            />
          ))}
        </div>
        <div ref={boardRef} className="relative">
          <AlphaKeyboard />
        </div>
      </div>
      {!reducedMotion && (
        <p
          aria-hidden="true"
          className={`text-nushu-ink-faint font-body mt-10 h-7 mask-[linear-gradient(to_right,transparent,black_35%)] text-xl whitespace-pre transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
        >
          {caption}
          <span className="bg-nushu-ink-muted ml-px inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-pulse" />
        </p>
      )}
    </div>
  )
}
