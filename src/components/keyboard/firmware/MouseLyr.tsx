import KeyIcon from '@/components/key/KeyIcon'
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import PopoverDesc from '@/components/key/PopoverDesc'
import FaIcon from '@/components/FaIcon'
import ShiftSubIcn from '@/components/key/ShiftSubIcn'
import {type KeyboardLayout} from '@/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'

export default function MouseLyr({layout}: {layout: KeyboardLayout}) {
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
            className="fa-regular fa-gauge-low"
            KeyContainerProps={{
              keyId: 'mouse-speed-0-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="hold" output="Slow pointer and scroll speed" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-gauge"
            KeyContainerProps={{
              keyId: 'mouse-speed-1-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="hold" output="Medium pointer and scroll speed" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-gauge-high"
            KeyContainerProps={{
              keyId: 'mouse-speed-2-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="hold" output="Fast pointer and scroll speed" />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-circle-chevron-left"
            KeyContainerProps={{
              keyId: 'back-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Back (⌘[)" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-thin fa-computer-mouse text-[32px]"
            KeyContainerProps={{
              keyId: 'mouse-button-3-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Button 3 (Middle Click)" />
                </div>
              )
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '50%',
                top: '63%',
                transform: 'translate(-50%, -50%)',
                fontSize: '0.95rem',
                fontWeight: 600
              }}
            >
              3
            </span>
          </KeyIcon>
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-circle-chevron-right"
            KeyContainerProps={{
              keyId: 'forward-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Forward (⌘])" />
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
                    output="Escape (or clear one-shot mods, then turn off Mouse layer lock)"
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
                  <PopoverDesc action="tap" output="Lock/Unlock Mouse Layer" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-lock-a"
            KeyContainerProps={{
              keyId: 'lock-key-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc
                    action="tap"
                    output="Lock Next Key (released when you leave the Mouse layer)"
                  />
                </div>
              )
            }}
          />
          <KeyLegend
            homing
            {...sharedProps}
            className="text-[16px]"
            KeyContainerProps={{
              keyId: 'mouse-move-left-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Move Left" />
                </div>
              )
            }}
          >
            <FaIcon className="fa-regular fa-arrow-pointer pr-1 text-xs" />L
          </KeyLegend>

          <KeyLegend
            {...sharedProps}
            className="text-[16px]"
            KeyContainerProps={{
              keyId: 'mouse-move-down-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Move Down" />
                </div>
              )
            }}
          >
            <FaIcon className="fa-regular fa-arrow-pointer pr-1 text-xs" />D
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            className="text-[16px]"
            KeyContainerProps={{
              keyId: 'mouse-move-up-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Move Up" />
                </div>
              )
            }}
          >
            <FaIcon className="fa-regular fa-arrow-pointer pr-1 text-xs" />U
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            className="text-[16px]"
            KeyContainerProps={{
              keyId: 'mouse-move-right-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Move Right" />
                </div>
              )
            }}
          >
            <FaIcon className="fa-regular fa-arrow-pointer pr-1 text-xs" />R
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
                <div className="p-2">
                  <PopoverDesc action="single tap/hold" output="Left Shift" />
                  <br />
                  <PopoverDesc action="double tap" output="Caps Word" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-undo"
            KeyContainerProps={{
              keyId: 'undo-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Undo" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-scissors"
            KeyContainerProps={{
              keyId: 'cut-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Cut" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-copy"
            KeyContainerProps={{
              keyId: 'copy-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Copy" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-paste"
            KeyContainerProps={{
              keyId: 'paste-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Paste" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-redo"
            KeyContainerProps={{
              keyId: 'redo-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Redo" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-bullseye-pointer"
            KeyContainerProps={{
              keyId: 'shake-mouse-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Shake Mouse Pointer" />
                </div>
              )
            }}
          />
          <KeyLegend
            {...sharedProps}
            className="text-[16px]"
            KeyContainerProps={{
              keyId: 'mouse-wheel-left-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Left" />
                </div>
              )
            }}
          >
            <FaIcon rotation={270} className="fa-regular fa-circle-sort-up mr-1 text-[14px]" />L
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            className="text-[16px]"
            KeyContainerProps={{
              keyId: 'mouse-wheel-down-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Down" />
                </div>
              )
            }}
          >
            <FaIcon className="fa-regular fa-circle-sort-down mr-1 text-[14px]" />D
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            className="text-[16px]"
            KeyContainerProps={{
              keyId: 'mouse-wheel-up-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Up" />
                </div>
              )
            }}
          >
            <FaIcon className="fa-regular fa-circle-sort-up mr-1 text-[14px]" />U
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            className="text-[16px]"
            KeyContainerProps={{
              keyId: 'mouse-wheel-right-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Right" />
                </div>
              )
            }}
          >
            <FaIcon className="fa-regular fa-circle-sort-up mr-1 text-[14px]" rotation={90} />R
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
          <KeyLegend
            {...sharedProps}
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyLegend
            {...sharedProps}
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyLegend
            {...sharedProps}
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
          <KeyIcon
            className="fa-thin fa-computer-mouse text-[32px]"
            KeyContainerProps={{
              keyId: 'thumb-mouse-button-1-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Button 1" />
                </div>
              )
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '50%',
                top: '63%',
                transform: 'translate(-50%, -50%)',
                fontSize: '0.95rem',
                fontWeight: 600
              }}
            >
              1
            </span>
          </KeyIcon>
          <KeyIcon
            className="fa-thin fa-computer-mouse text-[32px]"
            KeyContainerProps={{
              keyId: 'thumb-mouse-button-2-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Button 2" />
                </div>
              )
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '50%',
                top: '63%',
                transform: 'translate(-50%, -50%)',
                fontSize: '0.95rem',
                fontWeight: 600
              }}
            >
              2
            </span>
          </KeyIcon>
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
