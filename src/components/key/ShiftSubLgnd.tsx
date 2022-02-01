import {Box, Typography as Type, TypographyProps} from '@mui/material'

type Props = TypographyProps & {}

export default function ShiftSubLgnd({children, ...props}: Props) {
  const {...rest} = props

  return (
    <Box sx={{position: 'absolute', right: -14, top: -10}}>
      <Type variant="subtitle2" component="span" {...rest}>
        <>{children}</>
      </Type>
    </Box>
  )
}

export type {Props as ShiftSubLgndProps}
