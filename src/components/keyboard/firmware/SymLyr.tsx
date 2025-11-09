import KeyIcon from '@components/key/KeyIcon'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Grid, Box} from '@mui/material'
import PopoverDesc from '@components/key/PopoverDesc'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@components/key/LyrHoldSubIcn'
import {type KeyboardLayout} from 'src/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'

export default function SymLyr({layout}: {layout: KeyboardLayout}) {
  const sharedProps: KeyLegendProps = {variant: 'h5'}
  const isCorneLayout = layout === 'corne'

  return (
    <Box data-layout={layout}>
      <Grid container direction="column" spacing={1}>
        <KeyboardGridRow>
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
        </KeyboardGridRow>
        <KeyboardGridRow>
          <KeyIcon
            special
            className="fa-regular fa-arrow-up-left-from-circle"
            sx={{fontSize: 18}}
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap/hold"
                    output="Escape (or turn off Symbol layer lock)"
                  />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps}>[</KeyLegend>
          <KeyLegend {...sharedProps}>]</KeyLegend>
          <KeyLegend {...sharedProps}>{'='}</KeyLegend>
          <KeyLegend {...sharedProps} homing>
            /
          </KeyLegend>
          <KeyLegend {...sharedProps}>\</KeyLegend>
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
        </KeyboardGridRow>
        <KeyboardGridRow>
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
          <KeyLegend {...sharedProps}>+</KeyLegend>
          <KeyLegend {...sharedProps}>?</KeyLegend>
          <KeyLegend {...sharedProps}>|</KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>~</KeyLegend>
          <KeyLegend {...sharedProps}>`</KeyLegend>
          <KeyLegend {...sharedProps}>{'<'}</KeyLegend>
          <KeyLegend {...sharedProps}>{'>'}</KeyLegend>
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
        </KeyboardGridRow>
        <KeyboardGridRow>
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
          <KeyIcon
            className="fa-regular fa-chevron-up"
            KeyContainerProps={{
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-option"
            sx={{fontSize: 18}}
            KeyContainerProps={{
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-command"
            KeyContainerProps={{
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
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
                  <PopoverDesc action="hold" output="OS Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-bracket-square"
            rotation={270}
            sx={{transform: 'translateY(6px)'}}
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
            sx={{transform: 'translateY(6px)'}}
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
          <KeyIcon
            className="fa-regular fa-command"
            KeyContainerProps={{
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-option"
            sx={{fontSize: 18}}
            color="solarized.cyan"
            KeyContainerProps={{
              keyId: 'right-option-key',
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Right Option" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-chevron-up"
            KeyContainerProps={{
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
        </KeyboardGridRow>
      </Grid>
    </Box>
  )
}
