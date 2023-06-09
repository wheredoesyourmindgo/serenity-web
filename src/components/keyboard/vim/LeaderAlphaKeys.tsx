import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Divider, Typography as Type} from '@mui/material'
import {
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faDeleteLeft,
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
          <KeyLegend
            {...sharedProps}
            vimRefIcn={faArrowRightLongToLine}
            VimRefIcnProps={{
              sx: {transform: 'translateX(-1px)'}
            }}
          />
          <KeyLegend {...sharedProps} vimRef="q" />
          <KeyLegend {...sharedProps} vimRef="l" />
          <KeyLegend {...sharedProps} vimRef="c">
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
          <KeyLegend {...sharedProps} vimRef="p">
            <Type {...sharedTypeProps}>
              hover
              <br />
              popup
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="b" />
          <KeyLegend {...sharedProps} vimRef="j" />
          <KeyLegend {...sharedProps} vimRef="f">
            <Type {...sharedTypeProps}>
              toggle
              <br />
              fold
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="o">
            <Type {...sharedTypeProps}>
              jump to
              <br />
              top
            </Type>
            {/* <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (INC-
              <br />
              WHTSPC)
            </Type>
            <Divider /> */}
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="u">
            <Type {...sharedTypeProps}>
              scroll
              <br />
              bottom
            </Type>
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
          <KeyLegend
            {...sharedProps}
            vimRefIcn={faArrowUpLeftFromCircle}
            VimRefIcnProps={{
              sx: {
                fontSize: 12
              }
            }}
          >
            <Type {...sharedTypeProps}>
              no
              <br />
              highlight
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="m" />
          <KeyLegend {...sharedProps} vimRef="r" />
          <KeyLegend {...sharedProps} vimRef="s" />
          <KeyLegend {...sharedProps} vimRef="t" homing special>
            <Type {...sharedTypeProps}>
              match
              <br />
              tag
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="g" />
          <KeyLegend {...sharedProps} vimRef="y" />
          <KeyLegend {...sharedProps} vimRef="n" homing />
          <KeyLegend {...sharedProps} vimRef="e">
            <Type {...sharedTypeProps}>
              jump to
              <br />
              middle
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="i">
            <Type {...sharedTypeProps}>
              scroll
              <br />
              middle
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="a" />
          <KeyLegend {...sharedProps} vimRef="'" />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
          <KeyLegend {...sharedProps} vimRef="v" />
          <KeyLegend {...sharedProps} vimRef="x" />
          <KeyLegend {...sharedProps} vimRef="w" />
          <KeyLegend {...sharedProps} vimRef="d">
            <Type {...sharedTypeProps}>
              goto
              <br />
              defi-
              <br />
              nition
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="z">
            <Type {...sharedTypeProps}>Z CMDS</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="k" />
          <KeyLegend {...sharedProps} vimRef="h">
            <Type {...sharedTypeProps}>Help</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="/">
            <Type {...sharedTypeProps}>
              jump to
              <br />
              bottom
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=",">
            <Type {...sharedTypeProps}>
              scroll
              <br />
              top
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="." />
          <KeyLegend {...sharedProps} vimRefIcn={faArrowTurnDownLeft}>
            <Type {...sharedTypeProps}>
              command
              <br />
              mode
            </Type>
          </KeyLegend>
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
