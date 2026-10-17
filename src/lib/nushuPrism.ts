import type {CSSProperties} from 'react'

/*
 * Prism style for react-syntax-highlighter that follows the Nushu VS Code theme's token colors.
 * Colors are CSS variables (`--syntax-*` in `src/app/globals.css`), so a single style covers
 * both light and dark mode with no theme lookup on the client.
 */

const base: CSSProperties = {
  color: 'var(--syntax-foreground)',
  fontFamily: 'var(--font-body), monospace',
  fontSize: '1em',
  textAlign: 'left',
  whiteSpace: 'pre',
  wordSpacing: 'normal',
  wordBreak: 'normal',
  wordWrap: 'normal',
  lineHeight: '1.5',
  tabSize: 4,
  hyphens: 'none'
}

const comment = {color: 'var(--syntax-comment)'}
const keyword = {color: 'var(--syntax-keyword)'}
const fn = {color: 'var(--syntax-function)'}
const constant = {color: 'var(--syntax-constant)'}
const string = {color: 'var(--syntax-string)'}
const tag = {color: 'var(--syntax-tag)'}
const variable = {color: 'var(--syntax-variable)'}

export const nushuPrism: Record<string, CSSProperties> = {
  'code[class*="language-"]': base,
  'pre[class*="language-"]': {
    ...base,
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
    background: 'var(--background)'
  },
  ':not(pre) > code[class*="language-"]': {
    background: 'var(--background)',
    padding: '.1em',
    borderRadius: '.3em'
  },

  // Comments are green, as in Nushu Light and Nushu Dark
  comment,
  prolog: comment,
  doctype: comment,
  cdata: comment,

  // Keywords are magenta rather than GitHub's red
  keyword,
  atrule: keyword,
  important: {...keyword, fontWeight: 'bold'},
  operator: keyword,

  function: fn,

  constant,
  boolean: constant,
  number: constant,
  symbol: constant,
  builtin: constant,
  'attr-name': constant,

  string,
  char: string,
  'attr-value': string,
  url: string,
  regex: string,

  // Tags and JSON property names are gold rather than green
  tag,
  selector: tag,
  property: tag,

  variable,
  'class-name': variable,
  punctuation: {color: 'var(--syntax-foreground)'},
  namespace: {opacity: 0.7},

  inserted: comment,
  deleted: {color: 'var(--syntax-deleted)'},
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'}
}
