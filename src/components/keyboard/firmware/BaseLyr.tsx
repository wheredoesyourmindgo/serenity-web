// cspell:ignore xmark
import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faAnglesDown,
  faAnglesUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUp,
  faArrowUpLeftFromCircle,
  faAt,
  faBracketSquare,
  faComputerMouse,
  faGear,
  faHashtag,
  faLayerGroup,
  faOption,
  faTableLayout,
  faUp
} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'

export default function BaseLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

  return (
    <Box>
      <ColumnBox flexSpacing={1}>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            // customShiftCode
            icon={faArrowRightLongToLine}
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
          <KeyLegend {...sharedProps} shiftLgnd=":">
            ;
          </KeyLegend>
          <KeyIcon
            customShiftCode
            icon={faDeleteLeft}
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
            shiftSubIcn={faDeleteRight}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            tapForceHold
            lyrHoldSubIcn={faComputerMouse}
            icon={faArrowUpLeftFromCircle}
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
          <KeyLegend {...sharedProps} shiftLgnd="N" homing>
            n
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="E">
            e
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="I">
            i
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="A">
            a
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd='"'>
            '
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            special
            icon={faUp}
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
          <KeyLegend {...sharedProps} shiftLgnd="?">
            /
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
            icon={faUp}
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
            tapForceHold
            icon={faArrowTurnDownLeft}
            modHoldSubIcn={faUp}
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
          <KeyIcon icon={faChevronUp} />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faCommand} />
          <KeyIcon
            icon={faLayerGroup}
            sx={{fontSize: 16, transform: 'translateY(2px)'}}
            special
            lyrHoldSubIcn={faTableLayout}
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
            icon={faAnglesDown}
            sx={{fontSize: 19, transform: 'translateY(4px)'}}
            lyrHoldSubIcn={faHashtag}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <Box p={1}>
                  {/* <PopoverDesc action="tap" output="Escape" />
                  <br /> */}
                  <PopoverDesc action="hold" output="Num/Nav Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faBracketSquare}
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
            icon={faBracketSquare}
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
            icon={faAnglesUp}
            sx={{fontSize: 19, transform: 'translateY(4px)'}}
            lyrHoldSubIcn={faAt}
            KeyContainerProps={{
              keyId: 'higher-layer-key',
              popOverContent: (
                <Box p={1}>
                  {/* <PopoverDesc action="tap" output="Tab" />
                  <br /> */}
                  <PopoverDesc action="hold" output="Symbol Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faArrowLeft}
            special
            lyrHoldSubIcn={faGear}
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
            icon={faArrowDown}
            tapForceHold
            sx={{transform: 'translateY(4px)'}}
            modHoldSubIcn={faCommand}
            ModHoldSubIcnProps={{sx: {fontSize: 11}}}
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
            icon={faArrowUp}
            tapForceHold
            modHoldSubIcn={faOption}
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
            icon={faArrowRight}
            modHoldSubIcn={faChevronUp}
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
