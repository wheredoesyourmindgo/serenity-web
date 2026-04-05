const SOLARIZED_PREFIX = 'solarized.'

/**
 * Maps a Serenity Solarized token like `solarized.base1` to its CSS custom
 * property name.
 *
 * Tokens outside the `solarized.` namespace are ignored so callers can safely
 * pass through raw CSS colors unchanged.
 *
 * @param color A token or raw CSS color string.
 * @returns The matching CSS custom property name, or `undefined` for non-token values.
 */
function getSolarizedVariableName(color: string) {
  if (!color.startsWith(SOLARIZED_PREFIX)) {
    return undefined
  }

  return `--${color.split('.').join('-')}`
}

/**
 * Resolves a Serenity Solarized token to a live CSS variable reference.
 *
 * This keeps the final color value reactive to theme changes because the
 * browser continues resolving `var(--solarized-...)` after light/dark mode
 * switches. Non-token values are returned unchanged so callers may also pass
 * raw CSS colors such as hex, rgb, or named colors.
 *
 * @param color A Serenity Solarized token or raw CSS color.
 * @returns A CSS variable reference for supported tokens, the original color for
 * non-token values, or `undefined` when no color is provided.
 */
export function colorTokenToCssValue(color?: string) {
  if (!color) {
    return color
  }

  const variableName = getSolarizedVariableName(color)

  return variableName ? `var(${variableName})` : color
}
