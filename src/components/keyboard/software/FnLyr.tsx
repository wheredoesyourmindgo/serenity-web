// cspell:ignore xmark
import KeyIcon from '@components/key/KeyIcon'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Grid} from '@mui/material'
import PopoverDesc from '@components/key/PopoverDesc'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import ModSubHoldIcn from '@components/key/ModSubHoldIcn'

export default function FnLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

  return (
    <Box>
      <Grid container direction="column" spacing={1}>
        <Grid container spacing={1} data-row>
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
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F1
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F2
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F3
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F4
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F5
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F6
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F7
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F8
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F9
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F10
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F11
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 18}}>
            F12
          </KeyLegend>
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
        </Grid>
        <Grid container spacing={1} data-row>
          <KeyLegend {...sharedProps} shiftLgnd="~">
            `
          </KeyLegend>
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
        </Grid>
        <Grid container spacing={1} data-row>
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
          <KeyLegend {...sharedProps} shiftLgnd="+">
            =
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="?">
            /
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: '1.3rem'}} shiftLgnd="|">
            \
          </KeyLegend>
        </Grid>
        <Grid container spacing={1} data-row>
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
          <KeyIcon className="fa-regular fa-chevron-up" />
          <KeyIcon className="fa-regular fa-option" sx={{fontSize: 18}} />
          <KeyIcon className="fa-regular fa-command" />
          <KeyIcon className="fa-regular fa-up" homing />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-magic-wand-sparkles"
            tapDance
            KeyContainerProps={{
              keyId: 'text-select-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="select word" />
                  <br />
                  <PopoverDesc action="hold" output="select line" />
                </Box>
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
        </Grid>
        <Grid container spacing={1} data-row>
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
          <KeyIcon
            className="fa-regular fa-undo"
            KeyContainerProps={{
              keyId: 'undo-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Undo" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-scissors"
            KeyContainerProps={{
              keyId: 'cut-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Cut" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-copy"
            KeyContainerProps={{
              keyId: 'copy-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Copy" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-paste"
            KeyContainerProps={{
              keyId: 'paste-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Paste" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-redo"
            KeyContainerProps={{
              keyId: 'redo-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Redo" />
                </Box>
              )
            }}
          />
          {/* <KeyIcon
            tapDance
            icon={faCalculatorSimple}
            KeyContainerProps={{
              keyId: 'pemdas-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="*" />
                  <br />
                  <PopoverDesc action="double tap" output="/" />
                  <br />
                  <PopoverDesc action="triple tap" output="+" />
                </Box>
              )
            }}
          /> */}
          <KeyIcon
            className="fa-regular fa-lock-a"
            KeyContainerProps={{
              keyId: 'caps-lock-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Caps-lock" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-border-top-left"
            KeyContainerProps={{
              keyId: 'home-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Home" />
                </Box>
              )
            }}
          />

          <KeyIcon
            className="fa-regular fa-page-caret-down"
            KeyContainerProps={{
              keyId: 'page-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Page Down" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-page-caret-up"
            KeyContainerProps={{
              keyId: 'page-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Page Up" />
                </Box>
              )
            }}
          />
          <KeyIcon
            className="fa-regular fa-border-bottom-right"
            KeyContainerProps={{
              keyId: 'end-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="End" />
                </Box>
              )
            }}
          />
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
        </Grid>
        <Grid container spacing={1} data-row>
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

          <KeyLegend
            {...sharedProps}
            // KeyContainerProps={{
            //   sx: {width: 70.75, height: 55} // 1.25u
            // }}
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
            sx={{transform: 'translateY(6px)'}}
            KeyContainerProps={{
              sx: {width: 307, height: 55}, // 5u
              keyId: 'space-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Space" />
                </Box>
              )
            }}
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
        </Grid>
      </Grid>
    </Box>
  )
}
