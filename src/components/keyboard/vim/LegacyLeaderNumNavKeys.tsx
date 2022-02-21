import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Typography as Type} from '@mui/material'
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBorderBottomRight,
  faBorderTopLeft,
  faDeleteLeft,
  faDeleteRight,
  faPageCaretDown,
  faPageCaretUp
} from '@fortawesome/pro-regular-svg-icons'

export default function LegacyLeaderNumNavKeys() {
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
          <KeyLegend {...sharedProps} vimRef="1" />
          <KeyLegend {...sharedProps} vimRef="2" />
          <KeyLegend {...sharedProps} vimRef="3" />
          <KeyLegend {...sharedProps} vimRef="4" />
          <KeyLegend {...sharedProps} vimRef="5" />
          <KeyLegend {...sharedProps} vimRef="6" />
          <KeyLegend {...sharedProps} vimRef="7">
            <Type {...sharedTypeProps}>H</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="8" />
          <KeyLegend {...sharedProps} vimRef="9" />
          <KeyLegend {...sharedProps} vimRef="0">
            <Type {...sharedTypeProps}>zb</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteLeft} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} homing />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} vimRefIcn={faArrowLeft} homing>
            <Type {...sharedTypeProps}>M</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faArrowDown} />
          <KeyLegend {...sharedProps} vimRefIcn={faArrowUp} />
          <KeyLegend {...sharedProps} vimRefIcn={faArrowRight}>
            <Type {...sharedTypeProps}>zz</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="=" />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} vimRefIcn={faBorderTopLeft}>
            <Type {...sharedTypeProps}>L</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faPageCaretDown} />
          <KeyLegend {...sharedProps} vimRefIcn={faPageCaretUp} />
          <KeyLegend {...sharedProps} vimRefIcn={faBorderBottomRight}>
            <Type {...sharedTypeProps}>zt</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
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
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>K</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
