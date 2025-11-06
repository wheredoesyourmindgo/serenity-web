'use client'

import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  PaletteMode,
  Tooltip,
  useColorScheme
} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

export default function ToggleDarkModeBtn() {
  const {mode, setMode} = useColorScheme()
  const handleMode = (_event: React.MouseEvent, value: PaletteMode) => {
    if (value !== null && mode !== value) {
      setMode(value)
    }
  }

  return (
    <Box>
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
              sx={[
                {
                  color: 'solarized.base2'
                },
                (theme) =>
                  theme.applyStyles('dark', {
                    color: 'solarized.base1'
                  })
              ]}
            />
          </ToggleButton>
        </Tooltip>

        <Tooltip title="Light's out!" enterDelay={1000}>
          <ToggleButton value="dark" aria-label="Dark Mode">
            <DarkModeIcon
              sx={[
                {
                  color: 'solarized.base1'
                },
                (theme) =>
                  theme.applyStyles('dark', {
                    color: 'solarized.base02'
                  })
              ]}
            />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </Box>
  )
}
