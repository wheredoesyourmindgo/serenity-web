import KeyIcon from '@components/key/KeyIcon'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Grid} from '@mui/material'
import PopoverDesc from '@components/key/PopoverDesc'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@components/key/LyrHoldSubIcn'
import {type KeyboardLayout} from 'src/app/firmware/page'

export default function NumNavLyr({layout}: {layout: KeyboardLayout}) {
  const sharedProps: KeyLegendProps = {variant: 'h5'}
  const isCorneLayout = layout === '42 key'

  return (
    <Box data-layout={layout}>
      <Grid container direction="column" spacing={1}>
        <Grid container spacing={1} data-row>
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
          <KeyLegend {...sharedProps} shiftLgnd="*">
            8
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="(">
            9
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd=")">
            0
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
            // shiftSubIcn={faRightToBracket}
            // ShiftSubIcnProps={{flip: 'horizontal'}}
            ShiftSubIcn={() => (
              <ShiftSubIcn className="fa-regular fa-delete-right" />
            )}
          />
        </Grid>
        <Grid container spacing={1} data-row>
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
          <KeyIcon
            className="fa-regular fa-chevron-up"
            color="solarized.cyan"
          />
          <KeyIcon
            className="fa-regular fa-option"
            color="solarized.cyan"
            sx={{fontSize: 18}}
          />
          <KeyIcon className="fa-regular fa-command" color="solarized.cyan" />
          <KeyIcon className="fa-regular fa-up" color="solarized.cyan" homing />
          <KeyIcon
            className="fa-regular fa-lock"
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap"
                    output="Lock/Unlock Num/Nav Layer"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-magic-wand-sparkles"
            tapDance
            KeyContainerProps={{
              keyId: 'text-select-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="select word" />
                  <br />
                  <PopoverDesc action="hold" output="select line" />
                </Box>
              )
            }}
          />
          {/* <KeyLegend
            {...sharedProps}
            tapDance
            // shiftLgnd=">"
            KeyContainerProps={{
              keyId: 'alt-period-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="period" />
                  <br />

                  <PopoverDesc action="hold" output="comma" />
                </Box>
              )
            }}
          >
            .
          </KeyLegend> */}
          {/* <KeyIcon
            tapDance
            icon={faCalculator}
            KeyContainerProps={{
              keyId: 'pemdas-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="." />
                  <br />
                  <PopoverDesc action="double tap" output="=" />
                  <br />
                  <PopoverDesc action="triple tap" output="%" />
                </Box>
              )
            }}
          /> */}
          <KeyIcon className="fa-regular fa-arrow-left" homing />
          <KeyIcon className="fa-regular fa-arrow-down" />
          <KeyIcon className="fa-regular fa-arrow-up" />
          <KeyIcon className="fa-regular fa-arrow-right" />
          <KeyLegend {...sharedProps} shiftLgnd=":">
            ;
          </KeyLegend>
        </Grid>
        <Grid container spacing={1} data-row>
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
          <KeyIcon
            className="fa-regular fa-undo"
            KeyContainerProps={{
              keyId: 'undo-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Undo" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-scissors"
            KeyContainerProps={{
              keyId: 'cut-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Cut" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-copy"
            KeyContainerProps={{
              keyId: 'copy-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Copy" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-paste"
            KeyContainerProps={{
              keyId: 'paste-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Paste" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-redo"
            KeyContainerProps={{
              keyId: 'redo-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Redo" />
                </Box>
              )
            }}
          />
          {/* <KeyIcon
            tapDance
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
                </Box>
              )
            }}
          /> */}
          <KeyIcon
            className="fa-regular fa-lock-a"
            KeyContainerProps={{
              keyId: 'caps-lock-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Caps-lock" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-border-top-left"
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
            className="fa-regular fa-page-caret-down"
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
            className="fa-regular fa-page-caret-up"
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
            className="fa-regular fa-border-bottom-right"
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
        </Grid>
        <Grid container spacing={1} data-row>
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
          <KeyLegend {...sharedProps} />
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
          <KeyIcon
            className="fa-regular fa-angles-up"
            // sx={{transform: 'translateY(1px)'}}
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
        </Grid>
      </Grid>
    </Box>
  )
}
