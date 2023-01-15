import {createTheme} from '@mui/material/styles'
import {Palette, PaletteMode, Theme} from '@mui/material'

export const lightSolarizedPalette = {
  base3: '#fdf6e3',
  base2: '#eee8d5',
  base1: '#93a0a1',
  base0: '#839497',
  base00: '#647b83',
  base01: '#596e75',
  base02: '#063642',
  base03: '#002b36'
} as const

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
} as const

export const neutralSolarizedPalette = {
  yellow: '#b58900',
  orange: '#Cb4b16',
  red: '#dc322f',
  magenta: '#d33682',
  violet: '#6c71c4',
  blue: '#268bd2',
  cyan: '#2aa198',
  green: '#859900'
} as const

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

const basePalette = {
  primary: {
    main: neutralSolarizedPalette.green
  },
  secondary: {
    main: neutralSolarizedPalette.violet
  }
} as const

// Create a theme instance.
const appTheme = {
  typography: {
    fontFamily: ['var(--mono-lisa-font)', ...systemFonts].join(',')
  },
  palette: {...basePalette}
  // components: {
  //   MuiSwitch: {
  //     styleOverrides: {
  //       switchBase: {
  //         color: lightSolarizedPalette.base1
  //       }
  //     }
  //   }
  // }
}

const theme = createTheme(appTheme)

export const getPalette = (mode: PaletteMode) => ({
  mode,
  ...basePalette,
  ...(mode === 'light'
    ? {
        // palette values for light mode
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
    : {
        // palette values for dark mode
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
      })
})

interface AppTheme extends Theme {
  palette: Palette & ReturnType<typeof getPalette>
}
export type {AppTheme}
export default theme
