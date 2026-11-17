import {createCssVariablesTheme, createHighlighter, createJavaScriptRegexEngine} from 'shiki'

/*
 * Syntax highlighting with Shiki, run on the server so pages ship no highlighter. The theme is
 * Shiki's css-variables theme: every color is a --shiki-* variable, which globals.css points at
 * the Nushu code colors, so one render covers light and dark mode.
 */

const theme = createCssVariablesTheme({name: 'nushu'})
const langs = ['shellscript', 'json', 'lua', 'applescript'] as const
export type CodeLanguage = (typeof langs)[number]

// TextMate's FontStyle bit flags, which shiki doesn't re-export
const ITALIC = 1
const BOLD = 2

let highlighter: ReturnType<typeof createHighlighter> | undefined

// One array of tokens per line, for the lines of a CodeBlock
export async function highlight(code: string, lang: CodeLanguage) {
  highlighter ??= createHighlighter({
    themes: [theme],
    langs: [...langs],
    engine: createJavaScriptRegexEngine()
  })
  const {tokens} = (await highlighter).codeToTokens(code, {lang, theme: 'nushu'})
  return tokens.map((line) =>
    line.map(({content, color, fontStyle = 0}) => ({
      content,
      color,
      italic: (fontStyle & ITALIC) !== 0,
      bold: (fontStyle & BOLD) !== 0
    }))
  )
}
