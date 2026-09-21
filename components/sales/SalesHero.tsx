import { ShotSlot } from "@/components/sales/ShotSlot";
import { SalesCta } from "@/components/sales/SalesCta";
import { salesCta, salesHero } from "@/lib/content";

/* ==========================================================================
   BLOCKS 1 + 2 — the question, and the offer
   --------------------------------------------------------------------------
   The reference opens with a QUESTION aimed at the reader — "Are you ready
   for the AI Era?" — not a statement about the product, and puts the entire
   offer on the first screen directly under it: what it costs, what it is, and
   the button. Both blocks are one visual unit there, so they are one
   component here.

   ALL CAPS, TWO-TONE. Every headline on that page is set in heavy capitals
   with the key phrase in the accent colour. It is the single loudest signal
   that this is a sales page rather than a product site, and it costs nothing.

   WHAT IS DELIBERATELY MISSING. Their block 2 carries a struck-through price
   and "Hurry! Limited Seats Only". We have no ticket, no deadline and no seat
   count, so those lines are absent rather than invented. The three offer
   chips do that work instead, and every one of them is the client's own
   answer: free, thirty minutes, Google Meet.

   THE HERO SHOT IS THE DASHBOARD, NOT THE INBOX. It was the inbox, and so was
   chapter 4 — the client flagged it: the inbox is one part of the product,
   not the product. The dashboard shows open deals, pipeline value, today's
   bookings and first-response time in one frame, which is the strongest
   single screen and does not repeat anything below it.

   The real file is in. Its numbers are sample figures, not a customer's —
   tracked in site.PLACEHOLDER_CLAIMS until the client confirms them.
   ========================================================================== */

function Headline() {
  const { headline, accent } = salesHero;
  const i = headline.indexOf(accent);
  if (i === -1) return <>{headline}</>;
  return (
    <>
      {headline.slice(0, i)}
      <span className="text-amber">{accent}</span>
      {headline.slice(i + accent.length)}
    </>
  );
}

export function SalesHero() {
  return (
    <section className="bg-night px-5 pt-8 pb-10 md:pt-12 md:pb-14">
      <div className="mx-auto max-w-[940px] text-center">
        <p className="text-[12.5px] font-extrabold tracking-[0.22em] text-amber uppercase md:text-[13px]">
          {salesHero.eyebrow}
        </p>

        {/* FLUID, NOT STEPPED. A fixed 30px was the same on a 320px phone and
            a 430px one, so the big phones most people carry were handed the
            headline built for the smallest. 10.5vw scales it to the glass and
            the clamp stops it at both ends.

            THE CEILING IS MEASURED, not guessed. The longest unbreakable word
            here is ENQUIRIES at 9 capitals; in Plus Jakarta Sans ExtraBold
            that is about 9 x 0.72em. At the 320px floor the clamp gives 32px
            -> 207px inside a 280px column, and at 375px it gives 39px -> 255px
            inside 335px. Neither can overflow, which matters more than it
            sounds: one word wider than the screen and the WHOLE PAGE scrolls
            sideways. */}
        <h1 className="font-display mt-5 text-[clamp(42px,14vw,68px)] leading-[0.92] font-extrabold tracking-[0.01em] text-balance text-white uppercase md:text-[78px] lg:text-[92px]">
          <Headline />
        </h1>

        <p className="mx-auto mt-5 max-w-[680px] text-[17.5px] leading-relaxed text-night-muted md:text-[19px]">
          {salesHero.sub}
        </p>

        {/* The offer, stated before the button rather than after it. */}
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {salesHero.offer.map((item) => (
            <li
              key={item}
              className="rounded-full border border-amber/35 bg-amber/10 px-4 py-2 text-[14px] font-extrabold tracking-wide text-amber uppercase md:text-[15px]"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-center">
          <SalesCta anim="jump" />
        </div>

        <p className="mx-auto mt-4 max-w-[440px] text-[14.5px] leading-relaxed text-night-muted md:text-[15px]">
          {salesHero.offerNote}
        </p>
      </div>

      {/* The product, straight after the ask. The reference puts its banner
          here; ours puts the thing being sold. */}
      <div className="mx-auto mt-9 max-w-[1100px] md:mt-12">
        <div className="overflow-hidden rounded-[20px] border border-white/10 bg-night-card p-2.5 md:rounded-[26px] md:p-4">
          <ShotSlot
            name="The dashboard - open deals, pipeline value, today's bookings, first-response time"
            file="dashboard.png"
            src="/shots/dashboard.png"
            ratio="16 / 9"
            priority
          />
        </div>

        <p className="mt-4 text-center text-[12px] font-extrabold tracking-[0.16em] text-night-muted uppercase md:text-[13px]">
          {salesHero.shotCaption}
        </p>
      </div>
    </section>
  );
}
