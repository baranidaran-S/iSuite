/* ==========================================================================
   SITE-WIDE DETAILS
   --------------------------------------------------------------------------
   Everything in the TODO block below is a PLACEHOLDER. The requirements docs
   list these under "Information Needed Before Final Launch" — they must be
   replaced with real values before this page goes live.
   ========================================================================== */

export const site = {
  company: "MnT Future",
  product: "iSuite AI",

  /* ---- TODO BEFORE LAUNCH ------------------------------------------------
     The email, phone number and WhatsApp number that used to sit here went
     with the footer's contact column: the page has one action now, and it is
     the button. `fullFaqUrl` went with the old FAQ's "see all questions"
     link. None of them is referenced anywhere any more, and a placeholder
     nobody reads is how a placeholder reaches production.

     privacyUrl has now gone the same way. It was "#" from the first commit
     and the footer's "Privacy & Consent" link was the only thing reading it,
     so the page shipped a visible link to nowhere. Both are gone.

     Bringing any of them back means adding the value here AND the element
     that shows it, which is the point — nothing on this page is wired to a
     contact detail or a policy today. */

  /* The deployed address. NOT cosmetic, and not optional: og:image has to be
     an ABSOLUTE url, because WhatsApp and Facebook fetch it from their own
     servers, which have no idea what "/og-image.jpg" means. Next builds that
     absolute url from metadataBase in app/layout.tsx, and with no value set
     it falls back to localhost:3000 - which every crawler fails to fetch, so
     the share card renders blank exactly as it did before the image existed.

     No trailing slash: new URL() adds one, and two produce "//og-image.jpg".

     REPLACE THIS if the page moves to a custom domain. */
  siteUrl: "https://isuite-meta.vercel.app",
  /* ------------------------------------------------------------------------ */

  /* ==========================================================================
     PLACEHOLDER CLAIMS — THINGS ON THE PAGE THAT ARE NOT TRUE
     --------------------------------------------------------------------------
     bookingUrl below is a placeholder too, but it is OBVIOUSLY unfinished:
     an empty value shouts in the build log every time the page compiles.

     This block is different. These read as true to a visitor and are not.
     They were approved as stand-ins so the page has no holes while it is
     reviewed, on the explicit understanding that real values replace them
     before any ad spend points here.

     EMPTY THIS LIST BEFORE LAUNCH. Add to it any time an invented figure
     goes onto the page.

     THE SCREENSHOTS CAME OFF THIS LIST. All seven were AI-generated mocks
     carrying invented pipeline values, ad spend and response times, which
     the requirements doc forbids outright and which sat here as the client's
     own override. Every one is now a real screen from their own CRM, with
     staff names and customer numbers redacted, so the figures on the page
     are the client's actual figures and there is nothing left to disclose.

     WHICH IS A HIGHER BAR, NOT A LOWER ONE. Real numbers cannot be quietly
     adjusted to look better. If a screenshot is ever swapped for something
     retouched, it belongs back on this list the same day.
     ========================================================================== */
  PLACEHOLDER_CLAIMS: [
    {
      where: "lib/content.ts — salesFaq, 'How long does it take to set up?'",
      claim: "Setup on our side is usually done within a week",
      truth: "Unknown. Nobody has given a figure from a real onboarding.",
    },
  ],

  /* ==========================================================================
     THE BOOKING LINK — PASTE IT HERE, AND NOWHERE ELSE
     --------------------------------------------------------------------------
     Every "BOOK MY FREE DEMO" button on the page reads this one value. There
     are EIGHT of them, and they all come from components/sales/SalesCta.tsx,
     so there is exactly one string to change and no way for two buttons to
     disagree.

     This replaced the lead form. The page used to carry its own name / number
     / business-type form that scrolled into view at #demo-form and posted
     nowhere; the client's booking tool now does that job, so the form, its
     date picker and its copy were removed rather than left running alongside.

     WHILE THIS IS EMPTY THE BUTTONS GO NOWHERE. They render as normal but
     their href falls back to "#", and the build prints a warning every time.
     That is deliberate: a silent dead button on a page taking ad spend is the
     single most expensive bug this page could have.

     IT IS THEIR OWN CRM. Not Calendly or Zoho — the booking page is served
     by iSuite AI itself at crm.mntfuture.com, which matters more than it
     looks: a visitor who clicks "BOOK MY FREE DEMO" lands on the product
     being sold, and the booking they make is the same booking the chapter 3
     screenshot shows. The demo starts before the call does.

     THE PATH IS AN OPAQUE ID and there is nothing to read in it. Changing a
     character does not fail loudly — it serves someone else's booking page
     or a 404, and the only symptom is bookings quietly not arriving. Check
     it against the CRM rather than retyping it. */
  bookingUrl: "https://crm.mntfuture.com/b/abb8c76365cd45a4a5c495f33013adea",
} as const;
