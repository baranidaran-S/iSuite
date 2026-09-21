import type { ReactNode } from "react";
import { SalesHeading } from "@/components/sales/SalesHeading";
import type { salesChapters } from "@/lib/content";

/* ==========================================================================
   BLOCKS 4–8 — one chapter
   --------------------------------------------------------------------------
   The reference runs five named chapters — WAKE UP, LOOK AHEAD, GO WITHIN,
   MOVE FASTER, BECOME THE NEW HUMAN — each an all-caps label, a title, a
   short paragraph and one large image. It is the spine of that page and the
   only part of it that is not a button.

   ONE COMPONENT, FIVE USES. The reference draws all five identically, which
   is what makes them read as chapters of one thing rather than five separate
   pitches. Writing them out five times would guarantee they drift.

   THE MOCK IS PASSED IN rather than chosen here, because each chapter shows a
   different screen and page.tsx is where that mapping belongs. Today they are
   the old hand-drawn mocks; when real screenshots arrive, only page.tsx
   changes.

   `flip` alternates which side the screen sits on from chapter to chapter, so
   five in a row do not march down the page in one column. On a phone there is
   no flip - copy always comes first, because the label and title are what
   tell you whether the screen below is worth looking at.

   WHICH WAS THE WHOLE PROBLEM. `flip` is an lg: utility, so it does nothing
   below 1024px, and roughly nine in ten visitors here are on a phone. The one
   device that mattered got the one version with no variation at all: five
   structurally identical blocks, and twenty identical ticked rows between
   them. The client read it as repetitive and as the old landing page, and it
   was both.

   THREE THINGS FIX IT, AND NONE OF THEM IS `flip`:

   01 / 05. The chapters are a sequence - an enquiry arrives, is answered, is
   booked, is chased, and is traced back to the ad - so the number is true
   rather than decorative, and "/ 05" says how far through you are. It gives
   the run forward motion, and unlike flip it works at every width.

   THE CUSTOMER'S MESSAGE OPENS EACH ONE. This product is about messages; a
   page about messages should start with one rather than with a feature name.
   It is an incoming bubble carrying no name, no business and no outcome - see
   the note on `quote` in content.ts, which is where that line is drawn.

   THE TICKS ARE GONE. A ticked vertical list is the single most generic
   element a landing page can carry, and there were four per chapter. The same
   four facts now sit in a two-column strip with a hairline above them, which
   reads as specification rather than as a checklist and costs half the
   height.
   ========================================================================== */

export function SalesChapter({
  chapter,
  mock,
  index,
  total,
  flip = false,
}: {
  chapter: (typeof salesChapters)[number];
  /** The product screen for this chapter. */
  mock: ReactNode;
  /** 1-based position, printed as 01 / 05. */
  index: number;
  total: number;
  flip?: boolean;
}) {
  const n = String(index).padStart(2, "0");
  const of = String(total).padStart(2, "0");

  return (
    <section className="bg-night px-5 py-9 md:py-12">
      <div className="mx-auto grid max-w-[1100px] items-center gap-7 lg:grid-cols-2 lg:gap-12">
        {/* Copy. Always first in the DOM, so it is always first on a phone. */}
        <div className={flip ? "lg:order-2" : ""}>
          {/* 01 / 05 - where you are in the run. */}
          <div className="flex items-center gap-3.5">
            <span
              aria-hidden="true"
              className="font-display text-[40px] leading-none font-extrabold tabular-nums text-amber md:text-[48px]"
            >
              {n}
            </span>
            <span
              aria-hidden="true"
              className="font-display text-[19px] leading-none font-extrabold tabular-nums text-night-muted/70 md:text-[22px]"
            >
              / {of}
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-white/15" />
            <span className="text-[13px] font-extrabold tracking-[0.2em] text-amber uppercase md:text-[14px]">
              {chapter.label}
            </span>
          </div>

          {/* The message that starts it. Not a testimonial - see content.ts. */}
          <div className="mt-6 max-w-[420px]">
            <p className="text-[11.5px] font-extrabold tracking-[0.16em] text-night-muted uppercase md:text-[12px]">
              {chapter.channel}
            </p>
            <p className="mt-2 rounded-[18px] rounded-bl-[5px] border border-white/12 bg-night-card px-4 py-3 text-[16px] leading-snug font-semibold text-white md:text-[17.5px]">
              {chapter.quote}
            </p>
          </div>

          <SalesHeading
            as="h3"
            text={chapter.title}
            accent={chapter.accent}
            className="mt-6 text-left"
          />

          <p className="mt-4 text-[16.5px] leading-relaxed text-night-muted md:text-[17.5px]">
            {chapter.body}
          </p>

          <ul className="mt-6 grid gap-x-6 gap-y-3 border-t border-white/12 pt-5 sm:grid-cols-2">
            {chapter.points.map((point) => (
              <li
                key={point}
                className="text-[14px] leading-snug font-semibold text-white md:text-[15px]"
              >
                <span aria-hidden="true" className="mr-2 text-amber">
                  &#8213;
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* The screen. */}
        <div className={flip ? "lg:order-1" : ""}>
          <div className="overflow-hidden rounded-[20px] border border-white/10 bg-night-card p-2.5 md:rounded-[24px] md:p-3.5">
            {mock}
          </div>
        </div>
      </div>
    </section>
  );
}
