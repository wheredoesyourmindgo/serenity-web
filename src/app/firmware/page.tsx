'use client'

import {useState} from 'react'
import {cn} from '@/lib/cn'
import BaseLyr from '@/components/keyboard/firmware/BaseLyr'
import NumNavLyr from '@/components/keyboard/firmware/NumNavLyr'
import SymLyr from '@/components/keyboard/firmware/SymLyr'
import FuncLyr from '@/components/keyboard/firmware/FunctionLyr'
import ActionLyr from '@/components/keyboard/firmware/ActionLyr'
import MediaLyr from '@/components/keyboard/firmware/MediaLyr'
import FaIcon from '@/components/FaIcon'
import QwertyLyr from '@/components/keyboard/firmware/QwertyLyr'
import MouseLyr from '@/components/keyboard/firmware/MouseLyr'
import OsLyr from '@/components/keyboard/firmware/OsLyr'
import QmkLegend from '@/components/QmkLegend'
import {ToggleGroup, ToggleGroupItem} from '@/components/animate-ui/components/radix/toggle-group'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from '@/components/animate-ui/primitives/radix/tabs'

export type KeyboardLayout = 'planck' | 'corne'

function GitHubIcon() {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function SerenityQmkButton() {
  return (
    <a
      href="https://github.com/wheredoesyourmindgo/serenity-qmk"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded border border-black/30 bg-[#24292e] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:border-black/50 hover:bg-[#2f363d]/90 dark:border-white/30 dark:hover:border-white/50"
    >
      <GitHubIcon />
      Serenity QMK
    </a>
  )
}

const tabs = [
  {value: 'base', label: 'Base', icon: 'fa-regular fa-house-user'},
  {value: 'mouse', label: 'Mouse', icon: 'fa-regular fa-mouse'},
  {value: 'num-nav', label: 'Num/Nav', icon: 'fa-regular fa-hashtag', iconClassName: 'text-[15px]'},
  {value: 'action', label: 'Action', icon: 'fa-regular fa-table-layout'},
  {value: 'media', label: 'Media', icon: 'fa-regular fa-cog'},
  {value: 'symbol', label: 'Symbol', icon: 'fa-regular fa-at'},
  {value: 'os', label: 'OS', icon: 'fa-brands fa-apple', iconClassName: 'text-[15px]'},
  {value: 'function', label: 'Function', icon: 'fa-regular fa-function'},
  {value: 'qwerty', label: 'Qwerty', icon: 'fa-regular fa-typewriter'}
]

export default function FirmwarePage() {
  const [layout, setLayout] = useState<KeyboardLayout>('planck')

  const handleLayoutChange = (newLayout: string) => {
    if (newLayout) setLayout(newLayout as KeyboardLayout)
  }

  return (
    <div className="relative container mx-auto px-4">
      <div className="absolute top-0 right-0 mr-4 hidden md:block">
        <SerenityQmkButton />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-solarized-green pt-4 pb-4 text-[3.75rem] font-light tracking-[-0.00833em] md:pt-8 md:pb-8">
          Firmware
        </h2>

        <Tabs defaultValue="base" className="flex w-full flex-col items-center">
          <div className="h-[160px] origin-center scale-[0.47] sm:h-[200px] sm:scale-[0.65] md:h-auto md:origin-[initial] md:scale-100">
            <TabsContent value="base" layout={false}><BaseLyr layout={layout} /></TabsContent>
            <TabsContent value="mouse" layout={false}><MouseLyr layout={layout} /></TabsContent>
            <TabsContent value="num-nav" layout={false}><NumNavLyr layout={layout} /></TabsContent>
            <TabsContent value="action" layout={false}><ActionLyr layout={layout} /></TabsContent>
            <TabsContent value="media" layout={false}><MediaLyr layout={layout} /></TabsContent>
            <TabsContent value="symbol" layout={false}><SymLyr layout={layout} /></TabsContent>
            <TabsContent value="os" layout={false}><OsLyr layout={layout} /></TabsContent>
            <TabsContent value="function" layout={false}><FuncLyr layout={layout} /></TabsContent>
            <TabsContent value="qwerty" layout={false}><QwertyLyr layout={layout} /></TabsContent>
          </div>

          <div className="bg-card mt-12 max-w-full">
            <TabsList className="border-border flex overflow-x-auto border-b">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={cn(
                    'flex shrink-0 flex-col items-center gap-1 border-b-2 px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors',
                    'data-[state=active]:border-solarized-blue data-[state=active]:text-solarized-blue',
                    'dark:data-[state=active]:border-solarized-cyan dark:data-[state=active]:text-solarized-cyan',
                    'data-[state=inactive]:border-transparent text-muted-foreground hover:text-foreground'
                  )}
                >
                  <span className="flex h-4 items-center justify-center">
                    <FaIcon className={cn(tab.icon, tab.iconClassName)} />
                  </span>
                  <span>{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-x-24 gap-y-12">
        <div className="flex justify-center">
          <fieldset>
            <legend className="text-muted-foreground mb-2 w-full text-center text-sm font-medium">
              Bottom Row Layout
            </legend>
            <ToggleGroup
              type="single"
              value={layout}
              onValueChange={handleLayoutChange}
              className="flex-col"
              highlightClassName="bg-solarized-blue/10 dark:bg-solarized-cyan/10"
            >
              <ToggleGroupItem
                value="planck"
                aria-label="11-12 keys"
                className="data-[state=on]:text-solarized-blue dark:data-[state=on]:text-solarized-cyan justify-start px-4"
              >
                11-12 keys <span className="inline pl-2 italic">(Planck)</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="corne"
                aria-label="5-6 keys"
                className="data-[state=on]:text-solarized-blue dark:data-[state=on]:text-solarized-cyan justify-start px-4"
              >
                5-6 keys <span className="inline pl-2 italic">(Corne)</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </fieldset>
        </div>

        <div>
          <QmkLegend />
        </div>

        <div className="w-full">
          <div
            id="highlights"
            className="bg-card border-border mx-auto mt-12 max-w-[900px] rounded-xl border p-4 md:p-6"
          >
            <h4 className="mb-6 text-center text-[2.125rem] font-normal">Highlights</h4>

            <div className="mt-8">
              <h5 className="text-solarized-green mb-4 text-2xl font-normal">QMK Customizations</h5>
              <ul className="mb-4 space-y-4 pl-6">
                <li>
                  <p>
                    <strong>Custom One Shot Mods</strong> — a tailored feature enabling dynamic
                    stacking of modifiers across principal layers, allowing any combination to be
                    triggered individually or together, without the need to hold modifier keys
                    during subsequent key press on the Base, Qwerty, or Function layers.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Backspace + Shift</strong> — Backspace performs Forward Delete (del)
                    when held with Shift.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Custom App Switcher</strong> — a firmware‑level feature within the OS
                    Layer that provides app cycling and fast switching that replicates
                    Cmd+Tab/Cmd+Shift+Tab shortcuts.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Symbol Tap Guard</strong> — custom logic on the Symbol layer that
                    suppresses unintended Shift during fast layer activations, ensuring quick taps
                    send unshifted symbols (e.g., '=' instead of '+'); deliberate Shift still
                    produces the shifted variant when intended.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Layer Lock</strong> — custom shortcut toggle on principal layers
                    (located in consistent position): tap once to lock the layer; tap again or press
                    Escape to release, letting you remain in the layer without holding the layer key
                    continuously.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Temporary Home Row Mods w/ Base Layer</strong> — tap the Num/Nav or
                    Symbol key once, then press it again and hold to temporarily use that side's
                    home‑row modifiers on the Base layer. Useful for certain edge cases where custom
                    one shot mods (see above) are insufficient.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Long‑press dual keys</strong> — For select shortcuts, perform primary
                    action on tap or an alternate action on hold, giving each key two functions
                    without relying on QMK Tap Dance timing. See{' '}
                    <a
                      href="https://getreuer.info/posts/keyboards/triggers/index.html#tap-vs.-long-press"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline hover:opacity-80"
                    >
                      this article
                    </a>{' '}
                    for more info about the implementation.
                  </p>
                </li>
                <p className="text-muted-foreground mt-4 mb-4 pt-4 text-sm font-semibold">
                  <em>11-12 Key Bottom Row Layouts Only</em>
                </p>
                <li>
                  <p>
                    <strong>Dual‑Role Layer Holds</strong> — the outer layer hold keys (specifically
                    Action and Media) activate their layer normally; when a same‑side modifier is
                    held simultaneously, they instead hold Shift on that side (LShift/RShift). This
                    enables effortless Shift+mod combinations using pinky-ring-middle-index fingers.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Safe Arrow Cluster</strong> — the bottom‑right arrow group is tuned for
                    quick taps without accidental modifier activation; short presses always send
                    arrow keycodes, guarding against nearby mod‑taps for fast, reliable navigation.
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h5 className="text-solarized-green mb-4 text-2xl font-normal">
                Layout Design &amp; Logic
              </h5>
              <ul className="mb-4 space-y-4 pl-6">
                <li>
                  <p>
                    <strong>OS</strong> — optimized primarily for macOS behavior and shortcuts
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Vim-style directional mnemonics</strong> — shortcuts and key placements
                    often follow a left–down–up–right pattern (H‑J‑K‑L), mirroring Vim navigation
                    for fast, intuitive recall across layers.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Tri‑layer access</strong> — uses QMK's tri‑layer logic to reach the OS
                    and Function layers by combining principal layer holds; the appropriate pair
                    momentarily exposes the target layer for quick commands.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Caps Word</strong> — activated by double‑tapping the Left Shift key,
                    this feature enables a quick temporary Caps Lock mode for typing uppercase words
                    without fully toggling Caps Lock.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Mouse layer</strong> — a dedicated layer providing smooth, responsive
                    cursor control and scrolling, ideal for quick pointer adjustments without
                    leaving the home row.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Qwerty layer</strong> — full standard QWERTY layout which can be toggled
                    on; useful for app and game compatibility.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <SerenityQmkButton />
        </div>
      </div>
    </div>
  )
}
