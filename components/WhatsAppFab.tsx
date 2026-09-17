import { WhatsAppGlyph } from "@/components/ui/icons";
import { footer } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

/* ==========================================================================
   FLOATING WHATSAPP BUTTON — §10 item 7, every width
   --------------------------------------------------------------------------
   THIS REPLACED THE STICKY BOTTOM CTA BAR.

   Build spec §5 asks for a fixed bottom bar carrying Book a Demo on mobile,
   and it was built. It stopped earning its place once the header became
   sticky: the header already keeps a Book a Demo pinned to the top of the
   screen at every scroll position, so the bar was a second copy of the same
   button, permanently on screen, eating 64px of a 375px phone and covering
   the page's own content — including the product mock in the Solution
   section. One persistent Book a Demo is the point; two is clutter.

   Leaving this: WhatsApp is a DIFFERENT action, not a duplicate. Someone who
   will not fill in a form will still send a message.

   IT IS NO LONGER MOBILE-ONLY. §10 lists it under mobile, and it carried
   `md:hidden` to match — so on a desktop it simply was not there, and the
   only way to reach WhatsApp while scrolling was the small outline circle in
   the header. It now rides along at every width.

   NOTE: that header circle is still there, so on desktop WhatsApp appears
   twice. Say the word and the header one goes; it is the weaker of the two,
   since this one stays in reach the whole way down the page.

   It is rendered in WhatsApp's own green because it is a brand mark, not a
   palette colour — the same ruling as the channel logos in brand.tsx.

   NO RED DOT. It carried a notification badge, which says "you have an
   unread message" — and there is no message. A nudge invites; a badge that
   is not true is a small lie, and this page does not tell them anywhere else
   either. It wiggles once every five seconds instead. See .wa-nudge.

   No JavaScript. It used to watch the hero with an IntersectionObserver
   purely to know whether to sit above the bar; with the bar gone there is
   nothing to avoid, so this is a plain server component.
   ========================================================================== */

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={footer.whatsappLabel}
      /* The inset keeps it clear of the home indicator on a notched phone,
         which the sticky bar used to handle. */
      style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
      className="wa-nudge fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest md:right-6 md:h-16 md:w-16"
    >
      <WhatsAppGlyph className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
