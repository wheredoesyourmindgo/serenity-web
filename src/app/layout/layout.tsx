import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Layout',
  description:
    'The letter layout and statistics for the Serenity keyboard layout, analyzed with Genkey, 200 Analyzer, and Keyboard Layout Analyzer.',
  openGraph: {
    title: 'Layout | Serenity Keyboard Layout',
    description:
      'The letter layout and statistics for the Serenity keyboard layout, analyzed with Genkey, 200 Analyzer, and Keyboard Layout Analyzer.',
    url: 'https://www.serenity-layout.fyi/layout'
  },
  alternates: {
    canonical: 'https://www.serenity-layout.fyi/layout'
  }
}

export default function LayoutPageLayout({children}: {children: React.ReactNode}) {
  return children
}
