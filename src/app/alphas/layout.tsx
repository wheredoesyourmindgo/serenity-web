import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Alphas',
  description:
    'Alpha key layout and statistics for the Serenity keyboard layout, analyzed with Genkey, 200 Analyzer, and Keyboard Layout Analyzer.',
  openGraph: {
    title: 'Alphas | Serenity Keyboard Layout',
    description:
      'Alpha key layout and statistics for the Serenity keyboard layout, analyzed with Genkey, 200 Analyzer, and Keyboard Layout Analyzer.',
    url: 'https://www.serenity-layout.fyi/alphas'
  },
  alternates: {
    canonical: 'https://www.serenity-layout.fyi/alphas'
  }
}

export default function AlphasLayout({children}: {children: React.ReactNode}) {
  return children
}
