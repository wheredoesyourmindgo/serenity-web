import React, {useState} from 'react'
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Tab,
  Tabs,
  Typography as Type
} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ChildBox, ColumnBox, RowBox} from '@components/flexbox'
import PageLayout from '../components/PageLayout'
import BaseLyr from '@components/keyboard/software/BaseLyr'
import MuiFaIcon from '@components/MuiFaIcon'
import FnLyr from '@components/keyboard/software/FnLyr'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`keyboard-layer-tabpanel-${index}`}
      aria-labelledby={`keyboard-layer-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `keyboard-layer-tab-${index}`,
    'aria-controls': `keyboard-layer-tabpanel-${index}`
  }
}

export default function SoftwarePage() {
  const [value, setValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <PageLayout>
      <Container sx={{m: 'auto'}}>
        <ColumnBox sx={{my: 10}} alignItems="center">
          {/* <Type>mode: {mode}</Type>
          <Type>theme.palette.mode: {theme.palette.mode}</Type> */}
          <Box pt={4} />
          <Type
            variant="h2"
            gutterBottom
            color="primary"
            // sx={{fontStyle: 'italic'}}
          >
            Software
          </Type>

          <Box pt={4}>
            <TabPanel value={value} index={0}>
              <BaseLyr />
            </TabPanel>

            <TabPanel value={value} index={1}>
              <FnLyr />
            </TabPanel>
          </Box>
          <Box
            sx={{
              marginTop: 6,
              bgcolor: 'background.paper'
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="keyboard layer tabs example"
            >
              <Tab
                label="Base"
                icon={
                  <Box component="span">
                    <MuiFaIcon className="fa-regular fa-house-user" />
                  </Box>
                }
                {...a11yProps(0)}
              />

              <Tab
                label="FN Layer"
                icon={
                  <Box component="span">
                    <MuiFaIcon
                      className="fa-regular fa-keyboard"
                      sx={{fontSize: 15}}
                    />
                  </Box>
                }
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          {/* <Copyright /> */}
        </ColumnBox>
        <RowBox justifyContent="space-around">
          <ChildBox />
          <ChildBox>
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
                        color="solarized.blue"
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
          </ChildBox>
        </RowBox>
      </Container>
    </PageLayout>
  )
}
