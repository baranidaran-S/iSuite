import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/icons";
import { WhatsAppMark } from "@/components/ui/brand";
import { ChatDemo } from "@/components/ChatDemo";
import { solution } from "@/lib/content";

/* ==========================================================================
   SOLUTION INTRO - build spec 7.4
   --------------------------------------------------------------------------
   Side by side on desktop: copy left, looping chat demo right.
   Stacks to copy-then-demo on mobile.

   Deliberately loud, not clean-SaaS: tinted wash, a marker stroke under the
   accent words, a dark panel inside a flat emerald rule, floating chips and a
   rotated sticker.

   Every chip states a documented capability. No metric, rating or count
   appears anywhere.
   ========================================================================== */

/** Small "pop" strokes radiating off a chip's top-right corner. */
const PopLines = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="pointer-events-none absolute -top-3 -right-2 h-5 w-5 text-primary"
  >
    <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M6 10V4" />
      <path d="m11.5 11 4-4.5" />
      <path d="M13 16h6" />
    </g>
  </svg>
);

/**
 * The accent is the PRODUCT NAME, and it sits mid-string, so this splits on
 * indexOf rather than startsWith.
 *
 * THIS ONE DOES NOT USE .hilite. Two earlier passes tried it — first the
 * whole clause "Meet iSuite AI —" in primary (2.9:1, and it read as one more
 * green phrase), then the marker swipe. The swipe was the problem: it marks a
 * key phrase in four other headings on this page, so on the one word that is
 * the product itself it read as ordinary. .brand-block is used here and
 * nowhere else.
 */
function Heading() {
  const { heading, headingAccent } = solution;
  const i = heading.indexOf(headingAccent);
  if (i === -1) return <>{heading}</>;
  return (
    <>
      {heading.slice(0, i)}
      <span className="brand-block">{headingAccent}</span>
      {heading.slice(i + headingAccent.length)}
    </>
  );
}

/**
 * Chip positions.
 *
 * All three ride the panel's TOP and BOTTOM edges, never its middle. The chat
 * frame is centred in the panel with only ~120px of dark either side, and a
 * chip is ~200px wide — so anything placed left, right or centre lands on top
 * of the conversation and covers the message it is meant to be pointing at.
 * The top and bottom bands are the panel's own padding, which is empty.
 *
 * The top-LEFT corner stays free for the sticker.
 */
const chipPositions = [
  "-top-6 right-4", // above the panel, right
  "-bottom-7 right-4", // below the panel, right
  "-bottom-2 left-4", // below the panel, left — staggered so the two read as floating, not as a row
];

export function SolutionIntro() {
  return (
    <Section bg="offwhite" className="grain-soft relative overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[44fr_56fr] md:gap-10 lg:gap-14">
        {/* ---------------- Copy, left ---------------- */}
        <Reveal>
          <div>
            <h2 className="balance text-[30px] leading-[1.12] font-extrabold tracking-tight text-forest md:text-[40px] lg:text-[48px]">
              <Heading />
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate md:text-xl">
              {solution.lead}
            </p>

            {/* Four capability tiles */}
            <ul className="mt-10 grid grid-cols-2 gap-6 xl:grid-cols-4 xl:gap-4">
              {solution.features.map((f) => (
                <li key={f.title}>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${f.bg} ${f.fg}`}
                  >
                    <Icon name={f.icon as IconName} className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-base font-bold text-forest">
                    {f.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {f.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ====================================================================
            PRODUCT DEMO, right

            A pure-CSS looping chat sequence, NOT a video — see ChatDemo.tsx
            for why. If a real walkthrough is shot later, swap <ChatDemo /> for

              <video className="h-full w-full object-cover" controls playsInline
                     preload="none" poster="/video-poster.webp">
                <source src="/isuite-walkthrough.mp4" type="video/mp4" />
              </video>

            and wrap it back in an aspect-video box.
            ==================================================================== */}
        <Reveal delay={120}>
          <div className="relative">
            {/* Rotated sticker */}
            <span className="sticker absolute -top-4 -left-3 z-20 rounded-full bg-primary px-4 py-2 text-xs font-extrabold tracking-wide text-white uppercase md:-top-5 md:-left-5">
              {solution.videoSticker}
            </span>

            {/* Flat emerald rule in place of the gradient frame. The light
                chat UI floats on the dark panel — that contrast is the point. */}
            <div className="relative rounded-[28px] border-2 border-emerald p-1">
              <div className="relative overflow-hidden rounded-[24px] bg-ink px-4 py-6 md:px-6 md:py-8">
                <ChatDemo />
              </div>
            </div>

            {/* Floating capability chips */}
            {solution.videoChips.map((chip, i) => (
              <span
                key={chip.label}
                className={`chip absolute z-20 hidden items-center gap-3 rounded-full bg-white py-2.5 pr-5 pl-2.5 text-sm font-bold text-forest lg:inline-flex ${chipPositions[i]}`}
              >
                {chip.whatsapp ? (
                  <WhatsAppMark className="h-9 w-9 shrink-0" />
                ) : (
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${chip.bg} ${chip.fg}`}
                  >
                    <Icon name={chip.icon as IconName} className="h-5 w-5" />
                  </span>
                )}
                {chip.label}
                <PopLines />
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
