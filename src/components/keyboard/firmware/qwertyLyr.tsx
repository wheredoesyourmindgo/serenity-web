import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUp,
  faArrowUpLeftFromCircle,
  faBracketSquare,
  faComputerMouse,
  faLayerGroup,
  faOption,
  faUpLong
} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box} from '@mui/system'
import PopoverDesc from '@components/key/PopoverDesc'

export default function QwertyLyr() {
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
          <KeyLegend {...sharedProps} shiftLgnd="Q">
            q
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="W">
            w
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="E">
            e
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="R">
            r
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="T">
            t
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="Y">
            y
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="U">
            u
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="I">
            i
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="O">
            o
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="P">
            p
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
          <KeyLegend {...sharedProps} shiftLgnd='"'>
            '
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="A">
            a
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="S">
            s
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="D">
            d
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="F" homing>
            f
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="G">
            g
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="H">
            h
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="J" homing>
            j
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="K">
            k
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="L">
            l
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd=":">
            ;
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="_">
            -
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyIcon
            icon={faUpLong}
            KeyContainerProps={{
              keyId: 'left-shift-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap/hold" output="Left Shift" />
                </Box>
              )
            }}
          />
          <KeyLegend {...sharedProps} shiftLgnd="Z">
            z
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="X">
            x
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="C">
            c
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="V">
            v
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="B">
            b
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="N">
            n
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="M">
            m
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd="<">
            ,
          </KeyLegend>
          <KeyLegend {...sharedProps} shiftLgnd=">">
            .
          </KeyLegend>
          <KeyIcon icon={faArrowUp} />
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
            icon={faComputerMouse}
            lyrSubIcn={faLayerGroup}
            sx={{transform: 'translateY(2px)'}}
            KeyContainerProps={{
              keyId: 'mouse-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="hold" output="Mouse Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon icon={faChevronUp} />
          <KeyIcon icon={faOption} sx={{fontSize: 19}} />
          <KeyIcon icon={faCommand} />
          <KeyIcon
            icon={faArrowUpLeftFromCircle}
            sx={{fontSize: 19, transform: 'translateY(4px)'}}
            special
            lyrSubIcn={faLayerGroup}
            KeyContainerProps={{
              keyId: 'lower-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Escape" />
                  <br />
                  <PopoverDesc
                    action="hold"
                    output="Num/Nav Layer (or Left Shift)"
                  />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faArrowTurnDownLeft}
            lyrSubIcn={faLayerGroup}
            sx={{transform: 'translateY(2px)'}}
            KeyContainerProps={{
              keyId: 'low-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Enter" />
                  <br />
                  <PopoverDesc action="hold" output="Symbol Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faArrowRightLongToLine}
            lyrSubIcn={faLayerGroup}
            sx={{transform: 'translateY(1px)'}}
            KeyContainerProps={{
              keyId: 'high-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Tab" />
                  <br />
                  <PopoverDesc action="hold" output="Media Layer" />
                </Box>
              )
            }}
          />
          <KeyIcon
            icon={faBracketSquare}
            rotation={270}
            special
            sx={{transform: 'translateY(6px)'}}
            lyrSubIcn={faLayerGroup}
            KeyContainerProps={{
              keyId: 'higher-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="tap" output="Space" />
                  <br />
                  <PopoverDesc
                    action="hold"
                    output="Action Layer (or Right Shift)"
                  />
                </Box>
              )
            }}
          />
          <KeyLegend
            {...sharedProps}
            shiftLgnd="?"
            lyrSubIcn={faLayerGroup}
            KeyContainerProps={{
              keyId: 'function-layer-key',
              popOverContent: (
                <Box p={1}>
                  <PopoverDesc action="hold" output="Function Layer" />
                </Box>
              )
            }}
          >
            /
          </KeyLegend>
          <KeyIcon icon={faArrowLeft} />
          <KeyIcon icon={faArrowDown} />
          <KeyIcon icon={faArrowRight} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
