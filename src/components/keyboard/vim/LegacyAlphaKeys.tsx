import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Divider, Typography as Type} from '@mui/material'
import {
  faArrowRightLongToLine,
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faBracketSquare,
  faDeleteLeft,
  faDeleteRight,
  faUp
} from '@fortawesome/pro-regular-svg-icons'

export default function LegacyAlphaKeys() {
  const sharedProps: KeyLegendProps = {
    variant: 'h5',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    KeyContainerProps: {
      sx: {
        width: 75
      }
    }
  } as const

  const sharedTypeProps = {
    component: 'span',
    noWrap: true,
    variant: 'inherit'
  } as const

  return (
    <Box>
      <ColumnBox flexSpacing={1}>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteRight}>
            <Type {...sharedTypeProps}>x</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="q">
            {/* <Type {...sharedTypeProps}>SET MARK</Type> */}
            {/* <Divider /> */}
            <Type {...sharedTypeProps}>"</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="l">
            <Type {...sharedTypeProps}>z</Type>
            <Divider />
            <Type {...sharedTypeProps}>g</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="d">
            <Type {...sharedTypeProps}>C</Type>
            <Divider />
            <Type {...sharedTypeProps}>c</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="w">
            <Type {...sharedTypeProps}>R</Type>
            <Divider />
            <Type {...sharedTypeProps}>r</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="z" special>
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>{`<bs>`}</Type>
            <Divider />
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>{`<cr>`}</Type>
          </KeyLegend>
          {/* <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>SCROLL TOP</Type>
            <Divider />
            <Type {...sharedTypeProps}>screen top</Type>
          </KeyLegend> */}
          <KeyLegend {...sharedProps} vimRef="y">
            <Type {...sharedTypeProps}>T</Type>
            <Divider />
            <Type {...sharedTypeProps}>t</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="v">
            <Type {...sharedTypeProps}>gE</Type>
            <Divider />
            <Type {...sharedTypeProps}>ge</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="o">
            <Type {...sharedTypeProps}>B</Type>
            <Divider />
            <Type {...sharedTypeProps}>b</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="u">
            <Type {...sharedTypeProps}>E</Type>
            <Divider />
            <Type {...sharedTypeProps}>e</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=";">
            <Type {...sharedTypeProps}>W</Type>
            <Divider />
            <Type {...sharedTypeProps}>w</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faDeleteLeft}>
            <Type {...sharedTypeProps}>X</Type>
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRef="-">
            <Type {...sharedTypeProps}>m</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="n">
            <Type {...sharedTypeProps}>S</Type>
            <Divider />
            <Type {...sharedTypeProps}>s</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="r">
            <Type {...sharedTypeProps}>I</Type>
            <Divider />
            <Type {...sharedTypeProps}>i</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="t">
            <Type {...sharedTypeProps}>A</Type>
            <Divider />
            <Type {...sharedTypeProps}>a</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="s" homing>
            <Type {...sharedTypeProps}>O</Type>
            <Divider />
            <Type {...sharedTypeProps}>o</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="g">
            <Type {...sharedTypeProps}>V</Type>
            <Divider />
            <Type {...sharedTypeProps}>v</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="p">
            <Type {...sharedTypeProps}>F</Type>
            <Divider />
            <Type {...sharedTypeProps}>f</Type>
          </KeyLegend>
          {/* <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>SCROLL MID</Type>
            <Divider />
            <Type {...sharedTypeProps}>screen mid</Type>
          </KeyLegend> */}
          <KeyLegend {...sharedProps} vimRef="h" homing>
            <Type {...sharedTypeProps}>(</Type>
            <Divider />
            <Type {...sharedTypeProps}>,</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="e">
            <Type {...sharedTypeProps}>G</Type>
            <Divider />
            <Type {...sharedTypeProps}>+</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="i">
            <Type {...sharedTypeProps}>gg</Type>
            <Divider />
            <Type {...sharedTypeProps}>-</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="a">
            <Type {...sharedTypeProps}>)</Type>
            <Divider />
            <Type {...sharedTypeProps}>;</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="=">
            <Type {...sharedTypeProps}>'</Type>
            <Divider />
            <Type {...sharedTypeProps}>`</Type>
          </KeyLegend>
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
          <KeyLegend {...sharedProps} vimRef="b">
            <Type {...sharedTypeProps}>U</Type>
            <Divider />
            <Type {...sharedTypeProps}>u</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="j">
            <Type {...sharedTypeProps}>D</Type>
            <Divider />
            <Type {...sharedTypeProps}>d</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="m">
            <Type {...sharedTypeProps}>Y</Type>
            <Divider />
            <Type {...sharedTypeProps}>y</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="c">
            <Type {...sharedTypeProps}>P</Type>
            <Divider />
            <Type {...sharedTypeProps}>p</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="x">
            <Type {...sharedTypeProps}>&</Type>
            <Divider />
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>{`<C-r>`}</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="k">
            <Type {...sharedTypeProps}>?</Type>
            <Divider />
            <Type {...sharedTypeProps}>/</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="f">
            <Type {...sharedTypeProps}>#</Type>
            <Divider />
            <Type {...sharedTypeProps}>N</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef="'">
            <Type {...sharedTypeProps}>{`}`}</Type>
            <Divider />
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>{`<C-e>`}</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=",">
            <Type {...sharedTypeProps}>{`{`}</Type>
            <Divider />
            <Type {...sharedTypeProps} sx={{fontSize: 14}}>{`<C-y>`}</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRef=".">
            <Type {...sharedTypeProps}>*</Type>
            <Divider />
            <Type {...sharedTypeProps}>n</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faUp} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend
            {...sharedProps}
            vimRefIcn={faArrowUpLeftFromCircle}
            VimRefIcnProps={{
              sx: {
                fontSize: 12
              }
            }}
          >
            <Type {...sharedTypeProps}>{`<esc>`}</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} vimRefIcn={faArrowTurnDownLeft}>
            <Type {...sharedTypeProps}>:</Type>
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            vimRefIcn={faBracketSquare}
            VimRefIcnProps={{
              rotation: 270,
              sx: {
                transform: 'translateX(-4px)'
              }
            }}
          >
            <Type {...sharedTypeProps}>\</Type>
          </KeyLegend>
          <KeyLegend
            {...sharedProps}
            vimRefIcn={faArrowRightLongToLine}
            VimRefIcnProps={{
              sx: {transform: 'translateX(-1px)'}
            }}
          >
            <Type {...sharedTypeProps}>.</Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
