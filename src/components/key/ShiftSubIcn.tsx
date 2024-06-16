import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'

type Props = MuiFaIconProps

export default function ShiftSubIcn({sx, ...rest}: Props) {
  return (
    <Box
      component="span"
      sx={{
        color: 'solarized.violet',
        position: 'absolute',
        right: 5,
        top: -2
      }}
    >
      <MuiFaIcon sx={{fontSize: 14, ...sx}} {...rest} />
    </Box>
  )
}

export type {Props as ShiftSubIcnProps}
