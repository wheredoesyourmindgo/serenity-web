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
  faPageCaretUp,
  faUp
} from '@fortawesome/pro-regular-svg-icons'

export default function LeaderNumNavKeys() {
  const sharedProps: KeyLegendProps = {
    variant: 'h5',
    fontSize: 10,
    fontWeight: 500,
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
          <KeyLegend {...sharedProps} vimRef="7" />
          <KeyLegend {...sharedProps} vimRef="8" />
          <KeyLegend {...sharedProps} vimRef="9" />
          <KeyLegend {...sharedProps} vimRef="0" />
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
          <KeyLegend {...sharedProps} vimRefIcn={faArrowLeft} homing />
          <KeyLegend {...sharedProps} vimRefIcn={faArrowDown} />
          <KeyLegend {...sharedProps} vimRefIcn={faArrowUp} />
          <KeyLegend {...sharedProps} vimRefIcn={faArrowRight} />
          <KeyLegend {...sharedProps} vimRef="'" />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} vimRefIcn={faBorderTopLeft} />
          <KeyLegend {...sharedProps} vimRefIcn={faPageCaretDown}>
            <Type {...sharedTypeProps} />
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faPageCaretUp}>
            <Type {...sharedTypeProps} />
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faBorderBottomRight} />
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
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
