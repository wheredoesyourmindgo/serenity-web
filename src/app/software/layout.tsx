import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Software',
  description:
    'Karabiner-Elements software layer reference for the Serenity keyboard layout on macOS.',
  openGraph: {
    title: 'Software | Serenity Keyboard Layout',
    description:
      'Karabiner-Elements software layer reference for the Serenity keyboard layout on macOS.',
    url: 'https://www.serenity-layout.fyi/software'
  },
  alternates: {
    canonical: 'https://www.serenity-layout.fyi/software'
  }
}

export default function SoftwareLayout({children}: {children: React.ReactNode}) {
  return children
}
