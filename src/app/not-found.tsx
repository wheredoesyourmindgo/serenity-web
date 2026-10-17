import Link from 'next/link'
import {buttonVariants} from '@/components/ui/button'
import {cn} from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl px-2 text-center">
        <h1 className="font-body text-nushu-yellow pb-4 font-features-['ss02'_on] text-4xl italic sm:text-5xl md:text-6xl">
          Page not found
        </h1>
        <p className="text-nushu-ink-strong mx-auto max-w-2xl text-sm leading-7 sm:text-base">
          The page you asked for is not here, or it may have moved. Head back home to the Serenity
          layout reference and start from there.
        </p>
        <div className="mt-8 flex justify-center">
          {/* a real link styled as a button, so it keeps link semantics */}
          <Link
            href="/"
            className={cn(
              buttonVariants({size: 'lg'}),
              'text-primary-foreground! rounded-full px-6'
            )}
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  )
}
