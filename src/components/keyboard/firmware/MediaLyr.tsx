import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faBackward,
  faBracketSquare,
  faBrightness,
  faBrightnessLow,
  faCircleHalfStroke,
  faForward,
  faLayerGroup,
  faLock,
  faLockA,
  faLockOpen,
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
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Reset
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend />
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
                  <PopoverDesc action="tap" output="Lock Media Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faUp} color="solarized.cyan" homing />
          <KeyIcon icon={faCommand} color="solarized.cyan" />
          <KeyIcon icon={faOption} color="solarized.cyan" sx={{fontSize: 19}} />
          <KeyIcon icon={faChevronUp} color="solarized.cyan" />
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Debug
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
          <KeyLegend {...sharedProps} />

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
            icon={faLockOpen}
            KeyContainerProps={{
              keyId: 'base-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Revert to Base Layer" />
                </Box>
              )
            }}
          />
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
          <KeyIcon icon={faCommand} color="text.disabled" />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} color="text.disabled" />
          <KeyIcon icon={faChevronUp} color="text.disabled" />
          <KeyLegend {...sharedProps} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
