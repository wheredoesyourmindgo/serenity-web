import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faAnglesUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUp,
  faArrowUpLeftFromCircle,
  faBorderBottomRight,
  faBorderTopLeft,
  faBracketSquare,
  faCopy,
  faLock,
  faLockA,
  faMagicWandSparkles,
  faOption,
  faPageCaretDown,
  faPageCaretUp,
  faPaste,
  faRedo,
  faScissors,
  faUndo,
  faUp
} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faApple} from '@fortawesome/free-brands-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'

export default function NumNavLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

  return (
    <Box>
      <ColumnBox flexSpacing={1}>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            icon={faArrowRightLongToLine}
            sx={{
              fontSize: 19
            }}
            KeyContainerProps={{
              keyId: 'tab-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Tab" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} shiftLgnd="!">
            1
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="@">
            2
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="#">
            3
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="$">
            4
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="%">
            5
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="^">
            6
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="&amp;">
            7
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="*">
            8
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="(">
            9
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd=")">
            0
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
            icon={faArrowUpLeftFromCircle}
            sx={{fontSize: 18}}
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Escape" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faChevronUp} color="solarized.cyan" />
          <KeyIcon icon={faOption} color="solarized.cyan" sx={{fontSize: 19}} />
          <KeyIcon icon={faCommand} color="solarized.cyan" />
          <KeyIcon icon={faUp} color="solarized.cyan" homing />
          <KeyIcon
            icon={faLock}
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="tap"
                    output="Lock/Unlock Num/Nav Layer"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faMagicWandSparkles}
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
          {/* <KeyLegend
            {...sharedProps}
            tapDance
            // shiftLgnd=">"
            KeyContainerProps={{
              keyId: 'alt-period-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="period" />
                  <br />

                  <PopoverDesc action="hold" output="comma" />
                </Box>
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
                <Box p={1}>
                  <PopoverDesc action="single tap" output="." />
                  <br />
                  <PopoverDesc action="double tap" output="=" />
                  <br />
                  <PopoverDesc action="triple tap" output="%" />
                </Box>
              )
            }}
          /> */}
          <KeyIcon icon={faArrowLeft} homing />
          <KeyIcon icon={faArrowDown} />
          <KeyIcon icon={faArrowUp} />
          <KeyIcon icon={faArrowRight} />

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
          <KeyIcon
            icon={faUndo}
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
            icon={faScissors}
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
            icon={faCopy}
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
            icon={faPaste}
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
            icon={faRedo}
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
            icon={faLockA}
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
            icon={faBorderTopLeft}
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
            icon={faPageCaretDown}
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
            icon={faPageCaretUp}
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
            icon={faBorderBottomRight}
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
            icon={faArrowTurnDownLeft}
            KeyContainerProps={{
              keyId: 'enter-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Enter" />
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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faBracketSquare}
            rotation={270}
            sx={{transform: 'translateY(4px)'}}
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
            sx={{transform: 'translateY(4px)'}}
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
            // sx={{transform: 'translateY(1px)'}}
            sx={{fontSize: 19, transform: 'translateY(4px)'}}
            lyrHoldSubIcn={faApple}
            LyrHoldSubIcnProps={{sx: {fontSize: 14}}}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Tab" />
                  <br />
                  <PopoverDesc action="hold" output="OS Layer" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyIcon icon={faCommand} />
          <KeyIcon
            icon={faOption}
            sx={{fontSize: 19}}
            color="solarized.cyan"
            KeyContainerProps={{
              keyId: 'right-option-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Right Option" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faChevronUp} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
