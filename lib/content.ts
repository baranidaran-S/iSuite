/* ==========================================================================
   PAGE COPY — single source of truth
   --------------------------------------------------------------------------
   Every visible string on the landing page lives in this file, so the product
   owner can review and edit wording without touching any component code.

   Copy marked [SPEC] is verbatim from iSuite-AI-Landing-Page-Build-Spec.md §7.
   Copy marked [REQ]  is verbatim from iSuite-AI-Landing-Page-Requirements.md,
                      used where the build spec specifies a section's layout but
                      not its wording.
   Copy marked [DRAFT — NEEDS APPROVAL] was in neither document and was written
                      here. It must be signed off before launch.

   Claims policy (requirements doc §15 / §17) — never introduce:
     - fixed pricing, fake statistics or invented metrics
     - guaranteed leads, ROAS, sales results or Meta approval
     - any claim that iSuite AI replaces the sales team
   ========================================================================== */

/* --- The single primary CTA, repeated across the page. Never reword. ------ */
export const cta = {
  primary: "Book a Demo",
  secondary: "See How It Works",
} as const;

/* --- §7.1 Hero — DARK ANCHOR --------------------------------------------- */
export const hero = {
  // [SPEC]
  headline: "Turn Every Enquiry Into a Clear Sales Journey.",
  // [SPEC]
  subhead:
    "iSuite AI brings WhatsApp, Instagram, Facebook, website and Meta ad enquiries into one system — with an AI sales assistant that responds, qualifies, books appointments and follows up.",
} as const;

/* --- §7.2 Proof Strip ----------------------------------------------------- */
/*
 * [CLIENT-SUPPLIED] Replaces the build spec's §7.2 sentence, broken into
 * individual business types so the strip can run them as a ticker.
 * NOTE: this audience differs from `leadForm.businessTypeOptions`, which
 * lists showrooms, clinics, salons and studios. RAISED AND KEPT — the two
 * lists stay as they are by decision, so do not "fix" one to match the other.
 */
// NOT RENDERED from Phase 1 of the ads redesign onward. A "Built for"
// marquee that proved nothing, and whose audience (IT companies, consulting
// firms, agencies) contradicted `leadForm.businessTypeOptions`. That conflict
// was raised and kept on purpose for a while; the trim settled it in the
// form's favour. Kept here, and ProofStrip.tsx kept in components/, in case
// the list is wanted for the Business Types section when it returns.
export const proofStrip = {
  label: "Built for",
  items: [
    { icon: "code", label: "IT Companies" },
    { icon: "consultant", label: "Consulting Firms" },
    { icon: "agency", label: "Agencies" },
    { icon: "service", label: "Professional Services" },
    { icon: "school", label: "Training Institutes" },
    { icon: "team", label: "Growing Business Teams" },
  ],
} as const;

/* --- §7.3 Problem --------------------------------------------------------- */
export const problem = {
  // NOT RENDERED — the eyebrow pills were removed from every section.
  // Kept because this repo has no version control; delete once that is settled.
  eyebrow: "The Problem",
  // [SPEC]
  heading: "Stop Losing Enquiries Between Ads, Chats and Follow-ups.",
  // The opening clause of `heading`, rendered in teal. Must match exactly.
  headingAccent: "Stop Losing Enquiries",
  // [DRAFT — NEEDS APPROVAL] one short bridging line, deliberately kept to a
  // single sentence so the cards below do the work.
  supporting:
    "Enquiries arrive from everywhere. Without one system, they slip through.",
  /*
   * [DRAFT — NEEDS APPROVAL]
   * Titles are reworked from the build spec's four bullet points; the `cost`
   * lines are written for IT companies, consulting firms, agencies and
   * professional service providers.
   *
   * Each is held to one short sentence — long enough to sting, short enough
   * to scan after an ad click. Each describes a situation, never a statistic.
   */
  /*
   * [DRAFT — NEEDS APPROVAL] copy for the fragmentation visual above the
   * cards. It is a visual metaphor, not a claim: no number, rate or outcome
   * appears in it. The channel names are factual product integrations.
   *
   * The whole band is aria-hidden — the four cards below state the same
   * thing in words, so a screen reader reading "LOST ? Who owns this?" out of
   * context would only add noise.
   */
  scatter: {
    channels: ["WhatsApp", "Instagram", "Meta Ads"],
    /*
     * Real enquiries, deliberately channel- and industry-neutral so they suit
     * IT firms, consultancies and agencies alike. Timestamps are ordinary
     * chat chrome, the same ruling as the hero mock — not metrics.
     */
    messages: [
      { text: "Hi, can you share your pricing?", time: "11:24 AM" },
      { text: "Is there a demo available?", time: "2:36 PM" },
      { text: "Interested! Tell me more.", time: "5:18 PM" },
    ],
    lostLabel: "Lost / ?",
    questions: ["Who owns this?", "Did they reply?", "Did they convert?"],
  },
  points: [
    {
      icon: "messageMissed",
      title: "Enquiries lost between inboxes",
      cost: "WhatsApp, then email, then Instagram. Three threads, no owner.",
    },
    {
      icon: "scatter",
      title: "Conversations scattered across channels",
      cost: "Your team switches apps just to answer one customer.",
    },
    {
      icon: "noPipeline",
      title: "No clear sales pipeline",
      cost: "You see the enquiries — not which ones are about to be lost.",
    },
    {
      icon: "adUntracked",
      title: "Ad spend you cannot trace",
      cost: "Meta ads bring leads in. Nothing shows what they became.",
    },
  ],
} as const;

/* --- §7.4 Solution Intro -------------------------------------------------- */
export const solution = {
  // NOT RENDERED — the eyebrow pills were removed from every section.
  // Kept because this repo has no version control; delete once that is settled.
  eyebrow: "The Solution",
  // [SPEC]
  heading: "Meet iSuite AI — Your AI Sales System.",
  /*
   * The product name, given the marker swipe. Must appear in `heading`
   * exactly. It used to be the whole clause "Meet iSuite AI —", which made
   * the brand name read as one green phrase among several on the page.
   */
  headingAccent: "iSuite AI",
  /*
   * [DRAFT — NEEDS APPROVAL]
   * The build spec asks for "two short paragraphs", but the previous version
   * ran to ~70 words and read as a wall of text. Cut to one short lead, since
   * the walkthrough video below now does the explaining.
   */
  lead: "One inbox for every channel. An AI assistant that replies, qualifies leads, books appointments and follows up. A connected pipeline that shows where every deal stands.",
  /*
   * [DRAFT — NEEDS APPROVAL] four capability tiles beside the heading.
   *
   * NOTE: the approved mockup used a robot glyph for "AI Assistant". The
   * requirements doc §6 says "Avoid generic AI robot visuals", so that tile
   * uses a speech bubble with a spark instead. Say the word to switch it.
   */
  // NOT RENDERED from Phase 1 onward. Three of these four repeated a
  // Benefits card outright - Unified Inbox / One Shared Inbox, AI Assistant /
  // AI Sales Assistance, Sales Pipeline / Clear Sales Pipeline. Saying the
  // same four things twice, sixteen lines apart, is what made this stretch of
  // the page feel like a brochure. Benefits keeps the job; this section keeps
  // the chat demo, which is the part that SHOWS rather than describes.
  // Appointments is the one idea not covered there - fold it into a Benefits
  // card's points rather than restoring the row.
  features: [
    {
      icon: "chatDots",
      title: "Unified Inbox",
      body: "All your messages in one place.",
      bg: "bg-[#F0E0D6]",
      fg: "text-[#8C4A29]",
    },
    {
      icon: "sparkReply",
      title: "AI Assistant",
      body: "Replies, qualifies and books for you.",
      bg: "bg-[#CFE6DB]",
      fg: "text-[#00603A]",
    },
    {
      icon: "calendar",
      title: "Appointments",
      body: "Auto-schedules with your team.",
      bg: "bg-[#D9E3E8]",
      fg: "text-[#2F5A6B]",
    },
    {
      icon: "bars",
      title: "Sales Pipeline",
      body: "Track and move deals to closure.",
      bg: "bg-[#F0E0D6]",
      fg: "text-[#8C4A29]",
    },
  ],
  // [DRAFT — NEEDS APPROVAL] framing for the looping chat demo
  videoSticker: "Live demo",
  /*
   * [DRAFT — NEEDS APPROVAL] floating chips around the video.
   * Each states a documented capability, never a metric.
   */
  videoChips: [
    {
      label: "Replies instantly",
      // Real WhatsApp brand mark, which carries its own green circle
      whatsapp: true,
      icon: "chatDots",
      bg: "",
      fg: "",
    },
    {
      label: "Books appointments",
      whatsapp: false,
      icon: "calendar",
      bg: "bg-[#D9E3E8]",
      fg: "text-[#2F5A6B]",
    },
    {
      label: "Tracks every deal",
      whatsapp: false,
      icon: "bars",
      bg: "bg-[#CFE6DB]",
      fg: "text-[#00603A]",
    },
  ],
} as const;

/* --- The looping chat demo inside §7.4 ------------------------------------
 * [DRAFT — NEEDS APPROVAL] every line below.
 *
 * The Tanglish is the point of the sequence — it is the single clearest
 * demonstration that the assistant answers in the customer's own language.
 * Do not translate it to English when this copy is reviewed.
 *
 * Nothing here is a metric, a count or a result. "Today" and the three time
 * slots are ordinary booking-UI chrome, not a claim about availability.
 * -------------------------------------------------------------------------- */
export const chatDemo = {
  contact: "Priya S.",
  channel: "WhatsApp",
  aiTag: "AI",
  incoming1: "Hi, appointment kidaikuma today?",
  reply:
    "Vanakkam! Innaiki 11:00 AM, 2:00 PM and 4:30 PM slot free ah iruku. Ethu book panna?",
  incoming2: "4:30 slot book panunga",
  slotsTitle: "Today",
  slots: ["11:00 AM", "2:00 PM", "4:30 PM"],
  // Must be one of `slots` — this is the one that highlights and then books.
  picked: "4:30 PM",
  bookedLabel: "Booked",
  inputPlaceholder: "Type a message…",
  /*
   * The visually-hidden alternative. The animation itself is aria-hidden, so
   * this sentence is the ONLY thing a screen reader gets — it has to carry the
   * whole sequence.
   */
  alt: "A looping demonstration of iSuite AI. A customer messages the business on WhatsApp asking whether an appointment is available today. The AI sales assistant replies in the customer's own language, offers the three free slots for the day, and books the 4:30 PM one when the customer picks it.",
} as const;

/* --- §7.5 How It Works ---------------------------------------------------- */
export const howItWorks = {
  // NOT RENDERED — the eyebrow pills were removed from every section.
  // Kept because this repo has no version control; delete once that is settled.
  eyebrow: "How It Works",
  // [DRAFT — NEEDS APPROVAL] shortened from the requirements doc heading so it
  // does not wrap to three lines on a phone.
  heading: "From First Enquiry to Closed Deal.",
  // The accent sits on the SECOND half, not the first. "to Closed Deal." is
  // the payoff — the part the whole journey is for — so it takes the colour.
  headingAccent: "to Closed Deal.",
  // [DRAFT — NEEDS APPROVAL] describes the journey; claims no result.
  lead: "iSuite AI handles the entire customer journey — from capturing the first message to booking appointments and closing deals.",
  /*
   * [SPEC] step titles, shortened to one line each.
   * [DRAFT] detail lines, held to one short sentence.
   *
   * `mock` names the mini product screen drawn for that step — see
   * components/JourneyMocks.tsx. The mocks are STRUCTURE ONLY: not one deal
   * value, count, percentage or calendar date appears in them, because the
   * requirements doc forbids fake dashboard figures and this page carries no
   * invented proof anywhere.
   *
   * WHY STEP 6 CHANGED. It used to be "Track progress", which left the
   * journey ending on a report while the heading promises a closed deal.
   * Ending on "Deal closed" pays the heading off. Reporting is not lost —
   * Core Benefits already carries "Clear Sales Pipeline" and
   * "Follow-up Visibility".
   *
   * `tint` / `deep` — NOT RENDERED. Each step used to own one of the three
   * accent families for its circle and pill. The ribbon replaced those, and a
   * six-colour ribbon would read as decoration rather than one journey. Kept
   * because this repo has no version control; delete once that is settled.
   */
  steps: [
    {
      icon: "enquiry",
      mock: "enquiry",
      title: "Customer enquiry",
      detail:
        "Enquiries arrive from your ads, WhatsApp, Instagram or your website.",
      tint: "#CFE6DB",
      deep: "#00603A",
    },
    {
      icon: "sparkReply",
      mock: "reply",
      title: "AI replies",
      detail: "An instant first reply, in the customer's own language.",
      tint: "#F0E0D6",
      deep: "#8C4A29",
    },
    {
      icon: "checklist",
      mock: "qualify",
      title: "Lead qualified",
      detail: "It asks your qualifying questions and saves every answer.",
      tint: "#D9E3E8",
      deep: "#2F5A6B",
    },
    {
      icon: "calendar",
      mock: "booking",
      title: "Appointment booked",
      detail: "Booked into your calendar, against the times you set.",
      tint: "#CFE6DB",
      deep: "#00603A",
    },
    {
      icon: "team",
      mock: "handover",
      title: "Team takes over",
      detail:
        "Your team picks it up with the whole conversation in front of them.",
      tint: "#F0E0D6",
      deep: "#8C4A29",
    },
    {
      icon: "chart",
      mock: "closed",
      title: "Deal closed",
      detail: "The deal moves to won, with its full history in one place.",
      tint: "#D9E3E8",
      deep: "#2F5A6B",
    },
  ],
  // [DRAFT — NEEDS APPROVAL] closing strip under the journey. Names no
  // figure and promises no result — it only restates what the row showed.
  footnote: "One system. A clearer sales journey.",
} as const;

/* --- §7.6 Core Benefits --------------------------------------------------- */
export const benefits = {
  // NOT RENDERED — the eyebrow pills were removed from every section.
  // Kept because this repo has no version control; delete once that is settled.
  eyebrow: "What You Get",
  heading: "One System for Every Part of the Sales Journey.",
  headingAccent: "One System",
  lead: "Six things your team gets from day one — not a feature list, just what actually changes.",
  /*
   * [SPEC] titles and `body` are the build spec's shortened benefit copy.
   * `tag` and `points` are [DRAFT — NEEDS APPROVAL], drawn from the
   * capabilities documented in requirements doc §11–§15. Every point names a
   * feature, never a number, rating or result.
   *
   * `tint` / `deep` — the same three accent families as How It Works, applied
   * the other way up. There the tint fills a circle on a dark section; here it
   * is a small tile and a tag on a navy card, so the colour arrives in a
   * different shape and the two sections cannot be mistaken for each other.
   *
   * Measured: every tint clears 10.3:1 on the navy card, and each deep clears
   * 4.8:1 on its own tint.
   */
  cards: [
    {
      icon: "inbox",
      title: "One Shared Inbox",
      tag: "Every channel",
      body: "WhatsApp, Instagram, Facebook and website chat, all in one place.",
      points: ["Shared conversations", "Team assignment", "Channel filters"],
      tint: "#CFE6DB",
      deep: "#00603A",
    },
    {
      icon: "assistant",
      title: "AI Sales Assistance",
      tag: "Always on",
      body: "Replies in the customer's language, qualifies, books and follows up.",
      points: [
        "Customer's language",
        "Qualifying questions",
        "Books appointments",
      ],
      tint: "#F0E0D6",
      deep: "#8C4A29",
    },
    {
      icon: "pipeline",
      title: "Clear Sales Pipeline",
      tag: "Every deal tracked",
      body: "Turn enquiries into contacts and deals — track every stage.",
      points: ["Contacts & deals", "Custom stages", "Deal owner"],
      tint: "#D9E3E8",
      deep: "#2F5A6B",
    },
    {
      icon: "bell",
      title: "Follow-up Visibility",
      tag: "Nothing forgotten",
      body: "Due and overdue follow-ups tracked automatically.",
      points: ["Due follow-ups", "Overdue visibility", "Owner reminders"],
      tint: "#CFE6DB",
      deep: "#00603A",
    },
    {
      icon: "megaphone",
      title: "Connected Meta Ads",
      tag: "Ads to enquiries",
      body: "Ad spend, clicks, leads and deal value in one view.",
      points: ["Meta lead ads", "Click-to-WhatsApp", "Spend & deal value"],
      tint: "#F0E0D6",
      deep: "#8C4A29",
    },
    {
      icon: "team",
      title: "Team Control",
      tag: "You stay in charge",
      body: "Roles, permissions and a full AI action history.",
      points: ["Roles & permissions", "Assignments", "AI action history"],
      tint: "#D9E3E8",
      deep: "#2F5A6B",
    },
  ],
} as const;

/* --- §7.7 Meta Ads Connection — DARK ANCHOR ------------------------------- */
export const metaAds = {
  // NOT RENDERED — the eyebrow pills were removed from every section.
  // Kept because this repo has no version control; delete once that is settled.
  eyebrow: "Meta Ads",
  // [SPEC]
  heading: "Connect Your Ads to the Enquiries They Generate.",
  // Opening clause of `heading`, given the marker swipe. Must match exactly.
  headingAccent: "Connect Your Ads",
  /*
   * [SPEC] — NOT RENDERED. This said the same three things as `points` below,
   * in prose, directly above them. Kept verbatim because it is spec copy and
   * this repo has no version control; restore it if the rows ever go.
   */
  body: "iSuite AI supports Meta lead ads and click-to-WhatsApp workflows — connecting ad performance directly to enquiries and sales progress.",
  /*
   * [DRAFT — NEEDS APPROVAL] the three capability rows beside the heading.
   * Each names a documented capability. None claims a result, a cost or a
   * volume — and none of them promises Meta approval.
   */
  points: [
    { icon: "megaphone", text: "Meta lead ads arrive in the same inbox." },
    { icon: "chatDots", text: "Click-to-WhatsApp chats land beside them." },
    { icon: "bars", text: "Spend, clicks and deal value in one view." },
  ],
  // [SPEC] — required disclaimer, 14px. Do not remove or soften.
  disclaimer:
    "Meta advertising charges and approval requirements are separate from MnT Future charges and timelines.",
} as const;

/* ---------------------------------------------------------------------------
   §7.7 SCREENSHOTS — TODO BEFORE LAUNCH

   The carousel works right now with labelled placeholders, so nothing is
   blocked. To put the real screenshots in:

     1. Save each one to /public/meta-ads/   (create the folder)
     2. Fill `src` with its path, e.g. "/meta-ads/lead-ads.png"
     3. Write a real `alt` — it is read aloud, so describe what the screen
        shows, not "screenshot 1"

   Any slot still holding an empty `src` keeps rendering its placeholder, so
   they can go in one at a time. Add or remove slots freely; the carousel and
   its dots follow the array length.

   Target 1200 × 900 (4:3), PNG or WebP. They are displayed at roughly 460px
   wide, so that is 2× for retina.

   §8 still applies to real screenshots: no invented figures on the dashboards.
   Blur or blank any real client name, phone number or spend value.
   --------------------------------------------------------------------------- */
export const metaAdsShots: Array<{
  src: string;
  alt: string;
  caption: string;
}> = [
  { src: "", alt: "", caption: "Meta lead ads in the inbox" },
  { src: "", alt: "", caption: "Click-to-WhatsApp conversations" },
  { src: "", alt: "", caption: "Campaign linked to enquiries" },
  { src: "", alt: "", caption: "Spend beside deal value" },
];

/* --- §7.8 Suitable Business Types ----------------------------------------- */
/*
 * NOT RENDERED — §7.8 was removed from the page. It answered the same
 * question as the proof strip ("is this for a business like mine?") and the
 * two disagreed: this said showrooms and salons, the strip says IT companies
 * and consulting firms. Kept verbatim because it is spec copy and this repo
 * has no version control.
 */
export const businessTypes = {
  // [REQ §16] — build spec specifies the 8 items but no section heading
  heading: "Built for Businesses That Sell Through Conversations.",
  /*
   * [DRAFT - NEEDS APPROVAL] the two headings and the `notFor` list were
   * added in Phase 3 of the ads redesign.
   *
   * WHY A "NOT FOR" HALF. This page carries no rating, no client count and
   * no testimonial, by instruction. Turning the wrong reader away is the one
   * credibility move still available to it: a page that admits who it cannot
   * help is read differently from one that claims everybody. Every strong
   * reference page we were sent does this, and it costs nothing to say.
   *
   * These three are chosen to be TRUE without shrinking the real market. The
   * tempting exclusions - "too small", "not enough enquiries" - would cut
   * straight through the audience this is advertised to, so they are not
   * here. Each one below describes a business the product genuinely does not
   * fit, because there is no conversation for it to sit in.
   */
  forHeading: "Built for",
  notForHeading: "Not built for",
  // [SPEC] — 8 icons with labels
  items: [
    { icon: "showroom", label: "Showrooms" },
    { icon: "clinic", label: "Clinics" },
    { icon: "salon", label: "Salons" },
    { icon: "studio", label: "Studios" },
    { icon: "school", label: "Schools" },
    { icon: "agency", label: "Agencies" },
    { icon: "consultant", label: "Consultants" },
    { icon: "service", label: "Service Businesses" },
  ],
  notFor: [
    "Walk-in-only businesses, where customers never message before they arrive",
    "Self-service online stores, where nobody asks a question before checkout",
    "Teams who want every single reply written by a person, with no assistant involved",
  ],
} as const;

/* --- §7.9 Trust / Transparency -------------------------------------------- */
export const trust = {
  /*
   * [DRAFT — NEEDS APPROVAL] heading.
   *
   * Was "Built to Work With Your Team, Not Instead of It." — too long, and
   * the marker swipe is inline-block so the phrase could not wrap, which
   * pushed the comma onto the start of the second line. Six plain words now,
   * and it says the reassuring thing rather than describing it.
   */
  heading: "Your Team Stays in Charge.",
  headingAccent: "Stays in Charge",
  // [REQ §17] — approved wording, kept verbatim as the section lead.
  body: "iSuite AI is designed to help your existing team handle enquiries with a clearer process, faster responses and better visibility.",

  /*
   * [DRAFT — NEEDS APPROVAL] the two tabs.
   *
   * The `doesNot` column is the important half. This page has no ratings,
   * client counts or guarantees to lean on, so stating plainly what the
   * product will NOT do is the strongest trust signal available — and it
   * costs nothing, because the requirements doc already forbids claiming any
   * of it.
   *
   * Every line describes a documented behaviour. No metric appears anywhere.
   *
   * `detail` is NOT RENDERED — the rows were an accordion and are now plain
   * statements. Kept because this repo has no version control; delete once
   * that is settled.
   */
  tabs: [
    {
      id: "does",
      label: "What it does",
      items: [
        {
          title: "Answers every enquiry, day or night",
          detail:
            "Messages from WhatsApp, Instagram, Facebook, your website and Meta ads all land in one inbox and get a reply — including outside working hours.",
        },
        {
          title: "Replies in the customer's own language",
          detail:
            "The assistant reads what the customer wrote and answers in the same language, so nobody has to switch to English to get help.",
        },
        {
          title: "Books against the times you set",
          detail:
            "It offers only the slots your team has made available, and writes the booking back so everyone can see it.",
        },
        {
          title: "Keeps a record of every AI action",
          detail:
            "Every message the assistant sends is logged against that contact, so you can see exactly what was said and when.",
        },
      ],
    },
    {
      id: "doesnt",
      label: "What it doesn’t do",
      items: [
        {
          title: "Replace your sales team",
          detail:
            "It handles the first reply and the follow-ups nobody gets round to. Your people take over the conversations that matter.",
        },
        {
          title: "Make decisions for you",
          detail:
            "It works to the rules and answers you give it. It does not invent offers, prices or commitments on your behalf.",
        },
        {
          title: "Message people who never contacted you",
          detail:
            "It replies inside conversations that customers started, on the channels you choose to connect. It is not an outbound tool.",
        },
        {
          title: "Lock you into one way of working",
          detail:
            "Your rules, pipeline stages, team assignments and connected channels can all be changed whenever you need.",
        },
      ],
    },
  ],

  /*
   * NOT RENDERED — the boxed three-step strip was removed from the page.
   * Kept because this repo has no version control; delete once that is
   * settled. The required pricing sentence below still appears, as a plain
   * line under the points.
   */
  pricingSteps: [
    "Book a demo",
    "We learn what your team needs",
    "You get a quote built around it",
  ],
  // [SPEC] — required pricing wording. Do not replace with a figure.
  pricing:
    "Pricing is based on business requirements and discussed during consultation.",
} as const;

/* --- §7.10 FAQ ------------------------------------------------------------ */
export const faq = {
  heading: "Questions Businesses Usually Ask.",
  /*
   * [DRAFT - NEEDS APPROVAL] rebuilt in Phase 3 of the ads redesign.
   *
   * The old set opened with "What is iSuite AI?" and "Does it replace my
   * sales team?". Neither is a question - the first is answered by the eight
   * sections above it, and the second is answered better by the Trust tabs,
   * which say it in four words on a button. An FAQ on an ad page is not a
   * glossary. It is the last place a hesitant reader goes before leaving, so
   * every entry here is now something that would actually stop someone.
   *
   * Ordered by how much it stops them. The WhatsApp ban question goes first
   * because it is the single biggest fear for any Indian business asked to
   * automate a number they already run their livelihood on.
   *
   * NOTHING BELOW PROMISES ANYTHING. No approval, no ban-proofing, no setup
   * time and no price. Where the honest answer is "Meta decides" or "it
   * depends", that is what it says - see the requirements doc, which forbids
   * guaranteeing Meta outcomes, and lib/content.ts trust.pricing, whose
   * wording is reused verbatim.
   *
   * NEEDS CONFIRMATION before publishing: the first answer states that the
   * connection is made through Meta's official WhatsApp Business Platform
   * rather than an unofficial tool. Everything already published implies it -
   * Meta billing the messages, Meta approving the account - but it should be
   * confirmed by someone who has done an onboarding.
   *
   * WEAKEST ANSWER HERE is the setup time. "Most businesses are live in a
   * week" would be far stronger than what is written, and it is exactly the
   * kind of number this page is not allowed to invent. If MnT Future knows
   * the real figure from real onboardings, it belongs there.
   */
  items: [
    {
      q: "Will my WhatsApp number get banned?",
      a: "iSuite AI connects through Meta's official WhatsApp Business Platform - the route Meta itself supports for businesses replying at scale - not an unofficial automation tool attached to a personal number. Your account still has to follow Meta's own rules on messaging and templates, and Meta remains the only party that decides the status of any account. We set the connection up with you so it is done the way Meta expects from the start.",
    },
    {
      q: "What if the AI says the wrong thing to a customer?",
      a: "The assistant works to the answers and rules you give it. It does not invent offers, prices or commitments on your behalf. Every message it sends is logged against that contact, so you can read exactly what was said and when - and anyone on your team can take over a conversation at any point.",
    },
    {
      q: "Can it connect WhatsApp, Instagram and Facebook?",
      a: "Yes. WhatsApp Business, Instagram DMs, Facebook and website chat can all be brought into one shared inbox, alongside enquiries from Meta lead ads and click-to-WhatsApp ads. Channel connection, and the approvals each one needs, are handled with you during onboarding.",
    },
    {
      q: "What does it cost?",
      a: "There is no fixed published price. Pricing is based on business requirements and discussed during consultation - how many channels you connect, the volume of enquiries you handle and the size of your team all change the answer. Meta's own WhatsApp charges are separate and are billed by Meta.",
    },
    {
      q: "How long does it take to set up?",
      a: "Channel connection is handled with you during onboarding. The part that depends on us is quick; the part that does not is Meta, which reviews WhatsApp Business and ad account access on its own timeline. We will give you a realistic schedule for your specific channels during the consultation rather than a number that may not hold.",
    },
    {
      q: "Are Meta WhatsApp charges included?",
      a: "No. Meta's own WhatsApp messaging charges are billed by Meta and are separate from MnT Future's charges. We will walk you through how Meta's pricing applies to your expected enquiry volume during the consultation.",
    },
    {
      q: "Is Meta approval guaranteed?",
      a: "No. WhatsApp Business and Meta ad account approvals are decided by Meta, against Meta's own requirements and timelines. We help you prepare and submit what Meta asks for, but neither approval nor how long it takes is something we can guarantee.",
    },
  ],
  moreLinkLabel: "More questions? See full FAQ",
} as const;

/* --- §7.11 Final CTA — DARK ANCHOR --------------------------------------- */
export const finalCta = {
  // [SPEC]
  heading: "Ready to Bring Your Enquiries Into One Sales System?",
  // [SPEC]
  body: "See how iSuite AI fits your enquiry handling, follow-up and sales process.",
} as const;

/* --- §7.12 Lead Form ----------------------------------------------------- */
export const leadForm = {
  // [REQ §20]
  heading: "Let's Understand Your Business.",
  // [DRAFT — NEEDS APPROVAL]
  subhead:
    "Share a few details and our team will get in touch to arrange your demo.",
  /*
   * [SPEC] listed 5 fields. Main Enquiry Channel was dropped — it is the one
   * answer a rep gets for free in the first half-minute of the call, and as a
   * REQUIRED pick-one it contradicted the Problem section directly above it
   * ("Enquiries arrive from everywhere"), where the honest answer is "all of
   * them" and no such option existed.
   *
   * `enquiryChannel` and `enquiryChannelOptions` below are NOT RENDERED, kept
   * because this repo has no version control. Restore both plus the <Field>
   * in LeadForm to bring it back.
   */
  labels: {
    fullName: "Full Name",
    whatsapp: "WhatsApp Number",
    businessName: "Business Name",
    businessType: "Business Type",
    enquiryChannel: "Main Enquiry Channel",
  },
  // NOT RENDERED — the last <select> on the form became a row of chips.
  selectPlaceholder: "Please select",
  /*
   * [DRAFT — NEEDS APPROVAL] the Business Type chips, derived from §7.8 and
   * requirements doc §3.
   *
   * These deliberately do NOT match the Proof Strip at the top of the page,
   * which says "Built for IT Companies, Consulting Firms, Agencies…". The
   * difference was raised and the list was kept as it is — leave it alone.
   *
   * Rendered as chips, not a <select>: a native select's open list is drawn
   * by the operating system and ignores this page's CSS entirely, so it could
   * never be made to match anything else in the form.
   */
  businessTypeOptions: [
    "Showroom",
    "Clinic",
    "Salon",
    "Studio",
    "School",
    "Agency",
    "Consultant",
    "Service Business",
    "Other",
  ],
  // NOT RENDERED — see the note on `labels` above.
  enquiryChannelOptions: [
    "WhatsApp",
    "Instagram",
    "Facebook Messenger",
    "Website chat",
    "Meta ads",
    "Phone calls",
    "Other",
  ],
  /*
   * [DRAFT — NEEDS APPROVAL] the date and time picker.
   *
   * NOTHING HERE IS A CONFIRMED BOOKING. The page cannot see a real calendar,
   * so this records what the visitor WANTS and the team confirms it on
   * WhatsApp — `note` says so under the picker, and the success message
   * repeats it. Never reword either into a promise of a held slot.
   *
   * THE PICKER IS CLIENT-ONLY BY NECESSITY. This page is statically
   * prerendered, so "today" worked out while rendering is baked in at BUILD
   * time and wrong the next morning. The calendar therefore fills in after
   * mount — see the header of components/DateTimePicker.tsx.
   *
   * BOTH ARE NOW REQUIRED, by decision. Flagged once and not repeated: every
   * mandatory step in front of the button costs submissions on paid traffic,
   * and these two are the only fields a visitor cannot answer off the top of
   * their head. If lead volume drops, this is the first thing to loosen.
   *
   * `closedWeekdays` uses JavaScript's numbering, 0 = Sunday. Sunday is the
   * only day closed here — change it if MnT Future works a different week.
   * `daysAhead` is how far out the calendar will go.
   */
  picker: {
    dateLabel: "Preferred Date",
    timeLabel: "Preferred Time",
    note: "We'll confirm the exact slot with you on WhatsApp.",
    pickDateFirst: "Choose a date to see the times.",
    noTimesToday: "No times left today — choose another day.",
    prevMonthLabel: "Previous month",
    nextMonthLabel: "Next month",
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    // Monday first — the working week, since these are business demos.
    weekdays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    weekdayInitials: ["M", "T", "W", "T", "F", "S", "S"],
    closedWeekdays: [0],
    daysAhead: 60,
    /*
     * Hour and minute are stored beside the label so nothing has to parse
     * "2:00 PM" back into a time to work out whether it has already passed.
     */
    times: [
      { label: "10:00 AM", hour: 10, minute: 0 },
      { label: "11:00 AM", hour: 11, minute: 0 },
      { label: "12:00 PM", hour: 12, minute: 0 },
      { label: "2:00 PM", hour: 14, minute: 0 },
      { label: "3:00 PM", hour: 15, minute: 0 },
      { label: "4:00 PM", hour: 16, minute: 0 },
      { label: "5:00 PM", hour: 17, minute: 0 },
      { label: "6:00 PM", hour: 18, minute: 0 },
    ],
  },
  /*
   * [SPEC] — NOT RENDERED. The wording from the tick box, kept verbatim
   * because it is spec copy and this repo has no version control.
   */
  consent:
    "I agree to be contacted by MnT Future regarding iSuite AI and related business solutions.",
  /*
   * [SPEC, REWORDED — NEEDS LEGAL REVIEW] replaces the tick box.
   *
   * The checkbox is gone, but consent cannot be. This states the same thing
   * as a condition of pressing the button — implied consent on submission —
   * so the wording stays on the page and in the visitor's view. It sits
   * directly under the button, not buried.
   *
   * HAVE THIS CHECKED before launch. Explicit opt-in and implied consent are
   * not equivalent everywhere, and this page feeds WhatsApp outreach off Meta
   * ads, which is exactly the case regulators look at.
   */
  consentNote:
    "By booking a demo you agree to be contacted by MnT Future regarding iSuite AI and related business solutions.",
  // [DRAFT — NEEDS APPROVAL] validation + success messaging
  errors: {
    fullName: "Please enter your full name.",
    whatsapp: "Please enter a valid WhatsApp number.",
    businessName: "Please enter your business name.",
    businessType: "Please select your business type.",
    // NOT RENDERED — see the note on `labels` above.
    enquiryChannel: "Please select your main enquiry channel.",
    preferredDate: "Please choose a preferred date.",
    preferredTime: "Please choose a preferred time.",
  },
  success: {
    heading: "Thank you — we have your details.",
    body: "Our team will review them and contact you shortly to arrange your demo.",
  },
} as const;

/* --- §7.13 Footer -------------------------------------------------------- */
export const footer = {
  // [DRAFT — NEEDS APPROVAL]
  tagline: "An AI sales system for businesses that sell through conversations.",
  privacyLabel: "Privacy & Consent",
  whatsappLabel: "WhatsApp us",
} as const;
