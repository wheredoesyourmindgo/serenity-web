import React, {useState} from 'react'
import {
  Box,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Link,
  Paper,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography as Type
} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ChildBox, ColumnBox, RowBox} from 'mui-sleazebox'
import AlphaKeyboard from '@components/keyboard/Alphas'
import PageLayout from '../components/PageLayout'
import MuiFaIcon from '@components/MuiFaIcon'
import {faAngleRight} from '@fortawesome/pro-solid-svg-icons'
import genkey from '@components/stats/genkey'
import a200 from '@components/stats/a200'
import colemakmods from '@components/stats/colemakmods'
import {faStarShooting} from '@fortawesome/pro-regular-svg-icons'
import StaggerAlphaKeyboard from '@components/keyboard/StaggerAlphas'
import genkeyStagger from '@components/stats/genkeyStagger'
import a200Stagger from '@components/stats/a200Stagger'
import colemakmodsStagger from '@components/stats/colemakmodsStagger'

type Show = 'a200' | 'genkey' | 'colemakmods'

export default function AlphasPage() {
  const [show, setShow] = useState<Show>('genkey')

  const handleShowChange = (
    _event: React.MouseEvent<HTMLElement>,
    newShow: Show
  ) => {
    if (newShow !== null) {
      setShow(newShow)
    }
  }
  const handleStaggerChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    // if (checked && legacyChecked) {
    //   setLegacyChecked(false)
    // }
    setStaggerChecked(checked)
  }
  const [staggerChecked, setStaggerChecked] = useState(false)
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
            Alphas
          </Type>
          <Box pt={4} />
          {staggerChecked ? <StaggerAlphaKeyboard /> : <AlphaKeyboard />}
          <RowBox child mt={6}>
            <ChildBox>
              <FormGroup>
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
                      checked={staggerChecked}
                      onChange={handleStaggerChange}
                      inputProps={{'aria-label': 'Alt. Layout'}}
                    />
                  }
                  label={
                    <Type color="text.primary">Alt. Staggered Layout</Type>
                  }
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
          <ColumnBox
            mt={14}
            justifyContent="center"
            alignItems="center"
            // flexSpacing={8}
          >
            <RowBox flex alignItems="center">
              <MuiFaIcon
                icon={faStarShooting}
                sx={{color: 'solarized.base1', paddingRight: 1}}
              />
              <Type variant="h6" sx={{color: 'solarized.base00'}}>
                Statistics
              </Type>
            </RowBox>

            <ChildBox flex mt={2}>
              <ToggleButtonGroup
                color="primary"
                value={show}
                exclusive
                onChange={handleShowChange}
                aria-label="Stats Button Toggle"
                // orientation="vertical"
              >
                <ToggleButton
                  sx={{color: 'solarized.base01'}}
                  value="genkey"
                  aria-label="Genkey button"
                >
                  Genkey
                </ToggleButton>
                <ToggleButton
                  sx={{color: 'solarized.base01'}}
                  value="a200"
                  aria-label="200 Analyzer button"
                >
                  200 Analyzer
                </ToggleButton>
                <ToggleButton
                  sx={{color: 'solarized.base01'}}
                  value="colemakmods"
                  aria-label="Keyboard Layout Analyzer [SP] button"
                >
                  Keyboard Layout Analyzer [SP]
                </ToggleButton>
              </ToggleButtonGroup>
            </ChildBox>
          </ColumnBox>

          {/* <Copyright /> */}
          <Box
            pt={4}
            sx={{
              ...(show !== 'genkey' && {display: 'none'})
            }}
          >
            <Paper sx={{padding: 4}} elevation={0}>
              <Type
                gutterBottom
                component="pre"
                sx={{color: 'solarized.base01'}}
              >
                <MuiFaIcon
                  icon={faAngleRight}
                  sx={{color: 'solarized.green', paddingRight: 2}}
                />
                <em>
                  {staggerChecked
                    ? `./genkey -stagger=true analyze serenity_stagger`
                    : `./genkey -stagger=false analyze serenity`}
                </em>
              </Type>
              <Divider />
              <Type
                component="pre"
                variant="body2"
                sx={{color: 'solarized.base00'}}
              >
                {staggerChecked ? genkeyStagger : genkey}
              </Type>
            </Paper>
            <RowBox justifyContent="flex-end" mt={1}>
              <Link
                href="https://github.com/semilin/genkey"
                rel="noopener noreferrer"
                target="_blank"
                variant="caption"
                sx={{
                  color: 'text.primary'
                }}
              >
                https://github.com/semilin/genkey
              </Link>
            </RowBox>
          </Box>

          <Box
            pt={4}
            sx={{
              ...(show !== 'a200' && {display: 'none'})
            }}
          >
            <Paper sx={{padding: 4}} elevation={0}>
              <Type
                gutterBottom
                component="pre"
                sx={{color: 'solarized.base01'}}
              >
                <MuiFaIcon
                  icon={faAngleRight}
                  sx={{color: 'solarized.green', paddingRight: 2}}
                />
                {staggerChecked
                  ? `./a200 vw serenity_stagger`
                  : `./a200 vw serenity`}
              </Type>
              <Divider />
              <Type
                component="pre"
                variant="body2"
                sx={{color: 'solarized.base00'}}
              >
                {staggerChecked ? a200Stagger : a200}
              </Type>
            </Paper>
            <RowBox justifyContent="flex-end" mt={1}>
              <Link
                href="https://github.com/ClemenPine/200-analyzer"
                rel="noopener noreferrer"
                target="_blank"
                variant="caption"
                sx={{
                  color: 'text.primary'
                }}
              >
                https://github.com/ClemenPine/200-analyzer
              </Link>
            </RowBox>
          </Box>

          <Box
            pt={4}
            sx={{
              ...(show !== 'colemakmods' && {display: 'none'})
            }}
          >
            <Paper sx={{padding: 4}} elevation={0}>
              <Type
                gutterBottom
                component="pre"
                sx={{color: 'solarized.base01'}}
              >
                <em>{`Keyboard Analysis Tool - v1.32`}</em>
              </Type>
              <Divider />
              <Type
                component="pre"
                variant="body2"
                sx={{color: 'solarized.base00'}}
              >
                {staggerChecked ? colemakmodsStagger : colemakmods}
              </Type>
            </Paper>
            <RowBox justifyContent="flex-end" mt={1}>
              <Link
                href="https://colemakmods.github.io/mod-dh/analyze.html"
                rel="noopener noreferrer"
                target="_blank"
                variant="caption"
                sx={{
                  color: 'text.primary'
                }}
              >
                https://colemakmods.github.io/mod-dh/analyze.html
              </Link>
            </RowBox>
          </Box>
        </ColumnBox>
      </Container>
    </PageLayout>
  )
}
