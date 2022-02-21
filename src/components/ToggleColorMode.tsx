import React, {useState, useMemo, useContext, useEffect} from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {useMediaQuery, useTheme, Box} from '@mui/material'
import {UiContext, setColorMode} from '@components/UiStore'
import {getPalette} from '@lib/theme'

type Props = {
  children: React.ReactNode
}
export default function ToggleColorMode({children}: Props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const uiContext = useContext(UiContext)
  const {dispatch, state} = uiContext
  const {mode} = state
  const theme = useTheme()

  // track prefersDarkMode as darkMode so that prefersDarkMode doesn't overwrite explicit mode changes
  const [darkMode, setDarkMode] = useState(prefersDarkMode)
  useEffect(() => {
    if (darkMode !== prefersDarkMode) {
      setDarkMode(prefersDarkMode)
    }
  }, [prefersDarkMode, darkMode])

  // if and when tracked darkMode changes update mode
  useEffect(() => {
    if (darkMode) {
      dispatch(setColorMode('dark'))
    } else {
      dispatch(setColorMode('light'))
    }
  }, [darkMode, dispatch])

  const sysTheme = useMemo(() => {
    // don't spread-in theme palette cause it will break the theme
    const {palette: _palette, ...rest} = theme
    const palette = getPalette(mode)

    return createTheme({
      ...rest,
      palette
    })
  }, [mode, theme])

  return (
    <ThemeProvider theme={sysTheme}>
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
