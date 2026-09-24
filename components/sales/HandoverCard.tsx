import { handoverCard } from "@/lib/content";

/* ==========================================================================
   THE HANDOVER CARD — chapter 04's visual, in place of a screenshot
   --------------------------------------------------------------------------
   Every other chapter shows a product screen. This one shows the five lines
   a salesperson opens when a conversation reaches them, drawn rather than
   captured, and that is the better choice here rather than a shortcut:

     A SCREENSHOT OF THIS PANEL WOULD BE UNREADABLE. The chapter shot is
     drawn 315px wide on a phone. A 1300px capture of a context panel puts
     its labels at about 3px. Drawn in type, the same five lines are 13px and
     legible at any width — and this is the one chapter whose whole argument
     is WHAT THE WORDS SAY, not what the screen looks like.

     IT ALSO CANNOT GO STALE. Every screenshot on this page has been replaced
     at least once and each replacement risked a real name or number going
     public. This panel has no customer in it to redact.

   LABELS IN A FIXED COLUMN. Wants / Done / Pending / Told them / Next line
   up on the left so the five read as one record rather than five sentences.
   On a phone the column would eat half the width, so the labels sit above
   their values instead and the grid collapses to one column.

   THE LAST ROW IS MARKED. Everything above it is what the AI already did;
   NEXT is the only line addressed to the person reading it, so it is the
   only one set in amber and the only one that keeps its rule.
   ========================================================================== */

export function HandoverCard() {
  return (
    <div className="rounded-[14px] bg-night px-4 py-5 md:px-6 md:py-6">
      <p className="text-[11px] font-extrabold tracking-[0.2em] text-night-muted uppercase md:text-[12px]">
        {handoverCard.title}
      </p>

      <dl className="mt-5 flex flex-col gap-3.5 md:gap-4">
        {handoverCard.rows.map((row, i) => {
          const isNext = i === handoverCard.rows.length - 1;
          return (
            <div
              key={row.k}
              className={`grid gap-x-4 gap-y-1 sm:grid-cols-[92px_1fr] md:grid-cols-[104px_1fr] ${
                isNext ? "border-t border-white/12 pt-3.5 md:pt-4" : ""
              }`}
            >
              <dt
                className={`text-[10.5px] font-extrabold tracking-[0.16em] uppercase md:text-[11.5px] ${
                  isNext ? "text-amber" : "text-night-muted"
                } sm:pt-px`}
              >
                {row.k}
              </dt>
              <dd
                className={`text-[14.5px] leading-snug font-semibold md:text-[15.5px] ${
                  isNext ? "text-amber" : "text-white"
                }`}
              >
                {row.v}
              </dd>
            </div>
          );
        })}
      </dl>

      <p className="mt-5 border-t border-white/12 pt-4 text-[13.5px] leading-snug font-semibold text-night-muted md:text-[14.5px]">
        {handoverCard.footer}
      </p>
    </div>
  );
}
