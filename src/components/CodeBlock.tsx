import {
  CodeBlock as Block,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle
} from '@/components/ui/code-block'
import {highlight, type CodeLanguage} from '@/lib/highlight'
import {cn} from 'cn'

/*
 * A snippet to copy: the shadcn code block, titled with the file it goes in, with a copy button.
 * Highlighting runs here on the server and hands the block finished lines, so Shiki never reaches
 * the client. `wrap` is for one-line blobs like an exported JSON preset, which nobody reads
 * across: they wrap and scroll in a short box instead of running a mile wide.
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
  const lines = await highlight(text, language)

  return (
    // --code-background in globals.css; dark: too, to beat the block's own dark:bg-input/30
    <Block className="bg-(--code-background) dark:bg-(--code-background)">
      <CodeBlockHeader>
        <CodeBlockTitle>{label}</CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={text} />
        </CodeBlockActions>
      </CodeBlockHeader>
      {/* a size below the body text, since monospace runs wide and snippets are scanned more
          than read */}
      <CodeBlockContent wrap={wrap} className={cn('text-xs md:text-[13px]', wrap && 'max-h-44')}>
        {lines.map((tokens, index) => (
          <CodeBlockLine key={index}>
            {tokens.map(({content, color, italic, bold}, i) => (
              <span
                key={i}
                style={{
                  color,
                  fontStyle: italic ? 'italic' : undefined,
                  fontWeight: bold ? 'bold' : undefined
                }}
              >
                {content}
              </span>
            ))}
          </CodeBlockLine>
        ))}
      </CodeBlockContent>
    </Block>
  )
}
