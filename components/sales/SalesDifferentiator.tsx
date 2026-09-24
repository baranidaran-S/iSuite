import { SalesHeading } from "@/components/sales/SalesHeading";
import { brandCase } from "@/components/sales/brandCase";
import { salesDifferentiator } from "@/lib/content";

/* ==========================================================================
   BLOCK 4 — the differentiator
   --------------------------------------------------------------------------
   The only competitive claim on the page. A reader arriving from a Meta ad
   has probably seen three "AI replies to your WhatsApp" tools this week and
   is sorting this into the same pile; this is the block that stops them.

   THE SAME SURFACE AS A PRODUCT-SCREENS CARD, exactly: bg-night-raised,
   which is the #0d3777 -> #115e98 gradient, over border-white/18. It always
   had the fill; the border was white/12 and that alone was enough to make it
   read as a dimmer object beside the brighter-edged cards further down. Two
   blocks meant to look like the same material have to match on both.

   IT IS ALSO THE ONLY OTHER BLOCK ALLOWED THIS SURFACE. night-raised is the
   brightest ground on the page and every other card sits a full step below
   it on night-card. Product screens earns it by having to look like a LOT;
   this earns it by being the one competitive claim. Nothing else should.

   A PANEL, NOT A BAND. It sits between two card grids — the eight journey
   steps above, the chapters below — and a third full-width run of cards
   would disappear between them. One contained panel on a brighter ground
   reads as an interruption, which is what a claim needs to be.

   THE ARROW TRAVELS WITH THE CHIP THAT FOLLOWS IT, not between them as its
   own flex item. Eight chips wrap to three lines on a phone, and a separator
   that wraps on its own leaves an arrow dangling at the end of a line
   pointing at nothing. Bundled into the next chip's leading, a wrap can only
   ever put the arrow at the START of a line, where it still reads as "and
   then".

   FIRST AND LAST ARE MARKED. Message and Payment are the headline's own two
   ends; the six between them are the work. Amber on the ends makes the span
   readable at a glance rather than requiring the reader to parse eight
   words — which is the whole point of compressing block 3 into one line.

   THE PAYOFF REPEATS THE HEADLINE, second of three times on the page. That
   is deliberate. See the note in content.ts.
   ========================================================================== */

export function SalesDifferentiator() {
  const { flow } = salesDifferentiator;

  return (
    <section className="bg-night px-5 pb-10 md:pb-14">
      <div className="mx-auto max-w-[900px] rounded-[20px] border border-white/18 bg-night-raised px-5 py-9 text-center md:rounded-[26px] md:px-10 md:py-12">
        <SalesHeading
          text={salesDifferentiator.heading}
          accent={salesDifferentiator.accent}
        />

        {/* Two sentences, two weights. The first is what everyone else does
            and is set quiet; the second is the claim and is set in white.
            One <p> rather than two so they read as one thought. */}
        <p className="mx-auto mt-4 max-w-[620px] text-[15.5px] leading-relaxed text-night-muted md:text-[17px]">
          {salesDifferentiator.lead}{" "}
          <span className="font-extrabold text-white">
            {brandCase(salesDifferentiator.leadStrong)}
          </span>
        </p>

        <ol className="mt-7 flex flex-wrap items-center justify-center gap-y-2.5 md:mt-9">
          {flow.map((stage, i) => {
            const isEnd = i === 0 || i === flow.length - 1;
            return (
              <li key={stage} className="flex items-center">
                {/* aria-hidden: the <ol> already carries the order, and a
                    screen reader announcing "right arrow" eight times is
                    noise. Non-breaking space either side so the glyph never
                    sits flush against a chip. */}
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="px-1.5 text-[13px] text-night-muted/70 md:px-2 md:text-[14px]"
                  >
                    &#8594;
                  </span>
                )}
                <span
                  className={`rounded-full px-3 py-1.5 text-[13px] font-extrabold tracking-[0.06em] uppercase md:px-3.5 md:text-[14px] ${
                    isEnd
                      ? "bg-amber/12 text-amber ring-1 ring-amber/30"
                      : "bg-white/[0.06] text-white/85"
                  }`}
                >
                  {stage}
                </span>
              </li>
            );
          })}
        </ol>

        <p className="font-display mt-8 text-[24px] leading-[1.1] text-white uppercase md:mt-10 md:text-[30px]">
          {salesDifferentiator.payoff}
        </p>
      </div>
    </section>
  );
}
