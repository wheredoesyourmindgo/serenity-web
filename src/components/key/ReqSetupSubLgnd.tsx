import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {faWrenchSimple} from '@fortawesome/pro-regular-svg-icons'
import {Box} from '@mui/material'

export default function ReqSetupSubLgnd(props: Partial<MuiFaIconProps>) {
  const {sx, ...rest} = props
  const specialColor = 'solarized.magenta'
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 6,
        top: -4
      }}
    >
      <MuiFaIcon
        icon={faWrenchSimple}
        sx={{color: specialColor, fontSize: 10}}
        {...rest}
      />
    </Box>
  )
}
