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
          <KeyLegend {...sharedProps} vimRef="v" />
          <KeyLegend {...sharedProps} vimRef="l" />
          <KeyLegend {...sharedProps} vimRef="m" />
          <KeyLegend {...sharedProps} vimRef="f" />
          <KeyLegend {...sharedProps} vimRef="x" special>
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>
              <em>todo</em>
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="b" special>
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>
              <em>todo</em>
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="w">
            <Type {...sharedTypeProps} sx={{fontSize: 12}}>{`<ldr>`}</Type>
            <br />
            <Type {...sharedTypeProps}>g</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="o">
            <Type {...sharedTypeProps} sx={{fontSize: 12}}>{`<ldr>`}</Type>
            <br />
            <Type {...sharedTypeProps}>b</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="u">
            <Type {...sharedTypeProps} sx={{fontSize: 12}}>{`<ldr>`}</Type>
            <br />
            <Type {...sharedTypeProps}>e</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="-">
            <Type {...sharedTypeProps} sx={{fontSize: 12}}>{`<ldr>`}</Type>
            <br />
            <Type {...sharedTypeProps}>w</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteLeft} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRef="`" />
          <KeyLegend {...sharedProps} vimRef="s">
            <Type {...sharedTypeProps}>{`<`}</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="r">
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>{`ddp`}</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="t">
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>
              {`dd<up>`}
              <br />
              {`<up>p`}
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="n" homing>
            <Type {...sharedTypeProps}>{`>`}</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="y">
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>
              <em>todo</em>
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              <Type {...sharedTypeProps} sx={{fontSize: 12}}>{`<ldr>`}</Type>
              <br />
              <Type {...sharedTypeProps}>c</Type>
              <Type {...sharedTypeProps} sx={{fontSize: 12}}>{`<spc>`}</Type>
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="g" />
          <KeyLegend {...sharedProps} vimRef="d" homing />
          <KeyLegend {...sharedProps} vimRef="e" />
          <KeyLegend {...sharedProps} vimRef="i" />
          <KeyLegend {...sharedProps} vimRef="a" />
          <KeyLegend {...sharedProps} vimRef="=" />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
          <KeyLegend {...sharedProps} vimRef="z">
            <Type {...sharedTypeProps}>za</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="j" />
          <KeyLegend {...sharedProps} vimRef="k" />
          <KeyLegend {...sharedProps} vimRef="h" />
          <KeyLegend {...sharedProps} vimRef="q" special>
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>
              <em>todo</em>
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="p" />
          <KeyLegend {...sharedProps} vimRef="c" />
          <KeyLegend {...sharedProps} vimRef="'" />
          <KeyLegend {...sharedProps} vimRef="," />
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
