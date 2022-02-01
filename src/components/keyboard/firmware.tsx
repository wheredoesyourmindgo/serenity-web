import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faBracketSquare,
  faComputerMouse,
  faFunction,
  faOption,
  faRightToBracket,
  faUpLong
} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Typography} from '@mui/material'
import {Box} from '@mui/system'

export default function FirmwareKeyboard() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}
  return (
    <ColumnBox flexSpacing={1}>
      <RowBox child flexSpacing={1}>
        <KeyIcon
          icon={faDeleteRight}
          keyContainerProps={{
            popOverContent: (
              <Box p={1}>
                <Typography
                  component="span"
                  color="text.primary"
                  sx={{paddingRight: 1.5}}
                >
                  <em>tap/hold</em>
                </Typography>
                <Typography component="span" color="text.secondary">
                  Delete
                </Typography>
                <br />
                <Typography
                  component="span"
                  color="text.primary"
                  sx={{paddingRight: 1.5}}
                >
                  <em>shifted</em>
                </Typography>
                <Typography component="span" color="text.secondary">
                  Delete word right
                </Typography>
              </Box>
            )
          }}
          shiftIcn={faRightToBracket}
          sx={{
            transform: 'translateX(2px)'
          }}
        />
        <KeyLegend {...sharedProps} shiftLgnd="V">
          v
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="L">
          l
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="D">
          d
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="W">
          w
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="X">
          x
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="Q">
          q
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="F">
          f
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="O">
          o
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="U">
          u
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="_">
          -
        </KeyLegend>
        <KeyIcon
          icon={faDeleteLeft}
          keyContainerProps={{
            popOverContent: (
              <Box p={1}>
                <Typography
                  component="span"
                  color="text.primary"
                  sx={{paddingRight: 1.5}}
                >
                  <em>tap/hold</em>
                </Typography>
                <Typography component="span" color="text.secondary">
                  Backspace
                </Typography>
                <br />
                <Typography
                  component="span"
                  color="text.primary"
                  sx={{paddingRight: 1.5}}
                >
                  <em>shifted</em>
                </Typography>
                <Typography component="span" color="text.secondary">
                  Backspace word left
                </Typography>
              </Box>
            )
          }}
          shiftIcn={faRightToBracket}
          shiftIcnProps={{flip: 'horizontal'}}
        />
      </RowBox>
      <RowBox child flexSpacing={1}>
        <KeyLegend {...sharedProps} shiftLgnd="~">
          `
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="S">
          s
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="R">
          r
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="H">
          h
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="N">
          n
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="Y">
          y
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="G">
          g
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="T">
          t
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="E">
          e
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="I">
          i
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="A">
          a
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="+">
          =
        </KeyLegend>
      </RowBox>
      <RowBox child flexSpacing={1}>
        <KeyIcon
          icon={faUpLong}
          keyContainerProps={{
            popOverContent: (
              <Box p={1}>
                <Typography
                  component="span"
                  color="text.primary"
                  sx={{paddingRight: 1.5}}
                >
                  <em>tap/hold</em>
                </Typography>
                <Typography component="span" color="text.secondary">
                  Left Shift
                </Typography>
              </Box>
            )
          }}
        />
        <KeyLegend {...sharedProps} shiftLgnd="Z">
          z
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="J">
          j
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="M">
          m
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="C">
          c
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="B">
          b
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="K">
          k
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd="P">
          p
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd='"'>
          '
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd=";">
          ,
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftLgnd=":">
          .
        </KeyLegend>
        <KeyIcon
          icon={faUpLong}
          keyContainerProps={{
            popOverContent: (
              <Box p={1}>
                <Typography
                  component="span"
                  color="text.primary"
                  sx={{paddingRight: 1.5}}
                >
                  <em>tap/hold</em>
                </Typography>
                <Typography component="span" color="text.secondary">
                  Right Shift
                </Typography>
              </Box>
            )
          }}
        />
      </RowBox>
      <RowBox child flexSpacing={1}>
        <KeyIcon icon={faComputerMouse} />
        <KeyIcon icon={faChevronUp} />
        <KeyIcon icon={faOption} sx={{fontSize: 19}} />
        <KeyIcon icon={faCommand} />
        <KeyIcon icon={faArrowUpLeftFromCircle} sx={{fontSize: 19}} />
        <KeyIcon icon={faArrowTurnDownLeft} />
        <KeyIcon icon={faArrowRightLongToLine} />
        <KeyIcon icon={faBracketSquare} rotation={270} />
        <KeyIcon icon={faCommand} />
        <KeyIcon icon={faOption} sx={{fontSize: 19}} />
        <KeyIcon icon={faChevronUp} />
        <KeyIcon icon={faFunction} />
      </RowBox>
    </ColumnBox>
  )
}
