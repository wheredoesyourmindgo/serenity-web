import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'
import ShiftSubIcn from '@components/key/ShiftSubIcn'
import LyrHoldSubIcn from '@components/key/LyrHoldSubIcn'

export default function ActionLyr() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

  return (
    <Box>
      <ColumnBox flexSpacing={1}>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            className="fa-regular fa-arrow-right-long-to-line"
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
            className="fa-regular fa-square-up-left"
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
            className="fa-regular fa-rectangle-vertical-history"
            rotation={180}
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
            className="fa-regular fa-rectangle-vertical-history"
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
            className="fa-regular fa-square-up-right"
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
            ShiftSubIcn={() => (
              <ShiftSubIcn className="fa-regular fa-delete-right" />
            )}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            className="fa-regular fa-arrow-up-left-from-circle"
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
          <KeyIcon
            className="fa-regular fa-chevron-up"
            color="solarized.cyan"
          />
          <KeyIcon
            className="fa-regular fa-option"
            sx={{fontSize: 18}}
            color="solarized.cyan"
          />
          <KeyIcon className="fa-regular fa-command" color="solarized.cyan" />
          <KeyIcon className="fa-regular fa-up" color="solarized.cyan" homing />
          <KeyIcon
            className="fa-regular fa-lock"
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
            className="fa-regular fa-table-layout"
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
            className="fa-regular fa-up-right-and-down-left-from-center"
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
            className="fa-regular fa-arrows-to-dot"
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
            className="fa-regular fa-table-layout"
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
            className="fa-regular fa-table-layout"
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
            className="fa-regular fa-table-layout"
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
            className="fa-regular fa-window-restore"
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
            className="fa-regular fa-square-left"
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
            className="fa-regular fa-square-right"
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
            className="fa-regular fa-arrow-turn-down-left"
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
          <KeyIcon className="fa-regular fa-chevron-up" />
          <KeyIcon
            className="fa-regular fa-option"
            sx={{fontSize: 18}}
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
          <KeyIcon className="fa-regular fa-command" />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            className="fa-regular fa-bracket-square"
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
            className="fa-regular fa-bracket-square"
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
            LyrHoldSubIcn={() => (
              <LyrHoldSubIcn
                className="fa-regular fa-function"
                sx={{transform: 'translateX(-3px)'}}
              />
            )}
            className="fa-regular fa-layer-group"
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
          <KeyIcon className="fa-regular fa-command" />
          <KeyIcon className="fa-regular fa-option" sx={{fontSize: 18}} />
          <KeyIcon className="fa-regular fa-chevron-up" />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
