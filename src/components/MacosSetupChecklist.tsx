'use client'

import type {ReactNode} from 'react'
import {useEffect, useMemo, useState, useSyncExternalStore} from 'react'
import {Checkbox} from '@/components/ui/checkbox'
import {Button} from '@/components/ui/button'
import FaIcon from '@/components/FaIcon'
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'
import {
  relativePath,
  setupAnchor,
  setupGroups,
  setupItems,
  type SetupGroupId,
  type SetupItemId
} from '@/lib/macosSetup'
import {cn} from 'cn'

const STORAGE_KEY = 'serenity-macos-setup'

// ticks are a convenience for whoever's working through the list, so they live in this browser
// only, and the list still works if storage is blocked. Read through useSyncExternalStore, which
// renders the server's empty list first and the stored one once hydrated
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getStored() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? '[]'
  } catch {
    return '[]'
  }
}

function parseDone(stored: string): SetupItemId[] {
  try {
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeDone(done: SetupItemId[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done))
  } catch {}
  listeners.forEach((listener) => listener())
}

function Breadcrumb({steps}: {steps: readonly string[]}) {
  return steps.map((step, i) => (
    <span key={i}>
      {i > 0 && (
        <span aria-hidden="true" className="text-nushu-ink-faint px-1.5">
          ›
        </span>
      )}
      <span className="text-nushu-ink-strong">{step}</span>
    </span>
  ))
}

// `extras` puts something under an item's row, like the script a Shortcuts action needs. It's
// passed in rather than imported since CodeBlock renders on the server
export default function MacosSetupChecklist({
  extras = {}
}: {
  extras?: Partial<Record<SetupItemId, ReactNode>>
}) {
  const stored = useSyncExternalStore(subscribe, getStored, () => '[]')
  const done = useMemo(() => parseDone(stored), [stored])
  // groups start closed so the section stays short; only whoever's working through one opens it
  const [openGroups, setOpenGroups] = useState<SetupGroupId[]>([])
  // the item a firmware key's popover linked to, lit since :target misses rows rendered late
  const [linked, setLinked] = useState<SetupItemId>()

  // a firmware key's popover links to its item's row: open the item's group, then scroll to the
  // row once it's rendered, since the browser couldn't while the group was closed
  useEffect(() => {
    let scrollFrame = 0
    const openFromHash = () => {
      const anchor = window.location.hash.slice(1)
      const item = setupItems.find((i) => setupAnchor(i.id) === anchor)
      if (!item) return
      setOpenGroups((groups) => (groups.includes(item.group) ? groups : [...groups, item.group]))
      setLinked(item.id)
      scrollFrame = requestAnimationFrame(() =>
        document.getElementById(anchor)?.scrollIntoView({block: 'center'})
      )
    }
    const frame = requestAnimationFrame(openFromHash)
    window.addEventListener('hashchange', openFromHash)
    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(scrollFrame)
      window.removeEventListener('hashchange', openFromHash)
    }
  }, [])

  const toggle = (id: SetupItemId, checked: boolean) =>
    writeDone(checked ? [...done, id] : done.filter((d) => d !== id))

  const setGroupOpen = (id: SetupGroupId, open: boolean) =>
    setOpenGroups((groups) => (open ? [...groups, id] : groups.filter((g) => g !== id)))

  return (
    <div className="border-border bg-background divide-border divide-y overflow-hidden rounded-lg border text-[13px] md:text-sm">
      <div className="flex min-h-11 items-center justify-between gap-3 px-4 py-2">
        <span className="text-nushu-ink-muted" aria-live="polite">
          {done.length} of {setupItems.length} done
        </span>
        {done.length > 0 && (
          <Button
            variant="ghost"
            size="xs"
            className="text-nushu-ink-muted"
            onClick={() => writeDone([])}
          >
            Clear ticks
          </Button>
        )}
      </div>
      {setupGroups.map((group) => {
        const items = setupItems.filter((item) => item.group === group.id)
        const groupDone = items.filter((item) => done.includes(item.id)).length
        const allDone = groupDone === items.length
        return (
          <Collapsible
            key={group.id}
            open={openGroups.includes(group.id)}
            onOpenChange={(open) => setGroupOpen(group.id, open)}
          >
            <CollapsibleTrigger className="group hover:bg-accent/40 flex w-full items-center gap-3 px-4 py-3 text-left transition-colors">
              <FaIcon className={cn(group.icon, 'w-[1.1em] shrink-0')} color="nushu.ink-faint" />
              <span className="text-nushu-ink-deep flex-1 font-medium">{group.title}</span>
              <span
                className={cn(
                  'whitespace-nowrap',
                  allDone ? 'text-nushu-green' : 'text-nushu-ink-muted'
                )}
              >
                {groupDone} of {items.length}
              </span>
              <FaIcon
                className="fa-regular fa-chevron-down text-[0.85em] transition-transform group-data-panel-open:rotate-180"
                color="nushu.ink-faint"
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none">
              <div className="text-nushu-ink-muted px-4 pb-3">
                <p>{group.intro}</p>
                <p className="mt-1">
                  <span className="sr-only">Set in: </span>
                  <Breadcrumb steps={group.base} />
                </p>
              </div>
              <ul className="border-border bg-card/40 divide-border divide-y border-t">
                {items.map((item) => {
                  const isDone = done.includes(item.id)
                  const extra = extras[item.id]
                  const path = relativePath(item)
                  return (
                    <li
                      key={item.id}
                      id={setupAnchor(item.id)}
                      className={cn(
                        'px-4 py-2.5 transition-colors',
                        item.id === linked && 'bg-nushu-blue/8'
                      )}
                    >
                      <label
                        htmlFor={`${setupAnchor(item.id)}-check`}
                        className="flex cursor-pointer items-start gap-3"
                      >
                        <Checkbox
                          id={`${setupAnchor(item.id)}-check`}
                          className="mt-[3px]"
                          checked={isDone}
                          onCheckedChange={(checked) => toggle(item.id, checked)}
                        />
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                            <span
                              className={cn(
                                'text-nushu-ink-deep transition-colors',
                                isDone && 'text-nushu-ink-muted line-through'
                              )}
                            >
                              {item.action}
                            </span>
                            <kbd className="text-nushu-cyan font-[inherit] text-[1.05em] font-medium whitespace-nowrap">
                              {item.chord}
                            </kbd>
                          </span>
                          {path.length > 0 && (
                            <span className="text-nushu-ink-muted mt-0.5 block">
                              <Breadcrumb steps={path} />
                            </span>
                          )}
                          {'detail' in item && (
                            <span className="text-nushu-ink-muted mt-0.5 block">{item.detail}</span>
                          )}
                        </span>
                      </label>
                      {extra && <div className="mt-3 pl-7">{extra}</div>}
                    </li>
                  )
                })}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        )
      })}
    </div>
  )
}
