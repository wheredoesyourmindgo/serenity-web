'use client'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/animate-ui/components/radix/hover-card'
import {Switch} from '@/components/animate-ui/components/radix/switch'
import {IconMoon, IconSun} from '@tabler/icons-react'
import {useIsTouchDevice} from '@/hooks/use-is-touch-device'
import {useTheme as useNextTheme} from 'next-themes'

export default function ToggleDarkModeBtn() {
  const {resolvedTheme, setTheme} = useNextTheme()
  const isTouchDevice = useIsTouchDevice()
  const isDark = resolvedTheme === 'dark'
  const ThemeIcon = isDark ? IconMoon : IconSun

  const control = (
    <div className="flex items-center gap-2 text-white/85 dark:text-white/65">
      <ThemeIcon className="size-4 shrink-0" stroke={1.9} />
      <span className="sr-only">Toggle color mode</span>
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => {
          setTheme(checked ? 'dark' : 'light')
        }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        pressedWidth={18}
        className="h-7 w-12 rounded-full border border-white/20 bg-white/12 px-0.5 shadow-none backdrop-blur-sm data-[state=checked]:bg-black/30 data-[state=unchecked]:bg-white/12 dark:border-black/15 dark:data-[state=checked]:bg-black/35 dark:data-[state=unchecked]:bg-white/10"
      />
    </div>
  )

  if (isTouchDevice) {
    return control
  }

  return (
    <HoverCard openDelay={250} closeDelay={100}>
      <HoverCardTrigger asChild>{control}</HoverCardTrigger>

      <HoverCardContent side="bottom" align="end" className="w-auto min-w-34 p-3">
        <div className="flex items-center gap-2 text-sm">
          {isDark ? (
            <IconMoon className="size-3.5" stroke={1.8} />
          ) : (
            <IconSun className="size-3.5" stroke={1.8} />
          )}
          <span>{isDark ? "Light's out!" : "Light's on!"}</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
