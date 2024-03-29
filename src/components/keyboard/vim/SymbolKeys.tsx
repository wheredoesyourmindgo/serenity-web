import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Typography as Type} from '@mui/material'
import {
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faDeleteLeft
} from '@fortawesome/pro-regular-svg-icons'

export default function SymbolKeys() {
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
          <KeyLegend
            {...sharedProps}
            vimRefIcn={faArrowRightLongToLine}
            VimRefIcnProps={{
              sx: {transform: 'translateX(-1px)'}
            }}
          />
          <KeyLegend {...sharedProps} vimRef="!">
            <Type {...sharedTypeProps}>
              expert
              <br />
              mode
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="@" />
          <KeyLegend {...sharedProps} vimRef="#" />
          <KeyLegend {...sharedProps} vimRef="$" />
          <KeyLegend {...sharedProps} vimRef="%" />
          <KeyLegend {...sharedProps} vimRef="^">
            <Type {...sharedTypeProps}>
              goto <br /> match
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="&">
            <Type {...sharedTypeProps}>
              end prev.
              <br />
              camelCase
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="*">
            <Type {...sharedTypeProps}>
              beg.
              <br />
              camelCase
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="(">
            <Type {...sharedTypeProps}>
              end
              <br />
              camelCase
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=")">
            <Type {...sharedTypeProps}>
              beg. next
              <br />
              camelCase
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
          <KeyLegend {...sharedProps} vimRef="\">
            <Type {...sharedTypeProps}>
              join <br />
              lines
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="-" homing>
            <Type {...sharedTypeProps}>unindent</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="=">
            <Type {...sharedTypeProps}>
              move ln.
              <br />
              down
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="{">
            <Type {...sharedTypeProps}>
              move ln.
              <br />
              up
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="}">
            <Type {...sharedTypeProps}>indent</Type>
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
          <KeyLegend {...sharedProps} vimRef="|" />
          <KeyLegend {...sharedProps} vimRef="_">
            <Type {...sharedTypeProps}>
              prev.
              <br />
              sentence
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="+">
            <Type {...sharedTypeProps}>
              next
              <br />
              paragraph
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="[">
            <Type {...sharedTypeProps}>
              prev.
              <br />
              paragraph
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="]">
            <Type {...sharedTypeProps}>
              next
              <br />
              sentence
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faArrowTurnDownLeft} />
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
