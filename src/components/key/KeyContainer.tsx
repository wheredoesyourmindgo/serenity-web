import {AppTheme} from '@lib/theme'
import {alpha, Popover, useTheme} from '@mui/material'
import {FlexBox, FlexBoxProps} from 'mui-sleazebox'
import React from 'react'

type Props = FlexBoxProps & {popOverContent?: React.ReactNode | String}

export default function KeyContainer({
  children,
  popOverContent,
  ...rest
}: Props) {
  const {sx, ...r} = rest
  const theme = useTheme<AppTheme>()
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl) && popOverContent ? true : false

  return (
    <FlexBox
      child
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'none',
        width: 55,
        aspectRatio: '1/1',
        borderWidth: 1,
        borderColor: alpha(theme.palette.solarized.base1, 0.4),
        borderRadius: 1,
        borderStyle: 'solid',
        padding: 1,
        ...(popOverContent && {cursor: 'pointer'}),
        ...sx
      }}
      aria-owns={open && popOverContent ? 'mouse-over-popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      {...r}
    >
      <div>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none'
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          PaperProps={{elevation: 4}}
        >
          {popOverContent}
        </Popover>
      </div>
      {children}
    </FlexBox>
  )
}

export type {Props as KeyContainerProps}
