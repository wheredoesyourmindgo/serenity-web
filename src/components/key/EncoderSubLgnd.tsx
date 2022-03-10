import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {faCircleDashed} from '@fortawesome/pro-light-svg-icons'
import {Box} from '@mui/material'

export default function EncoderSubLgnd(props: Partial<MuiFaIconProps>) {
  const {sx, ...rest} = props
  const specialColor = 'solarized.base1'
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 7,
        top: 6,
        zIndex: 0
      }}
    >
      <MuiFaIcon
        icon={faCircleDashed}
        sx={{color: specialColor, fontSize: 40, opacity: 0.5}}
        {...rest}
      />
    </Box>
  )
}
