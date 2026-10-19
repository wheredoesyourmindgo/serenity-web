import FaIcon, {type FaIconProps} from '@/components/FaIcon'
import {cn} from 'cn'

type Props = Omit<FaIconProps, 'color' | 'icon'>

export default function LongPressSubIcn({className, ...rest}: Props) {
  return (
    <span className="absolute bottom-0 left-1">
      <FaIcon
        className={cn('fa-regular fa-timer text-[10px]', className)}
        color="nushu.orange"
        {...rest}
      />
    </span>
  )
}

export type {Props as LongPressSubIcnProps}
