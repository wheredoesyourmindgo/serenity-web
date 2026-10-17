'use client'

import {useEffect, useRef, useState} from 'react'
import HeatmapAlphas, {type HeatmapControls} from '@/components/keyboard/HeatmapAlphas'
import SerenityDove, {type DoveControls} from '@/components/SerenityDove'
import SerenitySky from '@/components/SerenitySky'
import {useIntro} from '@/components/IntroProvider'

/*
 * The homepage wordmark and keyboard. Every letter of "serenity" is on the home row, so the name
 * shows off the layout: hovering a letter of the wordmark lights its key, and clicking the wordmark
 * spells it across the keyboard. Typing "serenity" anywhere on the page turns it into a sky over
 * rolling hills for a few seconds while a dove flies in, perches on the name, and flies off.
 *
 * The page opens on that sky with the name typing itself out in white, then a tagline; after a
 * moment the sky fades, the name turns yellow and rises, and the keyboard opens up beneath it.
 * It plays once per page load (see IntroProvider.tsx): coming back to the homepage skips it, and a
 * refresh plays it again.
 */

const NAME = 'Serenity'
const WORD = NAME.toLowerCase()
// ms without a keystroke before a half-typed "serenity" is forgotten
const TYPING_IDLE = 2500
// ms the sky stays up once the word is typed, not counting its fade
const SKY_TIME = 4500
// ms the dove's flight takes; it's gone just as the sky starts to fade
const DOVE_TIME = SKY_TIME + 300
// the opening: ms before the name starts typing, between letters, the finished name and tagline
// hold before the page settles into its usual look, and the keyboard takes to open up after that
const TYPE_DELAY = 400
const TYPE_INTERVAL = 120
const INTRO_HOLD = 1500
const OPEN_TIME = 1200
const TAGLINE = 'a keyboard layout'

export default function SerenityHero() {
  const heatmap = useRef<HeatmapControls>(null)
  const dove = useRef<DoveControls>(null)
  const [sky, setSky] = useState(false)
  const {played, markPlayed} = useIntro()
  const [intro, setIntro] = useState(!played)
  // letters of the name typed so far in the opening; the rest hold their place, unseen
  const [typed, setTyped] = useState(played ? NAME.length : 0)
  // the keyboard is clipped while it opens, then let out so its glow can spill past its edges
  const [opened, setOpened] = useState(played)

  useEffect(() => {
    if (played) return
    // with reduced motion the name is just there
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const typeTime = reducedMotion ? 0 : TYPE_DELAY + NAME.length * TYPE_INTERVAL
    const timers = reducedMotion
      ? [setTimeout(() => setTyped(NAME.length), 0)]
      : [...NAME].map((_, i) => setTimeout(() => setTyped(i + 1), TYPE_DELAY + i * TYPE_INTERVAL))
    timers.push(setTimeout(() => setIntro(false), typeTime + INTRO_HOLD))
    timers.push(
      setTimeout(
        () => {
          setOpened(true)
          // marked played only once it's all done, so leaving partway through plays it again
          markPlayed()
        },
        typeTime + INTRO_HOLD + OPEN_TIME
      )
    )
    return () => timers.forEach(clearTimeout)
  }, [played, markPlayed])

  useEffect(() => {
    // watches for the name typed on a real keyboard. No letter repeats the word's start, so a wrong
    // key either restarts it (s) or clears it.
    let progress = 0
    let idleTimer: ReturnType<typeof setTimeout> | undefined
    let skyTimer: ReturnType<typeof setTimeout> | undefined
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return
      const target = e.target as HTMLElement | null
      if (target?.isContentEditable || target?.closest('input, textarea, select')) return
      const ch = e.key.toLowerCase()
      progress = ch === WORD[progress] ? progress + 1 : ch === WORD[0] ? 1 : 0
      clearTimeout(idleTimer)
      if (progress === WORD.length) {
        progress = 0
        setSky(true)
        dove.current?.fly()
        clearTimeout(skyTimer)
        skyTimer = setTimeout(() => setSky(false), SKY_TIME)
        return
      }
      if (progress) idleTimer = setTimeout(() => (progress = 0), TYPING_IDLE)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      clearTimeout(idleTimer)
      clearTimeout(skyTimer)
    }
  }, [])

  return (
    <>
      <SerenitySky show={intro || sky} />
      {/* positioned so it paints over the sky */}
      <h1 className="font-body text-nushu-yellow relative pb-4 font-features-['ss02'_on] text-4xl italic sm:text-5xl md:pb-8 md:text-6xl lg:text-8xl">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-full left-1/2 -translate-x-1/2 text-xs font-semibold tracking-[0.3em] whitespace-nowrap text-white uppercase not-italic transition-opacity duration-700 motion-reduce:transition-none sm:text-sm md:text-base ${intro && typed === NAME.length ? 'opacity-90' : 'opacity-0'}`}
        >
          {TAGLINE}
        </span>
        {/* the name isn't hoverable until the page has settled */}
        <button
          type="button"
          className={`cursor-pointer rounded-md ${opened ? '' : 'pointer-events-none'}`}
          onClick={() => heatmap.current?.spell({note: true})}
          onPointerLeave={() => heatmap.current?.pin(null)}
        >
          {[...NAME].map((ch, i) => (
            <span
              key={i}
              // the letters fade from white themselves; a fade on the h1 would keep restarting
              // their own hover transition and flicker
              className={`hover:text-nushu-orange relative transition-colors motion-reduce:transition-none ${intro ? 'text-white' : ''} ${opened ? 'duration-300' : 'duration-1500'} ${i < typed ? '' : 'opacity-0'}`}
              onPointerEnter={(e) => e.pointerType !== 'touch' && heatmap.current?.pin(WORD[i])}
            >
              {ch}
              {/* the dove's perch */}
              {i === 0 && <SerenityDove ref={dove} duration={DOVE_TIME} />}
              {/* the cursor follows the last letter typed, and goes once the page settles */}
              {intro && i === typed - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[0.15em] right-[-0.08em] h-[0.95em] w-[0.06em] animate-pulse bg-white"
                />
              )}
            </span>
          ))}
        </button>
      </h1>
      {/* collapsed during the intro so the name sits centered, then opens and fades in */}
      <div
        className={`grid transition-[grid-template-rows,opacity] ease-in-out motion-reduce:transition-none ${intro ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100'}`}
        style={{transitionDuration: `${OPEN_TIME}ms`}}
      >
        <div className={`min-h-0 ${opened ? '' : 'overflow-hidden'}`}>
          <div className="mt-12 origin-center scale-53 sm:scale-75 md:scale-100">
            <HeatmapAlphas ref={heatmap} />
          </div>
        </div>
      </div>
    </>
  )
}
