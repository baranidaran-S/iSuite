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
     `headline` exactly, or the split silently does nothing.

     IT NAMES THE WHOLE JOURNEY, WHICH THE OLD ONE DID NOT. "Are your
     enquiries sitting unread in four different apps?" described the mess at
     the top of the funnel and stopped there — it sold an inbox. The product
     does not stop at the inbox: it carries the same customer through to a
     quotation, an invoice and a payment, and that is the part a business
     owner is actually buying. Two nouns do the work: first message, paid
     invoice. Everything between them is the product.

     It is also shorter. 2 lines at 375px against the old 3, measured in
     Anton — 55px of a first screen back, on a page whose job is the button.

     THE ACCENT WRAPS, and that is fine here. "PAID INVOICE" breaks across
     the two lines, and on a dark section the accent is plain amber TEXT, so
     both halves simply colour. It is only the LIGHT sections that cannot do
     this — there the accent is a filled block that would come out as two
     rectangles of different widths. See SalesHeading. */
  headline: "FROM FIRST MESSAGE TO PAID INVOICE.",
  accent: "PAID INVOICE.", // full stop inside the accent, or it is left white and reads as a stray dot
  sub: "iSuite AI is the AI Sales System that answers, qualifies, books, follows up and helps your team close — all the way to quotation, invoice and payment.",

  /* WHO IT IS FOR, SAID OUT LOUD, one line under the promise. A page that
     names its buyer loses the wrong reader deliberately, which on paid
     traffic is a saving rather than a loss: somebody who does not sell
     through WhatsApp should leave before the demo, not during it. */
  qualifier: "For businesses that sell through WhatsApp.",

  /* The offer, stated in full on the first screen. Client-confirmed. */
  offer: ["Free", "45 minutes", "On Google Meet"],

  /* THE CHANNELS, under the ask. The headline no longer names them — it
     goes from first message to paid invoice and says nothing about where
     the message arrived — so this line carries what the old headline's
     "four different apps" used to. Five now, not four: the website and Meta
     ads were always in the product and were never in that count.

     IT REPLACED offerNote, which read "Pick a slot on the next screen. No
     card, no commitment." That was reassurance at the point of clicking and
     it is a real loss; it is out because the client's layout puts the
     channels here instead. Worth putting back if the button ever underperforms. */
  channels: ["WhatsApp", "Instagram", "Facebook", "Website", "Meta Ads"],

  /* Under the product shot. Names what is on screen so the image is not
     decoration. */
  shotCaption: "One inbox. Every channel.",
} as const;

/* --- Sales page block 2 — the pain --------------------------------------- */
export const salesPain = {
  /*
   * [FROM THE REVISED COPY DOC, §02] A block the page did not have. It ran
   * hero -> showcase -> chapters, which is promise straight into product: the
   * reader was shown the answer before agreeing there was a question.
   *
   * THE FOUR LINES ARE IN TIME ORDER AND THAT IS THE POINT. 11pm, then the
   * quotation, then the silence, then the handover — one enquiry decaying
   * across four moments, not four separate complaints. The numbering in the
   * component counts that sequence; it is the one list on this page where
   * numbering carries information rather than decorating it.
   *
   * NOBODY IS BLAMED. Every line is passive or third-person — "nobody
   * replies", "someone says" — because the reader IS the person who did not
   * reply, and a page that opens by accusing them gets closed. The last line
   * makes that explicit: the lead was lost by the gap, not by the team.
   *
   * IT ALSO SETS UP THE NEW HEADLINE. "Between the message and the sale" is
   * the same span as "from first message to paid invoice", stated as a
   * problem rather than a promise. The page now poses its question and
   * answers it in the same words.
   */
  heading: "THE LEAD CAME IN. WHAT HAPPENED AFTER THAT?",
  /* SHORT ON PURPOSE. On the light ground this is painted as a filled block,
     and "WHAT HAPPENED AFTER THAT?" is 468px of solid amber at lg:74px — a
     wall rather than a mark, and wider than the balanced line it gets given.
     Three words highlight the question without becoming the section. */
  accent: "AFTER THAT?",
  /* SPLIT INTO TWO LINES WHERE THE DOC SPLITS INTO TWO SENTENCES. The first
     two items are each a thing that happened followed by the thing that did
     not: a message arrives / nobody replies, a quotation is asked for /
     someone promises a call. Setting the second sentence quieter makes the
     failure land after the event rather than beside it.

     Items 03 and 04 are single sentences in the doc and stay single. Forcing
     a `sub` onto them would have meant inventing half a line each. */
  items: [
    { lead: "A customer messages at 11 PM.", sub: "Nobody replies." },
    {
      lead: "A customer asks for a quotation.",
      sub: "Someone says, “I’ll call you back.”",
    },
    { lead: "Nobody follows up." },
    {
      lead: "A salesperson takes over and the customer has to explain everything again.",
    },
  ],
  /* The turn. Set apart from the four above because it is the sentence the
     whole block exists to deliver — and it is the one line here that is on
     the reader's side. */
  payoff: "The lead wasn't lost at the ad.",
  payoffAccent: "It was lost between the message and the sale.",
} as const;

/* --- Sales page block 3 — the journey ------------------------------------ */
export const salesJourney = {
  /*
   * [FROM THE REVISED COPY DOC, §03] This REPLACED salesShowcase, which was
   * "FOUR SCREENS YOUR TEAM WILL LIVE IN" over four named screens. Four
   * screens was a tour of the software. Eight steps is the journey one
   * enquiry takes, which is what the page now sells — and the four screens
   * were also saying the same thing as PRODUCT SCREENS further down, in a
   * shorter list.
   *
   * THREE OF THE EIGHT HAVE NO CHAPTER BELOW THEM. Hand over, Propose and
   * Close & get paid are the new half of the product; the five chapters stop
   * at attribution. Until chapters exist for them this block is the only
   * place they appear, which is worth knowing before anyone trims it.
   *
   * "GST QUOTATIONS" IS THE MOST SPECIFIC CLAIM ON THE PAGE. It is from the
   * client's own copy doc and it is a good detail — an Indian business owner
   * reads "GST" and knows the quotation will be the one their accountant
   * accepts. It is also checkable, so it needs to be true of the actual
   * quotation screen. [CONFIRM]
   *
   * SEE ALSO the warning on salesModules: Quotations and Invoices are listed
   * under "Do Not Claim" in Main-Website-Requirements §18 and §23. That doc
   * is stale — the client's own CRM shows the feature — but steps 05 and 07
   * are two more places a reviewer will stop.
   */
  heading: "iSuite AI DOES THE SALES WORK BETWEEN THE ENQUIRY AND THE INVOICE.",
  accent: "BETWEEN THE ENQUIRY AND THE INVOICE.",
  lead: "One enquiry. One continuous sales journey.",
  steps: [
    { name: "Respond", body: "Answer immediately, in the customer's language." },
    { name: "Qualify", body: "Ask the right questions and record the answers." },
    { name: "Book", body: "Check real availability and book the appointment." },
    { name: "Hand over", body: "Give the right salesperson the full context." },
    { name: "Propose", body: "Send products, packages and GST quotations." },
    { name: "Follow up", body: "Keep the open deal moving without nagging." },
    { name: "Close & get paid", body: "Quotation, invoice, payment." },
    {
      name: "Learn",
      body: "Show which ads and conversations turned into customers.",
    },
  ],
} as const;

/* --- Sales page block 4 — the differentiator ----------------------------- */
export const salesDifferentiator = {
  /*
   * [FROM THE REVISED COPY DOC, §04] The only competitive claim on the page,
   * and the only place it says what everyone ELSE does. It earns that: every
   * "AI replies to your WhatsApp" tool on the market stops at the reply, so a
   * reader arriving from a Meta ad has almost certainly seen three of them
   * this week and is sorting this into the same pile.
   *
   * IT NAMES NO COMPETITOR. "Most systems" is as far as it goes, which keeps
   * it defensible — naming one invites a comparison the page cannot support
   * and a complaint it does not need.
   *
   * THE EIGHT STAGES ARE THE EIGHT STEPS ABOVE, SAID IN ONE BREATH. Block 3
   * walks them at a card each; this compresses the same journey into a line
   * you can read in two seconds. That repetition is the argument, not an
   * oversight: the claim is that the journey is LONG, and a reader only feels
   * its length if they see the whole of it at once.
   *
   * MESSAGE and PAYMENT are the two the eye should land on — they are the
   * headline's own two ends, "from first message to paid invoice". The
   * component marks the first and last stage for that reason.
   *
   * THE PAYOFF IS THE HEADLINE AGAIN, deliberately, and this is its second of
   * three appearances (hero, here, final CTA). A direct-response page is
   * allowed one sentence it repeats until it sticks; this page has one.
   */
  heading: "IT DOESN'T STOP AT THE REPLY.",
  accent: "AT THE REPLY.",
  lead: "Most systems help you get the conversation started.",
  leadStrong: "iSuite AI keeps the deal moving.",
  flow: [
    "Message",
    "Qualify",
    "Book",
    "Hand over",
    "Quote",
    "Follow up",
    "Invoice",
    "Payment",
  ],
  payoff: "From first message to paid invoice.",
} as const;

/* --- Sales page block 5 — what the assistant actually does --------------- */
export const salesSells = {
  /*
   * [FROM THE REVISED COPY DOC, §05] The claim is in the heading and the
   * evidence is ten verbs. Every competitor tool answers a message; almost
   * none of them create a deal, send a quotation or hand the conversation to
   * a named person. Listing the verbs IS the argument, which is why the
   * component sets the verb apart from the rest of each line — a reader
   * scanning the left edge gets Answer, Ask, Save, Create, Book, Send, Send,
   * Create, Follow up, Hand, and that column alone makes the point.
   *
   * SEVEN OF THE TEN ARE ALREADY ON THE PAGE, in chapters 01 to 04, and this
   * was very nearly cut for that reason. It survives because the chapters
   * spread them over five screens with a screenshot between each, and the one
   * thing a reader cannot do there is see how MANY there are. Ten in one
   * block is a different claim from ten across five blocks.
   *
   * THREE ARE NEW AND HAVE NO CHAPTER — create and move deals, send product
   * cards and packages, send quotations. Until chapters 06 and 07 exist this
   * is the only place on the page they appear.
   *
   * THE LAST LINE IS THE WHOLE SAFETY ARGUMENT IN NINE WORDS, and it is the
   * reason the ten above do not read as a machine let loose on your
   * customers. It is §11's argument arriving early; keep them apart when §11
   * is built, or the page makes the same promise twice in one scroll.
   */
  heading: "IT SELLS, NOT JUST REPLIES.",
  accent: "NOT JUST REPLIES.",
  /* Split at the verb deliberately — see the note above. `verb` is what the
     assistant DOES, `rest` is what it does it to. */
  items: [
    { verb: "Answer", rest: "enquiries." },
    { verb: "Ask", rest: "qualifying questions." },
    { verb: "Save", rest: "customer details." },
    { verb: "Create and move", rest: "deals." },
    { verb: "Book", rest: "appointments." },
    { verb: "Send", rest: "product cards and service packages." },
    { verb: "Send", rest: "quotations." },
    { verb: "Create", rest: "follow-up tasks." },
    { verb: "Follow up", rest: "on open conversations." },
    { verb: "Hand", rest: "conversations to your team." },
  ],
  /* Split so the opening two words can carry the amber. The sentence is the
     safety argument and the emphasis belongs on the qualifier, not the noun:
     it is ALL WITHIN your rules, rather than "the prices you set". */
  limitAccent: "All within",
  limit: "the prices, products and rules you set.",
} as const;

/* --- The handover card, shown in place of chapter 04's screenshot -------- */
export const handoverCard = {
  /*
   * [FROM THE REVISED COPY DOC, §06] The five lines a salesperson opens when
   * a conversation reaches them. It is the most distinctive thing in the
   * client's document and there is nothing like it on a competitor's page:
   * everyone claims a handover, this shows what is actually handed over.
   *
   * THE EXAMPLE IS INTERIORS and it matches the customer message on the
   * chapter beside it. One customer, one step, read left to right.
   *
   * NOT A REAL CUSTOMER. Same rule as every other example here: no name, no
   * business, no outcome. "2BHK interiors, December move-in" is a plausible
   * enquiry, not a record of one.
   */
  title: "What the salesperson opens",
  rows: [
    { k: "Wants", v: "2BHK interiors · December move-in" },
    { k: "Done", v: "Budget collected · Consultation booked" },
    { k: "Pending", v: "Kitchen requirement" },
    { k: "Told them", v: "Consultation is free" },
    { k: "Next", v: "Confirm the visit." },
  ],
  footer: "Nobody asks the customer the same questions twice.",
} as const;

/* --- The quote-to-cash card, chapter 01's visual ------------------------- */
/* --- The routing card, chapter 02's visual ------------------------------- */
export const routingCard = {
  /*
   * [§07] The five things the conversation is routed on, from the copy doc's
   * own line: "Stage · Reason · Language · Deal value · Availability".
   *
   * They are the CARD rather than the chapter's points because the points
   * are carrying the escalation ladder, and the ladder has to stay together
   * — 15, 30, 45, 60 only means something read in order. Split across two
   * places, one of them would have read as a set of five unrelated criteria.
   *
   * Nothing to screenshot: routing rules are configuration, and no screen in
   * the product displays them as a list.
   */
  title: "It routes on",
  criteria: [
    { k: "Stage", v: "where the deal has got to" },
    { k: "Reason", v: "why it needs a person" },
    { k: "Language", v: "what the customer is writing in" },
    { k: "Deal value", v: "what it is worth" },
    { k: "Availability", v: "who is actually free" },
  ],
  footer: "The right person, not the next person.",
} as const;

export const quoteToCashCard = {
  /*
   * DRAWN, NOT CAPTURED, for the same reason as the handover card: there is
   * no quotation screenshot yet, and a drawn panel beats a dashed "screenshot
   * needed" box on a live page. Replace it with a real capture of
   * Commerce > Quotes & invoices when one exists — the chapter takes any
   * ReactNode as its mock.
   *
   * NO FIGURES. A quotation with an amount on it would be an invented number
   * on a page that has just got rid of its last one.
   */
  title: "How the deal closes",
  steps: [
    { k: "Quotation", v: "prepared and sent from the conversation" },
    { k: "Invoice", v: "raised when the customer accepts" },
    { k: "Payment", v: "recorded against the deal" },
  ],
  footer: "The sales journey doesn't end at “interested”.",
} as const;

/* --- The rules card, chapter 03's visual --------------------------------- */
export const rulesCard = {
  /*
   * The six lines verbatim from the copy doc §11. They are the card rather
   * than the chapter's points because a list of things something WILL NOT DO
   * is a different kind of statement from a feature, and putting them beside
   * ticks in the points grid would have read as six features.
   */
  title: "What it will not do",
  rules: [
    "Invent a price",
    "Invent a product",
    "Give an unapproved discount",
    "Say something is booked without checking",
    "Keep talking after your team takes over",
    "Overwrite recorded customer details",
  ],
  footer: "You decide what it knows, says and can do.",
} as const;

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

/* THE ARRAY IS IN THE COPY DOC'S ORDER, AND THAT IS load-BEARING. app/page.tsx
   renders salesChapters[0] through [5] as chapters 01 to 06, in sequence, so
   the index IS the chapter number and there is nothing to keep in sync.

   It was not always. The chapters were once wired by hand — [5] rendered as
   chapter 06 above [4] rendered as chapter 05 — and the page counted
   01 02 03 04 06 05 with two screenshots on the wrong chapters. Nothing
   errored, because nothing could: every index was valid.

   Reorder here, never in page.tsx. */

/* ONE CHAPTER PER SECTION OF THE COPY DOC, IN THE DOC'S OWN ORDER. §06, §07,
   §08, §09, §10, §11, §12 — seven, and app/page.tsx renders salesChapters[0]
   through [6] in sequence, so the array index IS the chapter number.

   §06 AND §07 WERE ONE CHAPTER UNTIL NOW and that was wrong. Merging them put
   §07's heading in a body paragraph and its routing criteria in prose, so
   every line survived and no line was visible. They are two sections in the
   doc because they are two arguments: §06 is WHAT the salesperson receives,
   §07 is WHEN it goes and TO WHOM.

   §09, §10 AND §12 CARRIED THE PRE-DOC COPY until now. Their headings matched
   closely enough to look done — "They never call back. You do." against
   "Every enquiry answered" — and twelve lines of the doc were missing behind
   them. Checked line by line against the pdf now, not by heading.

   Reorder here, never in page.tsx. */
  {
    /* [§06 — USP 2] The handover card is the visual; see handoverCard. The
       points are the control argument rather than a repeat of the card's
       five rows, which the card already says better. */
    id: "control",
    channel: "WhatsApp",
    quote: "Can someone call me about the 2BHK?",
    /* "IT HANDS OVER", not "YOUR TEAM STAYS IN CONTROL". Every other label
       on the run is IT <verb> — two or three words — and this one was 26
       characters, more than double the next longest. On a phone it wrapped
       to two lines, which squeezed the "/ 07" beside the numeral until the
       slash and the 07 sat on separate lines.

       The doc's phrase survives where it belongs: it is this chapter's
       title, one line down, at a size that can carry it. */
    label: "IT HANDS OVER",
    title: "AI handles the routine. Your team handles what matters.",
    accent: "what matters.",
    body: "Nobody asks the customer the same questions twice. Whoever picks the conversation up already has what they wanted, what has been done, what is still open and what they were told.",
    points: [
      "Take over any conversation at any point",
      "The assistant stops the moment you do",
      "Notes on the contact the customer never sees",
      "Every AI action logged against that contact",
    ],
  },
  {
    /* [§07 — HANDOVER & ESCALATION] The four points are the doc's ladder,
       verbatim in substance: 15, 30, 45, 60. They are the only points on the
       page that are a SEQUENCE — each fires because the last got no answer. */
    id: "escalate",
    channel: "Instagram",
    quote: "Is anyone there?",
    label: "IT ESCALATES",
    title: "When a person needs to step in, the AI knows.",
    accent: "the AI knows.",
    body: "The conversation moves to the right person based on the stage it is at, the reason it stopped, the language it is written in, the value of the deal and who is actually free.",
    points: [
      "15 min — a reminder to whoever owns it",
      "30 min — it moves to the next person",
      "45 min — it moves to a manager",
      "60 min — one honest holding message to the customer",
    ],
  },
  {
    /* [§08 — QUOTE TO CASH] The half of the journey no competitor has, and
       the half that makes the headline true. "GST quotations" is the client's
       own wording and is checkable. [CONFIRM] */
    id: "quotetocash",
    channel: "WhatsApp",
    quote: "What's the final price?",
    label: "IT GETS PAID",
    title: "From conversation to payment.",
    accent: "to payment.",
    body: "A customer asks for the price. The deal progresses. A quotation is prepared. The customer accepts. An invoice is raised. Payment is recorded. The sales journey doesn't end at “interested”.",
    points: [
      "Send product cards and service packages",
      "Send GST quotations from the conversation",
      "Raise the invoice when the customer accepts",
      "Record the payment against the deal",
    ],
  },
  {
    /* [§09 — FOLLOW-UP] REWRITTEN. It carried "They never call back. You do."
       over four points about lists and owners — the pre-doc copy. The doc's
       argument is the opposite and better: the interesting thing is not that
       it chases, it is that it STOPS. Five conditions, and four of them are
       reasons to shut up. */
    id: "followups",
    channel: "WhatsApp",
    quote: "Let me check and call you back.",
    label: "IT CHASES",
    title: "Every enquiry answered. Every open deal followed up.",
    accent: "Every open deal followed up.",
    body: "The AI follows up around what is still open — not with a vague “just checking in”. And it knows when to stop.",
    points: [
      "Stops when the customer replies",
      "Stops when a booking happens",
      "Stops when the customer opts out",
      "Stops when a salesperson takes over",
      "Creates a task when human action is needed",
    ],
  },
  {
    /* [§10 — LANGUAGE] REWRITTEN. It carried "In their language. At 11pm."
       The doc adds what the old copy never said: it is not only languages,
       it is text, voice notes and photos. A customer who sends a voice note
       in Tanglish is the normal case, not the edge one. */
    id: "replies",
    channel: "WhatsApp",
    quote: "நாளை appointment கிடைக்குமா?",
    label: "IT REPLIES",
    title: "Your customer speaks their language. So does iSuite AI.",
    accent: "So does iSuite AI.",
    body: "Nobody waits until morning, and nobody switches to English to be understood. The reply goes out while they are still holding the phone, in whatever they wrote in.",
    points: [
      "Tamil, Tanglish, English, Hindi and more",
      "Text, voice notes and photos",
      "Answers only from information you approved",
      "Asks your qualifying questions, saves the answers",
    ],
  },
  {
    /* [§11 — SAFETY & CONTROL] The six "will not" lines are in rulesCard,
       verbatim. The points here are the same rules stated as things it DOES,
       because a reader needs both: the card reassures, the points are what
       they can picture working. */
    id: "rules",
    channel: "Instagram",
    quote: "Can you give 20% off?",
    label: "IT STAYS IN BOUNDS",
    title: "The AI works inside your rules.",
    accent: "inside your rules.",
    body: "You decide what it knows, says and can do. Everything it sends comes from the products, packages and prices you loaded, and anything outside them goes to a person.",
    points: [
      "Answers only from the prices you loaded",
      "Discount requests go to a manager",
      "Checks the calendar before saying a slot is free",
      "Stops the moment your team takes over",
    ],
  },
  {
    /* [§12 — META ADS] REWRITTEN. The old copy had the attribution argument
       but not the doc's chain or its last line. "Send qualified and won
       outcomes back to Meta" is the part that matters most and was missing:
       it is not reporting, it is feeding the algorithm real buyers. */
    id: "ads",
    channel: "Meta Ads",
    quote: "Which ad actually made money?",
    label: "IT PAYS OFF",
    title: "Which ad brought the money?",
    accent: "brought the money?",
    body: "Ad, enquiry, conversation, deal, won, revenue — one line all the way through. See your ad spend beside the revenue generated by the customers it brought, not beside the clicks.",
    points: [
      "Build campaigns and lead forms from inside iSuite",
      "Which campaign and which ad produced each contact",
      "Spend sitting next to the revenue it produced",
      "Send qualified and won outcomes back to Meta",
    ],
  },
] as const;

export const salesFounder = {
  /*
   * [PARTLY SUPPLIED] The reference's block 10 is its strongest: a photo of
   * the host and five lines of what he has done — 40,000 community, 8L reach,
   * 21 years, 30 awards, 300 stage talks. It is the only place on that page a
   * human appears, and it is what makes the rest of it credible.
   *
   * Nothing here may be invented:
   *   - a photo   SUPPLIED — public/shots/founder.png
   *   - a name    SUPPLIED — "Udhay", client-confirmed
   *   - a role    SUPPLIED — founder, client-confirmed
   *
   * `body` — [DRAFT, NEEDS APPROVAL] It was a bracketed placeholder, then
   * removed, then asked for again: without it the block was a face, a name
   * and nothing to read. THE VERSION BELOW INVENTS NO BIOGRAPHY. Every claim
   * in it is either client-confirmed or lifted from the requirements doc:
   *
   *   "founder of MnT Future"        client-confirmed
   *   the list of scattered channels  Requirements.md:142 problem points —
   *                                   missed WhatsApp enquiries, scattered
   *                                   conversations, slow first responses,
   *                                   manual follow-ups
   *   "sell through conversations"    Requirements.md:374, their own words
   *   answered / qualified / booked   the documented modules, not outcomes
   *   / chased / traced to the ad
   *
   * WHAT IT DELIBERATELY DOES NOT SAY: how long he has been doing this, what
   * he built before, how many businesses use it, or that any of it works.
   * Nobody has supplied those and none may be guessed. It reads as a motive
   * rather than a CV because a motive is the part we can actually source.
   *
   * The one soft edge is "built it for one problem" — the problem is the
   * doc's, the attribution to him is inference from his being the founder.
   * If that is wrong, it is the sentence to change.
   *
   * Only "Udhay" was given, with no surname. If a surname belongs here, it
   * goes in `name`.
   */
  heading: "WHO RUNS THE DEMO",
  /* The accent was "RUNS THE DEMO" — three words of four, so the treatment
     landed on almost the whole heading and marked nothing out. Two words. */
  accent: "THE DEMO",
  name: "Udhay",
  /* It said just "MnT Future", which is a company name sitting where a job
     title goes — the block is headed WHO RUNS THE DEMO and then named a
     company, so it never actually said who Udhay is. */
  role: "Founder, MnT Future",
  body: "Udhay is the founder of MnT Future and the person behind iSuite AI. He built it for one problem: businesses that sell through conversations keep losing enquiries between WhatsApp, Instagram, Facebook, their website and their Meta ads — separate inboxes, slow first replies, follow-ups done from memory. iSuite AI is the answer to that. One system where every enquiry is answered, qualified, booked and chased, and traced back to the ad that produced it.",
  /** Client-confirmed: the demo is run by the team, sometimes the founder. */
  /* `note` IS GONE, AND IT WAS THE ONE CLIENT-CONFIRMED LINE HERE. It read
     "Demos are run by the MnT Future team, sometimes by the founder." and it
     existed to stop this block implying something it should not: the heading
     asks WHO RUNS THE DEMO and the answer is a photograph of one man, so
     without that line the page now reads as a promise that Udhay personally
     takes the call. The client removed it knowing that.

     If someone books expecting the founder and gets the team, this is the
     sentence that was protecting against it. Put it back the moment that
     becomes a complaint. */
} as const;

/* --- Sales page block 11 — the whole product ------------------------------ */
export const salesModules = {
  /*
   * [DRAFT — NEEDS APPROVAL] The client's note: "inbox alone is not the entire
   * feature". Correct — the five chapters above cover five of these, and a
   * reader who has only seen those five would think the product is a shared
   * inbox with a bot on it.
   *
   * TEN NOW, NOT THIRTEEN, AND IT IS A DIFFERENT LIST. Five went — Lead
   * Capture, Contacts & Custom Fields, Broadcasts & Templates, Team &
   * Permissions, Chat Commerce — and two arrived: Quotations, and Invoices &
   * Payments. The five that went are plumbing every CRM has; the two that
   * arrived are the ones the hero now promises, "all the way to quotation,
   * invoice and payment". The list and the headline finally describe the same
   * product.
   *
   * THE COUNT LEFT THE LEAD. It read "Thirteen modules. The five above are
   * the ones you will use on day one." A number in a heading has to be
   * maintained every time the list changes, and it was already wrong twice
   * during this edit. The numerals 01-10 down the left still count what is on
   * the page, which is the honest version of the same argument.
   *
   * ⚠ QUOTATIONS AND INVOICES CONTRADICT THE REQUIREMENTS DOC. It lists both
   * under "Do Not Claim" (Main-Website-Requirements §18) and again under
   * things the product guide does not list (§23). That doc is STALE: the
   * client's own CRM screenshot in public/shots/meta-ads.png shows "Quotes &
   * invoices" in the Commerce menu, so the feature exists and the prohibition
   * predates it. Applied on that evidence. The doc needs updating, or a
   * reviewer will read this as a claim the client was told not to make.
   *
   * The counts that remain — ten triggers, fourteen actions — are COUNTS OF
   * DOCUMENTED FEATURES, checkable against the doc. They are not results.
   */
  /* THE LEAD BECAME THE HEADING. It was "PRODUCT SCREENS" over "Everything
     your sales team needs. In one system." — a category label over the only
     sentence that said anything. "Product screens" describes the block to
     whoever is building the page; it tells a reader nothing they want.

     NO LEAD UNDER IT NOW, deliberately. The ten numbered cards are the
     explanation, and a line of prose between the promise and its evidence
     only delays them. */
  heading: "EVERYTHING YOUR SALES TEAM NEEDS. IN ONE SYSTEM.",
  accent: "IN ONE SYSTEM.",
  items: [
    {
      name: "Shared Inbox",
      body: "WhatsApp, Instagram, Facebook and website chat in one list.",
    },
    {
      name: "AI Sales Assistant",
      body: "Replies, qualifies, books and follows up in your customer's language.",
    },
    {
      name: "Sales Pipeline",
      body: "Your own boards and stages, with won and lost reasons.",
    },
    {
      name: "Bookings",
      body: "Calendars per person or per service, with reminders.",
    },
    {
      // [DRAFTED — NEEDS APPROVAL] and see the warning above about §18/§23.
      name: "Quotations",
      body: "Send a quotation from the conversation and keep it on the deal.",
    },
    {
      name: "Follow-ups",
      body: "Due, overdue and owned. Nothing left to memory.",
    },
    {
      /* [DRAFTED — NEEDS APPROVAL] The payment half is sourced: the
         requirements doc lists "payment request inside chat" and "payment
         confirmation recording" as capabilities. The invoice half is the part
         §18 says not to claim. */
      name: "Invoices & Payments",
      body: "Raise the invoice, request payment in chat, record it when it lands.",
    },
    {
      name: "Meta Ads",
      body: "Build campaigns and lead forms without leaving iSuite.",
    },
    {
      name: "Automations",
      body: "Ten triggers, fourteen actions, every run logged.",
    },
    {
      name: "Reports",
      body: "Response times, pipeline value, AI-handled versus human-handled.",
    },
  ],
} as const;

export const salesAudience = {
  /*
   * The reference gives this two blocks: four cards of "WHO IS THIS CHALLENGE
   * FOR?" and then a white card headed "Who this is NOT for". The second is
   * the one that does the work — a page that admits who it cannot help reads
   * differently from one that claims everybody.
   *
   * This page carries no rating, no client count and no testimonial, so
   * turning the wrong reader away is the only credibility move available.
   *
   * The three exclusions are chosen to be TRUE without shrinking the real
   * market. "Too small" and "not enough enquiries" would cut straight through
   * the audience the ads target, so they are not here. THE PANEL IS UNCHANGED
   * — the client asked for the trades above it to change and for this to stay
   * exactly as it is.
   */
  heading: "WHO IT'S FOR",
  accent: "IT'S FOR",
  lead: "Built for businesses where customers message before they buy.",
  notHeading: "Who this is NOT for",
  notFor: [
    "Walk-in-only businesses, where customers never message before they arrive",
    "Self-service online stores, where nobody asks a question before checkout",
    "Teams who want every single reply written by a person, with no assistant involved",
  ],
} as const;

export const salesFaq = {
  /*
   * On a sales page the FAQ is the last place a hesitant reader goes before
   * leaving. So every entry is something that would actually stop someone,
   * ordered by how much.
   *
   * NOTHING BELOW PROMISES ANYTHING. Where the honest answer is "Meta
   * decides", that is what it says — three of the eight answers begin with
   * a flat "No", which is the point rather than a weakness.
   *
   * THE ANSWERS GOT SHORTER, roughly by half. The previous set argued its
   * case in four or five sentences each; these state the position and stop.
   * On a phone that is the difference between an answer being read and an
   * answer being scrolled past, and an FAQ nobody reads protects nobody.
   *
   * TWO QUESTIONS WENT, AND ONE OF THEM MATTERS:
   *
   *   "What if the AI says the wrong thing?" is covered better by the new
   *   "Will the AI make up prices or discounts?", which asks the version of
   *   it people actually worry about.
   *
   *   "What does it cost?" IS GONE AND NOTHING REPLACED IT. That answer
   *   carried "Pricing is based on business requirements and discussed
   *   during consultation" — wording both approved documents require on the
   *   page (Build Spec line 188, Requirements line 412) and which now
   *   appears nowhere. Dropped at the client's instruction, recorded here
   *   because it is a documented requirement rather than a preference.
   *
   * THE OLD PLACEHOLDER IS GONE WITH IT. "Setup on our side is usually done
   * within a week" was invented and registered in site.PLACEHOLDER_CLAIMS;
   * the question that held it no longer exists. One unverified figure
   * arrives in its place — see the note on the approval answer below.
   */
  heading: "QUESTIONS PEOPLE ASK BEFORE BOOKING",
  accent: "BEFORE BOOKING",
  items: [
    {
      q: "Will my WhatsApp number get banned?",
      a: "iSuite AI connects through Meta's official WhatsApp Business Platform. Your account must follow Meta's rules, and Meta decides account status.",
    },
    {
      q: "Will the AI make up prices or discounts?",
      a: "No. It works from the products, packages, prices and rules you provide. Discount or exception requests can go to a manager for approval.",
    },
    {
      q: "Does iSuite AI replace my sales team?",
      a: "No. The AI handles routine conversations, qualification and follow-ups. Your team takes over when human involvement is needed.",
    },
    {
      q: "What languages can it handle?",
      a: "Tamil, Tanglish, English, Hindi and more, depending on the customer's language and your setup.",
    },
    {
      q: "Are Meta charges included?",
      a: "No. Meta charges separately at Meta's rates. WhatsApp messaging charges are separate from MnT Future charges.",
    },
    {
      q: "How long does WhatsApp approval take?",
      // UNVERIFIED FIGURE — "1-2 weeks". Registered in site.PLACEHOLDER_CLAIMS.
      // Lower risk than the "within a week" claim it replaces, because it
      // describes META's review rather than MnT Future's own work and is
      // hedged twice. Still nobody's measured number. Confirm or cut it.
      a: "Typically 1–2 weeks, subject to Meta's review.",
    },
    {
      q: "Do you message people without consent?",
      a: "No. iSuite AI is designed to message people who have opted in, and opt-outs are respected.",
    },
    {
      q: "Is Meta approval guaranteed?",
      a: "No. WhatsApp Business and Meta advertising approvals are decided by Meta.",
    },
  ],
} as const;

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
    "Meta advertising charges and WhatsApp messaging charges are separate from MnT Future charges. WhatsApp Business approval and Meta advertising approvals are subject to Meta's requirements and review.",
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
   * THE EIGHT TRADES CHANGED. They were Showrooms, Clinics, Salons, Studios,
   * Schools, Agencies, Consultants, Service Businesses — a list of shop
   * types. The client replaced it with a list of SECTORS: Real Estate,
   * Interiors, Education & Coaching, Clinics, Travel, D2C, Distributors,
   * B2B Services. Higher ticket, longer sales conversations, and the deal
   * sizes in the Ad return screenshot make more sense beside them.
   *
   * `message` IS WHAT MAKES THE READER RECOGNISE THEMSELVES. A trade name on
   * its own is a taxonomy: a clinic owner reads "Clinics" and agrees it is a
   * category they belong to, which persuades nobody. They got "Any
   * appointment tomorrow?" this morning, and reading it back is a different
   * experience entirely.
   *
   * THE EIGHT MESSAGES ARE DRAFTED, NOT SUPPLIED. The client sent the trade
   * names only. Each line below is the first message that trade plausibly
   * receives, written to match the originals — NO NAME, NO BUSINESS, NO
   * OUTCOME. They are examples, not quotes from anybody; attribute one and it
   * becomes invented proof. [NEEDS APPROVAL]
   *
   * TWO ICONS ARE NEW. travel and d2c did not exist — the old list needed no
   * plane and no box. Drawn in icons.tsx in the same hand as the rest.
   *
   * Photographs were considered here and rejected on arithmetic: eight cards
   * in a grid gives each image roughly 40px, and at 40px a clinic, a showroom
   * and a studio are the same grey rectangle. An icon reads at 40px; that is
   * the whole argument.
   */
  items: [
    {
      icon: "showroom",
      label: "Real Estate",
      message: "Is this flat still available?",
    },
    {
      icon: "studio",
      label: "Interiors",
      message: "Can you share your packages?",
    },
    {
      icon: "school",
      label: "Education & Coaching",
      message: "What are the fees?",
    },
    { icon: "clinic", label: "Clinics", message: "Any appointment tomorrow?" },
    { icon: "travel", label: "Travel", message: "Any packages for December?" },
    { icon: "d2c", label: "D2C", message: "Do you deliver to my pincode?" },
    {
      icon: "pipeline",
      label: "Distributors",
      message: "What is the bulk rate?",
    },
    {
      icon: "service",
      label: "B2B Services",
      message: "Can we get on a call?",
    },
  ],

  /* The line under the grid. It used to work as a catch-all for anyone whose
     trade was not in the eight; it now states the actual qualifying test, so
     a reader in a sector nobody listed still knows whether this is for them.
     Same sentence as the hero's qualifier, deliberately — the page opens and
     closes its argument on the same condition. */
  catchAll:
    "If your customers message you before they buy, iSuite AI fits the way you sell.",
} as const;

export const demoCall = {
  /*
   * [FROM THE REVISED COPY DOC, §15] It was "What Happens on the Call." over
   * four points with a paragraph each. This is eight, one line apiece, and
   * every one starts with "How" — the demo is not a pitch, it is a
   * walkthrough of the reader's own journey, and eight lines all beginning
   * the same way say that faster than four paragraphs explaining it.
   *
   * THE EIGHT ARE THE PAGE'S OWN ARGUMENT, IN ORDER. Enquiries enter, the AI
   * responds, qualification, booking, handover, quotations and invoices,
   * follow-ups, Meta Ads to revenue — the same spine as the journey block and
   * the chapters. A reader who has scrolled this far recognises every line,
   * which is the point: the demo shows them the thing they have just read.
   *
   * THE LIMIT PANEL SURVIVED. "It is a walkthrough, not a setup session" is
   * not in the copy doc, and it is not contradicted by it either. It is kept
   * because it is the only credibility move this page has: no rating, no
   * client count and no testimonial by instruction, so being straight about
   * what the call is NOT is all there is. Remove it and the block becomes
   * eight promises with nothing holding them down.
   *
   * "NO CARD, NO COMMITMENT" IS BACK. It was in the hero as offerNote and
   * went when the channels took that slot. The copy doc puts it here instead,
   * at the moment of clicking, which is arguably where it always belonged.
   */
  heading: "SEE iSuite AI WITH YOUR OWN SALES JOURNEY.",
  /* SHORT, BECAUSE THIS SECTION IS LIGHT NOW. On a light ground the accent
     is not amber text — amber on offwhite is 1.83:1, which is a smudge — so
     SalesHeading paints it as a filled BLOCK instead. A filled block is an
     inline-block and cannot break across two lines, so the accent has to fit
     on one at every width. "YOUR OWN SALES JOURNEY." measured 237px inside a
     240px column on a 320px phone: three pixels from overflowing the screen,
     which is not a margin, it is luck. */
  headingAccent: "SALES JOURNEY.",
  lead: "45-minute live walkthrough.",

  points: [
    "How your enquiries enter.",
    "How the AI responds.",
    "How qualification works.",
    "How appointments are booked.",
    "How your team receives handovers.",
    "How quotations and invoices work.",
    "How follow-ups happen.",
    "How Meta Ads connect to revenue.",
  ],

  /** The honest limit. Rendered apart from the eight above. Not in the copy
      doc, kept deliberately — see the note above. */
  limit: {
    title: "It is a walkthrough, not a setup session",
    body: "We do not connect your accounts on the call, and nothing changes in your business until you decide it should.",
  },

  footnote: "Free · 45 minutes · Google Meet · No card · No commitment",
} as const;

/* --- Sales page block 17 — the last ask ---------------------------------- */
export const salesFinal = {
  /*
   * [FROM THE REVISED COPY DOC, §17] The page used to end on a bare CTA row —
   * a button and its sub-line, the eighth of eight, with nothing said around
   * it. A reader who has scrolled the whole page and not pressed one of the
   * previous seven is not going to press an identical eighth; the last ask
   * has to say something the other seven did not.
   *
   * THIS ONE DOES, AND IT IS A TENSE CHANGE. Every other line on the page is
   * about what happened — the lead that came in, the message nobody answered.
   * This is the only sentence in the future: the next enquiry has not
   * arrived yet, and what happens to it is still open. That is the whole
   * device, and it is why this block earns its place over another CTA row.
   *
   * THIRD AND LAST APPEARANCE of "From first message to paid invoice." Hero,
   * differentiator, here. A direct-response page is allowed one sentence it
   * repeats until it sticks.
   */
  heading: "YOUR NEXT ENQUIRY IS ALREADY WAITING.",
  accent: "ALREADY WAITING.",
  sub: "Make sure it doesn't wait for your team.",
  /* The lockup line. The logo is not repeated here — the footer carries it
     immediately below, and twice in one screen reads as a mistake. */
  brand: "iSuite AI",
  payoff: "From first message to paid invoice.",
} as const;

export const footer = {
  // [DRAFT — NEEDS APPROVAL]
  tagline: "An AI sales system for businesses that sell through conversations.",
  /* privacyLabel went with the link it labelled — see Footer.tsx. */
} as const;
