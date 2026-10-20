import FaIcon from '@/components/FaIcon'

type LegendItemId =
  | 'custom-shift'
  | 'one-shot-mod'
  | 'special'
  | 'layer-tap'
  | 'mod-tap'
  | 'long-press'
  | 'tap-force-hold'
  | 'app-shortcut'
  | 'req-setup'

type LegendItem = {id: LegendItemId; icon: string; color: string; label: string}

const items: LegendItem[] = [
  {
    id: 'custom-shift',
    icon: 'fa-duotone fa-swatchbook text-[13px]',
    color: 'nushu.violet',
    label: 'Custom Shift Key'
  },
  {
    id: 'one-shot-mod',
    icon: 'fa-duotone fa-swatchbook text-[13px]',
    color: 'nushu.cyan',
    label: 'Stackable One‑Shot Mod'
  },
  {
    id: 'special',
    icon: 'fa-regular fa-asterisk',
    color: 'nushu.red',
    label: 'Special (see tooltip)'
  },
  {id: 'layer-tap', icon: 'fa-regular fa-layer-group', color: 'nushu.green', label: 'Layer Tap'},
  {id: 'mod-tap', icon: 'fa-regular fa-command', color: 'nushu.yellow', label: 'Mod Tap'},
  {
    id: 'long-press',
    icon: 'fa-regular fa-timer',
    color: 'nushu.orange',
    label: 'Long Press'
  },
  {
    id: 'tap-force-hold',
    icon: 'fa-regular fa-angles-down',
    color: 'nushu.orange',
    label: 'Tap, then hold to repeat'
  },
  {
    id: 'app-shortcut',
    icon: 'fa-regular fa-browser',
    color: 'nushu.blue',
    label: 'Application Shortcut'
  },
  {
    id: 'req-setup',
    icon: 'fa-regular fa-wrench-simple',
    color: 'nushu.magenta',
    label: 'Requires OS Configuration'
  }
]

// Pages pass `only` to list just the markers their layers use
export default function QmkLegend({only}: {only?: LegendItemId[]}) {
  const shownItems = only ? items.filter((item) => only.includes(item.id)) : items
  return (
    <section
      aria-labelledby="legend-title"
      className="border-border bg-card rounded-xl border p-4 md:p-5"
    >
      <h2 id="legend-title" className="text-nushu-ink-muted mb-3 text-xs">
        Legend
      </h2>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-2 min-[420px]:grid-cols-2">
        {shownItems.map((item) => (
          <li key={item.id} className="flex items-center gap-2.5">
            <span className="flex w-5 shrink-0 items-center justify-center">
              <FaIcon className={item.icon} color={item.color} />
            </span>
            <span className="text-[13px]">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
