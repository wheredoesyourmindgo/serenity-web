const SOLARIZED_PREFIX = 'solarized.'

function getSolarizedVariableName(color: string) {
  if (!color.startsWith(SOLARIZED_PREFIX)) {
    return undefined
  }

  return `--${color.split('.').join('-')}`
}

export function colorTokenToCssValue(color?: string) {
  if (!color) {
    return color
  }

  const variableName = getSolarizedVariableName(color)

  return variableName ? `var(${variableName})` : color
}

export function readColorTokenValue(color: string, fallback?: string) {
  const variableName = getSolarizedVariableName(color)

  if (!variableName) {
    return color
  }

  if (typeof window === 'undefined') {
    return fallback ?? color
  }

  const value = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()

  return value || fallback || color
}
