'use client'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
import {cn} from '@/lib/cn'
import {colorTokenToCssValue} from '@/lib/colorToken'
import {sxToInlineStyle} from '@/lib/sxToInlineStyle'
import {useTheme, type SxProps, type Theme} from '@mui/material/styles'
import type {CSSProperties, HTMLAttributes} from 'react'

type Props = Omit<HTMLAttributes<HTMLElement>, 'color'> & {
  color?: string
  icon?: FontAwesomeIconProps['icon']
  rotation?: number
  sx?: SxProps<Theme>
}

type IconStyle = CSSProperties & {
  '--fa-icon-color'?: string
  '--fa-icon-transform'?: string
}

export default function FaIcon(props: Props) {
  const theme = useTheme()
  const {sx, style, color, rotation, icon, className, ...rest} = props
  const sxStyle = sxToInlineStyle(theme, sx)
  const {transform: sxTransform, ...restSxStyle} = sxStyle
  const incomingTransform = typeof sxTransform === 'string' ? sxTransform : undefined
  const transformWithSpace = incomingTransform ? `${incomingTransform} ` : ''
  const resolvedColor = colorTokenToCssValue(color)
  const computedTransform =
    typeof rotation === 'number' ? `${transformWithSpace}rotate(${rotation}deg)` : incomingTransform

  const iconStyle: IconStyle = {
    ...(resolvedColor && {'--fa-icon-color': resolvedColor}),
    ...(computedTransform && {'--fa-icon-transform': computedTransform}),
    ...restSxStyle,
    ...style
  }

  const iconClassName = cn(
    'overflow-visible text-inherit',
    resolvedColor && 'text-[var(--fa-icon-color)]',
    computedTransform && '[transform:var(--fa-icon-transform)]',
    typeof rotation === 'number' && 'origin-center',
    className
  )

  if (icon) {
    return (
      <span className="inline-flex" {...rest}>
        <FontAwesomeIcon icon={icon} className={iconClassName} style={iconStyle} />
      </span>
    )
  }

  return (
    <span className="inline-flex" {...rest}>
      <i className={iconClassName} style={iconStyle} />
    </span>
  )
}

export type {Props as FaIconProps}
