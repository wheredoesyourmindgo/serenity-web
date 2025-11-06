import KeyIcon from '@components/key/KeyIcon'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Grid} from '@mui/material'
import PopoverDesc from '@components/key/PopoverDesc'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@components/key/LyrHoldSubIcn'
import {type KeyboardLayout} from 'src/app/firmware/page'

export default function MediaLyr({layout}: {layout: KeyboardLayout}) {
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
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-brightness-low"
            KeyContainerProps={{
              keyId: 'screen-brightness-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap/hold"
                    output="Screen Brightness Down"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-brightness"
            KeyContainerProps={{
              keyId: 'screen-brightness-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap/hold"
                    output="Screen Brightness Up"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-circle-half-stroke"
            requiresOsConf
            KeyContainerProps={{
              keyId: 'toggle-dark-mode-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Toggle Light/Dark Mode" />
                </Box>
              )
            }}
          />
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 12, textAlign: 'center'}}
            KeyContainerProps={{
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="RGB Speed Up" />
                  <br />
                  <PopoverDesc action="shifted" output="RGB Speed Down" />
                </Box>
              )
            }}
          >
            <>
              Speed
              <br />
              +/-
            </>
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 12, textAlign: 'center'}}
            KeyContainerProps={{
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="RGB Mode Next" />
                  <br />
                  <PopoverDesc action="shifted" output="RGB Mode Previous" />
                </Box>
              )
            }}
          >
            <>
              Mode
              <br />
              +/-
            </>
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 11, textAlign: 'center'}}
            KeyContainerProps={{
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="RGB Toggle" />
                </Box>
              )
            }}
          >
            <>
              RGB
              <br />
              toggle
            </>
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 12, textAlign: 'center'}}
            KeyContainerProps={{
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="RGB Hue Up" />
                  <br />
                  <PopoverDesc action="shifted" output="RGB Hue Down" />
                </Box>
              )
            }}
          >
            <>
              Hue
              <br />
              +/-
            </>
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 12, textAlign: 'center'}}
            KeyContainerProps={{
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="RGB Saturation Up" />
                  <br />
                  <PopoverDesc action="shifted" output="RGB Saturation Down" />
                </Box>
              )
            }}
          >
            <>
              Sat
              <br />
              +/-
            </>
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 12, textAlign: 'center'}}
            KeyContainerProps={{
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="RGB Brightness Up" />
                  <br />
                  <PopoverDesc action="shifted" output="RGB Brightness Down" />
                </Box>
              )
            }}
          >
            <>
              Bri
              <br />
              +/-
            </>
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
          <KeyLegend />
          <KeyIcon
            className="fa-regular fa-volume-down"
            KeyContainerProps={{
              keyId: 'volume-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Volume Down" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-volume-up"
            KeyContainerProps={{
              keyId: 'volume-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Volume Up" />
                </Box>
              )
            }}
          />
          <KeyIcon
            homing
            className="fa-regular fa-volume-slash"
            KeyContainerProps={{
              keyId: 'mute-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Toggle Mute" />
                </Box>
              )
            }}
          />
          <KeyLegend />
          <KeyIcon
            className="fa-regular fa-lock"
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock/Unlock Media Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon className="fa-regular fa-up" color="solarized.cyan" homing />
          <KeyIcon className="fa-regular fa-command" color="solarized.cyan" />
          <KeyIcon
            className="fa-regular fa-option"
            sx={{fontSize: 18}}
            color="solarized.cyan"
          />
          <KeyIcon
            className="fa-regular fa-chevron-up"
            color="solarized.cyan"
          />
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
          <KeyLegend {...sharedProps} />

          <KeyIcon
            className="fa-regular fa-backward"
            KeyContainerProps={{
              keyId: 'previous-track-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Previous (Playlist)" />
                  <br />
                  <PopoverDesc action="hold" output="Scan Back" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-forward"
            KeyContainerProps={{
              keyId: 'next-track-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Next (Playlist)" />
                  <br />
                  <PopoverDesc action="hold" output="Scan Forward" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-play-pause"
            KeyContainerProps={{
              keyId: 'play-pause-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Play/Pause" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-typewriter"
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn
                className="fa-regular fa-layer-group"
                sx={{transform: 'translateX(-2px)'}}
              />
            )}
            sx={{transform: 'translateY(2px)'}}
            KeyContainerProps={{
              keyId: 'qwerty-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Toggle Qwerty Layout" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Debug
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Reset
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
          <KeyLegend {...sharedProps} />
          {/* <KeyIcon
            className="fa-regular fa-bracket-square"
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
          /> */}
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
        </Grid>
      </Grid>
    </Box>
  )
}
