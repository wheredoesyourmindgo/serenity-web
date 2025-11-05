'use client'

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material'
import Link from 'next/link'
import ToggleDarkModeBtn from './ToggleDarkModeBtn'

export default function Header() {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <AppBar
      position="fixed"
      sx={{
        color:
          theme.palette.mode === 'light'
            ? 'solarized.base3'
            : 'solarized.base03',
        bgcolor:
          theme.palette.mode === 'light' ? 'solarized.blue' : 'solarized.cyan'
        // opacity: 0.85,
        // transition: '200ms linear opacity'
        // '&:hover': {
        // opacity: 1
        // }
      }}
    >
      <Toolbar variant={isMd ? 'dense' : 'regular'}>
        {/* <Type variant="h6" component="div" sx={{flexGrow: 1}}>
            Serenity
          </Type> */}
        <Button LinkComponent={Link} href="/alphas" color="inherit">
          Alphas
        </Button>
        <Button LinkComponent={Link} href="/firmware" color="inherit">
          Firmware
        </Button>
        {/* <Button LinkComponent={Link} href="/vim" color="inherit">
              Vim
            </Button> */}
        <Button LinkComponent={Link} href="/software" color="inherit">
          Software
        </Button>
        <Box sx={{flex: '1 0 auto'}} />
        <ToggleDarkModeBtn />
      </Toolbar>
    </AppBar>
  )
}
