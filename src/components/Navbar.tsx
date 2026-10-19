'use client'

import Link from 'next/link'
import ToggleDarkModeBtn from './ToggleDarkModeBtn'
import {cn} from 'cn'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import {IconMenu2, IconX} from '@tabler/icons-react'
import {AnimatePresence, motion} from 'motion/react'

const navLinks = [
  {href: '/why', label: 'Why'},
  {href: '/layout', label: 'Layout'},
  {href: '/firmware', label: 'Firmware'},
  {href: '/software', label: 'Software'},
  {href: '/extras', label: 'Extras'}
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-card text-nushu-ink-strong border-border relative z-10 border-b">
      <div className="flex h-12 items-center px-4">
        {/* Mobile hamburger */}
        <button
          type="button"
          className="hover:bg-accent hover:text-nushu-ink-deep mr-1 rounded p-1.5 transition-colors md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen ? 'true' : 'false'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={{opacity: 0, rotate: -90, scale: 0.7}}
              animate={{opacity: 1, rotate: 0, scale: 1}}
              exit={{opacity: 0, rotate: 90, scale: 0.7}}
              transition={{duration: 0.15}}
              className="flex"
            >
              {menuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* Wordmark, links home; on mobile the homepage hero already names the site */}
        <Link
          href="/"
          aria-current={pathname === '/' ? 'page' : undefined}
          onClick={() => setMenuOpen(false)}
          className={cn(
            "font-body text-nushu-yellow mr-3 rounded px-2 py-1 font-features-['ss02'_on] text-lg font-medium italic transition-opacity hover:opacity-80 md:mr-4",
            pathname === '/' && 'hidden md:inline'
          )}
        >
          Serenity
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center md:flex">
          {navLinks.map(({href, label}) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'hover:bg-accent hover:text-nushu-ink-deep rounded px-3 py-1.5 text-sm font-medium transition-colors',
                pathname === href && 'bg-accent/60 text-nushu-blue'
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex-1" />
        <div className="shrink-0">
          <ToggleDarkModeBtn />
        </div>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{opacity: 0, y: -6}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -6}}
            transition={{duration: 0.18, ease: 'easeOut'}}
            className="bg-card border-border absolute top-full right-0 left-0 border-b shadow-lg md:hidden"
          >
            {navLinks.map(({href, label}) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'border-border hover:bg-accent hover:text-nushu-ink-deep block border-t px-4 py-3 text-sm font-medium transition-colors',
                  pathname === href && 'bg-accent/60 text-nushu-blue'
                )}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
