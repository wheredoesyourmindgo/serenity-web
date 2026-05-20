import FaIcon, {FaIconProps} from '@/components/FaIcon'
import {cn} from '@/lib/cn'

type Props = Omit<FaIconProps, 'icon'>

export default function ShiftSubIcn({className, color, ...rest}: Props) {
  return (
    <span className="absolute top-[-2px] right-[5px]">
      <FaIcon className={cn('text-[14px]', className)} color={color ?? 'solarized.violet'} {...rest} />
    </span>
  )
}

export type {Props as ShiftSubIcnProps}
