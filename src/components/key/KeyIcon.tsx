import type {ComponentType, ReactNode} from 'react'
import FaIcon, {FaIconProps} from '@components/FaIcon'
import {cn} from '@lib/cn'
import KeyContainer, {KeyContainerProps} from './KeyContainer'
import ShiftSubLgnd from './ShiftSubLgnd'
import SpecialSubLgnd from './SpecialSubLgnd'
import TapDanceSubIcn from './TapDanceSubIcn'
import TapForceHoldSubIcn from './TapForceHoldSubIcn'
import ReqSetupSubLgnd from './ReqSetupSubLgnd'
import EncoderSubLgnd from './EncoderSubLgnd'
import AppSubIcn from './AppShortcutSubIcn'

type KeyContainerSlotProps = Omit<KeyContainerProps, 'children' | 'homing'>

type Props = FaIconProps & {
  KeyContainerProps?: KeyContainerSlotProps
  shiftLgnd?: ReactNode
  optEncoder?: boolean
  customShiftCode?: boolean
  special?: boolean
  requiresOsConf?: boolean
  tapDance?: boolean
  homing?: boolean
  LyrHoldSubIcn?: ComponentType
  ModHoldSubIcn?: ComponentType
  ShiftSubIcn?: ComponentType
  children?: ReactNode
  tapForceHold?: boolean
  appShortcut?: boolean
}

export default function KeyIcon({
  KeyContainerProps,
  shiftLgnd,
  ShiftSubIcn,
  customShiftCode = false,
  special = false,
  requiresOsConf = false,
  tapDance = false,
  homing = false,
  LyrHoldSubIcn,
  ModHoldSubIcn,
  children,
  tapForceHold,
  appShortcut,
  optEncoder,
  ...props
}: Props) {
  const shiftColor = customShiftCode ? 'solarized.violet' : 'solarized.base0'
  const {sx, color, className, ...rest} = props
  const hasHoldSubIcon = Boolean(LyrHoldSubIcn || ModHoldSubIcn)
  const hasShiftSubIcon = Boolean(ShiftSubIcn)

  let iconOffsetClass = 'translate-y-[2px]'

  if (hasHoldSubIcon) {
    iconOffsetClass = '-translate-y-[2px]'
  } else if (hasShiftSubIcon) {
    iconOffsetClass = 'translate-y-[4px]'
  }

  return (
    <KeyContainer {...KeyContainerProps} homing={homing}>
      <div>
        {shiftLgnd ? <ShiftSubLgnd color={shiftColor}>{shiftLgnd}</ShiftSubLgnd> : null}
        {ShiftSubIcn ? <ShiftSubIcn /> : null}
        {special ? <SpecialSubLgnd /> : null}
        {optEncoder ? <EncoderSubLgnd /> : null}
        {requiresOsConf ? <ReqSetupSubLgnd /> : null}
        {tapDance ? <TapDanceSubIcn /> : null}
        {tapForceHold ? <TapForceHoldSubIcn /> : null}
        {appShortcut ? <AppSubIcn /> : null}
        {LyrHoldSubIcn ? <LyrHoldSubIcn /> : null}
        {ModHoldSubIcn ? <ModHoldSubIcn /> : null}
        <div className={iconOffsetClass}>
          <div className="relative overflow-visible">
            <FaIcon
              className={cn('text-[20px]', className)}
              color={color || 'solarized.base00'}
              sx={sx}
              {...rest}
            />
            <div className="absolute inset-0">{children}</div>
          </div>
        </div>
      </div>
    </KeyContainer>
  )
}

export type {Props as KeyIconProps}
