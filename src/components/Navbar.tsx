import {AppBar, Box, Button, Toolbar} from '@mui/material'
import Link from 'next/link'
import ToggleDarkModeBtn from './ToggleDarkModeBtn'

export default function Navbar() {
  return (
    <Box
      sx={{
        display: 'relative'
      }}
    >
      <AppBar
        position="static"
        sx={[
          {
            color: 'solarized.base3',
            bgcolor: 'solarized.blue'
            // opacity: 0.85,
            // transition: '200ms linear opacity'
            // '&:hover': {
            // opacity: 1
            // }
          },
          (theme) =>
            theme.applyStyles('dark', {
              color: 'solarized.base03',
              backgroundColor: 'solarized.cyan'
            })
        ]}
      >
        <Toolbar variant="dense">
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
    </Box>
  )
}
