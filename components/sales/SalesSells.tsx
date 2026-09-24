import { SalesHeading } from "@/components/sales/SalesHeading";
import { SalesCta } from "@/components/sales/SalesCta";
import { salesCta, salesSells } from "@/lib/content";

/* ==========================================================================
   BLOCK 5 — it sells, not just replies
   --------------------------------------------------------------------------
   The claim is the heading. The evidence is ten verbs.

   Every "AI for WhatsApp" tool on the market answers a message. Almost none
   create a deal, send a quotation, or hand a conversation to a named person.
   So this is not a feature list — the VERBS are the argument, and every
   decision below exists to make them readable in one pass.

   THE VERB IS SPLIT OUT AND SET IN WHITE. Scan the bold words and you get
   Answer, Ask, Save, Create, Book, Send, Send, Create, Follow up, Hand. Ten
   things being DONE, before reading a single full sentence.

   THE NUMBERS ARE GONE, AND THE FLOW CHANGED WITH THEM. They ran 01-10 down
   the columns, which needed grid-flow-col to keep the count from zig-zagging.
   With no count to protect, the natural reading order wins: row by row, left
   to right, which is the copy doc's own order. Ten numerals also implied a
   sequence these ten do not have — the assistant does not Answer before it
   can Ask.

   A COLOURED BAR PER ROW INSTEAD, five hues down the five rows. They carry
   no information whatsoever, and that is the honest description: ten
   identical pills in two columns read as a wall, and a wall is the wrong
   shape for "look how much it does". The ramp ends on the page's own amber
   and its own bad-red, so it resolves into colours already here rather than
   running off somewhere else. See --color-bar-1..5 in globals.css; they are
   3px marks and must never be used for text.

   A RULE BETWEEN THE COLUMNS, on sm and up only. Two columns of pills with
   nothing between them read as one field of ten; the line says "these are
   two halves of one list" and stops the eye drifting sideways mid-item.

   THIRD LIST IN A ROW, AND IT LOOKS NOTHING LIKE THE OTHER TWO. Block 3 is
   cards with display numerals, block 4 is chips joined by arrows. This is
   pills with disc numerals. Same content type, three different shapes.

   THE LAST LINE IS THE ONE THAT MAKES THE TEN SAFE. Ten autonomous actions
   with nothing qualifying them reads as a machine let loose on your
   customers; "all within the prices, products and rules you set" turns that
   back into a tool. It is boxed, and it carries the only amber bar on the
   page, because it is doing more work than its size suggests.

   THE BUTTON IS INSIDE THE SECTION rather than in a CtaRow under it. It is
   the SAME button — the row that used to sit here moved in, so the page
   still carries eight and not nine. A claim this strong should be followed
   by the ask in the same breath, not after a gap.
   ========================================================================== */

export function SalesSells() {
  return (
    <section className="bg-night px-5 pb-10 md:pb-14">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[720px] text-center">
          {/* A short amber rule, not a full-width one. It marks the top of
              the block without drawing a line across the page. */}
          <span
            aria-hidden="true"
            className="mx-auto block h-[3px] w-11 rounded-full bg-amber"
          />
          <SalesHeading
            text={salesSells.heading}
            accent={salesSells.accent}
            className="mt-6"
          />
        </div>

        {/* `relative` carries the divider; the grid sits on top of it. */}
        <div className="relative mt-9 md:mt-11">
          <span
            aria-hidden="true"
            className="absolute inset-y-2 left-1/2 hidden w-px -translate-x-1/2 bg-white/10 sm:block"
          />
          {/* The dot marks the middle of the run — five rows either side of
              it — and stops the rule reading as a table border. */}
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber ring-4 ring-night sm:block"
          />

          <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-x-9 md:gap-x-11 md:gap-y-3">
            {salesSells.items.map((item, i) => (
              <li
                key={`${item.verb} ${item.rest}`}
                className="flex items-center gap-3.5 rounded-[14px] border border-white/[0.08] bg-night-card py-2.5 pr-3.5 pl-0 md:gap-4 md:py-3 md:pr-4"
              >
                {/* One hue per ROW, so the two columns stay in step across
                    the divider. Decorative: the CSS variable is read inline
                    because Tailwind cannot build a class name from an index
                    at runtime, and five one-off utilities for five 3px marks
                    is worse than one style attribute. */}
                <span
                  aria-hidden="true"
                  className="h-[26px] w-[3px] shrink-0 rounded-r-full md:h-7"
                  style={{
                    backgroundColor: `var(--color-bar-${Math.floor(i / 2) + 1})`,
                  }}
                />
                <span className="text-[15px] leading-snug md:text-[16px]">
                  <span className="font-extrabold text-white">{item.verb}</span>{" "}
                  <span className="text-night-muted">{item.rest}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-7 flex max-w-[620px] items-center gap-3.5 rounded-[14px] border border-white/[0.08] bg-night-card px-4 py-3.5 text-[15.5px] leading-snug text-balance md:mt-9 md:px-5 md:text-[17px]">
          <span
            aria-hidden="true"
            className="h-6 w-[3px] shrink-0 rounded-full bg-amber md:h-7"
          />
          <span>
            <span className="font-extrabold text-amber">
              {salesSells.limitAccent}
            </span>{" "}
            <span className="font-semibold text-white">{salesSells.limit}</span>
          </span>
        </p>

        <div className="mt-8 flex flex-col items-center md:mt-10">
          <SalesCta anim="swipe" />
          <p className="mt-3.5 text-[14px] leading-relaxed font-semibold text-night-muted md:text-[15px]">
            {salesCta.sub}
          </p>
        </div>
      </div>
    </section>
  );
}
