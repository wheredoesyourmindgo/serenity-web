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
  faFunction,
  faLayerGroup,
  faLock,
  faOption,
  faPlayPause,
  faTypewriter,
  faUp,
  faVolumeDown,
  faVolumeSlash,
  faVolumeUp
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
          <KeyIcon icon={faUp} color="solarized.cyan" homing />
          <KeyIcon icon={faCommand} color="solarized.cyan" />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} color="solarized.cyan" />
          <KeyIcon icon={faChevronUp} color="solarized.cyan" />
          <KeyLegend shiftLgnd='"' {...sharedProps}>
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
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Debug
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Reset
          </KeyLegend>
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
          <KeyLegend {...sharedProps} />
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
          <KeyIcon icon={faCommand} />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faChevronUp} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
