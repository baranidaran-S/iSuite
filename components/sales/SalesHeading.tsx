import type { ReactNode } from "react";
import { brandCase } from "@/components/sales/brandCase";

/* ==========================================================================
   THE HEADLINE TREATMENT — every block on the page uses it
   --------------------------------------------------------------------------
   Heavy capitals, centred, with the key phrase in amber. It is the loudest
   single signal that a page is selling rather than explaining, and the
   reference uses it without exception — "WHO IS THIS CHALLENGE FOR?", "WHAT
   YOU'LL WALK AWAY WITH", "HERE'S WHAT'S COVERED".

   It lives here rather than being written out per block so the scale and the
   split can never drift apart between blocks.

   The split is on indexOf, and it fails SILENTLY back to the plain heading if
   the accent is not found — which is what happens whenever someone edits the
   heading in content.ts and forgets the accent. Nothing breaks; the amber
   just stops. Worth knowing when a heading suddenly looks flat.

   ON A LIGHT SECTION the accent cannot stay amber text: #F5A524 on #EFF3F9
   measures 1.83:1, which is not a colour, it is a smudge. The amber has to
   become a SHAPE, and which shape is not a free choice.

   So it becomes an amber BLOCK carrying the ground colour, which is 5.48:1
   reads as a marker-pen highlight — the same colour doing the same job.

   TWO THINGS KEEP THE BLOCK ALIGNED, and both were wrong the first time.

   NO NEGATIVE MARGIN. The block used -mx-0.5 so the amber hugged the word
   rather than pushing the line apart. On a left-aligned heading that pulls
   the block two pixels PAST the margin, so a highlighted second line starts
   visibly left of the plain first line — which is the whole reason this
   looked broken. The padding stays, the negative margin does not: the block
   edge now lands exactly on the text edge above it.

   LOOSER LEADING ON THE LIGHT VARIANT, 1.25 against the dark 1.05. A filled
   block is taller than the glyphs inside it, so at the dark value the block
   on one line touches the block on the next and the two merge into a single
   amber slab.

   THE DARK 1.05 IS ALSO MEASURED, not inherited. It was 0.94, which in Anton
   leaves 0.94 - 0.8594 = 0.08em between one line's capitals and the next —
   about 5px at the size these headings run, which the client read as the two
   lines touching. 1.05 opens that to 0.19em, roughly 11px. Uppercase Anton
   has no descenders to fall into the gap, so the whole of it is visible.

   Neither fix helps if the accent spans a line break — a highlight has to
   stop where the line stops, so it comes out as two rectangles of unequal
   width. box-decoration-clone at least paints both. KEEP ACCENTS SHORT
   ENOUGH TO SIT ON ONE LINE; that is a content rule, not a CSS one.
   ========================================================================== */

export function SalesHeading({
  text,
  accent,
  as: Tag = "h2",
  light = false,
  className = "",
}: {
  text: string;
  accent?: string;
  as?: "h1" | "h2" | "h3";
  /** Set on a light section — see the note above. */
  light?: boolean;
  className?: string;
}) {
  const i = accent ? text.indexOf(accent) : -1;

  /* THE LIGHT ACCENT PAINTS A BOX, AND THE FONT USED TO DECIDE HOW TALL.
     An INLINE background covers the font's content area — ascent + descent —
     and ignores line-height completely. Anton's content area is 1.5054em
     (the numbers are below), so the amber block came out that tall around
     capitals of 0.8594em. Under Big Shoulders it was small enough to sit
     inside leading-[1.1]; Anton's ascender is far taller, so every box
     reached about 0.4em into the line above and clipped it.

     LEADING ALONE COULD NOT FIX IT. Spacing the lines to 1.6 stopped the
     collision but left the same oversized block with more air around it,
     which the client read as the heading falling apart. The box itself had
     to get smaller, and an inline box cannot.

     SO IT IS AN INLINE-BLOCK NOW, where the background follows the BORDER
     BOX — line-height plus padding — which we control:

         leading-[0.8]   0.80em  the box's own line box
         pt-[0.17em]    +0.17em
         pb-[0.15em]    +0.15em
                        ───────
                         1.12em  painted, against 1.51em before

     ANTON'S REAL NUMBERS, read out of the font file rather than guessed —
     the first attempt at this used the ascent-override in the built CSS,
     which is the FALLBACK face's override and not Anton's own metrics, and
     a capital height of 0.73em that was invented:

         unitsPerEm         2048
         USE_TYPO_METRICS   set, so the browser uses the sTypo pair
         sTypoAscender      1.1763 em
         sTypoDescender     0.3291 em   -> content area 1.5054 em
         sCapHeight         0.8594 em   <- the tall one, and the whole error

     Anton's capitals reach 0.86em, nearly to the top of its own ascent, so
     there is barely 0.02em of room above them inside the content area. The
     earlier bottom-only padding therefore pushed the type OUT of the top of
     its highlight — measured at -0.036em above the caps against +0.296em
     below, which is what the client circled.

     Solved rather than nudged. With leading-[0.8] the content box sits
     0.8236em above the baseline and 0.0236em ABOVE it at the bottom, so:

         above the caps   0.8236 + 0.17 - 0.8594 = 0.134 em
         below the base  -0.0236 + 0.15         = 0.126 em

     Even, and the box stays the 1.12em it already was. THESE ARE DERIVED
     FROM ANTON. Change the display face and every one is wrong together:
     re-read the font's sTypo pair and sCapHeight and redo the arithmetic.
     The heading's leading-[1.25] below is the same calculation — 1.12em of
     box plus a gap you can see between lines.

     The cost is that an inline-block cannot split across two lines, so a
     LIGHT accent has to be short enough to fit one. "THE DEMO" is eight
     characters and the only light heading on the page. A longer one needs
     the inline version back, and its collision solved another way. */
  const accentClass = light
    ? "inline-block rounded-[5px] bg-amber px-2 pt-[0.17em] pb-[0.15em] leading-[0.8] text-night"
    : "text-amber";

  /* brandCase runs on each slice separately, so an accent that happens to
     contain a brand name still gets both treatments. */
  const inner: ReactNode =
    i === -1 || !accent ? (
      brandCase(text)
    ) : (
      <>
        {brandCase(text.slice(0, i))}
        <span className={accentClass}>{brandCase(accent)}</span>
        {brandCase(text.slice(i + accent.length))}
      </>
    );

  return (
    <Tag
      className={`font-display text-[clamp(37px,12vw,58px)] tracking-[0.01em] text-balance uppercase md:text-[64px] lg:text-[74px] ${
        light ? "leading-[1.25] text-night" : "leading-[1.05] text-white"
      } ${className}`}
    >
      {inner}
    </Tag>
  );
}
