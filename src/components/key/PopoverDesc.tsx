import {Typography} from '@/components/ui/typography'

type Props = {action: string; output: string; code?: string}

export default function PopoverDesc({action, output, code}: Props) {
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
      {code ? (
        <code className="bg-muted text-muted-foreground ml-2 rounded px-1 py-0.5 font-mono text-xs">
          {code}
        </code>
      ) : null}
    </>
  )
}

export type {Props as PopoverDescProps}
