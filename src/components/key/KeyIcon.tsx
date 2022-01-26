import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {ChildBox, ColumnBox} from 'mui-sleazebox'
import React from 'react'

type Props = MuiFaIconProps

export default function KeyIcon({icon, ...rest}: Props) {
  const {sx, ...r} = rest
  return (
    <ColumnBox child width={25} justifyContent="center" alignItems="center">
      <ChildBox>
        <MuiFaIcon
          icon={icon}
          sx={{color: 'solarized.base00', fontSize: 24, ...sx}}
          {...r}
        />
      </ChildBox>
    </ColumnBox>
  )
}
