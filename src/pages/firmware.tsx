import React, {useState} from 'react'
import {faApple} from '@fortawesome/free-brands-svg-icons'
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
import {ChildBox, ColumnBox, RowBox} from 'mui-sleazebox'
import PageLayout from '../components/PageLayout'
import BaseLyr from '@components/keyboard/firmware/BaseLyr'
import NumNavLyr from '@components/keyboard/firmware/NumNavLyr'
import SymLyr from '@components/keyboard/firmware/SymLyr'
import FuncLyr from '@components/keyboard/firmware/FunctionLyr'
import ActionLyr from '@components/keyboard/firmware/ActionLyr'
import MediaLyr from '@components/keyboard/firmware/MediaLyr'
import {
  faWrenchSimple,
  faAnglesDown,
  faAsterisk,
  faAt,
  faCog,
  faCommand,
  faEllipsis,
  faFunction,
  faHashtag,
  faHouseUser,
  faLayerGroup,
  faMouse,
  faScissors,
  faTypewriter
} from '@fortawesome/pro-regular-svg-icons'
import MuiFaIcon from '@components/MuiFaIcon'
import QwertyLyr from '@components/keyboard/firmware/QwertyLyr'
import MouseLyr from '@components/keyboard/firmware/MouseLyr'
import OsLyr from '@components/keyboard/firmware/OsLyr'
import {faDial, faSwatchbook} from '@fortawesome/pro-duotone-svg-icons'
import Encoder from '@components/keyboard/firmware/Encoder'
import {faCircleDashed} from '@fortawesome/pro-regular-svg-icons'

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

export default function FirmwarePage() {
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
            Firmware
          </Type>

          <Box pt={4}>
            <TabPanel value={value} index={0}>
              <BaseLyr />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MouseLyr />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <NumNavLyr />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <SymLyr />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <MediaLyr />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <ActionLyr />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <FuncLyr />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <OsLyr />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <QwertyLyr />
            </TabPanel>
            <TabPanel value={value} index={9}>
              <Encoder />
            </TabPanel>
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
                    <MuiFaIcon icon={faHouseUser} />
                  </Box>
                }
                {...a11yProps(0)}
              />
              <Tab
                label="Mouse"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faMouse} />
                  </Box>
                }
                {...a11yProps(1)}
              />
              <Tab
                label="Num/Nav"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faHashtag} />
                  </Box>
                }
                {...a11yProps(2)}
              />
              <Tab
                label="Symbol"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faAt} />
                  </Box>
                }
                {...a11yProps(3)}
              />
              <Tab
                label="Media"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faCog} />
                  </Box>
                }
                {...a11yProps(4)}
              />
              <Tab
                label="Action"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faScissors} />
                  </Box>
                }
                {...a11yProps(5)}
              />
              <Tab
                label="Function"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faFunction} />
                  </Box>
                }
                {...a11yProps(6)}
              />
              <Tab
                label="OS"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faApple} sx={{fontSize: 16}} />
                  </Box>
                  // <Box component="span">
                  //   <MuiFaIcon
                  //     icon={faArrowUpLeftFromCircle}
                  //     sx={{paddingRight: 0.5}}
                  //   />
                  //   <MuiFaIcon
                  //     icon={faPlus}
                  //     sx={{paddingRight: 1, color: 'solarized.base0'}}
                  //   />
                  //   <MuiFaIcon icon={faBracketSquare} rotation={270} />
                  // </Box>
                }
                {...a11yProps(7)}
              />
              <Tab
                label="Qwerty"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faTypewriter} />
                  </Box>
                }
                {...a11yProps(8)}
              />
              <Tab
                label="Encoder"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faDial} sx={{fontSize: 16}} />
                  </Box>
                }
                {...a11yProps(9)}
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
                      <MuiFaIcon icon={faSwatchbook} color="solarized.violet" />
                    </ListItemIcon>
                    <ListItemText primary="Custom Shift Key" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MuiFaIcon icon={faSwatchbook} color="solarized.cyan" />
                    </ListItemIcon>
                    <ListItemText primary="Stackable One-shot Mod" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MuiFaIcon icon={faAsterisk} color="solarized.red" />
                    </ListItemIcon>
                    <ListItemText primary="Special (see notes)" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MuiFaIcon icon={faLayerGroup} color="solarized.green" />
                    </ListItemIcon>
                    <ListItemText primary="Layer Tap" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MuiFaIcon icon={faCommand} color="solarized.yellow" />
                    </ListItemIcon>
                    <ListItemText primary="Mod Tap" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MuiFaIcon icon={faEllipsis} color="solarized.blue" />
                    </ListItemIcon>
                    <ListItemText primary="Tap Dance" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MuiFaIcon icon={faAnglesDown} color="solarized.orange" />
                    </ListItemIcon>
                    <ListItemText primary="Tap Force Hold" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MuiFaIcon
                        icon={faWrenchSimple}
                        color="solarized.magenta"
                      />
                    </ListItemIcon>
                    <ListItemText primary="Requires OS Configuration" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MuiFaIcon
                        icon={faCircleDashed}
                        // color="solarized.base1"
                      />
                    </ListItemIcon>
                    <ListItemText primary="Optional Encoder" />
                  </ListItem>
                </List>
              </Box>
            </Paper>
          </ChildBox>
        </RowBox>
      </Container>
    </PageLayout>
  )
}
