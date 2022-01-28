import {Box, Typography as Type, TypographyProps} from '@mui/material'
import {ChildBox} from 'mui-sleazebox'
import React from 'react'
import {KeyContainer} from '.'

type Props = Partial<TypographyProps> & {
  shiftSym?: String
  children?: React.ReactNode
}

export default function KeyLegend({children, shiftSym, ...rest}: Props) {
  const {sx, color = 'solarized.base00', ...r} = rest
  return (
    <KeyContainer>
      <ChildBox sx={{position: 'relative'}}>
        <Box sx={{position: 'absolute', right: -14, top: -10}}>
          <Type variant="subtitle2" sx={{color: 'solarized.violet'}}>
            {shiftSym}
          </Type>
        </Box>
        <Type variant="h3" sx={{color, ...sx}} {...r}>
          {children}
        </Type>
      </ChildBox>
    </KeyContainer>
  )
}

export type {Props as KeyLegendProps}
