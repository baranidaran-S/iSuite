"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { ChevronDown } from "@/components/ui/icons";
import { faq } from "@/lib/content";

/* ==========================================================================
   FAQ — build spec §7.10
   --------------------------------------------------------------------------
   Off-white background. Closed by default, click/tap to expand, only ONE open
   at a time. 5 questions, with a link out to the full website FAQ below.

   The list sits in a bordered white card — see the note on the container.

   §2: the smooth accordion expand is one of the two sanctioned
   micro-interactions. Animated with grid-template-rows so it collapses cleanly
   under prefers-reduced-motion, and so answers of any length work.

   Built from buttons with aria-expanded / aria-controls rather than <details>,
   because only one panel may be open at a time.
   ========================================================================== */

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section bg="offwhite">
      <h2 className="t-h2 measure text-forest">{faq.heading}</h2>

      {/* A bordered card rather than the two hairlines it used to be.

          It was `border-y border-line` — a rule above the first question and
          another below the last, with nothing holding the sides. On the old
          warm oat that read as a deliberate open list. On the new pale blue
          it reads as unfinished, because the section tint and the list are
          now close enough in value that the list has no edge of its own.

          The treatment is copied from the lead form's card, not invented:
          rounded-card, border-line-strong, white fill. Two panels on one page
          that are both "a bordered box of controls" should not be drawn two
          different ways.

          The side padding is what the hairline version never needed. It also
          insets the dividers, which is what stops them running into the new
          border at each end. */}
      <div className="mt-12 divide-y divide-line rounded-card border border-line-strong bg-white px-5 md:px-7">
        {faq.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex min-h-11 w-full items-center justify-between gap-4 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                >
                  <span className="t-h3 text-forest">{item.q}</span>
                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-forest transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>

              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className="grid transition-[grid-template-rows] duration-200 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  {/* Answers stay strictly normal — never stylised (§2) */}
                  <p className="t-small measure pb-6 text-slate">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
