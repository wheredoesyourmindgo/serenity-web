import FaIcon from '@/components/FaIcon'

export default function QmkLegend() {
  return (
    <div className="border-border bg-card rounded border shadow-sm">
      <div className="p-4">
        <ul className="space-y-1">
          <li className="text-muted-foreground pb-1 text-sm font-semibold">Legend</li>
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
            <li key={label} className="flex items-center gap-3 py-1">
              <span className="flex w-5 shrink-0 items-center justify-center">
                <FaIcon className={icon} color={color} />
              </span>
              <span className="text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
