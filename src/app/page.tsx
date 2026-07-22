import AlphaKeyboard from '@/components/keyboard/Alphas'

export default function IndexPage() {
  return (
    <div className="mt-[-10vh] flex min-h-full flex-col items-center justify-center text-center">
      <h1 className="font-body text-solarized-green pb-4 [font-feature-settings:'ss02'_on] text-4xl italic sm:text-5xl md:pb-8 md:text-6xl lg:text-8xl">
        Serenity
      </h1>
      <div className="mt-12 origin-center scale-53 sm:scale-75 md:scale-100">
        <AlphaKeyboard />
      </div>
    </div>
  )
}
