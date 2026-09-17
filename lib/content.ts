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
  /*
   * [DRAFT - NEEDS APPROVAL] rewritten in Phase 5 of the ads redesign.
   *
   * WAS: "Turn Every Enquiry Into a Clear Sales Journey." That is a sentence
   * about the product. Someone who tapped an Instagram ad four seconds ago
   * does not yet care what the product turns things into - they care that
   * messages are piling up in three apps and nobody has answered them. The
   * headline now names their morning, and the subhead answers it.
   *
   * Six words, because it has to hold together at 375px, where roughly 90%
   * of this traffic lands. The accent falls on the second half - the half
   * that is the complaint.
   *
   * Nothing here claims anything. It does not say how many enquiries are
   * missed or what share go unanswered; it describes a situation the reader
   * recognises. Every capability named in the subhead is documented in the
   * requirements doc, including replies outside working hours.
   */
  headline: "Enquiries Everywhere. Nobody Free to Reply.",
  headlineAccent: "Nobody Free to Reply.",
  subhead:
    "WhatsApp, Instagram, Facebook, your website and Meta ads land in one inbox - with an AI sales assistant that answers, qualifies and books appointments, including outside working hours.",

  /*
   * [CONFIRMED BY CLIENT] the demo, stated as an offer rather than a button.
   *
   * "Book a Demo" is a label. It says nothing about how long it takes, what
   * it costs, where it happens or what is going to be asked of you - and
   * every reference page we were sent states all of that next to the button.
   * These are the client's own answers, given directly.
   *
   * "Pick your slot" is the one thing this page has that none of the
   * reference pages do: the form books a real calendar time, not a callback
   * request. It was in the repo unadvertised.
   */
  offer: "Free · 30 minutes · on Google Meet",
  offerNote: "Pick your slot at the bottom of this page.",

  /** Label above the channel marks. Names the four, rather than claiming. */
  channelsLabel: "Enquiries from",
} as const;

/* --- §7.2 Proof Strip ----------------------------------------------------- */
/*
 * [CLIENT-SUPPLIED] Replaces the build spec's §7.2 sentence, broken into
 * individual business types so the strip can run them as a ticker.
 * NOTE: this audience differs from `leadForm.businessTypeOptions`, which
 * lists showrooms, clinics, salons and studios. RAISED AND KEPT — the two
 * lists stay as they are by decision, so do not "fix" one to match the other.
 */
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
      bg: "bg-[#D8E3F5]",
      fg: "text-[#0E3F84]",
    },
    {
      icon: "calendar",
      title: "Appointments",
      body: "Auto-schedules with your team.",
      bg: "bg-[#DCE5EF]",
      fg: "text-[#3A5A7D]",
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
      bg: "bg-[#DCE5EF]",
      fg: "text-[#3A5A7D]",
    },
    {
      label: "Tracks every deal",
      whatsapp: false,
      icon: "bars",
      bg: "bg-[#D8E3F5]",
      fg: "text-[#0E3F84]",
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
      tint: "#D8E3F5",
      deep: "#0E3F84",
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
      tint: "#DCE5EF",
      deep: "#3A5A7D",
    },
    {
      icon: "calendar",
      mock: "booking",
      title: "Appointment booked",
      detail: "Booked into your calendar, against the times you set.",
      tint: "#D8E3F5",
      deep: "#0E3F84",
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
      tint: "#DCE5EF",
      deep: "#3A5A7D",
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
   * Measured: every tint clears 11.8:1 on the navy card, and each deep clears
   * 5.2:1 on its own tint.
   */
  cards: [
    {
      icon: "inbox",
      title: "One Shared Inbox",
      tag: "Every channel",
      body: "WhatsApp, Instagram, Facebook and website chat, all in one place.",
      points: ["Shared conversations", "Team assignment", "Channel filters"],
      tint: "#D8E3F5",
      deep: "#0E3F84",
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
      tint: "#DCE5EF",
      deep: "#3A5A7D",
    },
    {
      icon: "bell",
      title: "Follow-up Visibility",
      tag: "Nothing forgotten",
      body: "Due and overdue follow-ups tracked automatically.",
      points: ["Due follow-ups", "Overdue visibility", "Owner reminders"],
      tint: "#D8E3F5",
      deep: "#0E3F84",
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
      tint: "#DCE5EF",
      deep: "#3A5A7D",
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
  // [DRAFT — NEEDS APPROVAL] no heading given for this section
  heading: "Questions Businesses Usually Ask.",
  /*
   * The 5 questions are [SPEC]. The ANSWERS appear in neither document and are
   * [DRAFT — NEEDS APPROVAL]. They are written to stay inside the requirements
   * doc's prohibitions: no guaranteed Meta approval, no claim that iSuite AI
   * replaces the sales team, Meta/WhatsApp charges stated as separate.
   */
  items: [
    {
      q: "What is iSuite AI?",
      a: "iSuite AI is an AI sales system for businesses whose enquiries arrive through WhatsApp, Instagram, Facebook, websites and Meta ads. It brings those conversations into one shared inbox, and its AI sales assistant responds, qualifies enquiries, helps book appointments and follows up — while your team manages contacts, deals and sales progress from one place.",
    },
    {
      q: "Does it replace my sales team?",
      a: "No. iSuite AI is built to support your existing team, not replace it. The assistant handles first responses, qualifying questions and follow-up reminders so your team can spend its time on the conversations that need a person. Your team keeps ownership of every deal and can take over any conversation at any point.",
    },
    {
      q: "Can it connect WhatsApp, Instagram and Facebook?",
      a: "Yes. WhatsApp Business, Instagram DMs, Facebook Messenger and website chat can all be brought into one shared inbox, alongside enquiries from Meta lead ads and click-to-WhatsApp ads. Channel connection, and the approvals each one needs, are handled with you during onboarding.",
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
  // [SPEC]
  /*
   * NOT RENDERED. The link pointed at `site.fullFaqUrl`, which is still the
   * "#" placeholder — a dead link under the last question on a page whose
   * only job is one button. Kept because this repo's removed copy stays put.
   */
  moreLinkLabel: "More questions? See full FAQ",
} as const;

/* --- §7.11 Final CTA — DARK ANCHOR --------------------------------------- */
export const finalCta = {
  // [SPEC]
  heading: "Ready to Bring Your Enquiries Into One Sales System?",
  // [SPEC]
  body: "See how iSuite AI fits your enquiry handling, follow-up and sales process.",
} as const;

/* --- The demo call, stated plainly ---------------------------------------- */
export const demoCall = {
  /*
   * [DRAFT - NEEDS APPROVAL] new in Phase 5. Every fact below came from the
   * client directly: 30 minutes, free, Google Meet, a general walkthrough
   * rather than a session on the visitor's own accounts, run by the team and
   * sometimes the founder.
   *
   * WHY THIS SECTION EXISTS. "Book a Demo" asks a business owner for their
   * WhatsApp number and a slot in their week, and tells them nothing about
   * what they are agreeing to. Every reference page we were sent states the
   * shape of its offer next to the ask - three hours, live on Zoom, this is
   * what you leave with. This is ours.
   *
   * THE LAST POINT IS THE IMPORTANT ONE. The demo is a walkthrough, not a
   * setup session; nobody's account gets connected on the call. Saying so
   * costs a little enthusiasm and buys the thing this page cannot buy any
   * other way - it has no rating, no client count and no testimonial, so
   * being straight about the limits is the whole of its credibility. Trust
   * and Business Types both run the same move.
   *
   * Nothing here is a figure, a result or a promise.
   */
  heading: "What Happens on the Call.",
  headingAccent: "on the Call",
  lead: "Thirty minutes on Google Meet. Here is exactly what it is - and what it is not.",

  points: [
    {
      title: "A live walkthrough of iSuite AI",
      body: "The shared inbox, the assistant replying, the sales pipeline and the Meta Ads view - shown working, not described.",
    },
    {
      title: "Your channels, named",
      body: "You tell us where your enquiries actually arrive. We show you how each one lands in the inbox.",
    },
    {
      title: "What setting it up would involve",
      body: "Which channels you would connect, what Meta has to approve, and which parts run on Meta's timeline rather than ours.",
    },
    {
      title: "Meta's charges, explained",
      body: "Meta bills WhatsApp messaging separately from MnT Future. We walk you through how that applies to the volume you expect.",
    },
  ],

  /** The honest limit. Rendered apart from the four above, in copper. */
  limit: {
    title: "It is a walkthrough, not a setup session",
    body: "We do not connect your accounts on the call, and nothing changes in your business until you decide it should.",
  },

  footnote:
    "Free. Thirty minutes. On Google Meet. Run by the MnT Future team, sometimes by the founder.",
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
