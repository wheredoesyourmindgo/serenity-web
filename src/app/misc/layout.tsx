import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Miscellaneous',
  description:
    'Application configs for Ghostty, iTerm2, Hammerspoon, and Automator, plus a Vim-less keyboard shortcut reference guide for the Serenity keyboard layout.',
  openGraph: {
    title: 'Miscellaneous | Serenity Keyboard Layout',
    description:
      'Application configs for Ghostty, iTerm2, Hammerspoon, and Automator, plus a Vim-less keyboard shortcut reference guide for the Serenity keyboard layout.',
    url: 'https://www.serenity-layout.fyi/misc'
  },
  alternates: {
    canonical: 'https://www.serenity-layout.fyi/misc'
  }
}

export default function MiscLayout({children}: {children: React.ReactNode}) {
  return children
}
