import type { ReactNode } from "react";

/* ==========================================================================
   SOLID "3D" GLYPHS — Core Benefits only
   --------------------------------------------------------------------------
   The line icons in icons.tsx are shared with the hero mock, the journey
   cards, the Meta Ads list and the inbox sidebar, so they are NOT touched.
   This is a parallel set used by one section.

   HOW THE DEPTH IS MADE, WITHOUT GRADIENTS. The client removed gradients from
   the design, and a glossy 3D icon is normally shaded with them. So the
   dimension here is built from flat colour only:

     1. the shape is drawn TWICE — once shifted 1.15px down in a darker tone,
        once on top in the accent. That offset back copy is the extrusion, the
        way a printed sticker shows its own thickness.
     2. cut-out details are painted in the PUCK's colour (--c), so they read
        as holes through the solid body rather than as extra strokes.
     3. the puck itself carries a hard bottom edge — see .puck-3d.

   The darker tone is mixed from the icon's own colour, so it follows the
   three accent families rather than adding new hex values to maintain. The
   plain attribute before it is the fallback for a browser without color-mix.

   ROUNDED CORNERS ON FILLED SHAPES. Every glyph is stroked in its own fill
   colour with a round join. That rounds each corner without hand-authoring
   the arcs, and keeps the "slightly playful, not stiff corporate" brief the
   line set was built to. It also fattens each shape by ~0.55px, which the
   coordinates below already allow for.
   ========================================================================== */

const EDGE = "color-mix(in srgb, currentColor 56%, #01101F)";

type P = { className?: string };

function Solid({
  body,
  detail,
  className,
}: {
  /** The silhouette. Drawn twice — extrusion, then face. */
  body: ReactNode;
  /** Knocked out in the puck colour, so it reads as a hole. */
  detail?: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g
        transform="translate(0 1.15)"
        fill="#01101F"
        stroke="#01101F"
        style={{ fill: EDGE, stroke: EDGE }}
        strokeWidth={1.1}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {body}
      </g>

      <g
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {body}
      </g>

      {detail ? (
        <g
          fill="var(--c)"
          stroke="var(--c)"
          strokeWidth={1.1}
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {detail}
        </g>
      ) : null}
    </svg>
  );
}

/* --- One Shared Inbox: a tray with its slot cut through ------------------- */
const inbox = (p: P) => (
  <Solid
    {...p}
    body={
      <path d="M5.1 3.4h13.8a3.3 3.3 0 0 1 3.3 3.3v10.6a3.3 3.3 0 0 1-3.3 3.3H5.1a3.3 3.3 0 0 1-3.3-3.3V6.7a3.3 3.3 0 0 1 3.3-3.3z" />
    }
    detail={
      <path d="M2.2 11.9h5.2l1.4 2.7h6.4l1.4-2.7h5.2v2.5h-4.7l-1.4 2.7H8.3l-1.4-2.7H2.2z" />
    }
  />
);

/* --- AI Sales Assistance: a bubble with the reply meter cut through ------- */
const assistant = (p: P) => (
  <Solid
    {...p}
    body={
      <path d="M5.6 3.1h12.8a3.4 3.4 0 0 1 3.4 3.4v7.4a3.4 3.4 0 0 1-3.4 3.4h-6.5l-4 3.2a.95.95 0 0 1-1.54-.74V17.3H5.6a3.4 3.4 0 0 1-3.4-3.4V6.5a3.4 3.4 0 0 1 3.4-3.4z" />
    }
    detail={
      <>
        <rect x="7.4" y="9.1" width="2.2" height="3.2" rx="1.1" />
        <rect x="10.9" y="7.1" width="2.2" height="7.2" rx="1.1" />
        <rect x="14.4" y="9.9" width="2.2" height="1.6" rx="0.8" />
      </>
    }
  />
);

/* --- Clear Sales Pipeline: two chevrons moving right ---------------------- */
const chevron = <path d="M2.6 5.1h5.9l3.8 6.9-3.8 6.9H2.6l3.8-6.9z" />;

const pipeline = (p: P) => (
  <Solid
    {...p}
    body={
      <>
        {chevron}
        <g transform="translate(9 0)">{chevron}</g>
      </>
    }
  />
);

/* --- Follow-up Visibility: a bell ----------------------------------------- */
const bell = (p: P) => (
  <Solid
    {...p}
    body={
      <>
        <path d="M12 2.2c.9 0 1.65.73 1.65 1.63v.58c2.8.8 4.85 3.38 4.85 6.42v2.3c0 .8.3 1.56.83 2.15l.55.6c.9.98.2 2.52-1.13 2.52H5.25c-1.33 0-2.03-1.54-1.13-2.52l.55-.6c.53-.59.83-1.35.83-2.15v-2.3c0-3.04 2.05-5.62 4.85-6.42v-.58c0-.9.75-1.63 1.65-1.63z" />
        <path d="M9.7 19.6h4.6c-.35 1.3-1.4 2.2-2.3 2.2s-1.95-.9-2.3-2.2z" />
      </>
    }
  />
);

/* --- Connected Meta Ads: a megaphone -------------------------------------- */
const megaphone = (p: P) => (
  <Solid
    {...p}
    body={
      <>
        <path d="M20.2 4.9c.85-.42 1.85.2 1.85 1.15v11.9c0 .95-1 1.57-1.85 1.15L9.8 14.1V9.9z" />
        <path d="M3.5 9.6h6.1v4.8H3.5c-1.05 0-1.9-.85-1.9-1.9v-1c0-1.05.85-1.9 1.9-1.9z" />
        <path d="M4.9 14.4h3v4.5c0 .9-.73 1.63-1.63 1.63h-.05c-.85 0-1.55-.7-1.55-1.55z" />
      </>
    }
  />
);

/* --- Team Control: two people, the second smaller and set back ------------ */
const team = (p: P) => (
  <Solid
    {...p}
    body={
      <>
        <circle cx="16.9" cy="7" r="2.5" />
        <path d="M16.9 10.7c2.15 0 3.95 1.65 4.2 3.8.06.5-.34.9-.84.9h-6.72c-.5 0-.9-.4-.84-.9.25-2.15 2.05-3.8 4.2-3.8z" />
        <circle cx="8.3" cy="8.4" r="3.2" />
        <path d="M8.3 13.3c2.65 0 4.85 2.05 5.2 4.7.08.6-.38 1.1-.98 1.1H4.08c-.6 0-1.06-.5-.98-1.1.35-2.65 2.55-4.7 5.2-4.7z" />
      </>
    }
  />
);

export const icons3d = { inbox, assistant, pipeline, bell, megaphone, team };

export type Icon3dName = keyof typeof icons3d;

export function Icon3d({
  name,
  className,
}: {
  name: Icon3dName;
  className?: string;
}) {
  const Cmp = icons3d[name];
  return <Cmp className={className} />;
}
