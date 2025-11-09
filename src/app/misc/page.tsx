'use client'

import MuiFaIcon from '@components/MuiFaIcon'
import PageLayout from '@components/PageLayout'
import {solarized} from '@lib/solarizedPalette'
import {
  Box,
  Container,
  Fab,
  Typography as Type,
  useColorScheme,
  Tooltip,
  Link
} from '@mui/material'
import {SxProps, Theme} from '@mui/material/styles'
import {useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {
  solarizedlight,
  solarizedDarkAtom
} from 'react-syntax-highlighter/dist/esm/styles/prism'

type CopyFabProps = {
  text: string
  tooltip?: string
  onCopied?: () => void
  sx?: SxProps<Theme>
}

const CopyFab = ({text, tooltip = 'Copy', onCopied, sx}: CopyFabProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      onCopied?.()
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // no-op
    }
  }

  return (
    <Tooltip title={copied ? 'Copied!' : tooltip}>
      <Fab
        size="small"
        color="default"
        aria-label="copy"
        onClick={handleCopy}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          minHeight: 36,
          height: 36,
          width: 36,
          boxShadow: 1,
          bgcolor: 'background.paper',
          '&:hover': {bgcolor: 'action.hover'},
          ...sx
        }}
      >
        <MuiFaIcon
          className="fa-regular fa-copy"
          color="solarized.base0"
          sx={{fontSize: 18}}
        />
      </Fab>
    </Tooltip>
  )
}

export default function ConfigPage() {
  const ghosttyConfSnippet = `
# sends ESC d, which Zsh/Bash typically interpret as kill-word (delete next word).
keybind = alt+delete=esc:d
`

  const patchedSolarizedDarkAtom = {
    ...solarizedDarkAtom,
    'pre[class*="language-"]': {
      ...solarizedDarkAtom['pre[class*="language-"]'],
      background: solarized.dark.base3
    },
    'code[class*="language-"]': {
      ...solarizedDarkAtom['code[class*="language-"]'],
      background: solarized.dark.base3
    }
  }

  const isDarkMode = useColorScheme().mode === 'dark'
  const codeStyle = isDarkMode ? patchedSolarizedDarkAtom : solarizedlight

  return (
    <PageLayout>
      <Container sx={{position: 'relative'}}>
        <Box
          sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
          <Type
            variant="h2"
            // gutterBottom
            color="primary"
            sx={{
              // sx={{fontStyle: 'italic'}}
              pt: {xs: 2, md: 4}
              // pb: {xs: 2, md: 4}
            }}
          >
            Miscellaneous
          </Type>
          <Type
            variant="h6"
            // gutterBottom
            color="secondary"
            sx={{
              fontStyle: 'italic',
              // pt: {xs: 2, md: 4},
              pb: {xs: 2, md: 4}
            }}
          >
            page in development...
          </Type>
        </Box>
        <Box
          id="config"
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
            Application Config
          </Type>

          {/* QMK Customizations */}
          <Box sx={{mt: 4, display: 'inline-flex', alignItems: 'baseline'}}>
            <MuiFaIcon
              className="fa-regular fa-ghost"
              color="solarized.green"
              sx={{fontSize: 24, marginRight: 2}}
            />
            <Type variant="h5" gutterBottom color="primary">
              Ghostty
            </Type>
          </Box>
          <Type variant="subtitle1" sx={{mt: 3, mb: 2}}>
            Partial config snippet to add to your Ghostty config file{' '}
            <em>
              (located at <code>~/.config/ghostty/config</code> by default)
            </em>
          </Type>
          <Box
            sx={{
              position: 'relative',
              backgroundColor: 'background.default',
              borderRadius: 2
            }}
          >
            <CopyFab text={ghosttyConfSnippet} />
            <SyntaxHighlighter
              language="txt"
              style={codeStyle}
              customStyle={{
                borderRadius: 8,
                padding: '1rem'
              }}
            >
              {ghosttyConfSnippet}
            </SyntaxHighlighter>
          </Box>
        </Box>
        <Box
          id="contact"
          sx={{
            mt: 10,
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
            Contact Info
          </Type>
          <Type variant="body1" sx={{textAlign: 'center', mt: 2}}>
            Have questions, comments, or feedback? Feel free to reach out
            anytime at{' '}
            <Link noWrap href="mailto:majority-myth-cube@duck.com">
              majority-myth-cube@duck.com
            </Link>
          </Type>
        </Box>
      </Container>
    </PageLayout>
  )
}
