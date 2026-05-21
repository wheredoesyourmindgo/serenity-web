import {Typography} from '@/components/ui/typography'

type Props = {action: string; output: string}

export default function PopoverDesc({action, output}: Props) {
  return (
    <>
      <Typography
        as="span"
        color="text.primary"
        variant="body2"
        className="pr-3 text-sm leading-relaxed"
      >
        <em>{action}</em>
      </Typography>
      <Typography
        as="span"
        variant="body1"
        color="text.secondary"
        className="text-sm leading-relaxed"
      >
        {output}
      </Typography>
    </>
  )
}

export type {Props as PopoverDescProps}
