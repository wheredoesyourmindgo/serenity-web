// cspell:ignore Lgnd
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import KeyboardGridRow from './KeyboardGridRow'

const inkDeep = 'color-mix(in srgb, var(--nushu-ink-deep) 85%, transparent)'
const inkDeepest = 'color-mix(in srgb, var(--nushu-ink-deepest) 95%, transparent)'

const AlphaKeyLgnd = ({children, ...props}: KeyLegendProps) => (
  <KeyLegend
    KeyContainerProps={{style: {borderWidth: 0, boxShadow: 'none', background: 'transparent'}}}
    {...props}
  >
    {children}
  </KeyLegend>
)

export default function StaggerAlphaKeyboard() {
  return (
    <div className="flex flex-col gap-4">
      <KeyboardGridRow>
        {/* <AlphaKeyIcn icon={faDeleteRight} /> */}
        <AlphaKeyLgnd color="nushu.ink-faint">Q</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-faint">Z</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-strong">C</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink">P</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-muted">B</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-faint">J</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink">F</AlphaKeyLgnd>
        <AlphaKeyLgnd color={inkDeepest}>O</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-strong">U</AlphaKeyLgnd>
        <AlphaKeyLgnd>;</AlphaKeyLgnd>
      </KeyboardGridRow>
      <KeyboardGridRow>
        <AlphaKeyLgnd KeyContainerProps={{style: {width: 55 / 4, opacity: 0}}} />
        <AlphaKeyLgnd color={inkDeep}>D</AlphaKeyLgnd>
        <AlphaKeyLgnd color={inkDeep}>R</AlphaKeyLgnd>
        <AlphaKeyLgnd color={inkDeepest}>S</AlphaKeyLgnd>
        <AlphaKeyLgnd color={inkDeepest}>T</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink">G</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink">Y</AlphaKeyLgnd>
        <AlphaKeyLgnd color={inkDeepest}>N</AlphaKeyLgnd>
        <AlphaKeyLgnd color={inkDeepest}>E</AlphaKeyLgnd>
        <AlphaKeyLgnd color={inkDeepest}>I</AlphaKeyLgnd>
        <AlphaKeyLgnd color={inkDeepest}>A</AlphaKeyLgnd>
        <AlphaKeyLgnd>'</AlphaKeyLgnd>
      </KeyboardGridRow>
      <KeyboardGridRow>
        <AlphaKeyLgnd KeyContainerProps={{style: {width: 55, opacity: 0}}} />
        <AlphaKeyLgnd color="nushu.ink-muted">V</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-faint">X</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink">W</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-strong">M</AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-strong">L</AlphaKeyLgnd>
        <AlphaKeyLgnd color={inkDeep}>
          <em>H</em>
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-muted">
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
