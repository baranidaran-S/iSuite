import { SalesHero } from "@/components/sales/SalesHero";
import { SalesShowcase } from "@/components/sales/SalesShowcase";
import { SalesChapter } from "@/components/sales/SalesChapter";
import { SalesCtaRow } from "@/components/sales/SalesCta";
import { ShotSlot } from "@/components/sales/ShotSlot";
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

            All five files are in public/shots/ and wired below. `ratio`
            must match the file's own width/height or ShotSlot's objectFit
            will crop it: 16/9 for the wide screens, 16/10 for the inbox,
            4/5 for the portrait conversation. */}
        <SalesChapter
          chapter={salesChapters[0]}
          index={1}
          total={5}
          mock={
            <ShotSlot
              name="The shared inbox, with all four channels in one list"
              file="inbox.png"
              src="/shots/inbox.png"
              ratio="16 / 10"
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
              file="assistant-reply.png"
              src="/shots/assistant-reply.png"
              ratio="4 / 5"
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
              name="The appointment calendar, with slots and reminders"
              file="appointments.png"
              src="/shots/appointments.png"
              ratio="16 / 9"
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
              src="/shots/followups.png"
              ratio="16 / 9"
            />
          }
        />

        <SalesChapter
          chapter={salesChapters[4]}
          index={5}
          total={5}
          mock={
            <ShotSlot
              name="Meta Ads - spend, leads and won deals in one view"
              file="meta-ads.png"
              src="/shots/meta-ads.png"
              ratio="16 / 9"
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
