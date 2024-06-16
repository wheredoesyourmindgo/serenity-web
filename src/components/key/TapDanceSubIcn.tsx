import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'

type Props = MuiFaIconProps

export default function TapDanceSubIcn() {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 4,
        bottom: -5
      }}
    >
      <MuiFaIcon
        className="fa-regular fa-ellipsis"
        sx={{color: 'solarized.blue', fontSize: 14}}
      />
    </Box>
  )
}

export type {Props as TapDanceSubIcnProps}
