import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUp,
  faBorderBottomRight,
  faBorderTopLeft,
  faBracketSquare,
  faCalculatorSimple,
  faComputerMouse,
  faCopy,
  faFunction,
  faLock,
  faLockOpen,
  faOption,
  faPageCaretDown,
  faPageCaretUp,
  faPaste,
  faRedo,
  faRightToBracket,
  faScissors,
  faUndo,
  faUpLong
} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'
import {faSignatureLock} from '@fortawesome/pro-regular-svg-icons'

export default function NumNavLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

  return (
    <Box>
      <ColumnBox flexSpacing={1}>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            customShiftCode
            icon={faDeleteRight}
            KeyContainerProps={{
              keyId: 'delete-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Delete" />
                  <br />
                  <PopoverDesc action="shifted" output="Delete word right" />
                </Box>
              )
            }}
            shiftSubIcn={faRightToBracket}
            sx={{
              transform: 'translateX(2px)'
            }}
          />
          <KeyLegend {...sharedProps} shiftLgnd="!">
            1
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="@">
            2
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="#">
            3
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="$">
            4
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="%">
            5
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="^">
            6
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="&amp;">
            7
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="(" customShiftCode>
            8
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd=")" customShiftCode>
            9
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="*" customShiftCode>
            0
          </KeyLegend>
          <KeyIcon
            customShiftCode
            icon={faDeleteLeft}
            KeyContainerProps={{
              keyId: 'backspace-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Backspace" />
                  <br />
                  <PopoverDesc action="shifted" output="Backspace word left" />
                </Box>
              )
            }}
            shiftSubIcn={faRightToBracket}
            ShiftSubIcnProps={{flip: 'horizontal'}}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} shiftLgnd="~">
            `
          </KeyLegend>
          <KeyIcon icon={faChevronUp} color="solarized.orange" />
          <KeyIcon
            icon={faOption}
            color="solarized.orange"
            sx={{fontSize: 19}}
          />
          <KeyIcon icon={faCommand} color="solarized.orange" />
          <KeyIcon icon={faUpLong} color="solarized.orange" />
          <KeyIcon icon={faLock} />
          <KeyLegend {...sharedProps}>.</KeyLegend>
          <KeyIcon icon={faArrowLeft} />
          <KeyIcon icon={faArrowDown} />
          <KeyIcon icon={faArrowUp} />
          <KeyIcon icon={faArrowRight} />
          <KeyLegend {...sharedProps}>=</KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            icon={faUpLong}
            KeyContainerProps={{
              keyId: 'left-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Left Shift" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faUndo} />
          <KeyIcon icon={faScissors} />
          <KeyIcon icon={faCopy} />
          <KeyIcon icon={faPaste} />
          <KeyIcon icon={faRedo} />
          <KeyIcon
            icon={faCalculatorSimple}
            KeyContainerProps={{
              keyId: 'pemdas-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="*" />
                  <br />
                  <PopoverDesc action="double tap" output="/" />
                  <br />
                  <PopoverDesc action="triple tap" output="+" />
                  <br />
                  <PopoverDesc action="quadruple tap" output="-" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faBorderTopLeft}
            KeyContainerProps={{
              keyId: 'home-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Home" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faPageCaretDown}
            KeyContainerProps={{
              keyId: 'page-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Page Down" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faPageCaretUp}
            KeyContainerProps={{
              keyId: 'page-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Page Up" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faBorderBottomRight}
            KeyContainerProps={{
              keyId: 'end-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="End" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faSignatureLock}
            KeyContainerProps={{
              keyId: 'caps-sentence-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Caps-sentence" />
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
          <KeyIcon icon={faLockOpen} />
          <KeyIcon icon={faArrowTurnDownLeft} />
          <KeyIcon icon={faArrowRightLongToLine} />
          <KeyIcon icon={faBracketSquare} rotation={270} />
          <KeyIcon icon={faCommand} />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faChevronUp} />
          <KeyIcon icon={faFunction} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
