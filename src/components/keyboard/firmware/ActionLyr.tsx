import KeyIcon from '@/components/key/KeyIcon'
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import PopoverDesc from '@/components/key/PopoverDesc'
import ShiftSubIcn from '@/components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@/components/key/LyrHoldSubIcn'
import {type KeyboardLayout} from '@/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'
import AppCaption from '@/components/key/AppCaption'

export default function ActionLyr({layout}: {layout: KeyboardLayout}) {
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
            className="fa-regular fa-print-magnifying-glass"
            KeyContainerProps={{
              keyId: 'print-screen-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Print Screen" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-scroll"
            KeyContainerProps={{
              keyId: 'scroll-lock-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Scroll Lock" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-circle-pause"
            KeyContainerProps={{
              keyId: 'pause-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Pause" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-i-cursor"
            KeyContainerProps={{
              keyId: 'insert-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Insert" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-list-dropdown"
            KeyContainerProps={{
              keyId: 'app-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="App (Menu)" />
                </div>
              )
            }}
          />
          <KeyIcon
            longPress
            appShortcut
            className="fa-regular fa-up-right-and-down-left-from-center"
            KeyContainerProps={{
              keyId: 'window-partial-fullscreen-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Maximize Window (⌃⌥↩)" />
                  <br />
                  <PopoverDesc action="hold" output="Restore Window (⌃⌥⌫)" />
                  <br />
                  <AppCaption app="Rectangle Pro" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-square-up-left"
            KeyContainerProps={{
              keyId: 'nav-left-tab',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Switch Tab Left" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-rectangle-vertical-history"
            rotation={180}
            KeyContainerProps={{
              keyId: 'prev-app-window',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Prev App Window" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-rectangle-vertical-history"
            KeyContainerProps={{
              keyId: 'next-app-window',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Next App Window" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-square-up-right"
            KeyContainerProps={{
              keyId: 'nav-right-tab',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Switch Tab Right" />
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
            special
            className="fa-regular fa-arrow-up-left-from-circle text-[18px]"
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc
                    action="tap/hold"
                    output="Escape (or clear one-shot mods, then turn off Action layer lock)"
                  />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-chevron-up"
            color="nushu.cyan"
            KeyContainerProps={{
              keyId: 'one-shot-control-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Left Control for the next key or click" />
                  <br />
                  <PopoverDesc action="hold" output="Left Control" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-option text-[18px]"
            color="nushu.cyan"
            KeyContainerProps={{
              keyId: 'one-shot-option-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Left Option for the next key or click" />
                  <br />
                  <PopoverDesc action="hold" output="Left Option" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-command"
            color="nushu.cyan"
            KeyContainerProps={{
              keyId: 'one-shot-command-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Left Command for the next key or click" />
                  <br />
                  <PopoverDesc action="hold" output="Left Command" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-up"
            color="nushu.cyan"
            homing
            KeyContainerProps={{
              keyId: 'one-shot-shift-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Left Shift for the next key or click" />
                  <br />
                  <PopoverDesc action="hold" output="Left Shift" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-lock"
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Lock/Unlock Action Layer" />
                </div>
              )
            }}
          />
          <KeyIcon
            longPress
            appShortcut
            rotation={90}
            className="fa-regular fa-down-left-and-up-right-to-center"
            KeyContainerProps={{
              keyId: 'window-partial-fullscreen-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Center Window (⌃⌥C)" />
                  <br />
                  <PopoverDesc action="hold" output="Last Window Position (⌃⌥⇧⌘V)" />
                  <br />
                  <AppCaption app="Rectangle Pro" />
                </div>
              )
            }}
          />
          <KeyIcon
            homing
            longPress
            appShortcut
            className="fa-regular fa-sidebar"
            KeyContainerProps={{
              keyId: 'window-center-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Window Left Half (⌃⌥⌘←)" />
                  <br />
                  <PopoverDesc action="hold" output="Window Fill Left (⌃⌥⌘L)" />
                  <br />
                  <AppCaption app="Rectangle Pro" />
                </div>
              )
            }}
          />
          <KeyIcon
            appShortcut
            rotation={180}
            className="fa-regular fa-octagon-minus"
            KeyContainerProps={{
              keyId: 'window-management1-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Decrease Window Size (⌃⌥-)" />
                  <AppCaption app="Rectangle Pro" />
                </div>
              )
            }}
          />
          <KeyIcon
            appShortcut
            className="fa-regular fa-octagon-plus"
            KeyContainerProps={{
              keyId: 'window-management2-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Increase Window Size (⌃⌥=)" />
                  <AppCaption app="Rectangle Pro" />
                </div>
              )
            }}
          />
          <KeyIcon
            homing
            longPress
            appShortcut
            className="fa-regular fa-sidebar-flip"
            KeyContainerProps={{
              keyId: 'window-restore-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Window Right Half (⌃⌥⌘→)" />
                  <br />
                  <PopoverDesc action="hold" output="Window Fill Right (⌃⌥⌘R)" />
                  <br />
                  <AppCaption app="Rectangle Pro" />
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
                  <PopoverDesc action="double tap" output="Caps-word" />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            longPress
            appShortcut
            rotation={-45}
            className="fa-regular fa-up-right-and-down-left-from-center"
            KeyContainerProps={{
              keyId: 'window-partial-fullscreen-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Almost Max Window (⌃⌥⇧⌘M)" />
                  <br />
                  <PopoverDesc action="hold" output="Max Window Height (⌃⌥⇧↑)" />
                  <br />
                  <AppCaption app="Rectangle Pro" />
                </div>
              )
            }}
          />
          <KeyIcon
            appShortcut
            className="fa-regular fa-square-left"
            KeyContainerProps={{
              keyId: 'throw-space-left-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Throw Window Space Left (⌃⌥⇧⌘←)" />
                  <br />
                  <AppCaption app="Rectangle Pro" />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap" output="Throw Window Space Right (⌃⌥⇧⌘→)" />
                  <br />
                  <AppCaption app="Rectangle Pro" />
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
              keyId: 'left-control-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc
                    action="hold"
                    output="Left Control (adds Left Shift while the Action key is held)"
                  />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-option text-[18px]"
            KeyContainerProps={{
              keyId: 'left-option-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc
                    action="hold"
                    output="Left Option (adds Left Shift while the Action key is held)"
                  />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-command"
            KeyContainerProps={{
              keyId: 'left-command-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc
                    action="hold"
                    output="Left Command (adds Left Shift while the Action key is held)"
                  />
                </div>
              )
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
          <KeyIcon
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn className="fa-regular fa-function translate-x-[-3px]" />
            )}
            className="fa-regular fa-layer-group translate-y-[2px] text-[16px]"
            KeyContainerProps={{
              keyId: 'function-layer-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="hold" output="Function Layer" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-command"
            color="nushu.cyan"
            KeyContainerProps={{
              keyId: 'one-shot-right-command-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Right Command for the next key or click" />
                  <br />
                  <PopoverDesc action="hold" output="Right Command" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-option text-[18px]"
            color="nushu.cyan"
            KeyContainerProps={{
              keyId: 'one-shot-right-option-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Right Option for the next key or click" />
                  <br />
                  <PopoverDesc action="hold" output="Right Option" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-chevron-up"
            color="nushu.cyan"
            KeyContainerProps={{
              keyId: 'one-shot-right-control-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Right Control for the next key or click" />
                  <br />
                  <PopoverDesc action="hold" output="Right Control" />
                </div>
              )
            }}
          />
        </KeyboardGridRow>
      </div>
    </div>
  )
}
