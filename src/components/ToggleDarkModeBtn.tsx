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
import {AppTheme} from '@lib/theme'

export default function ToggleDarkModeBtn() {
  const uiContext = useContext(UiContext)
  const {dispatch, state} = uiContext
  const {mode} = state
  const handleMode = (_event: React.MouseEvent, value: PaletteMode) => {
    if (value !== null && mode !== value) {
      dispatch(setColorMode(value))
    }
  }
  const theme = useTheme<AppTheme>()

  return (
    <Box sx={{float: 'right', marginRight: 4}}>
      <ToggleButtonGroup
        size="small"
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
                  color: 'solarized.base2'
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
                  color: 'solarized.base02'
                })
              }}
            />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </Box>
  )
}
