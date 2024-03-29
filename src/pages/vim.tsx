import React, {useState, useEffect} from 'react'
import {
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  Switch,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
  Typography as Type
} from '@mui/material'
import {ChildBox, ColumnBox, RowBox} from 'mui-sleazebox'
import PageLayout from '../components/PageLayout'
import {
  faAt,
  faHashtag,
  faKeyboard,
  faText
} from '@fortawesome/pro-regular-svg-icons'
import MuiFaIcon from '@components/MuiFaIcon'
import AlphaKeys from '@components/keyboard/vim/AlphaKeys'
import TextObjKeys from '@components/keyboard/vim/TextObjKeys'
import SymbolKeys from '@components/keyboard/vim/SymbolKeys'
import LeaderAlphaKeys from '@components/keyboard/vim/LeaderAlphaKeys'
import NumNavKeys from '@components/keyboard/vim/NumNavKeys'
import LegacyAlphaKeys from '@components/keyboard/vim/LegacyAlphaKeys'
import LegacyNumNavKeys from '@components/keyboard/vim/LegacyNumNavKeys'
import LegacySymbolKeys from '@components/keyboard/vim/LegacySymbolKeys'
import LegacyTextObjKeys from '@components/keyboard/vim/LegacyTextObjKeys'
import LegacyLeaderAlphaKeys from '@components/keyboard/vim/LegacyLeaderAlphaKeys'
// import LeaderNumNavKeys from '@components/keyboard/vim/LeaderNumNavKeys'
// import LegacyLeaderNumNavKeys from '@components/keyboard/vim/LegacyLeaderNumNavKeys'

type Show = 'descriptions' | 'mappings'
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

  const [leaderChecked, setLeaderChecked] = useState(false)
  // const [legacyChecked, setLegacyChecked] = useState(false)

  // const handleLegacyChange = (
  //   _event: React.ChangeEvent<HTMLInputElement>,
  //   checked: boolean
  // ) => {
  //   if (checked && leaderChecked) {
  //     setLeaderChecked(false)
  //   }
  //   setLegacyChecked(checked)
  // }

  useEffect(() => {
    if (leaderChecked && (value === 1 || value === 2 || value === 3)) {
      setValue(0)
    }
  }, [leaderChecked, value])

  const [show, setShow] = useState<Show>('descriptions')

  const handleShowChange = (
    _event: React.MouseEvent<HTMLElement>,
    newShow: Show
  ) => {
    if (newShow !== null) {
      setShow(newShow)
    }
  }

  const handleLeaderChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    // if (checked && legacyChecked) {
    //   setLegacyChecked(false)
    // }
    setLeaderChecked(checked)
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
            Vim Keymap
          </Type>

          <Box pt={4}>
            <TabPanel value={value} index={0}>
              {leaderChecked && show === 'mappings' ? (
                <LegacyLeaderAlphaKeys />
              ) : leaderChecked && show === 'descriptions' ? (
                <LeaderAlphaKeys />
              ) : show === 'mappings' ? (
                <LegacyAlphaKeys />
              ) : (
                <AlphaKeys />
              )}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {show === 'mappings' ? <LegacyNumNavKeys /> : <NumNavKeys />}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {show === 'mappings' ? <LegacySymbolKeys /> : <SymbolKeys />}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {show === 'mappings' ? <LegacyTextObjKeys /> : <TextObjKeys />}
            </TabPanel>
          </Box>

          <RowBox
            mt={4}
            justifyContent="center"
            alignItems="center"
            flexSpacing={8}
          >
            <ChildBox>
              <ToggleButtonGroup
                color="primary"
                value={show}
                exclusive
                onChange={handleShowChange}
              >
                <ToggleButton
                  sx={{color: 'solarized.base01'}}
                  value="descriptions"
                >
                  Descriptions
                </ToggleButton>
                <ToggleButton sx={{color: 'solarized.base01'}} value="mappings">
                  Mappings
                </ToggleButton>
                {/* <ToggleButton sx={{color: 'solarized.base01'}} value="leaders">
                Leaders
              </ToggleButton> */}
              </ToggleButtonGroup>
            </ChildBox>
            <ChildBox>
              <FormGroup sx={{flexDirection: 'row'}}>
                <FormControlLabel
                  sx={{marginRight: 4}}
                  color="primary"
                  control={
                    <Switch
                      size="small"
                      sx={{
                        '& .MuiSwitch-switchBase': {
                          '&:not(.Mui-checked)': {
                            color: 'solarized.base01'
                          }
                        }
                      }}
                      checked={leaderChecked}
                      onChange={handleLeaderChange}
                      inputProps={{'aria-label': 'Show Leaders Switch'}}
                    />
                  }
                  label={<Type color="text.primary">Show Leaders</Type>}
                />

                {/* <FormControlLabel
              sx={{marginRight: 4}}
              color="primary"
              control={
                <Switch
                  size="small"
                  sx={{
                    '& .MuiSwitch-switchBase': {
                      '&:not(.Mui-checked)': {
                        color: 'solarized.base01'
                      }
                    }
                  }}
                  checked={legacyChecked}
                  onChange={handleLegacyChange}
                  inputProps={{'aria-label': 'Show Mappings Switch'}}
                />
              }
              label={<Type color="text.primary">Show Mappings</Type>}
            /> */}
              </FormGroup>
            </ChildBox>
          </RowBox>

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
                    <MuiFaIcon icon={faKeyboard} />
                  </Box>
                }
                {...a11yProps(0)}
              />
              <Tab
                disabled={leaderChecked}
                label="Num/Nav"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faHashtag} />
                  </Box>
                }
                {...a11yProps(1)}
              />
              <Tab
                disabled={leaderChecked}
                label="Symbols"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faAt} />
                  </Box>
                }
                {...a11yProps(2)}
              />
              <Tab
                disabled={leaderChecked}
                label="Object Select"
                icon={
                  <Box component="span">
                    <MuiFaIcon icon={faText} />
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
