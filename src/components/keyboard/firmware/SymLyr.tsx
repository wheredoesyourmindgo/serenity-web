import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowRightLongToLine,
  faArrowUpLeftFromCircle,
  faArrowTurnDownLeft,
  faBracketSquare,
  faLock,
  faLockA,
  faOption,
  faRightToBracket,
  faUp,
  faVolumeXmark,
  faComputerMouse
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
          <KeyLegend {...sharedProps}>*</KeyLegend>
          <KeyLegend {...sharedProps}>(</KeyLegend>
          <KeyLegend {...sharedProps}>)</KeyLegend>
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
          <KeyLegend
            {...sharedProps}
            shiftLgnd="_"
            lyrHoldSubIcn={faComputerMouse}
            KeyContainerProps={{
              keyId: 'lowest-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Minus" />
                  <br />
                  <PopoverDesc action="hold" output="Mouse Layer" />
                </Box>
              )
            }}
          >
            -
          </KeyLegend>
          <KeyIcon icon={faChevronUp} color="solarized.cyan" />
          <KeyIcon icon={faOption} color="solarized.cyan" sx={{fontSize: 19}} />
          <KeyIcon icon={faCommand} color="solarized.cyan" />
          <KeyIcon icon={faUp} color="solarized.cyan" homing />
          <KeyIcon icon={faLock} />
          <KeyLegend {...sharedProps}>`</KeyLegend>
          <KeyLegend {...sharedProps} homing>
            \
          </KeyLegend>
          {/* <KeyLegend {...sharedProps}>&lt;</KeyLegend>
          <KeyLegend {...sharedProps}>&gt;</KeyLegend> */}
          <KeyLegend {...sharedProps}>=</KeyLegend>
          <KeyLegend {...sharedProps}>{'{'}</KeyLegend>
          <KeyLegend {...sharedProps}>{'}'}</KeyLegend>
          <KeyLegend {...sharedProps}>=</KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            icon={faUp}
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
          <KeyLegend {...sharedProps} color="text.disabled" />
          <KeyLegend {...sharedProps} color="text.disabled" />
          <KeyLegend {...sharedProps} color="text.disabled" />
          <KeyLegend {...sharedProps} color="text.disabled" />
          <KeyLegend {...sharedProps} color="text.disabled" />
          <KeyLegend {...sharedProps}>~</KeyLegend>
          <KeyLegend {...sharedProps}>|</KeyLegend>
          <KeyLegend {...sharedProps}>+</KeyLegend>
          <KeyLegend {...sharedProps}>[</KeyLegend>
          <KeyLegend {...sharedProps}>]</KeyLegend>
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
          <KeyIcon
            icon={faVolumeXmark}
            tapDance
            sx={{transform: 'translateY(2px)'}}
            KeyContainerProps={{
              keyId: 'oops-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="Toggle Mute" />
                  <br />
                  <PopoverDesc
                    action="double tap"
                    output="Mute & Hide Window"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faChevronUp} />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faCommand} />
          <KeyIcon
            icon={faArrowUpLeftFromCircle}
            sx={{fontSize: 19}}
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Escape" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faArrowTurnDownLeft} />
          <KeyIcon
            icon={faBracketSquare}
            rotation={270}
            sx={{transform: 'translateY(6px)'}}
          />
          <KeyIcon icon={faArrowRightLongToLine} />
          <KeyIcon icon={faCommand} />
          <KeyIcon
            icon={faOption}
            sx={{fontSize: 19}}
            color="solarized.cyan"
            KeyContainerProps={{
              keyId: 'right-option-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Right Option" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faChevronUp} />
          <KeyLegend {...sharedProps} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
