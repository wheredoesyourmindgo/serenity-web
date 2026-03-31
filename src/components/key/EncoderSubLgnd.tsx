import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = Omit<Partial<FaIconProps>, 'sx' | 'className' | 'color'> & {
  className?: string
  iconClassName?: string
}

export default function EncoderSubLgnd({className, iconClassName, ...rest}: Props) {
  return (
    <span className={cn('absolute top-[6px] left-[7px] z-0', className)}>
      <FaIcon
        className={cn('fa-regular fa-circle-dashed text-[40px] opacity-50', iconClassName)}
        color="solarized.base1"
        {...rest}
      />
    </span>
  )
}
