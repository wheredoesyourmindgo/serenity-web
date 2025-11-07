// cspell:ignore xmark
import KeyIcon from '@components/key/KeyIcon'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Grid} from '@mui/material'
import PopoverDesc from '@components/key/PopoverDesc'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@components/key/LyrHoldSubIcn'
import ModSubHoldIcn from '@components/key/ModSubHoldIcn'
import {type KeyboardLayout} from 'src/app/firmware/page'
import KeyboardGridRow from '../KeyboardGridRow'

export interface BaseLyrProps {
  layout: KeyboardLayout
}

export default function BaseLyr({layout}: BaseLyrProps) {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

  const isCorneLayout = layout === '42 key'

  return (
    <Box data-layout={layout}>
      <Grid container direction="column" spacing={1}>
        <KeyboardGridRow>
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
        </KeyboardGridRow>
        <KeyboardGridRow>
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
        </KeyboardGridRow>
        <KeyboardGridRow>
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
        </KeyboardGridRow>
        <KeyboardGridRow>
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
            className="fa-regular fa-chevron-up"
            KeyContainerProps={{
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-option"
            sx={{fontSize: 18}}
            KeyContainerProps={{
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-command"
            KeyContainerProps={{
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              }
            }}
          />
          <KeyIcon
            className="fa-regular fa-layer-group"
            sx={{fontSize: 16, transform: 'translateY(2px)'}}
            special={!isCorneLayout}
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn className="fa-regular fa-table-layout" />
            )}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: isCorneLayout ? (
                <Box p={1}>
                  <PopoverDesc action="hold" output="Action Layer" />
                </Box>
              ) : (
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
            className={
              isCorneLayout
                ? 'fa-regular fa-layer-group'
                : 'fa-regular fa-arrow-left'
            }
            special={!isCorneLayout}
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn className="fa-regular fa-gear" />
            )}
            tapForceHold={!isCorneLayout}
            sx={
              isCorneLayout
                ? {fontSize: 16, transform: 'translateY(2px)'}
                : {transform: 'translateY(4px)'}
            }
            KeyContainerProps={{
              keyId: 'media-layer-key',
              popOverContent: isCorneLayout ? (
                <Box p={1}>
                  <PopoverDesc action="hold" output="Media Layer" />
                </Box>
              ) : (
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
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
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
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
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
              sx: {
                opacity: isCorneLayout ? 0 : 1,
                transition: 'opacity 160ms ease-in-out',
                pointerEvents: isCorneLayout ? 'none' : 'auto'
              },
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
        </KeyboardGridRow>
      </Grid>
    </Box>
  )
}
