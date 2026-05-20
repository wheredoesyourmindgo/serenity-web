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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-thin fa-computer-mouse text-[32px]"
            KeyContainerProps={{
              keyId: 'mouse-button-5-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Button 5" />
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
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              5
            </span>
          </KeyIcon>
          <KeyIcon
            className="fa-thin fa-computer-mouse text-[32px]"
            KeyContainerProps={{
              keyId: 'mouse-button-1-key',
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
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              1
            </span>
          </KeyIcon>
          <KeyIcon
            className="fa-thin fa-computer-mouse text-[32px]"
            KeyContainerProps={{
              keyId: 'mouse-button-2-key',
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
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              2
            </span>
          </KeyIcon>
          <KeyIcon
            className="fa-thin fa-computer-mouse text-[32px]"
            KeyContainerProps={{
              keyId: 'mouse-button-3-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Button 3" />
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
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              3
            </span>
          </KeyIcon>
          <KeyIcon
            className="fa-thin fa-computer-mouse text-[32px]"
            KeyContainerProps={{
              keyId: 'mouse-button-4-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Mouse Button 4" />
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
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              4
            </span>
          </KeyIcon>
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
            // shiftSubIcn={faRightToBracket}
            // ShiftSubIcnProps={{flip: 'horizontal'}}
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
                  <PopoverDesc action="tap/hold" output="Escape (or turn off Mouse layer lock)" />
                </div>
              )
            }}
          />
          <KeyIcon className="fa-regular fa-chevron-up" color="solarized.cyan" />
          <KeyIcon className="fa-regular fa-option text-[18px]" color="solarized.cyan" />
          <KeyIcon className="fa-regular fa-command" color="solarized.cyan" />
          <KeyIcon homing className="fa-regular fa-up" color="solarized.cyan" />
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
                  <PopoverDesc action="tap" output="Lock Next Key" />
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
            <FaIcon className="fa-regular fa-arrow-pointer pr-1 text-[0.75rem]" />L
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
            <FaIcon className="fa-regular fa-arrow-pointer pr-1 text-[0.75rem]" />D
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
            <FaIcon className="fa-regular fa-arrow-pointer pr-1 text-[0.75rem]" />U
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
            <FaIcon className="fa-regular fa-arrow-pointer pr-1 text-[0.75rem]" />R
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
                  <PopoverDesc action="double tap" output="Caps-word" />
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
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyLegend
            {...sharedProps}
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyLegend
            {...sharedProps}
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
          {/* <KeyIcon
            className="fa-regular fa-arrow-up-left-from-circle text-[19px] translate-y-[1px]"
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Escape" />
                </div>
              )
            }}
          /> */}
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
          {/* <KeyIcon className="fa-regular fa-arrow-right-long-to-line" /> */}
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
