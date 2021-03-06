import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowLeftLong,
  faArrowRightLong,
  faWindowMinimize,
  faXmark
} from '@fortawesome/pro-solid-svg-icons'
import {
  faCameraViewfinder,
  faChartTreeMap,
  faDesktop,
  faDesktopArrowDown,
  faDiagramPrevious,
  faGalleryThumbnails,
  faGrid,
  faMagnifyingGlass,
  faMicrophone,
  faObjectsColumn,
  faRocketLaunch,
  faSidebarFlip,
  faSquareLeft,
  faSquareRight,
  faTerminal
} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'
import MuiFaIcon from '@components/MuiFaIcon'
import {faUpRightAndDownLeftFromCenter} from '@fortawesome/pro-regular-svg-icons'

export default function OsLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faTerminal}
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
            icon={faRocketLaunch}
            KeyContainerProps={{
              keyId: 'launcher-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Launcher (Alfred)" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faCameraViewfinder}
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
            icon={faMagnifyingGlass}
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
            icon={faGrid}
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
            icon={faMicrophone}
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
            icon={faSidebarFlip}
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
          <KeyLegend {...sharedProps} />

          <KeyIcon
            icon={faDesktop}
            flip="horizontal"
            KeyContainerProps={{
              keyId: 'show-desktop-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Show/Hide Desktop" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faSquareLeft}
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
            icon={faSquareRight}
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
            homing
            icon={faChartTreeMap}
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
            icon={faUpRightAndDownLeftFromCenter}
            flip="horizontal"
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
            icon={faDesktopArrowDown}
            flip="horizontal"
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
            homing
            icon={faObjectsColumn}
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
            icon={faGalleryThumbnails}
            fontSize={22}
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
              icon={faArrowLeftLong}
              fontSize={13}
              sx={{
                transform: 'translate3D(6px, -4px, 0)',
                color: 'solarized.base00'
              }}
            />
          </KeyIcon>
          <KeyIcon
            icon={faGalleryThumbnails}
            fontSize={22}
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
              icon={faArrowRightLong}
              color="solarized.base00"
              fontSize={13}
              sx={{
                transform: 'translate3D(6px, -4px, 0)',
                color: 'solarized.base00'
              }}
            />
          </KeyIcon>

          <KeyIcon
            icon={faDiagramPrevious}
            KeyContainerProps={{
              keyId: 'previous-window-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Previous Window" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faGalleryThumbnails}
            fontSize={22}
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
              icon={faXmark}
              fontSize={13}
              sx={{
                transform: 'translate3D(8px, -4px, 0)',
                color: 'solarized.base00'
              }}
            />
          </KeyIcon>
          <KeyIcon
            icon={faGalleryThumbnails}
            fontSize={22}
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
              icon={faWindowMinimize}
              fontSize={13}
              sx={{
                transform: 'translate3D(6px, -6px, 0)',
                color: 'solarized.base00'
              }}
            />
          </KeyIcon>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
