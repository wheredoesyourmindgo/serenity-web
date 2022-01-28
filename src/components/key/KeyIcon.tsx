import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {ChildBox} from 'mui-sleazebox'
import React from 'react'
import KeyContainer from './KeyContainer'

type Props = MuiFaIconProps

export default function KeyIcon({icon, ...rest}: Props) {
  const {sx, ...r} = rest
  return (
    <KeyContainer>
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
