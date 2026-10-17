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
    <div className="text-nushu-ink-muted flex items-center gap-2">
      <ThemeIcon className="size-4 shrink-0" stroke={1.9} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => {
          const next = checked ? 'dark' : 'light'
          setTheme(next === systemTheme ? 'system' : next)
        }}
        aria-label="Dark mode"
        className="data-checked:bg-nushu-ink-muted data-unchecked:bg-nushu-ink-muted dark:data-unchecked:bg-nushu-ink-muted"
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
