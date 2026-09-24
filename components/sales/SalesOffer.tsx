import { SalesHeading } from "@/components/sales/SalesHeading";
import { SalesCta } from "@/components/sales/SalesCta";
import { demoCall } from "@/lib/content";

/* ==========================================================================
   BLOCK 9 — what happens on the call
   --------------------------------------------------------------------------
   The reference's block 9 is the event details, repeated in full: date, time,
   venue, "Hurry! Limited Seats Only", button. It is the page's anchor — the
   thing it keeps coming back to.

   Ours is the demo, stated the same way. Every fact is the client's own
   answer: free, forty-five minutes, Google Meet, run by the team.

   THE LAST LINE IS THE ONE THAT EARNS THE OTHERS. The demo is a walkthrough,
   not a setup session — nobody's account is touched on the call. Saying so
   costs a little enthusiasm and buys the only credibility this page has: it
   carries no rating, no client count and no testimonial by instruction, so
   being straight about the limit is all there is.

   THE WHOLE SECTION IS LIGHT NOW, the second of two on the page after the
   founder. The block that states the offer should not be the same surface as
   the blocks arguing for it, and a colour flip does that far harder than a
   slightly lighter card on the same dark ground ever did.

   AMBER CANNOT BE TEXT HERE. On offwhite it measures 1.83:1, which is not a
   colour, it is a smudge. So every amber on this section is a FILL carrying
   the ground on top of it — the heading accent, the tick discs, the button —
   all at 5.48:1. Same colour, same job, opposite way round. See the same
   note on SalesFounder.
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

const Cross = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-3.5 w-3.5"
  >
    <path d="M6.5 6.5 17.5 17.5" />
    <path d="M17.5 6.5 6.5 17.5" />
  </svg>
);

export function SalesOffer() {
  return (
    <section className="bg-offwhite px-5 py-10 md:py-14">
      <div className="mx-auto max-w-[900px] rounded-[22px] border border-slate/20 bg-white px-5 py-9 md:rounded-[28px] md:px-10 md:py-12">
        <div className="text-center">
          <SalesHeading
            text={demoCall.heading}
            accent={demoCall.headingAccent}
            light
          />
          <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-relaxed text-day-muted md:text-[17px]">
            {demoCall.lead}
          </p>
        </div>

        {/* EIGHT ONE-LINERS, NOT FOUR PARAGRAPHS. They were four points with
            a sentence of explanation each; the copy doc replaced them with
            eight lines that all begin "How". Nothing needs explaining — a
            reader who has scrolled this far has met every one of these
            already, and the list's job is to show the demo covers the page
            they just read, in the order they read it.

            TWO COLUMNS FROM sm UP. Eight short lines in one column is a
            needlessly tall block; at 375px they stay single-file because half
            of 335px cannot hold "How your team receives handovers." on one
            line, and a tick list that wraps looks broken. */}
        <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 md:gap-x-6 md:gap-y-3">
          {demoCall.points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber text-night"
              >
                <Tick />
              </span>
              <span className="text-[15.5px] leading-snug font-semibold text-night md:text-[16.5px]">
                {p}
              </span>
            </li>
          ))}
        </ul>

        {/* The limit, set apart. Listing it with the four above would read as
            a feature. */}
        <div className="mt-6 flex items-start gap-3.5 rounded-[16px] border border-slate/20 bg-offwhite px-4 py-4 md:mt-5 md:px-5">
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber text-night"
          >
            <Cross />
          </span>
          <span className="min-w-0">
            <span className="block text-[16.5px] leading-snug font-extrabold text-night md:text-[17.5px]">
              {demoCall.limit.title}
            </span>
            <span className="mt-1 block text-[13.5px] leading-relaxed text-day-muted md:text-[14.5px]">
              {demoCall.limit.body}
            </span>
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <SalesCta anim="glow" />
        </div>

        <p className="mt-4 text-center text-[13px] leading-relaxed text-day-muted md:text-[14px]">
          {demoCall.footnote}
        </p>
      </div>
    </section>
  );
}
