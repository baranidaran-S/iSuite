import { SalesHeading } from "@/components/sales/SalesHeading";
import { SalesCta } from "@/components/sales/SalesCta";
import { Icon, type IconName } from "@/components/ui/icons";
import { businessTypes, salesAudience, salesCta } from "@/lib/content";

/* ==========================================================================
   BLOCK 12 — who it is for, and who it is not
   --------------------------------------------------------------------------
   The reference gives this two blocks: four dark cards headed "WHO IS THIS
   CHALLENGE FOR?", then a WHITE card headed "Who this is NOT for". The second
   is the one that does the work, and the colour flip is why it lands — it is
   the only light panel in that stretch of the page, so the eye goes to the
   part that turns people away.

   Same here. Six dark cards, then one light panel.

   This page carries no rating, no client count and no testimonial, by
   instruction. Admitting who it cannot help is the only credibility move
   available to it — and the three exclusions are chosen to be TRUE without
   shrinking the market the ads target. "Too small" and "not enough enquiries"
   would cut straight through the audience, so they are not there.
   ========================================================================== */

const Cross = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3.2}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-3.5 w-3.5"
  >
    <path d="M6.5 6.5 17.5 17.5" />
    <path d="M17.5 6.5 6.5 17.5" />
  </svg>
);

export function SalesAudience() {
  return (
    <section className="bg-night px-5 py-10 md:py-14">
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-auto max-w-[720px] text-center">
          <SalesHeading
            text={salesAudience.heading}
            accent={salesAudience.accent}
          />
          <p className="mt-4 text-[15px] leading-relaxed text-night-muted md:text-[17px]">
            {salesAudience.lead}
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-2.5 md:mt-10 md:grid-cols-3 md:gap-3">
          {businessTypes.items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-[14px] border border-white/10 bg-night-card px-4 py-3.5 md:px-5 md:py-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-amber/12 text-amber">
                <Icon name={item.icon as IconName} className="h-5 w-5" />
              </span>
              <span className="text-[15px] leading-snug font-extrabold text-white md:text-[16px]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* The light panel. It is the only one on this stretch of the page,
            which is the whole reason the eye goes to it. */}
        <div className="mt-6 rounded-[20px] bg-white px-5 py-7 md:mt-8 md:px-8 md:py-9">
          <h3 className="font-display text-center text-[33px] leading-[1] font-extrabold text-night md:text-[42px]">
            {salesAudience.notHeading}
          </h3>

          <ul className="mx-auto mt-6 flex max-w-[620px] flex-col gap-3.5">
            {salesAudience.notFor.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bad/15 text-bad"
                >
                  <Cross />
                </span>
                <span className="text-[15.5px] leading-snug font-semibold text-night md:text-[16.5px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <SalesCta anim="tilt" />
          <p className="mt-3 text-[13px] leading-relaxed font-semibold text-night-muted md:text-[14px]">
            {salesCta.sub}
          </p>
        </div>
      </div>
    </section>
  );
}
