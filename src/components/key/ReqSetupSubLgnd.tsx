import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
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
        className="fa-regular fa-wrench-simple"
        sx={{color: specialColor, fontSize: 10}}
        {...rest}
      />
    </Box>
  )
}
