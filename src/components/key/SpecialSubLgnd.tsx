import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = Partial<FaIconProps>

export default function SpecialSubLgnd(props: Props) {
  const {sx, className, ...rest} = props
  return (
    <span className="absolute top-[-6px] left-1.5">
      <FaIcon
        className={cn('fa-regular fa-asterisk', className)}
        color="solarized.red"
        sx={{fontSize: 9, ...sx}}
        {...rest}
      />
    </span>
  )
}
