"use client";

import { useCallback, useRef, useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { benefits, cta } from "@/lib/content";
import { site } from "@/lib/site";

/* ==========================================================================
   CORE BENEFITS — build spec §7.6
   --------------------------------------------------------------------------
   Answers "what do I actually get?" with six capabilities told as benefits,
   which the spec is explicit about — not a feature list.

   The cards are NAVY blocks, not white cards with hairline accents and not
   six solid colour fills.

   White-card-plus-thin-accent is the default SaaS feature grid — on a phone,
   where roughly 90% of this traffic lands, it reads as a wall of grey text.
   But solid colour fills put this section directly beside How It Works using
   the same six hues in the same order, with numbers on both, and the two read
   as one block printed twice.

   So the two are now separated three ways:
     - How It Works owns the NUMBERS. It is a sequence (1 → 6); this is a set
       of six things you get, and numbering a set implies an order that does
       not exist. They are gone from here.
     - How It Works owns the six MID-TONE hues and fills its whole shape with
       them. Here the fill is navy for every card and the hue is concentrated
       in the top bar, the icon tile, the tag and the bullets — and pitched
       brighter, because it now has to carry on dark rather than on light.
     - Light section with dark cards, against a dark section with bright
       shapes.

   Contrast: white on the navy fill is 14.5:1, every hue clears 4.5:1 on it,
   and dark navy clears 7.3:1 on every icon tile. Nothing is dropped to a
   tint that cannot hold its text.

   Desktop / laptop (1024px+): all six in ONE row, alternating vertical
                               offsets so the row is not a flat strip.
   Below that                : swipeable carousel with dot pagination, one
                               card at a time.

   Every `point` names a documented capability — no ratings, counts,
   discounts or results appear anywhere.
   ========================================================================== */

/** Accent words get a marker swipe, not a colour swap — see .hilite. */
function Heading() {
  const { heading, headingAccent } = benefits;
  const rest = heading.startsWith(headingAccent)
    ? heading.slice(headingAccent.length)
    : null;
  if (rest === null) return <>{heading}</>;
  return (
    <>
      <span className="hilite">{headingAccent}</span>
      {rest}
    </>
  );
}

type Card = (typeof benefits.cards)[number];

function BenefitCard({ card }: { card: Card }) {
  return (
    <article
      className="benefit-card flex h-full flex-col overflow-hidden rounded-[26px] p-6 pt-7 lg:p-5 lg:pt-6 xl:p-6 xl:pt-7"
      style={{ "--c": card.tint } as CSSProperties}
    >
      {/* Light tile, deep glyph — the section's colour hit, and the inverse of
          How It Works, where the tint fills a circle instead */}
      <span
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] lg:h-[54px] lg:w-[54px]"
        style={{ background: card.tint, color: card.deep }}
      >
        <Icon name={card.icon as IconName} className="h-9 w-9 lg:h-8 lg:w-8" />
      </span>

      <p
        className="mt-5 text-[11px] font-extrabold tracking-[0.16em] uppercase"
        style={{ color: card.tint }}
      >
        {card.tag}
      </p>

      <h3 className="mt-1.5 text-[22px] leading-[1.15] font-extrabold tracking-tight text-white lg:text-[19px]">
        {card.title}
      </h3>

      {/* Three most relevant capabilities — the rest live in the product */}
      <ul className="mt-5 space-y-2.5 border-t border-white/15 pt-5">
        {card.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 text-[15px] leading-snug font-medium text-white/85 lg:text-[13.5px]"
          >
            <span
              aria-hidden="true"
              className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full"
              style={{ background: card.tint }}
            />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Benefits() {
  const cards = benefits.cards;
  const scroller = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return;
    const step = first.offsetWidth + 16; // card width + gap-4
    setActive(Math.min(cards.length - 1, Math.round(el.scrollLeft / step)));
  }, [cards.length]);

  const goTo = (i: number) => {
    const el = scroller.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    el.scrollTo({ left: i * (first.offsetWidth + 16), behavior: "smooth" });
  };

  return (
    <section className="section grain-soft relative overflow-hidden bg-offwhite">
      <div className="relative z-10">
        {/* Header stays narrow and centred */}
        <Reveal>
          <div className="mx-auto max-w-[760px] px-4 text-center md:px-6">
            <h2 className="balance text-[32px] leading-[1.1] font-extrabold tracking-tight text-forest md:text-[44px] lg:text-[52px]">
              <Heading />
            </h2>

            <p className="balance mx-auto mt-5 max-w-[580px] text-base leading-relaxed text-slate md:text-lg">
              {benefits.lead}
            </p>
          </div>
        </Reveal>

        {/* ---------- Phone / tablet: swipeable carousel ---------- */}
        <div className="mt-10 px-4 md:px-6 lg:hidden">
          <ul
            ref={scroller}
            onScroll={handleScroll}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-1 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((card) => (
              <li
                key={card.title}
                className="w-[84%] max-w-[380px] shrink-0 snap-center sm:w-[60%]"
              >
                <BenefitCard card={card} />
              </li>
            ))}
          </ul>

          {/* Dot pagination — the active dot takes the colour of its card */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {cards.map((card, i) => (
              <button
                key={card.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${card.title}`}
                aria-current={i === active || undefined}
                className="flex h-11 w-6 items-center justify-center"
              >
                <span
                  className="block rounded-full transition-all duration-200"
                  style={
                    i === active
                      ? { height: 10, width: 26, background: card.deep }
                      : { height: 10, width: 10, background: "#d2cec3" }
                  }
                />
              </button>
            ))}
          </div>
        </div>

        {/* ---------- Laptop / desktop: all six at once ---------- */}
        {/* Six across, using far more of the viewport than the 1200px shell.
            Every second card drops 40px so the row reads as a designed band
            rather than a strip of six equal boxes. */}
        <ul className="mx-auto mt-16 hidden max-w-[1700px] items-stretch gap-4 px-6 lg:grid lg:grid-cols-6 xl:px-10">
          {cards.map((card, i) => (
            // No h-full on the li: the grid stretches it to the track MINUS its
            // margin. Forcing 100% would push the offset cards 40px past the row.
            <li key={card.title} className={cn(i % 2 === 1 && "lg:mt-10")}>
              <Reveal delay={i * 80} className="h-full">
                <BenefitCard card={card} />
              </Reveal>
            </li>
          ))}
        </ul>

        {/* CTA #3 of 7 */}
        <Reveal delay={200}>
          <div className="mt-14 flex justify-center px-4">
            <Button
              href={site.formAnchor}
              arrow
              fullWidth
              className="sm:w-auto"
            >
              {cta.primary}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
