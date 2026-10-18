'use client'

import {useEffect, useRef} from 'react'
import {cn} from 'cn'
import {TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

// Keyboard layer tabs shared by the firmware and software pages: a rounded, scrollable strip of
// icon + label tabs matching the other segmented controls, the selected one raised on the page
// color, and panels that fade/unblur in when their layer is selected.

function LayerTabsList({className, ...props}: React.ComponentProps<typeof TabsList>) {
  const listRef = useRef<HTMLDivElement>(null)

  // when the strip scrolls on narrow screens, start with the selected tab centered in view
  useEffect(() => {
    const list = listRef.current
    const active = list?.querySelector<HTMLElement>('[data-active]')
    if (!list || !active || list.scrollWidth <= list.clientWidth) return
    const listBox = list.getBoundingClientRect()
    const activeBox = active.getBoundingClientRect()
    list.scrollLeft += activeBox.left - listBox.left - (listBox.width - activeBox.width) / 2
  }, [])

  return (
    <TabsList
      ref={listRef}
      className={cn(
        'border-border bg-card max-w-full justify-start gap-1 overflow-x-auto rounded-lg border p-1 group-data-horizontal/tabs:h-auto',
        className
      )}
      {...props}
    />
  )
}

function LayerTabsTrigger({className, ...props}: React.ComponentProps<typeof TabsTrigger>) {
  return (
    <TabsTrigger
      className={cn(
        'h-auto flex-none flex-col gap-1 rounded-md px-3 py-1.5 text-xs',
        'text-muted-foreground hover:text-nushu-ink-deep',
        'data-active:bg-background data-active:text-nushu-blue data-active:shadow-sm',
        'dark:data-active:bg-background dark:data-active:text-nushu-cyan dark:data-active:border-transparent',
        className
      )}
      {...props}
    />
  )
}

function LayerTabsContent({className, ...props}: React.ComponentProps<typeof TabsContent>) {
  return (
    <TabsContent
      className={cn('animate-in fade-in blur-in-xs text-base duration-500 ease-in-out', className)}
      {...props}
    />
  )
}

export {LayerTabsList, LayerTabsTrigger, LayerTabsContent}
