"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ==========================================================================
   REVEAL — fades and lifts content as it scrolls into view.
   --------------------------------------------------------------------------
   Purely decorative. Content is present in the DOM and readable from the
   first paint, so this never affects SEO or screen readers, and it collapses
   to a no-op under prefers-reduced-motion (see .reveal in globals.css).
   ========================================================================== */

export function Reveal({
  children,
  delay = 0,
  variant = "rise",
  className,
}: {
  children: ReactNode;
  /** Stagger, in ms, for items revealed as a group. */
  delay?: number;
  /**
   * "rise" fades and lifts (default).
   * "draw" wipes in from the left — used for connecting lines, so the line
   * grows with the sequence instead of being there before it starts.
   */
  variant?: "rise" | "draw";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(variant === "draw" ? "reveal-draw" : "reveal", className)}
    >
      {children}
    </div>
  );
}
