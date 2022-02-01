import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box, Typography as Type, TypographyProps} from '@mui/material'
import {ChildBox} from 'mui-sleazebox'
import React from 'react'
import {KeyContainer} from '.'
import {KeyContainerProps} from './KeyContainer'

type Props = Partial<TypographyProps> & {
  shiftLgnd?: String
  shiftIcn?: MuiFaIconProps['icon']
  shiftIcnProps?: Omit<MuiFaIconProps, 'icon'>
  children?: React.ReactNode
  keyContainerProps?: KeyContainerProps
}

export default function KeyLegend({
  keyContainerProps,
  children,
  shiftLgnd,
  shiftIcn,
  shiftIcnProps,
  ...rest
}: Props) {
  const {sx, color = 'solarized.base00', ...r} = rest

  return (
    <KeyContainer {...keyContainerProps}>
      <ChildBox sx={{position: 'relative'}}>
        {shiftLgnd ? (
          <Box sx={{position: 'absolute', right: -14, top: -10}}>
            <Type variant="subtitle2" sx={{color: 'solarized.violet'}}>
              {shiftLgnd}
            </Type>
          </Box>
        ) : null}
        {shiftIcn ? (
          <Box
            sx={{
              position: 'absolute',
              right: -10,
              top: -12
            }}
          >
            <MuiFaIcon
              icon={shiftIcn}
              sx={{color: 'solarized.violet', fontSize: 14}}
              {...shiftIcnProps}
            />
          </Box>
        ) : null}
        <Type variant="h3" sx={{color, ...sx}} {...r}>
          {children}
        </Type>
      </ChildBox>
    </KeyContainer>
  )
}

export type {Props as KeyLegendProps}
