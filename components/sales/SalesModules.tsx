import { SalesHeading } from "@/components/sales/SalesHeading";
import { salesModules } from "@/lib/content";

/* ==========================================================================
   BLOCK 11 — the whole product
   --------------------------------------------------------------------------
   The client's note: "inbox alone is not the entire feature". Correct — the
   five chapters above cover five of thirteen modules, and a reader who has
   only seen those five would think the product is a shared inbox with a bot
   on it.

   This names all thirteen, in one screen, so the page shows the product's
   real size without becoming thirteen chapters. Short lines on purpose: this
   block is scanned, not read. Anything a reader stops on is already a chapter
   above.

   The counts that appear — eight sources, ten triggers, fourteen actions —
   are counts of DOCUMENTED FEATURES, checkable against the requirements doc.
   They are not results and not claims. So is the 01-13 down the left: it
   counts what is on the page, and nothing else.

   THE ONLY BLOCK ON THE PAGE WITH A BRIGHTER CARD. Every other card sits at
   1.12:1 off the ground, which is deliberate — the amber has to be the one
   thing that shouts. This block is the exception because it is the only one
   whose job is to look like a LOT, and thirteen barely-there rectangles do
   the opposite of that. See --color-night-raised in globals.css.
   ========================================================================== */

export function SalesModules() {
  return (
    <section className="bg-night px-5 py-10 md:py-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[720px] text-center">
          <SalesHeading
            text={salesModules.heading}
            accent={salesModules.accent}
          />
          <p className="mt-4 text-[15px] leading-relaxed text-night-muted md:text-[17px]">
            {salesModules.lead}
          </p>
        </div>

        <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 md:mt-10 md:grid-cols-3 md:gap-3">
          {salesModules.items.map((m, i) => (
            <li
              key={m.name}
              className="flex items-center gap-3.5 rounded-[14px] border border-white/18 bg-night-raised px-4 py-4 md:gap-4 md:px-5"
            >
              {/* THE NUMBER. It replaces a 6px amber chevron that was doing no
                  work at all. Numbering is usually decoration, and on a list
                  that is not a sequence it usually should not be there — but
                  the heading above says THIRTEEN MODULES, and the one thing a
                  uniform grid cannot do is make thirteen feel like thirteen.
                  Counting them is the block's whole argument, so the numbers
                  are carrying it.

                  SET BIG. At 19px it was a label in the corner of the card
                  and read as a list marker, which is the job the chevron had
                  just failed at. At 34px it is the first thing in the card
                  and the count is legible from a scroll — which is the only
                  reason the numbers are here.

                  Centred against the text rather than aligned to the first
                  line: a numeral this size hanging off the top of a two-line
                  block looks dropped rather than placed.

                  Padded to 01 and set in tabular figures so the single and
                  double digits share a column and every name starts on the
                  same line. aria-hidden because the <ul> already announces
                  its own count — a screen reader would otherwise hear the
                  number twice. */}
              <span
                aria-hidden="true"
                className="font-display w-[48px] shrink-0 text-[44px] leading-none font-bold tabular-nums text-amber md:w-[58px] md:text-[52px]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <h3 className="text-[16px] leading-snug font-extrabold text-white md:text-[17px]">
                  {m.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-night-muted md:text-[14px]">
                  {m.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
