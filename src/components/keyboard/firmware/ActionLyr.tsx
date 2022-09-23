import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {faApple} from '@fortawesome/free-brands-svg-icons'
import {
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faBracketSquare,
  faCopy,
  faLock,
  faMagicWandSparkles,
  faOption,
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
import {faSignatureLock} from '@fortawesome/pro-regular-svg-icons'

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
                  <PopoverDesc action="single tap" output="select word" />
                  <br />
                  <PopoverDesc action="double tap" output="select line" />
                  <br />
                  <PopoverDesc action="triple tap" output="select all" />
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
          <KeyLegend {...sharedProps} />
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
            special
            icon={faTableLayout}
            KeyContainerProps={{
              keyId: 'window-management1-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Window Management 1" />
                </Box>
              )
            }}
          />
          <KeyIcon
            special
            icon={faTableLayout}
            KeyContainerProps={{
              keyId: 'window-management2-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Window Management 2" />
                </Box>
              )
            }}
          />
          <KeyIcon
            homing
            tapDance
            icon={faWindowRestore}
            KeyContainerProps={{
              keyId: 'window-restore-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="single tap" output="Center Window" />
                  <br />
                  <PopoverDesc action="double tap" output="Restore Window" />
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
            tapDance
            icon={faUpRightAndDownLeftFromCenter}
            KeyContainerProps={{
              keyId: 'window-fullscreen-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc
                    action="single tap"
                    output="Max Window Height "
                  />
                  <br />
                  <PopoverDesc action="double tap" output="Fullscreen Window" />
                </Box>
              )
            }}
          />
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
          <KeyIcon icon={faUp} homing />
          <KeyIcon icon={faCommand} />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faChevronUp} />
          <KeyLegend {...sharedProps} shiftLgnd='"'>
            '
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            icon={faSignatureLock}
            KeyContainerProps={{
              keyId: 'caps-sentence-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Caps-sentence" />
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

          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />

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
          <KeyIcon icon={faArrowTurnDownLeft} />
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
          <KeyIcon icon={faCommand} color="text.disabled" />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} color="text.disabled" />
          <KeyIcon icon={faChevronUp} color="text.disabled" />
          <KeyLegend {...sharedProps} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
