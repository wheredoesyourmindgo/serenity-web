import {letterFrequency} from './letterFrequency'

const frequencies = Object.values(letterFrequency)
const MIN_FREQ = Math.min(...frequencies)
const MAX_FREQ = Math.max(...frequencies)
const FREQ_RANGE = MAX_FREQ - MIN_FREQ

/**
 * Creates a function that maps letters A–Z to a color between two CSS colors based on English
 * letter frequency.
 *
 * The result is a CSS `color-mix()`, so CSS variables such as `var(--nushu-ink-faint)` can be
 * passed and the color follows light/dark mode in the browser, with identical server and client
 * output.
 *
 * @param lowColor - CSS color for the *lowest* frequency (e.g. 'var(--nushu-ink-faint)')
 * @param highColor - CSS color for the *highest* frequency (e.g. 'var(--nushu-ink-deepest)')
 */
export function createLetterColorScale(lowColor: string, highColor: string) {
  return (letter: string): string => {
    const freq = letterFrequency[letter.toLowerCase() as keyof typeof letterFrequency]
    if (!freq) {
      // Fallback for non A–Z characters
      return lowColor
    }

    const t = FREQ_RANGE === 0 ? 0 : (freq - MIN_FREQ) / FREQ_RANGE
    const pct = Math.round(Math.max(0, Math.min(1, t)) * 100)
    return `color-mix(in srgb, ${highColor} ${pct}%, ${lowColor})`
  }
}
