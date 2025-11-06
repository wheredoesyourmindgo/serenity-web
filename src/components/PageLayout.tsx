'use client'

import {useTheme, BoxProps, Box, useMediaQuery} from '@mui/material'
import Navbar from '@components/Navbar'

type Props = Partial<BoxProps>

export default function PageLayout({children, sx, ...rest}: Props) {
  const theme = useTheme()

  const isSm = useMediaQuery(theme.breakpoints.down('md'))
  const isXs = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <Navbar />
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
        <Box
          sx={{
            ...((isXs || isSm) && {
              transform: isXs
                ? 'scale(0.53)'
                : 'scale(0.69)' /* Adjust the scale value as needed */,
              transformOrigin:
                'center center' /* Ensures the scaling starts from the top left corner */
            }),
            // overflowX: 'hidden' /* Prevents horizontal scrolling */
            display: 'block',
            flexGrow: 1,
            width: '100%',
            mb: 6,
            mt: 6,
            // mt: {
            //   xs: 4,
            //   sm: 6
            // },
            ...sx
          }}
          {...rest}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}
