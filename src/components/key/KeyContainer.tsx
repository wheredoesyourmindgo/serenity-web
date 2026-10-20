'use client'

import type {HTMLAttributes, KeyboardEvent, PointerEvent, ReactNode} from 'react'
import {useId, useRef, useState} from 'react'
import {HoverCard, HoverCardContent, HoverCardTrigger} from '@/components/ui/hover-card'
import {useIsTouchDevice} from '@/hooks/use-is-touch-device'
import {cn} from 'cn'

type Props = HTMLAttributes<HTMLDivElement> & {
  keyId?: string
  popOverContent?: ReactNode | string
  homing?: boolean
  // the popover holds a link, so a mouse has to be able to move onto it and click
  interactivePopover?: boolean
}

export default function KeyContainer({
  children,
  keyId,
  popOverContent,
  homing,
  interactivePopover = false,
  ...rest
}: Props) {
  const {className, style, ...r} = rest
  const isTouchDevice = useIsTouchDevice()

  // useId keeps the id unique when two keys on a layer share a keyId (or have none)
  const popOverId = `${keyId ?? 'key'}-popover-${useId()}`
  // always controlled: touch support is only known after mount, and switching a popover from
  // uncontrolled to controlled then is an error. Hover drives it through onOpenChange.
  const [open, setOpen] = useState(false)
  // pressing a key with a mouse or pen dismisses its popover until the pointer leaves the key, so
  // the hover that's still over it can't bring the popover straight back
  const dismissed = useRef(false)
  // what last pressed the key, since a coarse-pointer device (an iPad, say) can also have a
  // trackpad or mouse, whose clicks the press above already handles
  const pressedBy = useRef('')
  // on touch devices there is no hover, so the key itself toggles the popover
  const toggleOpen = () => setOpen((o) => !o)
  const touchToggleProps =
    popOverContent && isTouchDevice
      ? {
          role: 'button',
          tabIndex: 0,
          'aria-expanded': open,
          onClick: () => {
            if (pressedBy.current !== 'mouse' && pressedBy.current !== 'pen') toggleOpen()
          },
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
      onPointerDown={(e: PointerEvent<HTMLDivElement>) => {
        r.onPointerDown?.(e)
        pressedBy.current = e.pointerType
        // touch keeps its tap toggle
        if (!popOverContent || e.pointerType === 'touch') return
        dismissed.current = true
        setOpen(false)
      }}
      onPointerLeave={(e: PointerEvent<HTMLDivElement>) => {
        r.onPointerLeave?.(e)
        dismissed.current = false
      }}
    >
      {/* overflow fixes issues on mouse hover where partial icons can disappear, ex. backspace icon */}
      <div className="overflow-visible">{children}</div>
    </div>
  )

  if (!popOverContent) {
    return trigger
  }

  return (
    <HoverCard
      open={open}
      onOpenChange={(next, {reason}) => {
        if (next && reason === 'trigger-hover' && dismissed.current) return
        setOpen(next)
      }}
    >
      {/* an interactive popover waits a moment before closing, so the pointer can cross the gap */}
      <HoverCardTrigger delay={0} closeDelay={interactivePopover ? 150 : 0} render={trigger} />
      <HoverCardContent
        id={popOverId}
        side="top"
        align="start"
        alignOffset={0}
        sideOffset={4}
        // a mouse can't catch the card (unless it's interactive), so leaving the key closes it; on
        // touch a tap on the card closes it, rather than falling through to the key beneath and
        // opening that one's
        className={cn(
          'ring-foreground/15 w-max max-w-sm p-0.5',
          !isTouchDevice && !interactivePopover && 'pointer-events-none'
        )}
        onClick={isTouchDevice ? () => setOpen(false) : undefined}
      >
        {popOverContent}
      </HoverCardContent>
    </HoverCard>
  )
}

export type {Props as KeyContainerProps}
