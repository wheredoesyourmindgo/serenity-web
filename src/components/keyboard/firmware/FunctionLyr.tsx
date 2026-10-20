import KeyIcon from '@/components/key/KeyIcon'
import KeyLegend, {KeyLegendProps} from '@/components/key/KeyLegend'
import PopoverDesc from '@/components/key/PopoverDesc'
import ShiftSubIcn from '@/components/key/ShiftSubIcn'
import {type KeyboardLayout} from '@/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'

export default function FuncLyr({layout}: {layout: KeyboardLayout}) {
  const sharedProps: KeyLegendProps = {variant: 'h5', className: 'text-[1.1rem]'}
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
          <KeyLegend {...sharedProps}>F1</KeyLegend>
          <KeyLegend {...sharedProps}>F2</KeyLegend>
          <KeyLegend {...sharedProps}>F3</KeyLegend>
          <KeyLegend {...sharedProps}>F4</KeyLegend>
          <KeyLegend {...sharedProps}>F5</KeyLegend>
          <KeyLegend {...sharedProps}>F6</KeyLegend>
          <KeyLegend {...sharedProps}>F7</KeyLegend>
          <KeyLegend {...sharedProps}>F8</KeyLegend>
          <KeyLegend {...sharedProps}>F9</KeyLegend>
          <KeyLegend {...sharedProps}>F10</KeyLegend>
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
                  <PopoverDesc action="tap/hold" output="Escape (or clear one-shot mods)" />
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
                  <PopoverDesc action="tap" output="Left Control for the next F-key" />
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
                  <PopoverDesc action="tap" output="Left Option for the next F-key" />
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
                  <PopoverDesc action="tap" output="Left Command for the next F-key" />
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
                  <PopoverDesc action="tap" output="Left Shift for the next F-key" />
                  <br />
                  <PopoverDesc action="hold" output="Left Shift" />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-up"
            color="nushu.cyan"
            homing
            KeyContainerProps={{
              keyId: 'one-shot-shift-right-hand-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Left Shift for the next F-key" />
                  <br />
                  <PopoverDesc action="hold" output="Left Shift" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-command"
            color="nushu.cyan"
            KeyContainerProps={{
              keyId: 'one-shot-command-right-hand-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Left Command for the next F-key" />
                  <br />
                  <PopoverDesc action="hold" output="Left Command" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-option text-[18px]"
            color="nushu.cyan"
            KeyContainerProps={{
              keyId: 'one-shot-option-right-hand-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Left Option for the next F-key" />
                  <br />
                  <PopoverDesc action="hold" output="Left Option" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-chevron-up"
            color="nushu.cyan"
            KeyContainerProps={{
              keyId: 'one-shot-control-right-hand-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Left Control for the next F-key" />
                  <br />
                  <PopoverDesc action="hold" output="Left Control" />
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
          <KeyLegend {...sharedProps}>F11</KeyLegend>
          <KeyLegend {...sharedProps}>F12</KeyLegend>
          <KeyLegend {...sharedProps}>F13</KeyLegend>
          <KeyLegend {...sharedProps}>F14</KeyLegend>
          <KeyLegend {...sharedProps}>F15</KeyLegend>
          <KeyLegend {...sharedProps}>F16</KeyLegend>
          <KeyLegend {...sharedProps}>F17</KeyLegend>
          <KeyLegend {...sharedProps}>F18</KeyLegend>
          <KeyLegend {...sharedProps}>F19</KeyLegend>
          <KeyLegend {...sharedProps}>F20</KeyLegend>
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
