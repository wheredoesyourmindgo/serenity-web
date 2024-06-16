import React, {useState} from 'react'
import {
  Box,
  Container,
  Divider,
  Link,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography as Type
} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ChildBox, ColumnBox, RowBox} from 'mui-sleazebox'
import AlphaKeyboard from '@components/keyboard/Alphas'
import PageLayout from '../components/PageLayout'
import MuiFaIcon from '@components/MuiFaIcon'
import genkey from '@components/stats/genkey'
import a200 from '@components/stats/a200'
import colemakmods from '@components/stats/colemakmods'
// import ColStaggerAlphaKeyboard from '@components/keyboard/ColStaggerAlphas'
// import genkeyColStagger from '@components/stats/genkeyColStagger'
// import a200ColStagger from '@components/stats/a200ColStagger'
// import colemakmodsColStagger from '@components/stats/colemakmodsColStagger'

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

  // const handleColStaggerChange = (
  //   _event: React.ChangeEvent<HTMLInputElement>,
  //   checked: boolean
  // ) => {
  //   if (checked) {
  //     setStaggerChecked(false)
  //   }
  //   setColStaggerChecked(checked)
  // }

  // const [colStaggerChecked, setColStaggerChecked] = useState(false)

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
          <AlphaKeyboard />

          <ColumnBox
            mt={10}
            justifyContent="center"
            alignItems="center"
            // flexSpacing={8}
          >
            <RowBox flex alignItems="center">
              <MuiFaIcon
                className="fa-regular fa-star-shooting"
                sx={{color: 'solarized.base1', marginRight: 1}}
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
                  className="fa-regular fa-angle-right"
                  sx={{color: 'solarized.green', marginRight: 1}}
                />
                <em>./genkey -stagger=false analyze serenity</em>
              </Type>
              <Divider />
              <Type
                component="pre"
                variant="body2"
                sx={{color: 'solarized.base00'}}
              >
                {genkey}
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
                  className="fa-regular fa-angle-right"
                  sx={{color: 'solarized.green', paddingRight: 2}}
                />
                <em>./a200 vw serenity</em>
              </Type>
              <Divider />
              <Type
                component="pre"
                variant="body2"
                sx={{color: 'solarized.base00'}}
              >
                {a200}
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
                <em>Keyboard Analysis Tool - v1.32</em>
              </Type>
              <Divider />
              <Type
                component="pre"
                variant="body2"
                sx={{color: 'solarized.base00'}}
              >
                {colemakmods}
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
