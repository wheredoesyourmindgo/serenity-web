import React from 'react'
import {Box, Container, Typography as Type} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ColumnBox} from 'mui-sleazebox'
import PageLayout from '../components/PageLayout'
import FirmwareKeyboard from '@components/keyboard/firmware'

export default function FirmwarePage() {
  return (
    <PageLayout>
      <Container sx={{m: 'auto'}}>
        <ColumnBox sx={{my: 4}} alignItems="center">
          {/* <Type>mode: {mode}</Type>
          <Type>theme.palette.mode: {theme.palette.mode}</Type> */}
          <Box pt={4} />
          <Type
            variant="h2"
            gutterBottom
            color="primary"
            // sx={{fontStyle: 'italic'}}
          >
            Firmware
          </Type>
          <Box pt={4} />
          <FirmwareKeyboard />
          {/* <Copyright /> */}
        </ColumnBox>
      </Container>
    </PageLayout>
  )
}
