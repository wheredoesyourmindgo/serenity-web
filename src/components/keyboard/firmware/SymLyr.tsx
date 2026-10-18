import KeyIcon from '@/components/key/KeyIcon'
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import PopoverDesc from '@/components/key/PopoverDesc'
import ShiftSubIcn from '@/components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@/components/key/LyrHoldSubIcn'
import {type KeyboardLayout} from '@/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'

export default function SymLyr({layout}: {layout: KeyboardLayout}) {
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
          <KeyLegend {...sharedProps}>!</KeyLegend>
          <KeyLegend {...sharedProps}>@</KeyLegend>
          <KeyLegend {...sharedProps}>#</KeyLegend>
          <KeyLegend {...sharedProps}>$</KeyLegend>
          <KeyLegend {...sharedProps}>%</KeyLegend>
          <KeyLegend {...sharedProps}>^</KeyLegend>
          <KeyLegend {...sharedProps}>&amp;</KeyLegend>
          <KeyLegend {...sharedProps}>*</KeyLegend>
          <KeyLegend {...sharedProps}>(</KeyLegend>
          <KeyLegend {...sharedProps}>)</KeyLegend>
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
                    output="Escape (or clear one-shot mods, then turn off Symbol layer lock)"
                  />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps}>[</KeyLegend>
          <KeyLegend {...sharedProps}>]</KeyLegend>
          <KeyLegend {...sharedProps}>{'='}</KeyLegend>
          <KeyLegend {...sharedProps} homing>
            /
          </KeyLegend>
          <KeyLegend {...sharedProps}>\</KeyLegend>
          <KeyIcon
            className="fa-regular fa-lock"
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Lock/Unlock Symbol Layer" />
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
          <KeyLegend {...sharedProps}>{'{'}</KeyLegend>
          <KeyLegend {...sharedProps}>{'}'}</KeyLegend>
          <KeyLegend {...sharedProps}>+</KeyLegend>
          <KeyLegend {...sharedProps}>?</KeyLegend>
          <KeyLegend {...sharedProps}>|</KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>~</KeyLegend>
          <KeyLegend {...sharedProps}>`</KeyLegend>
          <KeyLegend {...sharedProps}>-</KeyLegend>
          <KeyLegend {...sharedProps}>_</KeyLegend>
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
            color="nushu.cyan"
            KeyContainerProps={{
              keyId: 'one-shot-left-control-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
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
              keyId: 'one-shot-left-option-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
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
              keyId: 'one-shot-left-command-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                scale: isCorneLayout ? 0.92 : 1,
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Left Command for the next key or click" />
                  <br />
                  <PopoverDesc action="hold" output="Left Command" />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-layer-group translate-y-[2px] text-[16px]"
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn className="fa-brands fa-apple -translate-x-px text-[13px]" />
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
