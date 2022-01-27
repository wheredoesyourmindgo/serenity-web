import {AppBar, Box, Toolbar, Typography as Type, Button} from '@mui/material'
import {BoxProps} from '@mui/system'

type Props = Partial<BoxProps> & {containerProps: Partial<BoxProps>}

export default function PageLayout({children, containerProps, ...rest}: Props) {
  return (
    <Box {...containerProps}>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Type variant="h6" component="div" sx={{flexGrow: 1}}>
              Serenity
            </Type>
            <Button color="inherit">Alphas</Button>
            <Button color="inherit">Firmware</Button>
            <Button color="inherit">Vim</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box component="main" {...rest}>
        {children}
      </Box>
    </Box>
  )
}
