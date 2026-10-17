'use client'

import {useEffect, useRef, useState} from 'react'

/*
 * A plain sky over rolling hills, laid behind the homepage: it opens the page and comes back for
 * the easter egg (see SerenityHero.tsx). The hills rise a little as it fades in. A night sky in
 * dark mode.
 *
 * Mobile browsers tint their toolbars from the page: iOS Safari 26 from the background color of a
 * fixed layer at the screen's edge, older Safari from the theme-color tag. So while the sky is up,
 * it carries the front hill's green as a solid background (hidden under the gradient) and points
 * theme-color at it, and once it has faded it leaves the page, so the toolbars go back to the page
 * color. Both blend between the two colors over the fade, in case the browser follows along.
 */

// ms the sky takes to fade, matching duration-1500 below
const FADE_TIME = 1500

// layered hills, back to front, drawn across a 1440 × 320 box stretched to the page width
const HILLS = [
  {
    d: 'M0 170 C240 90 480 90 720 150 S1200 210 1440 120 V320 H0Z',
    className: 'fill-[#a9d98c] dark:fill-[#1d3a27]'
  },
  {
    d: 'M0 230 C200 170 420 170 640 220 S1100 260 1440 190 V320 H0Z',
    className: 'fill-[#82c36c] dark:fill-[#22482d]'
  },
  {
    d: 'M0 285 C300 235 560 250 820 285 S1250 300 1440 260 V320 H0Z',
    className: 'fill-(--sky-ground)'
  }
]

// how many colors theme-color steps through on its way between the page and the hill
const TINT_STEPS = 15

function setThemeColor(color: string) {
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute('content', color)
  })
}

// t of the way from one #rrggbb color to another
function mixHex(from: string, to: string, t: number) {
  const channels = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))
  const a = channels(from)
  const b = channels(to)
  return (
    '#' +
    a
      .map((v, i) =>
        Math.round(v + (b[i] - v) * t)
          .toString(16)
          .padStart(2, '0')
      )
      .join('')
  )
}

export default function SerenitySky({show}: {show: boolean}) {
  // in the page at all: it joins as soon as it's shown and leaves once it has faded out
  const [mounted, setMounted] = useState(show)
  if (show && !mounted) setMounted(true)
  // a frame behind joining the page, so it has an opacity to fade in from
  const [entered, setEntered] = useState(show)
  const visible = show && entered

  useEffect(() => {
    if (show) {
      const frame = requestAnimationFrame(() => setEntered(true))
      return () => cancelAnimationFrame(frame)
    }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = setTimeout(
      () => {
        setMounted(false)
        setEntered(false)
      },
      reducedMotion ? 0 : FADE_TIME
    )
    return () => clearTimeout(timer)
  }, [show])

  // theme-color steps toward the hill as the sky fades in and back to the page as it fades out
  // (straight there on the first paint, or with reduced motion)
  const tinted = useRef(false)
  useEffect(() => {
    if (!mounted) return
    const style = getComputedStyle(document.documentElement)
    const ground = style.getPropertyValue('--sky-ground').trim()
    const page = style.getPropertyValue('--background').trim()
    const [from, to] = visible ? [page, ground] : [ground, page]
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!tinted.current || reducedMotion) {
      tinted.current = true
      setThemeColor(to)
      return
    }
    let step = 0
    const timer = setInterval(() => {
      step += 1
      setThemeColor(mixHex(from, to, step / TINT_STEPS))
      if (step === TINT_STEPS) clearInterval(timer)
    }, FADE_TIME / TINT_STEPS)
    // if the fade is cut short, land where it was headed
    return () => {
      clearInterval(timer)
      setThemeColor(to)
    }
  }, [mounted, visible])

  // leaving the homepage with the sky up hands the toolbars back to the page color
  useEffect(
    () => () =>
      setThemeColor(
        getComputedStyle(document.documentElement).getPropertyValue('--background').trim()
      ),
    []
  )

  if (!mounted) return null

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 bg-linear-to-b from-[#7dbdf4] to-[#e4f2fe] transition-[opacity,background-color] duration-1500 motion-reduce:transition-none dark:from-[#0c1a33] dark:to-[#2b4670] ${visible ? 'bg-(--sky-ground) opacity-100' : 'bg-background opacity-0'}`}
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className={`absolute bottom-0 h-[30vh] w-full transition-transform duration-1800 ease-out motion-reduce:transition-none ${visible ? 'translate-y-0' : 'translate-y-1/4'}`}
      >
        {HILLS.map((hill) => (
          <path key={hill.d} d={hill.d} className={hill.className} />
        ))}
      </svg>
    </div>
  )
}
