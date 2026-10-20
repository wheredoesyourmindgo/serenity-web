import type {ReactNode} from 'react'
import Link from 'next/link'
import FaIcon from '@/components/FaIcon'
import {cn} from 'cn'

/*
 * The pieces every inner page is built from, so they share one type scale and one rhythm:
 *
 * - PageHeader: the gold title, a one-line lede, and any actions (the GitHub buttons) below it.
 * - PageBody: the reading column. Prose is held to about 70 characters a line; keyboards and
 *   other wide things sit outside it, in the page's full width.
 * - Section: a titled block of the column. Sections are separated by a rule (or, unruled, by a
 *   wider gap) rather than boxed, so cards are left for things that really are objects: code,
 *   tables, stats, the legend.
 * - SubSection, FeatureList and Kbd fill a section.
 */

export function PageHeader({
  title,
  lede,
  children
}: {
  title: ReactNode
  lede?: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="flex flex-col items-center px-4 pt-2 pb-10 text-center md:pt-4 md:pb-12">
      <h1 className="text-nushu-yellow text-5xl font-light tracking-[-0.01em] md:text-6xl">
        {title}
      </h1>
      {lede && (
        <p className="text-nushu-ink-strong mt-4 max-w-xl text-base text-balance md:text-lg">
          {lede}
        </p>
      )}
      {children && <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>}
    </header>
  )
}

export function PageBody({children, className}: {children: ReactNode; className?: string}) {
  return <div className={cn('mx-auto w-full max-w-2xl px-4 pb-16', className)}>{children}</div>
}

export function Section({
  id,
  icon,
  title,
  children,
  className,
  ruled = true
}: {
  id?: string
  icon?: string
  title: ReactNode
  children: ReactNode
  className?: string
  // false sets sections apart by space alone, a wider gap where the rule would be
  ruled?: boolean
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 first:mt-0',
        ruled ? 'border-border mt-12 border-t pt-12 first:border-t-0 first:pt-0' : 'mt-16 md:mt-20',
        className
      )}
    >
      <h2 className="text-nushu-blue flex items-baseline gap-3 text-xl font-normal text-balance md:text-2xl">
        {icon && (
          <FaIcon className={cn(icon, 'w-[1.1em] shrink-0 text-[0.8em]')} color="nushu.ink-faint" />
        )}
        {title}
      </h2>
      <div className="text-nushu-ink mt-5 space-y-4 leading-relaxed">{children}</div>
    </section>
  )
}

export function SubSection({
  icon,
  title,
  children
}: {
  icon?: string
  title: ReactNode
  children: ReactNode
}) {
  return (
    <div className="pt-6 first:pt-0">
      <h3 className="text-nushu-ink-deep flex items-baseline gap-2.5 text-base font-medium md:text-lg">
        {icon && <FaIcon className={cn(icon, 'w-[1.1em] shrink-0')} color="nushu.ink-faint" />}
        {title}
      </h3>
      <div className="mt-3 space-y-4">{children}</div>
    </div>
  )
}

export type Feature = {term: ReactNode; tag?: ReactNode; body: ReactNode}

// a feature's name on its own line with its description below, easier to scan than "Name — text"
export function FeatureList({items}: {items: Feature[]}) {
  return (
    <dl className="space-y-6">
      {items.map((item, i) => (
        <div key={i}>
          <dt className="text-nushu-ink-deep flex flex-wrap items-baseline gap-x-3 gap-y-1 font-medium">
            {item.term}
            {item.tag && (
              <span className="text-nushu-ink-muted border-border rounded-full border px-2 text-xs font-normal">
                {item.tag}
              </span>
            )}
          </dt>
          <dd className="mt-1.5">{item.body}</dd>
        </div>
      ))}
    </dl>
  )
}

// a key, as it's named in running text
export function Kbd({children}: {children: ReactNode}) {
  return (
    <kbd className="bg-nushu-paper-dim text-nushu-ink-deep border-border rounded border px-1.5 py-0.5 font-[inherit] text-[0.875em] not-italic">
      {children}
    </kbd>
  )
}

// an inline link: site pages go through next/link, outside links open in a new tab
export function TextLink({href, children}: {href: string; children: ReactNode}) {
  const className =
    'text-nushu-blue decoration-nushu-blue/40 underline underline-offset-3 transition-colors hover:decoration-current'
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

// the page's main action, beside the GitHub button but in blue so it reads as the way in. A class
// rather than a component, so it can style whatever element the action needs (a dialog trigger)
export const actionButtonClassName =
  'border-nushu-blue/40 text-nushu-blue hover:bg-nushu-blue/10 hover:border-nushu-blue inline-flex items-center gap-2 rounded-lg border bg-(--key-face) px-3 py-1.5 text-sm transition-colors'

// a quiet link to the source: there for anyone who wants it, without pushing it
export function GitHubButton({href, children}: {href: string; children: ReactNode}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-border text-nushu-ink-muted hover:text-nushu-ink-deep hover:bg-accent/60 inline-flex items-center gap-2 rounded-lg border bg-(--key-face) px-3 py-1.5 text-sm transition-colors"
    >
      <GitHubIcon />
      {children}
    </a>
  )
}
