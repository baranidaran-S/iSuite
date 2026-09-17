import { WhatsAppGlyph } from "@/components/ui/icons";
import { footer } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

/* ==========================================================================
   FLOATING WHATSAPP BUTTON — §10 item 7, mobile only
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

   It is rendered in WhatsApp's own green because it is a brand mark, not a
   palette colour — the same ruling as the channel logos in brand.tsx.

   No JavaScript now. It used to watch the hero with an IntersectionObserver
   purely to know whether to sit above the bar; with the bar gone there is
   nothing to avoid, so this is a plain server component again.
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
      className="fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest md:hidden"
    >
      <WhatsAppGlyph className="h-7 w-7" />
      <span className="absolute top-1 right-1 h-3 w-3 rounded-full border-2 border-white bg-[#E5484D]" />
    </a>
  );
}
