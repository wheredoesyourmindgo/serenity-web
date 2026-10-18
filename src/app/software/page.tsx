'use client'

import FitWidth from '@/components/FitWidth'
import {cn} from '@/lib/utils'
import BaseLyr from '@/components/keyboard/software/BaseLyr'
import FaIcon from '@/components/FaIcon'
import FnLyr from '@/components/keyboard/software/FnLyr'
import QmkLegend from '@/components/QmkLegend'
import {Tabs} from '@/components/ui/tabs'
import {LayerTabsContent, LayerTabsList, LayerTabsTrigger} from '@/components/LayerTabs'
import {
  ActionButton,
  GitHubButton,
  PageBody,
  PageHeader,
  Section,
  TextLink
} from '@/components/Page'

const KARABINER_RULES_URL =
  'https://raw.githubusercontent.com/wheredoesyourmindgo/serenity-karabiner/main/serenity.json'
const KARABINER_IMPORT_URL = `karabiner://karabiner/assets/complex_modifications/import?url=${encodeURIComponent(KARABINER_RULES_URL)}`

const tabs = [
  {value: 'base', label: 'Base', icon: 'fa-regular fa-house-user'},
  {value: 'fn', label: 'FN Layer', icon: 'fa-regular fa-keyboard', iconClassName: 'text-[15px]'}
]

export default function SoftwarePage() {
  return (
    <>
      <PageHeader
        title="Software"
        lede="Serenity on any Mac keyboard, laptop included, with Karabiner-Elements. No new hardware needed."
      >
        <ActionButton href={KARABINER_IMPORT_URL} icon="fa-regular fa-arrow-down-to-line">
          Install in Karabiner
        </ActionButton>
        <GitHubButton href="https://github.com/wheredoesyourmindgo/serenity-karabiner">
          serenity-karabiner
        </GitHubButton>
      </PageHeader>

      <div className="flex flex-col items-center px-4">
        <Tabs defaultValue="base" className="w-full items-center gap-0">
          <FitWidth>
            <div className="grid *:col-start-1 *:row-start-1">
              <LayerTabsContent value="base">
                <BaseLyr />
              </LayerTabsContent>
              <LayerTabsContent value="fn">
                <FnLyr />
              </LayerTabsContent>
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
      </div>

      <PageBody className="mt-12">
        <QmkLegend />

        <Section id="install" icon="fa-regular fa-arrow-down-to-line" title="Install">
          <p>
            Install{' '}
            <TextLink href="https://karabiner-elements.pqrs.org">Karabiner-Elements</TextLink>, then
            click Install in Karabiner at the top of this page. Karabiner asks to import the
            Serenity rules. Click Import, then Enable All. Your other Karabiner settings and rules
            stay as they are.
          </p>
          <p>
            The order of the rules matters. Enable All keeps it right. If you turn rules on one at a
            time, keep Serenity: Layout at the bottom of the list.
          </p>
          <p>
            The rules apply only to Apple keyboards and turn off at the lock screen, so you can type
            your password in QWERTY. Karabiner can't tell when the screen is locked by itself. The{' '}
            <TextLink href="/extras#config">Hammerspoon snippet</TextLink> tells it.
          </p>
        </Section>
      </PageBody>
    </>
  )
}
