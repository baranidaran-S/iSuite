import type { ReactNode } from "react";
import { brandCase } from "@/components/sales/brandCase";

/* ==========================================================================
   THE HEADLINE TREATMENT — every block on the page uses it
   --------------------------------------------------------------------------
   Heavy display type, centred, with the key phrase in amber.

   SENTENCE CASE, NOT CAPITALS, at the client's instruction. It ran in full
   capitals until then — the reference page shouts every heading and that was
   the loudest single signal this page is selling rather than explaining. The
   weight, the scale and the amber still carry that; the shouting does not.

   THE CHANGE IS NOT JUST A CLASS. text-transform was doing real typographic
   work: capitals in Anton stop dead at the baseline and reach 0.8594em, so
   both the line spacing and the amber highlight box below were sized to ink
   that had no descenders. Sentence case puts `j` up at 0.9229em and `g` down
   at -0.1270em, and every number in this file moved with it. The arithmetic
   is kept in place below so the next person does not have to re-derive it.

   THE STRINGS THEMSELVES ARE SENTENCE CASE TOO, in content.ts. Lowercasing
   in CSS alone would leave the page shouting at any reader whose screen
   reader takes the DOM text rather than the rendered glyphs.

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

   THE DARK 1.15 IS MEASURED, not inherited, AND IT MOVED WITH THE CASE. It
   was 0.94 once, which left 0.94 - 0.8594 = 0.08em between one line's
   capitals and the next — about 5px at the size these run, which the client
   read as the two lines touching. 1.05 opened that to 0.19em.

   Both of those were sized against CAPITALS, which have no descenders. In
   sentence case the ink runs 1.0498em tall — `j` to +0.9229, `g` to -0.1270
   — so 1.05 leaves 0.0002em between lines. That is not a tight gap, it is a
   touch, and "journey" in the demo heading puts a real `j` on the page.
   1.15 restores 0.10em of daylight.

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

     THE PADDING IS DELIBERATELY UNEVEN, AND IT MOVED WHEN THE HEADINGS LEFT
     CAPITALS. Under caps the ink stopped at the baseline, so the bottom only
     had to look right. Sentence case drops `g`, `y` and `p` to -0.1270em and
     the old floor sat at -0.1264 — the final CTA's accent is "already
     waiting." and that `y` was being sliced, by six ten-thousandths of an em.
     Nothing errors; it just looks like a bad crop.

         leading-[0.8]   0.80em  the box's own line box
         pt-[0.15em]    +0.15em
         pb-[0.19em]    +0.19em
                        ───────
                         1.14em  painted, against 1.51em for a plain inline

     which puts the box at -0.1664 .. +0.9736 about the baseline:

         above the capitals   0.9736 - 0.8594  = 0.114 em
         above a tall j       0.9736 - 0.9229  = 0.051 em
         below a g           -0.1270 - -0.1664 = 0.039 em

     THESE ARE DERIVED FROM ANTON. Change the display face and every one is
     wrong together: re-read the font's sTypo pair, sCapHeight and the real
     glyph bounds for j and g, then redo the arithmetic. The heading's
     leading-[1.25] below is the same calculation — 1.14em of box plus a gap
     you can see between lines.

     whitespace-nowrap IS NOT COSMETIC, AND IT IS THERE BECAUSE THIS BROKE.
     The cost of an inline-block is that it cannot split across two lines —
     but without nowrap it does something far worse than refuse: it wraps
     INSIDE itself, and leading-[0.8] then paints its own two lines on top
     of each other inside one enormous amber slab.

     text-balance is what triggers it. The pain heading runs 778px at
     lg:74px inside a 760px column, so the balancer aims for two even lines
     of about 389px — and hands the accent, which needs 468px, a 389px box.
     Nothing overflows and nothing errors; the heading becomes unreadable.

     With nowrap the accent takes its natural width and moves to its own
     line instead, which is what was always intended.

     THE CONTENT RULE STILL STANDS: a light accent must be short enough to
     fit one line, because nowrap turns an overlong one into horizontal page
     scroll rather than a mess. Measure it against that section's own
     container at lg:74px before using it. */
  const accentClass = light
    ? "inline-block rounded-[5px] bg-amber px-2 pt-[0.15em] pb-[0.19em] leading-[0.8] whitespace-nowrap text-night"
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
      className={`font-display text-[clamp(37px,12vw,58px)] tracking-[0.01em] text-balance md:text-[64px] lg:text-[74px] ${
        light ? "leading-[1.25] text-night" : "leading-[1.15] text-white"
      } ${className}`}
    >
      {inner}
    </Tag>
  );
}
