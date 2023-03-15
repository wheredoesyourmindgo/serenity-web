import React, {useEffect} from 'react'
import Head from 'next/head'
import {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {CacheProvider, EmotionCache} from '@emotion/react'
import theme from '@lib/theme'
import createEmotionCache from '@lib/createEmotionCache'
import smoothscroll from 'smoothscroll-polyfill'
import UiProvider from '@components/UiStore'
import ToggleColorMode from '@components/ToggleColorMode'
import localFont from "next/font/local"
// Font Awesome config
import {config} from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
// import {GlobalStyles} from '@mui/material'
config.autoAddCss = false

const bodyFont = localFont({
  src: [
    {path: '../fonts/MonoLisaVariableNormal.woff2', style: 'normal'},
    {path: '../fonts/MonoLisaVariableItalic.woff2', style: 'italic'}
  ],
  variable: '--mono-lisa-font',
  display: 'swap'
})

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props
  useEffect(() => {
    smoothscroll.polyfill()
  })

  return (
    <CacheProvider value={emotionCache}>
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
            <div
              className={`${bodyFont.variable} ${bodyFont.className}`}
              style={{height: '100%'}}
            >
              <Component {...pageProps} />
            </div>
          </ToggleColorMode>
        </UiProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
