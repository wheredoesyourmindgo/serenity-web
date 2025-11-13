import AppStyles from '@components/AppStyles'
import theme from '@lib/theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v16-appRouter'
import ToggleColorMode from '@components/ToggleColorMode'
import {Analytics} from '@vercel/analytics/next'
// Font Awesome config
import {config} from '@fortawesome/fontawesome-svg-core'
import '../public/static/fonts/fontawesome/css/all.min.css'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'

export const metadata = {
  title: 'Serenity Keyboard Layout',
  description: 'Serenity Keyboard Layout Reference'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
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
              <div style={{height: '100%'}}>{children}</div>
            </ToggleColorMode>
            <Analytics />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
