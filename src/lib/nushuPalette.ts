/*
 * Nushu palette, taken from the Nushu VS Code theme
 * (https://github.com/wheredoesyourmindgo/nushu-vscode-theme), which builds on GitHub's Primer
 * colors with warm paper (light) and earth (dark) backgrounds.
 *
 * Neutrals are named by their role relative to the background, so `ink` is always body text and
 * `ink-deepest` always the strongest contrast, whichever mode is active. Accents are the theme's
 * own syntax colors: green comments, magenta keywords, violet functions, blue constants, gold tags.
 *
 * Keep in sync with the `--nushu-*` custom properties in `src/app/globals.css`.
 */

export interface NushuNeutrals {
  paper: string
  paperDim: string
  inkFaint: string
  inkMuted: string
  ink: string
  inkStrong: string
  inkDeep: string
  inkDeepest: string
}

export interface NushuAccents {
  yellow: string
  orange: string
  red: string
  magenta: string
  violet: string
  blue: string
  cyan: string
  green: string
}

export type NushuShades = NushuNeutrals & NushuAccents

const light: NushuShades = {
  paper: '#f8f6f1', // editor background
  paperDim: '#efede9', // sidebar background
  inkFaint: '#989489',
  inkMuted: '#7a766b',
  ink: '#635f54', // variable gray
  inkStrong: '#4d493f',
  inkDeep: '#2b2822', // editor foreground
  inkDeepest: '#201f19',
  yellow: '#9a6700',
  orange: '#bc4c00',
  red: '#cf222e',
  magenta: '#99286e', // keywords
  violet: '#6639ba', // functions
  blue: '#0550ae', // constants
  cyan: '#1b7c83',
  green: '#1a7f37' // comments
}

const dark: NushuShades = {
  paper: '#25211d', // editor background
  paperDim: '#2b2723', // sidebar background
  inkFaint: '#7e746a',
  inkMuted: '#9b9188',
  ink: '#c1b7ae', // variable gray
  inkStrong: '#d7cfc7', // editor foreground
  inkDeep: '#faf4ee',
  inkDeepest: '#ffffff',
  yellow: '#e3b341', // tags
  orange: '#f0883e',
  red: '#f85149',
  magenta: '#db61a2', // keywords
  violet: '#bc8cff', // functions
  blue: '#79c0ff', // constants
  cyan: '#39c5cf',
  green: '#3fb950'
}

const nushu = {light, dark}

export {nushu}
