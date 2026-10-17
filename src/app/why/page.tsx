import Link from 'next/link'
import FaIcon from '@/components/FaIcon'
import FingerLoad from '@/components/FingerLoad'

/*
 * The case for Serenity. Numbers marked "letters" come from English letter frequency (see
 * FingerLoad.tsx); bigram and trigram numbers come from the analyzer runs on /alphas.
 */

const stats = [
  {value: '66%', label: 'of letters typed on the home row', vs: 'QWERTY: 34%'},
  {value: '4 in 5', label: 'ring and pinky keystrokes stay on the home row', vs: 'QWERTY: 3 in 5'},
  {value: '<1%', label: 'same-finger bigrams', vs: 'lower is better'},
  {value: '2.8%', label: 'of letters need a ring finger top-row reach', vs: 'QWERTY: 9.9%'}
]

const principles = [
  {
    icon: 'fa-regular fa-hand',
    title: 'Not all fingers are equal',
    body: (
      <>
        <p>
          Your index and middle fingers are long, strong and independent. Your ring finger shares
          tendons with its neighbors, so it can&apos;t move freely on its own. Your pinky is short
          and gets tired quickly. A layout that treats all eight fingers the same is asking the
          weakest ones to keep up with the strongest.
        </p>
        <p>
          Serenity gives each finger work that suits it. The index and middle fingers handle the
          reaching. The ring and pinky fingers still pull their weight, but almost all of it is on
          the home row, where they rest anyway.
        </p>
      </>
    )
  },
  {
    icon: 'fa-regular fa-house-user',
    title: 'Weak fingers stay home',
    body: (
      <>
        <p>
          This is the core idea. The ring finger is tied to the middle finger and pinky by shared
          tendons, so it moves best when they move with it. Curling down together comes naturally.
          Lifting the ring finger up a row while the pinky or middle finger is still pressing a key
          works against that linkage. The distance isn&apos;t the problem. Fighting the tendons in
          the middle of a word is.
        </p>
        <p>
          So Serenity keeps the ring and pinky fingers working on the home row. Each pinky column
          holds one common letter (<Key>r</Key> and <Key>i</Key>), and the keys above and below are
          rarely used: <Key>q</Key>, <Key>x</Key>, <Key>-</Key>, <Key>.</Key>.
        </p>
        <p>
          The ring fingers&apos; top-row keys are <Key>z</Key> and <Key>u</Key>. A top-row reach is
          fine when the word ends there or the next letter is on the other hand, because nothing is
          pulling against the ring finger. That&apos;s usually what happens after <Key>u</Key>. On
          QWERTY those keys are <Key>w</Key> and <Key>o</Key>, which come up more than three times
          as often.
        </p>
      </>
    )
  },
  {
    icon: 'fa-regular fa-arrows-left-right',
    title: 'Vowels on one hand, consonants on the other',
    body: (
      <>
        <p>
          Every vowel is on the right hand (<Key>e</Key> <Key>a</Key> <Key>i</Key> on the home row,{' '}
          <Key>o</Key> <Key>u</Key> just above), and the most common consonants are on the left.
          English mostly alternates between consonants and vowels, so your hands mostly alternate
          too. While one hand types, the other is already moving to its next key.
        </p>
      </>
    )
  },
  {
    icon: 'fa-regular fa-wave-sine',
    title: 'Flow over raw speed',
    body: (
      <>
        <p>
          Rolls and alternation make up over three quarters of three-letter sequences. Redirects,
          where one hand changes direction mid-word, stay under 3%. Typing the same finger twice in
          a row, the most common source of awkward stutter, is rare, and Serenity works to keep it
          off the pinkies.
        </p>
        <p>
          Flow includes the space bar. With your index finger curled down to the bottom row,
          especially the inner <Key>b</Key> and <Key>k</Key> keys, your thumb has an awkward press
          on space. So Serenity tries to keep common word endings off those keys, and most words
          finish with your hand ready for the space bar.
        </p>
      </>
    )
  }
]

const tradeoffs = [
  {
    title: 'Shortcuts move',
    body: (
      <>
        <Key>z</Key> <Key>x</Key> <Key>c</Key> <Key>v</Key> are no longer in a row. The{' '}
        <Link href="/firmware" className="text-nushu-blue hover:underline">
          firmware
        </Link>{' '}
        has dedicated Undo, Cut, Copy and Paste keys on its navigation layer, so you rarely need the
        letter shortcuts.
      </>
    )
  },
  {
    title: 'Your right middle finger is busy',
    body: (
      <>
        It handles <Key>e</Key> and <Key>o</Key>, about a fifth of all letters. That&apos;s on
        purpose: the middle finger is the strongest you have, and it&apos;s much better at this than
        a pinky.
      </>
    )
  },
  {
    title: 'A few bigrams are still awkward',
    body: (
      <>
        <Key>sc</Key> and <Key>au</Key>/<Key>ua</Key> are the most common same-finger pairs left.
        Each is around a tenth of a percent. Every layout has some; these are Serenity&apos;s.
      </>
    )
  },
  {
    title: 'L and D sit on the bottom row',
    body: (
      <>
        It&apos;s not ideal, but it isn&apos;t an accident. After a pinky press, curling the ring
        and middle fingers down is easier than lifting them up. In <em>world</em>, <Key>r</Key>{' '}
        <Key>l</Key> <Key>d</Key> rolls in smoothly. On the top row, the same roll would fight the
        tendons.
      </>
    )
  }
]

function Key({children}: {children: React.ReactNode}) {
  return (
    <kbd className="bg-nushu-paper-dim text-nushu-ink-deep border-border rounded border px-1.5 py-0.5 text-[0.9em] not-italic">
      {children}
    </kbd>
  )
}

function Section({children, className}: {children: React.ReactNode; className?: string}) {
  return (
    <section
      className={`bg-card border-border mx-auto mt-12 max-w-225 rounded-xl border p-4 md:p-8 ${className ?? ''}`}
    >
      {children}
    </section>
  )
}

export default function WhyPage() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-nushu-yellow pt-4 pb-4 text-4xl font-light tracking-[-0.00833em] md:pt-8 md:pb-6 md:text-6xl">
          Why Serenity
        </h2>
        <p className="text-nushu-ink-strong max-w-175 text-lg md:text-xl">
          A keyboard layout built around how your hands work.
        </p>
        <p className="text-nushu-ink mt-4 max-w-175">
          QWERTY&apos;s arrangement dates back to 1870s typewriters, and nobody designed it around
          your hands. Most alternatives tune for scores on a spreadsheet. Serenity starts with your
          hands: which fingers are strong and which aren&apos;t.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-225 grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border-border rounded-xl border p-4 text-center">
            <div className="text-nushu-blue text-3xl font-light md:text-4xl">{s.value}</div>
            <div className="text-nushu-ink-strong mt-2 text-sm">{s.label}</div>
            <div className="text-nushu-ink-faint mt-1 text-xs">{s.vs}</div>
          </div>
        ))}
      </div>

      {principles.map((p, i) => (
        <Section key={p.title}>
          <h3 className="text-nushu-blue mb-4 flex items-center gap-3 text-2xl font-normal">
            <FaIcon className={p.icon} color="nushu.ink-faint" />
            {p.title}
          </h3>
          <div className="text-nushu-ink space-y-4 leading-relaxed">{p.body}</div>
          {i === 1 && (
            <div className="mt-8">
              <FingerLoad />
              <p className="text-nushu-ink-faint mt-2 text-center text-xs">
                Serenity actually gives the ring and pinky fingers slightly <em>more</em> work than
                QWERTY does, by moving load off overworked index fingers. The difference is where
                that work happens.
              </p>
            </div>
          )}
        </Section>
      ))}

      <Section>
        <h3 className="text-nushu-blue mb-4 flex items-center gap-3 text-2xl font-normal">
          <FaIcon className="fa-regular fa-keyboard" color="nushu.ink-faint" />
          Any keyboard, best on columns
        </h3>
        <div className="text-nushu-ink space-y-4 leading-relaxed">
          <p>
            Serenity isn&apos;t tied to one board. It&apos;s tuned for ortholinear and
            column-staggered keyboards, where keys sit in straight columns and every finger moves
            straight up and down. That&apos;s where it feels best.
          </p>
          <p>
            It also works on an ordinary row-staggered keyboard. On a Mac laptop, the{' '}
            <Link href="/software" className="text-nushu-blue hover:underline">
              Karabiner config
            </Link>{' '}
            gives you Serenity and its layers without new hardware. On a split or ortho board, the{' '}
            <Link href="/firmware" className="text-nushu-blue hover:underline">
              QMK firmware
            </Link>{' '}
            builds it into the keyboard.
          </p>
        </div>
      </Section>

      <Section>
        <h3 className="text-nushu-blue mb-6 flex items-center gap-3 text-2xl font-normal">
          <FaIcon className="fa-regular fa-scale-balanced" color="nushu.ink-faint" />
          The honest part
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {tradeoffs.map((t) => (
            <div key={t.title}>
              <h4 className="text-nushu-ink-strong mb-2 font-medium">{t.title}</h4>
              <p className="text-nushu-ink text-sm leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="mx-auto mt-16 max-w-175 text-center">
        <p className="text-nushu-ink-strong text-lg">
          If your hands ache at the end of the day, or you just want a layout that makes sense, give
          it a try.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            {href: '/alphas', label: 'See the full stats'},
            {href: '/firmware', label: 'Get the firmware'},
            {href: '/software', label: 'Try it on a Mac'}
          ].map(({href, label}) => (
            <Link
              key={href}
              href={href}
              className="border-border hover:bg-accent text-nushu-blue rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
