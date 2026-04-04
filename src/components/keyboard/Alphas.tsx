'use client'

// cspell:ignore Lgnd
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import {readColorTokenValue} from '@/lib/colorToken'
import {solarized} from '@/lib/solarizedPalette'
import KeyboardGridRow from './KeyboardGridRow'
import {useMemo} from 'react'
import {createLetterColorScale} from '@/lib/letterColorScale'
import {useTheme as useNextTheme} from 'next-themes'

const AlphaKeyLgnd = ({
  children,
  sx,
  frequencyColor = false,
  ...props
}: KeyLegendProps & {frequencyColor?: boolean}) => {
  const {resolvedTheme} = useNextTheme()
  const char = typeof children === 'string' ? children[0].toLowerCase() : ''
  const fallbackPalette = resolvedTheme === 'dark' ? solarized.dark : solarized.light

  const getColor = useMemo(
    () =>
      createLetterColorScale(
        readColorTokenValue('solarized.base1', fallbackPalette.base1), // low frequency color
        readColorTokenValue('solarized.base03', fallbackPalette.base03) // high frequency color
      ),
    [fallbackPalette.base1, fallbackPalette.base03]
  )

  return (
    <KeyLegend
      sx={{
        ...(frequencyColor ? {color: getColor(char)} : {}),
        ...sx
      }}
      KeyContainerProps={{sx: {borderWidth: 0, boxShadow: 'none'}}}
      {...props}
    >
      {children}
    </KeyLegend>
  )
}

export default function AlphaKeyboard() {
  return (
    <div className="flex max-w-full flex-col gap-4">
      <KeyboardGridRow>
        {/* <AlphaKeyIcn icon={faDeleteRight} /> */}
        <AlphaKeyLgnd frequencyColor>Q</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>Z</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>M</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>W</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>V</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>J</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>F</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>O</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>U</AlphaKeyLgnd>
        <AlphaKeyLgnd>-</AlphaKeyLgnd>
        {/* <AlphaKeyIcn className="fa-regular fa-delete-left" /> */}
        <AlphaKeyLgnd />
      </KeyboardGridRow>
      <KeyboardGridRow>
        <AlphaKeyLgnd frequencyColor>R</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>N</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>T</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>S</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>G</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>Y</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>H</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>E</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>A</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>I</AlphaKeyLgnd>
        <AlphaKeyLgnd>;</AlphaKeyLgnd>
        {/* <AlphaKeyLgnd>=</AlphaKeyLgnd> */}
      </KeyboardGridRow>
      <KeyboardGridRow>
        <AlphaKeyLgnd frequencyColor>X</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>L</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>D</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>C</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>B</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>K</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>P</AlphaKeyLgnd>
        <AlphaKeyLgnd>'</AlphaKeyLgnd>
        <AlphaKeyLgnd>,</AlphaKeyLgnd>
        <AlphaKeyLgnd>.</AlphaKeyLgnd>
      </KeyboardGridRow>
    </div>
  )
}
