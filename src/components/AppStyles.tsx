import {GlobalStyles} from '@mui/material'

export default function AppStyles() {
  return (
    <GlobalStyles
      styles={{
        html: {
          margin: 0,
          padding: 0,
          height: '100%',
          scrollBehavior: 'smooth'
        },
        body: {
          margin: 0,
          padding: 0,
          height: '100%',
          maxWidth: '100vw',
          overflowX: 'hidden'
        },
        strong: {
          fontWeight: 600 // defaults to 700
        },
        /*
          Don't underline non-Mui anchor text, ex. Links/Text in mobile <Drawer/>.
          Anchor color should stay the same as the anchor's parent element for non-Mui text, ex. News Releases' buttons
          [class^='Mui'] will select all MuiTypography*, MuiLink*, MuiButton* and so forth classes, and is case sensitive.
          See https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors for more info.
        */
        "a:not([class^='Mui'])": {
          textDecoration: 'none',
          color: 'inherit'
        },
        "a:not([class^='Mui']):visited": {
          textDecoration: 'none',
          color: 'inherit'
        },
        "a:not([class^='Mui']):hover": {
          textDecoration: 'none',
          color: 'inherit'
        },
        "a:not([class^='Mui']):active": {
          textDecoration: 'none',
          color: 'inherit'
        },
        // Always give the 7th child a margin-left transition so toggling layouts animates smoothly
        '[data-row="true"] > :nth-child(7)': {
          transition: 'margin-left 160ms ease-in-out'
        },
        // In 42-key layout, add the visual split before the 7th key
        '[data-layout="42 key"] [data-row="true"] > :nth-child(7)': {
          marginLeft: 30 // px (or use theme.spacing)
        },
        // Respect reduced motion preferences
        '@media (prefers-reduced-motion: reduce)': {
          '[data-row="true"] > :nth-child(7)': {transition: 'none'}
        }
      }}
    />
  )
}
