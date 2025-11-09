'use client'

import {useState} from 'react'
import {
  alpha,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography as Type
} from '@mui/material'
import {
  FormControl,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material'
// import Copyright from '@components/Copyright'
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
import GitHubIcon from '@mui/icons-material/GitHub'
import QmkLegend from '@components/QmkLegend'
// import NumpadLyr from '@components/keyboard/firmware/Numpad'
// import Encoder from '@components/keyboard/firmware/Encoder'
// import {faCircleDashed} from '@fortawesome/pro-regular-svg-icons'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export type KeyboardLayout = 'planck' | 'corne'

function SerenityQmkButton() {
  return (
    <Button
      variant="outlined"
      href="https://github.com/wheredoesyourmindgo/serenity-qmk"
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
      Serenity QMK
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

export default function FirmwarePage() {
  const [value, setValue] = useState(0)

  const [layout, setLayout] = useState<KeyboardLayout>('planck')

  const handleLayoutChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLayout: KeyboardLayout | null
  ) => {
    if (newLayout) setLayout(newLayout)
  }

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
            top: 0,
            display: {xs: 'none', md: 'block'}
          }}
        >
          <SerenityQmkButton />
        </Box>
        <Box
          sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
          {/* <Type>mode: {mode}</Type>
          <Type>theme.palette.mode: {theme.palette.mode}</Type> */}
          <Type
            variant="h2"
            gutterBottom
            color="primary"
            sx={{
              // sx={{fontStyle: 'italic'}}
              pt: {xs: 2, md: 4},
              pb: {xs: 2, md: 4}
            }}
          >
            Firmware
          </Type>

          <Box
            sx={{
              transform: {xs: 'scale(0.47)', sm: 'scale(0.65)', md: 'none'},
              transformOrigin: {xs: 'center center', md: 'initial'}, // Ensures the scaling starts from the top left corner */
              height: {xs: 165, sm: 200, md: 'auto'}
            }}
          >
            <TabPanel value={value} index={0}>
              <BaseLyr layout={layout} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MouseLyr layout={layout} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <NumNavLyr layout={layout} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ActionLyr layout={layout} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <MediaLyr layout={layout} />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <SymLyr layout={layout} />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <OsLyr layout={layout} />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <FuncLyr layout={layout} />
            </TabPanel>
            {/* <TabPanel value={value} index={8}>
              <NumpadLyr />
            </TabPanel> */}
            <TabPanel value={value} index={8}>
              <QwertyLyr layout={layout} />
            </TabPanel>
            {/* <TabPanel value={value} index={9}>
              <Encoder />
            </TabPanel> */}
          </Box>
          <Box
            sx={{
              marginTop: 6,
              bgcolor: 'background.paper',
              maxWidth: '100%'
              // borderRadius: 1
              // borderBottom: 1,
              // borderColor: 'divider'
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
        </Box>
        <Grid
          container
          sx={{mt: 10}}
          justifyContent="center"
          columnSpacing={12}
          rowSpacing={6}
        >
          <Grid
            size={{xs: 12, sm: 'auto'}}
            display="flex"
            justifyContent="center"
          >
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{textAlign: 'center', mb: 1, width: '100%'}}
              >
                Bottom Row Layout
              </FormLabel>
              <ToggleButtonGroup
                value={layout}
                exclusive
                onChange={handleLayoutChange}
                size="small"
                aria-label="Keyboard Bottom Row layout"
                color="primary"
                orientation="vertical"
                sx={{
                  '& .MuiToggleButton-root': {
                    color: 'text.primary'
                  }
                  // '& .Mui-selected': {
                  // bgcolor: 'primary.main',
                  // color: 'primary.contrastText'
                  // '&:hover': {bgcolor: 'primary.dark'}
                  // }
                }}
              >
                <ToggleButton
                  value="planck"
                  aria-label="11-12 keys"
                  sx={{paddingX: 2}}
                >
                  11-12 keys{' '}
                  <Type
                    variant="inherit"
                    sx={{
                      display: 'inline',
                      fontStyle: 'italic',
                      paddingLeft: 1
                    }}
                  >
                    (Planck)
                  </Type>
                </ToggleButton>
                <ToggleButton
                  value="corne"
                  aria-label="5-6 keys"
                  sx={{paddingX: 2}}
                >
                  5-6 keys{' '}
                  <Type
                    variant="inherit"
                    sx={{
                      display: 'inline',
                      fontStyle: 'italic',
                      paddingLeft: 1
                    }}
                  >
                    (Corne)
                  </Type>
                </ToggleButton>
              </ToggleButtonGroup>
            </FormControl>
          </Grid>
          <Grid size={{xs: 12, sm: 'auto'}}>
            <QmkLegend />
          </Grid>

          <Grid size={{xs: 12}}>
            <Box
              id="highlights"
              sx={{
                mt: 6,
                p: {xs: 2, md: 3},
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
                maxWidth: 900,
                mx: 'auto'
              }}
            >
              <Type
                variant="h4"
                gutterBottom
                sx={{fontWeight: 400, textAlign: 'center', mb: 3}}
              >
                Highlights
              </Type>

              {/* QMK Customizations */}
              <Box sx={{mt: 4}}>
                <Type variant="h5" gutterBottom color="primary">
                  QMK Customizations
                </Type>
                {/* <Type paragraph>
                These notes describe the custom firmware logic and modules that
                extend standard QMK functionality in the Serenity layout. They
                highlight how QMK is tailored to match the keyboard’s unique
                feel and workflow.
              </Type> */}
                <Box
                  component="ul"
                  sx={{
                    pl: 3,
                    mb: 2,
                    '& li:not(:last-child)': {
                      // borderBottom: '1px solid',
                      // borderColor: 'divider',
                      marginBottom: 2
                    }
                  }}
                >
                  <li>
                    <Type>
                      <strong>Custom One Shot Mods</strong> — a tailored feature
                      enabling dynamic stacking of modifiers across principal
                      layers, allowing any combination to be triggered
                      individually or together, without the need to hold
                      modifier keys during subsequent key presses on the Base,
                      Qwerty, or Function layers.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Backspace + Shift</strong> — Backspace performs
                      Forward Delete (del) when held with Shift.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Custom App Switcher</strong> — a firmware‑level
                      feature within the OS Layer that provides app cycling and
                      fast switching that replicates Cmd+Tab/Cmd+Shift+Tab
                      shortcuts.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Symbol Tap Guard</strong> — custom logic on the
                      Symbol layer that suppresses unintended Shift during fast
                      layer activations, ensuring quick taps send unshifted
                      symbols (e.g., '=' instead of '+'); deliberate Shift still
                      produces the shifted variant when intended.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Layer Lock</strong> — custom shortcut toggle on
                      principal layers (located in consistent position): tap
                      once to lock the layer; tap again or press Escape to
                      release, letting you remain in the layer without holding
                      the layer key continuously.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Temporary Home Row Mods w/ Base Layer</strong> —
                      tap the Num/Nav or Symbol key once, then press it again
                      and hold to temporarily use that side’s home‑row modifiers
                      on the Base layer. Useful for certain edge cases where
                      custom one shot mods (see above) are insufficient.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Long‑press dual keys</strong> — For select
                      shortcuts, perform primary action on tap or an alternate
                      action on hold, giving each key two functions without
                      relying on QMK Tap Dance timing. See{' '}
                      <Link
                        href="https://getreuer.info/posts/keyboards/triggers/index.html#tap-vs.-long-press"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        this article
                      </Link>{' '}
                      for more info about the implementation.
                    </Type>
                  </li>
                  <Type
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      mt: 2,
                      pt: 2,
                      fontWeight: 600
                      // borderTop: '1px solid',
                      // borderColor: 'divider'
                    }}
                  >
                    <em>11-12 Key Bottom Row Layouts Only</em>
                  </Type>
                  <li>
                    <Type>
                      <strong>Dual‑Role Layer Holds</strong> — the outer layer
                      hold keys (specifically Action and Media) activate their
                      layer normally; when a same‑side modifier is held
                      simultaneously, they instead hold Shift on that side
                      (LShift/RShift). This enables effortless Shift+mod
                      combinations using pinky-ring-middle-index fingers.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Safe Arrow Cluster</strong> — the bottom‑right
                      arrow group is tuned for quick taps without accidental
                      modifier activation; short presses always send arrow
                      keycodes, guarding against nearby mod‑taps for fast,
                      reliable navigation.
                    </Type>
                  </li>
                </Box>
              </Box>
              {/* <Type
                variant="body2"
                color="text.secondary"
                sx={{fontStyle: 'italic', mb: 4}}
              >
                This section documents the deeper firmware-level changes that
                make Serenity distinct.
              </Type> */}

              <Box sx={{mt: 4}}>
                {/* Layout Design & Logic */}
                <Type variant="h5" gutterBottom color="primary">
                  Layout Design & Logic
                </Type>
                {/* <Type paragraph>
                This section explains the reasoning and design goals behind the
                key layout and overall structure of Serenity’s firmware. It’s
                meant to help others understand how the layers, functions, and
                ergonomics come together.
              </Type> */}
                <Box
                  component="ul"
                  sx={{
                    pl: 3,
                    mb: 2,
                    '& li:not(:last-child)': {
                      // borderBottom: '1px solid',
                      // borderColor: 'divider',
                      marginBottom: 2
                    }
                  }}
                >
                  <li>
                    <Type>
                      <strong>OS</strong> — optimized primarily for macOS
                      behavior and shortcuts
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Vim-style directional mnemonics</strong> —
                      shortcuts and key placements often follow a
                      left–down–up–right pattern (H‑J‑K‑L), mirroring Vim
                      navigation for fast, intuitive recall across layers.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Tri‑layer access</strong> — uses QMK’s tri‑layer
                      logic to reach the OS and Function layers by combining
                      principal layer holds; the appropriate pair momentarily
                      exposes the target layer for quick commands.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Caps Word</strong> — activated by double‑tapping
                      the Left Shift key, this feature enables a quick temporary
                      Caps Lock mode for typing uppercase words without fully
                      toggling Caps Lock.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Mouse layer</strong> — a dedicated layer providing
                      smooth, responsive cursor control and scrolling, ideal for
                      quick pointer adjustments without leaving the home row.
                    </Type>
                  </li>
                  <li>
                    <Type>
                      <strong>Qwerty layer</strong> — full standard QWERTY
                      layout which can be toggled on; useful for app and game
                      compatibility.
                    </Type>
                  </li>
                </Box>
                {/* <Type
                variant="body2"
                color="text.secondary"
                sx={{fontStyle: 'italic'}}
              >
                Intended to capture the thought process behind the Serenity
                layout’s design.
              </Type> */}
              </Box>
            </Box>
          </Grid>

          <Grid size={{xs: 12, sm: 'auto'}}>
            <Box
              sx={{
                display: {xs: 'block', md: 'none'}
              }}
            >
              <SerenityQmkButton />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  )
}
