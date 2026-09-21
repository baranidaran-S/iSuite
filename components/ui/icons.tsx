import type { ReactNode } from "react";

/* ==========================================================================
   ICONS — build spec §2
   --------------------------------------------------------------------------
   "Slightly playful / hand-drawn-style line icons instead of stiff corporate
   icons." Achieved with round caps + joins, a 1.75 stroke and deliberately
   off-round coordinates so shapes read as drawn rather than generated.

   Icons inherit `currentColor` and are always given a NAVY parent.
   Teal is reserved for the CTA button only (§1) — never used here.
   ========================================================================== */

function Line({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

type P = { className?: string };

/* --- §7.3 Problem --------------------------------------------------------- */

const messageMissed = (p: P) => (
  <Line {...p}>
    <path d="M4.4 6.6c0-1.2 1-2.1 2.2-2.1h10.9c1.2 0 2.2.9 2.2 2.1v6.6c0 1.2-1 2.2-2.2 2.2H9.6l-3.7 3.2c-.4.3-.9.1-.9-.4l.1-2.9c-.5-.3-.7-.9-.7-1.6z" />
    <path d="M12 7.9v3.2" />
    <path d="M12 13.7h.01" />
  </Line>
);

const scatter = (p: P) => (
  <Line {...p}>
    <circle cx="5.7" cy="6.4" r="2.3" />
    <circle cx="18.1" cy="7.2" r="2.3" />
    <circle cx="6.8" cy="17.8" r="2.3" />
    <circle cx="17.6" cy="17.1" r="2.3" />
    <path d="M8.4 8.2 15.3 9" strokeDasharray="1 2.8" />
    <path d="M6.2 9.1 6.6 15" strokeDasharray="1 2.8" />
    <path d="M9.4 16.9 15.1 9.8" strokeDasharray="1 2.8" />
  </Line>
);

const noPipeline = (p: P) => (
  <Line {...p}>
    <path d="M4.3 10.1c0-.6.4-1 1-1h2.4c.6 0 1 .4 1 1v8.2c0 .6-.4 1-1 1H5.3c-.6 0-1-.4-1-1z" />
    <path d="M10.6 6.4c0-.6.4-1 1-1H14c.6 0 1 .4 1 1v11.9c0 .6-.4 1-1 1h-2.4c-.6 0-1-.4-1-1z" />
    <path d="M16.9 12.3c0-.6.4-1 1-1h2.4c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1h-2.4c-.6 0-1-.4-1-1z" />
    <path d="M3.3 20.4 21.1 3.5" />
  </Line>
);

const adUntracked = (p: P) => (
  <Line {...p}>
    <path d="M4.2 10.2 15.3 6.1c.5-.2 1 .2 1 .7v10.5c0 .5-.5.9-1 .7L4.2 13.8c-.4-.1-.7-.5-.7-.9v-1.8c0-.4.3-.8.7-.9z" />
    <path d="M7.4 14.5v3.2c0 .9.7 1.6 1.6 1.6h.4c.9 0 1.6-.7 1.6-1.6v-2.4" />
    <path
      d="M19.2 9.7c.9.6 1.4 1.4 1.4 2.3s-.5 1.7-1.4 2.3"
      strokeDasharray="1 2.6"
    />
  </Line>
);

/* --- §7.5 How It Works ---------------------------------------------------- */

const enquiry = (p: P) => (
  <Line {...p}>
    <circle cx="8.6" cy="8.2" r="3.3" />
    <path d="M3.2 19.7c.3-3 2.6-5.3 5.4-5.3 1.3 0 2.5.5 3.4 1.3" />
    <path d="M14.4 4.6h5.2c.7 0 1.2.5 1.2 1.2v3.4c0 .7-.5 1.2-1.2 1.2h-1.9l-2.2 1.7.1-1.7h-1.2c-.7 0-1.2-.5-1.2-1.2V5.8c0-.7.5-1.2 1.2-1.2z" />
  </Line>
);

const sparkReply = (p: P) => (
  <Line {...p}>
    <path d="M4.4 6.6c0-1.2 1-2.1 2.2-2.1h10.9c1.2 0 2.2.9 2.2 2.1v6.6c0 1.2-1 2.2-2.2 2.2H9.6l-3.7 3.2c-.4.3-.9.1-.9-.4l.1-2.9c-.5-.3-.7-.9-.7-1.6z" />
    <path d="m12 6.9 1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" />
  </Line>
);

const checklist = (p: P) => (
  <Line {...p}>
    <path d="M8.9 4.8H6.8c-1 0-1.8.8-1.8 1.8v11.6c0 1 .8 1.8 1.8 1.8h10.4c1 0 1.8-.8 1.8-1.8V6.6c0-1-.8-1.8-1.8-1.8h-2.1" />
    <path d="M9.4 3.2h5.2c.5 0 .8.4.8.8v1.4c0 .5-.4.8-.8.8H9.4a.8.8 0 0 1-.8-.8V4c0-.4.4-.8.8-.8z" />
    <path d="m8.3 11.7 1.4 1.4 2.9-2.9" />
    <path d="M8.5 16.4h6.8" />
  </Line>
);

const calendar = (p: P) => (
  <Line {...p}>
    <path d="M5.4 7c0-.9.7-1.6 1.6-1.6h10c.9 0 1.6.7 1.6 1.6v10.2c0 .9-.7 1.6-1.6 1.6H7c-.9 0-1.6-.7-1.6-1.6z" />
    <path d="M5.6 9.8h12.8" />
    <path d="M9.1 3.4v3.3M14.9 3.4v3.3" />
    <path d="m9.5 14 1.7 1.7 3.4-3.5" />
  </Line>
);

const handoff = (p: P) => (
  <Line {...p}>
    <circle cx="5.9" cy="12" r="3.2" />
    <circle cx="18.1" cy="12" r="3.2" />
    <path d="M9.5 12h4.9" />
    <path d="m12.7 10.1 1.9 1.9-1.9 1.9" />
  </Line>
);

const chart = (p: P) => (
  <Line {...p}>
    <path d="M3.6 20.2h16.8" />
    <path d="M3.9 16.4 9.4 10.8l3.5 3.3 7.2-7.4" />
    <path d="M15.8 6.5h4.4v4.4" />
  </Line>
);

/* --- §7.6 Core Benefits --------------------------------------------------- */

const inbox = (p: P) => (
  <Line {...p}>
    <path d="M7.1 5.2h9.8c.7 0 1.4.5 1.6 1.2l1.9 6.2v4.6c0 1-.8 1.8-1.8 1.8H5.4c-1 0-1.8-.8-1.8-1.8v-4.6l1.9-6.2c.2-.7.9-1.2 1.6-1.2z" />
    <path d="M20.4 12.6h-4.3l-1.4 2.8H9.3l-1.4-2.8H3.6" />
  </Line>
);

const assistant = (p: P) => (
  <Line {...p}>
    <path d="M4.4 6.6c0-1.2 1-2.1 2.2-2.1h10.9c1.2 0 2.2.9 2.2 2.1v6.6c0 1.2-1 2.2-2.2 2.2H9.6l-3.7 3.2c-.4.3-.9.1-.9-.4l.1-2.9c-.5-.3-.7-.9-.7-1.6z" />
    <path d="M8.5 8.4v3.1M12 7.1v5.7M15.5 9.1v1.8" />
  </Line>
);

const pipeline = (p: P) => (
  <Line {...p}>
    <path d="M3.2 6.3h5.3l2.4 5.7-2.4 5.7H3.2l2.4-5.7z" />
    <path d="M11.9 6.3h5.3l2.4 5.7-2.4 5.7h-5.3l2.4-5.7z" />
  </Line>
);

const bell = (p: P) => (
  <Line {...p}>
    <path d="M17.6 15.3c-.8-.8-1.2-1.9-1.2-3v-2.2c0-2.6-2-4.7-4.4-4.7S7.6 7.5 7.6 10.1v2.2c0 1.1-.4 2.2-1.2 3-.4.5-.1 1.3.6 1.3h10c.7 0 1-.8.6-1.3z" />
    <path d="M10.2 19c.4.6 1.1 1 1.8 1s1.4-.4 1.8-1" />
    <path d="M12 3.3v2.1" />
  </Line>
);

const megaphone = (p: P) => (
  <Line {...p}>
    <path d="M4.2 10.2 15.3 6.1c.5-.2 1 .2 1 .7v10.5c0 .5-.5.9-1 .7L4.2 13.8c-.4-.1-.7-.5-.7-.9v-1.8c0-.4.3-.8.7-.9z" />
    <path d="M7.4 14.5v3.2c0 .9.7 1.6 1.6 1.6h.4c.9 0 1.6-.7 1.6-1.6v-2.4" />
    <path d="M19.2 9.7c.9.6 1.4 1.4 1.4 2.3s-.5 1.7-1.4 2.3" />
  </Line>
);

const team = (p: P) => (
  <Line {...p}>
    <circle cx="8.8" cy="8.1" r="3" />
    <path d="M3.3 18.9c.2-3 2.6-5.3 5.5-5.3s5.3 2.3 5.5 5.3" />
    <path d="M15.9 5.6a3 3 0 0 1 0 5.3" />
    <path d="M17.3 14.1c1.7.7 2.9 2.5 3.1 4.6" />
  </Line>
);

/* --- §7.8 Suitable Business Types ----------------------------------------- */

const showroom = (p: P) => (
  <Line {...p}>
    <path d="M4.2 9.6h15.6v9.2c0 .6-.5 1-1 1H5.2c-.6 0-1-.4-1-1z" />
    <path d="M3.3 9.6 5 4.9c.2-.5.6-.8 1.1-.8h11.8c.5 0 .9.3 1.1.8l1.7 4.7" />
    <path d="M9.7 19.8v-5c0-.5.4-.9.9-.9h2.8c.5 0 .9.4.9.9v5" />
  </Line>
);

const clinic = (p: P) => (
  <Line {...p}>
    <path d="M5.3 20V6.5c0-.6.5-1.1 1.1-1.1h11.2c.6 0 1.1.5 1.1 1.1V20" />
    <path d="M3.4 20h17.2" />
    <path d="M12 8.7v5.1M9.5 11.2h5.1" />
  </Line>
);

const salon = (p: P) => (
  <Line {...p}>
    <circle cx="6.4" cy="17.5" r="2.6" />
    <circle cx="6.4" cy="6.5" r="2.6" />
    <path d="M8.7 8.1 19.6 18.6M8.7 15.9 19.6 5.4" />
  </Line>
);

const studio = (p: P) => (
  <Line {...p}>
    <path d="M4.4 8.7h2.9l1.4-2.2c.2-.3.5-.5.9-.5h4.8c.4 0 .7.2.9.5l1.4 2.2h2.9c1 0 1.8.8 1.8 1.8v6.6c0 1-.8 1.8-1.8 1.8H4.4c-1 0-1.8-.8-1.8-1.8v-6.6c0-1 .8-1.8 1.8-1.8z" />
    <circle cx="12" cy="13.6" r="3.1" />
  </Line>
);

const school = (p: P) => (
  <Line {...p}>
    <path d="m12 4.2 8.9 4.4-8.9 4.4-8.9-4.4z" />
    <path d="M6.7 10.7v4.7c0 .4.2.7.5.9 1.4.9 3.1 1.3 4.8 1.3s3.4-.4 4.8-1.3c.3-.2.5-.5.5-.9v-4.7" />
    <path d="M20.3 9v5.3" />
  </Line>
);

const agency = (p: P) => (
  <Line {...p}>
    <path d="M5 7.5h14c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H5c-1 0-1.8-.8-1.8-1.8V9.3c0-1 .8-1.8 1.8-1.8z" />
    <path d="M8.8 7.3V5.7c0-.8.7-1.5 1.5-1.5h3.4c.8 0 1.5.7 1.5 1.5v1.6" />
    <path d="M3.4 12.5h17.2" />
  </Line>
);

const consultant = (p: P) => (
  <Line {...p}>
    <circle cx="12" cy="7.6" r="3.4" />
    <path d="M5.3 20c.3-3.5 3.2-6.2 6.7-6.2s6.4 2.7 6.7 6.2" />
  </Line>
);

const service = (p: P) => (
  <Line {...p}>
    <path d="M17.2 3.5a4.9 4.9 0 0 0-5.7 6.3l-7.3 7.3a1.9 1.9 0 0 0 2.7 2.7l7.3-7.3a4.9 4.9 0 0 0 6.3-5.7l-2.8 2.8-2.6-.7-.7-2.6z" />
  </Line>
);

const settings = (p: P) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="3.1" />
    <path d="M19.1 14.2a1.5 1.5 0 0 0 .3 1.7l.1.1a1.8 1.8 0 1 1-2.6 2.6l-.1-.1a1.5 1.5 0 0 0-1.7-.3 1.5 1.5 0 0 0-.9 1.4v.2a1.8 1.8 0 0 1-3.6 0v-.1a1.5 1.5 0 0 0-1-1.4 1.5 1.5 0 0 0-1.7.3l-.1.1a1.8 1.8 0 1 1-2.6-2.6l.1-.1a1.5 1.5 0 0 0 .3-1.7 1.5 1.5 0 0 0-1.4-.9h-.2a1.8 1.8 0 0 1 0-3.6h.1a1.5 1.5 0 0 0 1.4-1 1.5 1.5 0 0 0-.3-1.7l-.1-.1a1.8 1.8 0 1 1 2.6-2.6l.1.1a1.5 1.5 0 0 0 1.7.3h.1a1.5 1.5 0 0 0 .9-1.4v-.2a1.8 1.8 0 0 1 3.6 0v.1a1.5 1.5 0 0 0 .9 1.4 1.5 1.5 0 0 0 1.7-.3l.1-.1a1.8 1.8 0 1 1 2.6 2.6l-.1.1a1.5 1.5 0 0 0-.3 1.7v.1a1.5 1.5 0 0 0 1.4.9h.2a1.8 1.8 0 0 1 0 3.6h-.1a1.5 1.5 0 0 0-1.4.9z" />
  </Line>
);

/* --- Solution intro feature tiles ----------------------------------------- */

const chatDots = (p: P) => (
  <Line {...p}>
    <path d="M4.4 6.6c0-1.2 1-2.1 2.2-2.1h10.9c1.2 0 2.2.9 2.2 2.1v6.6c0 1.2-1 2.2-2.2 2.2H9.6l-3.7 3.2c-.4.3-.9.1-.9-.4l.1-2.9c-.5-.3-.7-.9-.7-1.6z" />
    <path d="M8.5 9.9h.01M12 9.9h.01M15.5 9.9h.01" />
  </Line>
);

const bars = (p: P) => (
  <Line {...p}>
    <rect x="4.4" y="12.4" width="3.9" height="7.2" rx="1.4" />
    <rect x="10.1" y="8.2" width="3.9" height="11.4" rx="1.4" />
    <rect x="15.8" y="4.9" width="3.9" height="14.7" rx="1.4" />
  </Line>
);

const code = (p: P) => (
  <Line {...p}>
    <path d="m8.6 8.4-4.2 3.7 4.2 3.6" />
    <path d="m15.4 8.4 4.2 3.7-4.2 3.6" />
    <path d="m13.4 5.4-2.8 13.2" />
  </Line>
);

/* --- Utility glyphs ------------------------------------------------------- */

export const ChevronDown = (p: P) => (
  <Line {...p}>
    <path d="m6.2 9.3 5.8 5.6 5.8-5.6" />
  </Line>
);

export const ArrowRight = (p: P) => (
  <Line {...p}>
    <path d="M4.2 12h15.4" />
    <path d="m14.2 6.4 5.6 5.6-5.6 5.6" />
  </Line>
);

export const ArrowDown = (p: P) => (
  <Line {...p}>
    <path d="M12 4.3v15.4" />
    <path d="m6.4 14.2 5.6 5.6 5.6-5.6" />
  </Line>
);

/* --- Registry ------------------------------------------------------------- */

export const icons = {
  messageMissed,
  scatter,
  noPipeline,
  adUntracked,
  enquiry,
  sparkReply,
  checklist,
  calendar,
  handoff,
  chart,
  inbox,
  assistant,
  pipeline,
  bell,
  megaphone,
  team,
  showroom,
  clinic,
  salon,
  studio,
  school,
  agency,
  consultant,
  service,
  settings,
  chatDots,
  bars,
  code,
} as const;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Cmp = icons[name];
  return <Cmp className={className} />;
}
