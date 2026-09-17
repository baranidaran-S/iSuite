import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ==========================================================================
   BUTTON — build spec §6, restyled to the approved reference
   --------------------------------------------------------------------------
   Changes from the original spec, taken from the reference screenshot:
     - fully rounded pill instead of an 8px radius
     - primary gradient fill instead of a flat primary
     - trailing arrow on the primary CTA

   Unchanged from §6: 56px desktop / 48px mobile height, 32px horizontal
   padding, 600 text, 44px minimum tap target, and the rule that this is the
   only element on the page allowed to use the primary as a fill.

   On dark sections it INVERTS - cream fill, primary text - because the
   primary #023380 is itself dark. See .btn-pill-invert in globals.css.
   ========================================================================== */

type BaseProps = {
  variant?: "primary" | "secondary";
  /** Set on dark sections — drives the focus ring and the secondary colour. */
  onDark?: boolean;
  fullWidth?: boolean;
  /** Sticky mobile bar is 56px on mobile rather than 48px (§6). */
  tall?: boolean;
  /**
   * Header variant (§4): "CTA button: smaller version, still tappable
   * (min 44x44px)" on mobile, full 56px on desktop.
   */
  compact?: boolean;
  /** Trailing arrow, as the reference shows on the primary CTA. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type Props =
  | (BaseProps & { href: string } & Omit<
        ComponentPropsWithoutRef<"a">,
        "className" | "children" | "href"
      >)
  | (BaseProps & { href?: never } & Omit<
        ComponentPropsWithoutRef<"button">,
        "className" | "children"
      >);

const Arrow = () => (
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
    <path d="M4.5 12h14" />
    <path d="m13 6.5 5.5 5.5-5.5 5.5" />
  </svg>
);

export function Button({
  variant = "primary",
  onDark = false,
  fullWidth = false,
  tall = false,
  compact = false,
  arrow = false,
  className,
  children,
  ...rest
}: Props) {
  const focusRing = cn(
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    onDark ? "focus-visible:outline-ink-fg" : "focus-visible:outline-forest",
  );

  const classes =
    variant === "primary"
      ? cn(
          "btn-pill group inline-flex items-center justify-center gap-2 rounded-full",
          // Sizes are mutually exclusive branches, never overlapping classes,
          // so a caller's className can't silently lose a Tailwind conflict.
          compact
            ? "h-11 px-4 min-[380px]:px-6 md:h-14 md:px-8"
            : tall
              ? "h-14 px-8"
              : "h-12 px-8 md:h-14",
          "min-w-11",
          "text-base md:text-lg font-semibold leading-none",
          /*
           * INVERTED on dark sections. The primary is a dark colour, so a
           * green fill on the deep-forest hero is 2.68:1 against its own
           * background - under the 3:1 a UI component needs. Flipped it is
           * 13.5:1, and #023380 is still the only button colour on the page.
           */
          onDark
            ? "btn-pill-invert shadow-lg shadow-black/25"
            : "text-white shadow-lg shadow-primary/30",
          "transition duration-200 ease-out",
          "hover:-translate-y-0.5 active:translate-y-0",
          "motion-reduce:hover:translate-y-0",
          focusRing,
          fullWidth && "w-full",
          className,
        )
      : cn(
          "inline-flex min-h-11 items-center gap-2 px-2",
          "text-base font-semibold leading-none",
          onDark ? "text-ink-fg" : "text-forest",
          "underline-offset-4 hover:underline",
          focusRing,
          fullWidth && "w-full justify-center",
          className,
        );

  const content = (
    <>
      {children}
      {arrow && variant === "primary" && (
        <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
          <Arrow />
        </span>
      )}
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {content}
      </a>
    );
  }

  const buttonProps = rest as ComponentPropsWithoutRef<"button">;
  return (
    <button
      className={classes}
      type={buttonProps.type ?? "button"}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
