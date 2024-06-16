import {IconProps, Icon, Box, BoxProps, Theme, SxProps} from '@mui/material'

type Props = Omit<IconProps, 'color'> &
  Omit<Partial<BoxProps>, 'color'> & {color?: string; rotation?: number}

export default function MuiFaIcon({...props}: Props) {
  const {sx = {}, color, rotation, ...rest} = props

  // Safely access the transform property from the sx prop
  const {transform, ...restSx} = sx as SxProps<Theme> & {
    transform?: string
  }

  // add space if transform provided
  const transformSpc = transform ? `${transform} ` : ''

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
          transform: transform,
          ...(rotation && {
            // order matters, translate then rotate
            transform: `${transformSpc}rotate(${rotation}deg)`,
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
