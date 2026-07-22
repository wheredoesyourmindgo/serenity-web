import {cn} from '@/lib/utils'
import KeyIcon from '@/components/key/KeyIcon'
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import PopoverDesc from '@/components/key/PopoverDesc'
import ShiftSubIcn from '@/components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@/components/key/LyrHoldSubIcn'
import ModSubHoldIcn from '@/components/key/ModSubHoldIcn'
import {type KeyboardLayout} from '@/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'

export default function QwertyLyr({layout}: {layout: KeyboardLayout}) {
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
          <KeyLegend {...sharedProps} shiftLgnd="Q">
            q
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="W">
            w
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="E">
            e
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="R">
            r
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="T">
            t
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="Y">
            y
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="U">
            u
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="I">
            i
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="O">
            o
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="P">
            p
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
            tapForceHold
            LyrHoldSubIcn={() => <LyrHoldSubIcn className="fa-regular fa-computer-mouse" />}
            className="fa-regular fa-arrow-up-left-from-circle translate-y-1 text-[18px]"
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Escape" />
                  <br />
                  <PopoverDesc action="hold" output="Mouse Layer" />
                </div>
              )
            }}
          />
          <KeyLegend {...sharedProps} shiftLgnd="A">
            a
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="S">
            s
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="D">
            d
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="F" homing>
            f
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="G">
            g
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="H">
            h
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="J" homing>
            j
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="K">
            k
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="L">
            l
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd=":">
            ;
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd='"'>
            '
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
          <KeyLegend {...sharedProps} shiftLgnd="Z">
            z
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="X">
            x
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="C">
            c
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="V">
            v
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="B">
            b
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="N">
            n
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="M">
            m
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="<">
            ,
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd=">">
            .
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="?">
            /
          </KeyLegend>
          <KeyIcon
            className="fa-regular fa-arrow-turn-down-left translate-y-1"
            ModHoldSubIcn={() => <ModSubHoldIcn className="fa-regular fa-up" />}
            KeyContainerProps={{
              keyId: 'right-shift-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Enter" />
                  <br />
                  <PopoverDesc action="hold" output="Right Shift" />
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
          <KeyIcon
            className="fa-regular fa-layer-group translate-y-[2px] text-[16px]"
            special={!isCorneLayout}
            LyrHoldSubIcn={() => <LyrHoldSubIcn className="fa-regular fa-table-layout" />}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: isCorneLayout ? (
                <div className="p-2">
                  <PopoverDesc action="hold" output="Action Layer" />
                </div>
              ) : (
                <div className="p-2">
                  {/* <PopoverDesc action="tap" output="Escape" />
                  <br /> */}
                  <PopoverDesc
                    action="hold"
                    output="Action Layer (or Left Shift when held with other Left Mod keys)"
                  />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-angles-down translate-y-1 text-[19px]"
            LyrHoldSubIcn={() => <LyrHoldSubIcn className="fa-regular fa-hashtag" />}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <div className="p-2">
                  {/* <PopoverDesc action="tap" output="Escape" />
                  <br /> */}
                  <PopoverDesc action="hold" output="Num/Nav Layer" />
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
          <KeyIcon
            className="fa-regular fa-angles-up translate-y-1 text-[19px]"
            LyrHoldSubIcn={() => <LyrHoldSubIcn className="fa-regular fa-at" />}
            KeyContainerProps={{
              keyId: 'higher-layer-key',
              popOverContent: (
                <div className="p-2">
                  {/* <PopoverDesc action="tap" output="Tab" />
                  <br /> */}
                  <PopoverDesc action="hold" output="Symbol Layer" />
                </div>
              )
            }}
          />
          <KeyIcon
            className={cn(
              isCorneLayout
                ? 'fa-regular fa-layer-group translate-y-[2px] text-[16px]'
                : 'fa-regular fa-arrow-left translate-y-1'
            )}
            special={!isCorneLayout}
            LyrHoldSubIcn={() => <LyrHoldSubIcn className="fa-regular fa-gear" />}
            tapForceHold={!isCorneLayout}
            KeyContainerProps={{
              keyId: 'media-layer-key',
              popOverContent: isCorneLayout ? (
                <div className="p-2">
                  <PopoverDesc action="hold" output="Media Layer" />
                </div>
              ) : (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Left Arrow" />
                  <br />
                  <PopoverDesc
                    action="hold"
                    output="Media Layer (or Right Shift when held with other Right Mod keys)"
                  />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-arrow-down translate-y-1"
            tapForceHold
            ModHoldSubIcn={() => <ModSubHoldIcn className="fa-regular fa-command text-[11px]" />}
            KeyContainerProps={{
              keyId: 'right-command-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Down Arrow" />
                  <br />
                  <PopoverDesc action="hold" output="Right Command" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-arrow-up translate-y-1"
            tapForceHold
            ModHoldSubIcn={() => (
              <ModSubHoldIcn className="fa-regular fa-option translate-x-[-3px] text-[11px]" />
            )}
            KeyContainerProps={{
              keyId: 'right-option-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Up Arrow" />
                  <br />
                  <PopoverDesc action="hold" output="Right Alt/Option" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-arrow-right translate-y-1"
            ModHoldSubIcn={() => <ModSubHoldIcn className="fa-regular fa-chevron-up" />}
            tapForceHold
            KeyContainerProps={{
              keyId: 'right-ctrl-key',
              style: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Right Arrow" />
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
