import MuiFaIcon, {MuiFaIconProps} from '@components/MuiFaIcon'
import {Box, Typography as Type} from '@mui/material'
import {ChildBox} from 'mui-sleazebox'
import KeyContainer, {KeyContainerProps} from './KeyContainer'

type Props = MuiFaIconProps & {
  keyContainerProps?: KeyContainerProps
  shiftLgnd?: String
  shiftIcn?: MuiFaIconProps['icon']
  shiftIcnProps?: Omit<MuiFaIconProps, 'icon'>
}

export default function KeyIcon({
  keyContainerProps,
  shiftLgnd,
  shiftIcn,
  shiftIcnProps,
  icon,
  ...rest
}: Props) {
  const {sx, ...r} = rest
  return (
    <KeyContainer {...keyContainerProps}>
      <ChildBox position="relative">
        {shiftLgnd ? (
          <Box sx={{position: 'absolute', right: -14, top: -10}}>
            <Type variant="subtitle2" sx={{color: 'solarized.violet'}}>
              foo
            </Type>
          </Box>
        ) : null}
        {shiftIcn ? (
          <Box
            sx={{
              position: 'absolute',
              right: -10,
              top: -12
            }}
          >
            <MuiFaIcon
              icon={shiftIcn}
              sx={{color: 'solarized.violet', fontSize: 14}}
              {...shiftIcnProps}
            />
          </Box>
        ) : null}
        <Box
          sx={{
            ...(shiftIcn && {transform: 'translateY(8px)'})
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
