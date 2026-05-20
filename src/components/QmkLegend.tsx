import FaIcon from '@/components/FaIcon'

export default function QmkLegend() {
  return (
    <div className="rounded border border-border bg-card shadow-sm">
      <div className="p-4">
        <ul className="space-y-1">
          <li className="pb-1 text-sm font-semibold text-muted-foreground">Legend</li>
          {[
            {icon: 'fa-duotone fa-swatchbook', color: 'solarized.violet', label: 'Custom Shift Key'},
            {icon: 'fa-duotone fa-swatchbook', color: 'solarized.cyan', label: 'Stackable One-shot Mod'},
            {icon: 'fa-regular fa-asterisk', color: 'solarized.red', label: 'Special (see tooltip)'},
            {icon: 'fa-regular fa-layer-group', color: 'solarized.green', label: 'Layer Tap'},
            {icon: 'fa-regular fa-command', color: 'solarized.yellow', label: 'Mod Tap'},
            {icon: 'fa-regular fa-ellipsis', color: 'solarized.orange', label: 'Tap vs. Hold'},
            {icon: 'fa-regular fa-angles-down', color: 'solarized.orange', label: 'Auto-repeat Enabled'},
            {icon: 'fa-regular fa-browser', color: 'solarized.blue', label: 'Application Shortcut'},
            {icon: 'fa-regular fa-wrench-simple', color: 'solarized.magenta', label: 'Requires OS Configuration'}
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
