'use client'

import {useState} from 'react'
import {cn} from '@/lib/utils'

/*
 * Per-finger share of letters typed, split into keys under the resting finger ("home") and keys
 * the finger has to leave home for ("reach"). Shown for QWERTY and Serenity side by side on one
 * scale. Computed from English letter frequency (src/lib/letterFrequency.ts), letters only,
 * standard touch-typing finger assignments; the index fingers' inner columns count as reaches.
 */

const FINGERS = ['L pinky', 'L ring', 'L middle', 'L index', 'R index', 'R middle', 'R ring', 'R pinky']
const SHORT = ['P', 'R', 'M', 'I', 'I', 'M', 'R', 'P']

const LAYOUTS = [
  {
    name: 'QWERTY',
    home: [8.2, 6.3, 4.3, 2.2, 0.2, 0.8, 4.0, 0],
    reach: [0.2, 2.5, 15.5, 19.5, 20.0, 7.0, 7.5, 1.9]
  },
  {
    name: 'Serenity',
    home: [6.0, 6.7, 9.1, 6.3, 6.1, 12.7, 8.2, 7.0],
    reach: [0.2, 4.1, 6.7, 9.6, 7.1, 7.5, 2.8, 0]
  }
]

const MAX = 21 // % — shared scale so the two charts compare directly
const HEIGHT = 160 // px

export default function FingerLoad() {
  const [hover, setHover] = useState<{layout: number; finger: number} | null>(null)
  const active = hover && LAYOUTS[hover.layout]

  return (
    <figure className="w-full">
      <div className="text-nushu-ink-muted mb-4 flex justify-center gap-6 text-sm">
        <span className="flex items-center gap-2">
          <span className="bg-nushu-blue inline-block h-3 w-3 rounded-sm" /> Home key
        </span>
        <span className="flex items-center gap-2">
          <span className="bg-nushu-blue/35 inline-block h-3 w-3 rounded-sm" /> Reach
        </span>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {LAYOUTS.map((layout, li) => (
          <div key={layout.name}>
            <div className="text-nushu-ink-strong mb-2 text-center font-medium">{layout.name}</div>
            <div
              className="border-border flex items-end justify-between gap-1 border-b"
              style={{height: HEIGHT}}
              onPointerLeave={() => setHover(null)}
            >
              {FINGERS.map((finger, fi) => {
                const home = layout.home[fi]
                const reach = layout.reach[fi]
                const dim = hover && !(hover.layout === li && hover.finger === fi)
                return (
                  <button
                    key={finger}
                    type="button"
                    aria-label={`${layout.name}, ${finger}: ${home}% home, ${reach}% reach`}
                    className={cn(
                      'flex h-full flex-1 cursor-default flex-col justify-end gap-0.5 transition-opacity',
                      dim && 'opacity-40'
                    )}
                    onPointerEnter={() => setHover({layout: li, finger: fi})}
                    onFocus={() => setHover({layout: li, finger: fi})}
                    onBlur={() => setHover(null)}
                  >
                    {reach > 0 && (
                      <span
                        className="bg-nushu-blue/35 block w-full rounded-t-[4px]"
                        style={{height: (reach / MAX) * HEIGHT}}
                      />
                    )}
                    {home > 0 && (
                      <span
                        className={cn('bg-nushu-blue block w-full', reach === 0 && 'rounded-t-[4px]')}
                        style={{height: (home / MAX) * HEIGHT}}
                      />
                    )}
                  </button>
                )
              })}
            </div>
            <div className="text-nushu-ink-faint mt-1 flex justify-between gap-1 text-xs">
              {SHORT.map((s, i) => (
                <span key={i} className="flex-1 text-center">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <figcaption className="text-nushu-ink-muted mt-4 min-h-[3em] text-center text-sm">
        {active && hover ? (
          <>
            <span className="text-nushu-ink-strong">
              {active.name}, {FINGERS[hover.finger]}:
            </span>{' '}
            {(active.home[hover.finger] + active.reach[hover.finger]).toFixed(1)}% of letters (
            {active.reach[hover.finger].toFixed(1)}% off the home key)
          </>
        ) : (
          <>Share of English letters typed by each finger. Hover a bar for numbers.</>
        )}
      </figcaption>
    </figure>
  )
}
