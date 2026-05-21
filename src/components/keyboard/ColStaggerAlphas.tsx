// cspell:ignore Lgnd
import {KeyLegend} from '@/components/key'
import {KeyLegendProps} from '@/components/key/KeyLegend'
import KeyboardGridRow from './KeyboardGridRow'

const tBase02 = 'color-mix(in srgb, var(--solarized-base02) 85%, transparent)'
const tBase03 = 'color-mix(in srgb, var(--solarized-base03) 95%, transparent)'

const AlphaKeyLgnd = ({children, ...props}: KeyLegendProps) => (
  <KeyLegend
    KeyContainerProps={{
      style: {borderWidth: 0, boxShadow: 'none', height: 72}
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
        {/* <AlphaKeyIcn icon={faDeleteRight} /> */}
        <AlphaKeyLgnd color="solarized.base01" style={{paddingTop: p.r}}>
          L
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01" style={{paddingTop: p.i}}>
          C
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00" style={{paddingTop: p.i}}>
          F
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1" style={{paddingTop: p.ii}}>
          Q
        </AlphaKeyLgnd>
        <AlphaKeyLgnd KeyContainerProps={{style: {width: 25, opacity: 0}}} />
        <AlphaKeyLgnd color="solarized.base1" style={{paddingTop: p.ii}}>
          X
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00" style={{paddingTop: p.i}}>
          W
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} style={{paddingTop: p.m}}>
          O
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01" style={{paddingTop: p.r}}>
          U
        </AlphaKeyLgnd>
        <AlphaKeyLgnd style={{paddingTop: p.p}}>;</AlphaKeyLgnd>
      </KeyboardGridRow>
      <KeyboardGridRow>
        {/* <AlphaKeyLgnd KeyContainerProps={{style: {width: 55 / 4, opacity: 0}}} /> */}
        <AlphaKeyLgnd color="solarized.base01" style={{paddingTop: p.m}}>
          M
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase02} style={{paddingTop: p.r}}>
          R
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} style={{paddingTop: p.p}}>
          S
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} style={{paddingTop: p.m}}>
          T
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} style={{paddingTop: p.i}}>
          N
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00" style={{paddingTop: p.ii}}>
          P
        </AlphaKeyLgnd>
        <AlphaKeyLgnd KeyContainerProps={{style: {width: 25, opacity: 0}}} />
        <AlphaKeyLgnd color="solarized.base00" style={{paddingTop: p.ii}}>
          Y
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase02} style={{paddingTop: p.i}}>
          D
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} style={{paddingTop: p.m}}>
          E
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} style={{paddingTop: p.r}}>
          I
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} style={{paddingTop: p.p}}>
          A
        </AlphaKeyLgnd>
      </KeyboardGridRow>
      <KeyboardGridRow>
        {/* <AlphaKeyLgnd KeyContainerProps={{style: {width: 55, opacity: 0}}} /> */}
        <AlphaKeyLgnd color="solarized.base0" style={{paddingTop: p.p}}>
          <em>V</em>
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1" style={{paddingTop: p.r}}>
          J
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0" style={{paddingTop: p.m}}>
          K
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1" style={{paddingTop: p.p}}>
          <em>Z</em>
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0" style={{paddingTop: p.ii}}>
          B
        </AlphaKeyLgnd>
        <AlphaKeyLgnd KeyContainerProps={{style: {width: 25, opacity: 0}}} />
        <AlphaKeyLgnd color={tBase02} style={{paddingTop: p.i}}>
          H
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00" style={{paddingTop: p.ii}}>
          G
        </AlphaKeyLgnd>
        <AlphaKeyLgnd style={{paddingTop: p.m}}>'</AlphaKeyLgnd>
        <AlphaKeyLgnd style={{paddingTop: p.r}}>,</AlphaKeyLgnd>
        <AlphaKeyLgnd style={{paddingTop: p.p}}>.</AlphaKeyLgnd>
      </KeyboardGridRow>
    </div>
  )
}
