'use client'

import {IconCheck, IconCopy} from '@tabler/icons-react'
import {Button} from '@/components/ui/button'
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip'
import {useCopyToClipboard} from '@/hooks/use-copy-to-clipboard'

type CopyButtonProps = Omit<React.ComponentProps<typeof Button>, 'onClick' | 'children'> & {
  text: string
  tooltip?: string
  timeout?: number
  onCopied?: () => void
}

// Copy-to-clipboard icon button with tooltip, after the ReUI copy-button pattern.
export default function CopyButton({
  text,
  tooltip = 'Copy',
  timeout = 1500,
  onCopied,
  variant = 'outline',
  size = 'icon-sm',
  ...props
}: CopyButtonProps) {
  const {isCopied, copyToClipboard} = useCopyToClipboard({timeout, onCopy: onCopied})

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant={variant}
            size={size}
            aria-label={isCopied ? 'Copied' : tooltip}
            onClick={() => copyToClipboard(text)}
            {...props}
          >
            {isCopied ? <IconCheck aria-hidden="true" /> : <IconCopy aria-hidden="true" />}
          </Button>
        }
      />
      <TooltipContent>{isCopied ? 'Copied' : tooltip}</TooltipContent>
    </Tooltip>
  )
}
