import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Divider, Typography as Type} from '@mui/material'
import {
  faDeleteLeft,
  faDeleteRight,
  faUp
} from '@fortawesome/pro-regular-svg-icons'

export default function LegacyLeaderAlphaKeys() {
  const sharedProps: KeyLegendProps = {
    variant: 'h5',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    KeyContainerProps: {
      sx: {
        width: 75
      }
    }
  } as const

  const sharedTypeProps = {
    component: 'span',
    noWrap: true,
    variant: 'inherit'
  } as const

  return (
    <Box>
      <ColumnBox flexSpacing={1}>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteRight} />
          <KeyLegend {...sharedProps} vimRef="q" />
          <KeyLegend {...sharedProps} vimRef="l" />
          <KeyLegend {...sharedProps} vimRef="c" />
          <KeyLegend {...sharedProps} vimRef="p" />
          <KeyLegend {...sharedProps} vimRef="b" special>
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>
              <em>todo</em>
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="j" special>
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>
              <em>todo</em>
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="f" />
          <KeyLegend {...sharedProps} vimRef="o">
            <Type {...sharedTypeProps}>H</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="u">
            <Type {...sharedTypeProps}>zb</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=";" />
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteLeft} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRef="-" />
          <KeyLegend {...sharedProps} vimRef="m" />
          <KeyLegend {...sharedProps} vimRef="r" />
          <KeyLegend {...sharedProps} vimRef="s" />
          <KeyLegend {...sharedProps} vimRef="t" homing />
          <KeyLegend {...sharedProps} vimRef="g">
            <Type {...sharedTypeProps} sx={{fontSize: 12}}>
              <em>todo</em>
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              <Type {...sharedTypeProps} sx={{fontSize: 12}}>{`<ldr>c`}</Type>
              {/* <Type {...sharedTypeProps} sx={{fontSize: 12}}>{`<spc>`}</Type> */}
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="y" />
          <Type {...sharedTypeProps} />
          <KeyLegend {...sharedProps} vimRef="n" homing />
          <KeyLegend {...sharedProps} vimRef="e">
            <Type {...sharedTypeProps}>M</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="i">
            <Type {...sharedTypeProps}>zz</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="a" />
          <KeyLegend {...sharedProps} vimRef="'">
            <Type {...sharedTypeProps}>%</Type>
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
          <KeyLegend {...sharedProps} vimRef="v">
            <Type {...sharedTypeProps}>za</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="x" />
          <KeyLegend {...sharedProps} vimRef="w" />
          <KeyLegend {...sharedProps} vimRef="d" />
          <KeyLegend {...sharedProps} vimRef="z" special>
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>
              <em>todo</em>
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="k" />
          <KeyLegend {...sharedProps} vimRef="h" />
          <KeyLegend {...sharedProps} vimRef="/">
            <Type {...sharedTypeProps}>L</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=",">
            <Type {...sharedTypeProps}>zt</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="." />
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>:noh</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>:</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>K</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
