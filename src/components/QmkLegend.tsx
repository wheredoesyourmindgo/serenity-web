import FaIcon from '@/components/FaIcon'

export default function QmkLegend() {
  return (
    <section
      aria-labelledby="legend-title"
      className="border-border bg-card rounded-xl border p-4 md:p-5"
    >
      <h2 id="legend-title" className="text-nushu-ink-muted mb-3 text-xs">
        Legend
      </h2>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-2 min-[420px]:grid-cols-2">
        {[
          {
            icon: 'fa-duotone fa-swatchbook',
            color: 'nushu.violet',
            label: 'Custom Shift Key'
          },
          {
            icon: 'fa-duotone fa-swatchbook',
            color: 'nushu.cyan',
            label: 'Stackable One-shot Mod'
          },
          {
            icon: 'fa-regular fa-asterisk',
            color: 'nushu.red',
            label: 'Special (see tooltip)'
          },
          {icon: 'fa-regular fa-layer-group', color: 'nushu.green', label: 'Layer Tap'},
          {icon: 'fa-regular fa-command', color: 'nushu.yellow', label: 'Mod Tap'},
          {icon: 'fa-regular fa-ellipsis', color: 'nushu.orange', label: 'Tap vs. Hold'},
          {
            icon: 'fa-regular fa-angles-down',
            color: 'nushu.orange',
            label: 'Auto-repeat Enabled'
          },
          {icon: 'fa-regular fa-browser', color: 'nushu.blue', label: 'Application Shortcut'},
          {
            icon: 'fa-regular fa-wrench-simple',
            color: 'nushu.magenta',
            label: 'Requires OS Configuration'
          }
        ].map(({icon, color, label}) => (
          <li key={label} className="flex items-center gap-2.5">
            <span className="flex w-5 shrink-0 items-center justify-center">
              <FaIcon className={icon} color={color} />
            </span>
            <span className="text-[13px]">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
