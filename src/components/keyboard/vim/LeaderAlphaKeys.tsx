import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Divider, Typography as Type} from '@mui/material'
import {
  faDeleteLeft,
  faDeleteRight,
  faUp
} from '@fortawesome/pro-regular-svg-icons'

export default function LeaderAlphaKeys() {
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
          <KeyLegend {...sharedProps} vimRef="z" />
          <KeyLegend {...sharedProps} vimRef="l" />
          <KeyLegend {...sharedProps} vimRef="m" />
          <KeyLegend {...sharedProps} vimRef="f" />
          <KeyLegend {...sharedProps} vimRef="q" special>
            <Type {...sharedTypeProps}>
              hover
              <br />
              popup
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="x" special>
            <Type {...sharedTypeProps}>
              goto
              <br />
              defi-
              <br />
              nition
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="w">
            <Type {...sharedTypeProps}>
              end prev.
              <br />
              camelCase
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="o">
            {/* <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (INC-
              <br />
              WHTSPC)
            </Type>
            <Divider /> */}
            <Type {...sharedTypeProps}>
              beg.
              <br />
              camelCase
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="u">
            {/* <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (INC-
              <br />
              WHTSPC)
            </Type>
            <Divider /> */}
            <Type {...sharedTypeProps}>
              end
              <br />
              camelCase
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=";">
            <Type {...sharedTypeProps}>
              beg. next
              <br />
              camelCase
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteLeft} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRef="-" />
          <KeyLegend {...sharedProps} vimRef="s">
            <Type {...sharedTypeProps}>unindent</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="r">
            <Type {...sharedTypeProps}>
              move ln.
              <br />
              down
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="t">
            <Type {...sharedTypeProps}>
              move ln.
              <br />
              up
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="n" homing>
            <Type {...sharedTypeProps}>indent</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="p">
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
          <KeyLegend {...sharedProps} vimRef="y" />
          <KeyLegend {...sharedProps} vimRef="d" homing />
          <KeyLegend {...sharedProps} vimRef="e" />
          <KeyLegend {...sharedProps} vimRef="i" />
          <KeyLegend {...sharedProps} vimRef="a" />
          <KeyLegend {...sharedProps} vimRef="=" />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
          <KeyLegend {...sharedProps} vimRef="v">
            <Type {...sharedTypeProps}>
              toggle
              <br />
              fold
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="j" />
          <KeyLegend {...sharedProps} vimRef="k" />
          <KeyLegend {...sharedProps} vimRef="h" />
          <KeyLegend {...sharedProps} vimRef="b" special>
            <Type {...sharedTypeProps}>
              reflow
              <br />
              text
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="g" />
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
