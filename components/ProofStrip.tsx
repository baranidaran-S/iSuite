import { Icon, type IconName } from "@/components/ui/icons";
import { proofStrip } from "@/lib/content";

/* ==========================================================================
   PROOF STRIP - build spec 7.2
   --------------------------------------------------------------------------
   A tinted transition band after the dark hero, as the spec requires, but
   run as a ticker rather than a single line of text: a pinned "Built for"
   label, then the business types scrolling past as chips.

   The track renders the chip list TWICE and animates to exactly -50%, so the
   loop is seamless. Hovering pauses it, and prefers-reduced-motion turns it
   into an ordinary horizontally scrollable row.
   ========================================================================== */

function Chips({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-3 pr-3"
      aria-hidden={ariaHidden || undefined}
    >
      {proofStrip.items.map((item) => (
        <li
          key={item.label}
          className="flex shrink-0 items-center gap-2.5 rounded-full border border-emerald/20 bg-white py-2.5 pr-5 pl-3 shadow-sm"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-tint">
            <Icon
              name={item.icon as IconName}
              className="h-4 w-4 text-forest"
            />
          </span>
          <span className="text-sm font-bold whitespace-nowrap text-forest">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ProofStrip() {
  return (
    <section className="border-y border-line bg-emerald/[0.07]">
      <div className="shell flex items-center gap-5 py-5 md:gap-8 md:py-6">
        {/* Pinned label */}
        <div className="flex shrink-0 items-center gap-3">
          <span className="text-xs font-extrabold tracking-[0.16em] text-forest uppercase md:text-sm">
            {proofStrip.label}
          </span>
          <span aria-hidden="true" className="h-8 w-px bg-forest/20" />
        </div>

        {/* Ticker */}
        <div className="marquee min-w-0 flex-1">
          <div className="marquee-track">
            <Chips />
            {/* Duplicate makes the -50% loop seamless; hidden from AT */}
            <Chips ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
