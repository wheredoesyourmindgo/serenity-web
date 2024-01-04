import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowRightLongToLine,
  faArrowsToDot,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faBracketSquare,
  faFunction,
  faLayerGroup,
  faLock,
  faOption,
  faRectangleVerticalHistory,
  faSquareLeft,
  faSquareRight,
  faSquareUpLeft,
  faSquareUpRight,
  faTableLayout,
  faUp,
  faUpRightAndDownLeftFromCenter,
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
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            App
          </KeyLegend>
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
          <KeyLegend {...sharedProps} />
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
          <KeyIcon icon={faOption} sx={{fontSize: 19}} color="solarized.cyan" />
          <KeyIcon icon={faCommand} color="solarized.cyan" />
          <KeyIcon icon={faUp} color="solarized.cyan" homing />
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
          {/* <KeyLegend {...sharedProps} /> */}
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
            tapDance
            icon={faUpRightAndDownLeftFromCenter}
            KeyContainerProps={{
              keyId: 'window-fullscreen-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Max Window Height" />
                  <br />
                  <PopoverDesc action="hold" output="Fullscreen Window" />
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
                  <PopoverDesc action="tap" output="Almost Max Window" />
                  <br />
                  <PopoverDesc action="hold" output="Center Window" />
                </Box>
              )
            }}
          />
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
            homing
            tapDance
            icon={faWindowRestore}
            KeyContainerProps={{
              keyId: 'window-restore-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Last Window Position" />
                  <br />
                  <PopoverDesc action="hold" output="Restore Window" />
                </Box>
              )
            }}
          />
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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faSquareLeft}
            KeyContainerProps={{
              keyId: 'throw-space-left-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Throw Window Space Left" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faSquareRight}
            KeyContainerProps={{
              keyId: 'throw-space-right-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Throw Window Space Right" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
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
          <KeyLegend {...sharedProps} />
          <KeyIcon
            lyrHoldSubIcn={faFunction}
            icon={faLayerGroup}
            sx={{fontSize: 16, transform: 'translateY(2px)'}}
            KeyContainerProps={{
              keyId: 'function-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="hold" output="Function Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faCommand} />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faChevronUp} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
