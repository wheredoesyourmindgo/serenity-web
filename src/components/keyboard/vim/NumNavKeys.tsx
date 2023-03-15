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

export default function NumNavKeys() {
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
          <KeyLegend {...sharedProps} homing vimRefIcn={faArrowLeft}>
            <Type {...sharedTypeProps}>left</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faArrowDown}>
            <Type {...sharedTypeProps}>down</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faArrowUp}>
            <Type {...sharedTypeProps}>up</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faArrowRight}>
            <Type {...sharedTypeProps}>right</Type>
          </KeyLegend>
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
          <KeyLegend {...sharedProps} vimRefIcn={faBorderTopLeft}>
            <Type {...sharedTypeProps}>
              soft
              <br />
              bol.
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faPageCaretDown}>
            <Type {...sharedTypeProps}>pg. down</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faPageCaretUp}>
            <Type {...sharedTypeProps}>pg. up</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faBorderBottomRight}>
            <Type {...sharedTypeProps}>eol.</Type>
          </KeyLegend>
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
