import {Typography as Type, TypographyProps} from '@mui/material'
import {ChildBox} from 'mui-sleazebox'
import React from 'react'
import {KeyContainer} from '.'
import {KeyContainerProps} from './KeyContainer'
import LyrSubIcn, {LyrSubIcnProps} from './LyrSubIcn'
import ShiftSubIcn, {ShiftSubIcnProps} from './ShiftSubIcn'
import ShiftSubLgnd from './ShiftSubLgnd'
import SpecialSubLgnd from './SpecialSubLgnd'
import TapDanceSubIcn from './TapDanceSubIcn'

type Props = Partial<TypographyProps> & {
  shiftLgnd?: String | React.ReactNode
  shiftSubIcn?: ShiftSubIcnProps['icon']
  ShiftSubIcnProps?: Omit<ShiftSubIcnProps, 'icon'>
  children?: React.ReactNode
  KeyContainerProps?: KeyContainerProps
  customShiftCode?: boolean
  special?: boolean
  tapDance?: boolean
  homing?: boolean
  lyrSubIcn?: LyrSubIcnProps['icon']
  LyrSubIcnProps?: Omit<LyrSubIcnProps, 'icon'>
}

export default function KeyLegend({
  KeyContainerProps,
  children,
  shiftLgnd,
  shiftSubIcn,
  ShiftSubIcnProps,
  customShiftCode = false,
  special = false,
  tapDance = false,
  homing = false,
  lyrSubIcn,
  LyrSubIcnProps,
  color = 'solarized.base00',
  sx,
  ...rest
}: Props) {
  const shiftColor = customShiftCode ? 'solarized.violet' : 'solarized.base0'
  const lyrColor = 'solarized.green'

  return (
    <KeyContainer {...KeyContainerProps} homing={homing}>
      <ChildBox sx={{overflow: 'visible'}}>
        {shiftLgnd ? (
          <ShiftSubLgnd sx={{color: shiftColor}}>{shiftLgnd}</ShiftSubLgnd>
        ) : null}
        {shiftSubIcn ? (
          <ShiftSubIcn
            icon={shiftSubIcn}
            sx={{color: shiftColor}}
            {...ShiftSubIcnProps}
          />
        ) : null}
        {special ? <SpecialSubLgnd /> : null}
        {tapDance ? <TapDanceSubIcn /> : null}
        {lyrSubIcn ? (
          <LyrSubIcn
            icon={lyrSubIcn}
            sx={{color: lyrColor}}
            {...LyrSubIcnProps}
          />
        ) : null}
        <Type variant="h3" sx={{color, ...sx}} {...rest}>
          {children}
        </Type>
      </ChildBox>
    </KeyContainer>
  )
}

export type {Props as KeyLegendProps}
