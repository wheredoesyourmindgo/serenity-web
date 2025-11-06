import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'

type Props = MuiFaIconProps & {
  customShiftCode?: boolean
}

export default function LyrSubIcn({
  customShiftCode: _customShiftCode,
  ...props
}: Props) {
  const {sx, ...rest} = props

  return (
    <Box
      sx={{
        position: 'absolute',
        right: 4,
        bottom: 0
      }}
    >
      <MuiFaIcon sx={{fontSize: 12, ...sx}} {...rest} />
    </Box>
  )
}

export type {Props as HoldSubIcnProps}
