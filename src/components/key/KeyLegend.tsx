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
import AppSubIcn from './AppShortcutSubIcn'
import {Typography, typographyVariants} from '@/components/ui/typography'
import type {CSSProperties} from 'react'
import type {VariantProps} from 'class-variance-authority'

type Props = {
  color?: string
  style?: CSSProperties
  className?: string
  variant?: VariantProps<typeof typographyVariants>['variant']
  children?: React.ReactNode
  KeyContainerProps?: KeyContainerProps
  customShiftCode?: boolean
  special?: boolean
  tapDance?: boolean
  homing?: boolean
  vimRef?: string | React.ReactNode
  vimRefIcn?: React.FC
  VimRefIcnProps?: Omit<VimRefIcnProps, 'icon'>
  lyrHoldSubIcn?: React.FC
  LyrHoldSubIcnProps?: Omit<HoldSubIcnProps, 'icon'>
  modHoldSubIcn?: React.FC
  ModHoldSubIcnProps?: Omit<HoldSubIcnProps, 'icon'>
  tapForceHold?: boolean
  appShortcut?: boolean
  shiftLgnd?: string | React.ReactNode
  shiftSubIcn?: React.FC
  ShiftSubIcnProps?: Omit<ShiftSubIcnProps, 'icon'>
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
  appShortcut,
  style,
  variant = 'h3',
  className,
  ...rest
}: Props) {
  const shiftColor = customShiftCode ? 'solarized.violet' : 'solarized.base0'
  const lyrColor = 'solarized.green'
  const modColor = 'solarized.yellow'

  return (
    <KeyContainer {...KeyContainerProps} homing={homing}>
      <div>
        {shiftLgnd ? <ShiftSubLgnd color={shiftColor}>{shiftLgnd}</ShiftSubLgnd> : null}
        {shiftSubIcn ? (
          <ShiftSubIcn color={shiftColor} {...ShiftSubIcnProps} />
        ) : null}
        {special ? <SpecialSubLgnd /> : null}
        {tapDance ? <TapDanceSubIcn /> : null}
        {tapForceHold ? <TapForceHoldSubIcn /> : null}
        {appShortcut ? <AppSubIcn /> : null}
        {lyrHoldSubIcn ? (
          <HoldSubIcn color={lyrColor} {...LyrHoldSubIcnProps} />
        ) : null}
        {modHoldSubIcn ? (
          <HoldSubIcn color={modColor} {...ModHoldSubIcnProps} />
        ) : null}
        {vimRef ? <VimRefLgnd>{vimRef}</VimRefLgnd> : null}
        {vimRefIcn ? (
          <VimRefIcn color={shiftColor} {...VimRefIcnProps} />
        ) : null}
        <Typography
          as="span"
          variant={variant}
          color={color}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </Typography>
      </div>
    </KeyContainer>
  )
}

export type {Props as KeyLegendProps}
