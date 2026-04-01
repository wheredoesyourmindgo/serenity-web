import {GlobalStyles} from '@mui/material'

export default function AppStyles() {
  return (
    <GlobalStyles
      styles={{
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
        }
      }}
    />
  )
}
