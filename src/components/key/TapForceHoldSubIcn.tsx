import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'

type Props = MuiFaIconProps

export default function TapForceHoldSubIcn() {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: -6
      }}
    >
      <MuiFaIcon
        className="fa-regular fa-angles-down"
        sx={{
          color: 'solarized.orange',
          fontSize: 10,
          transform: 'translateX(-50%)'
        }}
      />
    </Box>
  )
}

export type {Props as TapForceHoldSubIcnProps}
