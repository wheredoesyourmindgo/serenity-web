import {
  AppBar,
  useTheme,
  BoxProps,
  Box,
  Toolbar,
  Button,
  useMediaQuery
} from '@mui/material'
import Link from 'next/link'
import ToggleDarkModeBtn from './ToggleDarkModeBtn'
import {AppTheme} from '@lib/theme'

type Props = Partial<BoxProps> & {containerProps?: Partial<BoxProps>}

export default function PageLayout({children, containerProps, ...rest}: Props) {
  const theme = useTheme<AppTheme>()
  const isMd = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Box {...containerProps}>
      <Box sx={{flexGrow: 1}}>
        <AppBar
          position="static"
          sx={{
            bgcolor:
              theme.palette.mode === 'light'
                ? 'solarized.blue'
                : 'solarized.cyan',
            opacity: 0.85,
            transition: '200ms linear opacity',
            '&:hover': {
              opacity: 1
            }
          }}
        >
          <Toolbar variant={isMd ? 'dense' : 'regular'}>
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

            <Box sx={{flexGrow: 1}} />
            <ToggleDarkModeBtn />
          </Toolbar>
        </AppBar>
      </Box>
      <Box component="main" {...rest}>
        {children}
      </Box>
    </Box>
  )
}
