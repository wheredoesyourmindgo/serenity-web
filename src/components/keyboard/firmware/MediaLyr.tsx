import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faBackward,
  faBracketSquare,
  faBrightness,
  faBrightnessLow,
  faCircleHalfStroke,
  faDeleteLeft,
  faDeleteRight,
  faForward,
  faLayerGroup,
  faLock,
  faLockA,
  faOption,
  faPlayPause,
  faRightToBracket,
  faTypewriter,
  faUp,
  faVolumeDown,
  faVolumeSlash,
  faVolumeUp,
  faVolumeXmark
} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'

export default function MediaLyr() {
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
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faBrightnessLow}
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
            icon={faBrightness}
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
            icon={faCircleHalfStroke}
            requiresOsConf
            KeyContainerProps={{
              keyId: 'toggle-dark-mode-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Toggle Light/Dark Mode" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            <>
              RGB
              <br />
              +/-
            </>
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            <>
              Mode
              <br />
              +/-
            </>
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            <>
              Hue
              <br />
              +/-
            </>
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            <>
              Sat
              <br />
              +/-
            </>
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            <>
              Bri
              <br />
              +/-
            </>
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
          <KeyLegend {...sharedProps} shiftLgnd="_">
            -
          </KeyLegend>
          <KeyLegend />
          <KeyIcon
            icon={faVolumeDown}
            KeyContainerProps={{
              keyId: 'volume-down-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Volume Down" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faVolumeUp}
            KeyContainerProps={{
              keyId: 'volume-up-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Volume Up" />
                </Box>
              )
            }}
          />
          <KeyIcon
            homing
            icon={faVolumeSlash}
            KeyContainerProps={{
              keyId: 'mute-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Toggle Mute" />
                </Box>
              )
            }}
          />
          <KeyLegend />

          <KeyIcon
            icon={faLock}
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock/Unlock Media Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faUp} homing />
          <KeyIcon icon={faCommand} />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faChevronUp} />
          <KeyLegend shiftLgnd='"' {...sharedProps}>
            '
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
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
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faBackward}
            KeyContainerProps={{
              keyId: 'previous-track-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Previous (Playlist)" />
                  <br />
                  <PopoverDesc action="hold" output="Scan Back" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faForward}
            KeyContainerProps={{
              keyId: 'next-track-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Next (Playlist)" />
                  <br />
                  <PopoverDesc action="hold" output="Scan Forward" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faPlayPause}
            KeyContainerProps={{
              keyId: 'play-pause-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Play/Pause" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faTypewriter}
            lyrHoldSubIcn={faLayerGroup}
            sx={{transform: 'translateY(2px)'}}
            KeyContainerProps={{
              keyId: 'qwerty-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Toggle Qwerty Layout" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Debug
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Reset
          </KeyLegend>
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
            sx={{fontSize: 19}}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Escape" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faArrowTurnDownLeft} />

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
          {/* <KeyIcon
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
          /> */}
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
