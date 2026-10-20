import KeyIcon from '@/components/key/KeyIcon'
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import PopoverDesc from '@/components/key/PopoverDesc'
import FaIcon from '@/components/FaIcon'
import ShiftSubIcn from '@/components/key/ShiftSubIcn'
import {type KeyboardLayout} from '@/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'

export default function OsLyr({layout}: {layout: KeyboardLayout}) {
  const sharedProps: KeyLegendProps = {variant: 'h5'}
  const isCorneLayout = layout === 'corne'

  return (
    <div data-layout={layout}>
      <div className="flex flex-col gap-2">
        <KeyboardGridRow>
          <KeyIcon
            className="fa-regular fa-arrow-right-long-to-line text-[19px]"
            KeyContainerProps={{
              keyId: 'tab-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Tab" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-user-lock"
            KeyContainerProps={{
              keyId: 'lock-screen-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Lock Screen (⌃⌘Q)" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-circle text-[22px]"
            KeyContainerProps={{
              keyId: 'os-close-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Close Window" />
                </div>
              )
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <FaIcon
                className="fa-solid fa-xmark translate-y-[-2px] text-[13px]"
                color="nushu.ink"
              />
            </div>
          </KeyIcon>
          <KeyIcon
            className="fa-regular fa-circle text-[22px]"
            KeyContainerProps={{
              keyId: 'os-minimize-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Minimize Window" />
                </div>
              )
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <FaIcon
                className="fa-solid fa-subtract translate-y-[-2px] text-[13px]"
                color="nushu.ink"
              />
            </div>
          </KeyIcon>
          <KeyIcon
            className="fa-regular fa-circle text-[22px]"
            KeyContainerProps={{
              keyId: 'os-fullscreen-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="OS Fullscreen" />
                </div>
              )
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <FaIcon
                rotation={135}
                className="fa-solid fa-sort translate-y-[-2px] text-[13px]"
                color="nushu.ink"
              />
            </div>
          </KeyIcon>
          <KeyLegend {...sharedProps} />
          <KeyIcon
            setupId="show-all"
            requiresOsConf
            className="fa-regular fa-eyes"
            KeyContainerProps={{
              keyId: 'show-all-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Show All (⌃⌥⇧⌘A)" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-arrows-to-eye"
            KeyContainerProps={{
              keyId: 'hide-others-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Hide Others (⌥⌘H)" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-eye-slash"
            KeyContainerProps={{
              keyId: 'hide-app-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc
                    action="tap"
                    output="Hide App (⌘H; toggles the selected one while switching apps)"
                  />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-rectangle-xmark"
            KeyContainerProps={{
              keyId: 'quit-app-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc
                    action="tap"
                    output="Quit App (⌘Q; the selected one while switching apps)"
                  />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-octagon-xmark"
            KeyContainerProps={{
              keyId: 'force-quit-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Force Quit (⌥⌘⎋)" />
                </div>
              )
            }}
          />
          <KeyIcon
            customShiftCode
            className="fa-regular fa-delete-left"
            KeyContainerProps={{
              keyId: 'backspace-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Backspace" />
                  <br />
                  <PopoverDesc action="shifted" output="Forward Delete" />
                </div>
              )
            }}
            ShiftSubIcn={() => <ShiftSubIcn className="fa-regular fa-delete-right" />}
          />
        </KeyboardGridRow>
        <KeyboardGridRow>
          <KeyIcon
            className="fa-regular fa-arrow-up-left-from-circle text-[18px]"
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc
                    action="tap/hold"
                    output="Escape (or close the app switcher without switching)"
                  />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-desktop"
            KeyContainerProps={{
              keyId: 'show-desktop-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Show/Hide Desktop" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-square-left"
            KeyContainerProps={{
              keyId: 'jump-space-left-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Switch Space Left" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-square-right"
            KeyContainerProps={{
              keyId: 'jump-space-right-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Switch Space Right" />
                </div>
              )
            }}
          />
          <KeyIcon
            homing
            className="fa-regular fa-rectangles-mixed"
            KeyContainerProps={{
              keyId: 'mission-control-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Mission Control" />
                </div>
              )
            }}
          />
          <KeyIcon
            setupId="stage-manager"
            requiresOsConf
            rotation={90}
            className="fa-regular fa-gallery-thumbnails"
            KeyContainerProps={{
              keyId: 'stage-manager-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Toggle Stage Manager (⌃⌥⇧⌘T)" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-desktop-arrow-down"
            KeyContainerProps={{
              keyId: 'select-dock-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Select Dock" />
                </div>
              )
            }}
          />
          <KeyIcon
            homing
            className="fa-regular fa-objects-column"
            KeyContainerProps={{
              keyId: 'app-expose-control-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="App Exposé" />
                  <br />
                  <PopoverDesc
                    action="while switching apps"
                    output="Show the selected app's windows"
                  />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-light fa-gallery-thumbnails text-[25px]"
            KeyContainerProps={{
              keyId: 'app-switch-left-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="App Switcher Left" />
                </div>
              )
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <FaIcon className="fa-solid fa-arrow-left-long translate-y-[-6px] text-[14px]" />
            </div>
          </KeyIcon>
          <KeyIcon
            className="fa-light fa-gallery-thumbnails text-[25px]"
            KeyContainerProps={{
              keyId: 'app-switch-right-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="App Switcher Right" />
                </div>
              )
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <FaIcon
                className="fa-solid fa-arrow-right-long translate-y-[-6px] text-[14px]"
                color="nushu.ink"
              />
            </div>
          </KeyIcon>
          <KeyIcon
            className="fa-regular fa-arrow-right-arrow-left"
            KeyContainerProps={{
              keyId: 'previous-window-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Previous App" />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="single tap/hold" output="Left Shift" />
                  <br />
                  <PopoverDesc action="double tap" output="Caps Word" />
                </div>
              )
            }}
          />
          <KeyIcon
            longPress
            className="fa-light fa-display text-[25px]"
            KeyContainerProps={{
              keyId: 'screenshot-dsktp-file-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Screenshot Entire Screen to file" />
                  <br />
                  <PopoverDesc action="hold" output="Screenshot Entire Screen to clipboard" />
                </div>
              )
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <FaIcon className="fa-regular fa-image -translate-y-1 text-[13px]" />
            </div>
          </KeyIcon>
          <KeyIcon
            longPress
            className="fa-light fa-window text-[29px]"
            KeyContainerProps={{
              keyId: 'screenshot-win-file-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Screenshot Selected Window to file" />
                  <br />
                  <PopoverDesc action="hold" output="Screenshot Selected Window to clipboard" />
                </div>
              )
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <FaIcon className="fa-regular fa-image text-[13px]" />
            </div>
          </KeyIcon>
          <KeyIcon
            longPress
            className="fa-light fa-square-dashed text-[27px]"
            KeyContainerProps={{
              keyId: 'screenshot-sel-file-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Screenshot Selection to file" />
                  <br />
                  <PopoverDesc action="hold" output="Screenshot Selection to clipboard" />
                </div>
              )
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <FaIcon className="fa-regular fa-image text-[13px]" />
            </div>
          </KeyIcon>
          <KeyIcon
            className="fa-regular fa-camera-viewfinder"
            KeyContainerProps={{
              keyId: 'screenshot-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Screenshot Options" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-circle-stop"
            KeyContainerProps={{
              keyId: 'stop-recording-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Stop Screen Recording (⌃⌘⎋)" />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            longPress
            className="fa-regular fa-magnifying-glass"
            KeyContainerProps={{
              keyId: 'spotlight-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Spotlight" />
                  <br />
                  <PopoverDesc action="hold" output="Spotlight in a new Finder window" />
                </div>
              )
            }}
          />
          <KeyIcon
            setupId="show-apps"
            requiresOsConf
            className="fa-regular fa-grid"
            KeyContainerProps={{
              keyId: 'apps-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Apps (⌃⌥⇧⌘L)" />
                </div>
              )
            }}
          />
          <KeyIcon
            setupId="siri"
            requiresOsConf
            className="fa-regular fa-microphone"
            KeyContainerProps={{
              keyId: 'siri-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Siri (⌃⌥⇧⌘S)" />
                </div>
              )
            }}
          />
          <KeyIcon
            setupId="notification-center"
            className="fa-regular fa-sidebar-flip"
            requiresOsConf
            KeyContainerProps={{
              keyId: 'notification-center-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Show/hide Notification Center (⌃⌥⇧⌘N)" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-arrow-turn-down-left"
            KeyContainerProps={{
              keyId: 'enter-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Enter" />
                </div>
              )
            }}
          />
        </KeyboardGridRow>
        <KeyboardGridRow>
          <KeyIcon
            className="fa-regular fa-chevron-up"
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-option text-[18px]"
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-command"
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-bracket-square translate-y-[6px]"
            rotation={270}
            KeyContainerProps={{
              keyId: 'left-space-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Space" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-bracket-square translate-y-[6px]"
            rotation={270}
            KeyContainerProps={{
              keyId: 'right-space-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Space" />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-command"
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-option text-[18px]"
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-chevron-up"
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
        </KeyboardGridRow>
      </div>
    </div>
  )
}
