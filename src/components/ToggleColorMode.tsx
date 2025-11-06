'use client'

import {useEffect, useEffectEvent} from 'react'
import {ThemeProvider, useColorScheme} from '@mui/material/styles'
import {useMediaQuery, useTheme, Box} from '@mui/material'

type Props = {
  children: React.ReactNode
}
export default function ToggleColorMode({children}: Props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useTheme()
  const {mode: _mode, setMode} = useColorScheme()

  const onDarkModeChange = useEffectEvent(() => {
    setMode(prefersDarkMode ? 'dark' : 'light')
  })

  // Sync UI color mode with system preference changes only
  useEffect(() => {
    onDarkModeChange()
  }, [prefersDarkMode])

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}
