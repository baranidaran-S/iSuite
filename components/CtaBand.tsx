import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cta, finalCta } from "@/lib/content";
import { site } from "@/lib/site";

/* ==========================================================================
   CTA BAND — build spec §7.11, moved
   --------------------------------------------------------------------------
   This was the Final CTA, the second dark anchor at the foot of the page. It
   now sits on SCREEN TWO, directly under the hero, and scrolls down to the
   form — which stays where it always was, at the end.

   That is the swap: the form itself was tried on screen two and it is too
   heavy for the spot. It is not an email box, it is four fields plus a month
   calendar plus a time grid — well over a phone screen of commitment asked
   of someone who has read one headline. A heading and a button ask for the
   same thing in 200px and cost the reader nothing.

   IT IS NO LONGER DARK. The hero is dark and this sits immediately beneath
   it; two full dark sections stacked read as one long black block on a
   phone, which is where ~90% of this traffic lands. Off-white breaks them
   apart and gives the page its first light beat. Three dark anchors remain
   — Hero, How It Works and Meta Ads.

   NOTE ON THE COPY: "Ready to..." is written for a reader at the END of a
   page, who has been convinced. On screen two nobody is ready yet. The copy
   is [SPEC] and marked for product-owner approval, so it is left exactly as
   written — but it is the first thing to revisit when the hero is rewritten.
   ========================================================================== */

export function CtaBand() {
  return (
    <Section bg="offwhite" className="grain-soft" innerClassName="text-center">
      <Reveal>
        <div className="mx-auto max-w-[700px]">
          <h2 className="t-h2 text-forest">{finalCta.heading}</h2>

          <p className="t-body mt-6 text-slate">{finalCta.body}</p>

          {/* §6: full-width on mobile where used inline. Not `onDark` any
              more — the band is light now. */}
          <div className="mt-8 flex justify-center">
            <Button href={site.formAnchor} fullWidth className="sm:w-auto">
              {cta.primary}
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
