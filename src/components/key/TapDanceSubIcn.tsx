import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {faEllipsis} from '@fortawesome/pro-regular-svg-icons'
import {Box} from '@mui/material'

type Props = MuiFaIconProps

export default function TapDanceSubIcn() {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 4,
        bottom: -6
      }}
    >
      <MuiFaIcon
        icon={faEllipsis}
        sx={{color: 'solarized.blue', fontSize: 14}}
      />
    </Box>
  )
}

export type {Props as TapDanceSubIcnProps}
