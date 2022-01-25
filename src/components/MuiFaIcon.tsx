import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome'
import {Box, BoxProps} from '@mui/system'

export default function MuiFaIcon({
  ...props
}: Pick<BoxProps, 'sx'> & FontAwesomeIconProps) {
  const {sx, ...rest} = props

  return (
    <Box sx={{display: 'inline-flex', ...sx}} component="span">
      <FontAwesomeIcon {...rest} />
    </Box>
  )
}
