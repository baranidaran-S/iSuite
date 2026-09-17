"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { journeyMocks, type JourneyMockName } from "@/components/JourneyMocks";
import { howItWorks } from "@/lib/content";

/* ==========================================================================
   HOW IT WORKS — build spec §7.5, rebuilt to the approved journey reference
   --------------------------------------------------------------------------
   One arrow band carrying six numbered steps, with a mini product screen
   under each and a single sentence under that.

   WHY THE RIBBON REPLACED THE CIRCLES. Six glowing circles joined by chevrons
   read as six features that happen to be numbered. A band that runs from one
   edge to the other reads as ONE journey, which is what the heading promises
   and what the section is for. It also gives the dark field a large piece of
   colour, which is what stopped this section looking plain.

   Desktop (xl+): the band runs across six grid columns, segments interlocking.
   Below xl : a numbered rail — the numbers thread down the left, each step's
              title, screen and sentence to their right. Roughly 90% of
              visitors are on a phone, so six across is never attempted there.

   NOT A CAROUSEL, deliberately. Swiping would be the shortest answer to the
   height, but Core Benefits and Meta Ads both already swipe directly below
   this section, and three strips in a row is worse than a long scroll.

   The mocks are structure only — no figure appears in any of them. See the
   header of JourneyMocks.tsx.

   NOTE: this is the page's fourth dark section, alongside the Hero, Meta Ads
   and Final CTA.
   ========================================================================== */

/*
 * Written out rather than built with a template literal: Tailwind reads the
 * source as plain text, so `col-start-${i}` would generate nothing.
 */
const COL_START = [
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
];

/**
 * The accent sits mid-string here ("...to Closed Deal."), so this splits on
 * indexOf rather than startsWith like the other sections.
 */
function Heading() {
  const { heading, headingAccent } = howItWorks;
  const i = heading.indexOf(headingAccent);
  if (i === -1) return <>{heading}</>;
  return (
    <>
      {heading.slice(0, i)}
      <span className="text-emerald-tint">{headingAccent}</span>
      {heading.slice(i + headingAccent.length)}
    </>
  );
}

/** 01…06. Two digits throughout, so the badges never change width. */
const numberOf = (i: number) => String(i + 1).padStart(2, "0");

/**
 * The dark disc on the band.
 *
 * The ink fill alone is 2.15:1 against the ribbon blue — invisible at arm's
 * length, which is exactly how the channel arc's line disappeared earlier. So
 * the RING draws the circle, not the fill: tint at 70% measures 4.09:1 on the
 * band, and the numeral is tint too at 14.1:1 on the ink.
 */
function Badge({
  n,
  lit = false,
  className = "",
}: {
  n: string;
  /** Lights up once the step has been scrolled to. Rail only. */
  lit?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full font-extrabold ring-2 transition-[background-color,color,transform] duration-500 ease-out ${className} ${
        lit
          ? "scale-105 bg-emerald-tint text-ink ring-emerald-tint"
          : "bg-ink text-emerald-tint ring-emerald-tint/70"
      }`}
    >
      {n}
    </span>
  );
}

export function HowItWorks() {
  const steps = howItWorks.steps;

  /* --- The rail lights up as you scroll ---------------------------------
     `reached` is the furthest step that has come into view, and it only ever
     goes forward. A step that lit and then scrolled away stays lit, because
     this is a PROGRESS rail: a thread that filled on the way down and emptied
     again behind you would read as a bug, not as a journey.

     The margin fires a step when it crosses the lower third of the screen,
     which is roughly where the eye is when you scroll to something. */
  const rail = useRef<HTMLOListElement>(null);
  const [reached, setReached] = useState(-1);

  useEffect(() => {
    const items = rail.current?.querySelectorAll("[data-step]");
    if (!items?.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = Number((entry.target as HTMLElement).dataset.step);
          setReached((prev) => (i > prev ? i : prev));
        }
      },
      { rootMargin: "0px 0px -30% 0px" },
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Section
      bg="ink"
      id="how-it-works"
      className="grain relative overflow-hidden"
      /* The band wants room: at the 1200px shell each of the six columns is
         186px, which is tight for a screen mock. Past 1400px it takes the
         extra width rather than leaving it in the margins. */
      innerClassName="2xl:max-w-[1800px]"
    >
      <div className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="balance text-[30px] leading-[1.12] font-extrabold tracking-tight text-white md:text-[42px] lg:text-[50px]">
              <Heading />
            </h2>

            <p className="balance mx-auto mt-5 max-w-[620px] text-base leading-relaxed text-white/70 md:text-lg">
              {howItWorks.lead}
            </p>
          </div>
        </Reveal>

        {/* ================= Desktop: the band runs across ================= */}
        {/*
          `contents` on each <li> keeps the list semantics while letting the
          three parts of a step land in three different grid rows. Placement
          is explicit — auto-placement would put step one's band, card and
          sentence in cells 1, 2 and 3 of the top row.
        */}
        <ol className="mt-16 hidden grid-cols-6 gap-x-4 gap-y-5 xl:grid">
          {steps.map((step, i) => {
            const Mock = journeyMocks[step.mock as JourneyMockName];
            const first = i === 0;
            return (
              <li key={step.title} className="contents">
                <Reveal
                  delay={i * 150}
                  className={`${COL_START[i]} row-start-1`}
                >
                  <div
                    className={`ribbon-seg ${first ? "ribbon-seg-first rounded-l-[10px]" : ""} -mr-[15px] flex min-h-[58px] items-center gap-2 py-2 pr-[26px] ${
                      first ? "pl-4" : "-ml-[15px] pl-[30px]"
                    }`}
                  >
                    <Badge
                      n={numberOf(i)}
                      className="h-6 w-6 text-[10px] 2xl:h-7 2xl:w-7 2xl:text-[11px]"
                    />
                    <span className="text-[13px] leading-tight font-extrabold text-white 2xl:text-[15px]">
                      {step.title}
                    </span>
                  </div>
                </Reveal>

                <Reveal
                  delay={i * 150 + 80}
                  className={`${COL_START[i]} row-start-2 flex`}
                >
                  <Mock />
                </Reveal>

                <Reveal
                  delay={i * 150 + 140}
                  className={`${COL_START[i]} row-start-3`}
                >
                  <p className="text-[13.5px] leading-relaxed text-white/75 2xl:text-[15px]">
                    {step.detail}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* ============ Phone and tablet: a numbered rail ============
            The numbers sit in a column down the left with a line threading
            them together, and each step's title, screen and sentence sit to
            the right of its own number.

            This replaced full-width chevron bars stacked down the page. Those
            cost 56px of vertical space each and pushed the title away from the
            card it belonged to; the rail puts the number, the title and the
            screen on one line of sight, and the thread makes the order
            explicit without repeating the band six times.

            The line is 2px of tint at 50% — 3.9:1 against the dark section.
            Every faint connector on this page has had to be redrawn once
            already; this one starts visible. */}
        <ol ref={rail} className="mx-auto mt-10 max-w-[520px] xl:hidden">
          {steps.map((step, i) => {
            const Mock = journeyMocks[step.mock as JourneyMockName];
            const last = i === steps.length - 1;
            return (
              <li
                key={step.title}
                data-step={i}
                className="grid grid-cols-[40px_1fr] gap-x-4"
              >
                {/* The rail. `flex-1` stretches the thread to the full height
                    of the row beside it, including the gap below, so it runs
                    unbroken from one number into the next. */}
                <div className="flex flex-col items-center">
                  <Badge
                    n={numberOf(i)}
                    lit={i <= reached}
                    className="h-10 w-10 text-[13px]"
                  />

                  {/* The thread. The dim track is always there so the rail
                      never looks broken; the bright inner line grows down it
                      as the NEXT step is reached, so the fill arrives just
                      ahead of the number it is travelling to. */}
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="relative mt-2 w-0.5 flex-1 overflow-hidden rounded-full bg-emerald-tint/25"
                    >
                      <span
                        className={`absolute inset-0 origin-top rounded-full bg-emerald-tint transition-transform duration-700 ease-out ${
                          i < reached ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                    </span>
                  )}
                </div>

                <Reveal delay={i * 120} className={last ? "" : "pb-9"}>
                  {/* min-h-10 centres the title against its number. */}
                  <h3 className="flex min-h-10 items-center text-[17px] leading-tight font-extrabold text-white">
                    {step.title}
                  </h3>

                  <div className="mt-3">
                    <Mock />
                  </div>

                  <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                    {step.detail}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* Closing strip. Restates the row; claims nothing. */}
        <Reveal>
          <div className="mt-14 flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-0 max-w-[140px] flex-1 border-t border-dashed border-emerald-tint/30"
            />
            <span className="text-center text-[11px] leading-tight font-extrabold tracking-[0.16em] text-ink-muted uppercase">
              {howItWorks.footnote}
            </span>
            <span
              aria-hidden="true"
              className="h-0 max-w-[140px] flex-1 border-t border-dashed border-emerald-tint/30"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
