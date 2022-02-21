import React, {useEffect, useState} from 'react'
import {
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  Switch,
  Tab,
  Tabs,
  ThemeProvider,
  Typography as Type
} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ColumnBox} from 'mui-sleazebox'
import PageLayout from '../components/PageLayout'
import {
  faArrowUpLeftFromCircle,
  faHouseUser,
  faMouse
} from '@fortawesome/pro-regular-svg-icons'
import MuiFaIcon from '@components/MuiFaIcon'
import AlphaKeys from '@components/keyboard/vim/alphaKeys'
import TextObjKeys from '@components/keyboard/vim/textObjKeys'
import SymbolKeys from '@components/keyboard/vim/symbolKeys'
import LeaderAlphaKeys from '@components/keyboard/vim/leaderAlphaKeys'
import LeaderNumNavKeys from '@components/keyboard/vim/leaderNumNavKeys'
import NumNavKeys from '@components/keyboard/vim/numNavKeys'

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

  const [checked, setChecked] = useState(false)

  const handleLeaderChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setChecked(checked)
  }

  useEffect(() => {
    if (checked && (value === 2 || value === 3)) {
      setValue(0)
    }
  }, [checked, value])

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
              {checked ? <LeaderAlphaKeys /> : <AlphaKeys />}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {checked ? <LeaderNumNavKeys /> : <NumNavKeys />}
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SymbolKeys />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <TextObjKeys />
            </TabPanel>
          </Box>

          <FormGroup>
            <FormControlLabel
              color="primary"
              control={
                <Switch
                  sx={{
                    '& .MuiSwitch-switchBase': {
                      '&:not(.Mui-checked)': {
                        color: 'solarized.base01'
                      }
                    }
                  }}
                  checked={checked}
                  onChange={handleLeaderChange}
                  inputProps={{'aria-label': 'Show Leaders'}}
                />
              }
              label={<Type color="text.primary">Show Leaders</Type>}
            />
          </FormGroup>

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
                label="Num/Nav"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faHouseUser} />
                  </Box>
                }
                {...a11yProps(1)}
              />
              <Tab
                disabled={checked}
                label="Symbols"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faArrowUpLeftFromCircle} />
                  </Box>
                }
                {...a11yProps(2)}
              />
              <Tab
                disabled={checked}
                label="Object Select"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faMouse} />
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
