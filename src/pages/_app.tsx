import {useEffect} from 'react'
import Head from 'next/head'
import {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@lib/theme'
import smoothscroll from 'smoothscroll-polyfill'
import UiProvider from '@components/UiStore'
import ToggleColorMode from '@components/ToggleColorMode'
import {GlobalStyles} from '@mui/material'
import {AppCacheProvider} from '@mui/material-nextjs/v15-pagesRouter'
// Font Awesome config
import {config} from '@fortawesome/fontawesome-svg-core'
import '../public/static/fonts/fontawesome/css/all.min.css'
config.autoAddCss = false

import '@fortawesome/fontawesome-svg-core/styles.css'

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
        <GlobalStyles
          styles={{
            // Always give the 7th child a margin-left transition so toggling layouts animates smoothly
            '[data-row="true"] > :nth-child(7)': {
              transition: 'margin-left 160ms ease-in-out'
            },
            // In 42-key layout, add the visual split before the 7th key
            '[data-layout="42 key"] [data-row="true"] > :nth-child(7)': {
              marginLeft: 30 // px (or use theme.spacing)
            },
            // Respect reduced motion preferences
            '@media (prefers-reduced-motion: reduce)': {
              '[data-row="true"] > :nth-child(7)': {transition: 'none'}
            }
          }}
        />
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
