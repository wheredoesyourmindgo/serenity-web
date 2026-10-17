import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Extras',
  description:
    'Application configs for Ghostty, iTerm2, Hammerspoon, and Automator, plus a Vim-less keyboard shortcut reference guide for the Serenity keyboard layout.',
  openGraph: {
    title: 'Extras | Serenity Keyboard Layout',
    description:
      'Application configs for Ghostty, iTerm2, Hammerspoon, and Automator, plus a Vim-less keyboard shortcut reference guide for the Serenity keyboard layout.',
    url: 'https://www.serenity-layout.fyi/extras'
  },
  alternates: {
    canonical: 'https://www.serenity-layout.fyi/extras'
  }
}

export default function ExtrasLayout({children}: {children: React.ReactNode}) {
  return children
}
