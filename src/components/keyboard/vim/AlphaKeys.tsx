import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Divider, Typography as Type} from '@mui/material'
import {
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faBracketSquare,
  faDeleteLeft,
  faDeleteRight,
  faUp
} from '@fortawesome/pro-regular-svg-icons'

export default function AlphaKeys() {
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
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteRight}>
            <Type {...sharedTypeProps}>
              delete
              <br />
              char
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="q">
            {/* <Type {...sharedTypeProps}>SET MARK</Type> */}
            {/* <Divider /> */}
            <Type {...sharedTypeProps}>Z CMDS</Type>
            <Divider />
            <Type {...sharedTypeProps}>g cmds</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="l">
            <Type {...sharedTypeProps}>
              change
              <br />
              case
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="c">
            <Type {...sharedTypeProps}>
              CHANGE
              <br />
              EOL.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>change</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="p">
            <Type {...sharedTypeProps}>RPLC. LN.</Type>
            <Divider />
            <Type {...sharedTypeProps}>
              replace
              <br />
              char
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="b" special>
            <Type {...sharedTypeProps}>UN-EXP.</Type>
            <Divider />
            <Type {...sharedTypeProps}>
              text
              <br /> expansion
            </Type>
          </KeyLegend>
          {/* <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>SCROLL TOP</Type>
            <Divider />
            <Type {...sharedTypeProps}>screen top</Type>
          </KeyLegend> */}
          <KeyLegend {...sharedProps} vimRef="j">
            <Type {...sharedTypeProps}>
              FIND
              <br />
              CHAR REV.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>find char</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="f">
            <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (non-whtspc)
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              prev. end
              <br /> word
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="o">
            <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (non-whtspc)
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              prev. beg.
              <br /> word
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="u">
            <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (non-whtspc)
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              next end
              <br />
              word
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=";">
            <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (non-whtspc)
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              next beg.
              <br /> word
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteLeft}>
            <Type {...sharedTypeProps}>backspace</Type>
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRef="-">
            <Type {...sharedTypeProps}>SET MARK</Type>
            <Divider />
            <Type {...sharedTypeProps}>
              register
              <br />
              spc.
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="m">
            <Type {...sharedTypeProps}>SUBST LINE</Type>
            <Divider />
            <Type {...sharedTypeProps}>subst char</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="r">
            <Type {...sharedTypeProps}>INS. BOL.</Type>
            <Divider />
            <Type {...sharedTypeProps}>
              insert
              <br /> mode
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="s">
            <Type {...sharedTypeProps}>APND. EOL.</Type>
            <Divider />
            <Type {...sharedTypeProps}>append</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="t" homing>
            <Type {...sharedTypeProps}>
              OPEN
              <br /> ABOVE
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              open
              <br /> below
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="g">
            <Type {...sharedTypeProps}>
              VISUAL
              <br /> LINE
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              visual
              <br /> mode
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="y">
            <Type {...sharedTypeProps}>TILL REV.</Type>
            <Divider />
            <Type {...sharedTypeProps}>till</Type>
          </KeyLegend>
          {/* <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>SCROLL MID</Type>
            <Divider />
            <Type {...sharedTypeProps}>screen mid</Type>
          </KeyLegend> */}
          <KeyLegend {...sharedProps} vimRef="n" homing>
            <Type {...sharedTypeProps}>
              PREV.
              <br />
              CHAR/TILL
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              soft
              <br />
              bol.
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="e">
            <Type {...sharedTypeProps}>
              SCROLL
              <br />
              DOWN
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>next line</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="i">
            <Type {...sharedTypeProps}>
              SCROLL
              <br />
              UP
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>prev. line</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="a">
            <Type {...sharedTypeProps}>
              NEXT
              <br />
              CHAR/TILL
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>eol.</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="'">
            <Type {...sharedTypeProps}>
              GOTO MARK
              <br /> BOL.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>goto mark</Type>
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
          <KeyLegend {...sharedProps} vimRef="v">
            <Type {...sharedTypeProps}>UNDO LINE</Type>
            <Divider />
            <Type {...sharedTypeProps}>undo</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="x">
            <Type {...sharedTypeProps}>
              DELETE
              <br /> EOL.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>delete</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="w">
            <Type {...sharedTypeProps}>
              YANK
              <br /> EOL.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>yank</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="d">
            <Type {...sharedTypeProps}>
              PASTE
              <br /> BEFORE
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              paste
              <br />
              after
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="z">
            <Type {...sharedTypeProps}>
              REPEAT
              <br /> SUB.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>redo</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="k">
            <Type {...sharedTypeProps}>FIND REV.</Type>
            <Divider />
            <Type {...sharedTypeProps}>find</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="h">
            <Type {...sharedTypeProps}>FIND PREV.</Type>
            <Divider />
            <Type {...sharedTypeProps}>
              prv. word
              <br />
              instance
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="/" special>
            <Type {...sharedTypeProps}>
              NEXT <br />
              BRACKET
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              half <br />
              pg. down
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="," special>
            <Type {...sharedTypeProps}>
              PREV. <br />
              BRACKET
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              half <br />
              pg. up
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=".">
            <Type {...sharedTypeProps}>FIND NEXT</Type>
            <Divider />
            <Type {...sharedTypeProps}>
              next word
              <br />
              instance
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend
            {...sharedProps}
            vimRefIcn={faArrowUpLeftFromCircle}
            VimRefIcnProps={{
              sx: {
                fontSize: 12
              }
            }}
          >
            <Type {...sharedTypeProps}>escape</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faArrowTurnDownLeft}>
            <Type {...sharedTypeProps}>
              command
              <br />
              mode
            </Type>
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            vimRefIcn={faBracketSquare}
            VimRefIcnProps={{
              rotation: 270,
              sx: {
                transform: 'translateX(-3px)'
              }
            }}
          >
            <Type {...sharedTypeProps}>{`<leader>`}</Type>
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            vimRefIcn={faArrowRightLongToLine}
            VimRefIcnProps={{
              sx: {transform: 'translateX(-1px)'}
            }}
          >
            <Type {...sharedTypeProps}>
              repeat
              <br />
              cmd.
            </Type>
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
