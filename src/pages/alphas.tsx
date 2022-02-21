import React from 'react'
import {Box, Container, Divider, Paper, Typography as Type} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ColumnBox} from 'mui-sleazebox'
import AlphaKeyboard from '@components/keyboard/Alphas'
import PageLayout from '../components/PageLayout'
import MuiFaIcon from '@components/MuiFaIcon'
import {faAngleRight} from '@fortawesome/pro-solid-svg-icons'

export default function AlphasPage() {
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
          {/* <Copyright /> */}
          <Box pt={14}>
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
                <em>{`./genkey -stagger=false analyze serenity`}</em>
              </Type>
              <Divider />
              <Type
                component="pre"
                variant="body2"
                sx={{color: 'solarized.base00'}}
              >
                {`
serenity
v l d w x  q f o u -
s r h n y  g t e i a =
z j m c b  k p ' , .
Rolls (l): 12.38%
  Inward: ~3.96%
  Outward: ~8.43%
Rolls (r): 25.51%
  Inward: ~10.08%
  Outward: ~15.43%
Alternates: ~44.63%
Onehands: ~0.85%
Redirects: ~6.91%
Finger Speed (weighted): [0.60 0.75 0.95 3.13 1.70 2.02 1.22 0.80]
Finger Speed (unweighted): [0.91 2.72 4.56 17.23 9.33 9.71 4.38 1.20]
Highest Speed (weighted): 3.13 (LI)
Highest Speed (unweighted): 17.23 (LI)
Index Usage: 15.3% 16.1%
SFBs: 1.183%
DSFBs: 6.658%
LSBs: 1.24%
Top SFBs:
  nc 0.329%	ny 0.119%	by 0.112%	ui 0.107%
  ft 0.089%	wn 0.084%	pt 0.078%	eo 0.078%

Worst Bigrams:
  oe 23.001	nc 13.113	ui 11.503	lr 10.328
  dm 10.048	a. 8.173	vs 7.922	gt 6.921

Score: 35.02`}
              </Type>
            </Paper>
          </Box>

          <Box pt={14}>
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
                <em>{`./a200 vw serenity`}</em>
              </Type>
              <Divider />
              <Type
                component="pre"
                variant="body2"
                sx={{color: 'solarized.base00'}}
              >
                {`
MONKEYTYPE-QUOTES.JSON

Serenity
v l d w x  q f o u -
s r h n y  g t e i a
z j m c b  k p ' , .

Trigrams
========
Alternates - Total: 30.92%
     Rolls - Total: 41.10%   In: 18.66%   Out: 22.44%   Ratio:   0.83
  Onehands - Total:  4.82%   In:  2.18%   Out:  2.64%   Ratio:   0.83
 Redirects - Total:  9.62%
   Unknown - Total:  0.00%

Same Finger
===========
       SFB - 1.77%         DSFB - 5.39%
       SFT - 0.01%          SFR - 6.37%

Finger Use
==========
      Left - Total: 35.18%   LP:  5.65%   LR:  7.66%   LM:  9.31%   LI: 12.55%
     Right - Total: 46.32%   RP:  7.54%   RR:  9.14%   RM: 16.85%   RI: 12.78%
     Thumb - Total: 18.50%

Row Use
=======
       Top - 24.51%         Home - 62.96%       Bottom - 12.53%
`}
              </Type>
            </Paper>
          </Box>
        </ColumnBox>
      </Container>
    </PageLayout>
  )
}
