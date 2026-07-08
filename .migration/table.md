# table

2026-07-08. Strategy: golden pair via CLI (radix-maia / base-maia, style `maia`). Verdict: no changes — this wrapper never used Radix.

## Changed

Nothing. `src/components/ui/table.tsx` is a plain set of `<table>`/`<thead>`/`<tbody>`/etc. wrappers with no Radix (or now Base UI) primitive underneath. Diffing the radix-maia and base-maia golden variants for `table` confirmed they are byte-identical except for the internal registry import alias (`@/registry/radix-maia/lib/utils` vs `@/registry/base-maia/lib/utils`, which doesn't apply to this project's own `@/lib/utils` alias anyway).
Leftover scan: `grep -n "radix-ui\|@radix-ui" src/components/ui/table.tsx` → clean (was already clean before this migration).

## Left alone

The whole file — intentionally, since there's nothing to migrate.

## Behavior changes

None.

## Verify by hand

None needed beyond the existing build/typecheck — no runtime behavior changed.
