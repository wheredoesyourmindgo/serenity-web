'use client'

// cspell:ignore Lgnd
// import KeyIcon, {KeyIconProps} from '@components/key/KeyIcon'
// import {faDeleteRight} from '@fortawesome/pro-light-svg-icons'
// import {faDeleteLeft} from '@fortawesome/pro-light-svg-icons'
import {KeyLegend} from '@components/key'
import {alpha, useTheme, Grid} from '@mui/material'
import {KeyLegendProps} from '@components/key/KeyLegend'
import KeyboardGridRow from './KeyboardGridRow'

const AlphaKeyLgnd = ({children, ...props}: KeyLegendProps) => (
  <KeyLegend
    KeyContainerProps={{
      sx: {borderWidth: 0, boxShadow: 'none', height: 72}
    }}
    {...props}
  >
    {children}
  </KeyLegend>
)

export default function ColStaggerAlphaKeyboard() {
  const theme = useTheme()
  const tBase02 = alpha(theme.palette.solarized.base02, 0.85)
  const tBase03 = alpha(theme.palette.solarized.base03, 0.95)

  // const AlphaKeyIcn = useCallback(
  //   ({...props}: KeyIconProps) => (
  //     <KeyIcon KeyContainerProps={{sx: {borderWidth: 0}}} {...props} />
  //   ),
  //   []
  // )
  const p = {
    op: 5,
    p: 5,
    r: 2,
    m: 1,
    i: 2,
    ii: 3
  } as const

  return (
    <Grid container direction="column" spacing={2}>
      <KeyboardGridRow>
        {/* <AlphaKeyIcn icon={faDeleteRight} /> */}
        <AlphaKeyLgnd color="solarized.base01" sx={{paddingTop: p.r}}>
          L
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01" sx={{paddingTop: p.i}}>
          C
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00" sx={{paddingTop: p.i}}>
          F
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1" sx={{paddingTop: p.ii}}>
          Q
        </AlphaKeyLgnd>
        <AlphaKeyLgnd KeyContainerProps={{sx: {width: 25, opacity: 0}}} />
        <AlphaKeyLgnd color="solarized.base1" sx={{paddingTop: p.ii}}>
          X
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00" sx={{paddingTop: p.i}}>
          W
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} sx={{paddingTop: p.m}}>
          O
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base01" sx={{paddingTop: p.r}}>
          U
        </AlphaKeyLgnd>
        <AlphaKeyLgnd sx={{paddingTop: p.p}}>;</AlphaKeyLgnd>
      </KeyboardGridRow>
      <KeyboardGridRow>
        {/* <AlphaKeyLgnd KeyContainerProps={{sx: {width: 55 / 4, opacity: 0}}} /> */}
        <AlphaKeyLgnd color="solarized.base01" sx={{paddingTop: p.m}}>
          M
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase02} sx={{paddingTop: p.r}}>
          R
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} sx={{paddingTop: p.p}}>
          S
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} sx={{paddingTop: p.m}}>
          T
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} sx={{paddingTop: p.i}}>
          N
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00" sx={{paddingTop: p.ii}}>
          P
        </AlphaKeyLgnd>
        <AlphaKeyLgnd KeyContainerProps={{sx: {width: 25, opacity: 0}}} />
        <AlphaKeyLgnd color="solarized.base00" sx={{paddingTop: p.ii}}>
          Y
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase02} sx={{paddingTop: p.i}}>
          D
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} sx={{paddingTop: p.m}}>
          E
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} sx={{paddingTop: p.r}}>
          I
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color={tBase03} sx={{paddingTop: p.p}}>
          A
        </AlphaKeyLgnd>
      </KeyboardGridRow>
      <KeyboardGridRow>
        {/* <AlphaKeyLgnd KeyContainerProps={{sx: {width: 55, opacity: 0}}} /> */}
        <AlphaKeyLgnd color="solarized.base0" sx={{paddingTop: p.p}}>
          <em>V</em>
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1" sx={{paddingTop: p.r}}>
          J
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0" sx={{paddingTop: p.m}}>
          K
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base1" sx={{paddingTop: p.p}}>
          <em>Z</em>
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base0" sx={{paddingTop: p.ii}}>
          B
        </AlphaKeyLgnd>
        <AlphaKeyLgnd KeyContainerProps={{sx: {width: 25, opacity: 0}}} />
        <AlphaKeyLgnd color={tBase02} sx={{paddingTop: p.i}}>
          H
        </AlphaKeyLgnd>
        <AlphaKeyLgnd color="solarized.base00" sx={{paddingTop: p.ii}}>
          G
        </AlphaKeyLgnd>
        <AlphaKeyLgnd sx={{paddingTop: p.m}}>'</AlphaKeyLgnd>
        <AlphaKeyLgnd sx={{paddingTop: p.r}}>,</AlphaKeyLgnd>
        <AlphaKeyLgnd sx={{paddingTop: p.p}}>.</AlphaKeyLgnd>
      </KeyboardGridRow>
    </Grid>
  )
}
