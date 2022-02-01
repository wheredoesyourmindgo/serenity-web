import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'

type Props = MuiFaIconProps & {
  customShiftCode?: boolean
}

export default function ShiftSubIcn({customShiftCode, ...props}: Props) {
  const {sx, ...rest} = props

  return (
    <Box
      sx={{
        position: 'absolute',
        right: -10,
        top: -12
      }}
    >
      <MuiFaIcon sx={{fontSize: 14, ...sx}} {...rest} />
    </Box>
  )
}

export type {Props as ShiftSubIcnProps}
