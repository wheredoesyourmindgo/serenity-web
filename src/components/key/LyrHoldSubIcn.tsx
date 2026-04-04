import FaIcon, {FaIconProps} from '@/components/FaIcon'
import {cn} from '@/lib/cn'

type Props = Omit<FaIconProps, 'color' | 'icon'>

export default function LyrHoldSubIcn({className, ...rest}: Props) {
  return (
    <span className="absolute right-[3px] bottom-px">
      <FaIcon className={cn('text-[12px]', className)} color="solarized.green" {...rest} />
    </span>
  )
}

export type {Props as LyrHoldSubIcnProps}
