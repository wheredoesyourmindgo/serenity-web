import FaIcon, {type FaIconProps} from '@/components/FaIcon'
import {cn} from '@/lib/cn'

type Props = Omit<FaIconProps, 'color' | 'icon'>

export default function TapDanceSubIcn({className, ...rest}: Props) {
  return (
    <span className="absolute bottom-[-5px] left-1">
      <FaIcon
        className={cn('fa-regular fa-ellipsis text-[14px]', className)}
        color="solarized.orange"
        {...rest}
      />
    </span>
  )
}

export type {Props as TapDanceSubIcnProps}
