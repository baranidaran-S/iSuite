import { rulesCard } from "@/lib/content";

/* ==========================================================================
   CHAPTER 03's VISUAL — what it will not do
   --------------------------------------------------------------------------
   The six lines from the copy doc, verbatim, and the only list on the page
   drawn with crosses rather than ticks. That is the whole point of it: every
   other list here is things the product DOES, and a business owner deciding
   whether to let a machine talk to their customers is not reassured by
   another feature — they are reassured by a boundary.

   THERE IS NOTHING TO SCREENSHOT. Guardrails are the absence of behaviour;
   no screen in the product displays them. Drawn is not a stand-in here, it
   is the only honest way to show this.

   THE CROSS IS BAD-RED, not amber. Amber on this page means "look at this,
   it is good". These are refusals, and colouring them like a feature would
   undo the sentence they are written in.
   ========================================================================== */

const Cross = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3.2}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-3 w-3"
  >
    <path d="M6.5 6.5 17.5 17.5" />
    <path d="M17.5 6.5 6.5 17.5" />
  </svg>
);

export function RulesCard() {
  return (
    <div className="rounded-[14px] bg-night px-4 py-5 md:px-6 md:py-6">
      <p className="text-[11px] font-extrabold tracking-[0.2em] text-night-muted uppercase md:text-[12px]">
        {rulesCard.title}
      </p>

      <ul className="mt-5 flex flex-col gap-3 md:gap-3.5">
        {rulesCard.rules.map((rule) => (
          <li key={rule} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-bad/15 text-bad"
            >
              <Cross />
            </span>
            <span className="text-[14.5px] leading-snug font-semibold text-white md:text-[15.5px]">
              {rule}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-white/12 pt-4 text-[13.5px] leading-snug font-semibold text-amber md:text-[14.5px]">
        {rulesCard.footer}
      </p>
    </div>
  );
}
