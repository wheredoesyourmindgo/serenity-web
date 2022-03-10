import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'
import {ChildBox} from 'mui-sleazebox'
import KeyContainer, {KeyContainerProps} from './KeyContainer'
import HoldSubIcn, {HoldSubIcnProps} from './HoldSubIcn'
import ShiftSubIcn, {ShiftSubIcnProps} from './ShiftSubIcn'
import ShiftSubLgnd from './ShiftSubLgnd'
import SpecialSubLgnd from './SpecialSubLgnd'
import TapDanceSubIcn from './TapDanceSubIcn'
import TapForceHoldSubIcn from './TapForceHoldSubIcn'
import ReqSetupSubLgnd from './ReqSetupSubLgnd'

type Props = MuiFaIconProps & {
  KeyContainerProps?: KeyContainerProps
  shiftLgnd?: String | React.ReactNode
  shiftSubIcn?: ShiftSubIcnProps['icon']
  ShiftSubIcnProps?: Omit<ShiftSubIcnProps, 'icon'>
  customShiftCode?: boolean
  special?: boolean
  requiresOsConf?: boolean
  tapDance?: boolean
  homing?: boolean
  lyrHoldSubIcn?: HoldSubIcnProps['icon']
  LyrHoldSubIcnProps?: Omit<HoldSubIcnProps, 'icon'>
  modHoldSubIcn?: HoldSubIcnProps['icon']
  ModHoldSubIcnProps?: Omit<HoldSubIcnProps, 'icon'>
  children?: React.ReactNode
  tapForceHold?: boolean
}

export default function KeyIcon({
  KeyContainerProps,
  shiftLgnd,
  shiftSubIcn,
  ShiftSubIcnProps,
  icon,
  customShiftCode = false,
  special = false,
  requiresOsConf = false,
  tapDance = false,
  homing = false,
  lyrHoldSubIcn,
  LyrHoldSubIcnProps,
  modHoldSubIcn,
  ModHoldSubIcnProps,
  children,
  tapForceHold,
  ...rest
}: Props) {
  const shiftColor = customShiftCode ? 'solarized.violet' : 'solarized.base0'
  const lyrColor = 'solarized.green'
  const modColor = 'solarized.yellow'

  const {sx, color, ...r} = rest
  // const {sx: VimRefIcnSx, ...VimRefIcnRest} = VimRefIcnProps || {}
  const {sx: ShiftSubIcnSx, ...ShiftSubIcnRest} = ShiftSubIcnProps || {}
  const {sx: modHoldSubIcnSx, ...ModHoldSubIcnRest} = ModHoldSubIcnProps || {}
  const {sx: lyrHoldSubIcnSx, ...LyrHoldSubIcnRest} = LyrHoldSubIcnProps || {}

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
        {requiresOsConf ? <ReqSetupSubLgnd /> : null}
        {tapDance ? <TapDanceSubIcn /> : null}
        {tapForceHold ? <TapForceHoldSubIcn /> : null}
        {lyrHoldSubIcn ? (
          <HoldSubIcn
            icon={lyrHoldSubIcn}
            sx={{color: lyrColor, ...lyrHoldSubIcnSx}}
            {...LyrHoldSubIcnRest}
          />
        ) : null}
        {modHoldSubIcn ? (
          <HoldSubIcn
            icon={modHoldSubIcn}
            sx={{color: modColor, ...modHoldSubIcnSx}}
            {...ModHoldSubIcnRest}
          />
        ) : null}
        <Box
          sx={{
            ...(shiftSubIcn && {transform: 'translateY(4px)'}),
            ...((lyrHoldSubIcn || modHoldSubIcn) && {
              transform: 'translateY(-4px)'
            })
          }}
        >
          <Box sx={{transform: 'translateY(2px)'}} position="relative">
            <Box overflow="visible">
              <Box>
                <MuiFaIcon
                  icon={icon}
                  sx={{color: color || 'solarized.base00', fontSize: 20, ...sx}}
                  {...r}
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
      </ChildBox>
    </KeyContainer>
  )
}

export type {Props as KeyIconProps}
