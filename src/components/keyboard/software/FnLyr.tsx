// cspell:ignore xmark
import KeyIcon from '@/components/key/KeyIcon'
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import PopoverDesc from '@/components/key/PopoverDesc'
import ShiftSubIcn from '@/components/key/ShiftSubIcn'
import ModSubHoldIcn from '@/components/key/ModSubHoldIcn'
import KeyboardGridRow from '../KeyboardGridRow'

export default function FnLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

  return (
    <div>
      <div className="flex flex-col gap-2">
        <KeyboardGridRow>
          <KeyIcon
            // customShiftCode
            className="fa-regular fa-lock-a translate-x-[2px] text-[19px]"
            KeyContainerProps={{
              style: {
                width: 86.5, // 1.5u (equation is: (55+8)*1.5-8)
                height: 55
              },
              keyId: 'capslock-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Capslock" />
                </div>
              )
            }}
            // shiftSubIcn={faRightToBracket}
          />
          <KeyLegend {...sharedProps} className="text-[18px]">
            F1
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F2
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F3
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F4
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F5
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F6
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F7
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F8
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F9
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F10
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F11
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[18px]">
            F12
          </KeyLegend>
          <KeyIcon
            className="fa-regular fa-fingerprint"
            KeyContainerProps={{
              keyId: 'fingerprint-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Power/Sleep" />
                  <br />
                  <PopoverDesc action="hold" output="Fingerprint Reader" />
                </div>
              )
            }}
          />
        </KeyboardGridRow>
        <KeyboardGridRow>
          <KeyLegend {...sharedProps} shiftLgnd="~">
            `
          </KeyLegend>
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
            className="fa-regular fa-rectangles-mixed text-[19px]"
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
            className="fa-regular fa-magnifying-glass text-[19px]"
            KeyContainerProps={{
              keyId: 'spotlight-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Spotlight" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-microphone text-[19px]"
            KeyContainerProps={{
              keyId: 'siri-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Siri" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-moon"
            KeyContainerProps={{
              keyId: 'do-not-disturb-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Do Not Disturb" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-backward text-[19px]"
            KeyContainerProps={{
              keyId: 'rewind-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Rewind" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-play-pause text-[19px]"
            KeyContainerProps={{
              keyId: 'play-pause-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Play Pause" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-forward text-[19px]"
            KeyContainerProps={{
              keyId: 'fast-forward-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Fast Forward" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-volume-slash text-[19px]"
            KeyContainerProps={{
              keyId: 'mute-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Mute" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-volume-low text-[19px]"
            KeyContainerProps={{
              keyId: 'volume-down-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Volume Down" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-volume-high text-[19px]"
            KeyContainerProps={{
              keyId: 'volume-up-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Volume Up" />
                </div>
              )
            }}
          />
          <KeyIcon
            customShiftCode
            className="fa-regular fa-delete-left"
            KeyContainerProps={{
              style: {
                width: 86.5, // 1.5u
                height: 55
              },
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
            // customShiftCode
            className="fa-regular fa-arrow-right-long-to-line translate-x-[2px] text-[19px]"
            KeyContainerProps={{
              style: {
                width: 86.5, // 1.5u
                height: 55
              },
              keyId: 'tab-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Tab" />
                  {/* <br />
                  <PopoverDesc action="shifted" output="Delete word right" /> */}
                </div>
              )
            }}
            // shiftSubIcn={faRightToBracket}
          />
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="!">
            1
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="@">
            2
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="#">
            3
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="$">
            4
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="%">
            5
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="^">
            6
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="&">
            7
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="*">
            8
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="(">
            9
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd=")">
            0
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="+">
            =
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="?">
            /
          </KeyLegend>
          <KeyLegend {...sharedProps} className="text-[1.3rem]" shiftLgnd="|">
            \
          </KeyLegend>
        </KeyboardGridRow>
        <KeyboardGridRow>
          <KeyIcon
            special
            className="fa-regular fa-arrow-up-left-from-circle text-[18px]"
            KeyContainerProps={{
              style: {
                width: 102.25, // 1.75u
                height: 55
              },
              keyId: 'escape-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Escape (or turn off Fn layer lock)" />
                </div>
              )
            }}
          />
          <KeyIcon className="fa-regular fa-chevron-up" />
          <KeyIcon className="fa-regular fa-option text-[18px]" />
          <KeyIcon className="fa-regular fa-command" />
          <KeyIcon className="fa-regular fa-up" homing />

          <KeyIcon
            className="fa-regular fa-lock"
            KeyContainerProps={{
              keyId: 'lock-fn-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Lock/Unlock Fn Layer" />
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

          <KeyIcon className="fa-regular fa-arrow-left" homing />
          <KeyIcon className="fa-regular fa-arrow-down" />
          <KeyIcon className="fa-regular fa-arrow-up" />
          <KeyIcon className="fa-regular fa-arrow-right" />
          <KeyLegend {...sharedProps} shiftLgnd=":">
            ;
          </KeyLegend>
          <KeyIcon
            className="fa-regular fa-arrow-turn-down-left translate-y-1"
            KeyContainerProps={{
              style: {width: 102.25, height: 55},
              keyId: 'enter-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap" output="Enter" />
                </div>
              )
            }}
          />
        </KeyboardGridRow>
        <KeyboardGridRow>
          <KeyIcon
            className="fa-regular fa-up"
            KeyContainerProps={{
              style: {width: 133.75, height: 55}, // 2.25u
              keyId: 'left-shift-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="single tap/hold" output="Left Shift" />
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
            className="fa-regular fa-arrow-turn-down-left translate-y-1"
            ModHoldSubIcn={() => <ModSubHoldIcn className="fa-regular fa-up" />}
            KeyContainerProps={{
              style: {width: 133.75, height: 55}, // 2.25u
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

          <KeyLegend
            {...sharedProps}
            // KeyContainerProps={{
            //   style: {width: 70.75, height: 55} // 1.25u
            // }}
          />
          <KeyIcon className="fa-regular fa-chevron-up" />
          <KeyIcon className="fa-regular fa-option text-[18px]" />
          <KeyIcon
            className="fa-regular fa-command text-[18px]"
            KeyContainerProps={{
              style: {width: 70.75, height: 55} // 1.25u
            }}
          />

          <KeyIcon
            className="fa-regular fa-bracket-square translate-y-[6px]"
            rotation={270}
            KeyContainerProps={{
              style: {width: 307, height: 55}, // 5u
              keyId: 'space-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Space" />
                </div>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-command text-[18px]"
            KeyContainerProps={{
              style: {width: 70.75, height: 55}, // 1.25u
              keyId: 'right-command-key',
              popOverContent: (
                <div className="p-2">
                  <PopoverDesc action="tap/hold" output="Right Command" />
                </div>
              )
            }}
          />
          <KeyIcon className="fa-regular fa-option text-[18px]" />

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                alignSelf: 'flex-end'
              }}
            >
              <KeyIcon
                className="fa-regular fa-arrow-left translate-y-[-2px] text-[14px]"
                KeyContainerProps={{
                  style: {width: 55, height: 25} // 1u
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                marginLeft: 8
              }}
            >
              <KeyIcon
                className="fa-regular fa-arrow-up translate-y-[-2px] text-[14px]"
                KeyContainerProps={{
                  style: {width: 55, height: 25} // 1u
                }}
              />
              <KeyIcon
                className="fa-regular fa-arrow-down translate-y-[-2px] text-[14px]"
                KeyContainerProps={{
                  style: {width: 55, height: 25} // 1u
                }}
              />
            </div>
            {/* <KeyIcon
                className="fa-regular fa-arrow-up -translate-y-[2px] text-[14px]"
              /> */}
            <div
              style={{
                alignSelf: 'flex-end',
                marginLeft: 8
              }}
            >
              <KeyIcon
                className="fa-regular fa-arrow-right translate-y-[-2px] text-[14px]"
                KeyContainerProps={{
                  style: {width: 55, height: 25} // 1u
                }}
              />
            </div>
          </div>
        </KeyboardGridRow>
      </div>
    </div>
  )
}
