import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cta, finalCta } from "@/lib/content";
import { site } from "@/lib/site";

/* ==========================================================================
   FINAL CTA — build spec §7.11 — SECOND DARK ANCHOR
   --------------------------------------------------------------------------
   Background #052C1E, mirroring the Hero for a bookend effect.
   Same CTA treatment as the Hero: teal on dark, so it pops.
   ========================================================================== */

export function FinalCta() {
  return (
    <Section bg="ink" className="grain" innerClassName="text-center">
      <Reveal>
        <div className="mx-auto max-w-[700px]">
          <h2 className="t-h2 text-ink-fg">{finalCta.heading}</h2>

          <p className="t-body mt-6 text-ink-muted">{finalCta.body}</p>

          {/* CTA #4 of 7 (§10). §6: full-width on mobile where used inline. */}
          <div className="mt-8 flex justify-center">
            <Button
              href={site.formAnchor}
              onDark
              fullWidth
              className="sm:w-auto"
            >
              {cta.primary}
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
