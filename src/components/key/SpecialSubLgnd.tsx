import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'

export default function SpecialSubLgnd(props: Partial<MuiFaIconProps>) {
  const {sx, ...rest} = props
  const specialColor = 'solarized.red'
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 6,
        top: -6
      }}
    >
      <MuiFaIcon
        className="fa-regular fa-asterisk"
        sx={{color: specialColor, fontSize: 9, ...sx}}
        {...rest}
      />
    </Box>
  )
}
