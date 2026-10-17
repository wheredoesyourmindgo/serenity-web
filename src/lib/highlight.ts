import {createCssVariablesTheme, createHighlighter, createJavaScriptRegexEngine} from 'shiki'

/*
 * Syntax highlighting with Shiki, run on the server so pages ship plain HTML. The theme is
 * Shiki's css-variables theme: every color is a --shiki-* variable, which globals.css points at
 * the Nushu code panel colors, so one render covers light and dark mode.
 */

const theme = createCssVariablesTheme({name: 'nushu'})
const langs = ['shellscript', 'json', 'lua', 'applescript'] as const
export type CodeLanguage = (typeof langs)[number]

let highlighter: ReturnType<typeof createHighlighter> | undefined

export async function highlight(code: string, lang: CodeLanguage) {
  highlighter ??= createHighlighter({
    themes: [theme],
    langs: [...langs],
    engine: createJavaScriptRegexEngine()
  })
  return (await highlighter).codeToHtml(code, {lang, theme: 'nushu'})
}
