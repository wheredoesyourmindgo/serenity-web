'use client'

import type {HTMLAttributes, KeyboardEvent, ReactNode} from 'react'
import {useState} from 'react'
import {HoverCard, HoverCardContent, HoverCardTrigger} from '@/components/ui/hover-card'
import {useIsTouchDevice} from '@/hooks/use-is-touch-device'
import {cn} from '@/lib/utils'

type Props = HTMLAttributes<HTMLDivElement> & {
  keyId?: string
  popOverContent?: ReactNode | string
  homing?: boolean
}

export default function KeyContainer({children, keyId, popOverContent, homing, ...rest}: Props) {
  const {className, style, ...r} = rest
  const isTouchDevice = useIsTouchDevice()
  const [touchOpen, setTouchOpen] = useState(false)

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
        // keycap face, edge, lip and shadow come from the --key-* tokens in globals.css
        'relative flex h-[55px] w-[55px] items-center justify-center rounded-md border p-2',
        'border-(--key-border) bg-(--key-face) shadow-(--key-shadow)',
        // layout moves (Corne split, fades) and hover lift share one transition list
        '[transition:var(--key-layout-transition)]',
        popOverContent &&
          'cursor-pointer hover:border-(--key-border-hover) hover:shadow-(--key-shadow-hover) motion-safe:hover:-translate-y-px',
        // homing keys get a small bump along the bottom, like the nubs on F and J
        homing &&
          'after:absolute after:bottom-[7px] after:left-1/2 after:h-[2px] after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-(--key-homing)',
        className
      )}
      style={style}
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
    <HoverCard {...touchOpenProps}>
      <HoverCardTrigger delay={0} closeDelay={0} render={trigger} />
      <HoverCardContent
        id={popOverId}
        side="top"
        align="start"
        alignOffset={0}
        sideOffset={4}
        className="ring-foreground/15 pointer-events-none w-max max-w-sm p-0.5"
      >
        {popOverContent}
      </HoverCardContent>
    </HoverCard>
  )
}

export type {Props as KeyContainerProps}
