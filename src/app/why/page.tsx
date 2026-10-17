import Link from 'next/link'
import FingerLoad from '@/components/FingerLoad'
import {Kbd, PageBody, PageHeader, Section, TextLink} from '@/components/Page'

/*
 * The case for Serenity. Numbers marked "letters" come from English letter frequency (see
 * FingerLoad.tsx); bigram and trigram numbers come from the analyzer runs on /layout.
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
          holds one common letter (<Kbd>r</Kbd> and <Kbd>i</Kbd>), and the keys above and below are
          rarely used: <Kbd>q</Kbd>, <Kbd>x</Kbd>, <Kbd>-</Kbd>, <Kbd>.</Kbd>.
        </p>
        <p>
          The ring fingers&apos; top-row keys are <Kbd>z</Kbd> and <Kbd>u</Kbd>. A top-row reach is
          fine when the word ends there or the next letter is on the other hand, because nothing is
          pulling against the ring finger. That&apos;s usually what happens after <Kbd>u</Kbd>. On
          QWERTY those keys are <Kbd>w</Kbd> and <Kbd>o</Kbd>, which come up more than three times
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
          Every vowel is on the right hand (<Kbd>e</Kbd> <Kbd>a</Kbd> <Kbd>i</Kbd> on the home row,{' '}
          <Kbd>o</Kbd> <Kbd>u</Kbd> just above), and the most common consonants are on the left.
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
          especially the inner <Kbd>b</Kbd> and <Kbd>k</Kbd> keys, your thumb has an awkward press
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
        <Kbd>z</Kbd> <Kbd>x</Kbd> <Kbd>c</Kbd> <Kbd>v</Kbd> are no longer in a row. The{' '}
        <TextLink href="/firmware">firmware</TextLink> has dedicated Undo, Cut, Copy and Paste keys
        on its navigation layer, so you rarely need the letter shortcuts.
      </>
    )
  },
  {
    title: 'Your right middle finger is busy',
    body: (
      <>
        It handles <Kbd>e</Kbd> and <Kbd>o</Kbd>, about a fifth of all letters. That&apos;s on
        purpose: the middle finger is the strongest you have, and it&apos;s much better at this than
        a pinky.
      </>
    )
  },
  {
    title: 'A few bigrams are still awkward',
    body: (
      <>
        <Kbd>sc</Kbd> and <Kbd>au</Kbd>/<Kbd>ua</Kbd> are the most common same-finger pairs left.
        Each is around a tenth of a percent. Every layout has some; these are Serenity&apos;s.
      </>
    )
  },
  {
    title: 'L and D sit on the bottom row',
    body: (
      <>
        It&apos;s not ideal, but it isn&apos;t an accident. After a pinky press, curling the ring
        and middle fingers down is easier than lifting them up. In <em>world</em>, <Kbd>r</Kbd>{' '}
        <Kbd>l</Kbd> <Kbd>d</Kbd> rolls in smoothly. On the top row, the same roll would fight the
        tendons.
      </>
    )
  }
]

export default function WhyPage() {
  return (
    <>
      <PageHeader title="Why Serenity" lede="A keyboard layout built around how your hands work." />
      <PageBody>
        <p className="text-nushu-ink text-center leading-relaxed text-balance">
          QWERTY&apos;s arrangement dates back to 1870s typewriters, and nobody designed it around
          your hands. Most alternatives tune for scores on a spreadsheet. Serenity starts with your
          hands: which fingers are strong and which aren&apos;t.
        </p>

        <div className="mt-10 mb-16 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card border-border rounded-xl border px-3 py-4 text-center"
            >
              <div className="text-nushu-blue text-3xl font-light">{s.value}</div>
              <div className="text-nushu-ink-strong mt-2 text-xs leading-snug md:text-[13px]">
                {s.label}
              </div>
              <div className="text-nushu-ink-faint mt-1.5 text-[11px]">{s.vs}</div>
            </div>
          ))}
        </div>

        {principles.map((p, i) => (
          <Section key={p.title} icon={p.icon} title={p.title}>
            {p.body}
            {i === 1 && (
              <figure className="pt-4">
                <FingerLoad />
                <figcaption className="text-nushu-ink-faint mx-auto mt-3 max-w-md text-center text-xs leading-relaxed">
                  Serenity actually gives the ring and pinky fingers slightly <em>more</em> work
                  than QWERTY does, by moving load off overworked index fingers. The difference is
                  where that work happens.
                </figcaption>
              </figure>
            )}
          </Section>
        ))}

        <Section icon="fa-regular fa-keyboard" title="Any keyboard, best on columns">
          <p>
            Serenity isn&apos;t tied to one board. It&apos;s tuned for ortholinear and
            column-staggered keyboards, where keys sit in straight columns and every finger moves
            straight up and down. That&apos;s where it feels best.
          </p>
          <p>
            It also works on an ordinary row-staggered keyboard. On a Mac laptop, the{' '}
            <TextLink href="/software">Karabiner config</TextLink> gives you Serenity and its layers
            without new hardware. On a split or ortho board, the{' '}
            <TextLink href="/firmware">QMK firmware</TextLink> builds it into the keyboard.
          </p>
        </Section>

        <Section icon="fa-regular fa-scale-balanced" title="The honest part">
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {tradeoffs.map((t) => (
              <div key={t.title}>
                <h3 className="text-nushu-ink-deep mb-1.5 font-medium">{t.title}</h3>
                <p className="text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <div className="bg-card border-border mt-16 rounded-xl border px-6 py-8 text-center">
          <p className="text-nushu-ink-strong text-balance md:text-lg">
            If your hands ache at the end of the day, or you just want a layout that makes sense,
            give it a try.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              {href: '/layout', label: 'See the full stats'},
              {href: '/firmware', label: 'Get the firmware'},
              {href: '/software', label: 'Try it on a Mac'}
            ].map(({href, label}) => (
              <Link
                key={href}
                href={href}
                className="border-border bg-background hover:bg-accent text-nushu-blue rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </PageBody>
    </>
  )
}
