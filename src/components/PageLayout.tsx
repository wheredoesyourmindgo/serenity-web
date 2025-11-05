'use client'

import {useTheme, BoxProps, Box, useMediaQuery} from '@mui/material'
import Header from '@components/Header'

type Props = Partial<BoxProps>

export default function PageLayout({children, sx, ...rest}: Props) {
  const theme = useTheme()

  const isSm = useMediaQuery(theme.breakpoints.down('md'))
  const isXs = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexGrow: 1,
          width: '100%',
          // alignItems: 'center'
          justifyContent: 'center'
        }}
      >
        {isXs || isSm ? (
          <Box
            sx={{
              transform: isXs
                ? 'scale(0.53)'
                : 'scale(0.69)' /* Adjust the scale value as needed */,
              transformOrigin:
                'center center' /* Ensures the scaling starts from the top left corner */,
              // overflowX: 'hidden' /* Prevents horizontal scrolling */
              display: 'block',
              flexGrow: 1,
              width: '100%',
              mb: 6,
              mt: {
                xs: 4,
                sm: 6
              },
              ...sx
            }}
            {...rest}
          >
            {children}
          </Box>
        ) : (
          <Box {...rest}>{children}</Box>
        )}
      </Box>
    </Box>
  )
}
