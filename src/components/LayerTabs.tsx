'use client'

import {cn} from 'cn'
import {TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

// Keyboard layer tabs shared by the firmware and software pages: shadcn's line
// variant, restyled as a scrollable strip of icon + label tabs with a Nushu
// underline, and panels that fade/unblur in when their layer is selected.

function LayerTabsList({className, ...props}: React.ComponentProps<typeof TabsList>) {
  return (
    <TabsList
      variant="line"
      className={cn(
        'border-border w-full justify-start gap-0 overflow-x-auto border-b p-0 group-data-horizontal/tabs:h-auto',
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
        'h-auto flex-none flex-col gap-1 rounded-none px-3 py-2 text-xs',
        'text-muted-foreground',
        'data-active:text-nushu-blue dark:data-active:text-nushu-cyan',
        'after:bg-nushu-blue dark:after:bg-nushu-cyan group-data-horizontal/tabs:after:bottom-0',
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
