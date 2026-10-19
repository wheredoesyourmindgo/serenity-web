import FaIcon, {FaIconProps} from '@/components/FaIcon'
import {cn} from 'cn'

type Props = Omit<FaIconProps, 'color' | 'icon'>

export default function ReqSetupSubLgnd(props: Props) {
  const {className, ...rest} = props
  return (
    <span className="absolute -top-1 left-1.5">
      <FaIcon
        className={cn('fa-regular fa-wrench-simple text-[10px]', className)}
        color="nushu.magenta"
        {...rest}
      />
    </span>
  )
}

export type {Props as ReqSetupSubLgndProps}
