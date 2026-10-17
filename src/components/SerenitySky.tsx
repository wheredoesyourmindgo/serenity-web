/*
 * A plain sky over rolling hills, laid behind the homepage: it opens the page and comes back for
 * the easter egg (see SerenityHero.tsx). The hills rise a little as it fades in. A night sky in
 * dark mode.
 */

// layered hills, back to front, drawn across a 1440 × 320 box stretched to the page width
const HILLS = [
  {
    d: 'M0 170 C240 90 480 90 720 150 S1200 210 1440 120 V320 H0Z',
    className: 'fill-[#a9d98c] dark:fill-[#1d3a27]'
  },
  {
    d: 'M0 230 C200 170 420 170 640 220 S1100 260 1440 190 V320 H0Z',
    className: 'fill-[#82c36c] dark:fill-[#22482d]'
  },
  {
    d: 'M0 285 C300 235 560 250 820 285 S1250 300 1440 260 V320 H0Z',
    className: 'fill-[#5fae58] dark:fill-[#2a5a35]'
  }
]

export default function SerenitySky({show}: {show: boolean}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 bg-linear-to-b from-[#7dbdf4] to-[#e4f2fe] transition-opacity duration-1500 motion-reduce:transition-none dark:from-[#0c1a33] dark:to-[#2b4670] ${show ? 'opacity-100' : 'opacity-0'}`}
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className={`absolute bottom-0 h-[30vh] w-full transition-transform duration-1800 ease-out motion-reduce:transition-none ${show ? 'translate-y-0' : 'translate-y-1/4'}`}
      >
        {HILLS.map((hill) => (
          <path key={hill.d} d={hill.d} className={hill.className} />
        ))}
      </svg>
    </div>
  )
}
