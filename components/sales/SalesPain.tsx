import { SalesHeading } from "@/components/sales/SalesHeading";
import { Icon } from "@/components/ui/icons";
import { salesPain } from "@/lib/content";

/* ==========================================================================
   BLOCK 2 — the pain
   --------------------------------------------------------------------------
   THE PAGE HAD NO PROBLEM STATEMENT. It ran hero -> journey -> chapters:
   promise, then product. A reader who has not yet agreed there is a problem
   reads a list of features as a list of things to learn. This is the block
   that makes the rest of the page an answer.

   FOUR MOMENTS, IN TIME ORDER, ON A DASHED THREAD. 11pm, the quotation, the
   silence, the handover. It is ONE enquiry decaying over hours, not four
   separate complaints, and the numerals say so — this is one of only two
   lists on the page where numbering carries information rather than
   decorating a grid.

   THE THREAD IS DASHED, NOT SOLID, AND THAT IS THE ARGUMENT IN A LINE. A
   solid rule would draw a process. What happens between these four moments
   is nothing at all, so the line that joins them is broken.

   TWO LINES WHERE THE COPY HAS TWO SENTENCES. "A customer messages at 11 PM"
   is the event; "Nobody replies" is the failure. Stacking them, with the
   second set quieter, makes the failure land after the event rather than
   beside it. Items 03 and 04 are single sentences and stay single — a `sub`
   on those would have meant inventing half a line each.

   LIGHT GROUND, the first flip on the page. A reader who has just been
   promised something lands on a white screen listing what goes wrong, and
   the change of surface does half the work of the change of subject.

   AMBER CANNOT BE TEXT HERE — 1.83:1 on offwhite, and amber-dark is no
   better at 2.48:1, which is why the hover colour is not the answer. Every
   amber on this section is a FILL with night on top, at 8.90:1.

   NOBODY IS ACCUSED. Every failure is passive: "nobody replies", "someone
   says". The reader IS the person who did not reply at 11pm. A page that
   opens by blaming them gets closed, and the payoff exists to say out loud
   that the gap lost the lead, not the team.
   ========================================================================== */

export function SalesPain() {
  const { items } = salesPain;

  return (
    <section className="bg-offwhite px-5 pt-12 pb-11 md:pt-16 md:pb-14">
      <div className="mx-auto max-w-[760px]">
        <div className="text-center">
          <SalesHeading
            text={salesPain.heading}
            accent={salesPain.accent}
            light
          />
        </div>

        <ol className="mt-9 flex flex-col gap-3 md:mt-11 md:gap-3.5">
          {items.map((item, i) => (
            <li key={item.lead} className="relative flex items-stretch">
              {/* The badge column. `relative` so the dashed segment below it
                  can be pinned to the badge's own centre line rather than
                  guessed at from the row. */}
              <div className="relative flex w-[38px] shrink-0 justify-center md:w-[44px]">
                <span
                  aria-hidden="true"
                  className="font-display z-10 mt-2 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-night text-[15px] leading-none tabular-nums text-white md:h-[44px] md:w-[44px] md:text-[17px]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Dashed, because nothing happens between these four. Drawn
                    per item rather than once behind the list, so it stops at
                    the last badge instead of running past it. */}
                {i < items.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[46px] bottom-[-14px] left-1/2 w-0 -translate-x-1/2 border-l-2 border-dashed border-night/25 md:top-[52px]"
                  />
                )}
              </div>

              {/* The short spur from badge to card. It is what makes the two
                  read as joined rather than merely adjacent. */}
              <span
                aria-hidden="true"
                className="mt-[27px] h-px w-3 shrink-0 bg-night/20 md:mt-[31px] md:w-4"
              />

              <div className="min-w-0 flex-1 rounded-[14px] border border-night/10 bg-white px-4 py-3 md:px-5 md:py-3.5">
                <p className="text-[15.5px] leading-snug font-extrabold text-night md:text-[17px]">
                  {item.lead}
                </p>
                {"sub" in item && item.sub ? (
                  <p className="mt-1 text-[14.5px] leading-snug text-day-muted md:text-[15.5px]">
                    {item.sub}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        {/* THE TURN, in a card of its own. Two sentences, and the split is the
            whole device: the first takes the blame off the ad, the second
            puts it on the gap this product fills. "Between the message and
            the sale" is the hero's "from first message to paid invoice" said
            as a problem — the page poses its question and answers it in the
            same words.

            THE HIGHLIGHT IS INLINE, NOT INLINE-BLOCK, unlike SalesHeading's.
            A full sentence wraps on a phone and an inline-block cannot break;
            inline plus box-decoration-clone paints every fragment, and two
            uneven rectangles read as a marker pen at body size where they
            would look broken at display size. */}
        <div className="mt-9 flex items-center gap-4 rounded-[16px] border border-night/10 bg-white py-4 pr-5 pl-0 md:mt-11 md:gap-5 md:py-5">
          <span
            aria-hidden="true"
            className="h-[52px] w-[3px] shrink-0 rounded-r-full bg-amber md:h-[60px]"
          />
          <span
            aria-hidden="true"
            /* WHITE, NOT AMBER. The glyph sat amber-on-night, which reads at
                8.90:1 and was fine on its own — but the amber left bar and the
                amber highlight are already in this card, and a third amber at
                disc size made the mark itself look like a logo. White on night
                is 16.31:1 and lets the highlight be the only thing shouting. */
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-night text-white md:h-12 md:w-12"
          >
            <Icon name="bars" className="h-5 w-5 md:h-6 md:w-6" />
          </span>
          {/* ONE SENTENCE PER LINE, not one flowing paragraph. Run together,
              "It was lost" fell at the end of the first line and the highlight
              opened on the wrong half of the sentence — the break landed mid
              phrase instead of between the two ideas. The block wrapper puts
              the accent on its own line; the highlight itself stays INLINE
              inside it so it hugs the text rather than filling the card. */}
          <p className="min-w-0 text-[16px] leading-[1.6] font-extrabold md:text-[18.5px]">
            <span className="block text-night">{salesPain.payoff}</span>
            <span className="mt-1.5 block">
              <span className="box-decoration-clone rounded-[4px] bg-amber px-1.5 py-0.5 text-night">
                {salesPain.payoffAccent}
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
