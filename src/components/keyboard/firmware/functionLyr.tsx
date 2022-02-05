import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faBracketSquare,
  faComputerMouse,
  faFunction,
  faLock,
  faLockOpen,
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
import {Box, SxProps} from '@mui/material'
import PopoverDesc from '@components/key/PopoverDesc'

export default function FuncLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}
  const fxSx: SxProps = {
    fontSize: 18
  }

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
          <KeyLegend {...sharedProps} sx={fxSx}>
            F1
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F2
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F3
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F4
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F5
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
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
          <KeyLegend
            {...sharedProps}
            sx={fxSx}
            tapDance
            KeyContainerProps={{
              keyId: 'f6-f16-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="F6" />
                  <br />
                  <PopoverDesc action="double tap" output="F16" />
                </Box>
              )
            }}
          >
            F6
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={fxSx}
            tapDance
            KeyContainerProps={{
              keyId: 'f7-f17-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="F7" />
                  <br />
                  <PopoverDesc action="double tap" output="F17" />
                </Box>
              )
            }}
          >
            F7
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={fxSx}
            tapDance
            KeyContainerProps={{
              keyId: 'f8-f18-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="F8" />
                  <br />
                  <PopoverDesc action="double tap" output="F18" />
                </Box>
              )
            }}
          >
            F8
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx} tapDance homing>
            F9
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx} tapDance>
            F10
          </KeyLegend>
          <KeyIcon
            icon={faLock}
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock Function Layer" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            icon={faUpLong}
            KeyContainerProps={{
              keyId: 'right-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Right Shift" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} sx={fxSx} tapDance>
            F11
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx} tapDance>
            F12
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx} tapDance>
            F13
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx} tapDance>
            F14
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F15
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyIcon icon={faChevronUp} />
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
          <KeyIcon icon={faCommand} />
          <KeyIcon
            icon={faArrowUpLeftFromCircle}
            sx={{fontSize: 19, transform: 'translateY(1px)'}}
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Escape" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faArrowTurnDownLeft} />
          <KeyIcon icon={faArrowRightLongToLine} />
          <KeyIcon
            icon={faUpLong}
            color="solarized.cyan"
            KeyContainerProps={{
              keyId: 'left-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Left Shift" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faCommand} color="solarized.cyan" />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} color="solarized.cyan" />
          <KeyIcon icon={faChevronUp} color="solarized.cyan" />
          <KeyIcon
            icon={faLockOpen}
            KeyContainerProps={{
              keyId: 'base-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Revert to Base Layer" />
                </Box>
              )
            }}
          />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
