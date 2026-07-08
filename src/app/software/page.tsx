'use client'

import {cn} from '@/lib/utils'
import BaseLyr from '@/components/keyboard/software/BaseLyr'
import FaIcon from '@/components/FaIcon'
import FnLyr from '@/components/keyboard/software/FnLyr'
import QmkLegend from '@/components/QmkLegend'
import {Tabs, TabsList, TabsTab, TabsPanel} from '@/components/animate-ui/primitives/base/tabs'

function GitHubIcon() {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function SerenityKarabinerButton() {
  return (
    <a
      href="https://github.com/wheredoesyourmindgo/serenity-karabiner"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded border border-black/30 bg-[#24292e] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:border-black/50 hover:bg-[#2f363d]/90 dark:border-white/30 dark:hover:border-white/50"
    >
      <GitHubIcon />
      Serenity Karabiner
    </a>
  )
}

const tabs = [
  {value: 'base', label: 'Base', icon: 'fa-regular fa-house-user'},
  {value: 'fn', label: 'FN Layer', icon: 'fa-regular fa-keyboard', iconClassName: 'text-[15px]'}
]

export default function SoftwarePage() {
  return (
    <div className="relative container mx-auto px-4">
      <div className="absolute top-0 right-0 mr-4 hidden md:block">
        <SerenityKarabinerButton />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-solarized-green pt-4 pb-4 text-6xl font-light tracking-[-0.00833em] md:pt-8 md:pb-8">
          Software
        </h2>

        <Tabs defaultValue="base" className="flex w-full flex-col items-center">
          <div className="grid h-[190px] origin-center scale-[0.40] sm:h-[300px] sm:scale-[0.60] md:h-auto md:origin-[initial] md:scale-100 [&>*]:col-start-1 [&>*]:row-start-1">
            <TabsPanel value="base" layout={false}>
              <BaseLyr />
            </TabsPanel>
            <TabsPanel value="fn" layout={false}>
              <FnLyr />
            </TabsPanel>
          </div>

          <div className="bg-card mt-12 max-w-full">
            <TabsList className="border-border flex overflow-x-auto border-b">
              {tabs.map((tab) => (
                <TabsTab
                  key={tab.value}
                  value={tab.value}
                  className={cn(
                    'flex shrink-0 flex-col items-center gap-1 border-b-2 px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors',
                    'data-[active]:border-solarized-blue data-[active]:text-solarized-blue',
                    'dark:data-[active]:border-solarized-cyan dark:data-[active]:text-solarized-cyan',
                    'text-muted-foreground hover:text-foreground border-transparent'
                  )}
                >
                  <span className="flex h-4 items-center justify-center">
                    <FaIcon className={cn(tab.icon, tab.iconClassName)} />
                  </span>
                  <span>{tab.label}</span>
                </TabsTab>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-x-24 gap-y-12">
        <div>
          <QmkLegend />
        </div>
        <div className="md:hidden">
          <SerenityKarabinerButton />
        </div>
      </div>
    </div>
  )
}
