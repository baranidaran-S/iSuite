import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cta, finalCta } from "@/lib/content";
import { site } from "@/lib/site";

/* ==========================================================================
   FINAL CTA — build spec §7.11
   --------------------------------------------------------------------------
   NO LONGER DARK. The spec made this the second dark anchor, mirroring the
   hero across the length of the page — which worked while the two were the
   only dark blocks near the ends. What Happens on the Call now sits directly
   above it and is itself dark, so the page ended on two ink sections running
   into each other: roughly 900px of unbroken forest green on a phone, where
   ~90% of this traffic lands, with the button lost in the middle of it.

   Off-white breaks them apart, and the order it produces is the right one —
   dark section explaining the call, light section asking for it, then the
   white form. The ask is now the lightest thing at the foot of the page
   apart from the form it points at.

   Three dark anchors remain: Hero, How It Works and Meta Ads, plus the demo
   call above this and the footer below it.

   THE BUTTON IS NO LONGER INVERTED. On ink it had to be — #023380 on deep
   navy measures 1.56:1 against its own background, under the 3:1 a control
   needs, so it flipped to a light pill with green text. On off-white the
   ordinary green fill is back, which is also what every other button on a
   light section does.
   ========================================================================== */

export function FinalCta() {
  return (
    <Section bg="offwhite" className="grain-soft" innerClassName="text-center">
      <Reveal>
        <div className="mx-auto max-w-[700px]">
          <h2 className="t-h2 text-forest">{finalCta.heading}</h2>

          <p className="t-body mt-6 text-slate">{finalCta.body}</p>

          {/* CTA #4 of 7 (§10). §6: full-width on mobile where used inline. */}
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
