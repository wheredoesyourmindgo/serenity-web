import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome'
import {Box, BoxProps} from '@mui/system'

type Props = Pick<BoxProps, 'sx'> & FontAwesomeIconProps

export default function MuiFaIcon({...props}: Props) {
  const {sx, color, ...rest} = props

  return (
    <Box
      sx={{display: 'inline-flex', ...(color && {color}), ...sx}}
      component="span"
    >
      <FontAwesomeIcon {...rest} />
    </Box>
  )
}

export type {Props as MuiFaIconProps}
