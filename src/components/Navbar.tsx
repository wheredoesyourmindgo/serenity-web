'use client'

import Link from 'next/link'
import ToggleDarkModeBtn from './ToggleDarkModeBtn'
import {cn} from '@/lib/utils'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import {IconMenu2, IconX} from '@tabler/icons-react'
import {AnimatePresence, motion} from 'motion/react'

const navLinks = [
  {href: '/alphas', label: 'Alphas'},
  {href: '/firmware', label: 'Firmware'},
  {href: '/software', label: 'Software'},
  {href: '/misc', label: 'Misc'}
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-solarized-blue dark:bg-solarized-cyan text-solarized-base3 dark:text-solarized-base03 relative z-10">
      <div className="flex h-12 items-center px-4">
        {/* Desktop nav links */}
        <div className="hidden items-center md:flex">
          {navLinks.map(({href, label}) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'rounded px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/15',
                pathname === href && 'bg-white/10'
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded p-1.5 transition-colors hover:bg-white/15 md:hidden"
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
            className="bg-solarized-blue dark:bg-solarized-cyan absolute top-full left-0 right-0 shadow-lg md:hidden"
          >
            {navLinks.map(({href, label}) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'block border-t border-white/10 px-4 py-3 text-sm font-medium transition-colors hover:bg-white/15',
                  pathname === href && 'bg-white/10'
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
