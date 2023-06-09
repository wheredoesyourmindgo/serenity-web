import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowPointer,
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faBracketSquare,
  faBullseyePointer,
  faArrowUpLeftFromCircle,
  faLock,
  faLockA,
  faOption,
  faSort,
  faUp,
  faVolumeXmark
} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/material'
import PopoverDesc from '@components/key/PopoverDesc'
import MuiFaIcon from '@components/MuiFaIcon'

export default function MouseLyr() {
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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn5
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn1
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn2
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn3
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn4
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
          <KeyIcon icon={faOption} sx={{fontSize: 19}} color="solarized.cyan" />
          <KeyIcon icon={faCommand} color="solarized.cyan" />
          <KeyIcon
            homing
            icon={faUp}
            color="solarized.cyan"
            KeyContainerProps={{
              keyId: 'left-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Left Shift" />
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
                  <PopoverDesc action="tap" output="Lock/Unlock Mouse Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faLockA}
            KeyContainerProps={{
              keyId: 'lock-key-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock Next Key" />
                </Box>
              )
            }}
          />
          <KeyLegend
            homing
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-move-left-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Move Left" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              icon={faArrowPointer}
              sx={{paddingRight: 0.5}}
              fontSize={12}
            />
            L
          </KeyLegend>

          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-move-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Move Down" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              icon={faArrowPointer}
              sx={{paddingRight: 0.5}}
              fontSize={12}
            />
            D
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-move-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Move Up" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              icon={faArrowPointer}
              sx={{paddingRight: 0.5}}
              fontSize={12}
            />
            U
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-move-right-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Move Right" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              icon={faArrowPointer}
              sx={{paddingRight: 0.5}}
              fontSize={12}
            />
            R
          </KeyLegend>

          <KeyLegend shiftLgnd={'"'} {...sharedProps}>
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

          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faBullseyePointer}
            KeyContainerProps={{
              keyId: 'shake-mouse-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Shake Mouse Pointer" />
                </Box>
              )
            }}
          />
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-wheel-left-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Left" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              icon={faSort}
              sx={{paddingRight: 0.5}}
              fontSize={14}
              rotation={90}
            />
            L
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-wheel-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Down" />
                </Box>
              )
            }}
          >
            <MuiFaIcon icon={faSort} sx={{paddingRight: 0.5}} fontSize={14} />D
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-wheel-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Up" />
                </Box>
              )
            }}
          >
            <MuiFaIcon icon={faSort} sx={{paddingRight: 0.5}} fontSize={14} />U
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            sx={{fontSize: 16}}
            KeyContainerProps={{
              keyId: 'mouse-wheel-right-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Mouse Wheel Right" />
                </Box>
              )
            }}
          >
            <MuiFaIcon
              icon={faSort}
              sx={{paddingRight: 0.5}}
              fontSize={14}
              rotation={90}
            />
            R
          </KeyLegend>
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

          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          {/* <KeyIcon
            icon={faArrowUpLeftFromCircle}
            sx={{fontSize: 19, transform: 'translateY(1px)'}}
            KeyContainerProps={{
              keyId: 'escape-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Escape" />
                </Box>
              )
            }}
          /> */}
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
          {/* <KeyIcon icon={faArrowRightLongToLine} /> */}
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
          <KeyLegend {...sharedProps} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
