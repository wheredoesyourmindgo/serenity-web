import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'
import {ChildBox} from '@components/flexbox'
import KeyContainer, {KeyContainerProps} from './KeyContainer'
import ShiftSubLgnd from './ShiftSubLgnd'
import SpecialSubLgnd from './SpecialSubLgnd'
import TapDanceSubIcn from './TapDanceSubIcn'
import TapForceHoldSubIcn from './TapForceHoldSubIcn'
import ReqSetupSubLgnd from './ReqSetupSubLgnd'
import EncoderSubLgnd from './EncoderSubLgnd'

type Props = MuiFaIconProps & {
  KeyContainerProps?: KeyContainerProps
  shiftLgnd?: string | React.ReactNode
  optEncoder?: boolean
  customShiftCode?: boolean
  special?: boolean
  requiresOsConf?: boolean
  tapDance?: boolean
  homing?: boolean
  LyrHoldSubIcn?: React.FC
  ModHoldSubIcn?: React.FC
  ShiftSubIcn?: React.FC
  children?: React.ReactNode
  tapForceHold?: boolean
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
  optEncoder,
  ...props
}: Props) {
  const shiftColor = customShiftCode ? 'solarized.violet' : 'solarized.base0'

  const {sx, color, ...rest} = props

  return (
    <KeyContainer {...KeyContainerProps} homing={homing}>
      <ChildBox>
        {shiftLgnd ? (
          <ShiftSubLgnd sx={{color: shiftColor}}>{shiftLgnd}</ShiftSubLgnd>
        ) : null}
        {ShiftSubIcn ? <ShiftSubIcn /> : null}
        {special ? <SpecialSubLgnd /> : null}
        {optEncoder ? <EncoderSubLgnd /> : null}
        {requiresOsConf ? <ReqSetupSubLgnd /> : null}
        {tapDance ? <TapDanceSubIcn /> : null}
        {tapForceHold ? <TapForceHoldSubIcn /> : null}
        {LyrHoldSubIcn ? <LyrHoldSubIcn /> : null}
        {ModHoldSubIcn ? <ModHoldSubIcn /> : null}
        <Box
          sx={{
            ...(ShiftSubIcn && {transform: 'translateY(2px)'}),
            ...((LyrHoldSubIcn || ModHoldSubIcn) && {
              transform: 'translateY(-4px)'
            })
          }}
        >
          <Box sx={{transform: 'translateY(2px)'}} position="relative">
            <Box overflow="visible">
              <Box>
                <MuiFaIcon
                  sx={{
                    color: color || 'solarized.base00',
                    fontSize: 20,
                    ...sx
                  }}
                  {...rest}
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
