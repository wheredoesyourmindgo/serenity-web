// cspell:ignore Lgnd
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import KeyboardGridRow from './KeyboardGridRow'

const tInkDeep = 'color-mix(in srgb, var(--nushu-ink-deep) 85%, transparent)'
const tInkDeepest = 'color-mix(in srgb, var(--nushu-ink-deepest) 95%, transparent)'

const AlphaKeyLgnd = ({children, ...props}: KeyLegendProps) => (
  <KeyLegend
    KeyContainerProps={{
      style: {borderWidth: 0, boxShadow: 'none', background: 'transparent', height: 72}
    }}
    {...props}
  >
    {children}
  </KeyLegend>
)

export default function ColStaggerAlphaKeyboard() {
  const p = {
    op: 40,
    p: 40,
    r: 16,
    m: 8,
    i: 16,
    ii: 24
  } as const

  return (
    <div className="flex flex-col gap-4">
      <KeyboardGridRow>
        <AlphaKeyLgnd color="nushu.ink-strong" style={{paddingTop: p.r}}>
          L
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-strong" style={{paddingTop: p.i}}>
          C
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink" style={{paddingTop: p.i}}>
          F
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-faint" style={{paddingTop: p.ii}}>
          Q
        </AlphaKeyLgnd>
        <AlphaKeyLgnd KeyContainerProps={{style: {width: 25, opacity: 0}}} />
        <AlphaKeyLgnd color="nushu.ink-faint" style={{paddingTop: p.ii}}>
          X
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink" style={{paddingTop: p.i}}>
          W
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tInkDeepest} style={{paddingTop: p.m}}>
          O
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-strong" style={{paddingTop: p.r}}>
          U
        </AlphaKeyLgnd>
        <AlphaKeyLgnd style={{paddingTop: p.p}}>;</AlphaKeyLgnd>
      </KeyboardGridRow>
      <KeyboardGridRow>
        <AlphaKeyLgnd color="nushu.ink-strong" style={{paddingTop: p.m}}>
          M
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tInkDeep} style={{paddingTop: p.r}}>
          R
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tInkDeepest} style={{paddingTop: p.p}}>
          S
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tInkDeepest} style={{paddingTop: p.m}}>
          T
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tInkDeepest} style={{paddingTop: p.i}}>
          N
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink" style={{paddingTop: p.ii}}>
          P
        </AlphaKeyLgnd>
        <AlphaKeyLgnd KeyContainerProps={{style: {width: 25, opacity: 0}}} />
        <AlphaKeyLgnd color="nushu.ink" style={{paddingTop: p.ii}}>
          Y
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tInkDeep} style={{paddingTop: p.i}}>
          D
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tInkDeepest} style={{paddingTop: p.m}}>
          E
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tInkDeepest} style={{paddingTop: p.r}}>
          I
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tInkDeepest} style={{paddingTop: p.p}}>
          A
        </AlphaKeyLgnd>
      </KeyboardGridRow>
      <KeyboardGridRow>
        <AlphaKeyLgnd color="nushu.ink-muted" style={{paddingTop: p.p}}>
          <em>V</em>
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-faint" style={{paddingTop: p.r}}>
          J
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-muted" style={{paddingTop: p.m}}>
          K
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-faint" style={{paddingTop: p.p}}>
          <em>Z</em>
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink-muted" style={{paddingTop: p.ii}}>
          B
        </AlphaKeyLgnd>
        <AlphaKeyLgnd KeyContainerProps={{style: {width: 25, opacity: 0}}} />
        <AlphaKeyLgnd color={tInkDeep} style={{paddingTop: p.i}}>
          H
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="nushu.ink" style={{paddingTop: p.ii}}>
          G
        </AlphaKeyLgnd>
        <AlphaKeyLgnd style={{paddingTop: p.m}}>'</AlphaKeyLgnd>
        <AlphaKeyLgnd style={{paddingTop: p.r}}>,</AlphaKeyLgnd>
        <AlphaKeyLgnd style={{paddingTop: p.p}}>.</AlphaKeyLgnd>
      </KeyboardGridRow>
    </div>
  )
}
