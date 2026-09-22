import Image from "next/image";
import { SHOT_SIZES, ShotSlot } from "@/components/sales/ShotSlot";
import dashboardShot from "@/public/shots/dashboard.png";
import { SalesCta } from "@/components/sales/SalesCta";
import { salesCta, salesHero } from "@/lib/content";
import { site } from "@/lib/site";

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
   answer: free, forty-five minutes, Google Meet. They sit BELOW the button - see
   the note there.

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
        {/* THE LOGO REPLACES THE EYEBROW RATHER THAN SITTING ABOVE IT. The
            eyebrow read "iSuite AI — by MnT Future", which is word for word
            what the artwork already says; stacked, the hero would open by
            telling you the same thing twice in two typefaces. The mark says
            it better, so the text goes.

            mx-auto because the hero is a centred column and an <img> is not
            a block that centres itself from text-center — without it the
            logo sits hard left while everything under it is centred, which
            is exactly the kind of near-miss that reads as broken.

            PRIORITY, because this is the first thing painted above the fold
            and lazy-loading it would leave a hole at the top of the page on
            a slow connection. It costs about 6KB.

            Sized a little larger than the footer's copy: this one is the
            page's first impression, that one is a sign-off. */}
        <Image
          src="/logo.png"
          alt={`${site.product} — product of ${site.company}`}
          width={354}
          height={128}
          sizes="(min-width: 768px) 177px, 133px"
          priority
          className="mx-auto h-12 w-auto md:h-16"
        />

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
        <h1 className="font-display mt-5 text-[clamp(42px,14vw,68px)] leading-[1.05] tracking-[0.01em] text-balance text-white uppercase md:text-[78px] lg:text-[92px]">
          <Headline />
        </h1>

        <p className="mx-auto mt-5 max-w-[680px] text-[17.5px] leading-relaxed text-night-muted md:text-[19px]">
          {salesHero.sub}
        </p>

        {/* THE BUTTON COMES BEFORE THE OFFER CHIPS, not after. The chips sat
            above it and pushed the one control on the page a further 60px
            down a first screen that is already carrying a five-line headline
            and a three-line subhead. On a phone that is the difference
            between the ask being visible on landing and needing a scroll.

            The chips still do their job underneath: the ask first, then what
            it costs and how long it takes. Somebody who has already decided
            can press without reading them, and somebody who has not gets the
            answer immediately below. Nothing is hidden - it is 60px lower and
            the button is 60px higher. */}
        <div className="mt-7 flex flex-col items-center">
          <SalesCta anim="jump" />
        </div>

        <ul className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
          {salesHero.offer.map((item) => (
            <li
              key={item}
              className="rounded-full border border-amber/35 bg-amber/10 px-4 py-2 text-[14px] font-extrabold tracking-wide text-amber uppercase md:text-[15px]"
            >
              {item}
            </li>
          ))}
        </ul>

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
            src={dashboardShot}
            sizes={SHOT_SIZES.hero}
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
