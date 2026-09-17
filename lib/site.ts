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

  /** Anchor the Book a Demo CTAs scroll to. */
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
