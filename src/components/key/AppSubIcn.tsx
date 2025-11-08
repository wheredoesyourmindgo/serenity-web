import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'

type Props = MuiFaIconProps

export default function AppSubIcn({sx, ...rest}: Props) {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 10,
        top: -5
      }}
    >
      <MuiFaIcon
        className="fa-regular fa-browser"
        sx={{
          color: 'solarized.cyan',
          fontSize: 9,
          transform: 'translateX(-50%)',
          ...sx
        }}
        {...rest}
      />
    </Box>
  )
}

export type {Props as AppSubIcnProps}
