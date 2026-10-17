import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Why Serenity',
  description:
    'Why the Serenity keyboard layout is shaped the way it is: built around what each finger is actually good at, with the ring and pinky fingers kept on the home row.',
  openGraph: {
    title: 'Why Serenity | Serenity Keyboard Layout',
    description:
      'Why the Serenity keyboard layout is shaped the way it is: built around what each finger is actually good at, with the ring and pinky fingers kept on the home row.',
    url: 'https://www.serenity-layout.fyi/why'
  },
  alternates: {
    canonical: 'https://www.serenity-layout.fyi/why'
  }
}

export default function WhyLayout({children}: {children: React.ReactNode}) {
  return children
}
