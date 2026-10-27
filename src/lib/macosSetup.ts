/*
 * The shortcuts the Serenity QMK firmware sends that macOS (or Rectangle Pro) doesn't map out of
 * the box, and where to set each one. The firmware's other OS keys (Mission Control, Spaces, Lock
 * Screen, screenshots…) send macOS's own defaults and need nothing.
 *
 * One list, read by the checklist on Extras and by the firmware layers: a key passes its item's id
 * as `setupId` and its popover links to the item's row. Paths are for macOS Tahoe 26 and later.
 */

export type SetupGroupId = 'settings' | 'app-shortcuts' | 'shortcuts' | 'rectangle'

// `base` is where a group's items are set, shown once in the group rather than on each item
export type SetupGroup = {
  id: SetupGroupId
  icon: string
  title: string
  intro: string
  base: readonly string[]
}

export type SetupItem = {
  id: string
  group: SetupGroupId
  chord: string
  action: string
  // where it's set, step by step, as the labels read in macOS
  path: readonly string[]
  detail?: string
}

export const setupGroups: readonly SetupGroup[] = [
  {
    id: 'settings',
    icon: 'fa-regular fa-gear',
    title: 'System Settings',
    intro: 'Built-in actions with a shortcut slot but no default. Click the slot, press the chord.',
    base: ['System Settings', 'Keyboard', 'Keyboard Shortcuts…']
  },
  {
    id: 'app-shortcuts',
    icon: 'fa-regular fa-bars',
    title: 'App Shortcuts',
    intro: 'Menu items given a shortcut in every app. The menu title must match exactly.',
    base: ['System Settings', 'Keyboard', 'Keyboard Shortcuts…']
  },
  {
    id: 'shortcuts',
    icon: 'fa-regular fa-layer-group',
    title: 'Shortcuts app',
    intro:
      'Actions with no shortcut slot. Make each a shortcut, then in its details (ⓘ) choose Add Keyboard Shortcut.',
    base: ['Shortcuts', 'New Shortcut']
  },
  {
    id: 'rectangle',
    icon: 'fa-regular fa-table-columns',
    title: 'Rectangle Pro',
    intro:
      'The Action layer’s window keys. Maximize (⌃⌥↩), Restore (⌃⌥⌫), Center (⌃⌥C), Smaller (⌃⌥-), Larger (⌃⌥=) and Maximize Height (⌃⌥⇧↑) are already its defaults.',
    base: ['Rectangle Pro', 'Settings', 'Shortcuts']
  }
]

// an item's path after its group's base, or all of it when it's set somewhere else
export function relativePath(item: SetupItem) {
  const base = setupGroups.find((group) => group.id === item.group)?.base ?? []
  const underBase = base.every((step, i) => item.path[i] === step)
  return underBase ? item.path.slice(base.length) : item.path
}

export const setupItems = [
  {
    id: 'show-apps',
    group: 'settings',
    chord: '⌃⌥⇧⌘L',
    action: 'Show Apps',
    path: ['System Settings', 'Keyboard', 'Keyboard Shortcuts…', 'Spotlight', 'Show Apps'],
    detail: 'Apps replaced Launchpad in macOS Tahoe.'
  },
  {
    id: 'notification-center',
    group: 'settings',
    chord: '⌃⌥⇧⌘N',
    action: 'Show Notification Center',
    path: [
      'System Settings',
      'Keyboard',
      'Keyboard Shortcuts…',
      'Mission Control',
      'Show Notification Center'
    ]
  },
  {
    id: 'do-not-disturb',
    group: 'settings',
    chord: '⌃⌥⇧⌘F',
    action: 'Turn Do Not Disturb On/Off',
    path: [
      'System Settings',
      'Keyboard',
      'Keyboard Shortcuts…',
      'Mission Control',
      'Turn Do Not Disturb On/Off'
    ]
  },
  {
    id: 'stage-manager',
    group: 'settings',
    chord: '⌃⌥⇧⌘T',
    action: 'Turn Stage Manager On/Off',
    path: [
      'System Settings',
      'Keyboard',
      'Keyboard Shortcuts…',
      'Mission Control',
      'Turn Stage Manager On/Off'
    ]
  },
  {
    id: 'siri',
    group: 'settings',
    chord: '⌃⌥⇧⌘S',
    action: 'Siri',
    path: ['System Settings', 'Apple Intelligence & Siri', 'Keyboard shortcut', 'Customize…']
  },
  {
    id: 'show-all',
    group: 'app-shortcuts',
    chord: '⌃⌥⇧⌘A',
    action: 'Show All',
    path: ['System Settings', 'Keyboard', 'Keyboard Shortcuts…', 'App Shortcuts', '+'],
    detail: 'Application: All Applications. Menu title: Show All.'
  },
  {
    id: 'dark-mode',
    group: 'shortcuts',
    chord: '⌃⌥⇧⌘D',
    action: 'Toggle Light/Dark Mode',
    path: ['Shortcuts', 'New Shortcut', 'Set Appearance'],
    detail: 'Set the action to toggle. The Automator Quick Action below works too.'
  },
  {
    id: 'mic-mute',
    group: 'shortcuts',
    chord: '⌃⌥⇧⌘I',
    action: 'Toggle Mic Mute',
    path: ['Shortcuts', 'New Shortcut', 'Run AppleScript'],
    detail: 'Paste the script below into the action.'
  },
  {
    id: 'window-sides',
    group: 'rectangle',
    chord: '⌃⌥⌘← / ⌃⌥⌘→, ⌃⌥⌘L / ⌃⌥⌘R',
    action: 'Left / Right Half, Fill Left / Right',
    path: ['Rectangle Pro', 'Settings', 'Shortcuts'],
    detail: 'Move Previous and Next Display (below) first, which use ⌃⌥⌘← and ⌃⌥⌘→ by default.'
  },
  {
    id: 'window-almost-max',
    group: 'rectangle',
    chord: '⌃⌥⇧⌘M',
    action: 'Almost Maximize',
    path: ['Rectangle Pro', 'Settings', 'Shortcuts']
  },
  {
    id: 'window-last-position',
    group: 'rectangle',
    chord: '⌃⌥⇧⌘V',
    action: 'Last Window Position',
    path: ['Rectangle Pro', 'Settings', 'Shortcuts']
  },
  {
    id: 'window-throw-space',
    group: 'rectangle',
    chord: '⌃⌥⇧⌘← / ⌃⌥⇧⌘→, ⌃⌥⇧⌘[ / ⌃⌥⇧⌘]',
    action: 'Throw Window to Space Left / Right, Previous / Next Display',
    path: ['Rectangle Pro', 'Settings', 'Shortcuts'],
    detail: 'The displays are on the hold and only matter with more than one display.'
  },
  {
    id: 'window-stash',
    group: 'rectangle',
    chord: '⌃⌥⇧⌘G / ⌃⌥⇧⌘H, ⌃⌥⇧⌘R / ⌃⌥⇧⌘U',
    action: 'Toggle Stashed / Stash, Cycle Stashed / Unstash',
    path: ['Rectangle Pro', 'Settings', 'Shortcuts']
  }
] as const satisfies readonly SetupItem[]

export type SetupItemId = (typeof setupItems)[number]['id']

export const setupAnchor = (id: SetupItemId) => `setup-${id}`
export const setupHref = (id: SetupItemId) => `/extras#${setupAnchor(id)}`
