import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = FaIconProps

export default function LyrHoldSubIcn({sx, className, ...rest}: Props) {
  return (
    <span className="absolute right-[3px] bottom-px">
      <FaIcon
        className={cn(className)}
        color="solarized.green"
        sx={{fontSize: 12, ...sx}}
        {...rest}
      />
    </span>
  )
}

export type {Props as LyrHoldSubIcnProps}
