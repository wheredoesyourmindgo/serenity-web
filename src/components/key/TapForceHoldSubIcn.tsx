import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {faAnglesDown} from '@fortawesome/pro-regular-svg-icons'
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
        icon={faAnglesDown}
        sx={{
          color: 'solarized.orange',
          fontSize: 10,
          // transformOrigin: 'center',
          transform: 'translateX(-50%)'
        }}
      />
    </Box>
  )
}

export type {Props as TapForceHoldSubIcnProps}
