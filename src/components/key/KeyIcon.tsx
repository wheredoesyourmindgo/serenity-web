import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box} from '@mui/material'
import {ChildBox} from 'mui-sleazebox'
import KeyContainer, {KeyContainerProps} from './KeyContainer'
import ShiftSubIcn, {ShiftSubIcnProps} from './ShiftSubIcn'
import ShiftSubLgnd from './ShiftSubLgnd'
import SpecialSubLgnd from './SpecialSubLgnd'

type Props = MuiFaIconProps & {
  KeyContainerProps?: KeyContainerProps
  shiftLgnd?: String | React.ReactNode
  shiftSubIcn?: ShiftSubIcnProps['icon']
  ShiftSubIcnProps?: Omit<ShiftSubIcnProps, 'icon'>
  customShiftCode?: boolean
  special?: boolean
}

export default function KeyIcon({
  KeyContainerProps,
  shiftLgnd,
  shiftSubIcn,
  ShiftSubIcnProps,
  icon,
  customShiftCode = false,
  special = false,
  ...rest
}: Props) {
  const {sx, ...r} = rest

  const shiftColor = customShiftCode ? 'solarized.violet' : 'solarized.base0'

  return (
    <KeyContainer {...KeyContainerProps}>
      <ChildBox position="relative">
        {shiftLgnd ? <ShiftSubLgnd>{shiftLgnd}</ShiftSubLgnd> : null}
        {shiftSubIcn ? (
          <ShiftSubIcn
            icon={shiftSubIcn}
            sx={{color: shiftColor}}
            {...ShiftSubIcnProps}
          />
        ) : null}
        {special ? <SpecialSubLgnd /> : null}
        <Box
          sx={{
            ...(shiftSubIcn && {transform: 'translateY(8px)'})
          }}
        >
          <MuiFaIcon
            icon={icon}
            sx={{color: 'solarized.base00', fontSize: 20, ...sx}}
            {...r}
          />
        </Box>
      </ChildBox>
    </KeyContainer>
  )
}

export type {Props as KeyIconProps}
