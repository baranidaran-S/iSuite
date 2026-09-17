import { InstagramMark, MetaMark, WhatsAppMark } from "@/components/ui/brand";
import { problem } from "@/lib/content";

/* ==========================================================================
   FRAGMENTATION VISUAL — the metaphor the Problem section is built around
   --------------------------------------------------------------------------
   Three channels sending real enquiries, dashed threads sweeping inward and
   falling away, fragments losing their content, and a "Lost / ?" card at the
   bottom that nothing quite reaches. It says what the four cards say, before
   a word has been read.

   NO GRADIENTS in the design itself, as the client requires. The reference
   had soft glows behind the threads and the Lost card; a glow is a radial
   gradient, so depth here comes from flat translucent fills, hairline strokes
   and falling opacity. Nothing blends.

   The ONE exception is the brand logos, which carry their own colour and, in
   Instagram's case, their own gradient. Those are the companies' marks, not
   our design, and they are already on this page in the hero and the app mock.

   TWO COMPOSITIONS, NOT ONE. The placed layout needs about 1400px to hold
   its shape, so below that the same story is told as a vertical cascade —
   channels stepping left, centre, right, threads converging, then the Lost
   card. Roughly 90% of this traffic is on a phone, so that version had to be
   designed rather than fallen back to.

   ONE MATERIAL. Everything that sits on the dark ground — the enquiry
   bubbles, the ghost fragments, the Lost card — is the SAME warm white as the
   four problem cards. It was previously translucent dark, which made the
   visual and the cards read as two different worlds pasted together. Light
   objects on a dark field is also simply how a chat looks.

   Decoration: aria-hidden throughout, no animation. The four cards carry the
   same message in words.
   ========================================================================== */

const { channels, messages, lostLabel, questions } = problem.scatter;

const MARKS = [WhatsAppMark, InstagramMark, MetaMark];

/** Channel source: app icon, then its name in a pill. */
function Source({ i }: { i: number }) {
  const Mark = MARKS[i];
  return (
    <span className="inline-flex items-center gap-2">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[17px] bg-white p-2 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.55)]">
        <Mark className="h-full w-full" />
      </span>
      <span className="rounded-full bg-[#FAF9F5] px-3.5 py-2 text-[14px] font-bold text-forest">
        {channels[i]}
      </span>
    </span>
  );
}

/** A real enquiry, with the time and ticks a chat UI would show. */
function Enquiry({ i }: { i: number }) {
  const m = messages[i];
  return (
    <span className="mock-shadow inline-block max-w-[200px] rounded-[14px] rounded-tl-[4px] bg-[#FAF9F5] px-3 py-2 text-left">
      <span className="block text-[12.5px] leading-snug text-charcoal">
        {m.text}
      </span>
      <span className="mt-1 block text-right text-[10px] text-slate">
        {m.time} ✓✓
      </span>
    </span>
  );
}

/** An enquiry that has lost its content — the message without the message. */
function Ghost({ w = 62 }: { w?: number }) {
  return (
    <span
      className="inline-flex flex-col gap-[5px] rounded-[12px] bg-[#FAF9F5]/55 px-3 py-2.5"
      style={{ width: w }}
    >
      <span className="block h-[3px] w-full rounded-full bg-forest/25" />
      <span className="block h-[3px] w-4/5 rounded-full bg-forest/18" />
      <span className="block h-[3px] w-3/5 rounded-full bg-forest/12" />
    </span>
  );
}

/** One fragment still showing what it was — an unopened message. */
function Envelope() {
  return (
    <span className="inline-flex items-center justify-center rounded-[12px] bg-[#FAF9F5]/55 px-3.5 py-3 text-forest/35">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="3" y="5.5" width="18" height="13" rx="2.4" />
        <path d="m3.8 7 7.1 5.4a1.8 1.8 0 0 0 2.2 0L20.2 7" />
      </svg>
    </span>
  );
}

const Warn = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M12 4.4 21 19.6H3z" />
    <path d="M12 10.2v3.6" />
    <path d="M12 16.6h.01" />
  </svg>
);

/**
 * Where it all ends up.
 *
 * Same light material as the four problem cards, but deliberately NOT the same
 * card. It is the outcome, not a fifth problem, so three things set it apart:
 *
 *   - a pale CORAL fill instead of warm white. The difference is hue, not
 *     lightness, so it separates without shouting.
 *   - a DASHED border, picking up the dashed wires that arrive at it. Dashed
 *     reads as incomplete, which is the whole point.
 *   - a second card edge behind it, offset and tilted the other way, so it
 *     reads as a stack of them rather than one.
 *
 * Coral is the only hue on this page outside the palette, and it earns it: it
 * is a STATE, not an accent — the standard signal for something gone wrong —
 * and it appears exactly once.
 */
export function LostCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* The one behind it — this keeps happening */}
      <span
        aria-hidden="true"
        className="absolute inset-x-2 top-2 bottom-0 rotate-[1.6deg] rounded-[20px] border-2 border-dashed border-[#A8382C]/20 bg-[#FDF1EE]/50"
      />

      <div className="mock-shadow relative -rotate-[0.8deg] rounded-[20px] border-2 border-dashed border-[#A8382C]/40 bg-[#FDF1EE] px-6 py-7 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F7DED9] text-[#A8382C]">
          <Warn />
        </span>

        <p className="mt-3 text-[20px] font-extrabold tracking-wide text-[#A8382C]">
          {lostLabel}
        </p>

        <ul className="mt-3 space-y-1 border-t border-dashed border-[#A8382C]/25 pt-3">
          {questions.map((q) => (
            <li key={q} className="text-[15px] leading-snug text-[#4A322C]">
              {q}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   DESKTOP THREADS
   Two long arcs sweeping inward from the outer channels and one fall from the
   centre, all converging on the Lost card. Dashed, not solid: the line exists,
   it just never completes. Stretched to the band with the stroke weight held
   constant, so they stay hairlines at any width.
   -------------------------------------------------------------------------- */

const THREADS = [
  { d: "M212 112C392 142 462 232 610 300C702 342 760 382 792 408", o: 0.78 },
  { d: "M1388 112C1208 142 1138 232 990 300C898 342 840 382 808 408", o: 0.78 },
  { d: "M800 158L800 408", o: 0.7 },
  // Threads that have come away from anything at all
  { d: "M566 178L598 190", o: 0.4 },
  { d: "M1034 178L1002 190", o: 0.4 },
  { d: "M664 388L692 396", o: 0.3 },
  { d: "M936 388L908 396", o: 0.3 },
];

const MOTES = [
  { x: 322, y: 128, r: 3.6, o: 0.9 },
  { x: 1278, y: 128, r: 3.6, o: 0.9 },
  { x: 520, y: 248, r: 3.2, o: 0.78 },
  { x: 1080, y: 248, r: 3.2, o: 0.78 },
  { x: 726, y: 362, r: 3, o: 0.66 },
  { x: 874, y: 362, r: 3, o: 0.66 },
  { x: 800, y: 300, r: 3.2, o: 0.66 },
  { x: 612, y: 336, r: 2.2, o: 0.4 },
  { x: 988, y: 336, r: 2.2, o: 0.4 },
];

function Threads() {
  return (
    <svg
      viewBox="0 0 1600 420"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <g
        stroke="#CFE6DB"
        fill="none"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeDasharray="7 7"
        vectorEffect="non-scaling-stroke"
      >
        {THREADS.map((t) => (
          <path key={t.d} d={t.d} strokeOpacity={t.o} />
        ))}
      </g>
      <g fill="#CFE6DB">
        {MOTES.map((m) => (
          <circle
            key={`${m.x}-${m.y}`}
            cx={m.x}
            cy={m.y}
            r={m.r}
            opacity={m.o}
          />
        ))}
      </g>
    </svg>
  );
}

/** Drifting question marks, gathering where the threads give out. */
const QUERIES = [
  "left-[41%] top-[72%] text-3xl opacity-[0.26]",
  "right-[41%] top-[68%] text-2xl opacity-[0.2]",
  "left-[45%] top-[88%] text-xl opacity-[0.16]",
  "right-[44%] top-[90%] text-2xl opacity-[0.14]",
];

/* ==========================================================================
   DESKTOP — the placed composition, from 1400px
   ========================================================================== */

export function ScatterDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 hidden h-[420px] select-none 2xl:block"
    >
      <Threads />

      {/* The two outer channels flank the supporting copy */}
      <span className="absolute top-0 left-0">
        <Source i={0} />
      </span>
      <span className="absolute top-[70px] left-0">
        <Enquiry i={0} />
      </span>

      <span className="absolute top-0 right-0">
        <Source i={2} />
      </span>
      <span className="absolute top-[70px] right-0">
        <Enquiry i={2} />
      </span>

      {/* The third sits under the copy, on the centre line */}
      <span className="absolute top-[96px] left-1/2 -translate-x-1/2">
        <Source i={1} />
      </span>
      <span className="absolute top-[166px] left-1/2 -translate-x-1/2">
        <Enquiry i={1} />
      </span>

      {/* Fragments riding the arcs, losing their content as they fall */}
      <span className="absolute top-[150px] left-[26%]">
        <Ghost w={74} />
      </span>
      <span className="absolute top-[252px] left-[33%]">
        <Ghost w={60} />
      </span>
      <span className="absolute top-[150px] right-[26%]">
        <Ghost w={74} />
      </span>
      <span className="absolute top-[248px] right-[34%]">
        <Envelope />
      </span>

      {QUERIES.map((pos) => (
        <span
          key={pos}
          className={`absolute font-extrabold text-emerald-tint ${pos}`}
        >
          ?
        </span>
      ))}
    </div>
  );
}

/* ==========================================================================
   PHONE AND TABLET — the same story as a vertical cascade
   --------------------------------------------------------------------------
   Channels step left, centre, right as they arrive, each with its enquiry.
   The threads then converge and give out above the Lost card. Designed for
   this width rather than squeezed down from the desktop composition.
   ========================================================================== */

/*
 * One vertical thread with the three channels as nodes on it, then a break.
 *
 * Earlier attempts drew diagonal connectors between staggered steps. They did
 * not survive the width: a 100x40 viewBox stretched across ~300px flattens a
 * curve into a near-horizontal speck, so the wires read as stray marks rather
 * than a thread. Before that, one fixed drawing under the cascade connected
 * nothing at all, because each step changes height as its copy wraps.
 *
 * A vertical spine has neither problem. It is a CSS dashed border, not SVG, so
 * it cannot distort, it stretches to whatever height the steps end up, and the
 * dashes stay the same size as the desktop ones. The icons sit ON it, which
 * makes them read as the points the thread passes through.
 *
 * It then STOPS above the Lost card, stuttering out over two short stubs. The
 * gap is the whole message.
 */
export function ScatterStack() {
  return (
    <div aria-hidden="true" className="mt-8 select-none 2xl:hidden">
      <div className="relative">
        {/* The thread. Starts at the centre of the first icon (56px tile, so
            28px = left-7) and runs to the bottom of the last message. */}
        <span className="absolute top-7 bottom-0 left-7 border-l-2 border-dashed border-emerald-tint/55" />

        <ol className="relative space-y-6">
          {channels.map((name, i) => (
            <li key={name}>
              <Source i={i} />
              <span className="mt-2 block pl-[72px]">
                <Enquiry i={i} />
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Where it gives out.
          The thread stutters over two stubs, drifting right as it goes, and
          the questions gather in the gap it leaves — which is the one place
          on a phone they are actually visible. Beside the card they were not:
          at 375px the card is 295px of a 295px column, so anything placed at
          11% or 90% sits underneath it. */}
      <div className="relative h-[86px]">
        <span className="absolute top-0 left-7 h-6 border-l-2 border-dashed border-emerald-tint/35" />
        <span className="absolute top-10 left-[46px] h-3 rotate-[14deg] border-l-2 border-dashed border-emerald-tint/20" />

        <span className="absolute top-3 left-[92px] text-[26px] font-extrabold text-emerald-tint opacity-[0.3]">
          ?
        </span>
        <span className="absolute top-[42px] left-[146px] text-[19px] font-extrabold text-emerald-tint opacity-[0.22]">
          ?
        </span>
        <span className="absolute top-1 right-[56px] text-[17px] font-extrabold text-emerald-tint opacity-[0.16]">
          ?
        </span>
      </div>

      <LostCard className="mx-auto max-w-[330px]" />
    </div>
  );
}
