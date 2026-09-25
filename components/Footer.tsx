import Image from "next/image";
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

   ONE THING IN THE FOOTER IS TAPPABLE: the company name in the copyright,
   which goes to mntfuture.com at the client's request. Everything else here
   is inert on purpose.

   IT IS NOT THE LINK THAT WAS REMOVED. A "Privacy & Consent" link sat under
   the copyright and pointed at site.privacyUrl, which was never anything but
   "#" — the only tap target below the last button on the page led nowhere.
   That went, with its placeholder url and its label. This one goes to a real
   address and opens in a new tab, so the landing page and its button are
   still there behind it. See the note in site.ts.

   A PRIVACY POLICY IS STILL OWED. Meta's own rules expect a reachable
   privacy policy from an advertiser collecting enquiries, and the booking
   tool this page hands off to collects a name and a number. Nothing on THIS
   page collects anything any more, so it is not broken today — but when a
   policy exists it belongs back here, in this same centred column.
   ========================================================================== */

export function Footer() {
  return (
    <footer className="bg-night">
      <div className="shell py-12 md:py-16">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          {/* THE REAL LOCKUP, replacing a text one that spelled out iSuite AI
              in Plus Jakarta and put "MnT Future" on a third line. The supplied
              artwork already carries both — the wordmark and "Product of MnT
              Future" under it — so those two lines are the image now and the
              tagline is all that is left in text.

              SIZED BY HEIGHT, NEVER WIDTH. It is a 2.77:1 lockup, so pinning
              the width makes its height whatever the ratio decides; pinning
              the height keeps it optically level with the text under it at
              every screen size. w-auto lets the width follow.

              WHITE ARTWORK ON A DARK FOOTER. That is the only reason it works
              here with no treatment — on either light section it would be
              invisible, so this file cannot be reused there without a dark
              version.

              width/height ARE NOT THE FILE'S PIXELS, AND MUST NOT BE. Passed
              the real 2086x754, next/image reads that as the display width
              and builds a srcset up to 3840w — so a logo drawn 122px wide
              downloaded a 3840px image. These are 2x the real drawn size,
              332x120, which is the same 2.767 ratio to two decimals so the
              reserved box is still correct and w-auto still gets the right
              width. `sizes` then pins what the browser actually asks for. */}
          <Image
            src="/logo.png"
            alt={`${site.product} — product of ${site.company}`}
            width={332}
            height={120}
            sizes="(min-width: 768px) 156px, 122px"
            className="h-11 w-auto md:h-14"
          />
          <p className="t-small mt-4 text-night-muted">{footer.tagline}</p>

          {/* THE DISCLAIMER. Every reference page carries one, and for traffic
              arriving from Meta the trademark notice is standard rather than
              optional. Set small and quiet on purpose — it has to be present
              and readable, not prominent.

              NEEDS LEGAL REVIEW before this page takes any ad spend. */}
          {/* ONE PARAGRAPH, so no flex column to space two of them in. The
              Meta affiliation and trademark notice that sat above this was
              removed at the client's instruction — see the note in
              content.ts, which records what it said and why it may be worth
              having back now the hero displays Meta's marks. */}
          <p className="mt-9 w-full border-t border-white/10 pt-7 text-[11.5px] leading-relaxed text-night-muted md:mt-10 md:text-[12px]">
            {salesDisclaimer.results}
          </p>

          {/* One line under a rule now, so no flex column to stack it in.

              THE COMPANY NAME IS A LINK, and it is the only one on the page
              that is not the booking button. Three things it needs that a
              bare <a> would not have given it:

              UNDERLINE BY DEFAULT, not on hover. It is the single tappable
              thing in a footer where nothing else is, set in the same muted
              grey as the text around it; with the underline held back until
              hover, nobody on a phone — where there is no hover — would ever
              know it was there. The offset keeps it off the descenders.

              A FOCUS RING. Every other interactive element on this page has
              one, and an outline-amber on night is 8.90:1.

              AN ACCESSIBLE NAME THAT STILL CONTAINS THE VISIBLE ONE. The
              label spells out that it opens a new tab, because an
              unannounced one is disorienting on a screen reader — but it is
              "MnT Future (opens in a new tab)" and not a replacement, so
              voice control still acts on the words actually on screen. */}
          <p className="t-small mt-7 w-full border-t border-white/10 pt-6 text-night-muted">
            © {new Date().getFullYear()}{" "}
            <a
              href={site.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.company} (opens in a new tab)`}
              className="rounded-[3px] underline decoration-night-muted/45 underline-offset-[3px] transition-colors hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              {site.company}
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
