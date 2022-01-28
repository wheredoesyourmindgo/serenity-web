import React from 'react'
import {Container, Typography as Type} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ColumnBox} from 'mui-sleazebox'
import ToggleDarkModeBtn from '@components/ToggleDarkModeBtn'
import PageLayout from '../components/PageLayout'
import FirmwareKeyboard from '@components/keyboard/firmware'

export default function FirmwarePage() {
  return (
    <PageLayout>
      <ToggleDarkModeBtn />
      <Container sx={{m: 'auto'}}>
        <ColumnBox sx={{my: 4}} alignItems="center">
          {/* <Type>mode: {mode}</Type>
          <Type>theme.palette.mode: {theme.palette.mode}</Type> */}
          <Type
            variant="h2"
            gutterBottom
            color="primary"
            sx={{fontStyle: 'italic'}}
          >
            Firmware
          </Type>
          <FirmwareKeyboard />
          {/* <Copyright /> */}
        </ColumnBox>
      </Container>
    </PageLayout>
  )
}
