import { Button } from "@/components/ui/Button";
import { AppMock, ChannelArc, MetaAdsCard } from "@/components/AppMock";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowDown, Icon } from "@/components/ui/icons";
import { channelMarks } from "@/components/ui/brand";
import { cta, hero } from "@/lib/content";
import { site } from "@/lib/site";

/* ==========================================================================
   HERO — build spec §7.1 — FIRST DARK ANCHOR
   --------------------------------------------------------------------------
   Dark #052C1E background, as §7.1 requires, carrying the approved
   reference's design language on top of it:
     - eyebrow pill with a live dot
     - two-tone headline, closing clause in teal
     - flat pill CTA with a trailing arrow
     - full app mock, with a floating Meta Ads card and channel rail
     - one flat background colour, textured with grain rather than glows

   The light-UI mock against this dark background is exactly the contrast
   §7.1 asks for: "light-UI screenshots contrast strongly against this dark
   background, making the product look premium."

   Layout follows §7.1: 55/45 on desktop, stacked on mobile, held to roughly
   600-700px on mobile so the CTA stays above the fold.
   ========================================================================== */

/**
 * Splits the headline so the closing clause carries the accent.
 *
 * The marker used to be hardcoded here ("a Clear Sales Journey."), which
 * meant changing the headline in lib/content.ts silently dropped the accent
 * and nothing failed. It reads `headlineAccent` now, like every other
 * section on this page.
 */
function TwoToneHeadline() {
  const { headline, headlineAccent } = hero;
  const i = headline.indexOf(headlineAccent);
  if (i === -1) return <>{headline}</>;
  return (
    <>
      {headline.slice(0, i)}
      <span className="text-emerald-tint">{headlineAccent}</span>
      {headline.slice(i + headlineAccent.length)}
    </>
  );
}

export function Hero() {
  return (
    // Flat forest green + grain. No gradient, no glow, no blurred shapes.
    <section className="grain relative overflow-hidden bg-ink">
      {/* Two columns only from lg. At md the split left a 330px text column
          holding a 56px H1 and a 358px mock column — both too narrow to work.
          Stacked, each gets the full width. */}
      <div className="shell relative z-10 grid grid-cols-1 items-center gap-12 py-12 md:py-16 lg:grid-cols-[48fr_52fr] lg:gap-10 lg:py-24">
        {/* ---------------- Text column ---------------- */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-tint/30 bg-emerald/40 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_32px_-12px_rgba(0,119,67,0.8)]">
              {/* Was three pulsing "typing" dots. They said the wrong thing:
                  a typing indicator means someone is composing a reply, and
                  this pill is about where the enquiries land. A static inbox
                  glyph names the same idea without the false motion — and the
                  page already has one real typing indicator, inside the chat
                  demo, where it is actually true. */}
              <Icon
                name="inbox"
                className="h-4 w-4 shrink-0 text-emerald-tint"
              />
              One inbox for every enquiry
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="t-h1 mt-6 text-ink-fg">
              <TwoToneHeadline />
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="t-body measure mt-6 text-ink-muted">{hero.subhead}</p>
          </Reveal>

          {/* CTA #2 of 7 (§10) */}
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-8">
              <Button
                href={site.formAnchor}
                onDark
                arrow
                fullWidth
                className="sm:w-auto"
              >
                {cta.primary}
              </Button>
              <Button
                variant="secondary"
                href={site.howItWorksAnchor}
                onDark
                className="justify-center sm:justify-start"
              >
                {cta.secondary}
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          {/* THE OFFER, NOT JUST THE LABEL.
              "Book a Demo" says nothing about how long it takes, what it
              costs or where it happens — and every landing page we were sent
              states all three right next to the button. These are the
              client's own figures.

              The second line advertises something this page already had and
              never mentioned: the form books a real calendar slot, which not
              one of the reference pages does. */}
          <Reveal delay={300}>
            <p className="mt-5 text-[15px] leading-relaxed font-bold text-emerald-tint">
              {hero.offer}
            </p>
            <p className="mt-1 text-[14px] leading-relaxed text-ink-muted">
              {hero.offerNote}
            </p>
          </Reveal>

          {/* The four channels plus Meta ads, as their own marks. Naming them
              in the subhead is a sentence; showing them is recognised in a
              glance, which is all the time this gets on a phone. Third-party
              logos keep their own brand colours — the no-gradient rule is
              ours, not Meta's. */}
          <Reveal delay={360}>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-6">
              <span className="text-[11px] font-extrabold tracking-[0.16em] text-ink-muted uppercase">
                {hero.channelsLabel}
              </span>
              <ul className="flex flex-wrap items-center gap-3">
                {channelMarks.map(({ name, Mark }) => (
                  <li key={name} className="flex items-center">
                    <Mark className="h-7 w-7" />
                    <span className="sr-only">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ---------------- Product mock ---------------- */}
        <Reveal delay={200}>
          <div className="relative">
            {/* Capped and centred while the hero is stacked, so the inbox does
                not stretch to 850px on a tablet. The three-pane mock needs the
                whole column, so the cap lifts at xl with it. */}
            <div className="relative z-10 mx-auto w-full max-w-[420px] xl:max-w-none">
              {/* Channel logos arc across the TOP of the mock — visible at
                  every width, unlike the old desktop-only side rail */}
              <ChannelArc />

              <div className="relative mt-3">
                <AppMock />

                {/* Floating Meta Ads card, lower-left of the mock. Paired with
                    the desktop mock: over the phone inbox it covered a whole
                    conversation row. */}
                <div className="absolute -bottom-6 -left-4 hidden w-56 xl:block">
                  <MetaAdsCard />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
