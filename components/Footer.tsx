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

   Every contact detail here is a placeholder — see lib/site.ts.
   ========================================================================== */

const linkClass =
  "t-small inline-flex min-h-11 items-center gap-2 text-ink-muted underline-offset-4 hover:text-ink-fg hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-fg";

export function Footer() {
  return (
    <footer className="grain bg-ink">
      <div className="shell py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xl font-extrabold tracking-tight text-ink-fg">
              iSuite<span className="font-medium"> AI</span>
            </p>
            <p className="t-small measure mt-2 text-ink-muted">
              {footer.tagline}
            </p>
            <p className="t-small mt-4 text-ink-muted">{site.company}</p>
          </div>

          <nav
            aria-label="Contact"
            className="flex flex-col gap-2 md:items-end"
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
            <a href={site.privacyUrl} className={linkClass}>
              {footer.privacyLabel}
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-ink-muted/30 pt-8">
          <p className="t-small text-ink-muted">
            © {new Date().getFullYear()} {site.company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
