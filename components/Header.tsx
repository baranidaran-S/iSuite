import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cta } from "@/lib/content";
import { site } from "@/lib/site";

/* ==========================================================================
   HEADER - build spec 4
   --------------------------------------------------------------------------
   Desktop: 80px tall, white, subtle bottom border, logo left (~40px),
            CTA right.
   Mobile:  64px tall, ~28px logo, compact CTA that still clears 44x44.
   NO navigation links and NO hamburger - paid traffic gets one thing to do.

   THE WHATSAPP CIRCLE IS GONE. It sat beside the CTA on desktop, and once
   the floating button stopped being mobile-only that made WhatsApp appear
   twice on the same screen. This was the weaker of the two: the floating one
   stays in reach the whole way down the page, while this one only existed
   while the header was in view and crowded the bar the CTA needs. Same
   ruling that removed the sticky bottom CTA bar - one persistent instance
   of each action, not two.
   ========================================================================== */

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-3 md:h-20">
        <a
          href="/"
          className="flex min-h-11 min-w-0 shrink items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
          aria-label={`${site.product} home`}
        >
          <Logo />
        </a>

        {/* CTA #1 of 7 */}
        <Button href={site.formAnchor} compact>
          {cta.primary}
        </Button>
      </div>
    </header>
  );
}
