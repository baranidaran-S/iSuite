import { salesCta } from "@/lib/content";
import { site } from "@/lib/site";

/* ==========================================================================
   THE BUTTON — the only one on the page, eight times
   --------------------------------------------------------------------------
   The reference carries eight and never changes a word of them. That
   repetition IS the format: a page that says one thing here and another there
   has two asks, and the reader has to work out they are the same one. This
   component exists to make rewording impossible — every instance takes its
   label from salesCta.

   IT SAYS "BOOK MY FREE DEMO", NOT "BOOK A DEMO". The second is a label for a
   calendar entry. Every reference page words its button as the reader's own
   action with the thing they get inside it, and not one of them says "book a
   demo". FREE is the strongest word we have and it is simply true.

   WHAT MAKES IT LOOK LIKE A SALES BUTTON RATHER THAN A UI BUTTON:
     - it is a BAR on a phone, not a pill floating mid-screen
     - 58px tall, above the 44px minimum, because it is the point of the page
     - an amber glow under it, so it sits above the ground rather than on
       it. A shadow, not a gradient — the no-gradient rule still stands.
     - the arrow slides on hover, and stops entirely under reduced motion
     - the offer repeats underneath every single time

   Amber is 5.48:1 on the ground and carries the ground colour as text at
   the same ratio. Both were 9.37:1 when the ground was a near-black; the
   ground is the client's blue now and the pair moved together, which is the
   point of deriving one from the other rather than picking each by eye.

   EIGHT ANIMATIONS, ONE BUTTON. Each instance names a different `anim` and
   LOOPS it, on its own, with nothing to trigger it. Roughly nine in ten
   visitors arrive on a phone, where there is no hover and no pointer — an
   effect that waits to be provoked is an effect nobody sees. The first cut of
   this played once on scroll-in, which was the same mistake wearing a
   different hat: miss the moment, miss the animation.

   So they run. Each keyframe set puts its motion in the first quarter of the
   cycle and rests for the other three, which is what keeps a looping button
   from turning into a twitch. Durations are deliberately uneven so no two
   ever fall into step.

   No JavaScript anywhere in this: it is one CSS class, which is also why the
   button still animates if a script fails. The keyframes are in globals.css.

   THE HOVER LIFT STAYS, for the one visitor in ten holding a mouse. It is not
   what the animation is for.

   EVERY INSTANCE SITS ON THE NEAR-BLACK. The founder block is the one light
   section on the page and it carries no SalesCta, because it introduces a
   person rather than asking for anything. So this component has one skin and
   needs no light variant. If a light section ever does need the button, amber
   is 1.83:1 on #EFF3F9 and the edge would have to be drawn in the ground to
   satisfy WCAG 1.4.11; it is not a straight recolour.

   IT LEAVES THE SITE NOW. This used to scroll to #demo-form, a form further
   down the page. That form is gone and the button opens the client's booking
   page instead — see site.bookingUrl, which is the only place that address
   is written.

   SAME TAB, NOT A NEW ONE. Roughly nine in ten visitors arrive from a Meta
   ad, which means they are inside the Facebook or Instagram in-app browser,
   where target="_blank" is unreliable — it can open a tab the user cannot
   find or silently do nothing. A plain same-tab navigation always works.

   AN EMPTY bookingUrl IS LOUD, NOT SILENT. It falls back to "#" so the page
   cannot navigate to itself, and warns once per build. Eight dead buttons on
   a page behind paid traffic is the worst outcome available here, so it is
   worth the noise in the build log.
   ========================================================================== */

if (!site.bookingUrl) {
  console.warn(
    "\n[iSuite AI] site.bookingUrl is EMPTY — all 8 'BOOK MY FREE DEMO' " +
      "buttons lead nowhere.\n             Set it in lib/site.ts before this " +
      "page takes any ad spend.\n",
  );
}

/** The eight, in the order they appear down the page. */
export type CtaAnim =
  "jump" | "swipe" | "bounce" | "ripple" | "glow" | "nudge" | "tilt" | "wobble";

export function SalesCta({
  full = true,
  anim = "jump",
  className = "",
}: {
  full?: boolean;
  /** Which of the eight this instance plays. See globals.css. */
  anim?: CtaAnim;
  className?: string;
}) {
  return (
    <a
      href={site.bookingUrl || "#"}
      data-cta={anim}
      className={`group inline-flex min-h-[64px] items-center justify-center gap-3 rounded-full bg-amber px-7 text-center text-[19px] leading-none font-extrabold tracking-[0.03em] text-night uppercase shadow-[0_10px_34px_-8px_rgba(245,165,36,0.55)] transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-amber-dark hover:shadow-[0_16px_40px_-10px_rgba(245,165,36,0.65)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:min-h-[74px] md:px-10 md:text-[22px] ${
        full ? "w-full max-w-[440px]" : ""
      } ${className}`}
    >
      {salesCta.label}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-[21px] w-[21px] shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 md:h-6 md:w-6"
      >
        <path d="M5 12h13M12.5 6l6 6-6 6" />
      </svg>
    </a>
  );
}

/** The button, centred, with the offer repeated under it. */
export function SalesCtaRow({
  anim,
  className = "",
}: {
  anim?: CtaAnim;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center px-5 ${className}`}>
      <SalesCta anim={anim} />
      <p className="mt-3.5 text-[14px] leading-relaxed font-semibold text-night-muted md:text-[15px]">
        {salesCta.sub}
      </p>
    </div>
  );
}
