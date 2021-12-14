import {createTheme} from '@mui/material/styles'
import {PaletteMode} from '@mui/material'

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
  green: '#859900',
  purple: '#6c71c4'
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
    main: neutralSolarizedPalette.purple
  }
} as const

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ['Sudo', ...systemFonts].join(',')
  },
  palette: {...basePalette}
})

export const getPalette = (mode: PaletteMode) => ({
  mode,
  ...basePalette,
  ...(mode === 'light'
    ? {
        // palette values for light mode
        background: {
          default: lightSolarizedPalette.base3,
          paper: lightSolarizedPalette.base3
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
          paper: darkSolarizedPalette.base3
        },
        solarized: {
          ...neutralSolarizedPalette,
          ...darkSolarizedPalette
        }
      })
})
export default theme
