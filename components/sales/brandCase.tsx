import type { ReactNode } from "react";

/* ==========================================================================
   BRAND NAMES INSIDE AN ALL-CAPS HEADING
   --------------------------------------------------------------------------
   Every loud label on this page is set with text-transform: uppercase, which
   is what makes it read as a sales page rather than a product site. It also
   silently destroys both brand names: "iSuite AI - by MnT Future" renders as
   "ISUITE AI - BY MNT FUTURE", and the eye reads I-SUITE, not iSuite.

   CSS cannot exempt a substring from text-transform, so the exemption has to
   be a real element. This wraps each brand name in a span that turns the
   transform off, which keeps the surrounding capitals exactly as they were.

   It also NORMALISES the casing, so content.ts can write iSUITE, isuite or
   iSuite and the page always prints iSuite. That matters because the heading
   in content.ts was written "EVERYTHING INSIDE iSUITE AI" - correct-looking
   in a file where everything is shouting, wrong the moment you read it back.

   Word boundaries on both patterns: "mnt" unanchored would match inside
   other words, and a brand name is never a fragment of one.
   ========================================================================== */

const BRAND = /\b(isuite|mnt)\b/gi;

const CANONICAL: Record<string, string> = {
  isuite: "iSuite",
  mnt: "MnT",
};

/**
 * Returns `text` with every brand name wrapped so it keeps its own casing
 * under an uppercase parent. Safe to call on text that contains none.
 */
export function brandCase(text: string): ReactNode {
  if (!BRAND.test(text)) {
    BRAND.lastIndex = 0;
    return text;
  }
  BRAND.lastIndex = 0;

  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = BRAND.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <span key={`${m.index}-${m[0]}`} className="normal-case">
        {CANONICAL[m[0].toLowerCase()]}
      </span>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
