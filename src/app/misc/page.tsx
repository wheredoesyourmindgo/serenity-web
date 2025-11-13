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
  Link,
  Divider,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody
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

type VimlessRow = {
  action: string
  keys: string
  vim: string
}

const vimlessRows: VimlessRow[] = [
  {
    action: 'Move',
    keys: '\u2190, \u2193, \u2191, \u2192',
    vim: 'h, j, k, l'
  },
  {
    action: 'Move to beginning of line (soft)',
    keys: '\u2318 \u2190 (or home)',
    vim: '^'
  },
  {
    action: 'Move to beginning of line (hard)',
    keys: '\u2318 \u2190 \u2190 (or home twice)',
    vim: '0'
  },
  {
    action: 'Move to end of line',
    keys: '\u2318 \u2192 (or end)',
    vim: '$'
  },
  {
    action: 'Jump to beginning of document',
    keys: '\u2318 \u2191',
    vim: 'gg'
  },
  {
    action: 'Jump to end of document',
    keys: '\u2318 \u2193',
    vim: 'G'
  },
  {
    action: 'Page up',
    keys: 'Page Up key (Num/Nav layer)',
    vim: '\u2303 b'
  },
  {
    action: 'Page down',
    keys: 'Page Down key (Num/Nav layer)',
    vim: '\u2303 f'
  },
  {
    action: 'Delete previous character',
    keys: '\u232b',
    vim: 'X'
  },
  {
    action: 'Delete character',
    keys: '\u2326',
    vim: 'x'
  },
  {
    action: 'Undo',
    keys: 'Undo key (Num/Nav layer)',
    vim: 'u'
  },
  {
    action: 'Cut',
    keys: 'Cut key (Num/Nav layer)',
    vim: 'd'
  },
  {
    action: 'Copy',
    keys: 'Copy key (Num/Nav layer)',
    vim: 'y'
  },
  {
    action: 'Paste',
    keys: 'Paste key (Num/Nav layer)',
    vim: 'p'
  },
  {
    action: 'Redo',
    keys: 'Redo key (Num/Nav layer)',
    vim: '\u2303 r'
  },
  {
    action: 'Move to start word',
    keys: '\u2325 \u2190',
    vim: 'b'
  },
  {
    action: 'Move to end word',
    keys: '\u2325 \u2192',
    vim: 'e'
  },
  {
    action: 'Delete start word',
    keys: '\u2325 \u232b',
    vim: 'db'
  },
  {
    action: 'Delete end word',
    keys: '\u2325 \u2326',
    vim: 'de'
  },
  {
    action: 'Delete start line',
    keys: '\u2318 \u232b',
    vim: 'd0'
  },
  {
    action: 'Delete end line',
    keys: '\u2318 \u2326',
    vim: 'D'
  },
  {
    action: 'Selection (Visual mode)',
    keys: '\u21E7 (use other movement shortcuts, often in conjunction with arrow keys, to select)',
    vim: 'v'
  },
  {
    action: 'Select cursor word',
    keys: 'Word Select key (Num/Nav layer, tap)',
    vim: 'viw'
  },
  {
    action: 'Select cursor line',
    keys: 'Line Select key (Num/Nav layer, long press)',
    vim: 'V'
  },
  {
    action: 'Indent',
    keys: '\u21E5',
    vim: '>'
  },
  {
    action: 'Un-indent',
    keys: '\u21E7 \u21E4',
    vim: '<'
  }
]

export default function ConfigPage() {
  const ghosttyConfSnippet = `
# sends ESC d, which Zsh/Bash typically interpret as kill-word (delete next word).
keybind = alt+delete=esc:d
`

  const hammerspoonSnippet = `
-- Function to set Karabiner-Elements variable
function setKarabinerVariable(variableName, variableValue)
	local karabiner_cli = "/Library/Application\\ Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli"
	local command = string.format(
		'%s --set-variables \'{"%s": %d}\'',
		karabiner_cli, variableName, variableValue
	  )
	hs.execute(command)
  end

  -- Watch for screen lock and unlock events
  local screenWatcher = hs.caffeinate.watcher.new(function(eventType)
	if eventType == hs.caffeinate.watcher.screensDidLock then
	  setKarabinerVariable("is_lock_screen", 1)
	elseif eventType == hs.caffeinate.watcher.screensDidUnlock then
	  setKarabinerVariable("is_lock_screen", 0)
	end
  end)

  -- Start the screen watcher
  screenWatcher:start()
`

  const toggleDarkModeSnippet = `
on run {input, parameters}
	tell application "System Events"
		tell appearance preferences
			set dark mode to not dark mode
		end tell
	end tell

	return input
end run
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
            .
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
              language="shell"
              style={codeStyle}
              customStyle={{
                borderRadius: 8,
                padding: '1rem'
              }}
            >
              {ghosttyConfSnippet}
            </SyntaxHighlighter>
          </Box>

          <Divider sx={{marginTop: 4}} variant="middle" />

          <Box sx={{mt: 4, display: 'inline-flex', alignItems: 'baseline'}}>
            <MuiFaIcon
              className="fa-regular fa-hammer"
              color="solarized.green"
              sx={{fontSize: 24, marginRight: 2}}
            />
            <Type variant="h5" gutterBottom color="primary">
              Hammerspoon
            </Type>
          </Box>
          <Type variant="subtitle1" sx={{mt: 3, mb: 2}}>
            Partial config snippet to add to your Hammerspoon initialization
            file{' '}
            <em>
              (located at <code>~/.hammerspoon/init.lua</code> by default)
            </em>
            . Used in conjunction with Karabiner-Elements to detect lock screen.
          </Type>
          <Box
            sx={{
              position: 'relative',
              backgroundColor: 'background.default',
              borderRadius: 2
            }}
          >
            <CopyFab text={hammerspoonSnippet} />
            <SyntaxHighlighter
              language="lua"
              style={codeStyle}
              customStyle={{
                borderRadius: 8,
                padding: '1rem'
              }}
            >
              {hammerspoonSnippet}
            </SyntaxHighlighter>
          </Box>

          <Divider sx={{marginTop: 4}} variant="middle" />

          <Box sx={{mt: 4, display: 'inline-flex', alignItems: 'baseline'}}>
            <MuiFaIcon
              className="fa-regular fa-robot"
              color="solarized.green"
              sx={{fontSize: 24, marginRight: 2}}
            />
            <Type variant="h5" gutterBottom color="primary">
              Automator
            </Type>
          </Box>
          <Type variant="subtitle1" sx={{mt: 3, mb: 2}}>
            Use the following AppleScript Quick Action to toggle Dark Mode on
            macOS; created via Automator. This service can be assigned a
            keyboard shortcut (ctrl+opt+cmd+D for Serenity QMK Media Layer) in
            System Settings.
          </Type>
          <Box
            sx={{
              position: 'relative',
              backgroundColor: 'background.default',
              borderRadius: 2
            }}
          >
            <CopyFab text={toggleDarkModeSnippet} />
            <SyntaxHighlighter
              language="applescript"
              style={codeStyle}
              customStyle={{
                borderRadius: 8,
                padding: '1rem'
              }}
            >
              {toggleDarkModeSnippet}
            </SyntaxHighlighter>
          </Box>
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
            Reference
          </Type>

          <Box sx={{mt: 4, display: 'inline-flex', alignItems: 'baseline'}}>
            <MuiFaIcon
              className="fa-regular fa-ban-smoking"
              color="solarized.green"
              sx={{fontSize: 27, marginRight: 2}}
            />
            <Type variant="h5" gutterBottom color="primary">
              Vim-less
            </Type>
          </Box>
          <Type variant="subtitle1" sx={{mt: 3, mb: 2}}>
            Thinking of quitting Vim? Here is a useful reference for performing
            common Vim-like{' '}
            <Type variant="inherit" component="span" noWrap>
              motions/commands
            </Type>{' '}
            by effortlessly using standard keybindings (primarily made possible
            with QMK due to Mod and Arrow key availability on the home row).
            These shortcuts are application-agnostic and eliminate the need for
            a modal editor for most tasks.
          </Type>
          <Box
            sx={{
              position: 'relative',
              backgroundColor: 'background.default',
              borderRadius: 2
            }}
          >
            {/* table here */}
            {/* Material-UI Table for VIM-less reference */}
            <TableContainer
              component={Paper}
              sx={{
                borderRadius: 2,
                bgcolor: 'background.default'
              }}
            >
              <Table size="small" aria-label="vimless reference table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontWeight: 600, fontStyle: 'italic'}}>
                      Do the following
                    </TableCell>
                    <TableCell sx={{fontWeight: 600, fontStyle: 'italic'}}>
                      By pressing
                    </TableCell>
                    <TableCell sx={{fontWeight: 600, fontStyle: 'italic'}}>
                      Which is similar to this in Vim
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vimlessRows.map((row) => (
                    <TableRow key={row.action}>
                      <TableCell>{row.action}</TableCell>
                      <TableCell>{row.keys}</TableCell>
                      <TableCell>{row.vim}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Type sx={{mt: 6, mb: 2}}>
            Some of the other commands and movements not covered by the basic
            movements can often be implemented in modern text editors via
            extensions or built-in functionality. Here are a couple of VSCode
            Extensions I maintain to fill in some functionality gaps so to
            speak.
          </Type>
          <Box sx={{mb: 4, ml: 1}}>
            <Type variant="subtitle2" sx={{fontWeight: 600, mb: 1}}>
              VSCode Extensions
            </Type>

            <Box sx={{display: 'flex', flexDirection: 'column', gap: 1.5}}>
              <Link
                href="https://marketplace.visualstudio.com/items?itemName=wheredoesyourmindgo.vscode-scotty"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  paddingLeft: 4,
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: 'primary.light'
                  }
                }}
              >
                Beam Me Up, Scotty!{' '}
                <Type component="span" variant="inherit" sx={{fontWeight: 400}}>
                  :: Jump navigation inspired by clever-f
                </Type>
              </Link>

              <Link
                href="https://marketplace.visualstudio.com/items?itemName=wheredoesyourmindgo.vscode-relativity"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  paddingLeft: 4,
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: 'primary.light'
                  }
                }}
              >
                Relativity_{' '}
                <Type component="span" variant="inherit" sx={{fontWeight: 400}}>
                  :: Jump lines by number relative to current line
                </Type>
              </Link>
            </Box>
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
            Get In Touch
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
