import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'

type Props = Omit<FaIconProps, 'color' | 'icon'>

export default function VimRefIcn({className, ...rest}: Props) {
  return (
    <span className="absolute top-0 right-[5px]">
      <FaIcon className={cn('text-[14px]', className)} {...rest} />
    </span>
  )
}

export type {Props as VimRefIcnProps}
