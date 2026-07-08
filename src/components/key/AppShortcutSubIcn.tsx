import FaIcon, {FaIconProps} from '@/components/FaIcon'
import {cn} from '@/lib/utils'

type Props = Omit<FaIconProps, 'sx' | 'className' | 'color'> & {
  className?: string
  iconClassName?: string
}

export default function AppShortcutSubIcn({className, iconClassName, ...rest}: Props) {
  return (
    <span className={cn('absolute -top-[5px] left-2.5', className)}>
      <FaIcon
        className={cn('fa-regular fa-browser -translate-x-1/2 text-[9px]', iconClassName)}
        color="solarized.blue"
        {...rest}
      />
    </span>
  )
}

export type {Props as AppSubIcnProps}
