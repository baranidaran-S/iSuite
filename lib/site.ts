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

  /* ---- TODO BEFORE LAUNCH: replace every value in this block -------------- */
  contactEmail: "hello@mntfuture.com", // TODO: real contact email
  phone: "+91 00000 00000", // TODO: real phone number
  phoneHref: "tel:+910000000000", // TODO: keep in sync with `phone`
  whatsappNumber: "910000000000", // TODO: real WhatsApp number, digits only, with country code
  privacyUrl: "#", // TODO: published privacy policy URL
  fullFaqUrl: "#", // TODO: main website FAQ URL
  /* ------------------------------------------------------------------------ */

  /* ==========================================================================
     PLACEHOLDER CLAIMS - INVENTED FIGURES CURRENTLY PUBLISHED ON THE PAGE
     --------------------------------------------------------------------------
     Everything above this block is a placeholder CONTACT DETAIL: wrong, but
     obviously wrong, and harmless if it slipped out.

     This block is different. These are statements of fact presented to a
     customer that are NOT TRUE. They were approved as stand-ins so the page
     has no holes in it, on the explicit understanding that real values
     replace them before any ad spend points at this page. Nothing here is
     visibly a placeholder to a visitor, which is exactly why it is listed.

     Add to this list any time an invented figure goes onto the page. Empty
     it before launch.
     ========================================================================== */
  PLACEHOLDER_CLAIMS: [
    {
      where: "components/JourneyMocks.tsx - the six How It Works cards",
      claim:
        "Priya S., her saved budget of Rs 25,000-50,000, and the Rs 42,000 deal value",
      truth:
        "Invented sample data. Approved by the client so the product screens stop looking empty. It is written to read as ONE record rather than a result - no totals, no averages, no rates - but it is still not real, and the requirements doc forbids fake dashboard figures, so this override is the client's and should be re-confirmed before launch.",
    },
    {
      where: "lib/content.ts - faq, 'How long does it take to set up?'",
      claim: "Setup on our side is usually done within a week",
      truth: "Unknown. Nobody has given a figure from a real onboarding.",
    },
  ],

  /** Anchor every Book a Demo CTA scrolls to. The form sits at the foot. */
  formAnchor: "#demo-form",
  /** Anchor the Hero's secondary "See How It Works" CTA scrolls to. */
  howItWorksAnchor: "#how-it-works",
} as const;

/**
 * TODO BEFORE LAUNCH — the lead form is intentionally NOT connected yet.
 *
 * While this is an empty string the form validates, shows its success state and
 * logs a warning, but sends the lead nowhere. Set it to your destination
 * (webhook, CRM endpoint, or a Next.js route handler) to switch delivery on.
 */
export const LEAD_ENDPOINT = "";

/** Pre-filled WhatsApp deep link used by the footer + mobile floating button. */
export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hi, I would like to know more about iSuite AI.",
)}`;
