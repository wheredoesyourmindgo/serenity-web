import KeyIcon from '@/components/key/KeyIcon'
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import PopoverDesc from '@/components/key/PopoverDesc'
import ShiftSubIcn from '@/components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@/components/key/LyrHoldSubIcn'
import {type KeyboardLayout} from '@/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'

export default function NumNavLyr({layout}: {layout: KeyboardLayout}) {
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
          <KeyLegend {...sharedProps}>1</KeyLegend>
          <KeyLegend {...sharedProps}>2</KeyLegend>
          <KeyLegend {...sharedProps}>3</KeyLegend>
          <KeyLegend {...sharedProps}>4</KeyLegend>
          <KeyLegend {...sharedProps}>5</KeyLegend>
          <KeyLegend {...sharedProps}>6</KeyLegend>
          <KeyLegend {...sharedProps}>7</KeyLegend>
          <KeyLegend {...sharedProps}>8</KeyLegend>
          <KeyLegend {...sharedProps}>9</KeyLegend>
          <KeyLegend {...sharedProps}>0</KeyLegend>
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
                  <PopoverDesc action="tap/hold" output="Escape (or turn off Num-Nav layer lock)" />
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
                  <PopoverDesc action="tap" output="Lock/Unlock Num-Nav Layer" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-magic-wand-sparkles"
            tapDance
            KeyContainerProps={{
              keyId: 'text-select-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="select word" />
                  <br />
                  <PopoverDesc action="hold" output="select line" />
                </div>
              )
            }}
          />
          {/* <KeyLegend
            {...sharedProps}
            tapDance
            // shiftLgnd=">"
            KeyContainerProps={{
              keyId: 'alt-period-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="period" />
                  <br />

                  <PopoverDesc action="hold" output="comma" />
                </div>
              )
            }}
          >
            .
          </KeyLegend> */}
          {/* <KeyIcon
            tapDance
            icon={faCalculator}
            KeyContainerProps={{
              keyId: 'pemdas-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="single tap" output="." />
                  <br />
                  <PopoverDesc action="double tap" output="=" />
                  <br />
                  <PopoverDesc action="triple tap" output="%" />
                </div>
              )
            }}
          /> */}
          <KeyIcon className="fa-regular fa-arrow-left" homing />
          <KeyIcon className="fa-regular fa-arrow-down" />
          <KeyIcon className="fa-regular fa-arrow-up" />
          <KeyIcon className="fa-regular fa-arrow-right" />
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
          {/* <KeyIcon
            tapDance
            icon={faCalculatorSimple}
            KeyContainerProps={{
              keyId: 'pemdas-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="single tap" output="*" />
                  <br />
                  <PopoverDesc action="double tap" output="/" />
                  <br />
                  <PopoverDesc action="triple tap" output="+" />
                </div>
              )
            }}
          /> */}
          <KeyIcon
            className="fa-regular fa-lock-a"
            KeyContainerProps={{
              keyId: 'caps-lock-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Caps-lock" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-border-top-left"
            KeyContainerProps={{
              keyId: 'home-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Home" />
                </div>
              )
            }}
          />

          <KeyIcon
            className="fa-regular fa-page-caret-down"
            KeyContainerProps={{
              keyId: 'page-down-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Page Down" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-page-caret-up"
            KeyContainerProps={{
              keyId: 'page-up-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Page Up" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-border-bottom-right"
            KeyContainerProps={{
              keyId: 'end-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="End" />
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
            KeyContainerProps={{
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
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
          <KeyIcon
            className="fa-regular fa-angles-up"
            // className="translate-y-[1px] text-[19px] translate-y-[4px]"
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn className="fa-brands fa-apple text-[14px]" />
            )}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="hold" output="OS Layer" />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
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
