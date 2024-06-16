import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'

type Props = MuiFaIconProps

export default function LyrHoldSubIcn({sx, ...rest}: Props) {
  return (
    <Box
      component="span"
      sx={{
        color: 'solarized.green',
        position: 'absolute',
        right: 3,
        bottom: 1
      }}
    >
      <MuiFaIcon sx={{fontSize: 12, ...sx}} {...rest} />
    </Box>
  )
}

export type {Props as LyrHoldSubIcnProps}
