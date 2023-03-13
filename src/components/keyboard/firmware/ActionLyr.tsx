import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {faApple} from '@fortawesome/free-brands-svg-icons'
import {
  faArrowRightLongToLine,
  faArrowsToDot,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faAt,
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
  faRectangleVerticalHistory,
  faRedo,
  faRightToBracket,
  faScissors,
  faSquareUpLeft,
  faSquareUpRight,
  faTableLayout,
  faUndo,
  faUp,
  faUpRightAndDownLeftFromCenter,
  faVolumeXmark,
  faWindowRestore
} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'

export default function ActionLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

  return (
    <Box>
      <ColumnBox flexSpacing={1}>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            customShiftCode
            icon={faDeleteRight}
            KeyContainerProps={{
              keyId: 'delete-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Delete" />
                  <br />
                  <PopoverDesc action="shifted" output="Delete word right" />
                </Box>
              )
            }}
            shiftSubIcn={faRightToBracket}
            sx={{
              transform: 'translateX(2px)'
            }}
          />
          {/* <KeyIcon
            icon={faHandPointLeft}
            shiftSubIcn={faHandPointRight}
            KeyContainerProps={{
              keyId: 'go-back-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Go Back (browser)" />
                  <br />
                  <PopoverDesc action="shifted" output="Go Forward" />
                </Box>
              )
            }}
          /> */}
          <KeyIcon
            icon={faSquareUpLeft}
            KeyContainerProps={{
              keyId: 'nav-left-tab',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Switch Tab Left" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faRectangleVerticalHistory}
            flip="horizontal"
            KeyContainerProps={{
              keyId: 'prev-app-window',
              popOverContent: (
                <Box p={1}>
                  {/* <PopoverDesc action="tap" output="Next App Window" />
                  <br /> */}
                  <PopoverDesc action="shifted" output="Prev App Window" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faRectangleVerticalHistory}
            // shiftSubIcn={faRectangleVerticalHistory}
            // ShiftSubIcnProps={{flip: 'horizontal', fontSize: 12}}
            KeyContainerProps={{
              keyId: 'next-app-window',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Next App Window" />
                  {/* <br />
                  <PopoverDesc action="shifted" output="Prev App Window" /> */}
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faSquareUpRight}
            KeyContainerProps={{
              keyId: 'nav-right-tab',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Switch Tab Right" />
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
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            App
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            <>
              Prt
              <br />
              Scr
            </>
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            <>
              Scrl
              <br />
              Lck
            </>
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Pause
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Ins
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
                  <PopoverDesc action="shifted" output="Backspace word left" />
                </Box>
              )
            }}
            shiftSubIcn={faRightToBracket}
            ShiftSubIcnProps={{flip: 'horizontal'}}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend shiftLgnd="_" {...sharedProps}>
            -
          </KeyLegend>
          {/* <KeyLegend {...sharedProps} /> */}

          <KeyIcon
            homing
            tapDance
            icon={faWindowRestore}
            KeyContainerProps={{
              keyId: 'window-restore-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Restore Window" />
                  <br />
                  <PopoverDesc action="hold" output="Almost Max Window" />
                </Box>
              )
            }}
          />
          {/* <KeyIcon
            special
            icon={faTableLayout}
            KeyContainerProps={{
              keyId: 'window-management3-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Window Management 3" />
                </Box>
              )
            }}
          /> */}
          <KeyIcon
            // special
            tapDance
            icon={faTableLayout}
            KeyContainerProps={{
              keyId: 'window-management1-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Decrease Window Size" />
                  <br />
                  <PopoverDesc action="hold" output="Window Left Half" />
                </Box>
              )
            }}
          />
          <KeyIcon
            // special
            tapDance
            icon={faTableLayout}
            KeyContainerProps={{
              keyId: 'window-management2-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Increase Window Size" />
                  <br />
                  <PopoverDesc action="hold" output="Window Right Half" />
                </Box>
              )
            }}
          />
          <KeyIcon
            homing
            tapDance
            icon={faArrowsToDot}
            KeyContainerProps={{
              keyId: 'window-center-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Center Window" />
                  <br />
                  <PopoverDesc action="hold" output="Last Window Position" />
                </Box>
              )
            }}
          />
          <KeyIcon
            tapDance
            icon={faUpRightAndDownLeftFromCenter}
            KeyContainerProps={{
              keyId: 'window-fullscreen-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Fullscreen Window" />
                  <br />
                  <PopoverDesc action="hold" output="Max Window Height" />
                </Box>
              )
            }}
          />
          {/* <KeyIcon
            homing
            special
            icon={faTableLayout}
            KeyContainerProps={{
              keyId: 'window-management4-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Window Management 4" />
                </Box>
              )
            }}
          /> */}

          <KeyIcon
            icon={faLock}
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock/Unlock Action Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faUp} color="solarized.cyan" homing />
          <KeyIcon icon={faCommand} color="solarized.cyan" />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} color="solarized.cyan" />
          <KeyIcon icon={faChevronUp} color="solarized.cyan" />
          <KeyLegend {...sharedProps} shiftLgnd='"'>
            '
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            icon={faUp}
            KeyContainerProps={{
              keyId: 'left-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Left Shift" />
                </Box>
              )
            }}
          />
          {/* <KeyIcon
            icon={faSignatureLock}
            KeyContainerProps={{
              keyId: 'caps-sentence-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Caps-sentence" />
                </Box>
              )
            }}
          /> */}
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
            icon={faUp}
            KeyContainerProps={{
              keyId: 'right-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Right Shift" />
                </Box>
              )
            }}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            icon={faVolumeXmark}
            tapDance
            sx={{transform: 'translateY(2px)'}}
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
          />
          <KeyIcon icon={faChevronUp} />
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
          <KeyIcon icon={faCommand} />
          <KeyIcon
            icon={faArrowUpLeftFromCircle}
            sx={{fontSize: 19, transform: 'translateY(4px)'}}
            lyrHoldSubIcn={faApple}
            LyrHoldSubIcnProps={{sx: {fontSize: 14}}}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Escape" />
                  <br />
                  <PopoverDesc action="hold" output="OS Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faArrowTurnDownLeft}
            lyrHoldSubIcn={faAt}
            sx={{transform: 'translateY(2px)'}}
            KeyContainerProps={{
              keyId: 'low-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Enter" />
                  <br />
                  <PopoverDesc action="hold" output="Symbol Layer" />
                </Box>
              )
            }}
          />
          {/* <KeyIcon icon={faArrowRightLongToLine} /> */}
          <KeyIcon
            icon={faBracketSquare}
            rotation={270}
            sx={{transform: 'translateY(6px)'}}
            KeyContainerProps={{
              keyId: 'space-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Space" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faArrowRightLongToLine}
            KeyContainerProps={{
              keyId: 'tab-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Tab" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faCommand} />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faChevronUp} />
          <KeyLegend {...sharedProps} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
