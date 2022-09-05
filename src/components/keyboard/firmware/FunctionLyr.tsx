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
          <KeyLegend {...sharedProps} sx={fxSx}>
            F22
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F23
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F24
          </KeyLegend>
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
          <KeyLegend {...sharedProps} shiftLgnd="_">
            -
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F6
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F7
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F8
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx} homing>
            F9
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F10
          </KeyLegend>
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
          <KeyLegend {...sharedProps} homing sx={fxSx}>
            F19
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F20
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F21
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend shiftLgnd='"' {...sharedProps}>
            '
          </KeyLegend>
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
          <KeyLegend {...sharedProps} sx={fxSx}>
            F11
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F12
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F13
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F14
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F15
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} sx={fxSx}>
            F16
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F17
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F18
          </KeyLegend>
          <KeyLegend {...sharedProps} />
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
