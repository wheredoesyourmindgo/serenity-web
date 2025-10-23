// cspell:ignore Lgnd
import {ColumnBox, RowBox} from '@components/flexbox'
// import KeyIcon, {KeyIconProps} from '@components/key/KeyIcon'
// import {faDeleteRight} from '@fortawesome/pro-light-svg-icons'
// import {faDeleteLeft} from '@fortawesome/pro-light-svg-icons'
import {KeyLegend} from '@components/key'
import {alpha, useTheme} from '@mui/material'
import {AppTheme} from '@lib/theme'
import {useCallback} from 'react'
import {KeyLegendProps} from '@components/key/KeyLegend'

export default function AlphaKeyboard() {
  const theme = useTheme<AppTheme>()
  const base02 = alpha(theme.palette.solarized.base02, 0.85)
  const base03 = alpha(theme.palette.solarized.base03, 0.95)
  const AlphaKeyLgnd = useCallback(
    ({children, ...props}: KeyLegendProps) => (
      <KeyLegend
        KeyContainerProps={{sx: {borderWidth: 0, boxShadow: 'none'}}}
        {...props}
      >
        {children}
      </KeyLegend>
    ),
    []
  )
  // const AlphaKeyIcn = useCallback(
  //   ({...props}: KeyIconProps) => (
  //     <KeyIcon KeyContainerProps={{sx: {borderWidth: 0}}} {...props} />
  //   ),
  //   []
  // )

  return (
    <ColumnBox flexSpacing={2}>
      <RowBox child flexSpacing={1}>
        {/* <AlphaKeyIcn icon={faDeleteRight} /> */}
        <AlphaKeyLgnd color="solarized.base1">Q</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">L</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base02}>D</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">W</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0">V</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1">J</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">F</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>O</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">U</AlphaKeyLgnd>
        <AlphaKeyLgnd>-</AlphaKeyLgnd>
        {/* <AlphaKeyIcn className="fa-regular fa-delete-left" /> */}
        <AlphaKeyLgnd />
      </RowBox>
      <RowBox child flexSpacing={1}>
        <AlphaKeyLgnd color={base02}>R</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>N</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>T</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>S</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">G</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">Y</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base02}>H</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>E</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>A</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>I</AlphaKeyLgnd>
        <AlphaKeyLgnd>;</AlphaKeyLgnd>
        {/* <AlphaKeyLgnd>=</AlphaKeyLgnd> */}
      </RowBox>
      <RowBox child flexSpacing={1}>
        <AlphaKeyLgnd color="solarized.base1">Z</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1">X</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">M</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">C</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0">B</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0">K</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">P</AlphaKeyLgnd>
        <AlphaKeyLgnd>'</AlphaKeyLgnd>
        <AlphaKeyLgnd>,</AlphaKeyLgnd>
        <AlphaKeyLgnd>.</AlphaKeyLgnd>
      </RowBox>
    </ColumnBox>
  )
}
