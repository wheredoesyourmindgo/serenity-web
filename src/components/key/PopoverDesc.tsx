import {Typography} from '@mui/material'

type Props = {action: string; output: string}

export default function PopoverDesc({action, output}: Props) {
  return (
    <>
      <Typography
        component="span"
        color="text.primary"
        variant="body2"
        sx={{paddingRight: 1.5}}
      >
        <em>{action}</em>
      </Typography>
      <Typography component="span" variant="body1" color="text.secondary">
        {output}
      </Typography>
    </>
  )
}

export type {Props as PopoverDescProps}
