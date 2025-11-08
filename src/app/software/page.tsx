'use client'

import {useState} from 'react'
import {
  alpha,
  Box,
  Button,
  Container,
  Grid,
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
import PageLayout from '@components/PageLayout'
import BaseLyr from '@components/keyboard/software/BaseLyr'
import MuiFaIcon from '@components/MuiFaIcon'
import FnLyr from '@components/keyboard/software/FnLyr'
import GitHubIcon from '@mui/icons-material/GitHub'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function SerenityKarabinerButton() {
  return (
    <Button
      variant="outlined"
      href="https://github.com/wheredoesyourmindgo/serenity-karabiner"
      target="_blank"
      rel="noopener noreferrer"
      startIcon={<GitHubIcon />}
      size="small"
      sx={[
        {
          textTransform: 'none',
          fontWeight: 600,
          color: 'white',
          bgcolor: '#24292e',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0.3)',
          '&:hover': {
            bgcolor: alpha('#2f363d', 0.9),
            borderColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        (theme) =>
          theme.applyStyles('dark', {
            borderColor: 'rgba(255, 255, 255, 0.3)',
            '&:hover': {
              borderColor: 'rgba(255, 255, 255, 0.5)'
            }
          })
      ]}
    >
      Serenity Karabiner
    </Button>
  )
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
      <Container sx={{position: 'relative'}}>
        <Box
          sx={{
            marginRight: 2,
            position: 'absolute',
            right: 0,
            top: 0
          }}
        >
          <SerenityKarabinerButton />
        </Box>
        <Box
          sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
          {/* <Type>mode: {mode}</Type>
          <Type>theme.palette.mode: {theme.palette.mode}</Type> */}
          <Box sx={{pt: {xs: 2, md: 4}}} />
          <Type
            variant="h2"
            gutterBottom
            color="primary"
            // sx={{fontStyle: 'italic'}}
          >
            Software
          </Type>

          <Box sx={{pt: {xs: 2, md: 4}}} />

          <Box
            sx={{
              transform: {xs: 'scale(0.42)', sm: 'scale(0.60)', md: 'none'},
              transformOrigin: {xs: 'center center', md: 'initial'}, // Ensures the scaling starts from the top left corner */
              height: {xs: 250, sm: 300, md: 'auto'}
            }}
          >
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
              bgcolor: 'background.paper',
              maxWidth: '100%'
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Keyboard Layer tabs"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
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
        </Box>
        <Grid
          container
          sx={{mt: 10}}
          justifyContent="center"
          columnSpacing={12}
          rowSpacing={6}
        >
          <Grid
            size={{xs: 12, sm: 5}}
            sx={{display: {xs: 'none', md: 'block'}}}
          />
          <Grid size={{xs: 12, sm: 'auto'}}>
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
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  )
}
