import {AppBar, Box, Toolbar, Button} from '@mui/material'
import {BoxProps} from '@mui/system'
import Link from 'next/link'

type Props = Partial<BoxProps> & {containerProps?: Partial<BoxProps>}

export default function PageLayout({children, containerProps, ...rest}: Props) {
  return (
    <Box {...containerProps}>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            {/* <Type variant="h6" component="div" sx={{flexGrow: 1}}>
              Serenity
            </Type> */}
            <Link href="/alphas" passHref>
              <Button color="inherit">Alphas</Button>
            </Link>
            <Link href="/firmware" passHref>
              <Button color="inherit">Firmware</Button>
            </Link>
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
