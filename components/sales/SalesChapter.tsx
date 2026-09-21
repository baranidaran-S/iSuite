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
   no flip — copy always comes first, because the label and title are what
   tell you whether the screen below is worth looking at.
   ========================================================================== */

const Tick = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-3.5 w-3.5"
  >
    <path d="m5 12.5 4.6 4.5L19 7.5" />
  </svg>
);

export function SalesChapter({
  chapter,
  mock,
  flip = false,
}: {
  chapter: (typeof salesChapters)[number];
  /** The product screen for this chapter. */
  mock: ReactNode;
  flip?: boolean;
}) {
  return (
    <section className="bg-night px-5 py-9 md:py-12">
      <div className="mx-auto grid max-w-[1100px] items-center gap-7 lg:grid-cols-2 lg:gap-12">
        {/* Copy. Always first in the DOM, so it is always first on a phone. */}
        <div className={flip ? "lg:order-2" : ""}>
          <span className="inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-amber" />
            <span className="text-[13px] font-extrabold tracking-[0.2em] text-amber uppercase md:text-[14px]">
              {chapter.label}
            </span>
          </span>

          <SalesHeading
            as="h3"
            text={chapter.title}
            accent={chapter.accent}
            className="mt-4 text-left"
          />

          <p className="mt-4 text-[16.5px] leading-relaxed text-night-muted md:text-[17.5px]">
            {chapter.body}
          </p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {chapter.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber"
                >
                  <Tick />
                </span>
                <span className="text-[14.5px] leading-snug font-semibold text-white md:text-[15.5px]">
                  {point}
                </span>
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
