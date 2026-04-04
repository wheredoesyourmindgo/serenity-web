import FaIcon, {FaIconProps} from '@/components/FaIcon'
import {cn} from '@/lib/cn'

type Props = Omit<FaIconProps, 'color' | 'icon'>

export default function SpecialSubLgnd(props: Props) {
  const {className, ...rest} = props
  return (
    <span className="absolute top-[-6px] left-1.5">
      <FaIcon
        className={cn('fa-regular fa-asterisk text-[9px]', className)}
        color="solarized.red"
        {...rest}
      />
    </span>
  )
}

export type {Props as SpecialSubLgndProps}
