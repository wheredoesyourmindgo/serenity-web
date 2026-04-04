import FaIcon, {FaIconProps} from '@/components/FaIcon'
import {cn} from '@/lib/cn'

type Props = Omit<FaIconProps, 'color' | 'icon'>

export default function ShiftSubIcn({className, ...rest}: Props) {
  return (
    <span className="absolute top-[-2px] right-[5px]">
      <FaIcon className={cn('text-[14px]', className)} color="solarized.violet" {...rest} />
    </span>
  )
}

export type {Props as ShiftSubIcnProps}
