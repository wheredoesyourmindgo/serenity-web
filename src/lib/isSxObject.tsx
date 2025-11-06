import type {SxProps, Theme} from '@mui/material'

export function isSxObject(
  sx: SxProps<Theme> | undefined
): sx is Record<string, unknown> {
  return !!sx && typeof sx === 'object' && !Array.isArray(sx)
}
