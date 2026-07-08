'use client'

import type {CSSProperties, HTMLAttributes, KeyboardEvent, ReactNode} from 'react'
import {useState} from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/animate-ui/components/radix/hover-card'
import {useIsTouchDevice} from '@/hooks/use-is-touch-device'
import {useTheme} from 'next-themes'
import {cn} from '@/lib/utils'

type Props = HTMLAttributes<HTMLDivElement> & {
  keyId?: string
  popOverContent?: ReactNode | string
  homing?: boolean
}

export default function KeyContainer({children, keyId, popOverContent, homing, ...rest}: Props) {
  const {className, style, ...r} = rest
  const {resolvedTheme} = useTheme()
  const darkMode = resolvedTheme === 'dark'
  const isTouchDevice = useIsTouchDevice()
  const [touchOpen, setTouchOpen] = useState(false)

  const containerStyle: CSSProperties = {
    borderColor: 'color-mix(in srgb, var(--solarized-base1) 40%, transparent)',
    // https://getcssscan.com/css-box-shadow-examples #14 edit
    boxShadow: darkMode
      ? 'rgba(205, 205, 51, 0.05) 0px 50px 100px -20px, rgba(255, 255, 255, 0.1) 0px 30px 60px -30px, rgba(245, 218, 162, 0.1) 0px -2px 6px 0px inset'
      : 'rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.1) 0px -2px 6px 0px inset',
    ...(homing && {
      background: `radial-gradient(circle farthest-side, color-mix(in srgb, var(--solarized-base0) 20%, transparent), var(--background))`,
      backgroundRepeat: 'no-repeat'
    }),
    ...style
  }
  const popOverId = keyId ? `${keyId}-popover` : 'mouse-over-popover'
  const touchOpenProps = isTouchDevice ? {open: touchOpen, onOpenChange: setTouchOpen} : {}
  // on touch devices there is no hover, so the key itself toggles the popover
  const toggleOpen = () => setTouchOpen((o) => !o)
  const touchToggleProps =
    popOverContent && isTouchDevice
      ? {
          role: 'button',
          tabIndex: 0,
          'aria-expanded': touchOpen,
          onClick: toggleOpen,
          onKeyDown: (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleOpen()
            }
          }
        }
      : {}
  const trigger = (
    <div
      className={cn(
        'relative flex h-[55px] w-[55px] items-center justify-center rounded border p-2',
        popOverContent && 'cursor-pointer',
        className
      )}
      style={containerStyle}
      aria-describedby={popOverContent ? popOverId : undefined}
      {...touchToggleProps}
      {...r}
    >
      {/* overflow fixes issues on mouse hover where partial icons can disappear, ex. backspace icon */}
      <div className="overflow-visible">{children}</div>
    </div>
  )

  if (!popOverContent) {
    return trigger
  }

  return (
    <HoverCard openDelay={0} closeDelay={0} {...touchOpenProps}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent
        id={popOverId}
        side="top"
        align="start"
        sideOffset={4}
        className="pointer-events-none w-max max-w-sm p-0.5"
      >
        {popOverContent}
      </HoverCardContent>
    </HoverCard>
  )
}

export type {Props as KeyContainerProps}
