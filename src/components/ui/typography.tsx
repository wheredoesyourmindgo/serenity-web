'use client'

import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/lib/utils'
import {colorTokenToCssValue} from '@/lib/colorToken'
import type {CSSProperties, ElementType, HTMLAttributes} from 'react'

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-[6rem]/[1.167] font-light tracking-[-0.01562em]',
      h2: 'text-[3.75rem]/[1.2] font-light tracking-[-0.00833em]',
      h3: 'text-[3rem]/[1.167] font-normal',
      h4: 'text-[2.125rem]/[1.235] font-normal tracking-[0.00735em]',
      h5: 'text-[1.5rem]/[1.334] font-normal',
      h6: 'text-[1.25rem]/[1.6] font-medium tracking-[0.0075em]',
      subtitle1: 'text-base/[1.75] font-normal tracking-[0.00938em]',
      subtitle2: 'text-sm/[1.57] font-medium tracking-[0.00714em]',
      body1: 'text-base/[1.5] font-normal tracking-[0.00938em]',
      body2: 'text-sm/[1.43] font-normal tracking-[0.01071em]',
      button: 'text-sm/[1.75] font-medium tracking-[0.02857em] uppercase',
      caption: 'text-xs/[1.66] font-normal tracking-[0.03333em]',
      overline: 'text-xs/[2.66] font-normal tracking-[0.08333em] uppercase',
      inherit: ''
    }
  },
  defaultVariants: {
    variant: 'body1'
  }
})

type Props = HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: ElementType
    color?: string
  }

export function Typography({as: Comp = 'p', className, variant, color, style, ...rest}: Props) {
  const resolvedStyle: CSSProperties = {
    ...(color && {color: colorTokenToCssValue(color)}),
    ...style
  }

  return (
    <Comp
      className={cn(typographyVariants({variant}), className)}
      style={resolvedStyle}
      {...rest}
    />
  )
}

export {typographyVariants}
export type {Props as TypographyProps}
