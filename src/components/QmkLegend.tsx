import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper
} from '@mui/material'
import MuiFaIcon from '@components/MuiFaIcon'

export default function QmkLegend() {
  return (
    <Paper elevation={2} sx={{borderRadius: 1}}>
      <Box sx={{padding: 2, bgcolor: 'inherit', borderRadius: 1}}>
        {/* <Type variant="subtitle1">Legend</Type> */}
        <List dense>
          <ListSubheader>Legend</ListSubheader>
          <ListItem>
            <ListItemIcon>
              <MuiFaIcon
                className="fa-duotone fa-swatchbook"
                color="solarized.violet"
              />
            </ListItemIcon>
            <ListItemText primary="Custom Shift Key" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MuiFaIcon
                className="fa-duotone fa-swatchbook"
                color="solarized.cyan"
              />
            </ListItemIcon>
            <ListItemText primary="Stackable One-shot Mod" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MuiFaIcon
                className="fa-regular fa-asterisk"
                color="solarized.red"
              />
            </ListItemIcon>
            <ListItemText primary="Special (see tooltip)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MuiFaIcon
                className="fa-regular fa-layer-group"
                color="solarized.green"
              />
            </ListItemIcon>
            <ListItemText primary="Layer Tap" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MuiFaIcon
                className="fa-regular fa-command"
                color="solarized.yellow"
              />
            </ListItemIcon>
            <ListItemText primary="Mod Tap" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MuiFaIcon
                className="fa-regular fa-ellipsis"
                color="solarized.orange"
              />
            </ListItemIcon>
            <ListItemText primary="Tap vs. Hold" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MuiFaIcon
                className="fa-regular fa-angles-down"
                color="solarized.orange"
              />
            </ListItemIcon>
            <ListItemText primary="Auto-repeat Enabled" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MuiFaIcon
                className="fa-regular fa-browser"
                color="solarized.blue"
              />
            </ListItemIcon>
            <ListItemText primary="Application Shortcut" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MuiFaIcon
                className="fa-regular fa-wrench-simple"
                color="solarized.magenta"
              />
            </ListItemIcon>
            <ListItemText primary="Requires OS Configuration" />
          </ListItem>
          {/* <ListItem>
                    <ListItemIcon>
                      <MuiFaIcon
                        className="fa-regular fa-circle-dashed"
                        color="solarized.base00"
                      />
                    </ListItemIcon>
                    <ListItemText primary="Optional Encoder" />
                  </ListItem> */}
        </List>
      </Box>
    </Paper>
  )
}
