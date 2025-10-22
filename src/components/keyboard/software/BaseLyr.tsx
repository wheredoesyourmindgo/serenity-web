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
            className="fa-regular fa-lock-a"
            sx={{
              fontSize: 19
              // transform: 'translateX(2px)'
            }}
            KeyContainerProps={{
              sx: {
                width: 86.5, // 1.5u (equation is: (55+8)*1.5-8)
                height: 55
              },
              keyId: 'capslock-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Capslock" />
                </Box>
              )
            }}
            // shiftSubIcn={faRightToBracket}
          />
          <KeyIcon
            className="fa-regular fa-brightness-low"
            KeyContainerProps={{
              keyId: 'screen-brightness-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap/hold"
                    output="Screen Brightness Down"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-brightness"
            KeyContainerProps={{
              keyId: 'screen-brightness-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap/hold"
                    output="Screen Brightness Up"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            sx={{fontSize: 19}}
            className="fa-regular fa-rectangles-mixed"
            KeyContainerProps={{
              keyId: 'mission-control-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Mission Control" />
                </Box>
              )
            }}
          />
          <KeyIcon
            sx={{fontSize: 19}}
            className="fa-regular fa-magnifying-glass"
            KeyContainerProps={{
              keyId: 'spotlight-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Spotlight" />
                </Box>
              )
            }}
          />
          <KeyIcon
            sx={{fontSize: 19}}
            className="fa-regular fa-microphone"
            KeyContainerProps={{
              keyId: 'siri-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Siri" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-moon"
            KeyContainerProps={{
              keyId: 'do-not-disturb-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Do Not Disturb" />
                </Box>
              )
            }}
          />
          <KeyIcon
            sx={{fontSize: 19}}
            className="fa-regular fa-backward"
            KeyContainerProps={{
              keyId: 'rewind-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Rewind" />
                </Box>
              )
            }}
          />
          <KeyIcon
            sx={{fontSize: 19}}
            className="fa-regular fa-play-pause"
            KeyContainerProps={{
              keyId: 'play-pause-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Play Pause" />
                </Box>
              )
            }}
          />
          <KeyIcon
            sx={{fontSize: 19}}
            className="fa-regular fa-forward"
            KeyContainerProps={{
              keyId: 'fast-forward-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Fast Forward" />
                </Box>
              )
            }}
          />
          <KeyIcon
            sx={{fontSize: 19}}
            className="fa-regular fa-volume-slash"
            KeyContainerProps={{
              keyId: 'mute-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Mute" />
                </Box>
              )
            }}
          />
          <KeyIcon
            sx={{fontSize: 19}}
            className="fa-regular fa-volume-low"
            KeyContainerProps={{
              keyId: 'volume-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Volume Down" />
                </Box>
              )
            }}
          />
          <KeyIcon
            sx={{fontSize: 19}}
            className="fa-regular fa-volume-high"
            KeyContainerProps={{
              keyId: 'volume-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Volume Up" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-fingerprint"
            KeyContainerProps={{
              keyId: 'fingerprint-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Power/Sleep" />
                  <br />
                  <PopoverDesc action="hold" output="Fingerprint Reader" />
                </Box>
              )
            }}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} shiftLgnd="~">
            `
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="!">
            1
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="@">
            2
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="#">
            3
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="$">
            4
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="%">
            5
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="^">
            6
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="&">
            7
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="*">
            8
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="(">
            9
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd=")">
            0
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="{">
            [
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="}">
            ]
          </KeyLegend>
          <KeyIcon
            customShiftCode
            className="fa-regular fa-delete-left"
            KeyContainerProps={{
              sx: {
                width: 86.5, // 1.5u
                height: 55
              },
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
            // customShiftCode
            className="fa-regular fa-arrow-right-long-to-line"
            sx={{
              fontSize: 19
              // transform: 'translateX(2px)'
            }}
            KeyContainerProps={{
              sx: {
                width: 86.5, // 1.5u
                height: 55
              },
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
          <KeyLegend {...sharedProps} shiftLgnd="+">
            =
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="?">
            /
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="|">
            \
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            className="fa-regular fa-arrow-up-left-from-circle"
            sx={{fontSize: 18}}
            KeyContainerProps={{
              sx: {
                width: 102.25, // 1.75u
                height: 55
              },
              keyId: 'escape-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Escape" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} shiftLgnd="R">
            r
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="N">
            n
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
          <KeyIcon
            className="fa-regular fa-arrow-turn-down-left"
            ModHoldSubIcn={() => <ModSubHoldIcn className="fa-regular fa-up" />}
            sx={{transform: 'translateY(4px)'}}
            KeyContainerProps={{
              sx: {width: 102.25, height: 55},
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
          <KeyIcon
            className="fa-regular fa-up"
            KeyContainerProps={{
              sx: {width: 133.75, height: 55}, // 2.25u
              keyId: 'left-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap/hold" output="Left Shift" />
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
              sx: {width: 133.75, height: 55}, // 2.25u
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
          <KeyIcon
            className="fa-light fa-globe"
            sx={{fontSize: 18, transform: 'translateY(2px)'}}
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn
                className="fa-regular fa-keyboard"
                sx={{transform: 'translateX(-4px)'}}
              />
            )}
            KeyContainerProps={{
              keyId: 'fn-layer-key',
              popOverContent: (
                <Box p={1}>
                  {/* <PopoverDesc action="tap" output="Escape" />
                  <br /> */}
                  <PopoverDesc action="hold" output="FN Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon className="fa-regular fa-chevron-up" />
          <KeyIcon className="fa-regular fa-option" sx={{fontSize: 18}} />
          <KeyIcon
            className="fa-regular fa-command"
            sx={{fontSize: 18}}
            KeyContainerProps={{
              sx: {width: 70.75, height: 55} // 1.25u
            }}
          />

          <KeyIcon
            className="fa-regular fa-bracket-square"
            rotation={270}
            sx={{transform: 'translateY(10px)'}}
            KeyContainerProps={{
              sx: {width: 307, height: 55}, // 5u
              keyId: 'space-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Space" />
                  <br />
                  <PopoverDesc action="hold" output="FN Layer" />
                </Box>
              )
            }}
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn
                className="fa-regular fa-keyboard"
                sx={{transform: 'translateX(-6px)'}}
              />
            )}
          />
          <KeyIcon
            className="fa-regular fa-command"
            sx={{fontSize: 18}}
            KeyContainerProps={{
              sx: {width: 70.75, height: 55}, // 1.25u
              keyId: 'right-command-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Right Command" />
                </Box>
              )
            }}
          />
          <KeyIcon className="fa-regular fa-option" sx={{fontSize: 18}} />

          <KeyIcon
            className="fa-regular fa-arrow-left"
            sx={{
              transform: 'translateY(-2px)',
              fontSize: 14
            }}
            KeyContainerProps={{
              sx: {width: 55, height: 25, alignSelf: 'flex-end'} // 1.25u
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'stretch',
              marginLeft: 1
            }}
          >
            <KeyIcon
              className="fa-regular fa-arrow-up"
              sx={{
                transform: 'translateY(-2px)',
                fontSize: 14
              }}
              KeyContainerProps={{
                sx: {width: 55, height: 25} // 1u
              }}
            />
            <KeyIcon
              className="fa-regular fa-arrow-down"
              sx={{
                transform: 'translateY(-2px)',
                fontSize: 14
              }}
              KeyContainerProps={{
                sx: {width: 55, height: 25} // 1u
              }}
            />
          </Box>
          {/* <KeyIcon
            className="fa-regular fa-arrow-up"
               sx={{transform: 'translateY(-2px)', fontSize: 14}}
          /> */}
          <KeyIcon
            className="fa-regular fa-arrow-right"
            sx={{
              transform: 'translateY(-2px)',
              fontSize: 14
            }}
            KeyContainerProps={{
              sx: {width: 55, height: 25, alignSelf: 'flex-end'} // 1u
            }}
          />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
