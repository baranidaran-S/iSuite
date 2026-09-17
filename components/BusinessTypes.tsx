import { Section } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/icons";
import { businessTypes } from "@/lib/content";

/* ==========================================================================
   SUITABLE BUSINESS TYPES — build spec §7.8
   --------------------------------------------------------------------------
   BACK ON THE PAGE. It was dropped because it listed showrooms, clinics and
   salons while the Proof Strip at the top named IT companies, consulting
   firms and agencies — the same job done twice, by two lists that disagreed
   about who this is for. Phase 1 cut the strip, which frees this, and the
   page was left with nothing at all telling a reader whether it is for them.

   IT NOW HAS TWO HALVES. The second one is the point.

   This page carries no rating, no client count and no testimonial, by
   instruction. Turning the wrong reader away is the one credibility move
   still available to it — a page that admits who it cannot help reads
   differently from one that claims everybody, and every strong reference
   page we were sent does exactly this. It costs nothing to say and it is
   true.

   Built for : the eight types, as icon tiles.
   Not built for : three plain lines in a panel, each with a cross.

   Colour follows Trust, which runs the same does / doesn't split — emerald
   for the half that fits, copper for the half that does not. Two sections
   making the same kind of admission should not look unrelated.
   ========================================================================== */

const Cross = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-3.5 w-3.5"
  >
    <path d="M6.5 6.5 17.5 17.5" />
    <path d="M17.5 6.5 6.5 17.5" />
  </svg>
);

const eyebrow =
  "text-center text-[11px] font-extrabold tracking-[0.16em] uppercase";

export function BusinessTypes() {
  return (
    <Section bg="offwhite">
      <h2 className="t-h2 balance mx-auto max-w-[760px] text-center text-forest">
        {businessTypes.heading}
      </h2>

      {/* ---------------- Built for ---------------- */}
      <p className={`mt-10 text-emerald ${eyebrow}`}>
        {businessTypes.forHeading}
      </p>

      {/* Eight across only from lg. At md that is 96px a tile, which breaks
          "Service Businesses" over three lines. */}
      <ul className="mx-auto mt-6 grid max-w-[1040px] grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
        {businessTypes.items.map((item) => (
          <li
            key={item.label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="lift flex h-16 w-16 items-center justify-center rounded-full border border-line bg-white">
              <Icon
                name={item.icon as IconName}
                className="h-8 w-8 text-forest"
              />
            </span>
            <span className="t-small font-medium text-forest">
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      {/* ---------------- Not built for ---------------- */}
      <div className="mx-auto mt-12 max-w-[640px] rounded-card border border-line-strong/50 bg-white p-6 md:mt-14 md:p-7">
        <p className={`text-copper ${eyebrow}`}>
          {businessTypes.notForHeading}
        </p>

        <ul className="mt-5 space-y-4">
          {businessTypes.notFor.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-copper-tint text-copper"
              >
                <Cross />
              </span>
              <span className="text-[15px] leading-snug font-medium text-charcoal md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
