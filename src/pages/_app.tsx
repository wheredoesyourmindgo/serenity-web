import {useEffect} from 'react'
import Head from 'next/head'
import {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@lib/theme'
import smoothscroll from 'smoothscroll-polyfill'
import UiProvider from '@components/UiStore'
import ToggleColorMode from '@components/ToggleColorMode'
import {AppCacheProvider} from '@mui/material-nextjs/v15-pagesRouter'
// Font Awesome config
import {config} from '@fortawesome/fontawesome-svg-core'
import '../public/static/fonts/fontawesome/css/all.min.css'
config.autoAddCss = false

import '@fortawesome/fontawesome-svg-core/styles.css'
// import {GlobalStyles} from '@mui/material'

export default function MyApp(props: AppProps) {
  const {Component, pageProps} = props
  useEffect(() => {
    smoothscroll.polyfill()
  })

  return (
    <AppCacheProvider>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <GlobalStyles styles={{}} /> */}
        <UiProvider>
          <ToggleColorMode>
            <div style={{height: '100%'}}>
              <Component {...pageProps} />
            </div>
          </ToggleColorMode>
        </UiProvider>
      </ThemeProvider>
    </AppCacheProvider>
  )
}
