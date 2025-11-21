import {letterFrequency} from './letterFrequency'

type RGB = [number, number, number]

const frequencies = Object.values(letterFrequency)
const MIN_FREQ = Math.min(...frequencies)
const MAX_FREQ = Math.max(...frequencies)
const FREQ_RANGE = MAX_FREQ - MIN_FREQ

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

function hexToRgb(hex: string): RGB {
  let cleaned = hex.trim()

  // Allow MUI style values with opacity (e.g. #RRGGBBAA) – just strip alpha
  if (cleaned.length === 9 && cleaned.startsWith('#')) {
    cleaned = cleaned.slice(0, 7)
  }

  if (cleaned.startsWith('#')) {
    cleaned = cleaned.slice(1)
  }

  if (cleaned.length === 3) {
    const [r, g, b] = cleaned.split('')
    cleaned = r + r + g + g + b + b
  }

  const r = parseInt(cleaned.slice(0, 2), 16)
  const g = parseInt(cleaned.slice(2, 4), 16)
  const b = parseInt(cleaned.slice(4, 6), 16)

  return [r, g, b]
}

function rgbToCss([r, g, b]: RGB): string {
  return `rgb(${r}, ${g}, ${b})`
}

function lerpChannel(a: number, b: number, t: number): number {
  return Math.round(a + (b - a) * t)
}

function lerpColor(low: RGB, high: RGB, t: number): RGB {
  return [
    lerpChannel(low[0], high[0], t),
    lerpChannel(low[1], high[1], t),
    lerpChannel(low[2], high[2], t)
  ]
}

/**
 * Creates a function that maps letters A–Z to an interpolated color based on
 * English letter frequency.
 *
 * @param lowColor - CSS hex color for the *lowest* frequency (e.g. '#cccccc')
 * @param highColor - CSS hex color for the *highest* frequency (e.g. '#ff0000')
 */
export function createLetterColorScale(lowColor: string, highColor: string) {
  const lowRgb = hexToRgb(lowColor)
  const highRgb = hexToRgb(highColor)

  return (letter: string): string => {
    const ch = letter.toLowerCase() as keyof typeof letterFrequency

    const freq = letterFrequency[ch]
    if (!freq) {
      // Fallback for non A–Z characters
      return rgbToCss(lowRgb)
    }

    // Normalize frequency to [0, 1]
    const t = FREQ_RANGE === 0 ? 0 : (freq - MIN_FREQ) / FREQ_RANGE
    const clampedT = clamp(t, 0, 1)

    const rgb = lerpColor(lowRgb, highRgb, clampedT)
    return rgbToCss(rgb)
  }
}
