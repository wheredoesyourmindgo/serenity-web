import {Typography, type TypographyProps} from '@/components/ui/typography'
import {cn} from '@/lib/cn'

type Props = Omit<TypographyProps, 'variant' | 'as'>

export default function VimRefLgnd({children, ...props}: Props) {
  const {className, ...rest} = props

  return (
    <span className="absolute top-[-2px] right-1.5">
      <Typography
        as="span"
        variant="subtitle2"
        className={cn('text-muted-foreground italic', className)}
        {...rest}
      >
        {children}
      </Typography>
    </span>
  )
}

export type {Props as VimRefLgndProps}
