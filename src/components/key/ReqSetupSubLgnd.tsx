import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = Omit<FaIconProps, 'color' | 'icon'>

export default function ReqSetupSubLgnd(props: Props) {
  const {className, ...rest} = props
  return (
    <span className="absolute top-[-4px] left-1.5">
      <FaIcon
        className={cn('fa-regular fa-wrench-simple text-[10px]', className)}
        color="solarized.magenta"
        {...rest}
      />
    </span>
  )
}

export type {Props as ReqSetupSubLgndProps}
