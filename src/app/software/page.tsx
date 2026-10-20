'use client'

import FitWidth from '@/components/FitWidth'
import {cn} from 'cn'
import BaseLyr from '@/components/keyboard/software/BaseLyr'
import FaIcon from '@/components/FaIcon'
import FnLyr from '@/components/keyboard/software/FnLyr'
import QmkLegend from '@/components/QmkLegend'
import {Tabs} from '@/components/ui/tabs'
import {LayerTabsContent, LayerTabsList, LayerTabsTrigger} from '@/components/LayerTabs'
import KarabinerInstallDialog from '@/components/KarabinerInstallDialog'
import {GitHubButton, PageBody, PageHeader, Section, TextLink} from '@/components/Page'

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
        <KarabinerInstallDialog />
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
        <QmkLegend only={['custom-shift', 'one-shot-mod', 'special', 'layer-tap', 'mod-tap']} />

        <Section id="install" icon="fa-regular fa-arrow-down-to-line" title="Install">
          <p>
            Click Install in Karabiner at the top of this page. It walks you through installing{' '}
            <TextLink href="https://karabiner-elements.pqrs.org">Karabiner-Elements</TextLink>,
            importing the Serenity rules and turning them on.
          </p>
          <p>
            The order of the rules matters. Enable All keeps it right. If you turn rules on one at a
            time, keep Serenity: Layout at the bottom of the list.
          </p>
          <p>
            To update, delete the rules that start with Serenity: in Karabiner, and delete the copy
            your last import saved in <code>~/.config/karabiner/assets/complex_modifications</code>,
            then install again. Karabiner keeps a copy of every import, so skipping that lists
            Serenity twice. The{' '}
            <TextLink href="https://github.com/wheredoesyourmindgo/serenity-karabiner#update">
              README
            </TextLink>{' '}
            has a command that does it.
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
