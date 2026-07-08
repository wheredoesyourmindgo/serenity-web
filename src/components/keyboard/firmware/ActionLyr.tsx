import KeyIcon from '@/components/key/KeyIcon'
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import PopoverDesc from '@/components/key/PopoverDesc'
import ShiftSubIcn from '@/components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@/components/key/LyrHoldSubIcn'
import {type KeyboardLayout} from '@/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'
import FaIcon from '@/components/FaIcon'

function RectangleProCaption() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'right'
      }}
    >
      <span
        style={{
          color: 'var(--solarized-blue)',
          fontSize: 11,
          fontWeight: 'bold'
        }}
      >
        <FaIcon className="fa-regular fa-browser pr-[18px]" color="solarized.blue" />
        Rectangle Pro
      </span>
    </div>
  )
}

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
          {/* <KeyLegend {...sharedProps} className="text-[12px]">
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
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Print Screen" />
                </div>
              )
            }}
          />
          {/* <KeyLegend {...sharedProps} className="text-[12px]">
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
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Scroll Lock" />
                </div>
              )
            }}
          />
          {/* <KeyLegend {...sharedProps} className="text-[12px]">
            Pause
          </KeyLegend> */}
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
          {/* <KeyLegend {...sharedProps} className="text-[12px]">
            Ins
          </KeyLegend> */}
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
          {/* <KeyLegend {...sharedProps} className="text-[12px]">
            App
          </KeyLegend> */}
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
          {/* <KeyIcon
            icon={faHandPointLeft}
            shiftSubIcn={faHandPointRight}
            KeyContainerProps={{
              keyId: 'go-back-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Go Back (browser)" />
                  <br />
                  <PopoverDesc action="shifted" output="Go Forward" />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap" output="Fullscreen Window" />
                  <br />
                  <PopoverDesc action="hold" output="Restore Window" />
                  <br />
                  <RectangleProCaption />
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
                  {/* <PopoverDesc action="tap" output="Next App Window" />
                  <br /> */}
                  <PopoverDesc action="tap" output="Prev App Window" />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap" output="Next App Window" />
                  {/* <br />
                  <PopoverDesc action="shifted" output="Prev App Window" /> */}
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
                  <PopoverDesc action="tap/hold" output="Escape (or turn off Action layer lock)" />
                </div>
              )
            }}
          />
          <KeyIcon className="fa-regular fa-chevron-up" color="solarized.cyan" />
          <KeyIcon className="fa-regular fa-option text-[18px]" color="solarized.cyan" />
          <KeyIcon className="fa-regular fa-command" color="solarized.cyan" />
          <KeyIcon className="fa-regular fa-up" color="solarized.cyan" homing />
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
          {/* <KeyLegend {...sharedProps} /> */}
          {/* <KeyIcon
            special
            className="fa-regular fa-table-layout"
            KeyContainerProps={{
              keyId: 'window-management3-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Window Management 3" />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap" output="Center Window" />
                  <br />
                  <PopoverDesc action="hold" output="Last Window Position" />
                  <br />
                  <RectangleProCaption />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap" output="Window Left Half" />
                  <br />
                  <PopoverDesc action="hold" output="Window Fill Left" />
                  <br />
                  <RectangleProCaption />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Decrease Window Size" />
                  {/* <br />
                  <PopoverDesc action="hold" output="" />
                  <br /> */}
                  <RectangleProCaption />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Increase Window Size" />
                  {/* <br />
                  <PopoverDesc action="hold" output="" />
                  <br /> */}
                  <RectangleProCaption />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap" output="Window Bottom Half" />
                  <br />
                  <PopoverDesc action="hold" output="Window Fill Bottom" />
                  <br />
                  <RectangleProCaption />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap" output="Window Top Half" />
                  <br />
                  <PopoverDesc action="hold" output="Window Fill Top" />
                  <br />
                  <RectangleProCaption />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap" output="Window Management 4" />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap" output="Window Right Half" />
                  <br />
                  <PopoverDesc action="hold" output="Window Fill Right" />
                  <br />
                  <RectangleProCaption />
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
          {/* <KeyIcon
            icon={faSignatureLock}
            KeyContainerProps={{
              keyId: 'caps-sentence-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Caps-sentence" />
                </div>
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
                <div className="p-2">
                  <PopoverDesc action="tap" output="Almost Max Window" />
                  <br />
                  <PopoverDesc action="hold" output="Max Window Height" />
                  <br />
                  <RectangleProCaption />
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
                  <PopoverDesc action="tap" output="Throw Window Space Left" />
                  <br />
                  <RectangleProCaption />
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
                  <PopoverDesc action="tap" output="Throw Window Space Right" />
                  <br />
                  <RectangleProCaption />
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
          {/* <KeyIcon
            icon={faVolumeXmark}
            special
            KeyContainerProps={{
              keyId: 'oops-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="single tap" output="Toggle Mute" />
                  <br />
                  <PopoverDesc
                    action="double tap"
                    output="Mute & Hide Window"
                  />
                </div>
              )
            }}
          /> */}
          <KeyIcon
            className="fa-regular fa-chevron-up"
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-option text-[18px]"
            color="solarized.cyan"
            KeyContainerProps={{
              keyId: 'right-option-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Right Option" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-command"
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
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
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-option text-[18px]"
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-chevron-up"
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
        </KeyboardGridRow>
      </div>
    </div>
  )
}
