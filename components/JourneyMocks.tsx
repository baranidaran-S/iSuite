import type { ReactNode } from "react";
import { WhatsAppMark } from "@/components/ui/brand";
import { Icon } from "@/components/ui/icons";

/* ==========================================================================
   JOURNEY MOCKS — the six mini product screens on the How It Works ribbon
   --------------------------------------------------------------------------
   Six white cards, one per step, each showing the SHAPE of the screen that
   step produces: a message, a reply, three saved answers, a booking, a
   handover, a closed deal.

   THREE SIZES, NOT TWO. A card is 343px wide on a phone, about 186px in the
   six-across band at the 1200px shell, and about 280px once the section takes
   the full breadth past 1400px. One type scale cannot serve all three: sized
   for the band it is unreadable on a phone, sized for the phone it breaks the
   band. Every size below is therefore declared three times — see SCALE.

   No card is allowed to set its own type size inline. That is how the middle
   tier got missed the first time and the cards came out looking cramped on a
   wide screen.

   COLOUR. Each card owns ONE of the page's three accent families and shows it
   twice, in the header tile and in the element that matters:

     01 enquiry   WhatsApp's own green — a real logo, not a palette choice
     02 reply     harbour   the assistant speaks in blue-grey, not green
     03 qualify   emerald   a tick is green because confirmation is green
     04 booking   copper
     05 handover  harbour
     06 closed    copper trophy, emerald "Won"

   Green is the exception that means "confirmed", which is the only job it
   should have had — the first cut was emerald end to end, which put six green
   cards under a green band on a green section.

   THERE IS NOT ONE FIGURE IN HERE. No deal value, no lead count, no
   percentage, no rating. The requirements doc forbids fake dashboard figures
   and this page carries no invented proof anywhere, so the mocks show
   structure and nothing that could be read as a result.

   No dates either. A hard date ("Tue, 16 Sep") is stale the week after it
   ships and quietly dates the whole page, so the booking card says
   "Tomorrow" — which stays true for as long as the page is up.
   ========================================================================== */

/**
 * base = the vertical stack below 1280px · xl = the band at the 1200px shell
 * · 2xl = the band at full breadth. Written out rather than composed, because
 * Tailwind reads this file as plain text.
 */
const SCALE = {
  title: "text-[12.5px] xl:text-[11px] 2xl:text-[12.5px]",
  body: "text-[13px] xl:text-[11px] 2xl:text-[12.5px]",
  row: "text-[12px] xl:text-[10px] 2xl:text-[11.5px]",
  stamp: "text-[10.5px] xl:text-[9px] 2xl:text-[10px]",
  tile: "h-[26px] w-[26px] xl:h-[22px] xl:w-[22px] 2xl:h-[26px] 2xl:w-[26px]",
  tileIcon:
    "h-[15px] w-[15px] xl:h-[13px] xl:w-[13px] 2xl:h-[15px] 2xl:w-[15px]",
  disc: "h-[18px] w-[18px] xl:h-[15px] xl:w-[15px] 2xl:h-[17px] 2xl:w-[17px]",
  tick: "h-3 w-3 xl:h-2.5 xl:w-2.5 2xl:h-3 2xl:w-3",
  glyph: "h-4 w-4 xl:h-3.5 xl:w-3.5 2xl:h-4 2xl:w-4",
  avatar: "h-7 w-7 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7",
} as const;

/**
 * No `h-full` here, deliberately.
 *
 * It used to have one, and the taller cards spilled out of their own white
 * box: `height: 100%` resolved against a grid row whose height was still
 * being worked out from these very cards, so the row collapsed to the
 * min-height and everything past it overflowed. The card is sized by its
 * content now, and HowItWorks makes each grid cell a flex container so the
 * six still stretch to one common height.
 */
function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="mock-shadow flex w-full min-w-0 flex-col gap-2.5 rounded-[16px] bg-white p-4 text-left xl:min-h-[156px] xl:gap-2 xl:p-3 2xl:gap-2.5 2xl:p-4">
      {children}
    </div>
  );
}

/**
 * Every card opens the same way: a small tinted tile, then the screen's own
 * title in full-contrast forest. The tile is where each card's accent family
 * announces itself.
 */
function Head({
  tile,
  icon,
  children,
}: {
  /** Background + text classes for the tile, e.g. "bg-harbour-tint text-harbour". */
  tile: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <span className="flex items-center gap-2">
      <span
        className={`flex shrink-0 items-center justify-center rounded-[8px] ${SCALE.tile} ${tile}`}
      >
        {icon}
      </span>
      <span
        className={`leading-tight font-extrabold text-forest ${SCALE.title}`}
      >
        {children}
      </span>
    </span>
  );
}

const Tick = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m5 12.5 4.6 4.5L19 7.5" />
  </svg>
);

/** Hand-drawn, because the icon set has no trophy. */
const Trophy = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M7.4 3.6h9.2v5.2a4.6 4.6 0 0 1-9.2 0Z" />
    <path d="M7.4 5.2H4.8v1.4a3 3 0 0 0 2.7 3M16.6 5.2h2.6v1.4a3 3 0 0 1-2.7 3" />
    <path d="M12 13.4v3.4M8.6 20.4h6.8l-.7-3.6H9.3Z" />
  </svg>
);

/** WhatsApp's delivered-and-read marks — the detail that makes a chat a chat. */
const ReadMarks = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 22 12"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`h-3 w-[21px] xl:h-2.5 xl:w-[18px] ${className}`}
  >
    <path d="m1 6.6 3.2 3.4L11 2.4" />
    <path d="m9 6.6 3.2 3.4L19 2.4" />
  </svg>
);

/** Timestamp row. `mt-auto` pins it to the foot of whichever card uses it. */
const Stamp = ({ children }: { children: ReactNode }) => (
  <span
    className={`mt-auto flex items-center gap-1 pt-0.5 font-semibold text-slate ${SCALE.stamp}`}
  >
    {children}
  </span>
);

/* --- 01 · the enquiry arrives — WhatsApp's own green ---------------------- */
function EnquiryMock() {
  return (
    <Frame>
      <span className="flex items-center gap-2">
        <WhatsAppMark className={`shrink-0 ${SCALE.tile}`} />
        <span
          className={`leading-tight font-extrabold text-forest ${SCALE.title}`}
        >
          New enquiry
        </span>
      </span>

      {/* Neutral on purpose. The customer's own words are not a brand moment. */}
      <p
        className={`rounded-[12px] rounded-tl-[4px] bg-offwhite px-2.5 py-2 leading-snug font-semibold text-charcoal ${SCALE.body}`}
      >
        Hi, I&rsquo;m interested in your service. Do you have a demo?
      </p>

      <Stamp>11:24&nbsp;AM</Stamp>
    </Frame>
  );
}

/* --- 02 · the AI answers — harbour ---------------------------------------- */
function ReplyMock() {
  return (
    <Frame>
      <Head
        tile="bg-harbour-tint text-harbour"
        icon={<Icon name="sparkReply" className={SCALE.tileIcon} />}
      >
        iSuite AI
      </Head>

      <p
        className={`rounded-[12px] rounded-tl-[4px] bg-harbour-tint px-2.5 py-2 leading-snug font-semibold text-forest ${SCALE.body}`}
      >
        Thanks for getting in touch! Which service are you looking for?
      </p>

      <Stamp>
        11:24&nbsp;AM
        <ReadMarks className="text-harbour" />
      </Stamp>
    </Frame>
  );
}

/* --- 03 · the answers are saved — emerald, because a tick is green -------- */
const QUALIFIED = [
  ["Interest", "High"],
  ["Budget", "Confirmed"],
  ["Requirement", "Clear"],
];

function QualifyMock() {
  return (
    <Frame>
      <Head
        tile="bg-emerald-tint text-emerald"
        icon={<Icon name="checklist" className={SCALE.tileIcon} />}
      >
        Lead details
      </Head>

      <ul className="flex flex-col gap-1.5">
        {QUALIFIED.map(([label, value]) => (
          <li
            key={label}
            className="flex items-center gap-2 rounded-[9px] bg-offwhite px-2 py-1.5"
          >
            <span
              className={`flex shrink-0 items-center justify-center rounded-full bg-emerald text-white ${SCALE.disc}`}
            >
              <Tick className={SCALE.tick} />
            </span>
            <span className={`font-semibold text-slate ${SCALE.row}`}>
              {label}
            </span>
            <span className={`ml-auto font-extrabold text-forest ${SCALE.row}`}>
              {value}
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/* --- 04 · the slot is taken — copper -------------------------------------- */
function BookingMock() {
  return (
    <Frame>
      <Head
        tile="bg-copper-tint text-copper"
        icon={<Icon name="calendar" className={SCALE.tileIcon} />}
      >
        Product demo
      </Head>

      <div className="flex flex-col gap-1">
        <span
          className={`flex items-center gap-1.5 font-semibold text-charcoal ${SCALE.row}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden="true"
            className={`shrink-0 text-copper ${SCALE.glyph}`}
          >
            <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
            <path d="M3.5 9.6h17M8 3.4v3.2M16 3.4v3.2" />
          </svg>
          Tomorrow
        </span>

        <span
          className={`flex items-center gap-1.5 font-semibold text-charcoal ${SCALE.row}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden="true"
            className={`shrink-0 text-copper ${SCALE.glyph}`}
          >
            <circle cx="12" cy="12" r="8.6" />
            <path d="M12 7.2V12l3.2 2" />
          </svg>
          3:00 &ndash; 3:30&nbsp;PM
        </span>
      </div>

      {/* Past tense on purpose — the step is "booked", not "book it yourself". */}
      <span
        className={`mt-auto flex items-center justify-center gap-1 rounded-full bg-copper-tint py-1.5 font-extrabold text-copper ${SCALE.row}`}
      >
        <Tick className={SCALE.tick} />
        Added to your calendar
      </span>
    </Frame>
  );
}

/* --- 05 · a person picks it up — harbour ---------------------------------- */
function HandoverMock() {
  return (
    <Frame>
      <Head
        tile="bg-harbour-tint text-harbour"
        icon={<Icon name="team" className={SCALE.tileIcon} />}
      >
        Assigned to sales team
      </Head>

      <span className="flex -space-x-1.5">
        {["A", "R", "K"].map((initial) => (
          <span
            key={initial}
            className={`flex items-center justify-center rounded-full border-2 border-white bg-harbour font-extrabold text-white ${SCALE.avatar} ${SCALE.stamp}`}
          >
            {initial}
          </span>
        ))}
      </span>

      <p
        className={`mt-auto rounded-[10px] border border-line bg-offwhite px-2.5 py-2 leading-snug font-semibold text-charcoal ${SCALE.row}`}
      >
        Whole conversation and every saved answer attached.
      </p>
    </Frame>
  );
}

/* --- 06 · the deal lands — copper trophy, emerald "Won" ------------------- */
function ClosedMock() {
  return (
    <Frame>
      <Head
        tile="bg-copper-tint text-copper"
        icon={<Trophy className={SCALE.tileIcon} />}
      >
        Deal closed
      </Head>

      {/* The four stages this deal passed through, the last one won. A bar,
          not a figure.

          These were copper-TINT, which measured 1.29:1 on the white card —
          invisible, the same failure the channel arc's line had. Solid copper
          is 6.7:1, and it is truer anyway: by step six all four stages are
          behind the deal, so none should read as unreached. */}
      <span aria-hidden="true" className="flex items-center gap-1">
        <span className="h-2 flex-1 rounded-full bg-copper xl:h-1.5 2xl:h-2" />
        <span className="h-2 flex-1 rounded-full bg-copper xl:h-1.5 2xl:h-2" />
        <span className="h-2 flex-1 rounded-full bg-copper xl:h-1.5 2xl:h-2" />
        <span className="h-2 flex-1 rounded-full bg-emerald xl:h-1.5 2xl:h-2" />
      </span>

      <span className="flex items-center justify-between gap-2">
        <span className={`font-semibold text-slate ${SCALE.row}`}>Stage</span>
        <span
          className={`flex items-center gap-1 rounded-full bg-emerald px-2 py-1 leading-none font-extrabold text-white ${SCALE.stamp}`}
        >
          <Tick className={SCALE.tick} />
          Won
        </span>
      </span>

      <p
        className={`mt-auto leading-snug font-semibold text-slate ${SCALE.row}`}
      >
        Every message and answer stays on the deal.
      </p>
    </Frame>
  );
}

export const journeyMocks = {
  enquiry: EnquiryMock,
  reply: ReplyMock,
  qualify: QualifyMock,
  booking: BookingMock,
  handover: HandoverMock,
  closed: ClosedMock,
} as const;

export type JourneyMockName = keyof typeof journeyMocks;
