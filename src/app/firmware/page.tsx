'use client'

import FitWidth from '@/components/FitWidth'
import {useState} from 'react'
import {cn} from '@/lib/utils'
import BaseLyr from '@/components/keyboard/firmware/BaseLyr'
import NumNavLyr from '@/components/keyboard/firmware/NumNavLyr'
import SymLyr from '@/components/keyboard/firmware/SymLyr'
import FuncLyr from '@/components/keyboard/firmware/FunctionLyr'
import ActionLyr from '@/components/keyboard/firmware/ActionLyr'
import HardwareLyr from '@/components/keyboard/firmware/HardwareLyr'
import FaIcon from '@/components/FaIcon'
import QwertyLyr from '@/components/keyboard/firmware/QwertyLyr'
import MouseLyr from '@/components/keyboard/firmware/MouseLyr'
import OsLyr from '@/components/keyboard/firmware/OsLyr'
import QmkLegend from '@/components/QmkLegend'
import {ToggleGroup, ToggleGroupItem} from '@/components/ui/toggle-group'
import {Tabs} from '@/components/ui/tabs'
import {LayerTabsContent, LayerTabsList, LayerTabsTrigger} from '@/components/LayerTabs'
import {
  FeatureList,
  GitHubButton,
  PageBody,
  PageHeader,
  Section,
  TextLink,
  type Feature
} from '@/components/Page'

export type KeyboardLayout = 'planck' | 'corne'

const tabs = [
  {value: 'base', Layer: BaseLyr, label: 'Base', icon: 'fa-regular fa-house-user'},
  {value: 'mouse', Layer: MouseLyr, label: 'Mouse', icon: 'fa-regular fa-mouse'},
  {
    value: 'num-nav',
    Layer: NumNavLyr,
    label: 'Num/Nav',
    icon: 'fa-regular fa-hashtag',
    iconClassName: 'text-[15px]'
  },
  {value: 'action', Layer: ActionLyr, label: 'Action', icon: 'fa-regular fa-table-layout'},
  {value: 'hardware', Layer: HardwareLyr, label: 'Hardware', icon: 'fa-regular fa-cog'},
  {value: 'symbol', Layer: SymLyr, label: 'Symbol', icon: 'fa-regular fa-at'},
  {
    value: 'os',
    Layer: OsLyr,
    label: 'OS',
    icon: 'fa-brands fa-apple',
    iconClassName: 'text-[15px]'
  },
  {value: 'function', Layer: FuncLyr, label: 'Function', icon: 'fa-regular fa-function'},
  {value: 'qwerty', Layer: QwertyLyr, label: 'Qwerty', icon: 'fa-regular fa-typewriter'}
]

const customizations: Feature[] = [
  {
    term: 'Custom One Shot Mods',
    body: 'A tailored feature enabling dynamic stacking of modifiers across principal layers, allowing any combination to be triggered individually or together, without the need to hold modifier keys during subsequent key press on the Base, Qwerty, or Function layers.'
  },
  {
    term: 'Backspace + Shift',
    body: (
      <>
        Backspace performs Forward Delete (del) when held with Shift, and deletes to the end of the
        line with Shift+Cmd. Uses{' '}
        <TextLink href="https://github.com/getreuer/qmk-modules/tree/main/custom_shift_keys">
          Custom Shift Keys
        </TextLink>{' '}
        by Pascal Getreuer.
      </>
    )
  },
  {
    term: 'Custom App Switcher',
    body: 'A firmware‑level feature within the OS Layer that provides app cycling and fast switching that replicates Cmd+Tab/Cmd+Shift+Tab shortcuts.'
  },
  {
    term: 'Symbol Tap Guard',
    body: "Custom logic on the Symbol layer that suppresses unintended Shift during fast layer activations, ensuring quick taps send unshifted symbols (e.g., '=' instead of '+'); deliberate Shift still produces the shifted variant when intended."
  },
  {
    term: 'Temporary Home Row Mods w/ Base Layer',
    body: "Tap the Num/Nav or Symbol key once, then press it again and hold to temporarily use that side's home‑row modifiers on the Base layer. Useful for certain edge cases where custom one shot mods (see above) are insufficient."
  },
  {
    term: 'Long‑press dual keys',
    body: (
      <>
        For select shortcuts, perform primary action on tap or an alternate action on hold, giving
        each key two functions without relying on QMK Tap Dance timing. See{' '}
        <TextLink href="https://getreuer.info/posts/keyboards/triggers/index.html#tap-vs.-long-press">
          this article
        </TextLink>{' '}
        for more info about the implementation.
      </>
    )
  },
  {
    term: 'Dual‑Role Layer Holds',
    tag: '11–12 key bottom row',
    body: 'The outer layer hold keys (specifically Action and Hardware) activate their layer normally; when a same‑side modifier is held simultaneously, they instead hold Shift on that side (LShift/RShift). This enables effortless Shift+mod combinations using pinky-ring-middle-index fingers.'
  },
  {
    term: 'Safe Arrow Cluster',
    tag: '11–12 key bottom row',
    body: 'The bottom‑right arrow group is tuned for quick taps without accidental modifier activation; short presses always send arrow keycodes, guarding against nearby mod‑taps for fast, reliable navigation.'
  }
]

const designNotes: Feature[] = [
  {term: 'OS', body: 'Optimized primarily for macOS behavior and shortcuts.'},
  {
    term: 'Vim-style directional mnemonics',
    body: 'Shortcuts and key placements often follow a left–down–up–right pattern (H‑J‑K‑L), mirroring Vim navigation for fast, intuitive recall across layers.'
  },
  {
    term: 'Tri‑layer access',
    body: "Uses QMK's tri‑layer logic to reach the OS and Function layers by combining principal layer holds; the appropriate pair momentarily exposes the target layer for quick commands."
  },
  {
    term: 'Layer Lock',
    body: "QMK's Layer Lock key sits in a consistent position on the principal layers: tap it to stay in the current layer without holding the layer key; tap again or press Escape to release."
  },
  {
    term: 'Caps Word',
    body: 'Activated by double‑tapping the Left Shift key, this feature enables a quick temporary Caps Lock mode for typing uppercase words without fully toggling Caps Lock.'
  },
  {
    term: 'Mouse layer',
    body: 'A dedicated layer providing smooth, responsive cursor control and scrolling, ideal for quick pointer adjustments without leaving the home row.'
  },
  {
    term: 'Qwerty layer',
    body: 'Full standard QWERTY layout which can be toggled on; useful for app and game compatibility.'
  }
]

export default function FirmwarePage() {
  const [layout, setLayout] = useState<KeyboardLayout>('planck')

  const handleLayoutChange = (value: string[]) => {
    const next = value[0]
    if (next) setLayout(next as KeyboardLayout)
  }

  return (
    <>
      <PageHeader
        title="Firmware"
        lede="Serenity built into your keyboard with QMK, plus layers for numbers, navigation, symbols, the mouse and the OS."
      >
        <GitHubButton href="https://github.com/wheredoesyourmindgo/serenity-qmk">
          serenity-qmk
        </GitHubButton>
      </PageHeader>

      <div className="flex flex-col items-center px-4">
        <Tabs defaultValue="base" className="w-full items-center gap-0">
          <FitWidth>
            <div className="grid *:col-start-1 *:row-start-1">
              {tabs.map(({value, Layer}) => (
                <LayerTabsContent key={value} value={value}>
                  <Layer layout={layout} />
                </LayerTabsContent>
              ))}
            </div>
          </FitWidth>

          <div className="mt-10 max-w-full">
            <LayerTabsList>
              {tabs.map((tab) => (
                <LayerTabsTrigger key={tab.value} value={tab.value}>
                  <span className="flex h-4 items-center justify-center">
                    <FaIcon className={cn(tab.icon, tab.iconClassName)} />
                  </span>
                  <span>{tab.label}</span>
                </LayerTabsTrigger>
              ))}
            </LayerTabsList>
          </div>
        </Tabs>

        <fieldset className="mt-8 flex flex-col items-center gap-2">
          <legend className="text-nushu-ink-muted mb-2 w-full text-center text-xs">
            Bottom row
          </legend>
          <ToggleGroup value={[layout]} onValueChange={handleLayoutChange}>
            <ToggleGroupItem
              value="planck"
              aria-label="11-12 keys"
              className="data-pressed:text-nushu-blue px-3"
            >
              11–12 keys <span className="text-nushu-ink-muted pl-1.5 italic">Planck</span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="corne"
              aria-label="5-6 keys"
              className="data-pressed:text-nushu-blue px-3"
            >
              5–6 keys <span className="text-nushu-ink-muted pl-1.5 italic">Corne</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </fieldset>
      </div>

      <PageBody className="mt-12">
        <QmkLegend />

        <Section
          id="highlights"
          icon="fa-regular fa-sparkles"
          title="QMK customizations"
          className="mt-14"
        >
          <FeatureList items={customizations} />
        </Section>

        <Section icon="fa-regular fa-compass-drafting" title="Layout design & logic">
          <FeatureList items={designNotes} />
        </Section>
      </PageBody>
    </>
  )
}
