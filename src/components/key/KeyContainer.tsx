import {AppTheme} from '@lib/theme'
import {alpha, useTheme} from '@mui/material'
import {FlexBox, FlexBoxProps} from 'mui-sleazebox'
import React from 'react'

export default function Key({children, ...rest}: FlexBoxProps) {
  const {sx, ...r} = rest
  const theme = useTheme<AppTheme>()
  return (
    <FlexBox
      child
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'none',
        width: 55,
        aspectRatio: '1/1',
        borderWidth: 1,
        borderColor: alpha(theme.palette.solarized.base1, 0.4),
        borderRadius: 1,
        borderStyle: 'solid',
        padding: 1,
        ...sx
      }}
      {...r}
    >
      {children}
    </FlexBox>
  )
}
