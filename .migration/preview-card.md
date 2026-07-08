# preview-card

2026-07-08. Strategy: engine (hand-migration of consumers) + vendored base variant from the animate-ui registry. Verdict: Radix `hover-card` retired in favor of Base UI `preview-card`; two consumers migrated, builds clean.

Radix UI has no Base UI hover-card equivalent. Base UI's **Preview Card** is the intended successor (hover/focus-triggered floating content), so `@animate-ui/components-radix-hover-card` was replaced by `@animate-ui/components-base-preview-card` in `vendor-components.json` and both consumers were rewritten.

## Changed

- `src/components/animate-ui/primitives/base/preview-card.tsx`, `src/components/animate-ui/components/base/preview-card.tsx` — vendored from the animate-ui registry (already present at session start). Normalized via the vendor pipeline (see below): import specifier `@base-ui-components/react/preview-card` → `@base-ui/react/preview-card`; dropped the unused `import * as React` from the components wrapper (project runs `noUnusedLocals`). Exports the anatomy `PreviewCard` / `PreviewCardTrigger` / `PreviewCardPanel` (Portal+Positioner+Popup) / `PreviewCardBackdrop`.
- `scripts/vendor-components.mjs` — added `normalizeVendoredFile()`, run on each synced path before prettier. It rewrites `@base-ui-components/react` → `@base-ui/react` (the animate-ui registry still emits the pre-rename package; this repo depends on `@base-ui/react@1.6.0`) and strips a sole unused `import * as React from 'react'`. This makes a future `yarn vendor-components sync` reproduce exactly what was hand-verified rather than regressing the imports.
- `src/components/ToggleDarkModeBtn.tsx` — `HoverCard`/`HoverCardTrigger`/`HoverCardContent` → `PreviewCard`/`PreviewCardTrigger`/`PreviewCardPanel`.
  - `asChild` trigger → `render={control}` prop (per the Radix→Base `asChild`→`render` rule).
  - Open/close timing preserved exactly: Radix root `openDelay={250} closeDelay={100}` → `delay`/`closeDelay` on `PreviewCardTrigger` (in Base UI v1.6 these props live on the Trigger, not the Root; defaults are 600/300).
  - `HoverCardContent side="bottom" align="end"` → `PreviewCardPanel side="bottom" align="end"` (the panel spreads positioning props onto the Positioner). Also migrated the co-located Switch (see `switch.md`).
  - Icons already `@tabler/icons-react` (`IconMoon`/`IconSun`); no lucide present.
- `src/components/key/KeyContainer.tsx` — same trigger/panel swap.
  - `openDelay={0} closeDelay={0}` (instant, tooltip-like) → `delay={0} closeDelay={0}` on the Trigger.
  - Controlled touch state (`{...touchOpenProps}` = `open`/`onOpenChange`) stays on the `PreviewCard` root; `render={trigger}` replaces `asChild`.
  - `sideOffset={4}`, `side="top"`, `align="start"`, `id`, `className` moved onto `PreviewCardPanel`.

Leftover scan — `grep -rn "radix-ui\|@radix-ui\|@base-ui-components\|lucide" src` on these files and repo-wide → clean.

## Left alone

- The `preview-card` vendored files' internal logic (followCursor motion plumbing, contexts) — untouched; only the mechanical import normalization the vendor pipeline itself performs was applied.

## Behavior changes

- **`aria-describedby` target (KeyContainer).** Radix `HoverCardContent` put `id={popOverId}` on the popup element itself. `PreviewCardPanel` forwards extra props to the **Positioner** (the wrapper around the popup), so `popOverId` now lands one level out. `aria-describedby` still resolves (the described popup text is nested inside), but the id is on the positioner, not the popup node. Flagged, not patched.
- **Trigger element.** Base UI `PreviewCardTrigger` renders an `<a>` by default; both consumers override it via `render` with a `<div>`, so the rendered element matches the old `asChild` behavior.
- Preview Card opens on hover **and** focus (same as Radix hover card). Timing is preserved via the delay props above.

## Verify by hand

- Desktop, dark-mode toggle in the header: hover the switch → after ~250ms the "Light's out!/on!" panel appears bottom-end; move away → it closes after ~100ms. Toggling the switch still flips the theme.
- Desktop, a keyboard key with popover content (`/firmware` base layer): hover a key → popover appears immediately (0ms) above-start and is `pointer-events-none`; moving off closes immediately.
- Touch device / narrow viewport: tap a key with popover content → it toggles open/closed (controlled path); the dark-mode control renders without the hover card.
