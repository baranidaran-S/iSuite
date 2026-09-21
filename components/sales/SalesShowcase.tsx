import type { CSSProperties } from "react";
import { SalesHeading } from "@/components/sales/SalesHeading";
import { Icon3d, type Icon3dName } from "@/components/ui/icons3d";
import { salesShowcase } from "@/lib/content";

/* ==========================================================================
   BLOCK 3 — the four screens
   --------------------------------------------------------------------------
   The reference's third block is a heading over four images: "what you'll
   experience". Its job is to set up the five chapters that follow, so the
   reader knows the shape of what is coming before scrolling into it.

   ICONS, NOT EMPTY IMAGE FRAMES. Four blank panels waiting on screenshots
   would read as broken. Four named screens read as finished — and each card
   is built so a real screenshot drops in ABOVE the text later without the
   layout moving.

   Two up on a phone rather than one, because these are labels rather than
   content: four full-width cards would be four screens of scrolling to say
   what fits in one.
   ========================================================================== */

export function SalesShowcase() {
  return (
    <section className="bg-night px-5 pb-10 md:pb-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[760px] text-center">
          <SalesHeading
            text={salesShowcase.heading}
            accent={salesShowcase.accent}
          />
          <p className="mt-4 text-[15px] leading-relaxed text-night-muted md:text-[17px]">
            {salesShowcase.lead}
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-4 md:gap-4">
          {salesShowcase.items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-[18px] border border-white/10 bg-night-card p-4 md:p-5"
            >
              {/* The screenshot slot. Until one exists the glyph holds the
                  space, at the size the image will occupy.

                  SOLID, NOT THE LINE SET. The thin hand-drawn icons that dress
                  the old page are the wrong weight beside capitals this heavy
                  — they read as the previous design showing through. icons3d
                  is the solid set, and `--c` has to be the tile's own fill so
                  its cut-out details read as holes rather than disappearing. */}
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-amber/12 text-amber md:h-12 md:w-12"
                style={{ "--c": "var(--color-night-card)" } as CSSProperties}
              >
                <Icon3d
                  name={item.icon as Icon3dName}
                  className="h-6 w-6 md:h-7 md:w-7"
                />
              </span>

              <h3 className="mt-4 text-[17px] leading-snug font-extrabold text-white md:text-[18.5px]">
                {item.name}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-night-muted md:text-[14.5px]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
