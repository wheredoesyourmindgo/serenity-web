import {Box, Typography as Type, TypographyProps} from '@mui/material'

type Props = TypographyProps & {}

export default function VimRefLgnd({children, ...props}: Props) {
  const {sx, ...rest} = props

  return (
    <Box sx={{position: 'absolute', right: 6, top: -2}}>
      <Type
        variant="subtitle2"
        sx={{color: 'text.disabled', fontStyle: 'italic', ...sx}}
        component="span"
        {...rest}
      >
        <>{children}</>
      </Type>
    </Box>
  )
}

export type {Props as VimRefLgndProps}
