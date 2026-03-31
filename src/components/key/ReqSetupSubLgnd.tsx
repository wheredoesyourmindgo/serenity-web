import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = Partial<FaIconProps>

export default function ReqSetupSubLgnd(props: Props) {
  const {sx, className, ...rest} = props
  return (
    <span className="absolute top-[-4px] left-1.5">
      <FaIcon
        className={cn('fa-regular fa-wrench-simple', className)}
        color="solarized.magenta"
        sx={{fontSize: 10, ...sx}}
        {...rest}
      />
    </span>
  )
}
