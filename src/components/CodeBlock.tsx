import CopyButton from '@/components/CopyButton'
import {highlight, type CodeLanguage} from '@/lib/highlight'
import {cn} from 'cn'

/*
 * A snippet to copy: a header bar naming the file it goes in, with the copy button, over the code.
 * Its colors are the --code-* tokens in globals.css. The code is set a size below
 * the body text, since monospace runs wide and snippets are scanned more than read. `wrap` is for
 * one-line blobs like an exported JSON preset, which nobody reads across: they wrap anywhere and
 * scroll in a short box instead of a mile-long line.
 */
export default async function CodeBlock({
  code,
  language,
  label,
  wrap = false
}: {
  code: string
  language: CodeLanguage
  label: string
  wrap?: boolean
}) {
  const text = code.trim()
  const html = await highlight(text, language)

  return (
    <figure className="overflow-hidden rounded-lg border border-(--code-border) bg-(--code-background)">
      <figcaption className="flex items-center justify-between gap-3 border-b border-(--code-border) bg-(--code-bar) py-1 pr-1 pl-3 text-xs text-(--code-muted)">
        <span className="truncate">{label}</span>
        <CopyButton
          text={text}
          variant="ghost"
          className="text-(--code-muted) hover:bg-(--code-hover) hover:text-(--code-foreground) dark:hover:bg-(--code-hover)"
        />
      </figcaption>
      <div
        className={cn(
          'text-xs md:text-[13px]',
          '[&_pre]:overflow-x-auto [&_pre]:px-4 [&_pre]:py-3.5 [&_pre]:leading-relaxed [&_pre]:outline-none',
          wrap && 'max-h-44 overflow-y-auto [&_pre]:break-all [&_pre]:whitespace-pre-wrap'
        )}
        dangerouslySetInnerHTML={{__html: html}}
      />
    </figure>
  )
}
