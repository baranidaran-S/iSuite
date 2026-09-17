import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ==========================================================================
   SECTION — build spec §3
   --------------------------------------------------------------------------
   Light sections alternate between white and off-white so adjacent sections
   separate themselves without needing borders or dividers. The `ink` variant
   is reserved for the three dark "anchor" moments only: Hero, Meta Ads
   Connection and Final CTA (plus the Footer, §7.13).
   ========================================================================== */

type Background = "white" | "offwhite" | "ink";

const backgrounds: Record<Background, string> = {
  white: "bg-white text-charcoal",
  offwhite: "bg-offwhite text-charcoal",
  ink: "bg-ink text-ink-fg",
};

type Props = {
  bg: Background;
  id?: string;
  /** Off for sections with their own vertical rhythm (Hero, Proof Strip). */
  padded?: boolean;
  /** Extra classes on the <section> element. */
  className?: string;
  /** Extra classes on the inner 1200px container. */
  innerClassName?: string;
  children: ReactNode;
};

export function Section({
  bg,
  id,
  padded = true,
  className,
  innerClassName,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={cn(backgrounds[bg], padded && "section", className)}
    >
      <div className={cn("shell", innerClassName)}>{children}</div>
    </section>
  );
}
