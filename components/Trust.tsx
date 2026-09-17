"use client";

import { useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { trust } from "@/lib/content";

/* ==========================================================================
   TRUST / TRANSPARENCY — build spec §7.9
   --------------------------------------------------------------------------
   Two tabs over a list of short statements, built to the approved reference.

   WHY TABS HERE. This section was two grey sentences centred in white space,
   and it was being skipped — even though it answers the two questions a
   hesitant visitor actually has: "will this replace my team?" and "what will
   it cost me?". The tabs make the second half, WHAT IT DOESN'T DO, a
   deliberate thing to click rather than fine print.

   The statements are NOT an accordion. Each is one line, so a chevron only
   put a click between the visitor and the reassurance. They are set large
   because this is the copy that has to land.

   That half is the point. This page has no ratings, client counts or
   guarantees to lean on, so saying plainly what the product will not do is
   the strongest trust signal available — and it costs nothing, because the
   requirements doc already forbids claiming any of it.

   The requirements doc forbids publishing fixed pricing, fake statistics,
   guaranteed results, fake logos or unapproved testimonials here. This
   section deliberately carries none of those: the three steps below describe
   the process and name no figure, and the required pricing sentence is
   printed verbatim underneath.
   ========================================================================== */

/* A tick and a cross, so the two tabs read differently even at a glance.
   These replaced the numbers: 1-4 implies an order, and this is a set. */
const mark = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "h-[18px] w-[18px] md:h-5 md:w-5",
};

const Tick = () => (
  <svg {...mark}>
    <path d="m5 12.5 4.6 4.5L19 7.5" />
  </svg>
);

const Cross = () => (
  <svg {...mark}>
    <path d="M6.5 6.5 17.5 17.5" />
    <path d="M17.5 6.5 6.5 17.5" />
  </svg>
);

/*
 * Unlike the other sections, the accent here is NOT a prefix — the swipe
 * belongs under "Stays in Charge", which is the part that reassures.
 */
function Heading() {
  const { heading, headingAccent } = trust;
  const i = heading.indexOf(headingAccent);
  if (i === -1) return <>{heading}</>;
  return (
    <>
      {heading.slice(0, i)}
      <span className="hilite">{headingAccent}</span>
      {heading.slice(i + headingAccent.length)}
    </>
  );
}

export function Trust() {
  const [tab, setTab] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  /* Arrow keys move between tabs, as the ARIA tabs pattern requires — the
     buttons alone would only be reachable with Tab. */
  const onTabKey = (e: React.KeyboardEvent) => {
    const last = trust.tabs.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = tab === last ? 0 : tab + 1;
    if (e.key === "ArrowLeft") next = tab === 0 ? last : tab - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  const active = trust.tabs[tab];
  const isDoes = active.id === "does";

  return (
    <Section bg="white" className="relative overflow-hidden">
      {/* THE WORDMARK, OVERSIZED, BEHIND THE SECTION.

          The same move as the Meta mark on the ads section, turned on our own
          name — this is the section about who stays in charge, so the brand
          standing behind it is the point.

          Sized against the SCREEN, not the 1200px shell. "iSuite AI" sets
          about 3.3x its own font size wide, so 24vw lands it at roughly 80vw
          — wide enough to read as the ground the section stands on, with the
          margins still breathing either side. It ran edge to edge at 30vw and
          that was too much presence for a watermark. The 530px only binds
          past about 2200px, where it would otherwise outgrow the section.

          STRENGTH IS CAPPED BY CONTRAST, NOT BY TASTE. At full strength
          #CFE6DB puts the slate lead paragraph at 4.27:1 — a FAIL. 70% was
          the ceiling at 4.67:1, and it read as a second layer of content
          rather than a background. 40% measures 5.06:1 and sits back where a
          watermark belongs. It cannot go far above that without the two
          slate paragraphs failing AA again. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[min(24vw,530px)] leading-none font-extrabold tracking-tighter whitespace-nowrap text-emerald-tint/40 select-none"
      >
        iSuite AI
      </span>

      <Reveal className="relative z-10">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="balance text-[32px] leading-[1.12] font-extrabold tracking-tight text-forest md:text-[46px] lg:text-[54px]">
            <Heading />
          </h2>
          <p className="balance mx-auto mt-5 max-w-[680px] text-[17px] leading-relaxed text-slate md:text-xl">
            {trust.body}
          </p>
        </div>
      </Reveal>

      <Reveal delay={100} className="relative z-10">
        <div className="mx-auto mt-10 max-w-[1000px] md:mt-12">
          {/* ---------------- Tabs ---------------- */}
          <div
            role="tablist"
            aria-label="What iSuite AI does and does not do"
            onKeyDown={onTabKey}
            className="grid grid-cols-2 overflow-hidden rounded-[18px] border-2 border-primary"
          >
            {trust.tabs.map((t, i) => {
              const on = i === tab;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`trust-tab-${t.id}`}
                  aria-selected={on}
                  aria-controls={`trust-panel-${t.id}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setTab(i)}
                  className={`min-h-16 px-4 py-4 text-[16px] leading-snug font-extrabold transition-colors duration-150 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-forest md:min-h-[72px] md:text-[21px] ${
                    on ? "bg-primary text-white" : "bg-white text-primary"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* ---------------- Points ---------------- */}
          {/* A plain list, not an accordion. Each line is short enough to be
              read at a glance, so hiding it behind a chevron only added a
              click between the visitor and the reassurance. */}
          <ul
            role="tabpanel"
            id={`trust-panel-${active.id}`}
            aria-labelledby={`trust-tab-${active.id}`}
            className="mt-8 grid gap-x-10 md:grid-cols-2"
          >
            {active.items.map((item) => (
              <li
                key={`${active.id}-${item.title}`}
                className="flex items-start gap-4 border-b border-line py-5 md:gap-5 md:py-6"
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full md:h-10 md:w-10 ${
                    isDoes
                      ? "bg-emerald-tint text-emerald"
                      : "bg-copper-tint text-copper"
                  }`}
                >
                  {isDoes ? <Tick /> : <Cross />}
                </span>
                <span className="text-[18px] leading-snug font-bold text-forest md:text-[23px]">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Required wording. Printed verbatim, never replaced by a figure.
          It sat in a boxed three-step strip, which read as a panel of
          small print rather than an answer — plain text under the points
          carries it better. */}
      <Reveal delay={160} className="relative z-10">
        <p className="mx-auto mt-10 max-w-[680px] text-center text-[15px] leading-relaxed text-slate md:mt-12 md:text-[17px]">
          {trust.pricing}
        </p>
      </Reveal>
    </Section>
  );
}
