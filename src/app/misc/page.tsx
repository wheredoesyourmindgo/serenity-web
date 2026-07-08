'use client'

import FaIcon from '@/components/FaIcon'
import {solarized} from '@/lib/solarizedPalette'
import {useState} from 'react'
import {useTheme} from 'next-themes'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {solarizedlight, solarizedDarkAtom} from 'react-syntax-highlighter/dist/esm/styles/prism'

type CopyBtnProps = {
  text: string
  tooltip?: string
  onCopied?: () => void
  className?: string
}

const CopyBtn = ({text, onCopied, className}: CopyBtnProps) => {
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
    <button
      aria-label={copied ? 'Copied!' : 'Copy'}
      title={copied ? 'Copied!' : 'Copy'}
      onClick={handleCopy}
      className={`bg-card border-border hover:bg-accent absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded border shadow-sm transition-colors ${className ?? ''}`}
    >
      <FaIcon className="fa-regular fa-copy text-[18px]" color="solarized.base0" />
    </button>
  )
}

const USym = ({children, className}: {children: React.ReactNode; className?: string}) => (
  <span className={`text-solarized-cyan text-[1.1rem] font-medium ${className ?? ''}`}>
    {children}
  </span>
)

type VimlessRow = {
  id: number
  action: string | React.ReactNode
  keys: string | React.ReactNode
  vim: string | React.ReactNode
}

const vimlessRows: VimlessRow[] = [
  {
    id: 1,
    action: 'Move',
    keys: (
      <>
        <USym>←</USym>, <USym>↓</USym>, <USym>↑</USym>, <USym>→</USym>
      </>
    ),
    vim: 'h, j, k, l'
  },
  {
    id: 2,
    action: 'Move to beginning of line (soft)',
    keys: (
      <>
        <USym>⌘ ←</USym> (or home)
      </>
    ),
    vim: '^'
  },
  {
    id: 3,
    action: 'Move to beginning of line (hard)',
    keys: (
      <>
        <USym>⌘ ←</USym> <USym>←</USym> (or home twice)
      </>
    ),
    vim: '0'
  },
  {
    id: 4,
    action: 'Move to end of line',
    keys: (
      <>
        <USym>⌘ →</USym> (or end)
      </>
    ),
    vim: '$'
  },
  {id: 5, action: 'Jump to beginning of document', keys: <USym>⌘ ↑</USym>, vim: 'gg'},
  {id: 6, action: 'Jump to end of document', keys: <USym>⌘ ↓</USym>, vim: 'G'},
  {
    id: 7,
    action: 'Page up',
    keys: 'Page Up key (Num/Nav layer)',
    vim: (
      <>
        <USym>⌃</USym> b
      </>
    )
  },
  {
    id: 8,
    action: 'Page down',
    keys: 'Page Down key (Num/Nav layer)',
    vim: (
      <>
        <USym>⌃</USym> f
      </>
    )
  },
  {id: 9, action: 'Delete previous character', keys: <USym>⌫</USym>, vim: 'X'},
  {id: 10, action: 'Delete character', keys: <USym>⌦</USym>, vim: 'x'},
  {id: 11, action: 'Undo', keys: 'Undo key (Num/Nav layer)', vim: 'u'},
  {id: 12, action: 'Cut', keys: 'Cut key (Num/Nav layer)', vim: 'd'},
  {id: 13, action: 'Copy', keys: 'Copy key (Num/Nav layer)', vim: 'y'},
  {id: 14, action: 'Paste', keys: 'Paste key (Num/Nav layer)', vim: 'p'},
  {
    id: 15,
    action: 'Redo',
    keys: 'Redo key (Num/Nav layer)',
    vim: (
      <>
        <USym>⌃</USym> r
      </>
    )
  },
  {id: 16, action: 'Move to start word', keys: <USym>⌥ ←</USym>, vim: 'b'},
  {id: 17, action: 'Move to end word', keys: <USym>⌥ →</USym>, vim: 'e'},
  {id: 18, action: 'Delete start word', keys: <USym>⌥ ⌫</USym>, vim: 'db'},
  {id: 19, action: 'Delete end word', keys: <USym>⌥ ⌦</USym>, vim: 'de'},
  {id: 20, action: 'Delete start line', keys: <USym>⌘ ⌫</USym>, vim: 'd0'},
  {id: 21, action: 'Delete end line', keys: <USym>⌘ ⌦</USym>, vim: 'D'},
  {
    id: 22,
    action: 'Selection (Visual mode)',
    keys: (
      <>
        <USym className="text-[1.2rem] font-semibold">⇧</USym> (use other movement shortcuts while
        holding shift, often in conjunction with arrow keys, to expand or shrink selection)
      </>
    ),
    vim: 'v'
  },
  {id: 23, action: 'Select cursor word', keys: 'Word Select key (Num/Nav layer, tap)', vim: 'viw'},
  {
    id: 24,
    action: 'Select cursor line',
    keys: 'Line Select key (Num/Nav layer, long press)',
    vim: 'V'
  },
  {id: 25, action: 'Indent', keys: <USym className="text-[1.3rem]">⇥</USym>, vim: '>'},
  {
    id: 26,
    action: 'Un-indent',
    keys: (
      <>
        <USym className="text-[1.3rem]">⇤</USym>
      </>
    ),
    vim: '<'
  }
]

export default function ConfigPage() {
  const ghosttyConfSnippet = `
# sends ESC d, which Zsh/Bash typically interpret as kill-word (delete next word).
keybind = alt+delete=esc:d
`

  const itermConfSnippet = `  {"Key Mappings":{"0xf702-0x320000-0x7b":{"Version":0,"Action":47,"Text":"2","Label":""},"0xf703-0x280000-0x0":{"Version":0,"Action":10,"Text":"f","Label":""},"0x7a-0x100000-0x6":{"Version":0,"Action":11,"Text":"0x1f","Label":""},"0xf703-0x2a0000-0x7c":{"Version":0,"Action":46,"Text":"1","Label":""},"0x5a-0x120000-0x6":{"Version":0,"Action":11,"Text":"0x18 0x1f","Label":""},"0xf700-0x300000-0x0":{"Version":0,"Action":7,"Text":"","Label":""},"0xf702-0x2a0000-0x7b":{"Version":0,"Action":47,"Text":"1","Label":""},"0x9-0x40000-0x0":{"Version":0,"Action":25,"Text":"Select Next Tab\nSelect Next Tab","Label":""},"0x7f-0x100000-0x33":{"Version":0,"Action":11,"Text":"0x15","Label":""},"0xf72d-0x100000-0x0":{"Version":0,"Action":8,"Text":"","Label":""},"0xf702-0x280000-0x0":{"Version":0,"Action":10,"Text":"b","Label":""},"0xf72b-0x100000-0x0":{"Version":0,"Action":4,"Text":"","Label":""},"0x74-0x100000-0x0":{"Version":0,"Action":25,"Text":"New Tab with Current Profile","Label":""},"0x54-0x120000-0x0":{"Version":0,"Action":25,"Text":"Split Vertically with Current Profile\nSplit Vertically with Current Profile","Label":""},"0xf703-0x300000-0x0":{"Version":0,"Action":11,"Text":"0x05","Label":""},"0x19-0x60000-0x0":{"Version":0,"Action":25,"Text":"Select Previous Tab\nSelect Previous Tab","Label":""},"0xf703-0x320000-0x0":{"Version":0,"Action":46,"Text":"2","Label":""},"0xf72c-0x20000-0x0":{"Version":0,"Action":9,"Text":"","Label":""},"0xf72d-0x20000-0x0":{"Version":0,"Action":8,"Text":"","Label":""},"0xf703-0x220000-0x7c":{"Version":0,"Action":46,"Text":"0","Label":""},"0x7f-0x80000-0x33":{"Version":0,"Action":11,"Text":"0x17","Label":""},"0xf729-0x100000-0x0":{"Version":0,"Action":5,"Text":"","Label":""},"0xf72c-0x100000-0x0":{"Version":0,"Action":9,"Text":"","Label":""},"0xf702-0x300000-0x7b":{"Version":0,"Action":11,"Text":"0x01","Label":""},"0xf701-0x300000-0x0":{"Version":0,"Action":6,"Text":"","Label":""},"0xf728-0x80000-0x75":{"Version":0,"Action":11,"Text":"0x1b 0x64","Label":""},"0xf702-0x220000-0x7b":{"Version":0,"Action":47,"Text":"0","Label":""}},"Touch Bar Items":{}}`

  const hammerspoonSnippet = `
-- Function to set Karabiner-Elements variable
function setKarabinerVariable(variableName, variableValue)
\tlocal karabiner_cli = "/Library/Application\\ Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli"
\tlocal command = string.format(
\t\t'%s --set-variables \\'{"\\"%s\\": %d}\\'',
\t\tkarabiner_cli, variableName, variableValue
\t  )
\ths.execute(command)
  end

  -- Watch for screen lock and unlock events
  local screenWatcher = hs.caffeinate.watcher.new(function(eventType)
\tif eventType == hs.caffeinate.watcher.screensDidLock then
\t  setKarabinerVariable("is_lock_screen", 1)
\telseif eventType == hs.caffeinate.watcher.screensDidUnlock then
\t  setKarabinerVariable("is_lock_screen", 0)
\tend
  end)

  -- Start the screen watcher
  screenWatcher:start()
`

  const toggleDarkModeSnippet = `
on run {input, parameters}
\ttell application "System Events"
\t\ttell appearance preferences
\t\t\tset dark mode to not dark mode
\t\tend tell
\tend tell

\treturn input
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

  const {resolvedTheme} = useTheme()
  const isDarkMode = resolvedTheme === 'dark'
  const codeStyle = isDarkMode ? patchedSolarizedDarkAtom : solarizedlight

  return (
    <div className="relative container mx-auto px-4">
      <div className="flex flex-col items-center">
        <h2 className="text-solarized-green pt-4 text-4xl font-light tracking-[-0.00833em] md:pt-8 md:text-6xl">
          Miscellaneous
        </h2>
        <h6 className="text-solarized-violet pb-4 text-xl font-medium italic md:pb-8">
          page in development...
        </h6>
      </div>

      <div
        id="config"
        className="bg-card border-border mx-auto mt-12 max-w-[900px] rounded-xl border p-4 md:p-6"
      >
        <h4 className="mb-3 text-center text-xl font-normal">Application Config</h4>

        <div className="mt-5 inline-flex items-baseline gap-4">
          <FaIcon className="fa-regular fa-ghost text-2xl" color="solarized.green" />
          <h5 className="text-solarized-green mb-2 text-2xl font-normal">Ghostty</h5>
        </div>
        <p className="mt-3 mb-3">
          Partial config snippet to add to your Ghostty config file{' '}
          <em>
            (located at <code>~/.config/ghostty/config</code> by default)
          </em>
          .
        </p>
        <div className="bg-background relative rounded-lg">
          <CopyBtn text={ghosttyConfSnippet} />
          <SyntaxHighlighter
            language="shell"
            style={codeStyle}
            customStyle={{borderRadius: 8, padding: '1rem'}}
          >
            {ghosttyConfSnippet}
          </SyntaxHighlighter>
        </div>

        <hr className="border-border mx-auto my-5 w-1/2" />

        <div className="mt-5 inline-flex items-baseline gap-4">
          <FaIcon className="fa-regular fa-terminal text-[22px]" color="solarized.green" />
          <h5 className="text-solarized-green mb-2 text-2xl font-normal">iTerm2</h5>
        </div>
        <p className="mt-3 mb-3">
          These custom key mappings will allow movements using arrow keys in conjunction with
          modifier keys. The following JSON can be added to your iTerm2 key bindings under{' '}
          <em>
            Settings {'→'} Keys {'→'} Key Bindings {'→'} Presets... {'→'} Import...
          </em>
        </p>
        <div className="bg-background relative rounded-lg">
          <CopyBtn text={itermConfSnippet} />
          <SyntaxHighlighter
            language="json"
            style={codeStyle}
            customStyle={{borderRadius: 8, padding: '1rem'}}
          >
            {itermConfSnippet}
          </SyntaxHighlighter>
        </div>

        <hr className="border-border mx-auto my-5 w-1/2" />

        <div className="mt-5 inline-flex items-baseline gap-4">
          <FaIcon className="fa-regular fa-hammer text-2xl" color="solarized.green" />
          <h5 className="text-solarized-green mb-2 text-2xl font-normal">Hammerspoon</h5>
        </div>
        <p className="mt-3 mb-3">
          Partial config snippet to add to your Hammerspoon initialization file{' '}
          <em>
            (located at <code>~/.hammerspoon/init.lua</code> by default)
          </em>
          . Used in conjunction with Karabiner-Elements to detect lock screen.
        </p>
        <div className="bg-background relative rounded-lg">
          <CopyBtn text={hammerspoonSnippet} />
          <SyntaxHighlighter
            language="lua"
            style={codeStyle}
            customStyle={{borderRadius: 8, padding: '1rem'}}
          >
            {hammerspoonSnippet}
          </SyntaxHighlighter>
        </div>

        <hr className="border-border mx-auto my-5 w-1/2" />

        <div className="mt-5 inline-flex items-baseline gap-4">
          <FaIcon className="fa-regular fa-robot text-2xl" color="solarized.green" />
          <h5 className="text-solarized-green mb-2 text-2xl font-normal">Automator</h5>
        </div>
        <p className="mt-3 mb-3">
          Use the following AppleScript Quick Action to toggle Dark Mode on macOS; created via
          Automator. This service can be assigned a keyboard shortcut (ctrl+opt+cmd+D for Serenity
          QMK Media Layer) in System Settings.
        </p>
        <div className="bg-background relative rounded-lg">
          <CopyBtn text={toggleDarkModeSnippet} />
          <SyntaxHighlighter
            language="applescript"
            style={codeStyle}
            customStyle={{borderRadius: 8, padding: '1rem'}}
          >
            {toggleDarkModeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>

      <div
        id="reference"
        className="bg-card border-border mx-auto mt-12 max-w-[900px] rounded-xl border p-4 md:p-6"
      >
        <h4 className="mb-3 text-center text-xl font-normal">Reference</h4>

        <div className="mt-5 inline-flex items-baseline gap-4">
          <FaIcon className="fa-regular fa-ban-smoking text-[27px]" color="solarized.green" />
          <h5 className="text-solarized-green mb-2 text-2xl font-normal">Vim-less</h5>
        </div>
        <p className="mt-3 mb-3">
          Thinking of quitting Vim? Here is an indicative reference for performing common Vim-like{' '}
          <span className="whitespace-nowrap">motions/commands</span> by effortlessly using standard
          keybindings (primarily made possible with QMK due to Mod and Arrow key availability on the
          home row). These shortcuts are application-agnostic and eliminate the need for a modal
          editor for most tasks, or, at a minimum reduce the reliance of using Normal Mode, allowing
          you to remain in Insert Mode more often than not.
        </p>
        <div className="bg-background relative overflow-x-auto rounded-lg">
          <table className="w-full border-collapse text-sm" aria-label="vimless reference table">
            <thead>
              <tr className="border-border border-b">
                <th className="px-3 py-2 text-left font-semibold italic">Do the following</th>
                <th className="px-3 py-2 text-left font-semibold italic">By pressing</th>
                <th className="px-3 py-2 text-left font-semibold italic">
                  Which is similar to this in Vim
                </th>
              </tr>
            </thead>
            <tbody>
              {vimlessRows.map((row) => (
                <tr key={row.id} className="border-border border-b last:border-b-0">
                  <td className="px-3 py-2">{row.action}</td>
                  <td className="px-3 py-2">{row.keys}</td>
                  <td className="px-3 py-2">{row.vim}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 mb-3">
          Some of the other commands and movements not covered by the basic movements can often be
          implemented in modern text editors via extensions or built-in functionality. Here are a
          couple of VSCode Extensions I maintain to fill in some functionality gaps so to speak.
        </p>
        <div className="mb-4 ml-2">
          <p className="mb-2 text-sm font-semibold">VSCode Extensions</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=wheredoesyourmindgo.vscode-scotty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary pl-8 text-base font-medium hover:underline"
            >
              Beam Me Up, Scotty!{' '}
              <span className="font-normal">:: Jump navigation inspired by clever-f</span>
            </a>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=wheredoesyourmindgo.vscode-relativity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary pl-8 text-base font-medium hover:underline"
            >
              Relativity_{' '}
              <span className="font-normal">:: Jump lines by number relative to current line</span>
            </a>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="bg-card border-border mx-auto mt-12 mb-8 max-w-[900px] rounded-xl border p-4 md:p-6"
      >
        <h4 className="mb-3 text-center text-xl font-normal">Get In Touch</h4>
        <p className="mt-4 text-center">
          Have questions, comments, or feedback? Feel free to reach out anytime at{' '}
          <a
            href="mailto:majority-myth-cube@duck.com"
            className="text-primary whitespace-nowrap hover:underline"
          >
            majority-myth-cube@duck.com
          </a>
        </p>
      </div>
    </div>
  )
}
