'use client'

import {useEffect, useRef} from 'react'
import HeatmapAlphas, {type HeatmapControls} from '@/components/keyboard/HeatmapAlphas'

/*
 * The homepage wordmark and keyboard. Every letter of "serenity" is on the home row, so the name
 * shows off the layout: hovering a letter of the wordmark lights its key, and clicking the wordmark
 * or typing "serenity" anywhere on the page spells it across the keyboard.
 */

const NAME = 'Serenity'
const WORD = NAME.toLowerCase()

export default function SerenityHero() {
  const heatmap = useRef<HeatmapControls>(null)

  useEffect(() => {
    // typing the name on a real keyboard spells it on this one
    let typed = ''
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return
      const target = e.target as HTMLElement | null
      if (target?.isContentEditable || target?.closest('input, textarea, select')) return
      typed = (typed + e.key.toLowerCase()).slice(-WORD.length)
      if (typed === WORD) {
        typed = ''
        // slower than a click and held longer, so the payoff has time to land
        heatmap.current?.spell({note: true, pace: 1.5, hold: 3200})
      }
    }
    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <h1 className="font-body text-nushu-yellow pb-4 font-features-['ss02'_on] text-4xl italic sm:text-5xl md:pb-8 md:text-6xl lg:text-8xl">
        <button
          type="button"
          className="cursor-pointer rounded-md"
          onClick={() => heatmap.current?.spell({note: true})}
          onPointerLeave={() => heatmap.current?.pin(null)}
        >
          {[...NAME].map((ch, i) => (
            <span
              key={i}
              className="hover:text-nushu-orange transition-colors duration-300"
              onPointerEnter={(e) => e.pointerType !== 'touch' && heatmap.current?.pin(WORD[i])}
            >
              {ch}
            </span>
          ))}
        </button>
      </h1>
      <div className="mt-12 origin-center scale-53 sm:scale-75 md:scale-100">
        <HeatmapAlphas ref={heatmap} />
      </div>
    </>
  )
}
