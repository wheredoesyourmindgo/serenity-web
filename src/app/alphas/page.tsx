'use client'

import {useState} from 'react'
import {cn} from '@/lib/utils'
import AlphaKeyboard from '@/components/keyboard/Alphas'
import FaIcon from '@/components/FaIcon'
import genkey from '@/components/stats/genkey'
import a200 from '@/components/stats/a200'
import colemakmods from '@/components/stats/colemakmods'

type Show = 'a200' | 'genkey' | 'colemakmods'

const statTabs: {value: Show; label: string}[] = [
  {value: 'genkey', label: 'Genkey'},
  {value: 'a200', label: '200 Analyzer'},
  {value: 'colemakmods', label: 'Keyboard Layout Analyzer [SP]'}
]

export default function AlphasPage() {
  const [show, setShow] = useState<Show>('genkey')

  const handleShowChange = (newShow: string) => {
    if (newShow !== null) {
      setShow(newShow as Show)
    }
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <h2 className="text-solarized-green pt-4 pb-4 text-6xl font-light tracking-[-0.00833em] md:pt-8 md:pb-8">
          Alphas
        </h2>
        <div className="h-25 origin-center scale-52 sm:h-50 sm:scale-75 md:h-auto md:origin-[initial] md:scale-100">
          <AlphaKeyboard />
        </div>

        <div className="mt-12 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <FaIcon className="fa-regular fa-star-shooting" color="solarized.base1" />
            <h6 className="text-solarized-base00 text-xl font-medium">Statistics</h6>
          </div>

          <div className="mt-4 flex">
            <div
              role="group"
              aria-label="Stats Button Toggle"
              className="border-border flex overflow-hidden rounded-lg border"
            >
              {statTabs.map(({value, label}) => (
                <button
                  key={value}
                  onClick={() => handleShowChange(value)}
                  aria-pressed={show === value}
                  className={cn(
                    'border-border border-r px-4 py-2 text-sm font-medium transition-colors last:border-r-0',
                    show === value
                      ? 'bg-solarized-blue/10 text-solarized-blue dark:bg-solarized-cyan/10 dark:text-solarized-cyan'
                      : 'text-solarized-base01 hover:bg-accent/50'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={cn('max-w-full pt-8', show !== 'genkey' && 'hidden')}>
          <div className="border-border bg-card overflow-x-scroll rounded border p-8 shadow-sm">
            <p className="text-solarized-base01 mb-2 flex items-center gap-2">
              <FaIcon className="fa-regular fa-angle-right" color="solarized.green" />
              <em>./genkey -stagger=false analyze serenity</em>
            </p>
            <hr className="border-border mb-2" />
            <pre className="text-solarized-base00 text-sm">{genkey}</pre>
          </div>
          <div className="mt-2 flex justify-end">
            <a
              href="https://github.com/semilin/genkey"
              rel="noopener noreferrer"
              target="_blank"
              className="text-foreground text-xs hover:underline"
            >
              https://github.com/semilin/genkey
            </a>
          </div>
        </div>

        <div className={cn('max-w-full pt-8', show !== 'a200' && 'hidden')}>
          <div className="border-border bg-card overflow-x-scroll rounded border p-8 shadow-sm">
            <p className="text-solarized-base01 mb-2 flex items-center gap-4">
              <FaIcon className="fa-regular fa-angle-right" color="solarized.green" />
              <em>./a200 vw serenity</em>
            </p>
            <hr className="border-border mb-2" />
            <pre className="text-solarized-base00 text-sm">{a200}</pre>
          </div>
          <div className="mt-2 flex justify-end">
            <a
              href="https://github.com/ClemenPine/200-analyzer"
              rel="noopener noreferrer"
              target="_blank"
              className="text-foreground text-xs hover:underline"
            >
              https://github.com/ClemenPine/200-analyzer
            </a>
          </div>
        </div>

        <div className={cn('max-w-full pt-8', show !== 'colemakmods' && 'hidden')}>
          <div className="border-border bg-card overflow-x-scroll rounded border p-8 shadow-sm">
            <p className="text-solarized-base01 mb-2">
              <em>Keyboard Analysis Tool - v1.32</em>
            </p>
            <hr className="border-border mb-2" />
            <pre className="text-solarized-base00 text-sm">{colemakmods}</pre>
          </div>
          <div className="mt-2 flex justify-end">
            <a
              href="https://colemakmods.github.io/mod-dh/analyze.html"
              rel="noopener noreferrer"
              target="_blank"
              className="text-foreground text-xs hover:underline"
            >
              https://colemakmods.github.io/mod-dh/analyze.html
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
