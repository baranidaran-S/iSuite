import { WhatsAppGlyph } from "@/components/ui/icons";
import { footer } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

/* ==========================================================================
   FOOTER — build spec §7.13
   --------------------------------------------------------------------------
   Background #052C1E, matching the dark anchor sections.
   Text #F4F2EC / #A5BFB2.
   Company name, contact email, phone, WhatsApp link, privacy/consent link.
   NO additional navigation.

   ALIGNMENT. Every link carries min-h-11 so it clears 44px under a thumb.
   Stacked, that is a 44px row plus the gap for EACH contact — on a desktop
   the four of them ran to roughly 200px beside a 90px brand block, which is
   what made this look ragged. The target is dropped from md up, where a
   pointer does not need it, so each contact is just its own line of text.

   Privacy & Consent sits in the bottom bar opposite the copyright rather
   than on the contact stack. It is not a way to reach anyone, and moving it
   leaves three lines on each side of the top row, which is what makes the
   two columns read as a pair.

   Every contact detail here is a placeholder — see lib/site.ts.
   ========================================================================== */

const linkClass =
  "t-small inline-flex min-h-11 items-center gap-2 text-ink-muted underline-offset-4 hover:text-ink-fg hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-fg md:min-h-0";

export function Footer() {
  return (
    <footer className="grain bg-ink">
      <div className="shell py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          <div>
            <p className="text-xl font-extrabold tracking-tight text-ink-fg">
              iSuite<span className="font-medium"> AI</span>
            </p>
            <p className="t-small measure mt-2 text-ink-muted">
              {footer.tagline}
            </p>
            <p className="t-small mt-4 text-ink-muted">{site.company}</p>
          </div>

          {/* The 3px lifts the first contact's 22.5px line box into the
              middle of the brand name's 28px one, so the two columns start
              on the same line rather than a few pixels apart. */}
          <nav
            aria-label="Contact"
            className="flex flex-col gap-2 md:items-end md:gap-1.5 md:pt-[3px]"
          >
            <a href={`mailto:${site.contactEmail}`} className={linkClass}>
              {site.contactEmail}
            </a>
            <a href={site.phoneHref} className={linkClass}>
              {site.phone}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <WhatsAppGlyph className="h-4 w-4" />
              {footer.whatsappLabel}
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-ink-muted/30 pt-6 md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="t-small text-ink-muted">
            © {new Date().getFullYear()} {site.company}. All rights reserved.
          </p>

          <a href={site.privacyUrl} className={linkClass}>
            {footer.privacyLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
