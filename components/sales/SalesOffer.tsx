import { SalesHeading } from "@/components/sales/SalesHeading";
import { SalesCta } from "@/components/sales/SalesCta";
import { demoCall, salesCta } from "@/lib/content";

/* ==========================================================================
   BLOCK 9 — what happens on the call
   --------------------------------------------------------------------------
   The reference's block 9 is the event details, repeated in full: date, time,
   venue, "Hurry! Limited Seats Only", button. It is the page's anchor — the
   thing it keeps coming back to.

   Ours is the demo, stated the same way. Every fact is the client's own
   answer: free, thirty minutes, Google Meet, run by the team.

   THE LAST LINE IS THE ONE THAT EARNS THE OTHERS. The demo is a walkthrough,
   not a setup session — nobody's account is touched on the call. Saying so
   costs a little enthusiasm and buys the only credibility this page has: it
   carries no rating, no client count and no testimonial by instruction, so
   being straight about the limit is all there is.

   It is drawn in a LIGHTER PANEL than the rest of the page. The whole page is
   dark ground; the one block that states the offer should not be the same
   surface as the blocks that argue for it.
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
    <section className="bg-night px-5 py-10 md:py-14">
      <div className="mx-auto max-w-[900px] rounded-[22px] border border-amber/25 bg-night-card px-5 py-9 md:rounded-[28px] md:px-10 md:py-12">
        <div className="text-center">
          <SalesHeading text="WHAT HAPPENS ON THE CALL" accent="ON THE CALL" />
          <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-relaxed text-night-muted md:text-[17px]">
            {demoCall.lead}
          </p>
        </div>

        <ul className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
          {demoCall.points.map((p) => (
            <li key={p.title} className="flex items-start gap-3.5">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber"
              >
                <Tick />
              </span>
              <span className="min-w-0">
                <span className="block text-[16.5px] leading-snug font-extrabold text-white md:text-[17.5px]">
                  {p.title}
                </span>
                <span className="mt-1 block text-[13.5px] leading-relaxed text-night-muted md:text-[14.5px]">
                  {p.body}
                </span>
              </span>
            </li>
          ))}
        </ul>

        {/* The limit, set apart. Listing it with the four above would read as
            a feature. */}
        <div className="mt-4 flex items-start gap-3.5 rounded-[16px] border border-white/10 bg-night px-4 py-4 md:mt-5 md:px-5">
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber/20 text-amber"
          >
            <Cross />
          </span>
          <span className="min-w-0">
            <span className="block text-[16.5px] leading-snug font-extrabold text-white md:text-[17.5px]">
              {demoCall.limit.title}
            </span>
            <span className="mt-1 block text-[13.5px] leading-relaxed text-night-muted md:text-[14.5px]">
              {demoCall.limit.body}
            </span>
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <SalesCta anim="glow" />
          <p className="mt-3 text-[13px] leading-relaxed font-semibold text-night-muted md:text-[14px]">
            {salesCta.sub}
          </p>
        </div>

        <p className="mt-4 text-center text-[13px] leading-relaxed text-night-muted md:text-[14px]">
          {demoCall.footnote}
        </p>
      </div>
    </section>
  );
}
