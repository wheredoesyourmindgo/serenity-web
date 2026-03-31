'use client'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
import {cn} from '@lib/cn'
import {useTheme, type SxProps, type Theme} from '@mui/material/styles'
import type {CSSProperties, HTMLAttributes} from 'react'

type Props = Omit<HTMLAttributes<HTMLElement>, 'color'> & {
  color?: string
  icon?: FontAwesomeIconProps['icon']
  rotation?: number
  sx?: SxProps<Theme>
}

function resolveColorToken(theme: Theme, color?: string) {
  if (!color || !color.includes('.')) {
    return color
  }

  const path = color.split('.')

  for (const paletteSource of [theme.vars?.palette, theme.palette]) {
    let value: unknown = paletteSource

    for (const segment of path) {
      value =
        typeof value === 'object' && value !== null
          ? (value as Record<string, unknown>)[segment]
          : undefined
    }

    if (typeof value === 'string') {
      return value
    }
  }

  return color
}

function sxToInlineStyle(theme: Theme, sx: SxProps<Theme> | undefined): CSSProperties {
  if (!sx) {
    return {}
  }

  const resolved = theme.unstable_sx(sx)

  return Object.fromEntries(
    Object.entries(resolved).filter(([, value]) => value == null || typeof value !== 'object')
  ) as CSSProperties
}

export default function FaIcon(props: Props) {
  const theme = useTheme()
  const {sx, style, color, rotation, icon, className, ...rest} = props
  const sxStyle = sxToInlineStyle(theme, sx)
  const {transform: sxTransform, ...restSxStyle} = sxStyle
  const incomingTransform = typeof sxTransform === 'string' ? sxTransform : undefined
  const transformWithSpace = incomingTransform ? `${incomingTransform} ` : ''
  const resolvedColor = resolveColorToken(theme, color)
  const iconStyle: CSSProperties = {
    fontSize: 'inherit',
    overflow: 'visible',
    transform: incomingTransform,
    ...(typeof rotation === 'number' && {
      transform: `${transformWithSpace}rotate(${rotation}deg)`,
      transformOrigin: 'center'
    }),
    ...(resolvedColor && {color: resolvedColor}),
    ...restSxStyle,
    ...style
  }

  if (icon) {
    return (
      <span className="inline-flex" {...rest}>
        <FontAwesomeIcon icon={icon} className={cn(className)} style={iconStyle} />
      </span>
    )
  }

  return (
    <span className="inline-flex" {...rest}>
      <i className={cn(className)} style={iconStyle} />
    </span>
  )
}

export type {Props as FaIconProps}
