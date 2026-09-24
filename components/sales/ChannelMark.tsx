/* ==========================================================================
   THE CHANNEL MARKS — hero only
   --------------------------------------------------------------------------
   Five glyphs for the line under the offer chips. They were plain text
   separated by middots, which named the channels without ever showing them:
   "WhatsApp · Instagram · Facebook" is a list a reader parses, where the
   green bubble is a thing they recognise before they have finished reading.

   THEY CARRY THEIR OWN BRAND COLOURS, and that is the one place on this page
   where something other than amber is allowed to be a colour rather than a
   mark. These are not the page's design — they are third-party marks, and a
   white WhatsApp glyph is a shape while a green one is WhatsApp. Recognition
   is the entire job of this row.

   NOMINATIVE USE, WHICH IS WHY THEY ARE HERE AT ALL: they identify channels
   the product connects to. They are not endorsements, they are not altered,
   and the footer already carries the Meta disclaimer that says so. Do not
   restyle them, recolour them, or put them on anything that implies Meta
   endorses this page.

   TWO OF THE FIVE ARE NOT BRANDS. "Website" is a globe and "Meta Ads" is
   Meta's own mark rather than a product logo, because Meta Ads has none that
   reads at 18px. Drawing an approximation of a trademark badly is worse than
   not drawing it.

   FILLED, NOT STROKED, unlike every other icon in this project. Brand marks
   are filled shapes and a line-art WhatsApp is not WhatsApp. That is why
   they live here rather than in icons.tsx, which is a stroke set with round
   caps and a deliberately hand-drawn feel — the wrong hand entirely.
   ========================================================================== */

export type ChannelName =
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "website"
  | "meta";

const BRAND: Record<ChannelName, string> = {
  whatsapp: "#25D366",
  instagram: "#E1306C",
  facebook: "#1877F2",
  website: "currentColor",
  meta: "#0081FB",
};

export function ChannelMark({
  name,
  className = "",
}: {
  name: ChannelName;
  className?: string;
}) {
  const fill = BRAND[name];

  if (name === "website") {
    /* The only stroked one: a globe reads as lines, and there is no brand to
       be faithful to. currentColor so it takes the label's own colour. */
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
        aria-hidden="true"
        className={className}
      >
        <circle cx="12" cy="12" r="9.2" />
        <path d="M2.8 12h18.4" />
        <path d="M12 2.8a14.5 14.5 0 0 1 0 18.4 14.5 14.5 0 0 1 0-18.4" />
      </svg>
    );
  }

  if (name === "meta") {
    /* Meta's mark is ONE ribbon crossing itself — a lemniscate — and this is
       the second attempt at it. The first was two separate open paths that
       both began at the same point and went opposite ways, so the left loop
       never closed: at 15px it rendered as a squiggle with a gap in it, which
       is what the client saw.

       CONSTRUCTED, NOT TRACED. Meta's real artwork uses a variable-width
       ribbon that vanishes at this size, and tracing it badly is the failure
       above. So this is drawn from geometry instead — one closed path, two
       mirrored loops, pinched at the centre:

           centre        12, 12
           left  loop    x 2.1 .. 12    right loop  x 12 .. 21.9
           top / bottom  y 6.83 / 17.17   symmetric about y = 12

       EVERY RIGHT-HAND NUMBER IS 24 MINUS ITS LEFT-HAND TWIN, which is what
       makes the two loops identical; change one and you must change its pair
       or the mark goes lopsided.

       THE CROSSING IS WHAT MAKES IT READ, and it works because the tangents
       line up. The path leaves the centre towards 10.02 8.37 and arrives
       back from 13.98 15.63 — both (-1.98, -3.63) — so the two strands pass
       through one point at two different angles and the join is smooth
       rather than a kink. Nudge a control point near the centre and it
       becomes a blob.

       WIDER THAN IT IS TALL, on purpose: 19.8 x 10.3 units inside a 24 box,
       which is Meta's own 1.9:1. The other marks here fill their box and
       Meta's does not — it is a wide mark, and stretching it to match their
       height would make it the biggest thing in the row.

       STROKE 2.9, NOT THE 2.1 EVERY OTHER STROKED THING HERE USES. This mark
       sits between WhatsApp, Instagram and Facebook, which are SOLID FILLED
       shapes, and an outline next to three filled discs reads as fainter
       even at the same nominal size. 2.9 is where its ink matches theirs;
       much past 3 and the loops close into two blobs at 15px. The globe
       beside it stays at 1.9 because it is a full-height mark and does not
       need the compensation. */
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={fill}
        strokeWidth={2.9}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        <path d="M12 12C10.02 8.37 7.27 6.83 5.07 7.27C2.98 7.71 2.1 9.69 2.1 12C2.1 14.31 2.98 16.29 5.07 16.73C7.27 17.17 10.02 15.63 12 12C13.98 8.37 16.73 6.83 18.93 7.27C21.02 7.71 21.9 9.69 21.9 12C21.9 14.31 21.02 16.29 18.93 16.73C16.73 17.17 13.98 15.63 12 12Z" />
      </svg>
    );
  }

  const paths: Record<string, string> = {
    whatsapp:
      "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413",
    instagram:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881",
    facebook:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      aria-hidden="true"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
