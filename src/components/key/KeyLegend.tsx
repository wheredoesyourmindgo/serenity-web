import {Typography as Type, TypographyProps} from '@mui/material'
import {ChildBox} from 'mui-sleazebox'
import React, {useCallback} from 'react'

type Props = Partial<TypographyProps> & {
  children?: React.ReactNode
}

export default function KeyLegend({children, ...rest}: Props) {
  const T3 = useCallback(
    ({children: c, ...r}) => (
      <Type variant="h3" {...r}>
        {c}
      </Type>
    ),
    []
  )

  return (
    <ChildBox width={25} overflow="none">
      <T3 color="solarized.base00" {...rest}>
        {children}
      </T3>
    </ChildBox>
  )
}
