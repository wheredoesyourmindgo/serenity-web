import FaIcon, {FaIconProps} from '@/components/FaIcon'
import {cn} from '@/lib/cn'

type Props = Omit<FaIconProps, 'icon'>

export default function VimRefIcn({className, color, ...rest}: Props) {
  return (
    <span className="absolute top-0 right-[5px]">
      <FaIcon className={cn('text-[14px]', className)} color={color} {...rest} />
    </span>
  )
}

export type {Props as VimRefIcnProps}
