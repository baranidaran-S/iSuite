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
   work: capitals stop dead at the baseline, so both the line spacing and the
   amber highlight box below were sized to ink that had no descenders.
   Sentence case brought descenders back and every number moved with it.

   THE FACE THEN CHANGED TOO — Anton out, Satoshi in, at the client's senior's
   request — and every number moved a second time. Satoshi is a wide geometric
   grotesque where Anton was ultra-condensed:

                        Anton       Satoshi Black
       cap height       0.8594em    0.7400em
       tallest ink      0.9229em    0.7540em   (the j dot)
       deepest ink     -0.1270em   -0.2560em   (twice as deep)
       content area     1.5054em    1.2500em
       this page's h2   100%        ~120% wider at the same px

   So Satoshi is WIDER and OPTICALLY SMALLER at the same font-size, and its
   descenders are twice as deep. Nothing here was carried over; it was all
   re-measured out of the woff2 in app/fonts.

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

   THE DARK 1.1 IS MEASURED, not inherited. Satoshi's ink runs 1.0100em tall
   — `j` to +0.7540, `g` to -0.2560 — so 1.1 leaves 0.09em of daylight between
   one line and the next. Under Anton the same job needed 1.15, because its
   ink was taller at 1.0498em; the smaller number here is not a tightening,
   it is the same gap measured against a different face.

   The light 1.26 is set by the amber BOX, not by the ink: the box below is
   1.13em tall, so anything under about 1.2 makes two highlighted lines
   touch each other rather than the text touch.

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

     THE PADDING IS DELIBERATELY UNEVEN, because Satoshi's descenders reach
     -0.2560em — twice Anton's -0.1270 — and the final CTA's accent is
     "already waiting.", so that `y` decides the floor. Get it wrong and
     nothing errors; the highlight just looks like a bad crop.

     An inline-block's background follows its BORDER BOX, so with
     line-height L the half-leading is (L - (ascent + descent)) / 2. For
     Satoshi that is (0.8 - 1.25) / 2 = -0.225, which gives:

         box top     =  1.0100 - 0.225 + 0.06 = +0.845
         box bottom  = -(0.2400 - 0.225) - 0.27 = -0.285
                                                  ───────
         leading-[0.8] + pt-[0.06em] + pb-[0.27em]  1.130em painted

     and the three clearances that matter:

         above the capitals   0.845 - 0.7400  = 0.105 em
         above a tall j       0.845 - 0.7540  = 0.091 em
         below a g or y      -0.2560 - -0.285 = 0.029 em

     THESE ARE DERIVED FROM SATOSHI BLACK, the file in app/fonts. Change the
     display face and every one is wrong together: re-read the font's sTypo
     pair, sCapHeight and the real glyph bounds for j and g, then redo the
     arithmetic. The heading's leading-[1.26] below is the same calculation
     — 1.13em of box plus a gap you can see between lines.

     whitespace-nowrap IS NOT COSMETIC, AND IT IS THERE BECAUSE THIS BROKE.
     The cost of an inline-block is that it cannot split across two lines —
     but without nowrap it does something far worse than refuse: it wraps
     INSIDE itself, and leading-[0.8] then paints its own two lines on top
     of each other inside one enormous amber slab.

     text-balance is what triggers it: the balancer hands the accent a column
     narrower than the accent needs, and the inline-block folds inside itself.

     With nowrap the accent takes its natural width and moves to its own
     line instead, which is what was always intended.

     THE CONTENT RULE STILL STANDS, AND UNDER SATOSHI IT BINDS THE WHOLE
     SCALE. A light accent must fit one line, because nowrap turns an overlong
     one into horizontal page scroll rather than a mess — and the longest is
     "already waiting." at 7.716em. In Anton it fit easily; in Satoshi it ran
     347px inside the 335px column a 375px phone gives, which is why the
     mobile clamp is 10.2vw and not the 12vw it was:

         320px screen   col 280   10.2vw = 32.6px   accent 252 + 16 padding
         375px screen   col 335   10.2vw = 38.3px   accent 295 + 16 padding
         430px screen   col 390   10.2vw = 43.9px   accent 339 + 16 padding

     THAT IS WHY THE HEADINGS ARE SMALLER ON A PHONE THAN THEY WERE. It is
     not a taste decision: shorten that one accent and the clamp can go back
     up. Measure any new light accent the same way before using it. */
  const accentClass = light
    ? "inline-block rounded-[5px] bg-amber px-2 pt-[0.04em] pb-[0.27em] leading-[0.8] whitespace-nowrap text-night"
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
      className={`font-display text-[clamp(30px,10.2vw,50px)] tracking-[0.01em] text-balance md:text-[62px] lg:text-[76px] ${
        light ? "leading-[1.14] text-night" : "leading-[1.1] text-white"
      } ${className}`}
    >
      {inner}
    </Tag>
  );
}
