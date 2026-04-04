'use client'

import type {CSSProperties, HTMLAttributes, ReactNode} from 'react'
import withAlpha from 'color-alpha'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/animate-ui/components/radix/hover-card'
import {useColorScheme} from '@mui/material'
import {type SxProps, useTheme, type Theme} from '@mui/material/styles'
import {cn} from '@/lib/cn'
import {sxToInlineStyle} from '@/lib/sxToInlineStyle'

type Props = HTMLAttributes<HTMLDivElement> & {
  keyId?: string
  popOverContent?: ReactNode | string
  homing?: boolean
  sx?: SxProps<Theme>
}

export default function KeyContainer({children, keyId, popOverContent, homing, ...rest}: Props) {
  const {sx, className, style, ...r} = rest
  const theme = useTheme()
  const scheme = useColorScheme()
  const darkMode = scheme.mode === 'dark'
  const sxStyle = sxToInlineStyle(theme, sx)
  const containerStyle: CSSProperties = {
    borderColor: withAlpha(theme.palette.solarized.base1, 0.4),
    // https://getcssscan.com/css-box-shadow-examples #14 edit
    boxShadow:
      'rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.1) 0px -2px 6px 0px inset',
    ...(darkMode && {
      boxShadow:
        'rgba(205, 205, 51, 0.05) 0px 50px 100px -20px, rgba(255, 255, 255, 0.1) 0px 30px 60px -30px, rgba(245, 218, 162, 0.1) 0px -2px 6px 0px inset'
    }),
    ...(homing && {
      background: `radial-gradient(circle farthest-side, ${withAlpha(theme.palette.solarized.base0, 0.2)}, ${theme.palette.background.default})`,
      backgroundRepeat: 'no-repeat'
    }),
    ...sxStyle,
    ...style
  }
  const popOverId = keyId ? `${keyId}-popover` : 'mouse-over-popover'
  const trigger = (
    <div
      className={cn(
        'relative flex aspect-square w-[55px] items-center justify-center rounded border p-2',
        popOverContent && 'cursor-pointer',
        className
      )}
      style={containerStyle}
      aria-describedby={popOverContent ? popOverId : undefined}
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
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent
        id={popOverId}
        side="top"
        align="start"
        sideOffset={6}
        className="pointer-events-none w-max max-w-[24rem] p-3"
      >
        {popOverContent}
      </HoverCardContent>
    </HoverCard>
  )
}

export type {Props as KeyContainerProps}
