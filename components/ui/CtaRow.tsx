import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { cta } from "@/lib/content";
import { site } from "@/lib/site";

/* ==========================================================================
   CTA ROW — the repeated ask
   --------------------------------------------------------------------------
   One button, one wording, dropped at the foot of most sections.

   WHY IT IS A COMPONENT AND NOT FIVE COPIES. The single thing every landing
   page we were sent has in common — the ₹9 workshop pages and the $250/month
   product page alike — is that the ask is repeated verbatim, eight to ten
   times, and never reworded. "Try it free" ten times. "Register Now" ten
   times. A page that says Book a Demo here and Get Started there has two
   asks, and a reader has to work out they are the same one.

   This page had five, four of them clustered at the top. Someone scrolling
   the middle — Problem through FAQ, five sections — could not act without
   scrolling back. Now there is one within reach of roughly every screen and
   a half, and because they all come from here, the wording cannot drift.

   `onDark` inverts the button: the primary is a dark green, so a green fill
   on a deep-forest section measures 2.68:1 against its own background, under
   the 3:1 a control needs. See Button.
   ========================================================================== */

export function CtaRow({
  onDark = false,
  className,
}: {
  /** True on the ink sections — How It Works and Meta Ads. */
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("mt-12 flex justify-center md:mt-14", className)}>
      <Button
        href={site.formAnchor}
        arrow
        onDark={onDark}
        fullWidth
        className="sm:w-auto"
      >
        {cta.primary}
      </Button>
    </Reveal>
  );
}
