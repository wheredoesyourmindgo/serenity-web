import KeyIcon from '@components/key/KeyIcon'
import {ColumnBox, RowBox} from 'mui-sleazebox'
import {
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faBracketSquare,
  faComputerMouse,
  faFunction,
  faOption,
  faUpLong
} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteRight} from '@fortawesome/pro-regular-svg-icons'
import {faDeleteLeft} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegend} from '@components/key'
import {faChevronUp} from '@fortawesome/pro-regular-svg-icons'
import {faCommand} from '@fortawesome/pro-regular-svg-icons'
import {KeyLegendProps} from '@components/key/KeyLegend'

export default function FirmwareKeyboard() {
  const sharedProps: KeyLegendProps = {variant: 'h5'}
  return (
    <ColumnBox flexSpacing={1}>
      <RowBox child flexSpacing={1}>
        <KeyIcon icon={faDeleteRight} sx={{fontSize: 20}} />
        <KeyLegend {...sharedProps} shiftSym="V">
          v
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftSym="L">
          l
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftSym="D">
          d
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftSym="W">
          w
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftSym="Z">
          z
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftSym="Q">
          q
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftSym="F">
          f
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftSym="O">
          o
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftSym="U">
          u
        </KeyLegend>
        <KeyLegend {...sharedProps} shiftSym="_">
          -
        </KeyLegend>
        <KeyIcon icon={faDeleteLeft} />
      </RowBox>
      <RowBox child flexSpacing={1}>
        <KeyLegend {...sharedProps}>`</KeyLegend>
        <KeyLegend {...sharedProps}>s</KeyLegend>
        <KeyLegend {...sharedProps}>r</KeyLegend>
        <KeyLegend {...sharedProps}>h</KeyLegend>
        <KeyLegend {...sharedProps}>n</KeyLegend>
        <KeyLegend {...sharedProps}>y</KeyLegend>
        <KeyLegend {...sharedProps}>g</KeyLegend>
        <KeyLegend {...sharedProps}>t</KeyLegend>
        <KeyLegend {...sharedProps}>e</KeyLegend>
        <KeyLegend {...sharedProps}>i</KeyLegend>
        <KeyLegend {...sharedProps}>a</KeyLegend>
        <KeyLegend {...sharedProps}>=</KeyLegend>
      </RowBox>
      <RowBox child flexSpacing={1}>
        <KeyIcon icon={faUpLong} />
        <KeyLegend {...sharedProps}>x</KeyLegend>
        <KeyLegend {...sharedProps}>j</KeyLegend>
        <KeyLegend {...sharedProps}>m</KeyLegend>
        <KeyLegend {...sharedProps}>c</KeyLegend>
        <KeyLegend {...sharedProps}>b</KeyLegend>
        <KeyLegend {...sharedProps}>k</KeyLegend>
        <KeyLegend {...sharedProps}>p</KeyLegend>
        <KeyLegend {...sharedProps}>'</KeyLegend>
        <KeyLegend {...sharedProps}>,</KeyLegend>
        <KeyLegend {...sharedProps}>.</KeyLegend>
        <KeyIcon icon={faUpLong} />
      </RowBox>
      <RowBox child flexSpacing={1}>
        <KeyIcon icon={faComputerMouse} />
        <KeyIcon icon={faChevronUp} />
        <KeyIcon icon={faOption} sx={{fontSize: 19}} />
        <KeyIcon icon={faCommand} />
        <KeyIcon icon={faArrowUpLeftFromCircle} sx={{fontSize: 19}} />
        <KeyIcon icon={faArrowTurnDownLeft} />
        <KeyIcon icon={faArrowRightLongToLine} />
        <KeyIcon icon={faBracketSquare} rotation={270} />
        <KeyIcon icon={faCommand} />
        <KeyIcon icon={faOption} sx={{fontSize: 19}} />
        <KeyIcon icon={faChevronUp} />
        <KeyIcon icon={faFunction} />
      </RowBox>
    </ColumnBox>
  )
}
