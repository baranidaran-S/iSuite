import type { ReactNode } from "react";

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
   measures 1.80:1, which is not a colour, it is a smudge. The amber has to
   become a SHAPE, and which shape is not a free choice.

   So it becomes an amber BLOCK carrying near-black text, which is 9.37:1 and
   reads as a marker-pen highlight — the same colour doing the same job.

   TWO THINGS KEEP THE BLOCK ALIGNED, and both were wrong the first time.

   NO NEGATIVE MARGIN. The block used -mx-0.5 so the amber hugged the word
   rather than pushing the line apart. On a left-aligned heading that pulls
   the block two pixels PAST the margin, so a highlighted second line starts
   visibly left of the plain first line — which is the whole reason this
   looked broken. The padding stays, the negative margin does not: the block
   edge now lands exactly on the text edge above it.

   LOOSER LEADING ON THE LIGHT VARIANT, 1.22 against the dark 1.08. A filled
   block is taller than the glyphs inside it, so at 1.08 the block on one line
   touches the block on the next and the two merge into a single amber slab.

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

  const accentClass = light
    ? "box-decoration-clone rounded-[5px] bg-amber px-2 text-night"
    : "text-amber";

  const inner: ReactNode =
    i === -1 || !accent ? (
      text
    ) : (
      <>
        {text.slice(0, i)}
        <span className={accentClass}>{accent}</span>
        {text.slice(i + accent.length)}
      </>
    );

  return (
    <Tag
      className={`font-display text-[clamp(34px,11vw,52px)] font-bold tracking-[0.005em] text-balance uppercase md:text-[58px] lg:text-[66px] ${
        light ? "leading-[1.14] text-night" : "leading-[0.98] text-white"
      } ${className}`}
    >
      {inner}
    </Tag>
  );
}
