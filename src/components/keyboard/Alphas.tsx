'use client'

// cspell:ignore Lgnd
// import KeyIcon, {KeyIconProps} from '@components/key/KeyIcon'
// import {faDeleteRight} from '@fortawesome/pro-light-svg-icons'
// import {faDeleteLeft} from '@fortawesome/pro-light-svg-icons'
import {KeyLegend} from '@components/key'
import {Grid, useTheme} from '@mui/material'
import {KeyLegendProps} from '@components/key/KeyLegend'
import KeyboardGridRow from './KeyboardGridRow'
import {useMemo} from 'react'
import {createLetterColorScale} from '@lib/letterColorScale'

const AlphaKeyLgnd = ({
  children,
  sx,
  frequencyColor = false,
  ...props
}: KeyLegendProps & {frequencyColor?: boolean}) => {
  const theme = useTheme()
  const char = typeof children === 'string' ? children[0].toLowerCase() : ''

  const getColor = useMemo(
    () =>
      createLetterColorScale(
        theme.palette.solarized.base1, // low frequency color
        theme.palette.solarized.base03 // high frequency color
      ),
    [theme]
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
  // const base02 = alpha(theme.palette.solarized.base02, 0.85)
  // const base03 = alpha(theme.palette.solarized.base03, 0.95)

  // const AlphaKeyIcn = useCallback(
  //   ({...props}: KeyIconProps) => (
  //     <KeyIcon KeyContainerProps={{sx: {borderWidth: 0}}} {...props} />
  //   ),
  //   []
  // )

  return (
    <Grid container direction="column" spacing={2} sx={{maxWidth: '100%'}}>
      <KeyboardGridRow>
        {/* <AlphaKeyIcn icon={faDeleteRight} /> */}
        <AlphaKeyLgnd frequencyColor>Q</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>L</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>D</AlphaKeyLgnd>
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
        <AlphaKeyLgnd frequencyColor>Z</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>M</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>C</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>B</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>K</AlphaKeyLgnd>
        <AlphaKeyLgnd frequencyColor>P</AlphaKeyLgnd>
        <AlphaKeyLgnd>'</AlphaKeyLgnd>
        <AlphaKeyLgnd>,</AlphaKeyLgnd>
        <AlphaKeyLgnd>.</AlphaKeyLgnd>
      </KeyboardGridRow>
    </Grid>
  )
}
