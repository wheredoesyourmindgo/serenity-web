import {isSxObject} from '@lib/isSxObject'
import {
  Icon,
  Box,
  type IconProps,
  type BoxProps,
  type SxProps,
  type Theme
} from '@mui/material'

type Props = Omit<IconProps, 'color'> &
  Omit<Partial<BoxProps>, 'color'> & {color?: string; rotation?: number}

export default function MuiFaIcon({...props}: Props) {
  const {sx, color, rotation, ...rest} = props

  // Safely access the transform property from the sx prop (only if it's a plain object)
  let incomingTransform: string | undefined
  let restSx: SxProps<Theme> = {}

  if (isSxObject(sx)) {
    const {transform: t, ...others} = sx as Record<string, unknown>
    incomingTransform = typeof t === 'string' ? t : undefined
    restSx = others
  } else if (sx) {
    // Forward array or function forms unchanged
    restSx = sx
  }

  // add space if transform provided
  const transformWithSpace = incomingTransform ? `${incomingTransform} ` : ''

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex'
      }}
    >
      <Icon
        sx={{
          fontSize: 'inherit',
          overflow: 'visible',
          // first add transform, overwrite below if rotation passed in too
          transform: incomingTransform,
          ...(typeof rotation === 'number' && {
            // order matters, translate then rotate
            transform: `${transformWithSpace}rotate(${rotation}deg)`,
            transformOrigin: 'center'
          }),
          ...(color && {color}),
          ...restSx
        }}
        {...rest}
      />
    </Box>
  )
}

export type {Props as MuiFaIconProps}
