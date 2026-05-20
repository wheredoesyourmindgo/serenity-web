'use client'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
import {cn} from '@/lib/cn'
import {colorTokenToCssValue} from '@/lib/colorToken'
import type {HTMLAttributes} from 'react'

type Props = Omit<HTMLAttributes<HTMLElement>, 'color'> & {
  color?: string
  icon?: FontAwesomeIconProps['icon']
  rotation?: number
}

type IconStyle = React.CSSProperties & {
  '--fa-icon-color'?: string
  '--fa-icon-transform'?: string
}

export default function FaIcon(props: Props) {
  const {style, color, rotation, icon, className, ...rest} = props
  const resolvedColor = colorTokenToCssValue(color)
  const computedTransform =
    typeof rotation === 'number' ? `rotate(${rotation}deg)` : undefined

  const iconStyle: IconStyle = {
    ...(resolvedColor && {'--fa-icon-color': resolvedColor}),
    ...(computedTransform && {'--fa-icon-transform': computedTransform}),
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
