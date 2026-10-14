'use client'

import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip'
import {Switch} from '@/components/ui/switch'
import {IconMoon, IconSun} from '@tabler/icons-react'
import {useIsTouchDevice} from '@/hooks/use-is-touch-device'
import {useTheme as useNextTheme} from 'next-themes'

export default function ToggleDarkModeBtn() {
  const {resolvedTheme, systemTheme, setTheme} = useNextTheme()
  const isTouchDevice = useIsTouchDevice()
  const isDark = resolvedTheme === 'dark'
  const ThemeIcon = isDark ? IconMoon : IconSun

  const control = (
    <div className="flex items-center gap-2 text-white/85 dark:text-white/65">
      <ThemeIcon className="size-4 shrink-0" stroke={1.9} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => {
          const next = checked ? 'dark' : 'light'
          setTheme(next === systemTheme ? 'system' : next)
        }}
        aria-label="Dark mode"
        className="border-white/20 backdrop-blur-sm data-checked:bg-black/30 data-unchecked:bg-white/12 dark:border-black/15 dark:data-checked:bg-black/35 dark:data-unchecked:bg-white/10"
      />
    </div>
  )

  if (isTouchDevice) {
    return control
  }

  return (
    <Tooltip>
      <TooltipTrigger delay={250} closeDelay={100} render={control} />
      <TooltipContent side="bottom" align="end">
        <ThemeIcon className="size-3.5" stroke={1.8} aria-hidden="true" />
        <span>{isDark ? "Light's out!" : "Light's on!"}</span>
      </TooltipContent>
    </Tooltip>
  )
}
