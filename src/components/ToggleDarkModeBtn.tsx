import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  useTheme,
  PaletteMode,
  Tooltip
} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {setColorMode, UiContext} from '@components/UiStore'
import {useContext} from 'react'

export default function ToggleDarkModeBtn() {
  const uiContext = useContext(UiContext)
  const {dispatch, state} = uiContext
  const {mode} = state
  const handleMode = (_event: React.MouseEvent, value: PaletteMode) => {
    if (value !== null && mode !== value) {
      dispatch(setColorMode(value))
    }
  }
  const theme = useTheme()

  return (
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
  )
}
