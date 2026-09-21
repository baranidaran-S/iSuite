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

/* ==========================================================================
   SALES PAGE — block 1 and 2
   --------------------------------------------------------------------------
   [DRAFT — NEEDS APPROVAL] Written to the structure of the reference page the
   client's senior supplied, with our content in place of its event content.

   Their block 1 is a QUESTION aimed at the reader, not a statement about the
   product — "Are you ready for the AI Era?" Ours asks the question a business
   owner has already asked themselves this week.

   Their block 2 is the offer, stated in full immediately: price, what it is,
   and the button. Ours is the demo, stated the same way — the client's own
   answers: free, forty-five minutes, Google Meet.

   NO URGENCY. Their block 2 carries "Hurry! Limited Seats Only" and a struck
   price. We have no seat limit, no deadline and no ticket, so those lines are
   simply absent rather than faked. What replaces them is specificity — the
   channels named, the languages named, the demo bookable now.
   ========================================================================== */
/* --- The ask, worded for a sales page ------------------------------------- */
export const salesCta = {
  /*
   * [DRAFT — NEEDS APPROVAL] "Book a Demo" is a label. It describes a
   * calendar entry, not a reason.
   *
   * Every reference page words its button as the READER'S action, in the
   * reader's voice, with the thing they get in it — "Register - Don't Miss",
   * "RESERVE YOUR SPOT NOW", "Join Now For FREE", "Try it free". Not one of
   * them says "Book a Demo".
   *
   * FREE is the strongest word available to us and it is simply true. FIRST
   * PERSON — "my", not "a" — because the reader is the one doing it.
   *
   * What is NOT here: any urgency. No "don't miss", no "spot", no "now" in
   * the scarcity sense. Those pages have a seat count and a deadline; we have
   * neither, and inventing one is the line this page does not cross.
   *
   * The sub-line repeats under every button on purpose. It is the offer, and
   * a reader who has scrolled past six of these has read it six times.
   */
  label: "BOOK MY FREE DEMO",
  sub: "Free · 45 minutes · on Google Meet",
} as const;

export const salesHero = {
  /* Two-tone: `accent` is the phrase that goes amber. It must appear in
     `headline` exactly, or the split silently does nothing. */
  headline: "ARE YOUR ENQUIRIES SITTING UNREAD IN FOUR DIFFERENT APPS?",
  accent: "SITTING UNREAD",
  sub: "WhatsApp, Instagram, Facebook, your website and Meta ads land in one inbox — with an AI sales assistant that answers in Tamil, Tanglish, English or Hindi, qualifies the lead and books the appointment. Day or night.",

  /* The offer, stated in full on the first screen. Client-confirmed. */
  offer: ["Free", "45 minutes", "On Google Meet"],
  offerNote:
    "Pick your slot at the bottom of this page. No card, no commitment.",

  /* Above the headline, where the reference puts its event name. */
  eyebrow: "iSuite AI — by MnT Future",

  /* Under the product shot. Names what is on screen so the image is not
     decoration. */
  shotCaption: "One inbox. Every channel.",
} as const;

/* --- Sales page block 3 — what you will see ------------------------------- */
export const salesShowcase = {
  /*
   * [DRAFT — NEEDS APPROVAL] The reference's block 3 is a heading over four
   * images: "what you'll experience". It sets up the five chapters that
   * follow, so the reader knows the shape of what is coming before they scroll
   * into it.
   *
   * Ours names the four screens. ICONS FOR NOW, NOT EMPTY IMAGE FRAMES —
   * four blank panels waiting on screenshots would read as broken, whereas
   * four named screens read as finished and gain an image later without the
   * layout moving.
   */
  heading: "FOUR SCREENS YOUR TEAM WILL LIVE IN",
  accent: "FOUR SCREENS",
  lead: "This is the whole product. Nothing else to learn.",
  items: [
    {
      icon: "inbox",
      name: "The shared inbox",
      body: "Every channel in one list, with who is handling what.",
    },
    {
      icon: "assistant",
      name: "The AI assistant",
      body: "Reading the message, answering it, saving what it learns.",
    },
    {
      icon: "pipeline",
      name: "The sales pipeline",
      body: "Every enquiry as a deal, moving through your own stages.",
    },
    {
      icon: "megaphone",
      name: "Meta Ads",
      body: "Spend, leads and won deals in the same place.",
    },
  ],
} as const;

/* --- Sales page blocks 4–8 — the five chapters ---------------------------- */
export const salesChapters = [
  /*
   * [DRAFT — NEEDS APPROVAL] The reference runs five named chapters — WAKE UP,
   * LOOK AHEAD, GO WITHIN, MOVE FASTER, BECOME THE NEW HUMAN — each an
   * all-caps label, a title, a short paragraph and one large image. It is the
   * spine of the page and the only part of it that is not a button.
   *
   * Ours are the five things the product actually does, in the order a lead
   * moves through them. That order is why each one now carries a number: 01
   * to 05 is a claim about SEQUENCE, and the sequence is real — an enquiry
   * arrives, is answered, is booked, is chased, and is traced back to the ad
   * that produced it. (Contrast salesModules, where numbering would be pure
   * decoration and is used only to make thirteen feel like thirteen.)
   *
   * `quote` IS NOT A TESTIMONIAL AND MUST NEVER BECOME ONE. It is an example
   * of the kind of message that arrives on each channel, carried in an
   * incoming chat bubble because this product is about messages and a page
   * about messages should open with one. It has NO name, NO business and NO
   * outcome attached, which is what keeps it an illustration rather than
   * evidence. Attribute one of these to a real or invented customer and it
   * becomes exactly the invented proof the requirements doc forbids.
   *
   * The Tamil line is the same message shown in assistant-reply.png, so the
   * page and the screenshot agree.
   *
   * BODY AND POINTS MUST NOT SAY THE SAME THING. Twelve of the twenty points
   * once repeated the paragraph directly above them — ADS TO DEALS opened
   * "Build campaigns, ad sets and lead forms from inside iSuite" and its first
   * point read "Build campaigns and lead forms from inside iSuite". The
   * client read the chapters as too much information, and they were, but the
   * volume was never the problem: it was the same information twice.
   *
   * So the two now have separate jobs, and adding a feature name back into a
   * body is what breaks it. THE BODY MAKES THE ARGUMENT — why this matters to
   * someone losing enquiries — in one or two lines and names no feature. THE
   * POINTS CARRY THE FACTS, and are the only place a capability is listed.
   * Bodies went from 33-42 words to 14-21.
   *
   * Nothing in the new bodies is a statistic or a result. "A deal nobody
   * chased looks exactly like a deal nobody wanted" is an observation anyone
   * can check against their own week; "most deals are lost to no follow-up"
   * would be a figure we do not have, and is exactly the sentence not to
   * write here.
   *
   * THE LABELS ARE A VERB CHAIN, AND THAT IS THE POINT. They were five
   * unrelated nouns - ONE INBOX, IT REPLIES, IT BOOKS, NOTHING SLIPS, ADS TO
   * DEALS - and the two at the end broke the only thing holding them
   * together. They now read as one sentence you can say out loud: one inbox,
   * it replies, it books, it chases, it pays off.
   *
   * The chain also solves "it". A reader landing on chapter 2 does not yet
   * know what IT is, and no label can define it in two words. Four labels
   * repeating the same subject does what one label cannot.
   *
   * NO JARGON, MEASURED AGAINST ONE READER: someone who runs a showroom or a
   * clinic and has never heard of a Conversions API. Where a point named a
   * mechanism it now names the reason to want it - "send won deals back to
   * Meta, so it learns who your real buyers are" - which is a description of
   * what the mechanism does, never a promise about what it will earn.
   *
   * A TITLE MUST ANSWER ITS OWN MESSAGE. Chapter 4 opens on "Let me check and
   * call you back" and used to answer with "Who owes whom a reply", which the
   * reader has to stop and decode. "They never call back. You do." lands
   * without being worked out. Same test for the others. Every capability named below is documented in
   * iSuite-AI-Main-Website-Requirements.md §6–§15. No figure, no result, no
   * promise appears in any of them.
   *
   * Chapters 2–5 are written but not yet rendered — see SalesChapter.
   */
  {
    id: "inbox",
    channel: "Instagram",
    quote: "Hi, do you have this in stock?",
    label: "ONE INBOX",
    title: "Every channel. One screen.",
    accent: "One screen.",
    body: "Four apps means four places to lose someone. One list means there is nowhere left for a message to hide.",
    points: [
      "WhatsApp Business on your own number",
      "Instagram, Facebook and website chat",
      "Hand a chat to a staff member, add notes the customer never sees",
      "See how long someone has been waiting",
    ],
  },
  {
    id: "replies",
    channel: "WhatsApp",
    quote: "நாளை appointment கிடைக்குமா?",
    label: "IT REPLIES",
    title: "In their language. At 11pm.",
    accent: "At 11pm.",
    body: "Nobody waits until morning. The reply goes out while they are still holding the phone.",
    points: [
      "Tamil, Tanglish, English, Hindi and more",
      "Answers only from information you approved",
      "Asks your qualifying questions, saves the answers",
      "Hands over complaints, payments and anything you flag",
    ],
  },
  {
    id: "books",
    channel: "WhatsApp",
    quote: "Can I come tomorrow evening?",
    label: "IT BOOKS",
    title: "It books them in. Without double-booking you.",
    accent: "Without double-booking you.",
    body: "The difference between a booking and a double-booking is whether anybody checked first.",
    points: [
      "Calendar per person or per service",
      "Your hours, the gap you need between appointments, how much warning you need",
      "24-hour and 1-hour reminders",
      "Customer reschedules or cancels themselves",
    ],
  },
  {
    id: "followups",
    channel: "Instagram",
    quote: "Let me check and call you back.",
    label: "IT CHASES",
    title: "They never call back. You do.",
    accent: "You do.",
    body: "A deal nobody chased looks exactly like a deal nobody wanted. Only one of those is true.",
    points: [
      "Due and overdue lists, with owner names",
      "Reminders go to the person who owns it",
      "The assistant writes the follow-ups it promised",
      "Who is actually following up — and who is not",
    ],
  },
  {
    id: "ads",
    channel: "Facebook",
    quote: "Saw your ad — what is the price?",
    label: "IT PAYS OFF",
    title: "Which ad brought the money.",
    accent: "brought the money",
    body: "Meta can tell you what a lead cost. It cannot tell you which of them paid you back.",
    points: [
      "Build campaigns and lead forms from inside iSuite",
      "Spend and clicks sitting next to won deals",
      "Which campaign and which ad produced each contact",
      "Send won deals back to Meta, so it learns who your real buyers are",
    ],
  },
] as const;

/* --- Sales page block 10 — who runs the demo ------------------------------ */
export const salesFounder = {
  /*
   * [NEEDS REAL CONTENT] The reference's block 10 is its strongest: a photo of
   * the host and five lines of what he has done — 40,000 community, 8L reach,
   * 21 years, 30 awards, 300 stage talks. It is the only place on that page a
   * human appears, and it is what makes the rest of it credible.
   *
   * We have nothing equivalent, and nothing here may be invented. The three
   * fields below are the SHAPE only. MnT Future has to supply:
   *   - a photo
   *   - a name and role
   *   - two or three lines that are true, and checkable
   *
   * Until they arrive this block renders the frame and says plainly that the
   * detail is pending, rather than filling it with something plausible.
   */
  heading: "WHO RUNS THE DEMO",
  /* The accent was "RUNS THE DEMO" — three words of four, so the treatment
     landed on almost the whole heading and marked nothing out. Two words. */
  accent: "THE DEMO",
  name: "[NEEDS NAME]",
  role: "MnT Future",
  body: "[NEEDS TWO OR THREE TRUE LINES — who built iSuite AI, and why. No figures unless they are real and checkable.]",
  /** Client-confirmed: the demo is run by the team, sometimes the founder. */
  note: "Demos are run by the MnT Future team, sometimes by the founder.",
} as const;

/* --- Sales page block 11 — the whole product ------------------------------ */
export const salesModules = {
  /*
   * [DRAFT — NEEDS APPROVAL] The client's note: "inbox alone is not the entire
   * feature". Correct — the five chapters above cover five of thirteen
   * modules. This block names all thirteen so the page shows the product's
   * real size without becoming thirteen chapters.
   *
   * Every line is from iSuite-AI-Main-Website-Requirements.md §6–§18. The
   * figures that appear (8 sources, 10 triggers, 14 actions) are COUNTS OF
   * DOCUMENTED FEATURES, not results — they can be verified against the doc.
   */
  heading: "EVERYTHING INSIDE iSuite AI",
  accent: "EVERYTHING",
  lead: "Thirteen modules. The five above are the ones you will use on day one.",
  items: [
    {
      name: "One Inbox",
      body: "WhatsApp, Instagram, Facebook and website chat in one list.",
    },
    {
      name: "AI Sales Assistant",
      body: "Replies, qualifies, books and follows up in your customer's language.",
    },
    {
      name: "Lead Capture",
      body: "Eight sources — ads, forms, booking pages, Instagram comments.",
    },
    {
      name: "Contacts & Custom Fields",
      body: "One record per customer, across every channel.",
    },
    {
      name: "Sales Pipeline",
      body: "Your own boards and stages, with won and lost reasons.",
    },
    {
      name: "Follow-ups",
      body: "Due, overdue and owned. Nothing left to memory.",
    },
    {
      name: "Appointments",
      body: "Calendars per person or per service, with reminders.",
    },
    {
      name: "Meta Ads",
      body: "Build campaigns and lead forms without leaving iSuite.",
    },
    {
      name: "Broadcasts & Templates",
      body: "Approved templates, segments, opt-outs skipped automatically.",
    },
    {
      name: "No-Code Automations",
      body: "Ten triggers, fourteen actions, every run logged.",
    },
    {
      name: "Reports & Dashboard",
      body: "Response times, pipeline value, AI-handled versus human-handled.",
    },
    {
      name: "Team & Permissions",
      body: "Roles, audit trail and a full AI action history.",
    },
    {
      name: "Chat Commerce",
      body: "Catalogue, cart and payment request inside the chat.",
    },
  ],
} as const;

/* --- Sales page block 12 — who it is for, and who it is not --------------- */
export const salesAudience = {
  /*
   * [DRAFT — NEEDS APPROVAL] The reference gives this two blocks: four cards
   * of "WHO IS THIS CHALLENGE FOR?" and then a white card headed "Who this is
   * NOT for". The second is the one that does the work — a page that admits
   * who it cannot help reads differently from one that claims everybody.
   *
   * This page carries no rating, no client count and no testimonial, so
   * turning the wrong reader away is the only credibility move available.
   *
   * The three exclusions are chosen to be TRUE without shrinking the real
   * market. "Too small" and "not enough enquiries" would cut straight through
   * the audience the ads target, so they are not here.
   */
  heading: "WHO THIS IS BUILT FOR",
  accent: "BUILT FOR",
  lead: "Businesses whose customers message before they buy.",
  notHeading: "Who this is NOT for",
  notFor: [
    "Walk-in-only businesses, where customers never message before they arrive",
    "Self-service online stores, where nobody asks a question before checkout",
    "Teams who want every single reply written by a person, with no assistant involved",
  ],
} as const;

/* --- Sales page block 13 — the objections --------------------------------- */
export const salesFaq = {
  /*
   * [DRAFT — NEEDS APPROVAL] The page FAQ opened with "What is iSuite AI?" and
   * "Does it replace my sales team?". Neither is a question a reader stops on
   * — the twelve blocks above answer the first, and the second is answered
   * better by the "NOT for" panel.
   *
   * On a sales page the FAQ is the last place a hesitant reader goes before
   * leaving. So every entry is something that would actually stop someone,
   * ordered by how much.
   *
   * NOTHING BELOW PROMISES ANYTHING. Where the honest answer is "Meta
   * decides" or "it depends", that is what it says.
   *
   * ONE PLACEHOLDER FIGURE: "within a week" in the setup answer. It is
   * invented, it was approved as a stand-in, and it is registered in
   * site.PLACEHOLDER_CLAIMS.
   */
  heading: "QUESTIONS PEOPLE ASK BEFORE BOOKING",
  accent: "BEFORE BOOKING",
  items: [
    {
      q: "Will my WhatsApp number get banned?",
      a: "iSuite AI connects through Meta's official WhatsApp Business Platform — the route Meta itself supports for businesses replying at scale — not an unofficial automation tool attached to a personal number. Your account still has to follow Meta's own rules, and Meta remains the only party that decides the status of any account. We set the connection up with you so it is done the way Meta expects from the start.",
    },
    {
      q: "What if the AI says the wrong thing to a customer?",
      a: "The assistant works to the answers and rules you give it. It does not invent offers, prices or commitments on your behalf. Every message it sends is logged against that contact, and anyone on your team can take over a conversation at any point.",
    },
    {
      q: "Does it replace my sales team?",
      a: "No. It handles the first reply and the follow-ups nobody gets round to. Your people take over the conversations that matter, and every deal stays owned by a person.",
    },
    {
      q: "What does it cost?",
      a: "There is no fixed published price. Pricing is based on business requirements and discussed during consultation — how many channels you connect, the volume of enquiries and the size of your team all change the answer. Meta's own WhatsApp charges are separate and are billed by Meta.",
    },
    {
      q: "How long does it take to set up?",
      // PLACEHOLDER FIGURE — "within a week" is invented. Registered in
      // lib/site.ts. Replace with the real figure from a real onboarding.
      a: "Setup on our side is usually done within a week — connecting your channels, adding your team, setting the slots you want bookable and loading the answers the assistant replies with. The part nobody can put a date on is Meta: WhatsApp Business and ad account access are reviewed on Meta's timeline, not ours.",
    },
    {
      q: "Are Meta's WhatsApp charges included?",
      a: "No. Meta's own WhatsApp messaging charges are billed by Meta and are separate from MnT Future's charges. We walk you through how Meta's pricing applies to your expected volume during the consultation.",
    },
    {
      q: "Is Meta approval guaranteed?",
      a: "No. WhatsApp Business and Meta ad account approvals are decided by Meta, against Meta's own requirements and timelines. We help you prepare and submit what Meta asks for, but neither approval nor how long it takes is something we can guarantee.",
    },
  ],
} as const;

/* --- Sales page block 15 — the disclaimer --------------------------------- */
export const salesDisclaimer = {
  /*
   * [NEEDS LEGAL REVIEW — `meta` only]
   *
   * `meta` IS NOT FROM THE REQUIREMENTS DOCS. No document asks for it. It is
   * here because the page names WhatsApp, Instagram, Facebook and Meta
   * throughout and runs on Meta ad traffic, and Meta's advertising policies
   * prohibit implying their endorsement. It is the common form of that
   * notice, and it is a judgement call, not a client instruction - whoever
   * signs off legal copy should confirm it before this page takes ad spend.
   *
   * `results` IS FROM THE DOCS, VERBATIM. iSuite-AI-Landing-Page-
   * Requirements.md line 364, under a heading called "### Disclaimer", and
   * repeated in the build spec at line 178 with a size and a colour. It was
   * previously three sentences - two of mine about results not being
   * guaranteed, plus a reworded version of this one. The client asked for
   * only what the doc actually says, so the two invented sentences are gone
   * and this is the doc's own wording, unaltered.
   *
   * REMOVING THEM IS SAFE ONLY WHILE THE PAGE PROMISES NOTHING. Requirements
   * line 366 says "Do not promise guaranteed leads, ROAS, sales or Meta
   * approval", and line 403 forbids publishing "Guaranteed 5X results". That
   * rule has not gone away - it was simply being obeyed twice, once by the
   * copy and once by a disclaimer. If a results claim ever enters the page,
   * the disclaimer is no longer the thing that makes it acceptable.
   */
  meta: "This site is not a part of the Facebook or Instagram websites, or Meta Platforms, Inc. It is not endorsed by Meta in any way. FACEBOOK, INSTAGRAM and WHATSAPP are trademarks of Meta Platforms, Inc.",
  results:
    "Meta advertising charges and Meta approval requirements are separate from MnT Future charges and timelines.",
} as const;

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
  /* [SPEC] — 8 icons with labels.
   *
   * `message` IS WHAT MAKES THE READER RECOGNISE THEMSELVES. A trade name on
   * its own is a taxonomy: a salon owner reads "Salons" and agrees it is a
   * category they belong to, which persuades nobody. They got "How much for
   * bridal makeup?" this morning, and reading it back is a different
   * experience entirely.
   *
   * It is the same device the five chapters open with, for the same reason,
   * and it has the same rule: NO NAME, NO BUSINESS, NO OUTCOME. These are
   * examples of the first message each trade receives, not quotes from
   * anybody. Attribute one and it becomes invented proof.
   *
   * Photographs were considered here and rejected on arithmetic: eight cards
   * in a grid gives each image roughly 40px, and at 40px a clinic, a salon
   * and a studio are the same grey rectangle. Photographs would have needed
   * the card to grow and the grid to halve. An icon reads at 40px; that is
   * the whole argument.
   */
  items: [
    {
      icon: "showroom",
      label: "Showrooms",
      message: "Is the showroom open today?",
    },
    { icon: "clinic", label: "Clinics", message: "Any appointment tomorrow?" },
    { icon: "salon", label: "Salons", message: "How much for bridal makeup?" },
    {
      icon: "studio",
      label: "Studios",
      message: "Can you share your packages?",
    },
    { icon: "school", label: "Schools", message: "What are the fees?" },
    { icon: "agency", label: "Agencies", message: "Can we get on a call?" },
    {
      icon: "consultant",
      label: "Consultants",
      message: "What do you charge?",
    },
    {
      icon: "service",
      label: "Service Businesses",
      message: "Do you come to Anna Nagar?",
    },
  ],
  /* For everyone who does not see their own trade on the list. Without it,
   * eight named categories quietly tell a ninth reader this is not for them. */
  catchAll:
    "Not on this list? If your customers message you before they buy, it works the same way.",
} as const;

/* --- The demo call, stated plainly ---------------------------------------- */
export const demoCall = {
  /*
   * [DRAFT - NEEDS APPROVAL] new in Phase 5. Every fact below came from the
   * client directly: 45 minutes, free, Google Meet, a general walkthrough
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
  lead: "Forty-five minutes on Google Meet. Here is exactly what it is - and what it is not.",

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
    "Free. Forty-five minutes. On Google Meet. Run by the MnT Future team, sometimes by the founder.",
} as const;

/* --- §7.13 Footer -------------------------------------------------------- */
export const footer = {
  // [DRAFT — NEEDS APPROVAL]
  tagline: "An AI sales system for businesses that sell through conversations.",
  privacyLabel: "Privacy & Consent",
} as const;
