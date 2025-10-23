import {Typography as Type, TypographyProps} from '@mui/material'
import {ChildBox} from '@components/flexbox'
import React from 'react'
import {KeyContainer} from '.'
import {KeyContainerProps} from './KeyContainer'
import HoldSubIcn, {HoldSubIcnProps} from './HoldSubIcn'
import ShiftSubIcn, {ShiftSubIcnProps} from './ShiftSubIcn'
import ShiftSubLgnd from './ShiftSubLgnd'
import SpecialSubLgnd from './SpecialSubLgnd'
import TapDanceSubIcn from './TapDanceSubIcn'
import TapForceHoldSubIcn from './TapForceHoldSubIcn'
import VimRefIcn, {VimRefIcnProps} from './VimRefIcn'
import VimRefLgnd from './VimRefLgnd'

type Props = Partial<TypographyProps> & {
  shiftLgnd?: String | React.ReactNode
  shiftSubIcn?: any
  ShiftSubIcnProps?: Omit<ShiftSubIcnProps, 'icon'>
  children?: React.ReactNode
  KeyContainerProps?: KeyContainerProps
  customShiftCode?: boolean
  special?: boolean
  tapDance?: boolean
  homing?: boolean
  vimRef?: String | React.ReactNode
  vimRefIcn?: any
  VimRefIcnProps?: Omit<VimRefIcnProps, 'icon'>
  lyrHoldSubIcn?: any
  LyrHoldSubIcnProps?: Omit<HoldSubIcnProps, 'icon'>
  modHoldSubIcn?: any
  ModHoldSubIcnProps?: Omit<HoldSubIcnProps, 'icon'>
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
  lyrHoldSubIcn,
  LyrHoldSubIcnProps,
  modHoldSubIcn,
  ModHoldSubIcnProps,
  color = 'solarized.base00',
  tapForceHold,
  sx,
  ...rest
}: Props) {
  const shiftColor = customShiftCode ? 'solarized.violet' : 'solarized.base0'
  const lyrColor = 'solarized.green'
  const modColor = 'solarized.yellow'

  const {sx: VimRefIcnSx, ...VimRefIcnRest} = VimRefIcnProps || {}
  const {sx: ShiftSubIcnSx, ...ShiftSubIcnRest} = ShiftSubIcnProps || {}
  const {sx: modHoldSubIcnSx, ...ModHoldSubIcnRest} = ModHoldSubIcnProps || {}
  const {sx: lyrHoldSubIcnSx, ...LyrHoldSubIcnRest} = LyrHoldSubIcnProps || {}

  return (
    <KeyContainer {...KeyContainerProps} homing={homing}>
      <ChildBox>
        {shiftLgnd ? (
          <ShiftSubLgnd sx={{color: shiftColor}}>{shiftLgnd}</ShiftSubLgnd>
        ) : null}
        {shiftSubIcn ? (
          <ShiftSubIcn
            sx={{color: shiftColor, ...ShiftSubIcnSx}}
            {...ShiftSubIcnRest}
          />
        ) : null}
        {special ? <SpecialSubLgnd /> : null}
        {tapDance ? <TapDanceSubIcn /> : null}
        {tapForceHold ? <TapForceHoldSubIcn /> : null}
        {lyrHoldSubIcn ? (
          <HoldSubIcn
            sx={{color: lyrColor, ...lyrHoldSubIcnSx}}
            {...LyrHoldSubIcnRest}
          />
        ) : null}
        {modHoldSubIcn ? (
          <HoldSubIcn
            sx={{color: modColor, ...modHoldSubIcnSx}}
            {...ModHoldSubIcnRest}
          />
        ) : null}
        {vimRef ? <VimRefLgnd>{vimRef}</VimRefLgnd> : null}
        {vimRefIcn ? (
          <VimRefIcn
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
