import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaRow } from "@/components/ui/CtaRow";
import { demoCall } from "@/lib/content";

/* ==========================================================================
   WHAT HAPPENS ON THE CALL — new in Phase 5
   --------------------------------------------------------------------------
   "Book a Demo" asks a business owner for their WhatsApp number and a slot in
   their week, and tells them nothing at all about what they are agreeing to.
   Every landing page we were sent states the shape of its offer right next to
   the ask — three hours, live on Zoom, here is what you leave with. This is
   ours: thirty minutes, free, on Google Meet, run by the MnT Future team.

   It sits directly above the form, which is where the last hesitation
   happens. By this point the reader has been through the problem, the
   product, the audience, the limits and the FAQ; what is left is "what is
   actually going to happen to me if I fill this in".

   THE FIFTH POINT IS THE ONE THAT EARNS THE OTHER FOUR. The demo is a
   walkthrough, not a setup session — nobody's account gets touched on the
   call. Saying so costs a little enthusiasm and buys the only credibility
   this page has available: it carries no rating, no client count and no
   testimonial by instruction, so being straight about the limits is all
   there is. Trust and Business Types run the same move, and it is drawn in
   the same copper against the same emerald so the three read as one voice.

   DARK, on purpose. The page lost a dark anchor when the CTA band moved up
   and went light. This puts one back where it does the most work — a dark
   band framing the white form, so the form reads as the thing to act on.
   ========================================================================== */

const Tick = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4"
  >
    <path d="m5 12.5 4.6 4.5L19 7.5" />
  </svg>
);

const Cross = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-4 w-4"
  >
    <path d="M6.5 6.5 17.5 17.5" />
    <path d="M17.5 6.5 6.5 17.5" />
  </svg>
);

/** The accent closes the heading, so this splits on indexOf. */
function Heading() {
  const { heading, headingAccent } = demoCall;
  const i = heading.indexOf(headingAccent);
  if (i === -1) return <>{heading}</>;
  return (
    <>
      {heading.slice(0, i)}
      <span className="text-emerald-tint">{headingAccent}</span>
      {heading.slice(i + headingAccent.length)}
    </>
  );
}

export function DemoCall() {
  return (
    <Section bg="ink" className="grain relative overflow-hidden">
      <div className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="balance text-[30px] leading-[1.12] font-extrabold tracking-tight text-white md:text-[42px] lg:text-[48px]">
              <Heading />
            </h2>
            <p className="balance mx-auto mt-5 max-w-[580px] text-base leading-relaxed text-white/70 md:text-lg">
              {demoCall.lead}
            </p>
          </div>
        </Reveal>

        <ul className="mx-auto mt-10 grid max-w-[900px] gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
          {demoCall.points.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 90}>
                <div className="flex h-full items-start gap-4 rounded-[20px] bg-white/[0.06] p-5 md:p-6">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-tint text-ink"
                  >
                    <Tick />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[17px] leading-snug font-extrabold text-white md:text-[18px]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/75">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* The limit. Set apart from the four above rather than listed with
            them — it is the opposite kind of statement, and burying it in the
            grid would read as a feature. */}
        <Reveal delay={380}>
          <div className="mx-auto mt-4 flex max-w-[900px] items-start gap-4 rounded-[20px] border border-copper-tint/30 bg-copper-tint/10 p-5 md:mt-5 md:p-6">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-copper-tint text-copper"
            >
              <Cross />
            </span>
            <div className="min-w-0">
              <h3 className="text-[17px] leading-snug font-extrabold text-copper-tint md:text-[18px]">
                {demoCall.limit.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/75">
                {demoCall.limit.body}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={440}>
          <p className="mx-auto mt-8 max-w-[560px] text-center text-[14px] leading-relaxed font-semibold text-emerald-tint md:text-[15px]">
            {demoCall.footnote}
          </p>
        </Reveal>

        <CtaRow onDark />
      </div>
    </Section>
  );
}
