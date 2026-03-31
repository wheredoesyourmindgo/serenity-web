import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = FaIconProps & {
  customShiftCode?: boolean
}

export default function LyrSubIcn({customShiftCode: _customShiftCode, ...props}: Props) {
  const {sx, className, ...rest} = props

  return (
    <span className="absolute right-1 bottom-0">
      <FaIcon className={cn(className)} sx={{fontSize: 12, ...sx}} {...rest} />
    </span>
  )
}

export type {Props as HoldSubIcnProps}
