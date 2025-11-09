import KeyIcon from '@components/key/KeyIcon'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Grid} from '@mui/material'
import PopoverDesc from '@components/key/PopoverDesc'
import MuiFaIcon from '@components/MuiFaIcon'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import {type KeyboardLayout} from 'src/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'

export default function MouseLyr({layout}: {layout: KeyboardLayout}) {
  const sharedProps: KeyLegendProps = {variant: 'h5'}
  const isCorneLayout = layout === '42 key'

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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn5
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn1
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn2
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn3
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn4
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
                    output="Escape (or turn off Mouse layer lock)"
                  />
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
            sx={{fontSize: 18}}
            color="solarized.cyan"
          />
          <KeyIcon className="fa-regular fa-command" color="solarized.cyan" />
          <KeyIcon
            homing
            className="fa-regular fa-up"
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
          <KeyIcon
            className="fa-regular fa-lock"
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock/Unlock Mouse Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-lock-a"
            KeyContainerProps={{
              keyId: 'lock-key-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock Next Key" />
                </Box>
              )
            }}
          />
          <KeyLegend
            homing
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-move-left-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Move Left" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-regular fa-arrow-pointer"
              sx={{paddingRight: 0.5, fontSize: 12}}
            />
            L
          </KeyLegend>

          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-move-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Move Down" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-regular fa-arrow-pointer"
              sx={{paddingRight: 0.5, fontSize: 12}}
            />
            D
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-move-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Move Up" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-regular fa-arrow-pointer"
              sx={{paddingRight: 0.5, fontSize: 12}}
            />
            U
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-move-right-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Move Right" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-regular fa-arrow-pointer"
              sx={{paddingRight: 0.5, fontSize: 12}}
            />
            R
          </KeyLegend>

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
          <KeyIcon
            className="fa-regular fa-bullseye-pointer"
            KeyContainerProps={{
              keyId: 'shake-mouse-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Shake Mouse Pointer" />
                </Box>
              )
            }}
          />
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-wheel-left-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Left" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              rotation={270}
              className="fa-regular fa-circle-sort-up"
              sx={{marginRight: 0.5, fontSize: 14}}
            />
            L
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-wheel-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Down" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-regular fa-circle-sort-down"
              sx={{marginRight: 0.5, fontSize: 14}}
            />
            D
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-wheel-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Up" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-regular fa-circle-sort-up"
              sx={{marginRight: 0.5, fontSize: 14}}
            />
            U
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-wheel-right-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Right" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              sx={{marginRight: 0.5, fontSize: 14}}
              rotation={90}
              className="fa-regular fa-circle-sort-up"
            />
            R
          </KeyLegend>
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
          <KeyLegend
            {...sharedProps}
            KeyContainerProps={{
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyLegend
            {...sharedProps}
            KeyContainerProps={{
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyLegend
            {...sharedProps}
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
          {/* <KeyIcon
            className="fa-regular fa-arrow-up-left-from-circle"
            sx={{fontSize: 19, transform: 'translateY(1px)'}}
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Escape" />
                </Box>
              )
            }}
          /> */}
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
          {/* <KeyIcon className="fa-regular fa-arrow-right-long-to-line" /> */}
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
