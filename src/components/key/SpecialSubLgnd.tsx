import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {faAsterisk} from '@fortawesome/pro-regular-svg-icons'
import {Box} from '@mui/material'

export default function SpecialSubLgnd(props: Partial<MuiFaIconProps>) {
  const {sx, ...rest} = props
  const specialColor = 'solarized.red'
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 6,
        top: -4
      }}
    >
      <MuiFaIcon
        icon={faAsterisk}
        sx={{color: specialColor, fontSize: 9}}
        {...rest}
      />
    </Box>
  )
}
