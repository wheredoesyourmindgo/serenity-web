# switch

2026-07-08. Strategy: engine (consumer hand-migration) + vendored base variant. Verdict: one consumer migrated, builds clean.

`@animate-ui/components-radix-switch` → `@animate-ui/components-base-switch` in `vendor-components.json`.

## Changed

- `src/components/animate-ui/primitives/base/switch.tsx`, `src/components/animate-ui/components/base/switch.tsx` — vendored base variant (present at session start). Normalized via the vendor pipeline: `@base-ui-components/react/switch` → `@base-ui/react/switch`. The components wrapper's `import * as React` was **kept** (it genuinely uses `React.ReactElement` for the icon props), confirming the codemod's "strip only when unreferenced" guard.
- `src/components/ToggleDarkModeBtn.tsx` — `Switch` import repointed to `@/components/animate-ui/components/base/switch`. Data-attribute classes remapped from Radix's `data-state` to Base UI's boolean attributes: `data-[state=checked]:bg-black/30 data-[state=unchecked]:bg-white/12 dark:data-[state=checked]:bg-black/35 dark:data-[state=unchecked]:bg-white/10` → `data-[checked]:… data-[unchecked]:…`. `checked`, `onCheckedChange`, `pressedWidth`, and `aria-label` are unchanged (Base UI's Switch uses the same names).

Leftover scan — `grep -n "radix\|@base-ui-components\|data-\[state=" src/components/ToggleDarkModeBtn.tsx` → clean.

## Left alone

- The vendored switch component internals (thumb spring, icon slots) — untouched.

## Behavior changes

- `onCheckedChange` in Base UI is called with `(checked: boolean, eventDetails)`; the consumer only reads the first argument, so no change in effect.
- The Radix→Base state attribute rename is required, not cosmetic: `data-[state=checked]` selectors would never match Base UI's `data-checked`, so the custom checked/unchecked background colors would have silently stopped applying if left as-is.

## Verify by hand

- Header dark-mode switch: toggle it and confirm the track background changes between the checked (`bg-black/30`, dark `bg-black/35`) and unchecked (`bg-white/12`, dark `bg-white/10`) colors, the thumb slides/widens on press, and the theme actually flips (including the `system`-preference reconciliation).
