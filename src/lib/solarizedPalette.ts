export interface SolarizedShades {
  base3: string
  base2: string
  base1: string
  base0: string
  base00: string
  base01: string
  base02: string
  base03: string
}

export interface SolarizedNeutrals {
  yellow: string
  orange: string
  red: string
  magenta: string
  violet: string
  blue: string
  cyan: string
  green: string
}

const lightSolarizedPalette = {
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
const darkSolarizedPalette = {
  base03: '#fdf6e3',
  base02: '#eee8d5',
  base01: '#93a0a1',
  base00: '#839497',
  base0: '#647b83',
  base1: '#596e75',
  base2: '#063642',
  base3: '#002b36'
}

const neutralSolarizedPalette = {
  yellow: '#b58900',
  orange: '#Cb4b16',
  red: '#dc322f',
  magenta: '#d33682',
  violet: '#6c71c4',
  blue: '#268bd2',
  cyan: '#2aa198',
  green: '#859900'
}

const solarized = {
  light: lightSolarizedPalette,
  dark: darkSolarizedPalette,
  neutral: neutralSolarizedPalette
}

const commonPalette = {
  primary: {
    main: solarized.neutral.green
  },
  secondary: {
    main: solarized.neutral.violet
  }
}

const muiSolarizedLightPalette = {
  ...commonPalette,
  background: {
    default: solarized.light.base3,
    paper: solarized.light.base2
  },
  text: {
    primary: solarized.light.base00,
    secondary: solarized.light.base01,
    disabled: solarized.light.base1
  },
  solarized: {
    ...solarized.neutral,
    ...solarized.light
  }
}

const muiSolarizedDarkPalette = {
  ...commonPalette,
  background: {
    default: solarized.dark.base3,
    paper: solarized.dark.base2
  },
  text: {
    primary: solarized.dark.base00,
    secondary: solarized.dark.base01,
    disabled: solarized.dark.base1
  },
  solarized: {
    ...solarized.neutral,
    ...solarized.dark
  }
}

export {solarized, muiSolarizedLightPalette, muiSolarizedDarkPalette}
