# button-group

2026-07-08. Strategy: golden pair via CLI (radix-maia / base-maia, style `maia`). Verdict: migrated cleanly; `ButtonGroupText` moved off `Slot`/`asChild` onto `useRender`/`mergeProps`.

## Changed

- `src/components/ui/button-group.tsx`:
  - `ButtonGroup` (outer wrapper): no primitive changes — it's a plain `<div role="group">`, never radix. The orientation-variant selector classes were updated to the base-maia registry's data-slot-based selectors (e.g. horizontal: `*:data-slot:rounded-r-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-4xl! [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0`, replacing the old `:not(:first-child)`/`:not(:last-child)` selectors) — this is an upstream base-maia registry change, not a hand transform, taken verbatim from the golden fetch.
  - `ButtonGroupText`: this is the `Slot`/`asChild` idiom (non-button polymorphic part), so it moved to `useRender` + `mergeProps` per the documented worked example in `universal-patterns.md`, not to the Button primitive. `import {Slot} from 'radix-ui'` removed; added `import {mergeProps} from '@base-ui/react/merge-props'` and `import {useRender} from '@base-ui/react/use-render'`. Type changed from `React.ComponentProps<'div'> & {asChild?: boolean}` to `useRender.ComponentProps<'div'>`. The `className`/`data-slot` object literal passed into `mergeProps` is cast `as React.ComponentProps<'div'>` per the documented pitfall (data-* keys fail excess-property checking otherwise).
  - `ButtonGroupSeparator`: unchanged besides formatting — it delegates to the already-migrated `Separator` component, so it inherits the base-ui behavior for free.
  Leftover scan: `grep -n "radix-ui\|@radix-ui" src/components/ui/button-group.tsx` → clean.

## Left alone

No consumers of `ButtonGroup`/`ButtonGroupText`/`ButtonGroupSeparator` exist yet outside `src/components/ui/` itself, so there was no call-site sweep to do.

## Behavior changes

None expected — `useRender`/`mergeProps` is functionally equivalent to the old `Slot.Root` idiom for this single-child pass-through case.

## Verify by hand

- Render a `ButtonGroup` with a mix of `Button`s and a `ButtonGroupSeparator`, confirm the rounded-corner/border-collapse styling at the group edges still looks right (this is where the selector rewrite could visually regress).
- Render a `ButtonGroupText` with `render={<a href="#" />}` and confirm it emits an `<a>` tag with the button-group-text styling and `data-slot="button-group-text"` (the useRender/mergeProps path), not a `<div>`.
