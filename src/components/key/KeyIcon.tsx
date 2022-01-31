import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {ChildBox} from 'mui-sleazebox'
import React from 'react'
import KeyContainer, {KeyContainerProps} from './KeyContainer'

type Props = MuiFaIconProps & {keyContainerProps?: KeyContainerProps}

export default function KeyIcon({keyContainerProps, icon, ...rest}: Props) {
  const {sx, ...r} = rest
  return (
    <KeyContainer {...keyContainerProps}>
      <ChildBox>
        <MuiFaIcon
          icon={icon}
          sx={{color: 'solarized.base00', fontSize: 20, ...sx}}
          {...r}
        />
      </ChildBox>
    </KeyContainer>
  )
}

export type {Props as KeyIconProps}
