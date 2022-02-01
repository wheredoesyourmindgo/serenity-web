import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {faAsterisk} from '@fortawesome/pro-regular-svg-icons'
import {Box} from '@mui/material'

export default function SpecialSubLgnd(props: Partial<MuiFaIconProps>) {
  const {sx, ...rest} = props
  const specialColor = 'solarized.yellow'
  return (
    <Box
      sx={{
        position: 'absolute',
        left: -14,
        top: -16
      }}
    >
      <MuiFaIcon
        icon={faAsterisk}
        sx={{color: specialColor, fontSize: 10}}
        {...rest}
      />
    </Box>
  )
}
