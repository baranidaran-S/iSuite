import { SalesHeading } from "@/components/sales/SalesHeading";
import { salesJourney } from "@/lib/content";

/* ==========================================================================
   BLOCK 3 — the journey
   --------------------------------------------------------------------------
   It replaced "FOUR SCREENS YOUR TEAM WILL LIVE IN", which was a tour of the
   software: four named screens, before a reader had any reason to care what
   the screens were. This is the eight steps ONE enquiry moves through, which
   is the thing the page now sells. The old block was also saying the same
   thing as PRODUCT SCREENS further down, in a shorter list.

   TWO NUMBERED LISTS IN A ROW, AND THEY HAD TO LOOK DIFFERENT. Block 2 is
   also numbered, and running the same device twice would make the second one
   read as a continuation of the first. So they are opposites on purpose:

     block 2   a thin vertical thread, small grey numerals, no cards
               — one thing decaying, downward, quiet

     block 3   a grid of cards, large amber numerals, white names
               — eight things happening, forward, loud

   Same content type, opposite shape, and the reader never has to work out
   which list they are in.

   ONE COLUMN ON A PHONE, NOT TWO. The showcase before it went two-up because
   its cards were labels. These carry a sentence each, and half of 375px
   leaves about 130px of text column — a seven-word line would break over
   four. One column also keeps the sequence unambiguous, which matters here
   and did not there: 01 to 08 read straight down instead of zig-zagging.

   NO ICONS, DELIBERATELY. The showcase had eight-odd glyphs and so does the
   audience grid; a third icon set in the same scroll starts to look like
   decoration applied by habit. The numerals already carry the order, and
   order is the only thing these eight need to communicate.

   IT CARRIES ITS OWN TOP PADDING, which the sections around it do not. They
   were all dark and adjacent, so each leaned on the bottom padding of the
   block above. Block 2 is light now, and a dark band starting flush against
   a light one put this heading hard against the colour change. A section
   that follows a different ground cannot borrow its spacing.

   THREE STEPS HAVE NO CHAPTER BELOW THEM — Hand over, Propose, Close & get
   paid. The five chapters stop at attribution. Until chapters exist for
   those, this block is the only place they appear on the page.
   ========================================================================== */

export function SalesJourney() {
  return (
    <section className="bg-night px-5 pt-11 pb-10 md:pt-14 md:pb-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[820px] text-center">
          <SalesHeading
            text={salesJourney.heading}
            accent={salesJourney.accent}
          />
          <p className="mt-4 text-[15px] leading-relaxed text-night-muted md:text-[17px]">
            {salesJourney.lead}
          </p>
        </div>

        <ol className="mt-8 grid gap-2.5 sm:grid-cols-2 md:mt-10 md:gap-3 lg:grid-cols-4">
          {salesJourney.steps.map((step, i) => (
            <li
              key={step.name}
              className="rounded-[16px] border border-white/10 bg-night-card px-4 py-4 md:px-5 md:py-5"
            >
              {/* The numeral is the whole ordering device, so it is set at
                  display size rather than as a label in the corner. Padded to
                  01 and tabular so 01 and 08 occupy the same width and every
                  name below starts on the same left edge.

                  aria-hidden because the <ol> already announces its own
                  count — a screen reader would otherwise hear "one, oh one,
                  Respond". */}
              <span
                aria-hidden="true"
                className="font-display block text-[26px] leading-none tabular-nums text-amber md:text-[30px]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-3 text-[16.5px] leading-snug font-extrabold text-white md:text-[18px]">
                {step.name}
              </h3>

              <p className="mt-1.5 text-[14.5px] leading-snug text-night-muted md:text-[15px]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
