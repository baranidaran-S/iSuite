import { SalesHeading } from "@/components/sales/SalesHeading";
import { ShotSlot } from "@/components/sales/ShotSlot";
import { brandCase } from "@/components/sales/brandCase";
import { salesFounder } from "@/lib/content";
import { site } from "@/lib/site";

/* ==========================================================================
   BLOCK 10 — who runs the demo
   --------------------------------------------------------------------------
   The reference's block 10 is its strongest: a photo of the host and five
   lines of what he has done. It is the only place on that page a human
   appears, and it is what makes everything around it credible.

   IT IS FILLED IN NOW: a photograph, a name and a role the client confirmed,
   and three lines whose every claim is sourced from the requirements doc
   rather than invented. What it still does NOT carry is the thing that makes
   the reference's version work — how long he has done this, what he built
   before, what any of it has achieved. Nobody has supplied those and none
   may be guessed, so the block argues from MOTIVE instead of from record.
   See the note on salesFounder in content.ts for where each line came from.

   IT ALSO NO LONGER SAYS WHO ACTUALLY TAKES THE CALL. A line reading "Demos
   are run by the MnT Future team, sometimes by the founder" sat under this,
   client-confirmed, and was removed at the client's request. The heading
   asks WHO RUNS THE DEMO and the answer is now one man's photograph with
   nothing qualifying it, so the block implies he takes every call. That is a
   deliberate choice, not an oversight — content.ts records it.

   THE ONLY LIGHT SECTION ON THE PAGE. It was one of two; the other was the
   lead form, which is gone. A wider light band was tried from here down to
   the FAQ and rejected — it split the page into two halves that read as two
   different sites. Narrowed to this block alone it does the one thing it was
   for: fifteen dark screens in a row is an endless scroll on a phone, and
   this is the single place a break also means something. A face belongs on a
   light ground.

   Amber is 1.83:1 here, so nothing on this section uses amber as TEXT — the
   heading accent and the role line are amber FILLS carrying the ground,
   which is 5.48:1. Same colour, same job.
   ========================================================================== */

export function SalesFounder() {
  return (
    <section className="bg-offwhite px-5 pt-12 pb-10 md:pt-16 md:pb-14">
      <div className="mx-auto grid max-w-[1000px] items-center gap-7 md:grid-cols-[minmax(0,320px)_1fr] md:gap-10">
        {/* `src` IS WHAT MAKES IT AN IMAGE. `file` alone only names the file
            the empty slot asks for — see ShotSlot. A slot with `file` but no
            `src` renders the dashed placeholder no matter what sits in
            public/shots/, which is deliberate: dropping a file into a folder
            should not silently change a page.

            THE PHOTO IS 1219x1290, very nearly square, and this slot is 4/5.
            object-fit: cover trims 93px from each side — checked against the
            actual crop, and it takes chair and a little knee, nothing of the
            face. Kept at 4/5 rather than matched to the file because a
            portrait box is what the block was built around. */}
        <ShotSlot
          /* Named from salesFounder.name rather than written out here, so a
             screen reader and the heading beside it can never disagree. It
             read "The founder of MnT Future" while the name was unknown —
             and briefly said "Udhay" before anyone had confirmed it, taken
             from an email address, which is exactly the kind of guess that
             does not belong on a page. The client has since confirmed it. */
          name={`${salesFounder.name}, founder of ${site.company}`}
          file="founder.png"
          src="/shots/founder.png"
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

          <p className="font-display mt-5 text-[32px] leading-[1.05] text-night md:text-[38px]">
            {salesFounder.name}
          </p>
          {/* The role was amber TEXT on the dark band. On this one that is
              1.83:1, so it becomes an amber chip with the ground on it —
              5.48:1, and the same colour still marking the same thing. */}
          <span className="mt-2 inline-block rounded-[5px] bg-amber px-2 py-1 text-[13px] font-extrabold tracking-[0.18em] text-night uppercase md:text-[14px]">
            {brandCase(salesFounder.role)}
          </span>

          {/* THE THREE LINES. This slot held a bracketed placeholder, was
              emptied when a real photo made the placeholder look broken, and
              is filled again now — the block was a face and a name with
              nothing to read. Every claim in it is sourced; see the note on
              salesFounder in content.ts for which line came from where. */}
          <p className="mt-5 text-[15.5px] leading-relaxed text-day-muted md:text-[17px]">
            {salesFounder.body}
          </p>

          {/* The hairline rule went with the note it was separating. A
              border-top with nothing under it is a line across the bottom of
              a paragraph, which reads as a mistake rather than a divider. */}
        </div>
      </div>
    </section>
  );
}
