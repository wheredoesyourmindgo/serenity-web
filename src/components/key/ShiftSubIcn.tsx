import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = FaIconProps

export default function ShiftSubIcn({sx, className, ...rest}: Props) {
  return (
    <span className="absolute top-[-2px] right-[5px]">
      <FaIcon
        className={cn(className)}
        color="solarized.violet"
        sx={{fontSize: 14, ...sx}}
        {...rest}
      />
    </span>
  )
}

export type {Props as ShiftSubIcnProps}
