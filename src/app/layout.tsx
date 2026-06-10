import Navbar from '@/components/Navbar'
import {ThemeProvider as AppThemeProvider} from '@/components/theme-provider'
import {Analytics} from '@vercel/analytics/next'
import localFont from 'next/font/local'
import './globals.css'
// Font Awesome config
import {config} from '@fortawesome/fontawesome-svg-core'
import '../public/static/fonts/fontawesome/css/all.min.css'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'

export const metadata = {
  metadataBase: new URL('https://www.serenity-layout.fyi'),
  title: {
    default: 'Serenity Keyboard Layout',
    template: '%s | Serenity Keyboard Layout'
  },
  description:
    'Reference site for the Serenity keyboard layout — an optimized alternative keyboard layout with custom QMK firmware.',
  openGraph: {
    type: 'website',
    siteName: 'Serenity Keyboard Layout',
    title: 'Serenity Keyboard Layout',
    description:
      'Reference site for the Serenity keyboard layout — an optimized alternative keyboard layout with custom QMK firmware.',
    url: 'https://www.serenity-layout.fyi'
  },
  twitter: {
    card: 'summary',
    title: 'Serenity Keyboard Layout',
    description:
      'Reference site for the Serenity keyboard layout — an optimized alternative keyboard layout with custom QMK firmware.'
  },
  alternates: {
    canonical: 'https://www.serenity-layout.fyi'
  }
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
  variable: '--font-body',
  display: 'swap'
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <AppThemeProvider>
          <div className="bg-background h-screen overflow-auto">
            <div className="flex h-screen flex-col">
              <Navbar />
              <main className="flex w-full flex-1 justify-center">
                <div className="my-12 block w-full flex-1">{children}</div>
              </main>
            </div>
          </div>
          <Analytics />
        </AppThemeProvider>
      </body>
    </html>
  )
}
