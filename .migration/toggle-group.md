# toggle-group

2026-07-08. Strategy: engine (consumer hand-migration) + vendored base variant. Verdict: one consumer (`/firmware`) migrated, builds clean. One appearance delta flagged.

`@animate-ui/components-radix-toggle-group` → `@animate-ui/components-base-toggle-group` in `vendor-components.json`. Depends on the `toggle` primitive (see `toggle.md`).

## Changed

- `src/components/animate-ui/primitives/base/toggle-group.tsx`, `src/components/animate-ui/components/base/toggle-group.tsx` — vendored base variant. Normalized via the vendor pipeline: `@base-ui-components/react/{toggle,toggle-group}` → `@base-ui/react/{toggle,toggle-group}`; unused `import * as React` stripped from the components wrapper. Exports `ToggleGroup` and `Toggle` (the item is now `Toggle`, not `ToggleGroupItem`).
- `src/app/firmware/page.tsx` — the bottom-row layout selector:
  - Import `{ToggleGroup, ToggleGroupItem}` (radix) → `{ToggleGroup, Toggle}` (base).
  - **Value shape changed from string to array.** Base UI `ToggleGroup` is always multi-value-shaped: `value: readonly string[]`, `onValueChange: (value: string[]) => void`. `value={layout}` → `value={[layout]}`; the handler now reads `value[0]`:
    ```ts
    const handleLayoutChange = (value: string[]) => {
      const next = value[0]
      if (next) setLayout(next as KeyboardLayout)
    }
    ```
  - `type="single"` removed — single-select is Base UI's default (`multiple={false}`).
  - `<ToggleGroupItem>` → `<Toggle>`; per-item data-attribute class `data-[state=on]:text-solarized-blue dark:data-[state=on]:text-solarized-cyan` → `data-[pressed]:…` (Base UI Toggle exposes `data-pressed`, not `data-state=on`).

Leftover scan — `grep -n "radix\|@base-ui-components\|data-\[state=\|ToggleGroupItem\|type=\"single\"" src/app/firmware/page.tsx` → clean.

## Left alone

- The vendored toggle-group internals and the shared `highlight` effect primitive — untouched.

## Behavior changes

- **Highlight tint lost (appearance).** The old usage passed `highlightClassName="bg-solarized-blue/10 dark:bg-solarized-cyan/10"` to color the animated selection highlight. The Base UI `ToggleGroup` **components wrapper** hardcodes that moving highlight as `bg-accent` and exposes no `highlightClassName` prop, so the selected-item background is now the neutral accent color instead of the solarized blue/cyan tint. The selected-item **text** color (`data-[pressed]:text-solarized-*`) is preserved. Not silently patched — restoring the exact tint would require either editing the vendored wrapper (out of scope per request) or re-composing the `primitives/base/toggle-group` parts (`ToggleGroupHighlight` accepts a `className`) directly in the page. Say the word and I'll do the latter.
- Selection state is driven by an array now; single-select still behaves as before to the user (one active item), only the prop plumbing changed.

## Verify by hand

- `/firmware`, "Bottom Row Layout" group: click **11-12 keys (Planck)** and **5-6 keys (Corne)** — confirm only one is active at a time, the active label turns solarized blue (light) / cyan (dark), and the keyboard diagrams above switch layout accordingly. Note the selection highlight background is now neutral `bg-accent` (see flag above).
- Keyboard-navigate the group with arrow keys and Enter/Space to confirm selection still works.
