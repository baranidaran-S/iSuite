import Image, { type StaticImageData } from "next/image";

/* ==========================================================================
   A PRODUCT SCREENSHOT, OR THE SPACE ONE WILL OCCUPY
   --------------------------------------------------------------------------
   The client is supplying real screenshots and asked that nothing be
   substituted for them in the meantime — no drawn mocks standing in, because
   a placeholder that looks finished is a placeholder nobody replaces.

   So an empty slot says out loud what belongs there and what the file must be
   called. It holds a sensible height, so dropping the file in does not shove
   the page around.

   THE SHOT IS NEVER CROPPED. This file used to take a `ratio` string written
   out by hand — "1912 / 692" — and paint the image into a box of that shape
   with objectFit: cover. That is a trap, and it sprang three times in one
   afternoon: every replacement screenshot came back a different shape, the
   hand-written ratio still described the OLD file, and cover silently sliced
   up to 39% off the sides rather than letterboxing. Nothing errored. The page
   just quietly showed two thirds of a screenshot.

   So there is no ratio to keep in sync any more. The image renders at its own
   proportions, full width, height auto. Whatever shape the file is, that is
   the shape on the page — a replacement can change the height of a section,
   which is the honest outcome, and it can never lose an edge.

   `src` IS A STATIC IMPORT, NOT A STRING, and that is what makes it work:

     import bookingsShot from "@/public/shots/bookings.png";

   Next reads the file at BUILD TIME and hands over its real width and height,
   so the box is measured from the file itself and cannot disagree with it.
   A string src cannot do this — nothing knows the dimensions until the image
   has already downloaded, which is why they had to be written out by hand.

   IT ALSO ENDS THE STALE-IMAGE PROBLEM. A static import is emitted to
   /_next/static/media/<name>.<content hash>.png, so replacing a file changes
   its URL. With a plain /shots/x.png path the URL never changed, next/image
   sets a long cache TTL, and browsers kept serving the screenshot they had
   downloaded hours earlier — including, for a while, the unredacted ones.

   TO FILL ONE: put the file in public/shots/, import it at the top of the
   page or section, and pass it as `src`. No measuring, no ratio, nothing to
   update when the file changes shape.
   ========================================================================== */

/* ==========================================================================
   HOW WIDE EACH SHOT IS ACTUALLY DRAWN
   --------------------------------------------------------------------------
   `sizes` has to describe the real slot or the browser fetches the wrong
   file. It used to be one hardcoded "(min-width: 1024px) 50vw, 100vw" for
   every shot, wrong in both directions at once: the hero is drawn 1068px and
   claimed ~720px, so the page's LCP image rendered soft; the founder portrait
   is drawn 320px and claimed the same ~720px, so phones downloaded several
   times the pixels they could show.

   Every section is px-5, so 40px comes off the viewport before anything else.

   CHAPTER  max-w-[1100px] · lg:grid-cols-2 · lg:gap-12 (48) · frame p-2.5 -> md:p-3.5
       phone      100vw - 40 - 20
       md         100vw - 40 - 28        <- WIDEST it ever gets: 955px at 1023px
       lg         (100vw - 40 - 48)/2 - 28
       >= 1140    (1100 - 48)/2 - 28  =  498px

   HERO     max-w-[1100px] · full width · frame p-2.5 -> md:p-4 (16)
       phone      100vw - 40 - 20
       md         100vw - 40 - 32
       >= 1140    1100 - 32           =  1068px

   FOUNDER  max-w-[1000px] · md:grid-cols-[320px_1fr] · no frame
       phone      100vw - 40             <- 727px at 767px, just before the grid
       md         320px, flat

   THE md COLUMN IS THE ONE THAT SURPRISES. A chapter shot is WIDER on a
   tablet (955px) than on a large desktop (498px), because grid-cols-2 is an
   lg: rule — below it the shot has the whole shell to itself.
   ========================================================================== */

export const SHOT_SIZES = {
  chapter:
    "(min-width: 1140px) 498px, (min-width: 1024px) calc((100vw - 88px) / 2 - 28px), (min-width: 768px) calc(100vw - 68px), calc(100vw - 60px)",
  hero: "(min-width: 1140px) 1068px, (min-width: 768px) calc(100vw - 72px), calc(100vw - 60px)",
  founder: "(min-width: 768px) 320px, calc(100vw - 40px)",
} as const;

export function ShotSlot({
  name,
  file,
  src,
  sizes,
  cropTo,
  emptyRatio = "16 / 10",
  priority = false,
  light = false,
}: {
  /** What is on screen. Printed on an empty slot, and used as alt text. */
  name: string;
  /** The filename to drop into public/shots/. Names the empty slot. */
  file: string;
  /** A STATIC IMPORT of the file — see above. Omit for an empty slot. */
  src?: StaticImageData;
  /** How wide this shot is actually drawn, per breakpoint. */
  sizes: string;
  /** DELIBERATE crop, e.g. "4 / 5" for the founder portrait. Screenshots
      must never set this — it is how edges got lost in the first place. */
  cropTo?: string;
  /** Shape of the dashed placeholder only. Ignored once `src` is set. */
  emptyRatio?: string;
  priority?: boolean;
  /** Set on a light section — only the EMPTY state cares. */
  light?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        sizes={sizes}
        priority={priority}
        className={`w-full rounded-[14px] ${cropTo ? "" : "h-auto"}`}
        style={
          cropTo ? { aspectRatio: cropTo, objectFit: "cover" } : undefined
        }
      />
    );
  }

  return (
    <div
      style={{ aspectRatio: cropTo ?? emptyRatio }}
      className={`flex w-full max-w-full flex-col items-center justify-center gap-3 rounded-[14px] border-2 border-dashed px-5 text-center ${
        light ? "border-slate/40 bg-white" : "border-amber/35 bg-amber/[0.04]"
      }`}
    >
      <span
        className={`text-[11px] font-extrabold tracking-[0.2em] uppercase ${
          light ? "text-day-muted" : "text-amber"
        }`}
      >
        Screenshot needed
      </span>
      <span
        className={`text-[16.5px] leading-snug font-extrabold text-balance md:text-[18px] ${
          light ? "text-night" : "text-white"
        }`}
      >
        {name}
      </span>
      <code
        className={`rounded-md px-2.5 py-1 text-[11px] font-semibold md:text-[12px] ${
          light ? "bg-offwhite text-day-muted" : "bg-night text-night-muted"
        }`}
      >
        public/shots/{file}
      </code>
    </div>
  );
}
