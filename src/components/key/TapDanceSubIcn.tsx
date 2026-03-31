import FaIcon, {type FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = FaIconProps

export default function TapDanceSubIcn({sx, className, ...rest}: Props) {
  return (
    <span className="absolute bottom-[-5px] left-1">
      <FaIcon
        className={cn('fa-regular fa-ellipsis', className)}
        color="solarized.orange"
        sx={{fontSize: 14, ...sx}}
        {...rest}
      />
    </span>
  )
}

export type {Props as TapDanceSubIcnProps}
