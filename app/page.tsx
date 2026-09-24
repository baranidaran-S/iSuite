import { SalesHero } from "@/components/sales/SalesHero";
import { SalesPain } from "@/components/sales/SalesPain";
import { SalesDifferentiator } from "@/components/sales/SalesDifferentiator";
import { SalesSells } from "@/components/sales/SalesSells";
import { SalesJourney } from "@/components/sales/SalesJourney";
import { SalesChapter } from "@/components/sales/SalesChapter";
import { SalesCtaRow } from "@/components/sales/SalesCta";
import { HandoverCard } from "@/components/sales/HandoverCard";
import { RoutingCard } from "@/components/sales/RoutingCard";
import { RulesCard } from "@/components/sales/RulesCard";
import { SHOT_SIZES, ShotSlot } from "@/components/sales/ShotSlot";
/* Static imports, not string paths: Next reads each file's real size at
   build time and emits it under a content-hashed url. See ShotSlot.

   TWO SCREENSHOTS LEFT THIS FILE with the chapters that showed them.
   full-inbox.png and bookings.png are still in public/shots/ and still
   redacted; nothing renders them. They are the obvious source if either
   replaced chapter is ever reinstated. */
import followupsShot from "@/public/shots/followups.png";
import inboxShot from "@/public/shots/inbox.png";
import metaAdsShot from "@/public/shots/meta-ads.png";
import quotationShot from "@/public/shots/quotation.png";
import { SalesOffer } from "@/components/sales/SalesOffer";
import { SalesModules } from "@/components/sales/SalesModules";
import { SalesAudience } from "@/components/sales/SalesAudience";
import { SalesFinal } from "@/components/sales/SalesFinal";
import { SalesFaq } from "@/components/sales/SalesFaq";
import { salesChapters } from "@/lib/content";
import { Footer } from "@/components/Footer";

/* ==========================================================================
   iSuite AI — Meta ads SALES page
   --------------------------------------------------------------------------
   BEING REBUILT. The client's senior rejected the previous page as reading
   like a normal landing page, and supplied a long-form direct-response sales
   page as the reference. This is that rebuild, block by block, to the
   reference's own structure with our content in place of its event content.

   NO HEADER. The reference has no navigation and no menu at all — an ad page
   has one exit and it is the button. The old Header component is still in the
   repo, unused.

   EIGHT IDENTICAL BUTTONS, one roughly every screen and a half. The
   reference carries eight and never changes a word of them; that
   repetition is the format. See SalesCta — every instance takes its
   label from one place so rewording is impossible.

   Structure, 15 blocks:

      1  question + product shot        [BUILT]
      2  the offer + CTA                [BUILT - one unit with 1]
      3  the four screens                [BUILT]
      4  ONE INBOX                       [BUILT]
      5  IT REPLIES                     [BUILT]
      6  IT BOOKS                       [BUILT]
      7  NOTHING SLIPS                  [BUILT]
      8  ADS TO DEALS + CTA             [BUILT]
      9  WHAT HAPPENS ON THE CALL + CTA  [BUILT]
     10  who runs the demo               [BUILT - needs photo]
     11  all 13 modules                  [BUILT]
     12  WHO IT IS FOR / NOT FOR + CTA   [BUILT]
     13  the objection FAQ              [BUILT]
     14  the form, dark band            [BUILT]
     15  footer + Meta disclaimer       [BUILT]

   TWO LIGHT SECTIONS, AND ONLY TWO: the founder and the form. A four-block
   light band was tried across blocks 10-13 and rejected on sight — it broke
   the page into two halves that looked like two different sites, and the
   dark ground is most of why this reads as a sales page at all.

   THE RULE IS NOW: THE PAGE ARGUES IN THE DARK AND ASKS IN THE LIGHT. Every
   block that wants something from the reader sits on offwhite — the pain
   that makes them want it, the demo, the final CTA. Every block explaining
   something sits on night. A reader never notices that and always follows it.

   THE FOUNDER WAS THE FOURTH LIGHT SECTION and it is gone — cut because the
   revised copy doc has no founder section. It was also the only thing
   breaking a very long dark run: with it removed, twelve consecutive blocks
   between the pain and the demo are all on night.

   Amber is 1.83:1 on a light ground, so no light section may use amber as
   TEXT — every one of them paints it as a fill with night on top, at 8.90:1.
   See the note in SalesHeading.
   ========================================================================== */

export default function Page() {
  return (
    <>
      <main>
        <SalesHero />
        {/* Block 2 — the problem the rest of the page answers. It sits
            between the promise and the product deliberately: a reader shown
            features before agreeing there is a problem reads them as things
            to learn. */}
        <SalesPain />

        {/* Block 3 — the eight steps one enquiry moves through. It
            replaced the four-screen showcase: a tour of the software before
            the reader had a reason to care what the screens were. */}
        <SalesJourney />

        {/* Block 4 — the one competitive claim. It compresses the eight
            steps above into a single readable line, because the argument is
            that the journey is LONG and a reader only feels that if they see
            the whole of it at once. */}
        <SalesDifferentiator />

        {/* Block 5 — the ten verbs. Seven of them appear again inside the
            chapters below, which is the point: the chapters spread them over
            five screens with a screenshot between each, and the one thing a
            reader cannot do there is see how MANY there are. */}
        {/* Block 5 — the ten verbs. Its CTA row moved INSIDE the section,
            so a claim that strong is followed by the ask in the same breath
            rather than after a gap. Same button, not a ninth. */}
        <SalesSells />

        {/* ---- Blocks 4-8: the five chapters ----
            EVERY CHAPTER SHOWS A DIFFERENT SCREEN. The hero and chapter 4
            were both the inbox, which the client flagged: the inbox is not
            the product, it is one part of it. The hero now carries the
            dashboard, and the five chapters run inbox, conversation,
            calendar, follow-ups, ads - five separate screens, no repeats.

            `flip` swaps which side the screen sits on, so five in a row do
            not march down one column.

            All five files are in public/shots/ and wired below. THERE IS
            NO RATIO TO SET any more — each shot renders at its own shape,
            measured from the file at build time. Three rounds of replacement
            screenshots each came back a different shape and each time the
            hand-written ratio still described the file before it, so cover
            quietly sliced up to 39% off the sides. See ShotSlot.

            THREE SLOTS NOW HOLD A DIFFERENT FILE FROM THE ONE THEY WERE
            BUILT WITH, because the real screenshots arrived and they are not
            shaped like the mocks were:

              01  full-inbox.png   the whole inbox - channel list, thread and
                                   contact panel. Matches "Every channel. One
                                   screen." far better than a single thread.
              02  inbox.png        the Tamil thread that used to sit in 01.
                                   Chapter 2 is "In their language. At 11pm.",
                                   so the conversation belongs here.
              03  bookings.png     the real bookings list, not the calendar.

            THE TWO AI-GENERATED MOCKS THEY REPLACED ARE GONE from
            public/shots/ - appointments.png and assistant-reply.png, 2MB
            between them, referenced by nothing after the swap. Git still
            has them if a real screenshot ever falls through. */}
        {/* THE SEVEN CHAPTERS, ONE PER SECTION OF THE COPY DOC, in the doc's
            own order: §06 control, §07 escalation, §08 quote to cash, §09
            follow-up, §10 language, §11 safety, §12 Meta Ads.

            RENDERED STRAIGHT OFF salesChapters[0..6], so the array index IS
            the chapter number. This block was hand-wired until it drifted —
            [5] rendered as chapter 06 above [4] rendered as 05, and two
            screenshots sat on each other's chapters. Every index was valid,
            so nothing errored. Reorder in content.ts, never here.

            `flip` alternates which side the visual sits on. */}
        <SalesChapter
          chapter={salesChapters[0]}
          index={1}
          total={7}
          mock={<HandoverCard />}
        />

        <SalesChapter
          chapter={salesChapters[1]}
          index={2}
          total={7}
          flip
          mock={<RoutingCard />}
        />

        {/* 03 — quote to cash. A REAL SCREEN, not the drawn card it had. This
            is the chapter carrying the page's biggest new claim, and quotes
            and invoices are the two things the requirements doc lists under
            "Do Not Claim" — so it was also the claim with the least evidence
            behind it. The Quotes & invoices screen is that evidence. */}
        <SalesChapter
          chapter={salesChapters[2]}
          index={3}
          total={7}
          mock={
            <ShotSlot
              name="Quotes and invoices - what has been quoted, billed and accepted"
              file="quotation.png"
              src={quotationShot}
              sizes={SHOT_SIZES.chapter}
            />
          }
        />

        <SalesCtaRow anim="bounce" className="bg-night pb-9 md:pb-12" />

        <SalesChapter
          chapter={salesChapters[3]}
          index={4}
          total={7}
          flip
          mock={
            <ShotSlot
              name="The follow-ups list - due and overdue, with owner names"
              file="followups.png"
              src={followupsShot}
              sizes={SHOT_SIZES.chapter}
            />
          }
        />

        <SalesChapter
          chapter={salesChapters[4]}
          index={5}
          total={7}
          mock={
            <ShotSlot
              name="A WhatsApp conversation where the assistant replies in Tamil"
              file="inbox.png"
              src={inboxShot}
              sizes={SHOT_SIZES.chapter}
            />
          }
        />

        <SalesChapter
          chapter={salesChapters[5]}
          index={6}
          total={7}
          flip
          mock={<RulesCard />}
        />

        <SalesChapter
          chapter={salesChapters[6]}
          index={7}
          total={7}
          mock={
            <ShotSlot
              name="Ad return - what each ad cost, and the revenue it brought back"
              file="meta-ads.png"
              src={metaAdsShot}
              sizes={SHOT_SIZES.chapter}
            />
          }
        />

        <SalesCtaRow anim="ripple" className="bg-night pb-10 md:pb-14" />

        <SalesModules />
        <SalesCtaRow anim="nudge" className="bg-night pb-10 md:pb-14" />
        <SalesAudience />

        {/* THE OFFER, STATED IN FULL — and it sits here rather than
            straight after the chapters, where it used to. The FAQ below
            exists to kill objections, and an objection is something a
            reader only has once they have been ASKED. Above the product
            screens, the ask came first and the answers came four blocks
            later, by which time the reader had put the question down.
            Ask, then answer, then close. */}
        <SalesOffer />

        <SalesFaq />

        {/* THE LAST ASK ON THE PAGE. It was a bare CtaRow — the eighth
            identical button, with nothing said around it. A reader who has
            scrolled this far past seven of them will not press the eighth
            for being lower down, so the last ask now carries its own
            argument. See SalesFinal. */}
        <SalesFinal />
      </main>

      <Footer />
    </>
  );
}
