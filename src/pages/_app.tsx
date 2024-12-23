import React, {useEffect} from 'react'
import Head from 'next/head'
import {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@lib/theme'
import smoothscroll from 'smoothscroll-polyfill'
import UiProvider from '@components/UiStore'
import ToggleColorMode from '@components/ToggleColorMode'
import localFont from 'next/font/local'
import {AppCacheProvider} from '@mui/material-nextjs/v15-pagesRouter'
// Font Awesome config
import {config} from '@fortawesome/fontawesome-svg-core'
import '../public/static/fonts/fontawesome/css/all.min.css'
config.autoAddCss = false

import '@fortawesome/fontawesome-svg-core/styles.css'
// import {GlobalStyles} from '@mui/material'

const bodyFont = localFont({
  src: [
    {path: '../fonts/MapleMono-Thin.woff2', weight: '100', style: 'normal'},
    {
      path: '../fonts/MapleMono-ThinItalic.woff2',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../fonts/MapleMono-ExtraLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic'
    },
    {path: '../fonts/MapleMono-Light.woff2', weight: '300', style: 'normal'},
    {
      path: '../fonts/MapleMono-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {path: '../fonts/MapleMono-Regular.woff2', weight: '400', style: 'normal'},
    {path: '../fonts/MapleMono-Italic.woff2', weight: '400', style: 'italic'},
    {path: '../fonts/MapleMono-Medium.woff2', weight: '500', style: 'normal'},
    {
      path: '../fonts/MapleMono-MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
    {path: '../fonts/MapleMono-SemiBold.woff2', weight: '600', style: 'normal'},
    {
      path: '../fonts/MapleMono-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic'
    },
    {path: '../fonts/MapleMono-Bold.woff2', weight: '700', style: 'normal'},
    {
      path: '../fonts/MapleMono-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../fonts/MapleMono-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic'
    }
  ],
  variable: '--maple-mono-font',
  display: 'swap' // Use font swapping for better performance
})

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
            <div
              className={`${bodyFont.variable} ${bodyFont.className}`}
              style={{height: '100%'}}
            >
              <Component {...pageProps} />
            </div>
          </ToggleColorMode>
        </UiProvider>
      </ThemeProvider>
    </AppCacheProvider>
  )
}
