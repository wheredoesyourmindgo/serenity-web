'use client'

import {createTheme} from '@mui/material'
import localFont from 'next/font/local'

declare module '@mui/material' {
  interface SolarizedShades {
    base3: string
    base2: string
    base1: string
    base0: string
    base00: string
    base01: string
    base02: string
    base03: string
  }
  interface SolarizedNeutrals {
    yellow: string
    orange: string
    red: string
    magenta: string
    violet: string
    blue: string
    cyan: string
    green: string
  }
  interface Palette {
    solarized: SolarizedShades & SolarizedNeutrals
  }
  interface PaletteOptions {
    solarized?: Partial<SolarizedShades & SolarizedNeutrals>
  }
}

export const lightSolarizedPalette = {
  base3: '#fdf6e3',
  base2: '#eee8d5',
  base1: '#93a0a1',
  base0: '#839497',
  base00: '#647b83',
  base01: '#596e75',
  base02: '#063642',
  base03: '#002b36'
}

// light values flipped
export const darkSolarizedPalette = {
  base03: '#fdf6e3',
  base02: '#eee8d5',
  base01: '#93a0a1',
  base00: '#839497',
  base0: '#647b83',
  base1: '#596e75',
  base2: '#063642',
  base3: '#002b36'
}

export const neutralSolarizedPalette = {
  yellow: '#b58900',
  orange: '#Cb4b16',
  red: '#dc322f',
  magenta: '#d33682',
  violet: '#6c71c4',
  blue: '#268bd2',
  cyan: '#2aa198',
  green: '#859900'
}

const commonPalette = {
  primary: {
    main: neutralSolarizedPalette.green
  },
  secondary: {
    main: neutralSolarizedPalette.violet
  }
}

const systemFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
] as const

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
  variable: '--maple-mono-font',
  display: 'swap' // Use font swapping for better performance
})

// Create a theme instance with color schemes (CSS variables)
const theme = createTheme({
  typography: {
    fontFamily: [bodyFont.style.fontFamily, ...systemFonts].join(',')
  },
  colorSchemes: {
    light: {
      palette: {
        ...commonPalette,
        background: {
          default: lightSolarizedPalette.base3,
          paper: lightSolarizedPalette.base2
        },
        text: {
          primary: lightSolarizedPalette.base00,
          secondary: lightSolarizedPalette.base01,
          disabled: lightSolarizedPalette.base1
        },
        solarized: {
          ...neutralSolarizedPalette,
          ...lightSolarizedPalette
        }
      }
    },
    dark: {
      palette: {
        ...commonPalette,
        background: {
          default: darkSolarizedPalette.base3,
          paper: darkSolarizedPalette.base2
        },
        text: {
          primary: darkSolarizedPalette.base00,
          secondary: darkSolarizedPalette.base01,
          disabled: darkSolarizedPalette.base1
        },
        solarized: {
          ...neutralSolarizedPalette,
          ...darkSolarizedPalette
        }
      }
    }
  }
})

export default theme
