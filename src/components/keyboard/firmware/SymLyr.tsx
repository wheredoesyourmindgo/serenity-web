import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@components/key/LyrHoldSubIcn'

export default function SymLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

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
          <KeyLegend {...sharedProps}>[</KeyLegend>
          <KeyLegend {...sharedProps}>]</KeyLegend>
          {/* <KeyLegend {...sharedProps}>&lt;</KeyLegend>
          <KeyLegend {...sharedProps}>&gt;</KeyLegend> */}
          <KeyLegend {...sharedProps} homing>
            -
          </KeyLegend>
          <KeyLegend {...sharedProps}>=</KeyLegend>
          <KeyLegend {...sharedProps}>`</KeyLegend>
          <KeyIcon
            className="fa-regular fa-lock"
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock/Unlock Symbol Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon className="fa-regular fa-up" color="solarized.cyan" homing />
          <KeyIcon className="fa-regular fa-command" color="solarized.cyan" />
          <KeyIcon
            className="fa-regular fa-option"
            color="solarized.cyan"
            sx={{fontSize: 18}}
          />
          <KeyIcon
            className="fa-regular fa-chevron-up"
            color="solarized.cyan"
          />
          <KeyLegend {...sharedProps} shiftLgnd=":">
            ;
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
          <KeyLegend {...sharedProps}>{'{'}</KeyLegend>
          <KeyLegend {...sharedProps}>{'}'}</KeyLegend>
          <KeyLegend {...sharedProps}>_</KeyLegend>
          <KeyLegend {...sharedProps}>+</KeyLegend>
          <KeyLegend {...sharedProps}>~</KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>|</KeyLegend>
          <KeyLegend {...sharedProps}>\</KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-arrow-turn-down-left"
            KeyContainerProps={{
              keyId: 'enter-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Enter" />
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
          <KeyIcon
            // className="fa-regular fa-arrow-up-left-from-circle"
            className="fa-regular fa-angles-down"
            sx={{fontSize: 19, transform: 'translateY(4px)'}}
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn
                className="fa-brands fa-apple"
                sx={{fontSize: 14}}
              />
            )}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Escape" />
                  <br />
                  <PopoverDesc action="hold" output="Num/Nav Layer" />
                </Box>
              )
            }}
          />
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
          <KeyIcon
            className="fa-regular fa-option"
            sx={{fontSize: 18}}
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
          <KeyIcon className="fa-regular fa-chevron-up" />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
