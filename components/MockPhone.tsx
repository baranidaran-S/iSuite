"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/ui/Logo";
import { fillName, filters, messages, threads } from "@/components/mockData";

/* ==========================================================================
   PHONE MOCK — a self-playing two-screen app
   --------------------------------------------------------------------------
   The desktop app has three panes. Every static attempt to get them onto a
   phone failed the same way: side by side gave the chat ~200px and a few
   words per line; stacked, the card ran to 600px and you had to scroll past
   an inbox to reach the conversation.

   So the phone does what a phone app actually does — ONE screen at a time —
   and it drives itself. A pointer glides onto the first conversation, taps
   it, and the thread slides in. Nobody has to touch anything, which matters:
   a visitor who just tapped an ad will not go looking for something to press.

   Roughly 90% of this traffic is on a phone, so this is the mock most people
   will actually meet.

   NO JAVASCRIPT. Same technique as ChatDemo: every element runs one animation
   of exactly TOTAL seconds on an infinite loop, with its cue expressed as a
   percentage, so they share a clock by construction and the loop is seamless.
   The keyframes are generated from CUE — retiming means editing one number.

   The two screens sit side by side on a 200%-wide track that slides by -50%,
   so the card's height comes from the taller screen instead of a hardcoded
   pixel value that would clip the moment the copy changed.

   It is decorative and not operable, so it is aria-hidden with one spoken
   alternative — the opposite of the earlier clickable version, where hiding
   real buttons from the accessibility tree would have been a defect.
   ========================================================================== */

/* -------------------------------------------------------------------------
   TIMELINE — seconds. Edit these to retune.
   ------------------------------------------------------------------------- */

const TOTAL = 11;

const CUE = {
  cursorIn: 0.5, // pointer fades in, bottom-right of the card
  travelEnd: 1.9, // pointer reaches the first conversation
  press: 2.05, // tap
  release: 2.25,
  slide: 2.45, // thread slides in
  back: 9.6, // slides back to the inbox, ready to loop
} as const;

const SLIDE = 0.35; // screen transition duration
const FADE = 0.25;
const START = { x: 120, y: 110 }; // px the pointer starts down-and-right of its target

const at = (s: number) => `${Math.min(100, (s / TOTAL) * 100).toFixed(3)}%`;
const ease = "cubic-bezier(0.32, 0.08, 0.16, 1)";

const KEYFRAMES = `
/* The two screens, on one sliding track */
@keyframes ph-track {
  0%, ${at(CUE.slide)} { transform: translateX(0); animation-timing-function: ${ease}; }
  ${at(CUE.slide + SLIDE)}, ${at(CUE.back)} { transform: translateX(-50%); animation-timing-function: ${ease}; }
  ${at(CUE.back + SLIDE)}, 100% { transform: translateX(0); }
}

/* Pointer: fade in, glide to the row, press, release, fade out WHERE IT IS.
   It only returns to its start position after it is invisible — animating
   both at once made it look like it was being flicked away. */
@keyframes ph-cursor {
  0%, ${at(CUE.cursorIn)} { opacity: 0; transform: translate(${START.x}px, ${START.y}px) scale(1); }
  ${at(CUE.cursorIn + 0.3)} { opacity: 1; transform: translate(${START.x}px, ${START.y}px) scale(1); animation-timing-function: ${ease}; }
  ${at(CUE.travelEnd)} { opacity: 1; transform: translate(0, 0) scale(1); }
  ${at(CUE.press)} { opacity: 1; transform: translate(0, 0) scale(0.8); }
  ${at(CUE.release)} { opacity: 1; transform: translate(0, 0) scale(1); }
  ${at(CUE.slide + FADE)} { opacity: 0; transform: translate(0, 0) scale(1); }
  ${at(CUE.slide + FADE + 0.2)}, 100% { opacity: 0; transform: translate(${START.x}px, ${START.y}px) scale(1); }
}

/* Tap ripple, from the pointer tip */
@keyframes ph-ripple {
  0%, ${at(CUE.press)} { opacity: 0.45; transform: scale(0); }
  ${at(CUE.press + 0.45)}, 100% { opacity: 0; transform: scale(2.8); }
}

/* The row lights up under the tap */
@keyframes ph-hit {
  0%, ${at(CUE.press - 0.1)} { background-color: rgba(0, 119, 67, 0); }
  ${at(CUE.press)}, ${at(CUE.slide)} { background-color: rgba(0, 119, 67, 0.14); }
  ${at(CUE.slide + SLIDE)}, 100% { background-color: rgba(0, 119, 67, 0); }
}

.ph-anim { animation-duration: ${TOTAL}s; animation-iteration-count: infinite; animation-fill-mode: both; }

/* Held still until the mock is actually on screen. On a phone this sits well
   below the fold, so an 11-second loop that starts at page load has already
   glided the pointer over, pressed the conversation and opened the thread by
   the time anyone scrolls down to it — the visitor arrives to a thread that
   opened itself and never sees the tap that is the whole point. */
.ph-paused .ph-anim { animation-play-state: paused; }

/* Motion off: the pointer never appears and the track never moves, so what
   is left is the inbox — a plain, correct product screenshot. */
@media (prefers-reduced-motion: reduce) {
  .ph-anim { animation: none !important; }
}
`;

/* -------------------------------------------------------------------------
   PIECES
   ------------------------------------------------------------------------- */

const Pointer = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-6 w-6 drop-shadow-[0_2px_4px_rgba(18,53,38,0.45)]"
  >
    <path
      d="M5.5 3.2 18.2 12l-5.2.7 2.9 5.9-2.4 1.2-2.9-5.9-3.6 3.6z"
      fill="#fff"
      stroke="#123526"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

const thread = threads[0];

export function MockPhone() {
  const root = useRef<HTMLDivElement>(null);
  /* Starts paused, so the sequence always begins at frame zero the first
     time it is seen rather than part-way through. */
  const [onShow, setOnShow] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setOnShow(entry.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />

      <p className="sr-only">
        A demonstration of the iSuite AI inbox on a phone. Enquiries from
        WhatsApp, Instagram, Messenger and the website all arrive in one list;
        opening one shows the AI sales assistant answering the customer and
        offering appointment times.
      </p>

      <div
        ref={root}
        aria-hidden="true"
        className={`mock-shadow overflow-hidden rounded-card bg-white xl:hidden ${
          onShow ? "" : "ph-paused"
        }`}
      >
        {/* App bar — the one piece of chrome both screens share */}
        <div className="flex items-center gap-2 bg-forest px-4 py-3">
          <LogoMark className="h-6 w-6" />
          <span className="text-[14px] font-extrabold text-white">
            iSuite<span className="text-emerald-tint"> AI</span>
          </span>
        </div>

        <div className="overflow-hidden">
          <div
            className="ph-anim flex w-[200%]"
            style={{ animationName: "ph-track" }}
          >
            {/* ================= Screen 1: the inbox ================= */}
            <div className="w-1/2 shrink-0">
              <div className="border-b border-line px-4 pt-3.5 pb-3">
                <div className="flex items-center gap-2">
                  <p className="text-[16px] font-extrabold text-forest">
                    Inbox
                  </p>
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-white">
                    12
                  </span>
                </div>

                {/* Wrapped, not scrolled — a hidden horizontal scroller here
                    is what produced the page-wide scrollbar before. */}
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {filters.map((f, i) => (
                    <span
                      key={f}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        i === 0
                          ? "bg-forest text-white"
                          : "bg-offwhite text-slate"
                      }`}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <ul>
                {threads.map(({ name, preview, time, unread, Mark }, i) => (
                  <li
                    key={name}
                    className="relative flex items-start gap-2.5 border-b border-line px-4 py-3 last:border-b-0"
                  >
                    {/* Only the first row is ever tapped */}
                    {i === 0 && (
                      <>
                        <span
                          className="ph-anim pointer-events-none absolute inset-0"
                          style={{ animationName: "ph-hit" }}
                        />
                        <span
                          className="ph-anim pointer-events-none absolute top-7 left-14 -mt-3 -ml-3 h-6 w-6 rounded-full bg-primary"
                          style={{ animationName: "ph-ripple" }}
                        />
                        <span
                          className="ph-anim pointer-events-none absolute top-7 left-14 z-10"
                          style={{ animationName: "ph-cursor" }}
                        >
                          <Pointer />
                        </span>
                      </>
                    )}

                    <Mark className="mt-0.5 h-6 w-6 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="truncate text-[13px] font-bold text-forest">
                          {name}
                        </span>
                        <span className="shrink-0 text-[10px] text-slate">
                          {time}
                        </span>
                      </div>
                      <div className="mt-0.5 flex items-center gap-2">
                        <span className="truncate text-[12px] text-slate">
                          {preview}
                        </span>
                        {unread && (
                          <span className="ml-auto shrink-0 rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white">
                            {unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= Screen 2: the conversation ================= */}
            <div className="flex w-1/2 shrink-0 flex-col">
              <div className="flex items-center gap-2 border-b border-line py-2.5 pr-4 pl-2">
                {/* Back chevron — chrome, so the screen reads as a real
                    detail view rather than a second screenshot */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center text-forest">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path d="M15 5.5 8 12l7 6.5" />
                  </svg>
                </span>

                <thread.Mark className="h-7 w-7 shrink-0" />
                <div className="min-w-0">
                  <p className="truncate text-[13px] leading-tight font-bold text-forest">
                    {thread.name}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-none font-semibold text-slate">
                    {thread.channel} · Online
                  </p>
                </div>
                <span className="ml-auto text-[15px] leading-none text-slate">
                  ⋮
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 bg-offwhite/60 px-3 py-3">
                <span className="ml-auto rounded-full bg-forest px-2.5 py-1 text-[10px] font-bold text-white">
                  AI Sales Assistant
                </span>

                {messages.map((m) => {
                  const ai = m.from === "ai";
                  return (
                    <div
                      key={m.text}
                      className={`max-w-[88%] rounded-xl p-2.5 ${
                        ai
                          ? "rounded-tl-sm bg-white shadow-sm"
                          : "ml-auto rounded-tr-sm bg-harbour-tint"
                      }`}
                    >
                      <p className="text-[12.5px] leading-relaxed text-charcoal">
                        {fillName(m.text, thread.first)}
                      </p>
                      <p className="mt-1 text-right text-[10px] text-slate">
                        {m.time}
                      </p>
                    </div>
                  );
                })}

                <div className="flex items-center gap-1 self-start rounded-xl rounded-tl-sm bg-white px-3 py-2.5 shadow-sm">
                  <span className="typing inline-flex items-center gap-1 text-slate">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-line px-3 py-2.5">
                <span className="flex-1 truncate rounded-full border border-line px-3.5 py-1.5 text-[12px] text-slate">
                  Type a message…
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] text-white">
                  ➤
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
