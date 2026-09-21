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
     PLACEHOLDER CLAIMS — THINGS ON THE PAGE THAT ARE NOT TRUE
     --------------------------------------------------------------------------
     The contact details above are placeholders too, but they are OBVIOUSLY
     wrong: a visitor who saw +91 00000 00000 would read it as broken, not as
     a lie.

     This block is different. These read as true to a visitor and are not.
     They were approved as stand-ins so the page has no holes while it is
     reviewed, on the explicit understanding that real values replace them
     before any ad spend points here.

     EMPTY THIS LIST BEFORE LAUNCH. Add to it any time an invented figure
     goes onto the page.
     ========================================================================== */
  PLACEHOLDER_CLAIMS: [
    {
      where: "lib/content.ts — salesFaq, 'How long does it take to set up?'",
      claim: "Setup on our side is usually done within a week",
      truth: "Unknown. Nobody has given a figure from a real onboarding.",
    },
    {
      where: "public/shots/*.png — the six product screenshots",
      claim:
        "Every figure inside them: pipeline value, deal values, ad spend, lead and won-deal counts, response times",
      truth:
        "AI-generated sample screens standing in until real ones are approved. The requirements doc forbids fake dashboard figures, so this override is the client's and must be re-confirmed. Replace the files rather than editing the numbers.",
    },
    {
      where: "lib/content.ts — salesFounder",
      claim: "Nothing yet — it renders [NEEDS NAME] on the live page",
      truth:
        "Visible placeholder text. Fine for a reviewer, embarrassing to a visitor. Fill it or remove the block before this is shown outside MnT Future.",
    },
  ],

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
