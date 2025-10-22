import React from 'react'
import {Container, Box, Typography as Type} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ColumnBox} from '@components/mui-sleazebox'
import AlphaKeyboard from '@components/keyboard/Alphas'
import PageLayout from '../components/PageLayout'

export default function IndexPage() {
  return (
    <PageLayout>
      <Container sx={{m: 'auto'}}>
        <ColumnBox sx={{my: 4}} alignItems="center">
          {/* <Type>mode: {mode}</Type>
          <Type>theme.palette.mode: {theme.palette.mode}</Type> */}
          <Box pt={4} />
          <Type
            variant="h1"
            gutterBottom
            color="primary"
            sx={{fontStyle: 'italic', fontFeatureSettings: "'ss02' on"}}
          >
            Serenity
          </Type>
          <Box pt={4} />
          <AlphaKeyboard />
          {/* <Copyright /> */}
        </ColumnBox>
      </Container>
    </PageLayout>
  )
}
