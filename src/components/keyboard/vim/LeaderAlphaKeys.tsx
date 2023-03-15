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
          <KeyLegend {...sharedProps} vimRef="q" />
          <KeyLegend {...sharedProps} vimRef="l" />
          <KeyLegend {...sharedProps} vimRef="c" />
          <KeyLegend {...sharedProps} vimRef="p" />
          <KeyLegend {...sharedProps} vimRef="b" special>
            <Type {...sharedTypeProps}>
              hover
              <br />
              popup
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="j" special>
            <Type {...sharedTypeProps}>
              goto
              <br />
              defi-
              <br />
              nition
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="f" />
          <KeyLegend {...sharedProps} vimRef="o">
            {/* <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (INC-
              <br />
              WHTSPC)
            </Type>
            <Divider /> */}
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="u">
            {/* <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (INC-
              <br />
              WHTSPC)
            </Type>
            <Divider /> */}
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
          <KeyLegend {...sharedProps} vimRef="y">
            <Type {...sharedTypeProps}>
              jump to
              <br />
              middle
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="n" homing />
          <KeyLegend {...sharedProps} vimRef="e">
            <Type {...sharedTypeProps}>
              jump to
              <br />
              bottom
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="i">
            <Type {...sharedTypeProps}>
              jump
              <br />
              to top
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="a" />
          <KeyLegend {...sharedProps} vimRef="'">
            <Type {...sharedTypeProps}>
              goto
              <br />
              match
            </Type>
          </KeyLegend>
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
          <KeyLegend {...sharedProps} vimRef="x" />
          <KeyLegend {...sharedProps} vimRef="w" />
          <KeyLegend {...sharedProps} vimRef="d" />
          <KeyLegend {...sharedProps} vimRef="z" special>
            <Type {...sharedTypeProps}>
              reflow
              <br />
              text
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="k">
            <Type {...sharedTypeProps}>
              scroll
              <br />
              middle
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="h">
            <Type {...sharedTypeProps}>
              SOFT BOL.
              <br />
              DOWN
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>hard bol.</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="/">
            <Type {...sharedTypeProps}>
              scroll
              <br />
              top
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=",">
            <Type {...sharedTypeProps}>
              scroll
              <br />
              bottom
            </Type>
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
