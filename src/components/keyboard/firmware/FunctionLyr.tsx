import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faBracketSquare,
  faLock,
  faOption,
  faUp,
  faVolumeXmark
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
                  <PopoverDesc
                    action="tap"
                    output="Lock/Unlock Function Layer"
                  />
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
                  <PopoverDesc action="tap" output="F6" />
                  <br />
                  <PopoverDesc action="shifted" output="F16" />
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
                  <PopoverDesc action="tap" output="F7" />
                  <br />
                  <PopoverDesc action="shifted" output="F17" />
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
                  <PopoverDesc action="tap" output="F8" />
                  <br />
                  <PopoverDesc action="shifted" output="F18" />
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
                  <PopoverDesc action="tap" output="F9" />
                  <br />
                  <PopoverDesc action="shifted" output="F19" />
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
                  <PopoverDesc action="tap" output="F10" />
                  <br />
                  <PopoverDesc action="shifted" output="F20" />
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
            icon={faUp}
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
                  <PopoverDesc action="tap" output="F11" />
                  <br />
                  <PopoverDesc action="shifted" output="F21" />
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
                  <PopoverDesc action="tap" output="F12" />
                  <br />
                  <PopoverDesc action="shifted" output="F22" />
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
                  <PopoverDesc action="tap" output="F13" />
                  <br />
                  <PopoverDesc action="shifted" output="F23" />
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
                  <PopoverDesc action="tap" output="F14" />
                  <br />
                  <PopoverDesc action="shifted" output="F24" />
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
          {/* <KeyIcon icon={faArrowRightLongToLine} /> */}
          <KeyIcon
            icon={faBracketSquare}
            rotation={270}
            sx={{transform: 'translateY(6px)'}}
            KeyContainerProps={{
              keyId: 'space-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Space" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faUp}
            KeyContainerProps={{
              keyId: 'left-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Left Shift" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faCommand} />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faChevronUp} />
          <KeyLegend />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
