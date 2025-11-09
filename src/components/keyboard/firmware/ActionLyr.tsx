import KeyIcon from '@components/key/KeyIcon'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import PopoverDesc from '@components/key/PopoverDesc'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@components/key/LyrHoldSubIcn'
import {type KeyboardLayout} from 'src/app/firmware/page'
import {Grid, Box, Typography} from '@mui/material'
import KeyboardGridRow from '../KeyboardGridRow'
import MuiFaIcon from '@components/MuiFaIcon'

function RectangleProCaption() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'right'
      }}
    >
      <Typography
        sx={{
          color: 'solarized.blue',
          fontSize: 11,
          fontWeight: 'bold'
        }}
      >
        <MuiFaIcon
          className="fa-regular fa-browser"
          color="solarized.blue"
          sx={{paddingRight: 2.25}}
        />
        Rectangle Pro
      </Typography>
    </Box>
  )
}

export default function ActionLyr({layout}: {layout: KeyboardLayout}) {
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
          {/* <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            <>
              Prt
              <br />
              Scr
            </>
          </KeyLegend> */}
          <KeyIcon
            className="fa-regular fa-print-magnifying-glass"
            KeyContainerProps={{
              keyId: 'print-screen-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Print Screen" />
                </Box>
              )
            }}
          />
          {/* <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            <>
              Scrl
              <br />
              Lck
            </>
          </KeyLegend> */}
          <KeyIcon
            className="fa-regular fa-scroll"
            KeyContainerProps={{
              keyId: 'scroll-lock-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Scroll Lock" />
                </Box>
              )
            }}
          />
          {/* <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Pause
          </KeyLegend> */}
          <KeyIcon
            className="fa-regular fa-circle-pause"
            KeyContainerProps={{
              keyId: 'pause-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Pause" />
                </Box>
              )
            }}
          />
          {/* <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Ins
          </KeyLegend> */}
          <KeyIcon
            className="fa-regular fa-i-cursor"
            KeyContainerProps={{
              keyId: 'insert-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Insert" />
                </Box>
              )
            }}
          />
          {/* <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            App
          </KeyLegend> */}
          <KeyIcon
            className="fa-regular fa-list-dropdown"
            KeyContainerProps={{
              keyId: 'app-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="App (Menu)" />
                </Box>
              )
            }}
          />
          {/* <KeyIcon
            icon={faHandPointLeft}
            shiftSubIcn={faHandPointRight}
            KeyContainerProps={{
              keyId: 'go-back-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Go Back (browser)" />
                  <br />
                  <PopoverDesc action="shifted" output="Go Forward" />
                </Box>
              )
            }}
          /> */}
          <KeyIcon
            tapDance
            appShortcut
            className="fa-regular fa-up-right-and-down-left-from-center"
            KeyContainerProps={{
              keyId: 'window-partial-fullscreen-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Fullscreen Window" />
                  <br />
                  <PopoverDesc action="hold" output="Restore Window" />
                  <br />
                  <RectangleProCaption />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-square-up-left"
            KeyContainerProps={{
              keyId: 'nav-left-tab',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Switch Tab Left" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-rectangle-vertical-history"
            rotation={180}
            KeyContainerProps={{
              keyId: 'prev-app-window',
              popOverContent: (
                <Box p={1}>
                  {/* <PopoverDesc action="tap" output="Next App Window" />
                  <br /> */}
                  <PopoverDesc action="shifted" output="Prev App Window" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-rectangle-vertical-history"
            // shiftSubIcn={faRectangleVerticalHistory}
            // ShiftSubIcnProps={{flip: 'horizontal', fontSize: 12}}
            KeyContainerProps={{
              keyId: 'next-app-window',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Next App Window" />
                  {/* <br />
                  <PopoverDesc action="shifted" output="Prev App Window" /> */}
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-square-up-right"
            KeyContainerProps={{
              keyId: 'nav-right-tab',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Switch Tab Right" />
                </Box>
              )
            }}
          />

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
                    output="Escape (or turn off Action layer lock)"
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
          <KeyIcon className="fa-regular fa-up" color="solarized.cyan" homing />
          <KeyIcon
            className="fa-regular fa-lock"
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock/Unlock Action Layer" />
                </Box>
              )
            }}
          />
          {/* <KeyLegend {...sharedProps} /> */}
          {/* <KeyIcon
            special
            className="fa-regular fa-table-layout"
            KeyContainerProps={{
              keyId: 'window-management3-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Window Management 3" />
                </Box>
              )
            }}
          /> */}
          <KeyIcon
            tapDance
            appShortcut
            rotation={90}
            className="fa-regular fa-down-left-and-up-right-to-center"
            KeyContainerProps={{
              keyId: 'window-partial-fullscreen-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Center Window" />
                  <br />
                  <PopoverDesc action="hold" output="Last Window Position" />
                  <br />
                  <RectangleProCaption />
                </Box>
              )
            }}
          />
          <KeyIcon
            homing
            tapDance
            appShortcut
            className="fa-regular fa-sidebar"
            KeyContainerProps={{
              keyId: 'window-center-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Window Left Half" />
                  <br />
                  <PopoverDesc action="hold" output="Window Fill Left" />
                  <br />
                  <RectangleProCaption />
                </Box>
              )
            }}
          />
          <KeyIcon
            // special
            // tapDance
            appShortcut
            rotation={180}
            className="fa-regular fa-octagon-minus"
            KeyContainerProps={{
              keyId: 'window-management1-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap/hold"
                    output="Decrease Window Size"
                  />
                  {/* <br />
                  <PopoverDesc action="hold" output="" />
                  <br /> */}
                  <RectangleProCaption />
                </Box>
              )
            }}
          />
          <KeyIcon
            // special
            // tapDance
            appShortcut
            className="fa-regular fa-octagon-plus"
            KeyContainerProps={{
              keyId: 'window-management2-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap/hold"
                    output="Increase Window Size"
                  />
                  {/* <br />
                  <PopoverDesc action="hold" output="" />
                  <br /> */}
                  <RectangleProCaption />
                </Box>
              )
            }}
          />
          {/* <KeyIcon
            // special
            tapDance
            appShortcut
            rotation={180}
            className="fa-regular fa-window-maximize"
            KeyContainerProps={{
              keyId: 'window-management1-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Window Bottom Half" />
                  <br />
                  <PopoverDesc action="hold" output="Window Fill Bottom" />
                  <br />
                  <RectangleProCaption />
                </Box>
              )
            }}
          /> */}
          {/* <KeyIcon
            // special
            tapDance
            appShortcut
            className="fa-regular fa-window-maximize"
            KeyContainerProps={{
              keyId: 'window-management2-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Window Top Half" />
                  <br />
                  <PopoverDesc action="hold" output="Window Fill Top" />
                  <br />
                  <RectangleProCaption />
                </Box>
              )
            }}
          /> */}
          {/* <KeyIcon
            homing
            special
            className="fa-regular fa-table-layout"
            KeyContainerProps={{
              keyId: 'window-management4-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Window Management 4" />
                </Box>
              )
            }}
          /> */}
          <KeyIcon
            homing
            tapDance
            appShortcut
            className="fa-regular fa-sidebar-flip"
            KeyContainerProps={{
              keyId: 'window-restore-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Window Right Half" />
                  <br />
                  <PopoverDesc action="hold" output="Window Fill Right" />
                  <br />
                  <RectangleProCaption />
                </Box>
              )
            }}
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
          {/* <KeyIcon
            icon={faSignatureLock}
            KeyContainerProps={{
              keyId: 'caps-sentence-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Caps-sentence" />
                </Box>
              )
            }}
          /> */}
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            tapDance
            appShortcut
            rotation={-45}
            className="fa-regular fa-up-right-and-down-left-from-center"
            KeyContainerProps={{
              keyId: 'window-partial-fullscreen-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Almost Max Window" />
                  <br />
                  <PopoverDesc action="hold" output="Max Window Height" />
                  <br />
                  <RectangleProCaption />
                </Box>
              )
            }}
          />
          <KeyIcon
            appShortcut
            className="fa-regular fa-square-left"
            KeyContainerProps={{
              keyId: 'throw-space-left-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Throw Window Space Left" />
                  <br />
                  <RectangleProCaption />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            appShortcut
            className="fa-regular fa-square-right"
            KeyContainerProps={{
              keyId: 'throw-space-right-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Throw Window Space Right" />
                  <br />
                  <RectangleProCaption />
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
          <KeyLegend {...sharedProps} />
          <KeyIcon
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn
                className="fa-regular fa-function"
                sx={{transform: 'translateX(-3px)'}}
              />
            )}
            className="fa-regular fa-layer-group"
            sx={{fontSize: 16, transform: 'translateY(2px)'}}
            KeyContainerProps={{
              keyId: 'function-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="hold" output="Function Layer" />
                </Box>
              )
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
