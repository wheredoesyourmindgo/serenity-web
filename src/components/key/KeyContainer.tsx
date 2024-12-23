import React, {useRef} from 'react'
import {AppTheme} from '@lib/theme'
import {alpha, Popover, useTheme, Box} from '@mui/material'
import {FlexBox, FlexBoxProps} from 'mui-sleazebox'

type Props = FlexBoxProps & {
  keyId?: string
  popOverContent?: React.ReactNode | String
  homing?: boolean
}

export default function KeyContainer({
  children,
  keyId,
  popOverContent,
  homing,
  ...rest
}: Props) {
  const {sx, ...r} = rest
  const popoverContainerRef = useRef(undefined)
  const theme = useTheme<AppTheme>()
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl) && popOverContent ? true : false
  const popOverId = keyId ? `${keyId}-popover` : 'mouse-over-popover'

  return (
    <FlexBox
      child
      className="foobar"
      sx={{
        position: 'relative',
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
        // https://getcssscan.com/css-box-shadow-examples #14 edit
        boxShadow: `${
          theme.palette.mode === 'light'
            ? 'rgba(50, 50, 93, 0.1)'
            : 'rgba(205, 205, 51, 0.05)'
        } 0px 50px 100px -20px, ${
          theme.palette.mode === 'light'
            ? 'rgba(0, 0, 0, 0.1)'
            : 'rgba(255, 255, 255, 0.1)'
        } 0px 30px 60px -30px, ${
          theme.palette.mode === 'light'
            ? 'rgba(10, 37, 64, 0.1)'
            : 'rgba(245, 218, 162, 0.1)'
        } 0px -2px 6px 0px inset`,
        ...(homing && {
          background: `radial-gradient(circle farthest-side, ${alpha(
            theme.palette.solarized.base0,
            0.2
          )}, ${theme.palette.background.default})`,
          backgroundRepeat: 'no-repeat'
        }),
        ...(popOverContent && {cursor: 'pointer'}),
        ...sx
      }}
      aria-owns={open && popOverContent ? popOverId : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      {...r}
    >
      {/* overflow fixes issues on mouse hover where partial icons can disappear, ex. backspace icon */}
      <Box ref={popoverContainerRef} sx={{overflow: 'visible !important'}}>
        <Popover
          id={popOverId}
          container={popoverContainerRef.current}
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
          slotProps={{
            paper: {
              elevation: 4
            }
          }}
        >
          {popOverContent}
        </Popover>
        {children}
      </Box>
    </FlexBox>
  )
}

export type {Props as KeyContainerProps}
