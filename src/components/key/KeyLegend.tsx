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
import TapForceHoldSubIcn from './TapForceHoldSubIcn'
import VimRefIcn, {VimRefIcnProps} from './VimRefIcn'
import VimRefLgnd from './VimRefLgnd'

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
  vimRef?: String | React.ReactNode
  vimRefIcn?: VimRefIcnProps['icon']
  VimRefIcnProps?: Omit<VimRefIcnProps, 'icon'>
  lyrSubIcn?: LyrSubIcnProps['icon']
  LyrSubIcnProps?: Omit<LyrSubIcnProps, 'icon'>
  tapForceHold?: boolean
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
  vimRef,
  vimRefIcn,
  VimRefIcnProps,
  lyrSubIcn,
  LyrSubIcnProps,
  color = 'solarized.base00',
  tapForceHold,
  sx,
  ...rest
}: Props) {
  const shiftColor = customShiftCode ? 'solarized.violet' : 'solarized.base0'
  const lyrColor = 'solarized.green'

  const {sx: VimRefIcnSx, ...VimRefIcnRest} = VimRefIcnProps || {}
  const {sx: ShiftSubIcnSx, ...ShiftSubIcnRest} = ShiftSubIcnProps || {}

  return (
    <KeyContainer {...KeyContainerProps} homing={homing}>
      <ChildBox sx={{overflow: 'visible'}}>
        {shiftLgnd ? (
          <ShiftSubLgnd sx={{color: shiftColor}}>{shiftLgnd}</ShiftSubLgnd>
        ) : null}
        {shiftSubIcn ? (
          <ShiftSubIcn
            icon={shiftSubIcn}
            sx={{color: shiftColor, ...ShiftSubIcnSx}}
            {...ShiftSubIcnRest}
          />
        ) : null}
        {special ? <SpecialSubLgnd /> : null}
        {tapDance ? <TapDanceSubIcn /> : null}
        {tapForceHold ? <TapForceHoldSubIcn /> : null}
        {lyrSubIcn ? (
          <LyrSubIcn
            icon={lyrSubIcn}
            sx={{color: lyrColor}}
            {...LyrSubIcnProps}
          />
        ) : null}
        {lyrSubIcn ? (
          <LyrSubIcn
            icon={lyrSubIcn}
            sx={{color: lyrColor}}
            {...LyrSubIcnProps}
          />
        ) : null}
        {vimRef ? <VimRefLgnd>{vimRef}</VimRefLgnd> : null}
        {vimRefIcn ? (
          <VimRefIcn
            icon={vimRefIcn}
            sx={{color: shiftColor, ...VimRefIcnSx}}
            {...VimRefIcnRest}
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
