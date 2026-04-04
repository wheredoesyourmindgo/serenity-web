import FaIcon, {FaIconProps} from '@/components/FaIcon'
import {cn} from '@/lib/cn'

type Props = Omit<FaIconProps, 'color' | 'icon'>

export default function TapForceHoldSubIcn({className, ...rest}: Props) {
  return (
    <span className="absolute top-[-6px] left-1/2 -translate-x-1/2">
      <FaIcon
        className={cn('fa-regular fa-angles-down text-[10px]', className)}
        color="solarized.orange"
        {...rest}
      />
    </span>
  )
}

export type {Props as TapForceHoldSubIcnProps}
