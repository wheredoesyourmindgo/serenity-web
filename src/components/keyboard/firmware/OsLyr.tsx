import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'
import MuiFaIcon from '@components/MuiFaIcon'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import ModSubHoldIcn from '@components/key/ModSubHoldIcn'

export default function OsLyr() {
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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-terminal"
            KeyContainerProps={{
              keyId: 'terminal-visor-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Terminal Visor" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-rocket-launch"
            KeyContainerProps={{
              keyId: 'launcher-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="App Launcher" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />

          <KeyIcon
            className="fa-light fa-folder-magnifying-glass"
            sx={{fontSize: 25}}
            KeyContainerProps={{
              keyId: 'spotlight-finder-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Spotlight in Finder" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-magnifying-glass"
            KeyContainerProps={{
              keyId: 'spotlight-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Spotlight" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-grid"
            KeyContainerProps={{
              keyId: 'launchpad-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Launchpad" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-microphone"
            KeyContainerProps={{
              keyId: 'siri-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Siri" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-sidebar-flip"
            requiresOsConf
            KeyContainerProps={{
              keyId: 'sidebar-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Show/hide Sidebar" />
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
          <KeyIcon
            className="fa-regular fa-diagram-previous"
            KeyContainerProps={{
              keyId: 'previous-window-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Previous Window" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-light fa-gallery-thumbnails"
            sx={{fontSize: 25}}
            KeyContainerProps={{
              keyId: 'app-switch-left-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="App Switcher Left" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-solid fa-arrow-left-long"
              sx={{
                transform: 'translate3D(7px, -4px, 0)',
                color: 'solarized.base00',
                fontSize: 14
              }}
            />
          </KeyIcon>
          <KeyIcon
            className="fa-light fa-gallery-thumbnails"
            sx={{fontSize: 25}}
            KeyContainerProps={{
              keyId: 'app-switch-right-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="App Switcher Right" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-solid fa-arrow-right-long"
              color="solarized.base00"
              sx={{
                transform: 'translate3D(7px, -4px, 0)',
                color: 'solarized.base00',
                fontSize: 14
              }}
            />
          </KeyIcon>
          <KeyIcon
            homing
            className="fa-regular fa-objects-column"
            KeyContainerProps={{
              keyId: 'app-expose-control-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="App Expose" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-desktop-arrow-down"
            KeyContainerProps={{
              keyId: 'select-dock-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Select Dock" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-up-right-and-down-left-from-center"
            KeyContainerProps={{
              keyId: 'os-fullscreen-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="OS Fullscreen" />
                </Box>
              )
            }}
          />
          <KeyIcon
            homing
            className="fa-regular fa-chart-tree-map"
            KeyContainerProps={{
              keyId: 'mission-control-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Mission Control" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-square-left"
            KeyContainerProps={{
              keyId: 'jump-space-left-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Switch Space Left" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-square-right"
            KeyContainerProps={{
              keyId: 'jump-space-right-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Switch Space Right" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-desktop"
            KeyContainerProps={{
              keyId: 'show-desktop-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Show/Hide Desktop" />
                </Box>
              )
            }}
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
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-light fa-gallery-thumbnails"
            sx={{fontSize: 25}}
            KeyContainerProps={{
              keyId: 'app-switch-quit-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="App Switcher Quit App" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-solid fa-xmark"
              sx={{
                transform: 'translate3D(7.5px, -4px, 0)',
                color: 'solarized.base00',
                fontSize: 14
              }}
            />
          </KeyIcon>
          <KeyIcon
            className="fa-light fa-gallery-thumbnails"
            sx={{fontSize: 25}}
            KeyContainerProps={{
              keyId: 'app-switch-hide-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap"
                    output="App Switcher Toggle Hide App"
                  />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-solid fa-window-minimize"
              sx={{
                transform: 'translate3D(7.5px, -6px, 0)',
                color: 'solarized.base00',
                fontSize: 14
              }}
            />
          </KeyIcon>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-camera-viewfinder"
            KeyContainerProps={{
              keyId: 'screenshot-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Screenshot Options" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-light fa-square-dashed"
            sx={{fontSize: 27}}
            KeyContainerProps={{
              keyId: 'screenshot-sel-file-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap"
                    output="Screenshot Selection to file"
                  />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-regular fa-image"
              sx={{
                transform: 'translate3D(7px, 1px, 0)',
                color: 'solarized.base01',
                fontSize: 13
              }}
            />
          </KeyIcon>
          <KeyIcon
            className="fa-light fa-display"
            sx={{fontSize: 25}}
            KeyContainerProps={{
              keyId: 'screenshot-dsktp-file-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Screenshot to file" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-regular fa-image"
              sx={{
                transform: 'translate3D(7px, -2.5px, 0)',
                color: 'solarized.base01',
                fontSize: 13
              }}
            />
          </KeyIcon>
          <KeyIcon
            className="fa-light fa-square-dashed"
            sx={{fontSize: 27}}
            KeyContainerProps={{
              keyId: 'screenshot-sel-clip-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap"
                    output="Screenshot Selection to Clipboard"
                  />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-regular fa-clipboard"
              sx={{
                transform: 'translate3D(6.5px, 1px, 0)',
                color: 'solarized.base01',
                fontSize: 14
              }}
            />
          </KeyIcon>
          <KeyIcon
            className="fa-light fa-display"
            sx={{fontSize: 27}}
            KeyContainerProps={{
              keyId: 'screenshot-dsktp-clip-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Screenshot to Clipboard" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              className="fa-regular fa-clipboard"
              sx={{
                transform: 'translate3D(8px, -2px, 0)',
                color: 'solarized.base01',
                fontSize: 14
              }}
            />
          </KeyIcon>
          <KeyIcon
            tapForceHold
            className="fa-regular fa-arrow-turn-down-left"
            ModHoldSubIcn={() => (
              <ModSubHoldIcn className="fa-regular fa-up" sx={{fontSize: 11}} />
            )}
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
