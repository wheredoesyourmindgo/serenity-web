import React, {useState} from 'react'
import {Box, Container, Tab, Tabs, Typography as Type} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ColumnBox} from 'mui-sleazebox'
import PageLayout from '../components/PageLayout'
import BaseLyr from '@components/keyboard/firmware/baseLyr'
import NumNavLyr from '@components/keyboard/firmware/numNavLyr'
import SymLyr from '@components/keyboard/firmware/symLyr'
import FuncLyr from '@components/keyboard/firmware/functionLyr'
import ActionLyr from '@components/keyboard/firmware/actionLyr'

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
            Firmware
          </Type>
          <Box pt={4}>
            <TabPanel value={value} index={0}>
              <BaseLyr />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <NumNavLyr />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SymLyr />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <FuncLyr />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <ActionLyr />
            </TabPanel>
          </Box>
          <Box
            sx={{
              marginTop: 6,
              bgcolor: 'background.paper'
              // borderBottom: 1,
              // borderColor: 'divider'
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="keyboard layer tabs example"
            >
              <Tab label="Base" {...a11yProps(0)} />
              <Tab label="Number/Navigation" {...a11yProps(1)} />
              <Tab label="Symbol" {...a11yProps(2)} />
              <Tab label="Function" {...a11yProps(3)} />
              <Tab label="Action" {...a11yProps(4)} />
            </Tabs>
          </Box>
          {/* <Copyright /> */}
        </ColumnBox>
      </Container>
    </PageLayout>
  )
}
