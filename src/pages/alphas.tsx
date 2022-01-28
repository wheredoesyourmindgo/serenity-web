import React from 'react'
import {Container, Typography as Type} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ColumnBox} from 'mui-sleazebox'
import ToggleDarkModeBtn from '@components/ToggleDarkModeBtn'
import AlphaKeyboard from '@components/keyboard/alphas'
import PageLayout from '../components/PageLayout'

export default function AlphasPage() {
  return (
    <PageLayout>
      <ToggleDarkModeBtn />
      <Container sx={{m: 'auto'}}>
        <ColumnBox sx={{my: 4}} alignItems="center">
          {/* <Type>mode: {mode}</Type>
          <Type>theme.palette.mode: {theme.palette.mode}</Type> */}
          <Type
            variant="h1"
            gutterBottom
            color="primary"
            sx={{fontStyle: 'italic'}}
          >
            Serenity
          </Type>
          <AlphaKeyboard />
          {/* <Copyright /> */}
        </ColumnBox>
      </Container>
    </PageLayout>
  )
}
