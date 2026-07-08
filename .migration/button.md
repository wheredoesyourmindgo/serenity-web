# button

2026-07-08. Strategy: golden pair via CLI (radix-maia / base-maia, style `maia`). Verdict: migrated cleanly, one consumer call site updated.

## Changed

- `src/components/ui/button.tsx` — replaced the `Slot`/`asChild` idiom with the real `@base-ui/react/button` primitive (per the registry's explicit correction: button migrates to the native primitive, not a hand-rolled `useRender` wrapper). `asChild` prop and the `Comp` conditional are gone; the component always renders `<ButtonPrimitive>`. Type is now `ButtonPrimitive.Props & VariantProps<typeof buttonVariants>`. Dropped `data-variant`/`data-size` attributes to match the base registry (confirmed via grep that nothing in the app reads those attributes off the button). Preserved the project's customization: the `secondary` variant's hover class stays `hover:bg-secondary/80` (the upstream base-maia registry now ships `hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]` instead — this diverged from radix-maia too, so it predates this migration and was kept as-is).
  Leftover scan: `grep -n "radix-ui\|@radix-ui" src/components/ui/button.tsx` → clean.
- `src/app/not-found.tsx:19` — only consumer. `<Button asChild size="lg" ...><Link href="/" .../></Button>` → `<Button size="lg" ... render={<Link href="/" .../>}>Return home</Button>` (asChild → render, per `consumer-props.md`). Verified in the browser: renders as `<a href="/" data-slot="button" class="...">Return home</a>` with button styling merged onto the anchor.
- `package.json` / `yarn.lock` — added `@base-ui/react@1.6.0`. `radix-ui` package is NOT removed (see Left alone).

## Left alone

- `radix-ui` npm dependency — kept installed. `src/components/animate-ui/primitives/radix/*.tsx` (switch, toggle-group, hover-card, tabs, toggle) still import from it directly; those are a separate vendored component family, not shadcn `ui/` wrappers, and were out of scope for this request.

## Behavior changes

None observed for Button specifically — `render` is a direct drop-in for `asChild` in this case since there was exactly one child and no `Slot.Slottable` usage.

## Verify by hand

- Visit `/` on a nonexistent path (404 page) → click "Return home" → confirm it navigates via client-side routing (not a full page reload) and keeps focus-visible ring styling on keyboard tab.
- Tab to any button in the app and confirm the focus ring, active (press) translate-y effect, and disabled/aria-invalid states still render (no data-variant/data-size dependents were found, but spot check visually).
