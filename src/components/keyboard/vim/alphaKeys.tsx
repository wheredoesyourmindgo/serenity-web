import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Divider, Typography as Type} from '@mui/material'

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
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              delete
              <br />
              char
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            {/* <Type {...sharedTypeProps}>SET MARK</Type> */}
            {/* <Divider /> */}
            <Type {...sharedTypeProps}>
              register
              <br />
              spc.
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>Z CMDS</Type>
            <Divider />
            <Type {...sharedTypeProps}>g cmds</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              CHANGE
              <br />
              EOL.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>change</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>RPLC. LN.</Type>
            <Divider />
            <Type {...sharedTypeProps}>
              replace
              <br />
              char
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} special>
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
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>TILL REV.</Type>
            <Divider />
            <Type {...sharedTypeProps}>till</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (non-whtspc)
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              prev. end
              <br /> word
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (non-whtspc)
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              prev. beg.
              <br /> word
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
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
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps} sx={{fontSize: 9}}>
              (non-whtspc)
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              next beg.
              <br /> word
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>backspace</Type>
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>set mark</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>SUBST LINE</Type>
            <Divider />
            <Type {...sharedTypeProps}>subst char</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>INS. BOL.</Type>
            <Divider />
            <Type {...sharedTypeProps}>
              insert
              <br /> mode
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>APND. EOL.</Type>
            <Divider />
            <Type {...sharedTypeProps}>append</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
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
          <KeyLegend {...sharedProps}>
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
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              FIND
              <br />
              CHAR REV.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>find char</Type>
          </KeyLegend>
          {/* <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>SCROLL MID</Type>
            <Divider />
            <Type {...sharedTypeProps}>screen mid</Type>
          </KeyLegend> */}
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              TILL/FIND
              <br />
              CHAR PREV.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              prev.
              <br />
              sentence
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              SCROLL
              <br />
              DOWN
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>next line</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              SCROLL
              <br />
              UP
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>prev. line</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              TILL/FIND
              <br />
              CHAR NEXT
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>
              next
              <br />
              sentence
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              GOTO MARK
              <br /> BOL.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>goto mark</Type>
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>UNDO LINE</Type>
            <Divider />
            <Type {...sharedTypeProps}>undo</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              DELETE
              <br /> EOL.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>delete</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              YANK
              <br /> EOL.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>yank</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
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
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              REPEAT
              <br /> SUB.
            </Type>
            <Divider />
            <Type {...sharedTypeProps}>redo</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>FIND REV.</Type>
            <Divider />
            <Type {...sharedTypeProps}>find</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>FIND PREV.</Type>
            <Divider />
            <Type {...sharedTypeProps}>
              prev. word
              <br />
              instance
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              next
              <br />
              paragraph
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              prev.
              <br />
              paragraph
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>FIND NEXT</Type>
            <Divider />
            <Type {...sharedTypeProps}>
              next word
              <br />
              instance
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              command
              <br />
              mode
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>redo</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>{`<leader>`}</Type>
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
