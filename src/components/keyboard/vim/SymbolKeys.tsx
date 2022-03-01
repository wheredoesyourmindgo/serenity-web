import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Typography as Type} from '@mui/material'
import {
  faDeleteLeft,
  faDeleteRight,
  faUp
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
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteRight} />
          <KeyLegend {...sharedProps} vimRef="!" />
          <KeyLegend {...sharedProps} vimRef="@">
            <Type {...sharedTypeProps}>
              expert
              <br />
              mode
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="#">
            <Type {...sharedTypeProps}>
              join
              <br />
              lines
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="$">
            <Type {...sharedTypeProps}>
              toggle
              <br />
              case
            </Type>
          </KeyLegend>

          <KeyLegend {...sharedProps} vimRef="%" />
          <KeyLegend {...sharedProps} vimRef="^" />
          <KeyLegend {...sharedProps} vimRef="&" />
          <KeyLegend {...sharedProps} vimRef="(" />
          <KeyLegend {...sharedProps} vimRef=")" />
          <KeyLegend {...sharedProps} vimRef="*" />
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteLeft} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} homing />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} vimRef="?">
            <Type {...sharedTypeProps}>
              goto
              <br />
              match
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="{" homing>
            <Type {...sharedTypeProps}>
              previous
              <br />
              bracket
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="<">
            <Type {...sharedTypeProps}>matchit</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=">">
            <Type {...sharedTypeProps}>matchit</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="}">
            <Type {...sharedTypeProps}>
              next
              <br />
              bracket
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
          <KeyLegend {...sharedProps} vimRef="|" />
          <KeyLegend {...sharedProps} vimRef="/" special>
            <Type {...sharedTypeProps}>
              add sel.
              <br />
              prev.
              <br /> match
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="[" />
          <KeyLegend {...sharedProps} vimRef="]" />
          <KeyLegend {...sharedProps} vimRef="\" special>
            <Type {...sharedTypeProps}>
              add sel.
              <br />
              next
              <br />
              match
            </Type>
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
