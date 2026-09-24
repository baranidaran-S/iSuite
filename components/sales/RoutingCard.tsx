import { routingCard } from "@/lib/content";

/* ==========================================================================
   CHAPTER 02's VISUAL — what the handover is routed on
   --------------------------------------------------------------------------
   Five criteria, drawn rather than captured. Routing rules are configuration;
   no screen in the product shows them as a list, so there is nothing to
   screenshot and this is not a stand-in for one.

   THE CRITERIA ARE HERE AND THE LADDER IS IN THE POINTS, not the other way
   round. The ladder — 15, 30, 45, 60 — only means anything read in order, so
   it has to stay in one place; the criteria are a set and survive being read
   in any order. Split them the other way and the ladder becomes four
   unrelated timings.

   NUMBERED 01-05 rather than bulleted, and that is a small lie the layout
   tells on purpose: they are not a sequence, they are five inputs weighed at
   once. The numerals are there because five one-word labels in a column with
   no markers read as a dropped list. They are set in the muted grey, not
   amber, so they read as counters rather than steps.
   ========================================================================== */

export function RoutingCard() {
  return (
    <div className="rounded-[14px] bg-night px-4 py-5 md:px-6 md:py-6">
      <p className="text-[11px] font-extrabold tracking-[0.2em] text-night-muted uppercase md:text-[12px]">
        {routingCard.title}
      </p>

      <ul className="mt-5 flex flex-col gap-3.5 md:gap-4">
        {routingCard.criteria.map((c, i) => (
          <li key={c.k} className="flex items-baseline gap-3.5">
            <span
              aria-hidden="true"
              className="font-display w-[22px] shrink-0 text-[15px] leading-none tabular-nums text-night-muted/70 md:text-[16px]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0">
              <span className="text-[15px] leading-snug font-extrabold text-white md:text-[16px]">
                {c.k}
              </span>{" "}
              <span className="text-[13.5px] leading-snug text-night-muted md:text-[14.5px]">
                {c.v}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-white/12 pt-4 text-[13.5px] leading-snug font-semibold text-amber md:text-[14.5px]">
        {routingCard.footer}
      </p>
    </div>
  );
}
