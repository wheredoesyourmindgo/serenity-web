import React, {useCallback, useContext} from 'react'
import {
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Typography as Type,
  TypographyProps,
  useTheme,
  PaletteMode,
  Tooltip
} from '@mui/material'
import Copyright from '@components/Copyright'
import {ChildBox, ColumnBox, RowBox} from 'mui-sleazebox'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {UiContext, setColorMode} from '@components/UiStore'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/pro-duotone-svg-icons'
import MuiFaIcon from '@components/MuiFaIcon'

export default function Index() {
  const uiContext = useContext(UiContext)
  const {dispatch, state} = uiContext
  const {mode} = state

  const T3 = useCallback(
    ({children, ...rest}: TypographyProps) => (
      <Type variant="h3" {...rest}>
        {children}
      </Type>
    ),
    []
  )
  const KeyLegend = useCallback(
    ({children, ...rest}: TypographyProps) => (
      <ChildBox width={25} overflow="none">
        <T3 color="solarized.base00" {...rest}>
          {children}
        </T3>
      </ChildBox>
    ),
    [T3]
  )

  const handleMode = (_event: React.MouseEvent, value: PaletteMode) => {
    if (value !== null && mode !== value) {
      dispatch(setColorMode(value))
    }
  }
  const theme = useTheme()

  return (
    <Box>
      <Box sx={{float: 'right', marginRight: 4}}>
        <ToggleButtonGroup
          value={mode}
          exclusive
          onChange={handleMode}
          aria-label="text alignment"
        >
          <Tooltip title="Light's on!" enterDelay={1000}>
            <ToggleButton value="light" aria-label="Light Mode">
              <LightModeIcon
                sx={{
                  ...(theme.palette.mode === 'dark' && {
                    color: 'solarized.base1'
                  }),
                  ...(theme.palette.mode === 'light' && {
                    color: 'solarized.yellow'
                  })
                }}
              />
            </ToggleButton>
          </Tooltip>

          <Tooltip title="Light's out!" enterDelay={1000}>
            <ToggleButton value="dark" aria-label="Dark Mode">
              <DarkModeIcon
                sx={{
                  ...(theme.palette.mode === 'light' && {
                    color: 'solarized.base1'
                  }),
                  ...(theme.palette.mode === 'dark' && {
                    color: 'solarized.yellow'
                  })
                }}
              />
            </ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
      </Box>

      <Container sx={{m: 'auto'}}>
        <ColumnBox sx={{my: 4}} alignItems="center">
          {/* <Type>mode: {mode}</Type>
          <Type>theme.palette.mode: {theme.palette.mode}</Type> */}
          <Type variant="h1" gutterBottom color="primary">
            Serenity
          </Type>

          <MuiFaIcon sx={{color: 'primary.main'}} icon={faCoffee} />
          <ColumnBox>
            <RowBox flexSpacing={3}>
              <KeyLegend color="solarized.base1">X</KeyLegend>
              <KeyLegend color="solarized.base1">J</KeyLegend>
              <KeyLegend color="solarized.base02">H</KeyLegend>
              <KeyLegend color="solarized.base0">V</KeyLegend>
              <KeyLegend color="solarized.base1">Z</KeyLegend>
              <KeyLegend color="solarized.base1">Q</KeyLegend>
              <KeyLegend color="solarized.base00">W</KeyLegend>
              <KeyLegend color="solarized.base03" fontWeight={425}>
                O
              </KeyLegend>
              <KeyLegend color="solarized.base01">U</KeyLegend>
              <KeyLegend>-</KeyLegend>
            </RowBox>
            <RowBox flexSpacing={3}>
              <KeyLegend color="solarized.base03" fontWeight={425}>
                S
              </KeyLegend>
              <KeyLegend color="solarized.base02">R</KeyLegend>
              <KeyLegend color="solarized.base03" fontWeight={425}>
                N
              </KeyLegend>
              <KeyLegend color="solarized.base03" fontWeight={425}>
                T
              </KeyLegend>
              <KeyLegend color="solarized.base00">F</KeyLegend>
              <KeyLegend color="solarized.base00">P</KeyLegend>
              <KeyLegend color="solarized.base02">D</KeyLegend>
              <KeyLegend color="solarized.base03" fontWeight={425}>
                E
              </KeyLegend>
              <KeyLegend color="solarized.base03" fontWeight={425}>
                I
              </KeyLegend>
              <KeyLegend color="solarized.base03" fontWeight={425}>
                A
              </KeyLegend>
              <KeyLegend>=</KeyLegend>
            </RowBox>
            <RowBox flexSpacing={3}>
              <KeyLegend color="solarized.base00">Y</KeyLegend>
              <KeyLegend color="solarized.base01">L</KeyLegend>
              <KeyLegend color="solarized.base0">B</KeyLegend>
              <KeyLegend color="solarized.base01">M</KeyLegend>
              <KeyLegend color="solarized.base0">K</KeyLegend>
              <KeyLegend color="solarized.base00">G</KeyLegend>
              <KeyLegend color="solarized.base01">C</KeyLegend>
              <KeyLegend>'</KeyLegend>
              <KeyLegend>,</KeyLegend>
              <KeyLegend>.</KeyLegend>
            </RowBox>
          </ColumnBox>
          <Copyright />
        </ColumnBox>
      </Container>
    </Box>
  )
}
