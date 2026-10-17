'use client'

import FitWidth from '@/components/FitWidth'
import {cn} from '@/lib/utils'
import BaseLyr from '@/components/keyboard/software/BaseLyr'
import FaIcon from '@/components/FaIcon'
import FnLyr from '@/components/keyboard/software/FnLyr'
import QmkLegend from '@/components/QmkLegend'
import {Tabs} from '@/components/ui/tabs'
import {LayerTabsContent, LayerTabsList, LayerTabsTrigger} from '@/components/LayerTabs'
import {GitHubButton, PageBody, PageHeader} from '@/components/Page'

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
      </PageBody>
    </>
  )
}
