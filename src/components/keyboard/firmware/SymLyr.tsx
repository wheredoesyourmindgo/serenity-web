import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowRightLongToLine,
  faArrowUpLeftFromCircle,
  faArrowTurnDownLeft,
  faBracketSquare,
  faLock,
  faOption,
  faUp,
  faAnglesDown
} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'
import {faApple} from '@fortawesome/free-brands-svg-icons'

export default function SymLyr() {
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
          <KeyLegend {...sharedProps}>!</KeyLegend>
          <KeyLegend {...sharedProps}>@</KeyLegend>
          <KeyLegend {...sharedProps}>#</KeyLegend>
          <KeyLegend {...sharedProps}>$</KeyLegend>
          <KeyLegend {...sharedProps}>%</KeyLegend>
          <KeyLegend {...sharedProps}>^</KeyLegend>
          <KeyLegend {...sharedProps}>&amp;</KeyLegend>
          <KeyLegend {...sharedProps}>*</KeyLegend>
          <KeyLegend {...sharedProps}>(</KeyLegend>
          <KeyLegend {...sharedProps}>)</KeyLegend>
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
          <KeyLegend {...sharedProps}>[</KeyLegend>
          <KeyLegend {...sharedProps}>]</KeyLegend>
          {/* <KeyLegend {...sharedProps}>&lt;</KeyLegend>
          <KeyLegend {...sharedProps}>&gt;</KeyLegend> */}
          <KeyLegend {...sharedProps} homing>
            -
          </KeyLegend>
          <KeyLegend {...sharedProps}>=</KeyLegend>
          <KeyLegend {...sharedProps}>`</KeyLegend>
          <KeyIcon
            icon={faLock}
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock/Unlock Symbol Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faUp} color="solarized.cyan" homing />
          <KeyIcon icon={faCommand} color="solarized.cyan" />
          <KeyIcon icon={faOption} color="solarized.cyan" sx={{fontSize: 19}} />
          <KeyIcon icon={faChevronUp} color="solarized.cyan" />
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
          <KeyLegend {...sharedProps}>{'{'}</KeyLegend>
          <KeyLegend {...sharedProps}>{'}'}</KeyLegend>
          <KeyLegend {...sharedProps}>_</KeyLegend>
          <KeyLegend {...sharedProps}>+</KeyLegend>
          <KeyLegend {...sharedProps}>~</KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>|</KeyLegend>
          <KeyLegend {...sharedProps}>\</KeyLegend>
          <KeyLegend {...sharedProps} />
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
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faCommand} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            // icon={faArrowUpLeftFromCircle}
            icon={faAnglesDown}
            sx={{fontSize: 19, transform: 'translateY(4px)'}}
            lyrHoldSubIcn={faApple}
            LyrHoldSubIcnProps={{sx: {fontSize: 14}}}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Escape" />
                  <br />
                  <PopoverDesc action="hold" output="Num/Nav Layer" />
                </Box>
              )
            }}
          />
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
