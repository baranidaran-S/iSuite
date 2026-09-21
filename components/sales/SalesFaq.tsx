"use client";

import { useState } from "react";
import { SalesHeading } from "@/components/sales/SalesHeading";
import { salesFaq } from "@/lib/content";

/* ==========================================================================
   BLOCK 13 — the objections
   --------------------------------------------------------------------------
   On a sales page the FAQ is the last place a hesitant reader goes before
   leaving, so every entry is something that would actually stop someone,
   ordered by how much. The WhatsApp ban question goes first: it is the
   biggest fear any Indian business has about automating a number it already
   lives on.

   Buttons with aria-expanded rather than <details>, because only one panel
   may be open at a time. Animated on grid-template-rows so it collapses
   cleanly under prefers-reduced-motion and works with answers of any length.

   The open row's question turns amber — on a page where amber means "this is
   the thing", that is the cheapest possible open state.
   ========================================================================== */

export function SalesFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-night px-5 py-10 md:py-14">
      <div className="mx-auto max-w-[820px]">
        <div className="text-center">
          <SalesHeading text={salesFaq.heading} accent={salesFaq.accent} />
        </div>

        <div className="mt-8 flex flex-col gap-2.5 md:mt-10">
          {salesFaq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-[14px] border bg-night-card transition-colors duration-150 ${
                  isOpen ? "border-amber/40" : "border-white/10"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`sfaq-${i}`}
                    id={`sfaq-t-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-amber md:px-6"
                  >
                    <span
                      className={`text-[16.5px] leading-snug font-extrabold transition-colors duration-150 md:text-[18px] ${
                        isOpen ? "text-amber" : "text-white"
                      }`}
                    >
                      {item.q}
                    </span>

                    {/* A plus that becomes a minus. Cheaper to read at a
                        glance than a rotating chevron. */}
                    <span
                      aria-hidden="true"
                      className={`relative h-5 w-5 shrink-0 ${isOpen ? "text-amber" : "text-night-muted"}`}
                    >
                      <span className="absolute top-1/2 left-0 h-[2.5px] w-5 -translate-y-1/2 rounded-full bg-current" />
                      <span
                        className={`absolute top-0 left-1/2 h-5 w-[2.5px] -translate-x-1/2 rounded-full bg-current transition-transform duration-200 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={`sfaq-${i}`}
                  role="region"
                  aria-labelledby={`sfaq-t-${i}`}
                  className="grid transition-[grid-template-rows] duration-200 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 text-[14.5px] leading-relaxed text-night-muted md:px-6 md:text-[15.5px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
