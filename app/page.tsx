import { SalesHero } from "@/components/sales/SalesHero";
import { SalesShowcase } from "@/components/sales/SalesShowcase";
import { SalesChapter } from "@/components/sales/SalesChapter";
import { SalesCtaRow } from "@/components/sales/SalesCta";
import { SHOT_SIZES, ShotSlot } from "@/components/sales/ShotSlot";
/* Static imports, not string paths: Next reads each file's real size at
   build time and emits it under a content-hashed url. See ShotSlot. */
import bookingsShot from "@/public/shots/bookings.png";
import followupsShot from "@/public/shots/followups.png";
import fullInboxShot from "@/public/shots/full-inbox.png";
import inboxShot from "@/public/shots/inbox.png";
import metaAdsShot from "@/public/shots/meta-ads.png";
import { SalesOffer } from "@/components/sales/SalesOffer";
import { SalesFounder } from "@/components/sales/SalesFounder";
import { SalesModules } from "@/components/sales/SalesModules";
import { SalesAudience } from "@/components/sales/SalesAudience";
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

   The two that stayed are the two that are not about the product. A face
   belongs on a light ground, and a form is the one thing here you act ON
   rather than read. Everything else is dark, as it was.

   Amber is 1.83:1 on a light ground, so neither of them uses amber as text —
   see the notes in SalesFounder and LeadForm.
   ========================================================================== */

export default function Page() {
  return (
    <>
      <main>
        <SalesHero />
        <SalesShowcase />
        <SalesCtaRow anim="swipe" className="bg-night pb-10 md:pb-14" />

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
        <SalesChapter
          chapter={salesChapters[0]}
          index={1}
          total={5}
          mock={
            <ShotSlot
              name="The shared inbox - every channel's conversations in one list"
              file="full-inbox.png"
              src={fullInboxShot}
              sizes={SHOT_SIZES.chapter}
            />
          }
        />

        <SalesChapter
          chapter={salesChapters[1]}
          index={2}
          total={5}
          flip
          mock={
            <ShotSlot
              name="A WhatsApp conversation where the assistant replies in Tamil"
              file="inbox.png"
              src={inboxShot}
              sizes={SHOT_SIZES.chapter}
            />
          }
        />

        <SalesCtaRow anim="bounce" className="bg-night pb-9 md:pb-12" />

        <SalesChapter
          chapter={salesChapters[2]}
          index={3}
          total={5}
          mock={
            <ShotSlot
              name="The bookings list - who booked, with whom, and whether they showed"
              file="bookings.png"
              src={bookingsShot}
              sizes={SHOT_SIZES.chapter}
            />
          }
        />

        <SalesChapter
          chapter={salesChapters[3]}
          index={4}
          total={5}
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
          total={5}
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

        <SalesOffer />

        {/* LIGHT. The only break in the dark before the form. */}
        <SalesFounder />

        <SalesModules />
        <SalesCtaRow anim="nudge" className="bg-night pb-10 md:pb-14" />
        <SalesAudience />

        <SalesFaq />

        {/* THE LAST ASK ON THE PAGE. It used to hand over to the lead form
            below it; the form is gone and every button now opens the booking
            page directly, so this row is the end of the page's argument and
            closes with its own bottom padding. */}
        <SalesCtaRow anim="wobble" className="bg-night pb-12 md:pb-16" />
      </main>

      <Footer />
    </>
  );
}
