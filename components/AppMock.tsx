import {
  InstagramMark,
  MessengerMark,
  MetaMark,
  WebsiteMark,
  WhatsAppMark,
} from "@/components/ui/brand";
import { LogoMark } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/icons";
import { MockPhone } from "@/components/MockPhone";
import {
  fillName,
  filters,
  messages,
  nav,
  threads,
} from "@/components/mockData";

/* ==========================================================================
   HERO PRODUCT MOCK — build spec §7.1 + §8, built to the approved reference
   --------------------------------------------------------------------------
   A full app-UI mock: navy sidebar, conversation list with channel filters,
   and a live chat thread with the AI sales assistant.

   §8 IMAGERY RULES observed:
     - no stock photography, no AI-robot graphics
     - NO invented business metrics anywhere. Unread counts and timestamps are
       ordinary chat-UI chrome, not performance claims. The Meta Ads card shows
       its LABELS only (Leads / Clicks / Spend) with no figures attached.
     - pure markup, so it costs zero image requests and never delays the hero

   TO SWAP IN A REAL SCREENSHOT: replace this component with a <next/image>,
   wide crop for desktop and portrait/square for mobile.
   ========================================================================== */

/* ==========================================================================
   DESKTOP MOCK — the full three-pane app
   --------------------------------------------------------------------------
   From xl only. The hero column is ~600px there, which is the first width
   where all three panes have room; below that the chat column collapses to a
   few words per line.
   ========================================================================== */
function MockDesk() {
  return (
    <div className="mock-shadow hidden overflow-hidden rounded-card bg-white xl:block">
      <div className="grid grid-cols-[132px_200px_1fr]">
        {/* ---------------- Sidebar ---------------- */}
        <div className="bg-forest p-3">
          <div className="flex items-center gap-1.5 px-1 py-1">
            <LogoMark className="h-5 w-5" />
            <span className="text-[11px] font-extrabold text-white">
              iSuite<span className="text-emerald-tint"> AI</span>
            </span>
          </div>

          <ul className="mt-4 space-y-0.5">
            {nav.map((item) => (
              <li
                key={item.label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] ${
                  item.active
                    ? "bg-white/10 font-semibold text-white"
                    : "text-white/60"
                }`}
              >
                <Icon
                  name={item.icon}
                  className={`h-4 w-4 shrink-0 ${
                    item.active ? "text-emerald-tint" : "text-white/55"
                  }`}
                />
                <span className="truncate">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto rounded-full bg-primary px-1.5 text-[9px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Conversation list ---------------- */}
        <div className="border-r border-line">
          <div className="border-b border-line p-3">
            <p className="text-[12px] font-bold text-forest">Inbox</p>
            <div className="mt-2 flex items-center gap-1.5 rounded-md border border-line px-2 py-1.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-3 w-3 shrink-0 text-slate"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <span className="truncate text-[9px] text-slate">
                Search chats, contacts or deals…
              </span>
            </div>

            {/* Channel filter tabs */}
            <div className="mt-2 flex flex-wrap gap-1">
              {filters.map((f, i) => (
                <span
                  key={f}
                  className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${
                    i === 0 ? "bg-forest text-white" : "bg-offwhite text-slate"
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <ul>
            {threads.map(({ name, preview, time, unread, Mark, active }) => (
              <li
                key={name}
                className={`flex items-start gap-2 border-b border-line p-3 ${
                  active ? "bg-offwhite" : ""
                }`}
              >
                <Mark className="mt-0.5 h-5 w-5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="truncate text-[10px] font-semibold text-forest">
                      {name}
                    </span>
                    <span className="shrink-0 text-[8px] text-slate">
                      {time}
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-1">
                    <span className="truncate text-[9px] text-slate">
                      {preview}
                    </span>
                    {unread && (
                      <span className="ml-auto shrink-0 rounded-full bg-primary px-1.5 text-[8px] font-bold text-white">
                        {unread}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Chat thread ---------------- */}
        <div className="flex flex-col">
          {/* Contact header */}
          <div className="flex items-center gap-2 border-b border-line p-3">
            <WhatsAppMark className="h-6 w-6 shrink-0" />
            <div className="min-w-0">
              <p className="truncate text-[10px] font-bold text-forest">
                Priya S.
              </p>
              <p className="text-[8px] font-medium text-harbour">Online</p>
            </div>
            <span className="ml-auto text-[12px] leading-none text-slate">
              ⋮
            </span>
          </div>

          {/* Messages */}
          <div className="flex flex-1 flex-col gap-2 bg-offwhite/60 p-3">
            <span className="ml-auto rounded-full bg-forest px-2 py-0.5 text-[8px] font-semibold text-white">
              AI Sales Assistant
            </span>

            {messages.map((m) => {
              const ai = m.from === "ai";
              return (
                <div
                  key={m.text}
                  className={`max-w-[86%] rounded-lg p-2 ${
                    ai
                      ? "rounded-tl-sm bg-white shadow-sm"
                      : "ml-auto rounded-tr-sm bg-harbour-tint"
                  }`}
                >
                  <p className="text-[9px] leading-relaxed text-charcoal">
                    {fillName(m.text, threads[0].first)}
                  </p>
                  <p className="mt-1 text-right text-[7px] text-slate">
                    {m.time}
                  </p>
                </div>
              );
            })}

            <div className="flex items-center gap-1 self-start rounded-lg rounded-tl-sm bg-white px-2 py-1.5 shadow-sm">
              <span className="typing inline-flex items-center gap-1 text-slate">
                <span />
                <span />
                <span />
              </span>
            </div>
          </div>

          {/* Composer */}
          <div className="flex items-center gap-2 border-t border-line p-2">
            <span className="flex-1 truncate rounded-full border border-line px-3 py-1.5 text-[9px] text-slate">
              Type a message…
            </span>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] text-white">
              ➤
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Picks the mock that fits the width. Both are markup — neither is fetched. */
export function AppMock() {
  return (
    <>
      <MockPhone />
      <MockDesk />
    </>
  );
}

/* --- Floating accents that overlap the mock, as the reference shows ------- */

export function MetaAdsCard() {
  return (
    <div className="float-card flex items-center gap-3 rounded-card bg-white p-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald/15">
        <MetaMark className="h-5 w-5" />
      </span>
      <div>
        <p className="text-[11px] font-bold text-forest">Meta Ads</p>
        {/* Labels only — attaching figures here would be an invented metric. */}
        <p className="text-[9px] text-slate">Leads · Clicks · Spend</p>
      </div>
      <span className="ml-2 text-[12px] leading-none text-slate">›</span>
    </div>
  );
}

/* ==========================================================================
   CHANNEL ARC — the channels the product connects to, riding a curve ABOVE
   the mock rather than sitting in a rail beside it.
   --------------------------------------------------------------------------
   Placed on top so the read is "all of these flow down into one inbox" — the
   whole proposition, before a word of copy is read. The old right-side rail
   only appeared from 1024px, which meant ~90% of visitors never saw the
   channel logos at all.

   It sits in NORMAL FLOW, not absolutely positioned, so it reserves its own
   height and can never land on top of the mock at a narrow width.
   ========================================================================== */

/** Lift, in px, that puts each tile on the curve. Symmetric: ends low, centre high. */
const channels = [
  { name: "WhatsApp", Mark: WhatsAppMark, lift: 0 },
  { name: "Instagram", Mark: InstagramMark, lift: 16 },
  { name: "Messenger", Mark: MessengerMark, lift: 22 },
  { name: "Website chat", Mark: WebsiteMark, lift: 16 },
  { name: "Meta Ads", Mark: MetaMark, lift: 0 },
];

export function ChannelArc() {
  return (
    <div className="relative mx-auto h-[70px] w-full max-w-[420px]">
      {/* The curve the tiles ride. Stretched, not scaled, so its ends stay
          level with the two outer tiles at any width — `non-scaling-stroke`
          keeps the weight and the dashes honest under that stretch.

          Drawn bright: a 1.5px half-opacity line disappeared entirely
          against the dark hero, which is the whole point of the curve. */}
      <svg
        viewBox="0 0 420 70"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full overflow-visible"
        style={{ filter: "drop-shadow(0 0 6px rgba(207, 230, 219, 0.45))" }}
      >
        <path
          d="M 28 46 Q 210 6 392 46"
          fill="none"
          stroke="#CFE6DB"
          strokeWidth="2.5"
          strokeDasharray="7 9"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <ul className="relative flex h-full items-end justify-between">
        {channels.map(({ name, Mark, lift }) => (
          <li
            key={name}
            title={name}
            style={{ transform: `translateY(-${lift}px)` }}
            className="float-card flex h-12 w-12 items-center justify-center rounded-[15px] bg-white"
          >
            <Mark className="h-7 w-7" />
            <span className="sr-only">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
