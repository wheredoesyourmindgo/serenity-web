import type {CSSProperties} from 'react'
import type {SxProps, Theme} from '@mui/material/styles'

export function sxToInlineStyle(theme: Theme, sx: SxProps<Theme> | undefined): CSSProperties {
  if (!sx) {
    return {}
  }

  const resolved = theme.unstable_sx(sx)

  return Object.fromEntries(
    Object.entries(resolved).filter(([, value]) => value == null || typeof value !== 'object')
  ) as CSSProperties
}
