import FaIcon, {FaIconProps} from '@/components/FaIcon'
import {cn} from '@/lib/utils'

type Props = FaIconProps & {
  customShiftCode?: boolean
}

export default function LyrSubIcn({customShiftCode: _customShiftCode, ...props}: Props) {
  const {className, ...rest} = props

  return (
    <span className="absolute right-1 bottom-0">
      <FaIcon className={cn('text-[12px]', className)} {...rest} />
    </span>
  )
}

export type {Props as HoldSubIcnProps}
