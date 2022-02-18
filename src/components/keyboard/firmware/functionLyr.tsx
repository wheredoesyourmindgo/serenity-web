import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faLock,
  faLockOpen,
  faOption,
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
            icon={faDeleteRight}
            KeyContainerProps={{
              keyId: 'delete-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Delete" />
                </Box>
              )
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
            icon={faDeleteLeft}
            KeyContainerProps={{
              keyId: 'backspace-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Backspace" />
                </Box>
              )
            }}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
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
          <KeyLegend
            {...sharedProps}
            sx={fxSx}
            shiftLgnd="f16"
            customShiftCode
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
            shiftLgnd="f17"
            customShiftCode
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
            shiftLgnd="f18"
            customShiftCode
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
          <KeyLegend
            {...sharedProps}
            sx={fxSx}
            shiftLgnd="f19"
            customShiftCode
            homing
            KeyContainerProps={{
              keyId: 'f9-f19-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="F9" />
                  <br />
                  <PopoverDesc action="double tap" output="F19" />
                </Box>
              )
            }}
          >
            F9
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={fxSx}
            shiftLgnd="f20"
            customShiftCode
            KeyContainerProps={{
              keyId: 'f10-f20-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="F10" />
                  <br />
                  <PopoverDesc action="double tap" output="F20" />
                </Box>
              )
            }}
          >
            F10
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} homing />
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
          <KeyLegend
            {...sharedProps}
            sx={fxSx}
            shiftLgnd="f21"
            customShiftCode
            KeyContainerProps={{
              keyId: 'f11-f21-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="F11" />
                  <br />
                  <PopoverDesc action="double tap" output="F21" />
                </Box>
              )
            }}
          >
            F11
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={fxSx}
            shiftLgnd="f22"
            customShiftCode
            KeyContainerProps={{
              keyId: 'f12-f22-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="F12" />
                  <br />
                  <PopoverDesc action="double tap" output="F22" />
                </Box>
              )
            }}
          >
            F12
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={fxSx}
            shiftLgnd="f23"
            customShiftCode
            KeyContainerProps={{
              keyId: 'f13-f23-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="F13" />
                  <br />
                  <PopoverDesc action="double tap" output="F23" />
                </Box>
              )
            }}
          >
            F13
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={fxSx}
            shiftLgnd="f24"
            customShiftCode
            KeyContainerProps={{
              keyId: 'f14-f24-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="F14" />
                  <br />
                  <PopoverDesc action="double tap" output="F24" />
                </Box>
              )
            }}
          >
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
