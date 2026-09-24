import Image from "next/image";
import { brandCase } from "@/components/sales/brandCase";
import { ChannelMark, type ChannelName } from "@/components/sales/ChannelMark";
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

/* brandCase runs on each slice separately, so the brand keeps its own casing
   under the h1's uppercase and an accent containing one still gets both
   treatments. It was not here until the headline began with "iSuite AI" —
   the previous one had no brand name in it, and without this the page opens
   by calling the product ISUITE AI. */
function Headline() {
  const { headline, accent } = salesHero;
  const i = headline.indexOf(accent);
  if (i === -1) return <>{brandCase(headline)}</>;
  return (
    <>
      {brandCase(headline.slice(0, i))}
      <span className="text-amber">{brandCase(accent)}</span>
      {brandCase(headline.slice(i + accent.length))}
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

        {/* FLUID, NOT STEPPED. A fixed size is the same on a 320px phone and
            a 430px one, so the big phones most people carry get the headline
            built for the smallest. 9.6vw scales it to the glass and the clamp
            stops it at both ends.

            THIS SCALE IS SET BY THE STRING, and the string is 150 characters
            since the headline and the subhead were swapped. Measured in Anton
            out of the built woff2, not estimated:

                        col     size    lines   height
                320px   280    30.7px     7      237px
                375px   335     36px      7      277px
                430px   390    41.3px     7      318px
                768px   728     42px      4      185px
               1024px+  940     56px      4      246px

            At the old clamp(42,14vw,68) the same sentence ran TWELVE lines
            and 662px at 375px — a whole phone screen of headline, with the
            button below the fold on every handset. Shorten the sentence and
            this should go back up; it is small because the copy is long.

            NO WORD CAN OVERFLOW, which matters more than it sounds: one word
            wider than the screen and the WHOLE PAGE scrolls sideways. The
            longest here is "quotation," at 150px in a 335px column.

            text-pretty, NOT text-balance. Balance is for headings of two to
            four lines and Chromium ignores it past six, so on a phone it did
            nothing at all; pretty keeps the last line off a single orphan
            word, which is the failure this shape actually has. */}
        <h1 className="font-display mt-5 text-[clamp(30px,9.6vw,44px)] leading-[1.1] tracking-[0.01em] text-pretty text-white uppercase md:text-[42px] lg:text-[56px]">
          <Headline />
        </h1>

        <p className="mx-auto mt-5 max-w-[680px] text-[17.5px] leading-relaxed text-night-muted md:text-[19px]">
          {salesHero.sub}
        </p>

        {/* WHO IT IS FOR. Set in white rather than the muted grey the subhead
            uses, because it is a qualifying line and not a footnote — a
            reader scanning for "is this me?" has to be able to find it. It
            sits between the promise and the ask deliberately: the last thing
            read before the button is the sentence that says the button is
            for you. */}
        <p className="mt-4 text-[15px] font-extrabold text-white md:text-[16.5px]">
          {salesHero.qualifier}
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

        {/* THE CHANNELS, each with its own mark. They were middot-separated
            text, which named the channels without ever showing them — and a
            green bubble is recognised before the word beside it is read.

            QUIETER CHIPS THAN THE OFFER ABOVE, deliberately. Those are amber
            and are what you GET; these are white-on-nothing and are what you
            already USE. Same shape, a full step down in weight, so the row
            reads as context rather than as five more benefits.

            The logos keep their brand colours while the labels stay white —
            the mark does the recognising, the label does the reading, and
            five coloured words would have been a ransom note. */}
        <ul className="mx-auto mt-5 flex max-w-[520px] flex-wrap items-center justify-center gap-2">
          {salesHero.channels.map((channel) => (
            <li
              key={channel.label}
              className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[13px] font-semibold text-white md:px-3.5 md:text-[14px]"
            >
              <ChannelMark
                name={channel.name as ChannelName}
                className="h-[15px] w-[15px] shrink-0 text-night-muted md:h-4 md:w-4"
              />
              {channel.label}
            </li>
          ))}
        </ul>
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
