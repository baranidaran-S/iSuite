import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/icons";
import {
  LostCard,
  ScatterDecor,
  ScatterStack,
} from "@/components/ProblemScatter";
import { problem } from "@/lib/content";

/* ==========================================================================
   PROBLEM - build spec 7.3, built to the approved reference mockup
   --------------------------------------------------------------------------
   A dark navy panel sitting on a WHITE section background, carrying:
     - a two-tone heading, opening clause in teal
     - four white cards, 2x2 on desktop and stacked on mobile
     - a rounded-square icon tile per card, each its own pastel
     - a short flat rule under each title
     - a large ghosted 01-04 numeral top-right

   Icon tiles use four pastels beyond the build spec palette, matching the
   approved mockup. Everything structural stays navy / teal / slate.

   Every cost line describes a situation, never a statistic. No response
   times, revenue figures or percentages are claimed anywhere.
   ========================================================================== */

/** One pastel tile per card, taken from the approved mockup. */
const tiles = [
  { bg: "bg-[#F0E0D6]", fg: "text-[#8C4A29]" },
  { bg: "bg-[#D8E3F5]", fg: "text-[#0E3F84]" },
  { bg: "bg-[#DCE5EF]", fg: "text-[#3A5A7D]" },
  { bg: "bg-[#DCE5EF]", fg: "text-[#8C4A29]" },
];

/** Splits the heading so its opening clause can carry the teal accent. */
function Heading() {
  const { heading, headingAccent } = problem;
  const rest = heading.startsWith(headingAccent)
    ? heading.slice(headingAccent.length)
    : null;

  if (rest === null) return <>{heading}</>;

  return (
    <>
      <span className="text-emerald-tint">{headingAccent}</span>
      {rest}
    </>
  );
}

export function Problem() {
  return (
    // The panel takes the full breadth from xl rather than the 1200px shell.
    // The three-column composition needs it: inside 1200 the outer columns
    // came out at 367px, leaving 187px for a card title, and "Conversations
    // scattered across channels" broke over four lines. The reference is an
    // 1800px canvas. Benefits already breaks the shell the same way.
    <Section
      bg="white"
      padded={false}
      className="py-8 md:py-16"
      innerClassName="2xl:max-w-[1720px]"
    >
      <Reveal>
        {/* Flat forest panel + grain — was a gradient with blurred shapes */}
        <div className="grain relative overflow-hidden rounded-[28px] bg-ink px-6 py-12 md:rounded-[32px] md:px-16 md:py-16">
          <div className="relative z-10">
            {/* Two-tone heading */}
            <h2 className="t-h2 balance text-center text-white">
              <Heading />
            </h2>

            {/* Everything from here down shares one positioning context, so
                the two outer channels can sit either side of the supporting
                copy rather than above it. */}
            <div className="relative mt-8 md:mt-10">
              {/* Placed layer, xl and up. Sits behind the cards, which take
                  their own stacking context below, so the arcs can run down
                  past the top of the card rows into the centre column. */}
              <ScatterDecor />

              {/* Supporting copy — in flow, with the channels flanking it */}
              <p className="t-body balance relative mx-auto max-w-[560px] text-center text-white/75">
                {problem.supporting}
              </p>

              {/* The same story, composed for narrow screens */}
              <ScatterStack />

              {/* The cards wrap AROUND the visual rather than sitting under
                  it: two columns with the Lost card held between them,
                  spanning both rows.

                  Three columns only from 1400px, which is the width where
                  the outer columns first clear 400px. Tailwind's xl is 1280
                  and left 183px for a card title, which broke "Conversations
                  scattered across channels" over four lines. Below that the
                  visual stacks and the cards go two-up.

                  The top margin is the room the placed band needs. */}
              <ul className="relative z-10 mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 2xl:mt-[300px] 2xl:grid-cols-[1fr_330px_1fr] 2xl:gap-x-8">
                {problem.points.map((p, i) => (
                  <li
                    key={p.title}
                    className="hype-row relative flex h-full items-start gap-4 rounded-[20px] bg-[#F7F9FD] p-5 md:gap-5 md:p-6"
                  >
                    {/* Pastel icon tile */}
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl md:h-14 md:w-14 ${tiles[i].bg} ${tiles[i].fg}`}
                    >
                      <Icon
                        name={p.icon as IconName}
                        className="h-6 w-6 md:h-7 md:w-7"
                      />
                    </span>

                    <div className="min-w-0 flex-1 pr-10 md:pr-12">
                      <h3 className="text-base leading-snug font-bold text-forest md:text-lg">
                        {p.title}
                      </h3>

                      {/* Short flat rule */}
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-[3px] w-10 rounded-full bg-emerald-tint/70"
                      />

                      {/* Dark and a size up. These were t-small (14/15px) in slate, which
                        passed contrast at 5.4:1 but read as faint next to the
                        titles — they are the line that actually explains the
                        problem, so they had to carry. 14.1:1 now. */}
                      <p className="mt-2 text-[15px] leading-relaxed text-charcoal md:text-base">
                        {p.cost}
                      </p>
                    </div>

                    {/* Ghosted numeral, zero-padded */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-4 right-4 text-4xl font-extrabold tracking-tight text-emerald-tint/20 md:top-5 md:right-5 md:text-5xl"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}

                {/* The Lost card, held between the two columns of cards.
                  Explicitly placed, so grid auto-placement flows cards 3 and 4
                  back into columns 1 and 3 around it regardless of DOM order.
                  Below 1400px it renders inside ScatterStack instead. */}
                <li
                  aria-hidden="true"
                  className="hidden 2xl:col-start-2 2xl:row-span-2 2xl:row-start-1 2xl:flex 2xl:items-center"
                >
                  <LostCard className="w-full" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
