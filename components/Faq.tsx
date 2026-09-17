"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { CtaRow } from "@/components/ui/CtaRow";
import { ChevronDown } from "@/components/ui/icons";
import { faq } from "@/lib/content";

/* ==========================================================================
   FAQ — build spec §7.10
   --------------------------------------------------------------------------
   Off-white background. Closed by default, click/tap to expand, only ONE open
   at a time. 5 questions, with a link out to the full website FAQ below.

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

      <div className="mt-12 divide-y divide-line border-y border-line">
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

      <CtaRow />
    </Section>
  );
}
