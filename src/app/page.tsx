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
          // variant='h1'
          gutterBottom
          color="primary"
          sx={{
            typography: {xs: 'h2', md: 'h1'}, // responsive typography
            fontStyle: 'italic',
            fontFeatureSettings: "'ss02' on",
            pb: {xs: 2, md: 4}
          }}
        >
          Serenity
        </Type>
        <Box
          sx={{
            transform: {xs: 'scale(0.56)', sm: 'scale(0.75)', md: 'none'},
            transformOrigin: {xs: 'center center', md: 'initial'}, // Ensures the scaling starts from the top left corner */
            height: {xs: 175, sm: 200, md: 'auto'}
          }}
        >
          <AlphaKeyboard />
        </Box>
      </Box>
    </PageLayout>
  )
}
