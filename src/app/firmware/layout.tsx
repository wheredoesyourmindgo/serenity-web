import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Firmware',
  description:
    'QMK firmware layer reference for the Serenity keyboard layout — base, mouse, num/nav, action, media, symbol, OS, function, and QWERTY layers.',
  openGraph: {
    title: 'Firmware | Serenity Keyboard Layout',
    description:
      'QMK firmware layer reference for the Serenity keyboard layout — base, mouse, num/nav, action, media, symbol, OS, function, and QWERTY layers.',
    url: 'https://www.serenity-layout.fyi/firmware'
  },
  alternates: {
    canonical: 'https://www.serenity-layout.fyi/firmware'
  }
}

export default function FirmwareLayout({children}: {children: React.ReactNode}) {
  return children
}
