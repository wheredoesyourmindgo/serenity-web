import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faOption,
  faUp,
  faDial,
  faScissors,
  faCog
} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/material'
import PopoverDesc from '@components/key/PopoverDesc'

export default function Encoder() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}

  return (
    <Box>
      <ColumnBox flexSpacing={1}>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} homing />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} homing />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
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
                  <PopoverDesc action="clockwise" output="Brighten Display" />
                  <br />
                  <PopoverDesc action="counter-cl." output="Dim Display" />
                  <br />
                  <PopoverDesc action="press" output="Toggle Dark Mode" />
                </Box>
              )
            }}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            icon={faDial}
            sx={{
              transform: 'translateY(0px)',
              fontSize: 26
            }}
            KeyContainerProps={{
              keyId: 'encoder-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="clockwise" output="Volume Up" />
                  <br />
                  <PopoverDesc action="counter-cl." output="Volume Down" />
                  <br />
                  <PopoverDesc action="press" output="Toggle Mute" />
                  <br />
                  <PopoverDesc
                    action="double press"
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
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faCog}
            color="solarized.green"
            KeyContainerProps={{
              keyId: 'media-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="clockwise" output="Down" />
                  <br />
                  <PopoverDesc action="clockwise +shift" output="Right" />
                  <br />
                  <PopoverDesc action="counter-cl." output="Up" />
                  <br />
                  <PopoverDesc action="counter-cl. +shift" output="Left" />
                  <br />
                  <PopoverDesc action="press" output="Home" />
                  <br />
                  <PopoverDesc action="press +shift" output="End" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faScissors}
            color="solarized.green"
            KeyContainerProps={{
              keyId: 'action-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="clockwise" output="Redo" />
                  <br />
                  <PopoverDesc action="counter-cl." output="Undo" />
                  <br />
                  <PopoverDesc action="press" output="Save" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faCommand}
            KeyContainerProps={{
              keyId: 'right-command-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="clockwise" output="App Switcher Right" />
                  <br />
                  <PopoverDesc
                    action="counter-cl."
                    output="App Switcher Left"
                  />
                  <br />
                  <PopoverDesc action="press" output="Toggle App Hide" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faOption}
            sx={{fontSize: 19}}
            KeyContainerProps={{
              keyId: 'right-option-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="clockwise" output="App Zoom In" />
                  <br />
                  <PopoverDesc action="counter-cl." output="App Zoom Out" />
                  <br />
                  <PopoverDesc action="press" output="Reset App Zoom" />
                </Box>
              )
            }}
          />
          <KeyIcon
            requiresOsConf
            icon={faChevronUp}
            KeyContainerProps={{
              keyId: 'right-control-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="clockwise" output="Zoom In" />
                  <br />
                  <PopoverDesc action="counter-cl." output="Zoom Out" />
                  <br />
                  <PopoverDesc action="press" output="Reset Zoom" />
                </Box>
              )
            }}
          />
          <KeyLegend />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
