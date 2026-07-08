# tabs

2026-07-08. Strategy: golden pair via CLI (radix-maia / base-maia, style `maia`). Verdict: migrated cleanly, no consumers yet.

## Changed

- `src/components/ui/tabs.tsx`:
  - `import {Tabs as TabsPrimitive} from 'radix-ui'` → `from '@base-ui/react/tabs'`.
  - `Tabs` (root): type `React.ComponentProps<typeof TabsPrimitive.Root>` → `TabsPrimitive.Root.Props`.
  - `TabsList`: type → `TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>`.
  - `TabsTrigger`: part renamed `TabsPrimitive.Trigger` → `TabsPrimitive.Tab` (per the `Trigger`→`Tab` rename in `universal-patterns.md`); type → `TabsPrimitive.Tab.Props`. Added `aria-disabled:pointer-events-none aria-disabled:opacity-50` alongside the existing `disabled:*` classes — Base UI's Tab can be disabled via `aria-disabled` as well as the native attribute, so both variants are needed (taken verbatim from the base-maia golden, not a hand guess).
  - `TabsContent`: part renamed `TabsPrimitive.Content` → `TabsPrimitive.Panel`; type → `TabsPrimitive.Panel.Props`.
  Leftover scan: `grep -n "radix-ui\|@radix-ui" src/components/ui/tabs.tsx` → clean.

## Left alone

No app code currently imports `src/components/ui/tabs.tsx`, so there was no consumer sweep to perform.

## Behavior changes

- **Activation mode**: Radix's Tabs defaulted to automatic activation unless `activationMode="manual"` was set. Base UI's Tabs defaults to **manual** activation (arrow keys move focus; Enter/Space activates). This project's wrapper never set `activationMode`, so nothing to remove at the call-site level, but any future consumer expecting automatic (Radix-style) activation should know the default flipped. A near-equivalent opt-in exists via `Tabs.List activateOnFocus`, but per the skill's hard rule this is flagged, not silently added.

## Verify by hand

- Render a `Tabs` with 3+ `TabsTrigger`s, click through them (mouse activation should still work immediately) and then keyboard-navigate with arrow keys — confirm focus moves between tabs without auto-activating, and Enter/Space activates the focused tab (this is the manual-activation behavior change to watch for).
- Confirm the `line` variant's active-tab underline (`after:` pseudo-element) and the vertical/horizontal orientation layout both still render correctly.

---

# tabs (animate-ui primitives) — 2026-07-08 follow-up

Second migration in the same "tabs" family: the animate-ui tabs **primitives** (`@animate-ui/components-base-tabs`), which the app pages import directly, not the shadcn `ui/tabs` wrapper above. The prior report noted these were "left alone"; they are now migrated. Strategy: engine (consumer hand-migration) + vendored base variant.

## Changed

- `src/components/animate-ui/primitives/base/tabs.tsx`, `src/components/animate-ui/components/base/tabs.tsx` — vendored base variant. Normalized via the vendor pipeline: `@base-ui-components/react/tabs` → `@base-ui/react/tabs`; unused `import * as React` stripped from the components wrapper. Parts are `Tabs` / `TabsList` / `TabsTab` / `TabsPanel` / `TabsPanels` / highlight helpers (Base UI's `Tab`/`Panel` naming).
- `src/app/firmware/page.tsx` and `src/app/software/page.tsx` — both import the tabs primitives directly and use fully custom styling:
  - Import path `@/components/animate-ui/primitives/radix/tabs` → `.../primitives/base/tabs`.
  - Parts renamed: `TabsTrigger` → `TabsTab`, `TabsContent` → `TabsPanel` (Radix→Base `Trigger`→`Tab`, `Content`→`Panel`).
  - Per-tab active-state classes remapped from Radix `data-state`: `data-[state=active]:border-solarized-blue data-[state=active]:text-solarized-blue` (+ dark cyan) → `data-[active]:…`; `data-[state=inactive]:border-transparent` → plain `border-transparent`. NOTE: Base UI's `Tabs.Tab` marks the selected tab with **`data-active`** (present-when-active), *not* `data-selected` (verified against `@base-ui/react@1.6.0` `TabsTabDataAttributes` and the rendered DOM). Using `data-[selected]` silently produced no active-tab styling — corrected to `data-[active]`.
  - Panel container made a single-cell grid (`grid [&>*]:col-start-1 [&>*]:row-start-1`) so the crossfading outgoing/incoming panels overlay instead of stacking in normal flow — otherwise a fast switch briefly doubles the `md:h-auto` container height (each `TabsPanel` has its own `AnimatePresence`, so both are mounted for the ~0.5s transition).
  - `<TabsPanel value=… layout={false}>` unchanged otherwise — the base `TabsPanel` accepts the motion `layout` prop via its `HTMLMotionProps` spread, so the panels stay unanimated exactly as before.

Leftover scan — `grep -n "radix\|@base-ui-components\|data-\[state=\|TabsTrigger\|TabsContent" src/app/firmware/page.tsx src/app/software/page.tsx` → clean.

## Behavior changes (animate-ui primitives)

- Same **manual vs automatic activation** flip as the wrapper above — Base UI Tabs activate on Enter/Space after arrow-key focus, not on focus alone.
- Inactive panels still unmount (Base UI `Panel` default `keepMounted={false}`), matching the prior Radix behavior, so the AnimatePresence enter/exit on the active panel is preserved.

## Verify by hand (animate-ui primitives)

- `/firmware`: click through all nine tabs (Base, Mouse, Num/Nav, …) — confirm the correct keyboard layer renders, the active tab shows the solarized-blue (light) / cyan (dark) underline + text, and horizontal scroll of the tab bar still works on narrow screens.
- `/software`: same check across the Base / FN Layer tabs.
- On both, arrow-key + Enter/Space through the tab bar to confirm manual activation.
