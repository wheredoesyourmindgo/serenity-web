import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import {IntroProvider} from '@/components/IntroProvider'
import {ThemeProvider as AppThemeProvider} from '@/components/theme-provider'
import {TooltipProvider} from '@/components/ui/tooltip'
import {Analytics} from '@vercel/analytics/next'
import localFont from 'next/font/local'
import type {Viewport} from 'next'
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
  },
  verification: {
    google: 'MZ3xP0ikPGmSZb9ABSxpeDYKdp2eGYKLnK16ApjLA8U'
  }
}

// tints the browser toolbars (iOS Safari 15–18) to the page color before any script runs;
// ThemeColor in theme-provider.tsx keeps it in step when the theme is toggled by hand
export const viewport: Viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#f8f6f1'},
    {media: '(prefers-color-scheme: dark)', color: '#25211d'}
  ]
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
          <TooltipProvider>
            <IntroProvider>
              {/* the document scrolls, not a box inside it, so mobile browsers can shrink their
                  toolbars and tint them from the page; sideways spill like the heatmap glow is
                  clipped here without making this a scroll container */}
              <div className="bg-background overflow-x-clip">
                <div className="flex min-h-dvh flex-col">
                  <Navbar />
                  <main className="flex w-full flex-1 justify-center">
                    {/* a flex column, so a page can fill the height with flex-1 */}
                    <div className="my-8 flex w-full flex-1 flex-col md:my-12">{children}</div>
                  </main>
                  <Footer />
                </div>
              </div>
            </IntroProvider>
          </TooltipProvider>
          <Analytics />
        </AppThemeProvider>
      </body>
    </html>
  )
}
