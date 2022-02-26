import React from 'react'
import {
  Box,
  Container,
  Divider,
  Link,
  Paper,
  Typography as Type
} from '@mui/material'
// import Copyright from '@components/Copyright'
import {ColumnBox, RowBox} from 'mui-sleazebox'
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
v l m f x  b w o u ;
s r t n y  g d e i a
z j k h q  p c ' , .
Rolls (l): 16.87%
	Inward: ~9.98%
	Outward: ~6.89%
Rolls (r): 26.68%
	Inward: ~11.39%
	Outward: ~15.28%
Alternates: ~39.51%
Onehands: ~1.70%
Redirects: ~6.75%
Finger Speed (weighted): [0.60 0.76 0.85 1.65 2.48 2.03 1.22 0.59]
Finger Speed (unweighted): [0.91 2.72 4.07 9.09 13.61 9.73 4.39 0.89]
Highest Speed (weighted): 2.48 (RI)
Highest Speed (unweighted): 13.61 (RI)
Index Usage: 15.7% 14.2%
SFBs: 0.696%
DSFBs: 6.486%
LSBs: 2.52%
Top SFBs:
	ny 0.119%	ui 0.107%	eo 0.078%	rl 0.077%
	nf 0.060%	e' 0.048%	oe 0.044%	hy 0.040%

Worst Bigrams:
	oe 23.001	ui 11.503	lr 10.328	bc 8.865
	a. 8.173	vs 7.922	mt 7.609	ny 6.607

Score: 33.52
`}
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
v l m f x  b w o u ;
s r t n y  g d e i a
z j k h q  p c ' , .

Trigrams
========
Alternates - Total: 29.71%
     Rolls - Total: 44.11%   In: 24.05%   Out: 20.05%   Ratio:   1.20
  Onehands - Total:  5.29%   In:  1.12%   Out:  4.18%   Ratio:   0.27
 Redirects - Total:  8.27%
   Unknown - Total:  0.00%

Same Finger
===========
       SFB - 1.14%         DSFB - 5.11%
       SFT - 0.00%          SFR - 6.37%

Finger Use
==========
      Left - Total: 37.28%   LP:  5.65%   LR:  7.66%   LM: 10.25%   LI: 13.72%
     Right - Total: 44.21%   RP:  7.54%   RR:  9.14%   RM: 16.85%   RI: 10.68%
     Thumb - Total: 18.50%

Row Use
=======
       Top - 24.89%         Home - 61.18%       Bottom - 13.92%
`}
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

          <Box pt={14}>
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
                {`
Finger Frequency
finger 0  6.95%    finger 9   9.13%
finger 1  9.70%    finger 8   11.30%
finger 2  11.89%   finger 7   20.28%
finger 3  16.90%   finger 6   13.84%
------------------------------------
total L   45.45%   total R    54.55%

Finger Bigram Frequency
finger 0  0.001%  finger 9  0.016%
finger 1  0.085%  finger 8  0.144%
finger 2  0.018%  finger 7  0.171%
finger 3  0.253%  finger 6  0.057%
------------------------------------
                  total     0.745%

Top Same-Finger Bigrams
finger 3 	NY 	0.106%
finger 8 	UI 	0.097%
finger 1 	RL 	0.075%
finger 7 	OE 	0.048%
finger 3 	NF 	0.043%

Top Neighbour-Finger Bigrams
finger 7-8 	OU 	1.453%
finger 9-8 	AI 	0.475%
finger 7-8 	E, 	0.400%
finger 1-0 	RS 	0.359%
finger 8-7 	IO 	0.323%

Finger Effort
 	        base   s-bigrams  n-bigrams  total
finger 0  0.125  0.000      0.004      0.129
finger 1  0.175  0.003      0.002      0.179
finger 2  0.163  0.001      -0.006     0.158
finger 3  0.274  0.007                 0.281
finger 6  0.281  0.002                 0.282
finger 7  0.302  0.005      -0.010     0.298
finger 8  0.203  0.005      0.004      0.212
finger 9  0.168  0.000      0.005      0.174
--------------------------------------------
total *   1.691  0.022      -0.001     1.713
`}
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
