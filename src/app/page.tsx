import {Box, Typography as Type} from '@mui/material'
import AlphaKeyboard from '@components/keyboard/Alphas'
import PageLayout from '@components/PageLayout'

export default function IndexPage() {
  return (
    <PageLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // vertical centering
          alignItems: 'center', // horizontal centering
          minHeight: '100%', // fill the viewport height
          textAlign: 'center', // optional, centers text inside
          mt: '-10vh'
        }}
      >
        {/* <Type>mode: {mode}</Type>
          <Type>theme.palette.mode: {theme.palette.mode}</Type> */}
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
      </Box>
    </PageLayout>
  )
}
