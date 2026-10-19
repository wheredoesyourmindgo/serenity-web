'use client'

import FitWidth from '@/components/FitWidth'
import {useState} from 'react'
import {cn} from 'cn'
import AlphaKeyboard from '@/components/keyboard/Alphas'
import FaIcon from '@/components/FaIcon'
import {PageBody, PageHeader, Section, TextLink} from '@/components/Page'
import genkey from '@/components/stats/genkey'
import a200 from '@/components/stats/a200'
import colemakmods from '@/components/stats/colemakmods'

type Show = 'genkey' | 'a200' | 'colemakmods'

// each analyzer's output, under the command or tool that produced it
const analyzers: {value: Show; label: string; command: string; output: string; href: string}[] = [
  {
    value: 'genkey',
    label: 'Genkey',
    command: './genkey -stagger=false analyze serenity',
    output: genkey,
    href: 'https://github.com/semilin/genkey'
  },
  {
    value: 'a200',
    label: '200 Analyzer',
    command: './a200 vw serenity',
    output: a200,
    href: 'https://github.com/ClemenPine/200-analyzer'
  },
  {
    value: 'colemakmods',
    label: 'Layout Analyzer',
    command: 'Keyboard Analysis Tool v1.32 [SP]',
    output: colemakmods,
    href: 'https://colemakmods.github.io/mod-dh/analyze.html'
  }
]

export default function LayoutPage() {
  const [show, setShow] = useState<Show>('genkey')
  const current = analyzers.find((a) => a.value === show)!

  return (
    <>
      <PageHeader
        title="Layout"
        lede="The letters, shaded by how often you type them, and how Serenity scores in three layout analyzers."
      />

      <div className="px-4">
        <FitWidth>
          <AlphaKeyboard />
        </FitWidth>
      </div>

      <PageBody className="mt-16">
        <Section icon="fa-regular fa-star-shooting" title="Statistics">
          <div
            role="group"
            aria-label="Analyzer"
            className="border-border bg-card flex w-full overflow-x-auto rounded-lg border p-1 sm:w-fit"
          >
            {analyzers.map(({value, label}) => (
              <button
                key={value}
                onClick={() => setShow(value)}
                aria-pressed={show === value}
                className={cn(
                  'flex-1 rounded-md px-3 py-1.5 text-sm whitespace-nowrap transition-colors sm:flex-none',
                  show === value
                    ? 'bg-background text-nushu-blue shadow-sm'
                    : 'text-nushu-ink-muted hover:text-nushu-ink-deep'
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <figure className="overflow-hidden rounded-lg border border-(--code-border) bg-(--code-background)">
            <figcaption className="flex items-center gap-2 border-b border-(--code-border) bg-(--code-bar) px-4 py-2.5 text-xs text-(--code-muted) md:text-[13px]">
              <FaIcon className="fa-regular fa-angle-right text-(--code-syntax-comment)" />
              <em className="truncate">{current.command}</em>
            </figcaption>
            <pre className="overflow-x-auto px-4 py-4 text-xs leading-relaxed text-(--code-foreground) md:text-[13px]">
              {current.output.trim()}
            </pre>
          </figure>
          <p className="text-right text-xs">
            <TextLink href={current.href}>{current.href.replace('https://', '')}</TextLink>
          </p>
        </Section>
      </PageBody>
    </>
  )
}
