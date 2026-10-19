'use client'

import type {ReactNode} from 'react'
import {cn} from 'cn'
import FaIcon from '@/components/FaIcon'
import {TextLink, actionButtonClassName} from '@/components/Page'
import {buttonVariants} from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const RULES_URL =
  'https://raw.githubusercontent.com/wheredoesyourmindgo/serenity-karabiner/main/serenity.json'
const IMPORT_URL = `karabiner://karabiner/assets/complex_modifications/import?url=${encodeURIComponent(RULES_URL)}`

function Step({n, children}: {n: number; children: ReactNode}) {
  return (
    <li className="flex gap-3">
      <span className="text-nushu-blue border-nushu-blue/40 flex size-6 shrink-0 items-center justify-center rounded-full border-[1.5px] text-xs font-medium">
        {n}
      </span>
      <div className="flex flex-col gap-1 pt-0.5">{children}</div>
    </li>
  )
}

// The install button opens these steps rather than the karabiner:// link itself: the link does
// nothing without Karabiner installed, and the rules don't take effect until Enable All.
// The dialog stays open after Open in Karabiner, so the remaining steps are still there.
export default function KarabinerInstallDialog() {
  return (
    <Dialog>
      <DialogTrigger className={actionButtonClassName}>
        <FaIcon className="fa-regular fa-arrow-down-to-line" />
        Install in Karabiner
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Install Serenity in Karabiner</DialogTitle>
          <DialogDescription>
            Your other Karabiner settings and rules stay as they are.
          </DialogDescription>
        </DialogHeader>

        <ol className="text-popover-foreground flex flex-col gap-4">
          <Step n={1}>
            <p>
              Install{' '}
              <TextLink href="https://karabiner-elements.pqrs.org">Karabiner-Elements</TextLink> if
              you haven&apos;t. Without it, Open in Karabiner does nothing.
            </p>
          </Step>
          <Step n={2}>
            <p>
              Click <strong>Open in Karabiner</strong>, then <strong>Import</strong> when Karabiner
              asks.
            </p>
          </Step>
          <Step n={3}>
            <p>
              Click <strong>Enable All</strong> next to Serenity. Nothing changes until you do.
            </p>
          </Step>
        </ol>

        <p className="text-muted-foreground">
          The rules go into the profile that&apos;s selected in Karabiner, usually Default profile.
          For an easy way back to your old setup, create a new profile and select it first. You can
          then switch between them from Karabiner&apos;s menu bar icon.
        </p>

        <DialogFooter>
          <DialogClose className={buttonVariants({variant: 'outline'})}>Close</DialogClose>
          <a href={IMPORT_URL} className={cn(buttonVariants(), 'gap-2')}>
            <FaIcon className="fa-regular fa-arrow-up-right-from-square" />
            Open in Karabiner
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
