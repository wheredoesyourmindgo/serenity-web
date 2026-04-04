'use client'

import {Typography, type TypographyProps} from '@/components/ui/typography'

type Props = Omit<TypographyProps, 'variant' | 'as'> & {
  color?: string
}

export default function ShiftSubLgnd({children, ...props}: Props) {
  return (
    <span className="absolute top-[-2px] right-1.5">
      <Typography as="span" variant="subtitle2" {...props}>
        {children}
      </Typography>
    </span>
  )
}

export type {Props as ShiftSubLgndProps}
