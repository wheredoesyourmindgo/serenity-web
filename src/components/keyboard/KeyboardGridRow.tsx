import type {HTMLAttributes} from 'react'
import {cn} from '@/lib/utils'

type Props = HTMLAttributes<HTMLDivElement>

export default function KeyboardGridRow({children, className, ...rest}: Props) {
  return (
    <div className={cn('flex max-w-full flex-nowrap gap-2', className)} data-row {...rest}>
      {children}
    </div>
  )
}
