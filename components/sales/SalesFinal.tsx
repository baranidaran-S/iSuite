import { SalesHeading } from "@/components/sales/SalesHeading";
import { SalesCta } from "@/components/sales/SalesCta";
import { brandCase } from "@/components/sales/brandCase";
import { salesCta, salesFinal } from "@/lib/content";

/* ==========================================================================
   BLOCK 17 — the last ask
   --------------------------------------------------------------------------
   The page used to end on a bare SalesCtaRow: a button and its sub-line, the
   eighth of eight, with nothing said around it. A reader who has scrolled the
   whole page and not pressed any of the previous seven will not press an
   identical eighth. The last ask has to say something the other seven did
   not, or it is just the same button lower down.

   IT IS THE ONLY SENTENCE ON THE PAGE IN THE FUTURE TENSE, and that is the
   whole device. Everything else here is about what already happened — the
   lead that came in, the message nobody answered at 11pm, the ad that did or
   did not pay. "Your next enquiry is already waiting" has not happened yet,
   and what becomes of it is still open. That is the only moment on the page
   where pressing the button changes something rather than explaining
   something.

   NO LOGO HERE. The footer carries the lockup immediately below this, and
   the same artwork twice inside one screen reads as a mistake rather than a
   sign-off. The wordmark is set in type instead, small, above the payoff.

   THE PAYOFF IS THE HEADLINE'S THIRD AND LAST APPEARANCE — hero,
   differentiator, here. See the note in content.ts.

   NO SCARCITY. Not "last chance", not "before slots fill". This page has no
   seat count and no deadline, and inventing one is the line it does not
   cross. The urgency is the reader's own enquiry, which is real.

   LIGHT GROUND, matching the offer block above the FAQ and the founder. The
   page argues in the dark and asks in the light: every block that wants
   something from the reader is now on offwhite, and every block that is
   explaining sits on night. That is a rule a reader never notices and always
   follows.

   AMBER IS A FILL HERE, NEVER TEXT. 1.83:1 on offwhite. The heading accent
   is a painted block and the button is a painted pill, both carrying the
   ground on top at 5.48:1. Nothing on this section sets amber as a colour.
   ========================================================================== */

export function SalesFinal() {
  return (
    <section className="bg-offwhite px-5 pt-12 pb-12 md:pt-16 md:pb-16">
      <div className="mx-auto max-w-[820px] text-center">
        <SalesHeading
          text={salesFinal.heading}
          accent={salesFinal.accent}
          light
        />

        <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-day-muted md:text-[19px]">
          {salesFinal.sub}
        </p>

        {/* The sign-off. A hairline above it rather than a box: this is the
            page closing its argument, not another card. */}
        <div className="mx-auto mt-9 max-w-[480px] border-t border-slate/25 pt-7 md:mt-11">
          <p className="text-[13px] font-extrabold tracking-[0.2em] text-day-muted uppercase md:text-[14px]">
            {brandCase(salesFinal.brand)}
          </p>
          <p className="font-display mt-2 text-[24px] leading-[1.15] text-night md:text-[30px]">
            {salesFinal.payoff}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <SalesCta anim="wobble" />
          <p className="mt-3 text-[13px] leading-relaxed font-semibold text-day-muted md:text-[14px]">
            {salesCta.sub}
          </p>
        </div>
      </div>
    </section>
  );
}
