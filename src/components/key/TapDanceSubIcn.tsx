import MuiFaIcon, {type MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'

type Props = MuiFaIconProps

export default function TapDanceSubIcn({sx, ...rest}: Props) {
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
        sx={{color: 'solarized.orange', fontSize: 14, ...sx}}
        {...rest}
      />
    </Box>
  )
}

export type {Props as TapDanceSubIcnProps}
