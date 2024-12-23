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
import Head from 'next/head'

type Props = Partial<BoxProps> & {containerProps?: Partial<BoxProps>}

export default function PageLayout({children, containerProps, ...rest}: Props) {
  const theme = useTheme<AppTheme>()
  const isMd = useMediaQuery(theme.breakpoints.up('md'))
  const isSm = useMediaQuery(theme.breakpoints.down('md'))
  const isXs = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <>
      <Head>
        <title>Serenity</title>
        <meta name="description" content="Serenity Keyboard Layout" />
      </Head>
      <Box {...containerProps}>
        <Box sx={{flexGrow: 1}}>
          <AppBar
            position="fixed"
            sx={{
              color:
                theme.palette.mode === 'light'
                  ? 'solarized.base3'
                  : 'solarized.base03',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'solarized.blue'
                  : 'solarized.cyan'
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
              <Box sx={{flexGrow: 1}} />
              <ToggleDarkModeBtn />
            </Toolbar>
          </AppBar>
        </Box>
        <Box component="main" {...rest}>
          {isXs || isSm ? (
            <Box
              sx={{
                transform: isXs
                  ? 'scale(0.53)'
                  : 'scale(0.69)' /* Adjust the scale value as needed */,
                transformOrigin:
                  'center center' /* Ensures the scaling starts from the top left corner */,
                width: '100%'
                // overflowX: 'hidden' /* Prevents horizontal scrolling */
              }}
            >
              {children}
            </Box>
          ) : (
            // <FlexBox justifyContent="center" alignItems="center" height="100vh">
            //   <ChildBox flex="0 0 80%">
            //     <Type variant="subtitle1" sx={{color: 'solarized.base01'}}>
            //       This site doesn't work with mobile devices, not yet at least
            //       :(
            //     </Type>
            //   </ChildBox>
            // </FlexBox>
            <>{children}</>
          )}
        </Box>
      </Box>
    </>
  )
}
