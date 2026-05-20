'use client'

import {useState} from 'react'
import {cn} from '@/lib/cn'
import BaseLyr from '@/components/keyboard/software/BaseLyr'
import FaIcon from '@/components/FaIcon'
import FnLyr from '@/components/keyboard/software/FnLyr'
import QmkLegend from '@/components/QmkLegend'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

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
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-white bg-[#24292e] border border-black/30 rounded hover:bg-[#2f363d]/90 hover:border-black/50 dark:border-white/30 dark:hover:border-white/50 transition-colors"
    >
      <GitHubIcon />
      Serenity Karabiner
    </a>
  )
}

function TabPanel({children, value, index, ...other}: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`keyboard-layer-tabpanel-${index}`}
      aria-labelledby={`keyboard-layer-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `keyboard-layer-tab-${index}`,
    'aria-controls': `keyboard-layer-tabpanel-${index}`
  }
}

const tabs = [
  {label: 'Base', icon: 'fa-regular fa-house-user'},
  {label: 'FN Layer', icon: 'fa-regular fa-keyboard', iconClassName: 'text-[15px]'}
]

export default function SoftwarePage() {
  const [value, setValue] = useState(0)

  return (
    <div className="container mx-auto px-4 relative">
      <div className="mr-4 absolute right-0 top-0 hidden md:block">
        <SerenityKarabinerButton />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="pt-4 pb-4 md:pt-8 md:pb-8 text-[3.75rem] font-light tracking-[-0.00833em] text-solarized-green">
          Software
        </h2>

        <div
          className="scale-[0.40] sm:scale-[0.60] md:scale-100 origin-center md:origin-[initial] h-[190px] sm:h-[300px] md:h-auto"
        >
          <TabPanel value={value} index={0}>
            <BaseLyr />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FnLyr />
          </TabPanel>
        </div>

        <div className="mt-12 bg-card max-w-full">
          <div
            role="tablist"
            aria-label="Keyboard Layer tabs"
            className="flex overflow-x-auto border-b border-border"
          >
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                role="tab"
                onClick={() => setValue(idx)}
                className={cn(
                  'flex flex-col items-center px-3 py-2 text-xs font-medium min-w-fit gap-1 border-b-2 transition-colors shrink-0',
                  value === idx
                    ? 'border-solarized-blue text-solarized-blue dark:border-solarized-cyan dark:text-solarized-cyan'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                )}
                {...a11yProps(idx)}
              >
                <span>
                  <FaIcon className={cn(tab.icon, tab.iconClassName)} />
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-x-24 gap-y-12">
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
