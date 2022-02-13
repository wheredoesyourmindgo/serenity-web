import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Divider, Typography as Type} from '@mui/material'

export default function LeaderKeys() {
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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (INC-
              <br />
              WHTSPC)
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              prev.
              <br />
              space
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (INC-
              <br />
              WHTSPC)
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              next
              <br />
              space
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>unindent</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              move ln.
              <br />
              down
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              move ln.
              <br />
              up
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>indent</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              BLOCK
              <br />
              COMMENT
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              line
              <br />
              comment
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              hard
              <br />
              bol.
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
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
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>Help</Type>
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
