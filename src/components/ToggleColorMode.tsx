'use client'

import {useEffect, useEffectEvent} from 'react'
import {useColorScheme} from '@mui/material/styles'
import {Box} from '@mui/material'
import {useTheme as useNextTheme} from 'next-themes'

type Props = {
  children: React.ReactNode
}
export default function ToggleColorMode({children}: Props) {
  const {resolvedTheme} = useNextTheme()
  const {mode: _mode, setMode} = useColorScheme()

  const syncColorMode = useEffectEvent(() => {
    if (resolvedTheme !== 'light' && resolvedTheme !== 'dark') {
      return
    }

    setMode(resolvedTheme)
  })

  useEffect(() => {
    syncColorMode()
  }, [resolvedTheme])

  return (
    <Box
      bgcolor="background.default"
      overflow="auto"
      height="100vh"
      // position="absolute"
      // top={0}
      // left={0}
      // right={0}
      // bottom={0}
    >
      {children}
    </Box>
  )
}
