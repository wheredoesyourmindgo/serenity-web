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
  faComputerMouse,
  faCopy,
  faFunction,
  faLock,
  faLockA,
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

export default function SymLyr() {
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
          <KeyLegend {...sharedProps}>!</KeyLegend>
          <KeyLegend {...sharedProps}>@</KeyLegend>
          <KeyLegend {...sharedProps}>#</KeyLegend>
          <KeyLegend {...sharedProps}>$</KeyLegend>
          <KeyLegend {...sharedProps}>%</KeyLegend>
          <KeyLegend {...sharedProps}>^</KeyLegend>
          <KeyLegend {...sharedProps}>&amp;</KeyLegend>
          <KeyLegend {...sharedProps} customShiftCode>
            (
          </KeyLegend>
          <KeyLegend {...sharedProps} customShiftCode>
            )
          </KeyLegend>
          <KeyLegend {...sharedProps} customShiftCode>
            *
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
          <KeyLegend {...sharedProps}>|</KeyLegend>
          <KeyLegend {...sharedProps}>{'{'}</KeyLegend>
          <KeyLegend {...sharedProps}>&lt;</KeyLegend>
          <KeyLegend {...sharedProps}>&gt;</KeyLegend>
          <KeyLegend {...sharedProps}>{'}'}</KeyLegend>
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
                  <br />
                  <PopoverDesc
                    action="simultaneously tap w/ Right Shift"
                    output="Caps-word"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faUndo} />
          <KeyIcon icon={faScissors} />
          <KeyIcon icon={faCopy} />
          <KeyIcon icon={faPaste} />
          <KeyIcon icon={faRedo} />
          <KeyLegend {...sharedProps}>\</KeyLegend>
          <KeyLegend {...sharedProps}>/</KeyLegend>
          <KeyLegend {...sharedProps}>[</KeyLegend>
          <KeyLegend {...sharedProps}>]</KeyLegend>
          <KeyLegend {...sharedProps}>?</KeyLegend>
          <KeyIcon
            icon={faLockA}
            KeyContainerProps={{
              keyId: 'caps-lock-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Caps-lock" />
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