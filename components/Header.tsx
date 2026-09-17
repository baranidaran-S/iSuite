import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppGlyph } from "@/components/ui/icons";
import { cta, footer } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

/* ==========================================================================
   HEADER - build spec 4
   --------------------------------------------------------------------------
   Desktop: 80px tall, white, subtle bottom border, logo left (~40px),
            CTA right, plus the circular WhatsApp button from the reference.
   Mobile:  64px tall, ~28px logo, compact CTA that still clears 44x44.
            The WhatsApp circle is dropped below 640px - there simply is not
            room for it beside the logo and CTA on a 375px screen, and the
            floating WhatsApp button covers that need on mobile anyway.
   NO navigation links and NO hamburger - paid traffic gets one thing to do.
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

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          {/* CTA #1 of 7 */}
          <Button href={site.formAnchor} compact>
            {cta.primary}
          </Button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={footer.whatsappLabel}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-harbour transition hover:bg-offwhite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:flex md:h-14 md:w-14"
          >
            <WhatsAppGlyph className="h-5 w-5 md:h-6 md:w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
