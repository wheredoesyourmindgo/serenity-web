// cspell:ignore xmark
import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@components/key/LyrHoldSubIcn'
import ModSubHoldIcn from '@components/key/ModSubHoldIcn'

export default function BaseLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

  return (
    <Box>
      <ColumnBox flexSpacing={1}>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            // customShiftCode
            className="fa-regular fa-arrow-right-long-to-line"
            sx={{
              fontSize: 19
              // transform: 'translateX(2px)'
            }}
            KeyContainerProps={{
              keyId: 'tab-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Tab" />
                  {/* <br />
                  <PopoverDesc action="shifted" output="Delete word right" /> */}
                </Box>
              )
            }}
            // shiftSubIcn={faRightToBracket}
          />
          <KeyLegend {...sharedProps} shiftLgnd="Q">
            q
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="L">
            l
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="D">
            d
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="W">
            w
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="V">
            v
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="J">
            j
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="F">
            f
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="O">
            o
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="U">
            u
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="_">
            -
          </KeyLegend>
          <KeyIcon
            customShiftCode
            className="fa-regular fa-delete-left"
            KeyContainerProps={{
              keyId: 'backspace-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Backspace" />
                  <br />
                  <PopoverDesc action="shifted" output="Forward Delete" />
                </Box>
              )
            }}
            // shiftSubIcn={faRightToBracket}
            // ShiftSubIcnProps={{flip: 'horizontal'}}
            ShiftSubIcn={() => (
              <ShiftSubIcn className="fa-regular fa-delete-right" />
            )}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            tapForceHold
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn className="fa-regular fa-computer-mouse" />
            )}
            className="fa-regular fa-arrow-up-left-from-circle"
            sx={{transform: 'translateY(4px)', fontSize: 18}}
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Escape" />
                  <br />
                  <PopoverDesc action="hold" output="Mouse Layer" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} shiftLgnd="N">
            n
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="R">
            r
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="T">
            t
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="S" homing>
            s
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="G">
            g
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="Y">
            y
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="H" homing>
            h
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="E">
            e
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="A">
            a
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="I">
            i
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd=":">
            ;
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            special
            className="fa-regular fa-up"
            KeyContainerProps={{
              keyId: 'left-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap/hold" output="Left Shift" />
                  <br />
                  <PopoverDesc action="double tap" output="Caps-word" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} shiftLgnd="X">
            x
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="Z">
            z
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="M">
            m
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="C">
            c
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="B">
            b
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="K">
            k
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="P">
            p
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd='"'>
            '
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            shiftLgnd="<"
            // customShiftCode
            KeyContainerProps={{
              keyId: 'comma-key'
              // popOverContent: (
              //   <Box p={1}>
              //     <PopoverDesc action="tap/hold" output="Comma" />
              //     <br />
              //     <PopoverDesc action="shifted" output="Semicolon" />
              //   </Box>
              // )
            }}
          >
            ,
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            shiftLgnd=">"
            // customShiftCode
            KeyContainerProps={{
              keyId: 'period-key'
              // popOverContent: (
              //   <Box p={1}>
              //     <PopoverDesc action="tap/hold" output="Period/Dot" />
              //     <br />
              //     <PopoverDesc action="shifted" output="Colon" />
              //   </Box>
              // )
            }}
          >
            .
          </KeyLegend>
          {/* <KeyIcon
            special
            className="fa-regular fa-up"
            KeyContainerProps={{
              keyId: 'right-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Right Shift" />
                  <br />
                  <PopoverDesc
                    action="simultaneously tap w/ Left Shift"
                    output="Caps-word"
                  />
                </Box>
              )
            }}
          /> */}
          <KeyIcon
            className="fa-regular fa-arrow-turn-down-left"
            ModHoldSubIcn={() => <ModSubHoldIcn className="fa-regular fa-up" />}
            sx={{transform: 'translateY(4px)'}}
            KeyContainerProps={{
              keyId: 'right-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Enter" />
                  <br />
                  <PopoverDesc action="hold" output="Right Shift" />
                </Box>
              )
            }}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          {/* <KeyIcon
            icon={faVolumeXmark}
            special
            KeyContainerProps={{
              keyId: 'oops-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="Toggle Mute" />
                  <br />
                  <PopoverDesc
                    action="double tap"
                    output="Mute & Hide Window"
                  />
                </Box>
              )
            }}
          /> */}
          <KeyIcon className="fa-regular fa-chevron-up" />
          <KeyIcon className="fa-regular fa-option" sx={{fontSize: 18}} />
          <KeyIcon className="fa-regular fa-command" />
          <KeyIcon
            className="fa-regular fa-layer-group"
            sx={{fontSize: 16, transform: 'translateY(2px)'}}
            special
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn className="fa-regular fa-table-layout" />
            )}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <Box p={1}>
                  {/* <PopoverDesc action="tap" output="Escape" />
                  <br /> */}
                  <PopoverDesc
                    action="hold"
                    output="Action Layer (or Left Shift)"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            special
            className="fa-regular fa-angles-down"
            sx={{fontSize: 19, transform: 'translateY(4px)'}}
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn className="fa-regular fa-hashtag" />
            )}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <Box p={1}>
                  {/* <PopoverDesc action="tap" output="Escape" />
                  <br /> */}
                  <PopoverDesc action="hold" output="Num/Nav Layer" />
                  <br />
                  <PopoverDesc
                    action="tap -> hold"
                    output="Base Layer w/ Home Row Mods on left side"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-bracket-square"
            rotation={270}
            sx={{transform: 'translateY(6px)'}}
            KeyContainerProps={{
              keyId: 'left-space-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Space" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-bracket-square"
            rotation={270}
            sx={{transform: 'translateY(6px)'}}
            KeyContainerProps={{
              keyId: 'right-space-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Space" />
                </Box>
              )
            }}
          />
          <KeyIcon
            special
            className="fa-regular fa-angles-up"
            sx={{fontSize: 19, transform: 'translateY(4px)'}}
            LyrHoldSubIcn={() => <LyrHoldSubIcn className="fa-regular fa-at" />}
            KeyContainerProps={{
              keyId: 'higher-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="hold" output="Symbol Layer" />
                  <br />
                  <PopoverDesc
                    action="tap -> hold"
                    output="Base Layer w/ Home Row Mods on right side"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-arrow-left"
            special
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn className="fa-regular fa-gear" />
            )}
            tapForceHold
            sx={{transform: 'translateY(4px)'}}
            KeyContainerProps={{
              keyId: 'media-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Left Arrow" />
                  <br />
                  <PopoverDesc
                    action="hold"
                    output="Media Layer (or Right Shift)"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-arrow-down"
            tapForceHold
            sx={{transform: 'translateY(4px)'}}
            ModHoldSubIcn={() => (
              <ModSubHoldIcn
                className="fa-regular fa-command"
                sx={{fontSize: 11}}
              />
            )}
            KeyContainerProps={{
              keyId: 'right-command-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Down Arrow" />
                  <br />
                  <PopoverDesc action="hold" output="Right Command" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-arrow-up"
            tapForceHold
            ModHoldSubIcn={() => (
              <ModSubHoldIcn
                className="fa-regular fa-option"
                sx={{transform: 'translateX(-3px)', fontSize: 11}}
              />
            )}
            sx={{transform: 'translateY(4px)'}}
            KeyContainerProps={{
              keyId: 'right-option-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Up Arrow" />
                  <br />
                  <PopoverDesc action="hold" output="Right Alt/Option" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-arrow-right"
            ModHoldSubIcn={() => (
              <ModSubHoldIcn className="fa-regular fa-chevron-up" />
            )}
            tapForceHold
            sx={{transform: 'translateY(4px)'}}
            KeyContainerProps={{
              keyId: 'right-ctrl-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Right Arrow" />
                  <br />
                  <PopoverDesc action="hold" output="Right Control" />
                </Box>
              )
            }}
          />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
