'use client'

// cspell:ignore Lgnd
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import type {KeyContainerProps} from '@/components/key/KeyContainer'
import KeyboardGridRow from './KeyboardGridRow'
import {createLetterColorScale} from '@/lib/letterColorScale'

// low frequency letters are faint, high frequency letters deepest
const getColor = createLetterColorScale('var(--nushu-ink-faint)', 'var(--nushu-ink-deepest)')

const AlphaKeyLgnd = ({
  children,
  frequencyColor = false,
  color,
  ...props
}: KeyLegendProps & {frequencyColor?: boolean}) => {
  const char = typeof children === 'string' ? children[0].toLowerCase() : ''

  return (
    <KeyLegend
      color={frequencyColor ? getColor(char) : color}
      KeyContainerProps={
        {
          style: {borderWidth: 0, boxShadow: 'none', background: 'transparent'},
          // lets the homepage heatmap find each key
          'data-key': char || undefined
        } as KeyContainerProps
      }
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
