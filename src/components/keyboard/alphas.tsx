import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {faUpLong} from '@fortawesome/pro-light-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-light-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-light-svg-icons'
import {KeyLegend} from '@components/key'
import {alpha, useTheme} from '@mui/material'
import {AppTheme} from '@lib/theme'

export default function AlphaKeyboard() {
  const theme = useTheme<AppTheme>()
  const base02 = alpha(theme.palette.solarized.base02, 0.85)
  const base03 = alpha(theme.palette.solarized.base03, 0.95)
  return (
    <ColumnBox flexSpacing={2}>
      <RowBox child flexSpacing={3}>
        <KeyIcon icon={faDeleteRight} />
        <KeyLegend color="solarized.base0">V</KeyLegend>
        <KeyLegend color="solarized.base01">L</KeyLegend>
        <KeyLegend color={base02}>D</KeyLegend>
        <KeyLegend color="solarized.base00">W</KeyLegend>
        <KeyLegend color="solarized.base1">Z</KeyLegend>
        <KeyLegend color="solarized.base1">Q</KeyLegend>
        <KeyLegend color="solarized.base00">F</KeyLegend>
        <KeyLegend color={base03}>O</KeyLegend>
        <KeyLegend color="solarized.base01">U</KeyLegend>
        <KeyLegend>-</KeyLegend>
        <KeyIcon icon={faDeleteLeft} />
      </RowBox>
      <RowBox child flexSpacing={3}>
        <KeyLegend>`</KeyLegend>
        <KeyLegend color={base03}>S</KeyLegend>
        <KeyLegend color={base02}>R</KeyLegend>
        <KeyLegend color={base02}>H</KeyLegend>
        <KeyLegend color={base03}>N</KeyLegend>
        <KeyLegend color="solarized.base00">Y</KeyLegend>
        <KeyLegend color="solarized.base00">G</KeyLegend>
        <KeyLegend color={base03}>T</KeyLegend>
        <KeyLegend color={base03}>E</KeyLegend>
        <KeyLegend color={base03}>I</KeyLegend>
        <KeyLegend color={base03}>A</KeyLegend>
        <KeyLegend>=</KeyLegend>
      </RowBox>
      <RowBox child flexSpacing={3}>
        <KeyIcon icon={faUpLong} />
        <KeyLegend color="solarized.base1">X</KeyLegend>
        <KeyLegend color="solarized.base1">J</KeyLegend>
        <KeyLegend color="solarized.base01">M</KeyLegend>
        <KeyLegend color="solarized.base01">C</KeyLegend>
        <KeyLegend color="solarized.base0">B</KeyLegend>
        <KeyLegend color="solarized.base0">K</KeyLegend>
        <KeyLegend color="solarized.base00">P</KeyLegend>
        <KeyLegend>'</KeyLegend>
        <KeyLegend>,</KeyLegend>
        <KeyLegend>.</KeyLegend>
        <KeyIcon icon={faUpLong} />
      </RowBox>
    </ColumnBox>
  )
}
