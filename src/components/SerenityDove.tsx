'use client'

import {useImperativeHandle, useRef, type Ref} from 'react'

/*
 * A dove that perches on the homepage wordmark for the easter egg (see SerenityHero.tsx). It sits
 * unseen on its perch, placed inside the letter it lands on, until fly() sends it in from the
 * right on a gentle wave, rests it with a little hop, and sends it off to the left. 🕊️ faces left.
 */

export type DoveControls = {
  // plays the whole flight, over SerenityDove's duration
  fly: () => void
}

// the flight, as offsets from the perch
const FLIGHT: Keyframe[] = [
  {offset: 0, opacity: 0, transform: 'translate(90vw, -2vh) rotate(-8deg)'},
  {offset: 0.05, opacity: 1},
  {offset: 0.17, transform: 'translate(45vw, -7vh) rotate(6deg)'},
  {offset: 0.27, transform: 'translate(12vw, -4vh) rotate(-6deg)'},
  {offset: 0.33, transform: 'translate(0, 0) rotate(0deg)'},
  {offset: 0.47, transform: 'translate(0, 0) rotate(0deg)'},
  {offset: 0.51, transform: 'translate(0, -0.25em) rotate(-4deg)'},
  {offset: 0.55, transform: 'translate(0, 0) rotate(0deg)'},
  {offset: 0.68, transform: 'translate(0, 0) rotate(0deg)'},
  {offset: 0.78, transform: 'translate(-14vw, -6vh) rotate(8deg)'},
  {offset: 0.89, transform: 'translate(-36vw, -2vh) rotate(-6deg)'},
  {offset: 0.95, opacity: 1},
  {offset: 1, opacity: 0, transform: 'translate(-60vw, -8vh) rotate(4deg)'}
]
// wingbeats while flying in and out, as fractions of the flight, and ms per beat
const FLAPS = [
  {start: 0, end: 0.33},
  {start: 0.68, end: 1}
]
const FLAP_TIME = 160

export default function SerenityDove({duration, ref}: {duration: number; ref?: Ref<DoveControls>}) {
  const doveRef = useRef<HTMLSpanElement>(null)
  const bodyRef = useRef<HTMLSpanElement>(null)

  useImperativeHandle(
    ref,
    () => ({
      fly: () => {
        const dove = doveRef.current
        const body = bodyRef.current
        if (!dove || !body) return
        for (const el of [dove, body]) el.getAnimations().forEach((a) => a.cancel())

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          // no flight: it's just there on its perch for a while
          dove.animate(
            [{opacity: 0}, {opacity: 1, offset: 0.1}, {opacity: 1, offset: 0.9}, {opacity: 0}],
            {duration}
          )
          return
        }
        // eased per leg, so it lands and takes off on the beats above
        dove.animate(
          FLIGHT.map((frame) => ({easing: 'ease-in-out', ...frame})),
          {duration}
        )
        for (const {start, end} of FLAPS) {
          body.animate([{transform: 'scaleY(1)'}, {transform: 'scaleY(0.82) translateY(0.04em)'}], {
            delay: start * duration,
            duration: FLAP_TIME,
            iterations: Math.floor(((end - start) * duration) / FLAP_TIME),
            direction: 'alternate',
            easing: 'ease-in-out'
          })
        }
      }
    }),
    [duration]
  )

  return (
    <span
      ref={doveRef}
      aria-hidden="true"
      className="pointer-events-none absolute top-[0.55em] left-[55%] -translate-x-1/2 -translate-y-full text-[0.7em] not-italic opacity-0"
    >
      <span
        ref={bodyRef}
        className="inline-block origin-bottom font-[Apple_Color_Emoji,Segoe_UI_Emoji,Noto_Color_Emoji,sans-serif]"
      >
        🕊️
      </span>
    </span>
  )
}
