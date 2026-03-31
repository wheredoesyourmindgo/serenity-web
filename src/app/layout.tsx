import AppStyles from '@components/AppStyles'
import Navbar from '@components/Navbar'
import theme from '@lib/theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v16-appRouter'
import ToggleColorMode from '@components/ToggleColorMode'
import {Analytics} from '@vercel/analytics/next'
import localFont from 'next/font/local'
import './globals.css'
// Font Awesome config
import {config} from '@fortawesome/fontawesome-svg-core'
import '../public/static/fonts/fontawesome/css/all.min.css'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'

export const metadata = {
  title: 'Serenity Keyboard Layout',
  description: 'Serenity Keyboard Layout Reference'
}

const bodyFont = localFont({
  src: [
    {path: '../fonts/MapleMono-Thin.ttf.woff2', weight: '100', style: 'normal'},
    {
      path: '../fonts/MapleMono-ThinItalic.ttf.woff2',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../fonts/MapleMono-ExtraLight.ttf.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-ExtraLightItalic.ttf.woff2',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../fonts/MapleMono-Light.ttf.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-LightItalic.ttf.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../fonts/MapleMono-Regular.ttf.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-Italic.ttf.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/MapleMono-Medium.ttf.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-MediumItalic.ttf.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../fonts/MapleMono-SemiBold.ttf.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-SemiBoldItalic.ttf.woff2',
      weight: '600',
      style: 'italic'
    },
    {path: '../fonts/MapleMono-Bold.ttf.woff2', weight: '700', style: 'normal'},
    {
      path: '../fonts/MapleMono-BoldItalic.ttf.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../fonts/MapleMono-ExtraBold.ttf.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-ExtraBoldItalic.ttf.woff2',
      weight: '800',
      style: 'italic'
    }
  ],
  variable: '--maple-mono-font',
  display: 'swap' // Use font swapping for better performance
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${bodyFont.variable}`} data-scroll-behavior="smooth">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Importing a global.css doesn't seem to work in production. Certain selectors/properties like
                html height and body height are getting unset in production, maybe due to <CssBaseline/>.
                Workaround is to use Mui <GlobalStyles/> which yields desired behavior in both dev and prod env.  */}
            <AppStyles />
            <ToggleColorMode>
              <div className="flex h-screen flex-col">
                <Navbar />
                <main className="flex w-full flex-1 justify-center">
                  <div className="my-12 block w-full flex-1">{children}</div>
                </main>
              </div>
            </ToggleColorMode>
            <Analytics />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
