import { SalesHeading } from "@/components/sales/SalesHeading";
import { ShotSlot } from "@/components/sales/ShotSlot";
import { salesFounder } from "@/lib/content";

/* ==========================================================================
   BLOCK 10 — who runs the demo
   --------------------------------------------------------------------------
   The reference's block 10 is its strongest: a photo of the host and five
   lines of what he has done. It is the only place on that page a human
   appears, and it is what makes everything around it credible.

   WE HAVE NOTHING EQUIVALENT YET, AND NOTHING HERE MAY BE INVENTED. So this
   renders the frame and says plainly that the detail is pending, rather than
   filling it with something plausible. MnT Future supplies a photo, a name
   and two or three true, checkable lines — see salesFounder in content.ts.

   The one thing on it that IS confirmed is the note at the bottom: demos are
   run by the team, sometimes by the founder. That came from the client
   directly.

   ONE OF THE TWO LIGHT SECTIONS ON THE PAGE, the other being the form. A
   wider light band was tried from here down to the FAQ and rejected — it
   split the page into two halves that read as two different sites. Narrowed
   to this block alone it does the one thing it was for: fifteen dark
   screens in a row is an endless scroll on a phone, and this is the single
   place a break also means something. A face belongs on a light ground.

   Amber is 1.83:1 here, so nothing on this section uses amber as TEXT — the
   heading accent and the role line are amber FILLS carrying the ground,
   which is 5.48:1. Same colour, same job.
   ========================================================================== */

export function SalesFounder() {
  return (
    <section className="bg-offwhite px-5 pt-12 pb-10 md:pt-16 md:pb-14">
      <div className="mx-auto grid max-w-[1000px] items-center gap-7 md:grid-cols-[minmax(0,320px)_1fr] md:gap-10">
        <ShotSlot
          name="A photo of the founder"
          file="founder.jpg"
          ratio="4 / 5"
          light
        />

        <div>
          <SalesHeading
            text={salesFounder.heading}
            accent={salesFounder.accent}
            light
            className="text-left"
          />

          <p className="font-display mt-5 text-[32px] leading-[1] font-extrabold text-night md:text-[38px]">
            {salesFounder.name}
          </p>
          {/* The role was amber TEXT on the dark band. On this one that is
              1.83:1, so it becomes an amber chip with the ground on it —
              5.48:1, and the same colour still marking the same thing. */}
          <span className="mt-2 inline-block rounded-[5px] bg-amber px-2 py-1 text-[13px] font-extrabold tracking-[0.18em] text-night uppercase md:text-[14px]">
            {salesFounder.role}
          </span>

          <p className="mt-5 text-[15.5px] leading-relaxed text-day-muted md:text-[17px]">
            {salesFounder.body}
          </p>

          <p className="mt-6 border-t border-line pt-5 text-[14px] leading-relaxed font-semibold text-night md:text-[15px]">
            {salesFounder.note}
          </p>
        </div>
      </div>
    </section>
  );
}
