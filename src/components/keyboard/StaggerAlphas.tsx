// cspell:ignore Lgnd
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import KeyboardGridRow from './KeyboardGridRow'

const base02 = 'color-mix(in srgb, var(--solarized-base02) 85%, transparent)'
const base03 = 'color-mix(in srgb, var(--solarized-base03) 95%, transparent)'

const AlphaKeyLgnd = ({children, ...props}: KeyLegendProps) => (
  <KeyLegend KeyContainerProps={{style: {borderWidth: 0, boxShadow: 'none'}}} {...props}>
    {children}
  </KeyLegend>
)

export default function StaggerAlphaKeyboard() {
  return (
    <div className="flex flex-col gap-4">
      <KeyboardGridRow>
        {/* <AlphaKeyIcn icon={faDeleteRight} /> */}
        <AlphaKeyLgnd color="solarized.base1">Q</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1">Z</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">C</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">P</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0">B</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1">J</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">F</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>O</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">U</AlphaKeyLgnd>
        <AlphaKeyLgnd>;</AlphaKeyLgnd>
      </KeyboardGridRow>
      <KeyboardGridRow>
        <AlphaKeyLgnd KeyContainerProps={{style: {width: 55 / 4, opacity: 0}}} />
        <AlphaKeyLgnd color={base02}>D</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base02}>R</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>S</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>T</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">G</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">Y</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>N</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>E</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>I</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base03}>A</AlphaKeyLgnd>
        <AlphaKeyLgnd>'</AlphaKeyLgnd>
      </KeyboardGridRow>
      <KeyboardGridRow>
        <AlphaKeyLgnd KeyContainerProps={{style: {width: 55, opacity: 0}}} />
        <AlphaKeyLgnd color="solarized.base0">V</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1">X</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00">W</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">M</AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01">L</AlphaKeyLgnd>
        <AlphaKeyLgnd color={base02}>
          <em>H</em>
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0">
          <em>K</em>
        </AlphaKeyLgnd>
        <AlphaKeyLgnd>/</AlphaKeyLgnd>
        <AlphaKeyLgnd>,</AlphaKeyLgnd>
        <AlphaKeyLgnd>.</AlphaKeyLgnd>
        <AlphaKeyLgnd />
      </KeyboardGridRow>
    </div>
  )
}
