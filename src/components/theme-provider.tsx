'use client'

import * as React from 'react'
import {ThemeProvider as NextThemesProvider, useTheme} from 'next-themes'

function ThemeProvider({children, ...props}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeHotkey />
      <ThemeColor />
      {children}
    </NextThemesProvider>
  )
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.tagName === 'SELECT'
  )
}

function ThemeHotkey() {
  const {resolvedTheme, systemTheme, setTheme} = useTheme()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key.toLowerCase() !== 'd') {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      const next = resolvedTheme === 'dark' ? 'light' : 'dark'
      setTheme(next === systemTheme ? 'system' : next)
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [resolvedTheme, systemTheme, setTheme])

  return null
}

// The theme-color tags in layout.tsx follow the system setting, but the site's theme can be toggled
// by hand. Once the theme is known, point every theme-color tag at the page color it resolved to.
function ThemeColor() {
  const {resolvedTheme} = useTheme()

  React.useEffect(() => {
    if (!resolvedTheme) return
    const color = getComputedStyle(document.documentElement).getPropertyValue('--background').trim()
    if (!color) return
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute('content', color)
    })
  }, [resolvedTheme])

  return null
}

export {ThemeProvider}
