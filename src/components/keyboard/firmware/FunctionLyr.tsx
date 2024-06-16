import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import KeyLegend, {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, SxProps} from '@mui/material'
import PopoverDesc from '@components/key/PopoverDesc'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import ModSubHoldIcn from '@components/key/ModSubHoldIcn'

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
            className="fa-regular fa-arrow-right-long-to-line"
            sx={{
              fontSize: 19
            }}
            KeyContainerProps={{
              keyId: 'tab-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Tab" />
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
          <KeyLegend {...sharedProps} sx={fxSx}>
            F6
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F7
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F8
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F9
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F10
          </KeyLegend>
          <KeyIcon
            customShiftCode
            className="fa-regular fa-delete-left"
            KeyContainerProps={{
              keyId: 'backspace-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Backspace" />
                  <br />
                  <PopoverDesc action="shifted" output="Forward Delete" />
                </Box>
              )
            }}
            ShiftSubIcn={() => (
              <ShiftSubIcn className="fa-regular fa-delete-right" />
            )}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            className="fa-regular fa-arrow-up-left-from-circle"
            sx={{fontSize: 18}}
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Escape" />
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
          <KeyLegend {...sharedProps} sx={fxSx} homing>
            F14
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F15
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F16
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx} homing>
            F17
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F18
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F19
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={fxSx}>
            F20
          </KeyLegend>
          <KeyLegend shiftLgnd='"' {...sharedProps}>
            '
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            special
            className="fa-regular fa-up"
            KeyContainerProps={{
              keyId: 'left-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap/hold" output="Left Shift" />
                  <br />
                  <PopoverDesc action="double tap" output="Caps-word" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} sx={fxSx}>
            F21
          </KeyLegend>
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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            tapForceHold
            className="fa-regular fa-arrow-turn-down-left"
            ModHoldSubIcn={() => <ModSubHoldIcn className="fa-regular fa-up" />}
            sx={{transform: 'translateY(4px)'}}
            KeyContainerProps={{
              keyId: 'right-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Enter" />
                  <br />
                  <PopoverDesc action="hold" output="Right Shift" />
                </Box>
              )
            }}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          {/* <KeyIcon
            icon={faVolumeXmark}
            special
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
          /> */}
          <KeyIcon className="fa-regular fa-chevron-up" />
          <KeyIcon className="fa-regular fa-option" sx={{fontSize: 18}} />
          <KeyIcon className="fa-regular fa-command" />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-bracket-square"
            rotation={270}
            sx={{transform: 'translateY(4px)'}}
            KeyContainerProps={{
              keyId: 'left-space-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Space" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-bracket-square"
            rotation={270}
            sx={{transform: 'translateY(4px)'}}
            KeyContainerProps={{
              keyId: 'right-space-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Space" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon className="fa-regular fa-command" />
          <KeyIcon className="fa-regular fa-option" sx={{fontSize: 18}} />
          <KeyIcon className="fa-regular fa-chevron-up" />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
