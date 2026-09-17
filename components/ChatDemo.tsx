"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppMark } from "@/components/ui/brand";
import { chatDemo } from "@/lib/content";

/* ==========================================================================
   CHAT DEMO — the looping product demo that replaces the walkthrough video
   --------------------------------------------------------------------------
   A light chat UI floating on the dark navy card. Autoplays, loops forever,
   no controls, no play button.

   WHY THIS AND NOT A VIDEO
     - iOS and Android block autoplay for anything with sound, and muted
       autoplay still costs a download before the first frame appears. This
       starts instantly.
     - It stays sharp at every width instead of being re-encoded per size.
     - It costs zero network requests and nothing to produce.

   IT PAUSES WHEN IT IS OFF SCREEN.

   The timeline itself is still pure CSS with no timer. The one piece of
   JavaScript here is an IntersectionObserver that adds `cd-paused`, which
   sets `animation-play-state: paused` on everything.

   That is not a battery optimisation, it is the behaviour. A 16s loop that
   runs whether or not anyone is watching means scrolling away for ten
   seconds and coming back to the middle of a sentence, or to the empty
   stretch after the conversation clears — which reads as if the demo had
   restarted on its own. Paused, it holds the frame you left and carries on
   from there, and the first time it is seen it always starts at zero.

   HOW THE TIMELINE WORKS — no JavaScript, not even a timer.
     Every animated element runs ONE animation of exactly TOTAL seconds on an
     infinite loop, and its cue is expressed as a percentage of that. Because
     they all share a duration and start together, they can never drift apart
     and the restart is seamless by construction. The keyframes below are
     generated from CUE, so retiming the sequence means editing one number.

   THE BASE STYLES ARE THE FINISHED FRAME, not the empty one. Every element
   sits in its final state by default and the animation reaches back to hide
   it. That is what makes `prefers-reduced-motion` a single `animation: none`
   rule: motion off, and what is left is the completed conversation with the
   slot booked — exactly the static frame the reduced-motion case wants.

   The whole thing is aria-hidden. `chatDemo.alt` is the only thing a screen
   reader receives, so it has to describe the entire sequence.

   No metrics, no counters, no dashboard figures (build spec §8).
   ========================================================================== */

/* -------------------------------------------------------------------------
   TIMELINE — all values in seconds. Edit these to retune the sequence.
   ------------------------------------------------------------------------- */

const TOTAL = 16; // full loop length

const CUE = {
  incoming1: 0.5, // customer message arrives
  typing1: { in: 2.5, out: 4.0 }, // assistant composing
  reply: 4.0, // assistant replies
  incoming2: 6.5, // customer accepts
  typing2: { in: 8.0, out: 9.0 }, // assistant composing again
  slots: 9.0, // booking card slides up
  booked: 11.0, // slot confirms — tick + green
  fadeOut: 15.0, // conversation clears, ready to restart at TOTAL
} as const;

const RISE = 0.3; // entrance duration
const FADE = 0.25; // cross-fade duration
const LIFT = 8; // px a bubble rises on entry
const CARD_LIFT = 20; // px the booking card slides up

/* -------------------------------------------------------------------------
   KEYFRAME GENERATION
   ------------------------------------------------------------------------- */

/** Seconds → a keyframe offset, clamped so a late cue can never wrap past 100%. */
const at = (s: number) => `${Math.min(100, (s / TOTAL) * 100).toFixed(3)}%`;

/** Hidden until `t`, then rises `dy`px into place and stays. */
const rise = (name: string, t: number, dy = LIFT) => `
@keyframes ${name} {
  0%, ${at(t)} { opacity: 0; transform: translateY(${dy}px); animation-timing-function: ease-out; }
  ${at(t + RISE)}, 100% { opacity: 1; transform: translateY(0); }
}`;

/** Hidden, visible between `on` and `off`, hidden again. */
const flash = (name: string, on: number, off: number) => `
@keyframes ${name} {
  0%, ${at(on)} { opacity: 0; }
  ${at(on + FADE)}, ${at(off)} { opacity: 1; }
  ${at(off + FADE)}, 100% { opacity: 0; }
}`;

/** Hidden until `t`, then fades in and stays. */
const appear = (name: string, t: number) => `
@keyframes ${name} {
  0%, ${at(t)} { opacity: 0; }
  ${at(t + FADE)}, 100% { opacity: 1; }
}`;

/** Hidden until `t`, then a small scale-in. Used once, for the tick. */
const pop = (name: string, t: number) => `
@keyframes ${name} {
  0%, ${at(t)} { opacity: 0; transform: scale(0.4); animation-timing-function: ease-out; }
  ${at(t + 0.18)} { opacity: 1; transform: scale(1.08); }
  ${at(t + 0.32)}, 100% { opacity: 1; transform: scale(1); }
}`;

/** Visible, then fades away at `t` — the loop reset. */
const clear = (name: string, t: number) => `
@keyframes ${name} {
  0%, ${at(t)} { opacity: 1; }
  100% { opacity: 0; }
}`;

const KEYFRAMES = [
  rise("cd-in1", CUE.incoming1),
  flash("cd-unread", CUE.incoming1, CUE.reply),
  flash("cd-typing1", CUE.typing1.in, CUE.typing1.out),
  rise("cd-reply", CUE.reply),
  rise("cd-in2", CUE.incoming2),
  flash("cd-typing2", CUE.typing2.in, CUE.typing2.out),
  rise("cd-card", CUE.slots, CARD_LIFT),
  appear("cd-booked", CUE.booked),
  pop("cd-tick", CUE.booked),
  clear("cd-clear", CUE.fadeOut),
  /* Independent of the timeline — a slow pulse, so it never needs to sync. */
  `
@keyframes cd-dot {
  0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
  30% { opacity: 1; transform: translateY(-3px); }
}`,
  `
.cd-anim { animation-duration: ${TOTAL}s; animation-iteration-count: infinite; animation-fill-mode: both; }
.cd-paused .cd-anim, .cd-paused .cd-dot { animation-play-state: paused; }`,
  /* Motion off → every element falls back to its base style, which is the
     finished conversation. Nothing is hidden and nothing moves. */
  `
@media (prefers-reduced-motion: reduce) {
  .cd-anim, .cd-dot { animation: none !important; }
}`,
].join("\n");

/* -------------------------------------------------------------------------
   PIECES
   ------------------------------------------------------------------------- */

/** Three pulsing dots in a bubble. Positioned by the caller. */
function Typing({ animation }: { animation: string }) {
  return (
    <span
      className="cd-anim absolute top-0 right-0 inline-flex items-center gap-1.5 rounded-[14px] rounded-tr-[4px] bg-[#D9FDD3] px-3.5 py-3"
      style={{ animationName: animation, opacity: 0 }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="cd-dot block h-[7px] w-[7px] rounded-full bg-[#5C6A62]"
          style={{
            animation: "cd-dot 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.16}s`,
          }}
        />
      ))}
    </span>
  );
}

function Bubble({
  children,
  from,
  animation,
  tag,
}: {
  children: string;
  from: "them" | "us";
  animation: string;
  tag?: string;
}) {
  const them = from === "them";
  return (
    <div className={them ? "flex" : "flex justify-end"}>
      <div
        className={`cd-anim max-w-[82%] rounded-[14px] px-3.5 py-2.5 text-[14px] leading-[1.45] text-[#1F2A24] md:text-[15px] ${
          them
            ? "rounded-tl-[4px] border border-[#E1DFD6] bg-white"
            : "rounded-tr-[4px] bg-[#D9FDD3]"
        }`}
        style={{ animationName: animation }}
      >
        {tag && (
          <span className="mb-1 block text-[10px] font-extrabold tracking-[0.12em] text-[#0E7C5A] uppercase">
            {tag}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

const Tick = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m5 12.5 4.6 4.5L19 7.5" />
  </svg>
);

/* -------------------------------------------------------------------------
   COMPONENT
   ------------------------------------------------------------------------- */

export function ChatDemo() {
  const root = useRef<HTMLDivElement>(null);
  /* Starts paused, so the sequence begins at zero the first time it is seen
     rather than part-way through. */
  const [onShow, setOnShow] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setOnShow(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />

      {/* The animation carries no information a screen reader can use. */}
      <p className="sr-only">{chatDemo.alt}</p>

      <div
        ref={root}
        aria-hidden="true"
        className={`mx-auto w-full max-w-[390px] overflow-hidden rounded-[20px] bg-white shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45)] ${
          onShow ? "" : "cd-paused"
        }`}
      >
        {/* ---------------- Header ---------------- */}
        <div className="flex items-center gap-3 border-b border-[#E1DFD6] bg-white px-4 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E4E6E0] text-[13px] font-extrabold text-[#123526]">
            {chatDemo.contact.charAt(0)}
          </span>

          <span className="min-w-0 flex-1">
            <span className="block truncate text-[14px] leading-tight font-bold text-[#1F2A24]">
              {chatDemo.contact}
            </span>
            <span className="mt-0.5 flex items-center gap-1.5">
              <WhatsAppMark className="h-3.5 w-3.5 shrink-0" />
              <span className="text-[11px] leading-none text-[#5C6A62]">
                {chatDemo.channel}
              </span>
            </span>
          </span>

          {/* Unread badge — pops on arrival, clears once the assistant replies */}
          {/* WhatsApp's own badge green (#25D366) puts white text at 1.98:1 —
              authentic, but the digit is unreadable at this size. Deepened. */}
          <span
            className="cd-anim flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#15803D] px-1.5 text-[11px] font-extrabold text-white"
            style={{ animationName: "cd-unread", opacity: 0 }}
          >
            1
          </span>
        </div>

        {/* ---------------- Conversation ---------------- */}
        {/* The conversation is in NORMAL FLOW, so the frame grows to whatever
            the copy needs — at 320px the Tanglish reply wraps to three lines
            and a fixed height would clip it. Height is still constant across
            the loop, because every bubble occupies its space from the start
            and only its opacity animates. min-h just guarantees the booking
            card has somewhere to sit. */}
        <div className="relative bg-[#F4F2EC]">
          <div
            className="cd-anim relative flex min-h-[248px] flex-col gap-2.5 p-3"
            style={{ animationName: "cd-clear" }}
          >
            <Bubble from="them" animation="cd-in1">
              {chatDemo.incoming1}
            </Bubble>

            {/* The assistant composes in the slot its reply will occupy */}
            <div className="relative">
              <Bubble from="us" animation="cd-reply" tag={chatDemo.aiTag}>
                {chatDemo.reply}
              </Bubble>
              <Typing animation="cd-typing1" />
            </div>

            <Bubble from="them" animation="cd-in2">
              {chatDemo.incoming2}
            </Bubble>

            {/* ---------------- Booking card ----------------
                It ARRIVES AS A MESSAGE, in the slot the assistant was typing
                in — it does not float over the thread. As an overlay it sat on
                top of "Yes pannunga" and hid the customer agreeing, which is
                the beat the whole sequence is building to. In flow, every
                message stays on screen. */}
            <div className="relative">
              <div
                className="cd-anim ml-auto w-[94%] max-w-[320px] rounded-[16px] rounded-tr-[4px] border border-[#E1DFD6] bg-white p-3.5 shadow-[0_12px_28px_-10px_rgba(18,53,38,0.35)]"
                style={{ animationName: "cd-card" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[13px] font-extrabold text-[#1F2A24]">
                    {chatDemo.slotsTitle}
                  </span>

                  <span
                    className="cd-anim inline-flex items-center gap-1.5 rounded-full bg-[#E7F7EE] px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-[#15803D] uppercase"
                    style={{ animationName: "cd-booked" }}
                  >
                    <Tick className="h-3 w-3" />
                    {chatDemo.bookedLabel}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {chatDemo.slots.map((slot) => {
                    const picked = slot === chatDemo.picked;
                    return (
                      <span
                        key={slot}
                        className={`relative overflow-hidden rounded-full px-3 py-1.5 text-[12px] font-bold ${
                          picked
                            ? "bg-[#123526] text-white"
                            : "border border-[#E1DFD6] bg-white text-[#5C6A62]"
                        }`}
                      >
                        {/* Green wash confirms the booking, over the navy fill */}
                        {picked && (
                          <span
                            aria-hidden="true"
                            className="cd-anim absolute inset-0 bg-[#15803D]"
                            style={{ animationName: "cd-booked" }}
                          />
                        )}
                        <span className="relative flex items-center gap-1.5">
                          {slot}
                          {picked && (
                            <span
                              className="cd-anim inline-flex"
                              style={{ animationName: "cd-tick" }}
                            >
                              <Tick className="h-3 w-3" />
                            </span>
                          )}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Composing indicator sits in the card's own slot, top-right */}
              <Typing animation="cd-typing2" />
            </div>
          </div>
        </div>

        {/* ---------------- Input bar (static chrome) ---------------- */}
        <div className="flex items-center gap-2 border-t border-[#E1DFD6] bg-white px-3 py-2.5">
          <span className="flex-1 rounded-full bg-[#F4F2EC] px-3.5 py-2 text-[12px] text-[#5C6A62]">
            {chatDemo.inputPlaceholder}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-4 w-4 text-white"
            >
              <path d="M3.2 20.4 21 12 3.2 3.6l.1 6.6L15 12l-11.7 1.8z" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
