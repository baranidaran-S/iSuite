import { footer, salesDisclaimer } from "@/lib/content";
import { site } from "@/lib/site";

/* ==========================================================================
   FOOTER — build spec §7.13
   --------------------------------------------------------------------------
   Background #01152F, matching the dark anchor sections.
   Text #F2F6FC / #A8BDD8.

   NO CONTACT DETAILS, AND NO NAVIGATION. It carried an email, a phone number
   and a WhatsApp link in a right-hand column, set against the brand block on
   the left. All three were placeholders — `hello@mntfuture.com` and
   `+91 00000 00000` — and a visitor reading a phone number of ten zeroes
   learns only that nobody checked the page. The client removed them.

   They cost nothing to lose. This page has ONE action, repeated eight times,
   and it is the button; a second way to make contact in the footer is a
   second ask, and on a page behind paid traffic that is a leak, not a
   courtesy. If real details are ever wanted here, they belong above the
   disclaimer in the same centred column, not in a column of their own.

   CENTRED, IN ONE COLUMN. With the contacts gone there is no second column
   for a two-column layout to balance against, and a lone brand block pinned
   left with an empty right half reads as something that failed to load. One
   centred stack at a fixed measure is the honest shape of what is left, and
   it is the same at every width, so there is no separate phone layout to
   drift.

   The measure is capped at 760px. The disclaimer is the longest text here
   and centred lines get hard to track once they run much past that; the cap
   keeps both paragraphs to a readable ragged block rather than one wide
   band of fine print.

   Privacy & Consent keeps min-h-11 so it still clears 44px under a thumb —
   it is the only thing in the footer anyone taps now.
   ========================================================================== */

const linkClass =
  "t-small inline-flex min-h-11 items-center text-night-muted underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber";

export function Footer() {
  return (
    <footer className="bg-night">
      <div className="shell py-12 md:py-16">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <p className="text-xl font-extrabold tracking-tight text-white">
            iSuite<span className="font-medium"> AI</span>
          </p>
          <p className="t-small mt-2 text-night-muted">{footer.tagline}</p>
          <p className="t-small mt-4 text-night-muted">{site.company}</p>

          {/* THE DISCLAIMER. Every reference page carries one, and for traffic
              arriving from Meta the trademark notice is standard rather than
              optional. Set small and quiet on purpose — it has to be present
              and readable, not prominent.

              NEEDS LEGAL REVIEW before this page takes any ad spend. */}
          <div className="mt-9 flex w-full flex-col gap-4 border-t border-white/10 pt-7 md:mt-10">
            <p className="text-[11.5px] leading-relaxed text-night-muted md:text-[12px]">
              {salesDisclaimer.meta}
            </p>
            <p className="text-[11.5px] leading-relaxed text-night-muted md:text-[12px]">
              {salesDisclaimer.results}
            </p>
          </div>

          <div className="mt-7 flex w-full flex-col items-center gap-1 border-t border-white/10 pt-6">
            <p className="t-small text-night-muted">
              © {new Date().getFullYear()} {site.company}. All rights reserved.
            </p>

            <a href={site.privacyUrl} className={linkClass}>
              {footer.privacyLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
