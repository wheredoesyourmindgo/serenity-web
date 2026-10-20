'use client'

import {useEffect, useRef, useState} from 'react'
import FaIcon from '@/components/FaIcon'
import {cn} from 'cn'

export type PageNavItem = {id: string; label: string; icon?: string}

/*
 * A page's sections as a row of chips in a keycap-like capsule that sticks just below the top of
 * the window, so a long page can be jumped around without scrolling back up. No bar or rule: the
 * capsule floats over the page, and lifts with a deeper shadow once it's stuck and text scrolls
 * under it. The chip for the section being read is lit: the last section whose top has passed a
 * line a fifth of the way down the window. On a phone the chips scroll sideways inside the
 * capsule rather than wrapping, so it stays one line tall.
 */
export default function PageNav({items}: {items: PageNavItem[]}) {
  const [active, setActive] = useState<string>()
  const [stuck, setStuck] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    const update = () => {
      const line = window.innerHeight / 5
      const passed = sections.filter((el) => el.getBoundingClientRect().top <= line)
      setActive(passed.at(-1)?.id)
      // sticky's top-3 is 12px; at or above it, the capsule is riding over the page
      setStuck((navRef.current?.getBoundingClientRect().top ?? Infinity) <= 12)
    }
    update()
    window.addEventListener('scroll', update, {passive: true})
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [items])

  return (
    <nav
      ref={navRef}
      aria-label="On this page"
      // the full-width wrapper lets clicks through, so only the capsule itself blocks the page
      className="pointer-events-none sticky top-3 z-20 mb-8 flex justify-center px-4"
    >
      <ul
        className={cn(
          'pointer-events-auto flex max-w-full scrollbar-none gap-1 overflow-x-auto rounded-full bg-(--key-face) p-1 transition-shadow duration-200',
          stuck ? 'shadow-(--key-shadow-hover)' : 'shadow-(--key-shadow)'
        )}
      >
        {items.map((item) => {
          const isActive = item.id === active
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm whitespace-nowrap transition-colors',
                  isActive
                    ? 'text-nushu-blue bg-nushu-blue/10'
                    : 'text-nushu-ink-muted hover:text-nushu-ink-deep hover:bg-accent/60'
                )}
              >
                {/* hidden on phones so every chip fits; on the span, since Font Awesome's own
                    display rule outranks a hidden class on the icon */}
                {item.icon && (
                  <span className="max-sm:hidden">
                    <FaIcon
                      className={cn(item.icon, 'text-[0.9em]')}
                      color={isActive ? 'nushu.blue' : 'nushu.ink-faint'}
                    />
                  </span>
                )}
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
