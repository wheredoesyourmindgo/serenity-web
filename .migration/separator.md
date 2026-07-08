# separator

2026-07-08. Strategy: golden pair via CLI (radix-maia / base-maia, style `maia`). Verdict: clean 1:1 migration, no consumers outside `button-group.tsx`.

## Changed

- `src/components/ui/separator.tsx` — `import {Separator as SeparatorPrimitive} from 'radix-ui'` → `from '@base-ui/react/separator'`; `<SeparatorPrimitive.Root>` → callable `<SeparatorPrimitive>` (single-part primitive); dropped the `decorative` prop (no Base UI equivalent — removed here since Base UI's Separator has no ARIA `decorative` concept, per `universal-patterns.md`'s part-rename table); type went from `React.ComponentProps<typeof SeparatorPrimitive.Root>` to `SeparatorPrimitive.Props`. Removed the now-unused `import * as React from 'react'` (nothing else in the file references the `React` namespace). No content customizations found versus the radix-maia golden — this file was pristine besides house formatting (single quotes/no semicolons, already applied).
  Leftover scan: `grep -n "radix-ui\|@radix-ui" src/components/ui/separator.tsx` → clean.

## Left alone

Nothing else in this file's scope; no app code imports `Separator` directly (only `button-group.tsx` does, internally).

## Behavior changes

`decorative` prop is gone. No call sites passed it, so nothing to flag as broken, but if a future consumer relied on `aria-hidden` via `decorative`, they'll need to add `aria-hidden` manually — Base UI's Separator does not expose that toggle.

## Verify by hand

- Render `<Separator />` and `<Separator orientation="vertical" />` and confirm the `data-horizontal`/`data-vertical` CSS hooks still produce the expected thin line (height/width flip).
