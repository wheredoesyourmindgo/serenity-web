import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'
import {ChildBox} from 'mui-sleazebox'
import KeyContainer, {KeyContainerProps} from './KeyContainer'
import LyrSubIcn, {LyrSubIcnProps} from './LyrSubIcn'
import ShiftSubIcn, {ShiftSubIcnProps} from './ShiftSubIcn'
import ShiftSubLgnd from './ShiftSubLgnd'
import SpecialSubLgnd from './SpecialSubLgnd'
import TapDanceSubIcn from './TapDanceSubIcn'

type Props = MuiFaIconProps & {
  KeyContainerProps?: KeyContainerProps
  shiftLgnd?: String | React.ReactNode
  shiftSubIcn?: ShiftSubIcnProps['icon']
  ShiftSubIcnProps?: Omit<ShiftSubIcnProps, 'icon'>
  customShiftCode?: boolean
  special?: boolean
  tapDance?: boolean
  homing?: boolean
  lyrSubIcn?: LyrSubIcnProps['icon']
  LyrSubIcnProps?: Omit<LyrSubIcnProps, 'icon'>
  children?: React.ReactNode
}

export default function KeyIcon({
  KeyContainerProps,
  shiftLgnd,
  shiftSubIcn,
  ShiftSubIcnProps,
  icon,
  customShiftCode = false,
  special = false,
  tapDance = false,
  homing = false,
  lyrSubIcn,
  LyrSubIcnProps,
  children,
  ...rest
}: Props) {
  const {sx, color, ...r} = rest

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
        <Box
          sx={{
            ...(shiftSubIcn && {transform: 'translateY(4px)'}),
            ...(lyrSubIcn && {transform: 'translateY(-4px)'})
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
