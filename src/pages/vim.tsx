import React, {useCallback, useState} from 'react'
import {Box, Container, Tab, Tabs, Typography as Type} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ColumnBox} from 'mui-sleazebox'
import PageLayout from '../components/PageLayout'

import {
  faArrowTurnDownLeft,
  faArrowUpLeftFromCircle,
  faHouseUser,
  faMouse
} from '@fortawesome/pro-regular-svg-icons'
import MuiFaIcon from '@components/MuiFaIcon'

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

export default function VimPage() {
  const [value, setValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const Woi = useCallback(
    () => (
      <Type variant="h4">
        <em>Working on it...</em>
      </Type>
    ),
    []
  )

  return (
    <PageLayout>
      <Container sx={{m: 'auto'}}>
        <ColumnBox sx={{my: 4}} alignItems="center">
          {/* <Type>mode: {mode}</Type>
          <Type>theme.palette.mode: {theme.palette.mode}</Type> */}
          <Box pt={4} />
          <Type
            variant="h2"
            gutterBottom
            color="primary"
            // sx={{fontStyle: 'italic'}}
          >
            Vim Keymap
          </Type>

          <Box pt={4}>
            <TabPanel value={value} index={0}>
              {/* <AlphaKeys /> */}
              <Woi />
            </TabPanel>
            <TabPanel value={value} index={1}>
              {/* <MouseLyr /> */}
              <Woi />
            </TabPanel>
            <TabPanel value={value} index={2}>
              {/* <NumNavLyr /> */}
              <Woi />
            </TabPanel>
            <TabPanel value={value} index={3}>
              {/* <SymLyr /> */}
              <Woi />
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
                label="Alphas"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faHouseUser} />
                  </Box>
                }
                {...a11yProps(0)}
              />
              <Tab
                label="Numbers"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faMouse} />
                  </Box>
                }
                {...a11yProps(1)}
              />
              <Tab
                label="Symbols"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faArrowUpLeftFromCircle} />
                  </Box>
                }
                {...a11yProps(2)}
              />
              <Tab
                label="Leaders"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faArrowTurnDownLeft} />
                  </Box>
                }
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          {/* <Copyright /> */}
        </ColumnBox>
      </Container>
    </PageLayout>
  )
}
