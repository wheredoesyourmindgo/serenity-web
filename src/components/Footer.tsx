'use client'

import {usePathname} from 'next/navigation'

const links = [
  {href: 'https://github.com/wheredoesyourmindgo/serenity-qmk', label: 'QMK'},
  {href: 'https://github.com/wheredoesyourmindgo/serenity-karabiner', label: 'Karabiner'},
  {href: 'https://github.com/wheredoesyourmindgo/serenity-web', label: 'Site'}
]

// left off the homepage, which is meant to fit the screen without scrolling
export default function Footer() {
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <footer className="border-border text-nushu-ink-muted border-t px-4 py-8 text-xs">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p>
          Questions or feedback?{' '}
          <a
            href="mailto:majority-myth-cube@duck.com"
            className="text-nushu-blue whitespace-nowrap hover:underline"
          >
            majority-myth-cube@duck.com
          </a>
        </p>
        <nav aria-label="Source code" className="flex gap-4">
          {links.map(({href, label}) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-nushu-ink-deep transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
