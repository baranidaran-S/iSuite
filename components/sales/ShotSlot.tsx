import Image from "next/image";

/* ==========================================================================
   A PRODUCT SCREENSHOT, OR THE SPACE ONE WILL OCCUPY
   --------------------------------------------------------------------------
   The client is supplying real screenshots and asked that nothing be
   substituted for them in the meantime — no drawn mocks standing in, because
   a placeholder that looks finished is a placeholder nobody replaces.

   So an empty slot says out loud what belongs there and what the file must be
   called. It holds the exact height the image will take, so dropping the file
   in does not move the page.

   TO FILL ONE: put the file in public/shots/ under the name printed on the
   slot, then add `src` to that <ShotSlot> in app/page.tsx. Nothing else
   changes.

   next/image, not <img>: these are full-width product screenshots and the
   difference is large — the logo went from 633KB to 1.2KB through it. `sizes`
   is set for a shot that is full width on a phone and half the shell beside
   copy on a desktop.
   ========================================================================== */

export function ShotSlot({
  name,
  file,
  src,
  /** width / height of the screenshot, so the slot reserves the right box. */
  ratio = "16 / 10",
  priority = false,
  light = false,
}: {
  /** What is on screen. Printed on an empty slot, and used as alt text. */
  name: string;
  /** The filename to drop into public/shots/. */
  file: string;
  /** Set once the file exists. */
  src?: string;
  ratio?: string;
  priority?: boolean;
  /** Set on a light section — only the EMPTY state cares. */
  light?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={1600}
        height={1000}
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="w-full rounded-[14px]"
        style={{ aspectRatio: ratio, objectFit: "cover" }}
      />
    );
  }

  return (
    <div
      style={{ aspectRatio: ratio }}
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
