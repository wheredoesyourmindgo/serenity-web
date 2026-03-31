import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = FaIconProps

export default function TapForceHoldSubIcn({sx, className, ...rest}: Props) {
  return (
    <span className="absolute top-[-6px] left-1/2">
      <FaIcon
        className={cn('fa-regular fa-angles-down', className)}
        color="solarized.orange"
        sx={{
          fontSize: 10,
          transform: 'translateX(-50%)',
          ...sx
        }}
        {...rest}
      />
    </span>
  )
}

export type {Props as TapForceHoldSubIcnProps}
