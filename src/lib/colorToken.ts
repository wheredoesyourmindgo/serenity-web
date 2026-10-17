const NUSHU_PREFIX = 'nushu.'

/**
 * Maps a Serenity Nushu token like `nushu.ink-faint` to its CSS custom property
 * name.
 *
 * Tokens outside the `nushu.` namespace are ignored so callers can safely pass
 * through raw CSS colors unchanged.
 *
 * @param color A token or raw CSS color string.
 * @returns The matching CSS custom property name, or `undefined` for non-token values.
 */
function getNushuVariableName(color: string) {
  if (!color.startsWith(NUSHU_PREFIX)) {
    return undefined
  }

  return `--${color.split('.').join('-')}`
}

/**
 * Resolves a Serenity Nushu token to a live CSS variable reference.
 *
 * This keeps the final color value reactive to theme changes because the
 * browser continues resolving `var(--nushu-...)` after light/dark mode
 * switches. Non-token values are returned unchanged so callers may also pass
 * raw CSS colors such as hex, rgb, or named colors.
 *
 * @param color A Serenity Nushu token or raw CSS color.
 * @returns A CSS variable reference for supported tokens, the original color for
 * non-token values, or `undefined` when no color is provided.
 */
export function colorTokenToCssValue(color?: string) {
  if (!color) {
    return color
  }

  const variableName = getNushuVariableName(color)

  return variableName ? `var(${variableName})` : color
}
