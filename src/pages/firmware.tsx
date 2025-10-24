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
import { FormControl, FormLabel, ToggleButton, ToggleButtonGroup } from '@mui/material'
// import Copyright from '@components/Copyright'
import {ChildBox, ColumnBox, RowBox} from '@components/flexbox'
import PageLayout from '@components/PageLayout'
import BaseLyr from '@components/keyboard/firmware/BaseLyr'
import NumNavLyr from '@components/keyboard/firmware/NumNavLyr'
import SymLyr from '@components/keyboard/firmware/SymLyr'
import FuncLyr from '@components/keyboard/firmware/FunctionLyr'
import ActionLyr from '@components/keyboard/firmware/ActionLyr'
import MediaLyr from '@components/keyboard/firmware/MediaLyr'
import MuiFaIcon from '@components/MuiFaIcon'
import QwertyLyr from '@components/keyboard/firmware/QwertyLyr'
import MouseLyr from '@components/keyboard/firmware/MouseLyr'
import OsLyr from '@components/keyboard/firmware/OsLyr'
// import NumpadLyr from '@components/keyboard/firmware/Numpad'
// import Encoder from '@components/keyboard/firmware/Encoder'
// import {faCircleDashed} from '@fortawesome/pro-regular-svg-icons'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export type KeyboardLayout = '48 key' | '42 key'

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

export default function FirmwarePage() {
  const [value, setValue] = useState(0)

  const [layout, setLayout] = useState<KeyboardLayout>('48 key');
  console.log(layout)

  const handleLayoutChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLayout:  KeyboardLayout | null
  ) => {
    if (newLayout) setLayout(newLayout)
  }

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
            Firmware
          </Type>

          <Box pt={4}>
            <TabPanel value={value} index={0}>
              <BaseLyr layout={layout} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MouseLyr />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <NumNavLyr />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ActionLyr />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <MediaLyr />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <SymLyr />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <OsLyr />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <FuncLyr />
            </TabPanel>
            {/* <TabPanel value={value} index={8}>
              <NumpadLyr />
            </TabPanel> */}
            <TabPanel value={value} index={8}>
              <QwertyLyr />
            </TabPanel>
            {/* <TabPanel value={value} index={9}>
              <Encoder />
            </TabPanel> */}
          </Box>
          <Box
            sx={{
              marginTop: 6,
              bgcolor: 'background.paper'
              // borderRadius: 1
              // borderBottom: 1,
              // borderColor: 'divider'
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
                label="Mouse"
                icon={
                  <Box component="span">
                    <MuiFaIcon className="fa-regular fa-mouse" />
                  </Box>
                }
                {...a11yProps(1)}
              />
              <Tab
                label="Num/Nav"
                icon={
                  <Box component="span">
                    <MuiFaIcon
                      className="fa-regular fa-hashtag"
                      sx={{fontSize: 15}}
                    />
                  </Box>
                }
                {...a11yProps(2)}
              />
              <Tab
                label="Action"
                icon={
                  <Box component="span">
                    <MuiFaIcon className="fa-regular fa-table-layout" />
                  </Box>
                }
                {...a11yProps(3)}
              />
              <Tab
                label="Media"
                icon={
                  <Box component="span">
                    <MuiFaIcon className="fa-regular fa-cog" />
                  </Box>
                }
                {...a11yProps(4)}
              />
              <Tab
                label="Symbol"
                icon={
                  <Box component="span">
                    <MuiFaIcon className="fa-regular fa-at" />
                  </Box>
                }
                {...a11yProps(5)}
              />
              <Tab
                label="OS"
                icon={
                  <Box component="span">
                    <MuiFaIcon
                      className="fa-brands fa-apple"
                      sx={{fontSize: 15}}
                    />
                  </Box>
                  // <Box component="span">
                  //   <MuiFaIcon
                  //     className="fa-regular fa-arrow-up-left-from-circle"
                  //     sx={{paddingRight: 0.5}}
                  //   />
                  //   <MuiFaIcon
                  //     icon={faPlus}
                  //     sx={{paddingRight: 1, color: 'solarized.base0'}}
                  //   />
                  //   <MuiFaIcon className="fa-regular fa-bracket-square" rotation={270} />
                  // </Box>
                }
                {...a11yProps(6)}
              />
              <Tab
                label="Function"
                icon={
                  <Box component="span">
                    <MuiFaIcon className="fa-regular fa-function" />
                  </Box>
                }
                {...a11yProps(7)}
              />
              {/* <Tab
                label="Numpad"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faCalculator} />
                  </Box>
                }
                {...a11yProps(8)}
              /> */}
              <Tab
                label="Qwerty"
                icon={
                  <Box component="span">
                    <MuiFaIcon className="fa-regular fa-typewriter" />
                  </Box>
                }
                {...a11yProps(8)}
              />
              {/* <Tab
                label="Encoder"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faDial} sx={{fontSize: 16}} />
                  </Box>
                }
                {...a11yProps(9)}
              /> */}
            </Tabs>
          </Box>
          {/* <Copyright /> */}
        </ColumnBox>
        <RowBox justifyContent="space-around">
          <ChildBox>
            <FormControl component="fieldset" >
              <FormLabel component="legend" sx={{ textAlign: 'center', mb: 1 }}>
                Layout
              </FormLabel>
              <ToggleButtonGroup
                value={layout}
                exclusive
                onChange={handleLayoutChange}
                size="small"
                aria-label="Keyboard layout"
              >
                <ToggleButton value="48 key" aria-label="48 key">48 key (Planck)</ToggleButton>
                <ToggleButton value="42 key" aria-label="42 key">42 key (Corne)</ToggleButton>
              </ToggleButtonGroup>
            </FormControl>
          </ChildBox>
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
