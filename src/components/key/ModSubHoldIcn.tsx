import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = FaIconProps

export default function ModSubHoldIcn({sx, className, ...rest}: Props) {
  return (
    <span className="absolute right-[3px] bottom-px">
      <FaIcon
        className={cn(className)}
        color="solarized.yellow"
        sx={{fontSize: 12, ...sx}}
        {...rest}
      />
    </span>
  )
}

export type {Props as ModSubHoldIcnProps}
