import FaIcon from '@/components/FaIcon'
import CodeBlock from '@/components/CodeBlock'
import {PageBody, PageHeader, Section, SubSection, TextLink} from '@/components/Page'
import MacosSetupChecklist from '@/components/MacosSetupChecklist'
import PageNav from '@/components/PageNav'

const USym = ({children, className}: {children: React.ReactNode; className?: string}) => (
  <span className={`text-nushu-cyan text-[1.1em] font-medium ${className ?? ''}`}>{children}</span>
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
        <USym className="text-[1.2em] font-semibold">⇧</USym> (use other movement shortcuts while
        holding shift, often in conjunction with arrow keys, to expand or shrink selection)
      </>
    ),
    vim: 'v'
  },
  {id: 23, action: 'Select cursor word', keys: 'Word Select key (Num/Nav layer, tap)', vim: 'viw'},
  {
    id: 24,
    action: 'Select cursor line',
    keys: 'Word Select key (Num/Nav layer, with Shift)',
    vim: 'V'
  },
  {id: 25, action: 'Indent', keys: <USym className="text-[1.3em]">⇥</USym>, vim: '>'},
  {
    id: 26,
    action: 'Un-indent',
    keys: (
      <>
        <USym className="text-[1.3em]">⇤</USym>
      </>
    ),
    vim: '<'
  }
]

export default function ExtrasPage() {
  const ghosttyConfSnippet = `
# sends ESC d, which Zsh/Bash typically interpret as kill-word (delete next word).
keybind = alt+delete=esc:d
`

  const itermConfSnippet = `  {"Key Mappings":{"0xf702-0x320000-0x7b":{"Version":0,"Action":47,"Text":"2","Label":""},"0xf703-0x280000-0x0":{"Version":0,"Action":10,"Text":"f","Label":""},"0x7a-0x100000-0x6":{"Version":0,"Action":11,"Text":"0x1f","Label":""},"0xf703-0x2a0000-0x7c":{"Version":0,"Action":46,"Text":"1","Label":""},"0x5a-0x120000-0x6":{"Version":0,"Action":11,"Text":"0x18 0x1f","Label":""},"0xf700-0x300000-0x0":{"Version":0,"Action":7,"Text":"","Label":""},"0xf702-0x2a0000-0x7b":{"Version":0,"Action":47,"Text":"1","Label":""},"0x9-0x40000-0x0":{"Version":0,"Action":25,"Text":"Select Next Tab\nSelect Next Tab","Label":""},"0x7f-0x100000-0x33":{"Version":0,"Action":11,"Text":"0x15","Label":""},"0xf72d-0x100000-0x0":{"Version":0,"Action":8,"Text":"","Label":""},"0xf702-0x280000-0x0":{"Version":0,"Action":10,"Text":"b","Label":""},"0xf72b-0x100000-0x0":{"Version":0,"Action":4,"Text":"","Label":""},"0x74-0x100000-0x0":{"Version":0,"Action":25,"Text":"New Tab with Current Profile","Label":""},"0x54-0x120000-0x0":{"Version":0,"Action":25,"Text":"Split Vertically with Current Profile\nSplit Vertically with Current Profile","Label":""},"0xf703-0x300000-0x0":{"Version":0,"Action":11,"Text":"0x05","Label":""},"0x19-0x60000-0x0":{"Version":0,"Action":25,"Text":"Select Previous Tab\nSelect Previous Tab","Label":""},"0xf703-0x320000-0x0":{"Version":0,"Action":46,"Text":"2","Label":""},"0xf72c-0x20000-0x0":{"Version":0,"Action":9,"Text":"","Label":""},"0xf72d-0x20000-0x0":{"Version":0,"Action":8,"Text":"","Label":""},"0xf703-0x220000-0x7c":{"Version":0,"Action":46,"Text":"0","Label":""},"0x7f-0x80000-0x33":{"Version":0,"Action":11,"Text":"0x17","Label":""},"0xf729-0x100000-0x0":{"Version":0,"Action":5,"Text":"","Label":""},"0xf72c-0x100000-0x0":{"Version":0,"Action":9,"Text":"","Label":""},"0xf702-0x300000-0x7b":{"Version":0,"Action":11,"Text":"0x01","Label":""},"0xf701-0x300000-0x0":{"Version":0,"Action":6,"Text":"","Label":""},"0xf728-0x80000-0x75":{"Version":0,"Action":11,"Text":"0x1b 0x64","Label":""},"0xf702-0x220000-0x7b":{"Version":0,"Action":47,"Text":"0","Label":""}},"Touch Bar Items":{}}`

  const hammerspoonSnippet = `
local karabinerLog = hs.logger.new("karabinerSync", "info")

local KARABINER_CLI = "/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli"

-- Push a variable into Karabiner-Elements so complex modification rules
-- can react to it via variable_if / variable_unless conditions.
local function setKarabinerVariable(name, value)
  local json = string.format('{"%s": %d}', name, value)

  local task = hs.task.new(KARABINER_CLI, function(exitCode, _, stdErr)
    if exitCode ~= 0 then
      karabinerLog.ef("karabiner_cli failed (%d): %s", exitCode, stdErr)
    end
  end, { "--set-variables-from-stdin" })

  task:setInput(json)
  task:start()
end

-- Keep Karabiner's \`is_lock_screen\` variable in sync with the real lock state,
-- since Karabiner has no native way to detect this itself.
local screenWatcher = hs.caffeinate.watcher.new(function(eventType)
  if eventType == hs.caffeinate.watcher.screensDidLock then
    setKarabinerVariable("is_lock_screen", 1)
  elseif eventType == hs.caffeinate.watcher.screensDidUnlock then
    setKarabinerVariable("is_lock_screen", 0)
  end
end)

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

  // input volume 0 mutes the mic; unmuting restores a fixed level, since macOS has no input mute
  const micMuteSnippet = `
set inputVolume to input volume of (get volume settings)
if inputVolume > 0 then
\tset volume input volume 0
else
\tset volume input volume 75
end if
`

  return (
    <>
      <PageHeader
        title="Extras"
        lede="The macOS shortcuts Serenity's firmware expects, config for the apps around it, and a guide to Vim-style editing without Vim."
      />
      <PageNav
        items={[
          {id: 'macos-setup', label: 'macOS setup', icon: 'fa-regular fa-wrench-simple'},
          {id: 'config', label: 'App config', icon: 'fa-regular fa-sliders'},
          {id: 'reference', label: 'Vim-less', icon: 'fa-regular fa-ban-smoking'}
        ]}
      />
      <PageBody>
        <Section
          ruled={false}
          id="macos-setup"
          icon="fa-regular fa-wrench-simple"
          title="macOS setup"
        >
          <p>
            Most keys on the <TextLink href="/firmware">Serenity QMK</TextLink> OS, Hardware and
            Action layers send shortcuts macOS already knows. The ones below have no default, so
            they do nothing until you set them. Tick them off as you go; the ticks stay in this
            browser.
          </p>
          <MacosSetupChecklist
            extras={{
              'mic-mute': (
                <CodeBlock code={micMuteSnippet} language="applescript" label="Run AppleScript" />
              )
            }}
          />
        </Section>

        <Section ruled={false} id="config" icon="fa-regular fa-sliders" title="Application config">
          <SubSection icon="fa-regular fa-ghost" title="Ghostty">
            <p>
              Add this to your Ghostty config, at <code>~/.config/ghostty/config</code> by default.
            </p>
            <CodeBlock
              code={ghosttyConfSnippet}
              language="shellscript"
              label="~/.config/ghostty/config"
            />
          </SubSection>

          <SubSection icon="fa-regular fa-terminal" title="iTerm2">
            <p>
              Key mappings for moving with the arrow keys and modifiers. Import the preset under{' '}
              <em>
                Settings {'→'} Keys {'→'} Key Bindings {'→'} Presets… {'→'} Import…
              </em>
            </p>
            <CodeBlock
              code={itermConfSnippet}
              language="json"
              label="iTerm2 key bindings preset"
              wrap
            />
          </SubSection>

          <SubSection icon="fa-regular fa-hammer" title="Hammerspoon">
            <p>
              Lets Karabiner-Elements know when the screen is locked. Add it to your Hammerspoon
              config, at <code>~/.hammerspoon/init.lua</code> by default.
            </p>
            <CodeBlock code={hammerspoonSnippet} language="lua" label="~/.hammerspoon/init.lua" />
          </SubSection>

          <SubSection icon="fa-regular fa-robot" title="Automator">
            <p>
              An AppleScript Quick Action that toggles Dark Mode, if you&apos;d rather not use the
              Shortcuts app version in macOS setup above. Create it in Automator, then give it a
              shortcut in System Settings {'→'} Keyboard {'→'} Keyboard Shortcuts… {'→'}
              Services: ⌃⌥⇧⌘D matches the Serenity QMK Hardware layer.
            </p>
            <CodeBlock code={toggleDarkModeSnippet} language="applescript" label="Quick Action" />
          </SubSection>
        </Section>

        <Section ruled={false} id="reference" icon="fa-regular fa-ban-smoking" title="Vim-less">
          <p>
            Thinking of quitting Vim? These are the common Vim motions and commands done with
            standard shortcuts, which work in any app. They&apos;re comfortable on Serenity because
            the firmware puts modifiers and arrows on the home row. They won&apos;t replace a modal
            editor for everything, but they keep you in Insert mode far more often.
          </p>
          {/* rows rather than a table: on a phone the keys drop under the action, beside the Vim
              equivalent, instead of squeezing three columns into the width */}
          <div className="border-border bg-background overflow-hidden rounded-lg border text-[13px] md:text-sm">
            <div
              aria-hidden="true"
              className="border-border bg-card text-nushu-ink-muted hidden grid-cols-[12rem_1fr_6.5rem] gap-x-4 border-b px-4 py-2 text-xs md:grid"
            >
              <span>To do this</span>
              <span>Press</span>
              <span>Vim</span>
            </div>
            <dl>
              {vimlessRows.map((row) => (
                <div
                  key={row.id}
                  className="border-border grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b px-4 py-2.5 last:border-b-0 md:grid-cols-[12rem_1fr_6.5rem]"
                >
                  <dt className="text-nushu-ink-deep">{row.action}</dt>
                  <dd className="text-nushu-ink-strong col-start-1 md:col-start-auto">
                    {row.keys}
                  </dd>
                  <dd className="text-nushu-magenta col-start-2 row-start-1 text-right whitespace-nowrap md:col-start-auto md:row-start-auto md:text-left">
                    <span className="sr-only">Vim: </span>
                    {row.vim}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p>
            Most of what&apos;s left can be done in a modern editor with extensions or built-in
            commands. These are two VS Code extensions I maintain to fill such gaps.
          </p>
          <ul className="space-y-3">
            {[
              {
                href: 'https://marketplace.visualstudio.com/items?itemName=wheredoesyourmindgo.vscode-scotty',
                name: 'Beam Me Up, Scotty!',
                desc: 'Jump navigation inspired by clever-f'
              },
              {
                href: 'https://marketplace.visualstudio.com/items?itemName=wheredoesyourmindgo.vscode-relativity',
                name: 'Relativity_',
                desc: 'Jump lines by number relative to the current line'
              }
            ].map(({href, name, desc}) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // a keycap, like the keys: face, edge and lip from the --key-* tokens in globals.css
                  className="group flex items-center justify-between gap-4 rounded-lg border border-(--key-border) bg-(--key-face) px-4 py-3 shadow-(--key-shadow) transition hover:border-(--key-border-hover) hover:shadow-(--key-shadow-hover) motion-safe:hover:-translate-y-px"
                >
                  <span>
                    <span className="text-nushu-blue block font-medium">{name}</span>
                    <span className="text-nushu-ink-muted block text-sm">{desc}</span>
                  </span>
                  <FaIcon
                    className="fa-regular fa-arrow-up-right text-nushu-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    color="nushu.ink-faint"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </PageBody>
    </>
  )
}
