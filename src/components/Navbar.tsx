'use client'

import Link from 'next/link'
import ToggleDarkModeBtn from './ToggleDarkModeBtn'
import {cn} from '@/lib/cn'
import {usePathname} from 'next/navigation'

const navLinks = [
  {href: '/alphas', label: 'Alphas'},
  {href: '/firmware', label: 'Firmware'},
  {href: '/software', label: 'Software'},
  {href: '/misc', label: 'Misc'}
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="bg-solarized-blue dark:bg-solarized-cyan text-solarized-base3 dark:text-solarized-base03 relative z-10">
      <div className="flex h-12 items-center px-4">
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
        <div className="flex-1" />
        <ToggleDarkModeBtn />
      </div>
    </header>
  )
}
