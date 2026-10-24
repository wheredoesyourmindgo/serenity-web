import FaIcon from '@/components/FaIcon'
import CodeBlock from '@/components/CodeBlock'
import {Kbd, PageBody, PageHeader, Section, SubSection, TextLink} from '@/components/Page'
import MacosSetupChecklist from '@/components/MacosSetupChecklist'
import PageNav from '@/components/PageNav'

const USym = ({children, className}: {children: React.ReactNode; className?: string}) => (
  <span className={`text-nushu-cyan text-[1.1em] font-medium ${className ?? ''}`}>{children}</span>
)

// an aside in a row, like "(Num/Nav layer)": smaller and quieter than the keys it qualifies
const Note = ({children}: {children: React.ReactNode}) => (
  <span className="text-nushu-ink-muted text-xs">{children}</span>
)

type VimlessRow = {
  vim: React.ReactNode
  action: string
  keys: React.ReactNode
  // true for VS Code defaults; native Mac text fields don't have these
  editors?: boolean
}

type VimlessGroup = {title: string; rows: VimlessRow[]}

const vimlessGroups: VimlessGroup[] = [
  {
    title: 'Move',
    rows: [
      {
        vim: 'h, j, k, l',
        action: 'Move',
        keys: (
          <>
            <Kbd>←</Kbd> <Kbd>↓</Kbd> <Kbd>↑</Kbd> <Kbd>→</Kbd>
          </>
        )
      },
      {vim: 'b', action: 'Move to start of word', keys: <Kbd>⌥ ←</Kbd>},
      {vim: 'e', action: 'Move to end of word', keys: <Kbd>⌥ →</Kbd>},
      {
        vim: '^',
        action: 'Move to first character of line',
        keys: (
          <>
            <Kbd>⌘ ←</Kbd> or <Kbd>Home</Kbd>
          </>
        ),
        editors: true
      },
      {
        vim: '0',
        action: 'Move to start of line',
        keys: (
          <>
            <Kbd>⌘ ←</Kbd>{' '}
            <Note>
              (twice in code editors, or <Kbd>Home</Kbd> twice)
            </Note>
          </>
        )
      },
      {
        vim: '$',
        action: 'Move to end of line',
        keys: (
          <>
            <Kbd>⌘ →</Kbd>{' '}
            <Note>
              (or <Kbd>End</Kbd> in code editors)
            </Note>
          </>
        )
      },
      {vim: 'gg', action: 'Jump to beginning of document', keys: <Kbd>⌘ ↑</Kbd>},
      {vim: 'G', action: 'Jump to end of document', keys: <Kbd>⌘ ↓</Kbd>},
      {
        vim: (
          <>
            <USym>⌃</USym> b
          </>
        ),
        action: 'Page up',
        keys: (
          <>
            Page Up key <Note>(Num/Nav layer)</Note>
          </>
        )
      },
      {
        vim: (
          <>
            <USym>⌃</USym> f
          </>
        ),
        action: 'Page down',
        keys: (
          <>
            Page Down key <Note>(Num/Nav layer)</Note>
          </>
        )
      },
      {vim: ':42', action: 'Go to line', keys: <Kbd>⌃ G</Kbd>, editors: true},
      {
        vim: '%',
        action: 'Jump to matching bracket',
        keys: <Kbd>⇧ ⌘ \</Kbd>,
        editors: true
      }
    ]
  },
  {
    title: 'Delete',
    rows: [
      {vim: 'X', action: 'Delete previous character', keys: <Kbd>⌫</Kbd>},
      {vim: 'x', action: 'Delete character', keys: <Kbd>⌦</Kbd>},
      {vim: 'db', action: 'Delete to start of word', keys: <Kbd>⌥ ⌫</Kbd>},
      {vim: 'de', action: 'Delete to end of word', keys: <Kbd>⌥ ⌦</Kbd>},
      {vim: 'd0', action: 'Delete to start of line', keys: <Kbd>⌘ ⌫</Kbd>},
      {
        vim: 'D',
        action: 'Delete to end of line',
        keys: (
          <>
            <Kbd>⌘ ⌦</Kbd> or <Kbd>⌃ K</Kbd>
          </>
        )
      },
      {vim: 'xp', action: 'Swap two characters', keys: <Kbd>⌃ T</Kbd>}
    ]
  },
  {
    title: 'Clipboard and undo',
    rows: [
      {
        vim: 'u',
        action: 'Undo',
        keys: (
          <>
            Undo key <Note>(Num/Nav layer)</Note>
          </>
        )
      },
      {
        vim: (
          <>
            <USym>⌃</USym> r
          </>
        ),
        action: 'Redo',
        keys: (
          <>
            Redo key <Note>(Num/Nav layer)</Note>
          </>
        )
      },
      {
        vim: 'd',
        action: 'Cut',
        keys: (
          <>
            Cut key <Note>(Num/Nav layer)</Note>
          </>
        )
      },
      {
        vim: 'y',
        action: 'Copy',
        keys: (
          <>
            Copy key <Note>(Num/Nav layer)</Note>
          </>
        )
      },
      {
        vim: 'p',
        action: 'Paste',
        keys: (
          <>
            Paste key <Note>(Num/Nav layer)</Note>
          </>
        )
      },
      {
        vim: 'dd, yy',
        action: 'Cut or copy line',
        keys: 'Cut or Copy key with nothing selected',
        editors: true
      }
    ]
  },
  {
    title: 'Select',
    rows: [
      {
        vim: 'v',
        action: 'Selection (Visual mode)',
        keys: (
          <>
            <Kbd>⇧</Kbd> with any movement above, to grow or shrink the selection
          </>
        )
      },
      {
        vim: 'viw',
        action: 'Select cursor word',
        keys: (
          <>
            Word Select key <Note>(Num/Nav layer)</Note>; tap again to add the next word
          </>
        )
      },
      {
        vim: 'V',
        action: 'Select cursor line',
        keys: 'Word Select key with Shift; tap again to add the next line'
      },
      {
        vim: 'gn',
        action: 'Add the next match to the selection',
        keys: <Kbd>⌘ D</Kbd>,
        editors: true
      }
    ]
  },
  {
    title: 'Lines',
    rows: [
      {
        vim: '>>',
        action: 'Indent',
        keys: (
          <>
            <Kbd>⌘ ]</Kbd>, or <Kbd>⇥</Kbd> <Note>(with lines selected)</Note>
          </>
        ),
        editors: true
      },
      {
        vim: '<<',
        action: 'Un-indent',
        keys: (
          <>
            <Kbd>⌘ [</Kbd> or <Kbd>⇤</Kbd>
          </>
        ),
        editors: true
      },
      {vim: 'o', action: 'Open line below', keys: <Kbd>⌘ ↵</Kbd>, editors: true},
      {
        vim: 'O',
        action: 'Open line above',
        keys: <Kbd>⇧ ⌘ ↵</Kbd>,
        editors: true
      },
      {vim: 'ddp', action: 'Move line down', keys: <Kbd>⌥ ↓</Kbd>, editors: true},
      {vim: 'ddkP', action: 'Move line up', keys: <Kbd>⌥ ↑</Kbd>, editors: true},
      {
        vim: 'yyp',
        action: 'Duplicate line',
        keys: <Kbd>⇧ ⌥ ↓</Kbd>,
        editors: true
      },
      {vim: 'J', action: 'Join lines', keys: <Kbd>⌃ J</Kbd>, editors: true}
    ]
  },
  {
    title: 'Search',
    rows: [
      {vim: '/', action: 'Find', keys: <Kbd>⌘ F</Kbd>},
      {vim: 'n', action: 'Next match', keys: <Kbd>⌘ G</Kbd>},
      {vim: 'N', action: 'Previous match', keys: <Kbd>⇧ ⌘ G</Kbd>},
      {
        vim: '*',
        action: 'Find word under cursor',
        keys: (
          <>
            Word Select key, then <Kbd>⌘ E</Kbd>, then <Kbd>⌘ G</Kbd>
          </>
        )
      },
      {
        vim: ':%s',
        action: 'Find and replace',
        keys: <Kbd>⌥ ⌘ F</Kbd>,
        editors: true
      }
    ]
  },
  {
    title: 'Files',
    rows: [
      {vim: ':w', action: 'Save', keys: <Kbd>⌘ S</Kbd>},
      {
        vim: ':q',
        action: 'Close, or quit the app',
        keys: (
          <>
            <Kbd>⌘ W</Kbd>, <Kbd>⌘ Q</Kbd>
          </>
        )
      }
    ]
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
          {id: 'reference', label: 'Vim-less', icon: 'fa-regular fa-smoking'}
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

        <Section ruled={false} id="reference" icon="fa-regular fa-smoking" title="Vim-less">
          <p>
            Thinking of quitting Vim? These are the common Vim motions and commands done with
            standard Mac shortcuts. Most work in any app; the ones tagged <em>code editors</em> are
            VS Code&apos;s defaults, and other editors have close equivalents. They&apos;re
            comfortable on Serenity because the firmware puts modifiers and arrows on the home row.
            They won&apos;t replace a modal editor for everything, but they&apos;ll keep you in
            Insert mode far more often if you can&apos;t quit cold turkey.
          </p>
          {/* rows rather than a table: on a phone the keys drop under the action, beside the Vim
              command, instead of squeezing three columns into the width */}
          <div className="border-border bg-background overflow-hidden rounded-lg border text-[13px] md:text-sm [&>div:last-child>dl>div:last-child]:border-b-0">
            <div
              aria-hidden="true"
              className="border-border bg-card text-nushu-ink-muted hidden grid-cols-[5rem_14rem_1fr] gap-x-4 border-b px-4 py-2 text-xs md:grid"
            >
              <span>Vim</span>
              <span>To do this</span>
              <span>Press</span>
            </div>
            {vimlessGroups.map((group) => (
              <div key={group.title}>
                <h3 className="border-border text-nushu-ink-muted border-b px-4 pt-4 pb-1.5 text-xs font-medium tracking-wide uppercase">
                  {group.title}
                </h3>
                <dl>
                  {group.rows.map((row) => (
                    <div
                      key={row.action}
                      className="border-border grid grid-cols-[4.5rem_1fr] gap-x-4 gap-y-1 border-b px-4 py-2.5 md:grid-cols-[5rem_14rem_1fr]"
                    >
                      <dt className="text-nushu-magenta row-span-2 whitespace-nowrap md:row-span-1">
                        {row.vim}
                      </dt>
                      <dd className="text-nushu-ink-deep flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        {row.action}
                        {row.editors && (
                          <span className="text-nushu-ink-muted border-border rounded-full border px-2 text-[11px] leading-normal">
                            code editors
                          </span>
                        )}
                      </dd>
                      <dd className="text-nushu-ink-strong col-start-2 md:col-start-auto">
                        <span className="sr-only">Press: </span>
                        {row.keys}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p>
            Native Mac text fields also take Emacs-style keys: <Kbd>⌃ A</Kbd> and <Kbd>⌃ E</Kbd> for
            the start and end of the line, <Kbd>⌃ K</Kbd> to cut to the end of the line, and{' '}
            <Kbd>⌃ Y</Kbd> to paste it back.
          </p>
          <p>
            What&apos;s left, like text objects (<code>ciw</code>), the dot repeat and macros, is
            where a modal editor still earns its keep, though a modern editor covers a lot of it
            with extensions or built-in commands. These are two VS Code extensions I maintain to
            fill such gaps.
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
