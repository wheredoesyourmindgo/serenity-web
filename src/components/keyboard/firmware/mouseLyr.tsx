import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowPointer,
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faBracketSquare,
  faLock,
  faLockA,
  faLockOpen,
  faOption,
  faSort,
  faUpLong
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
            icon={faDeleteRight}
            KeyContainerProps={{
              keyId: 'delete-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Delete" />
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
            Btn3
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn2
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 12}}>
            Btn4
          </KeyLegend>
          <KeyIcon
            icon={faDeleteLeft}
            KeyContainerProps={{
              keyId: 'backspace-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Backspace" />
                </Box>
              )
            }}
          />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyIcon
            icon={faLock}
            KeyContainerProps={{
              keyId: 'lock-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Lock Mouse Layer" />
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
          <KeyLegend homing {...sharedProps} sx={{fontSize: 16}}>
            <MuiFaIcon
              icon={faArrowPointer}
              sx={{paddingRight: 0.5}}
              fontSize={12}
            />
            L
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 16}}>
            <MuiFaIcon
              icon={faArrowPointer}
              sx={{paddingRight: 0.5}}
              fontSize={12}
            />
            D
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 16}}>
            <MuiFaIcon
              icon={faArrowPointer}
              sx={{paddingRight: 0.5}}
              fontSize={12}
            />
            U
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 16}}>
            <MuiFaIcon
              icon={faArrowPointer}
              sx={{paddingRight: 0.5}}
              fontSize={12}
            />
            R
          </KeyLegend>
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            icon={faUpLong}
            KeyContainerProps={{
              keyId: 'right-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Right Shift" />
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
          <KeyLegend {...sharedProps} sx={{fontSize: 16}}>
            <MuiFaIcon
              icon={faSort}
              sx={{paddingRight: 0.5}}
              fontSize={14}
              rotation={90}
            />
            L
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 16}}>
            <MuiFaIcon icon={faSort} sx={{paddingRight: 0.5}} fontSize={14} />D
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 16}}>
            <MuiFaIcon icon={faSort} sx={{paddingRight: 0.5}} fontSize={14} />U
          </KeyLegend>
          <KeyLegend {...sharedProps} sx={{fontSize: 16}}>
            <MuiFaIcon
              icon={faSort}
              sx={{paddingRight: 0.5}}
              fontSize={14}
              rotation={90}
            />
            R
          </KeyLegend>
          <KeyIcon
            icon={faUpLong}
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
          <KeyIcon icon={faChevronUp} color="solarized.cyan" />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} color="solarized.cyan" />
          <KeyIcon icon={faCommand} color="solarized.cyan" />
          <KeyIcon
            icon={faUpLong}
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
          <KeyIcon icon={faArrowTurnDownLeft} />
          <KeyIcon icon={faArrowRightLongToLine} />
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
