import KeyIcon from '@/components/key/KeyIcon'
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import PopoverDesc from '@/components/key/PopoverDesc'
import ShiftSubIcn from '@/components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@/components/key/LyrHoldSubIcn'
import {type KeyboardLayout} from '@/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'

export default function MediaLyr({layout}: {layout: KeyboardLayout}) {
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
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-brightness-low"
            KeyContainerProps={{
              keyId: 'screen-brightness-down-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Screen Brightness Down" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-brightness"
            KeyContainerProps={{
              keyId: 'screen-brightness-up-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Screen Brightness Up" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-circle-half-stroke"
            requiresOsConf
            KeyContainerProps={{
              keyId: 'toggle-dark-mode-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Toggle Light/Dark Mode" />
                </div>
              )
            }}
          />
          <KeyLegend
            {...sharedProps}
            className="block text-center text-xs"
            KeyContainerProps={{
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="RGB Speed Up" />
                  <br />
                  <PopoverDesc action="shifted" output="RGB Speed Down" />
                </div>
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
            className="block text-center text-xs"
            KeyContainerProps={{
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="RGB Mode Next" />
                  <br />
                  <PopoverDesc action="shifted" output="RGB Mode Previous" />
                </div>
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
            className="block text-center text-[11px]"
            KeyContainerProps={{
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="RGB Toggle" />
                </div>
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
            className="block text-center text-xs"
            KeyContainerProps={{
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="RGB Hue Up" />
                  <br />
                  <PopoverDesc action="shifted" output="RGB Hue Down" />
                </div>
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
            className="block text-center text-xs"
            KeyContainerProps={{
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="RGB Saturation Up" />
                  <br />
                  <PopoverDesc action="shifted" output="RGB Saturation Down" />
                </div>
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
            className="block text-center text-xs"
            KeyContainerProps={{
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="RGB Brightness Up" />
                  <br />
                  <PopoverDesc action="shifted" output="RGB Brightness Down" />
                </div>
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
                  <PopoverDesc action="tap/hold" output="Escape (or turn off Media layer lock)" />
                </div>
              )
            }}
          />
          <KeyLegend />
          <KeyIcon
            className="fa-regular fa-volume-down"
            KeyContainerProps={{
              keyId: 'volume-down-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Volume Down" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-volume-up"
            KeyContainerProps={{
              keyId: 'volume-up-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Volume Up" />
                </div>
              )
            }}
          />
          <KeyIcon
            homing
            className="fa-regular fa-volume-slash"
            KeyContainerProps={{
              keyId: 'mute-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Toggle Mute" />
                </div>
              )
            }}
          />
          <KeyLegend />
          <KeyIcon
            className="fa-regular fa-lock"
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Lock/Unlock Media Layer" />
                </div>
              )
            }}
          />
          <KeyIcon className="fa-regular fa-up" color="solarized.cyan" homing />
          <KeyIcon className="fa-regular fa-command" color="solarized.cyan" />
          <KeyIcon className="fa-regular fa-option text-[18px]" color="solarized.cyan" />
          <KeyIcon className="fa-regular fa-chevron-up" color="solarized.cyan" />
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

          <KeyIcon
            className="fa-regular fa-backward"
            KeyContainerProps={{
              keyId: 'previous-track-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Previous (Playlist)" />
                  <br />
                  <PopoverDesc action="hold" output="Scan Back" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-forward"
            KeyContainerProps={{
              keyId: 'next-track-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Next (Playlist)" />
                  <br />
                  <PopoverDesc action="hold" output="Scan Forward" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-play-pause"
            KeyContainerProps={{
              keyId: 'play-pause-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Play/Pause" />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-typewriter translate-y-[2px]"
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn className="fa-regular fa-layer-group translate-x-[-2px]" />
            )}
            KeyContainerProps={{
              keyId: 'qwerty-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Toggle Qwerty Layout" />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} className="text-xs">
            Debug
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-xs">
            Reset
          </KeyLegend>
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
          {/* <KeyIcon
            className="fa-regular fa-bracket-square translate-y-[6px]"
            rotation={270}
            KeyContainerProps={{
              keyId: 'space-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Space" />
                </div>
              )
            }}
          /> */}
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
