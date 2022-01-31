// cspell:ignore Lgnd
import KeyIcon, {KeyIconProps} from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {faUpLong} from '@fortawesome/pro-light-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-light-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-light-svg-icons'
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
      <KeyLegend keyContainerProps={{sx: {borderWidth: 0}}} {...props}>
        {children}
      </KeyLegend>
    ),
    []
  )
  const AlphaKeyIcn = useCallback(
    ({...props}: KeyIconProps) => (
      <KeyIcon keyContainerProps={{sx: {borderWidth: 0}}} {...props} />
    ),
    []
  )

  return (
    <ColumnBox flexSpacing={2}>
      <RowBox child flexSpacing={1}>
        <AlphaKeyIcn icon={faDeleteRight} />
        <AlphaKeyLgnd color="solarized.base0">V</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">L</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base02}>D</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">W</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1">X</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1">Q</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">F</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>O</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">U</AlphaKeyLgnd>
        <AlphaKeyLgnd>-</AlphaKeyLgnd>
        <AlphaKeyIcn icon={faDeleteLeft} />
      </RowBox>
      <RowBox child flexSpacing={1}>
        <AlphaKeyLgnd>`</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>S</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base02}>R</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base02}>H</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>N</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">Y</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">G</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>T</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>E</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>I</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>A</AlphaKeyLgnd>
        <AlphaKeyLgnd>=</AlphaKeyLgnd>
      </RowBox>
      <RowBox child flexSpacing={1}>
        <AlphaKeyIcn icon={faUpLong} />
        <AlphaKeyLgnd color="solarized.base1">Z</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1">J</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">M</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">C</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0">B</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0">K</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">P</AlphaKeyLgnd>
        <AlphaKeyLgnd>'</AlphaKeyLgnd>
        <AlphaKeyLgnd>,</AlphaKeyLgnd>
        <AlphaKeyLgnd>.</AlphaKeyLgnd>
        <AlphaKeyIcn icon={faUpLong} />
      </RowBox>
    </ColumnBox>
  )
}
