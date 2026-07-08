# toggle

2026-07-08. Strategy: vendored base variant only (no standalone consumer). Verdict: normalized, builds clean.

`@animate-ui/components-base-toggle` — vendored as a dependency of `toggle-group` (the old radix `toggle` primitive was renamed to the base variant; `src/components/animate-ui/components/radix/toggle.tsx` → `.../components/base/toggle.tsx`).

## Changed

- `src/components/animate-ui/primitives/base/toggle.tsx`, `src/components/animate-ui/components/base/toggle.tsx` — normalized via the vendor pipeline: `@base-ui-components/react/toggle` → `@base-ui/react/toggle`; unused `import * as React` stripped from the components wrapper. Provides `toggleVariants` (cva) consumed by the toggle-group wrapper.

Leftover scan — `grep -n "@base-ui-components\|radix" src/components/animate-ui/**/base/toggle.tsx` → clean.

## Left alone

- No app code imports `toggle` directly; it is used only via `toggle-group`. No consumer sweep needed.

## Behavior changes

None — the primitive's `toggleVariants` still use `data-[state=on]` internally as shipped by the registry; consumers that style pressed state should use Base UI's `data-[pressed]` (see `toggle-group.md`).

## Verify by hand

- Covered by the `toggle-group.md` checklist (the toggle is only exercised through the `/firmware` layout selector).
