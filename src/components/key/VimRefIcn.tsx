import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = FaIconProps & {
  customShiftCode?: boolean
}

export default function VimRefIcn({customShiftCode: _customShiftCode, ...props}: Props) {
  const {sx, className, ...rest} = props

  return (
    <span className="absolute top-0 right-[5px]">
      <FaIcon className={cn(className)} sx={{fontSize: 14, ...sx}} {...rest} />
    </span>
  )
}

export type {Props as VimRefIcnProps}
