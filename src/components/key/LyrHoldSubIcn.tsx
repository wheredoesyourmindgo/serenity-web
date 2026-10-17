import FaIcon, {FaIconProps} from '@/components/FaIcon'
import {cn} from '@/lib/utils'

type Props = Omit<FaIconProps, 'color' | 'icon'>

export default function LyrHoldSubIcn({className, ...rest}: Props) {
  return (
    <span className="absolute right-[3px] bottom-px">
      <FaIcon className={cn('text-[12px]', className)} color="nushu.green" {...rest} />
    </span>
  )
}

export type {Props as LyrHoldSubIcnProps}
