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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} vimRef="1" />
          <KeyLegend {...sharedProps} vimRef="2" />
          <KeyLegend {...sharedProps} vimRef="3" />
          <KeyLegend {...sharedProps} vimRef="4" />
          <KeyLegend {...sharedProps} vimRef="5" />
          <KeyLegend {...sharedProps} vimRef="6" />
          <KeyLegend {...sharedProps} vimRef="7">
            <Type {...sharedTypeProps}>
              jump
              <br />
              to top
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="8" />
          <KeyLegend {...sharedProps} vimRef="9" />
          <KeyLegend {...sharedProps} vimRef="0">
            <Type {...sharedTypeProps}>
              scroll
              <br />
              bottom
            </Type>
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
          <KeyLegend {...sharedProps} homing vimRefIcn={faArrowLeft}>
            <Type {...sharedTypeProps}>
              jump to
              <br />
              middle
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faArrowDown}>
            <Type {...sharedTypeProps} />
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faArrowUp}>
            <Type {...sharedTypeProps} />
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faArrowRight}>
            <Type {...sharedTypeProps}>
              scroll
              <br />
              middle
            </Type>
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
            <Type {...sharedTypeProps}>
              jump to
              <br />
              bottom
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faPageCaretDown}>
            <Type {...sharedTypeProps} />
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faPageCaretUp}>
            <Type {...sharedTypeProps} />
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faBorderBottomRight}>
            <Type {...sharedTypeProps}>
              scroll
              <br />
              top
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              no
              <br />
              highlight
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              command
              <br />
              mode
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>Help</Type>
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
