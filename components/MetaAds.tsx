"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaRow } from "@/components/ui/CtaRow";
import { Icon, type IconName } from "@/components/ui/icons";
import { MetaGlyph } from "@/components/ui/brand";
import { metaAds, metaAdsShots } from "@/lib/content";

/* ==========================================================================
   META ADS CONNECTION — build spec §7.7 — THIRD DARK ANCHOR
   --------------------------------------------------------------------------
   Background #052C1E (the optional third dark anchor, taken up) so this
   differentiator stands out mid-page. Copy left, screenshot carousel right,
   following the approved reference layout — its LAYOUT, not its palette. The
   spec fixes this section as dark and the page's rhythm depends on it:
   Benefits (light) → here (dark) → Business Types (light).

   The disclaimer is REQUIRED and must not be removed or softened — Meta's
   charges and approvals are separate from MnT Future's.

   THE SCREENSHOTS ARE NOT IN YET. Every slot in `metaAdsShots` with an empty
   `src` renders a labelled placeholder at the exact size the real image will
   occupy, so the carousel is fully working and nothing shifts when the files
   land. See the TODO block above `metaAdsShots` in lib/content.ts.
   ========================================================================== */

/** How long each screenshot holds before the carousel advances itself. */
const DWELL = 4500;

/** Accent words take the marker swipe rather than a colour swap — see .hilite. */
function Heading() {
  const { heading, headingAccent } = metaAds;
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

/**
 * Stand-in for a screenshot that has not been supplied.
 *
 * Deliberately obvious — dashed edge, and it names the file path and the
 * target size — so an empty slot can never be mistaken for a finished design
 * or quietly shipped.
 */
function Placeholder({ caption }: { caption: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-[20px] border-2 border-dashed border-white/25 bg-white/[0.04] p-6 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 text-white/70"
        >
          <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.4" />
          <circle cx="8.6" cy="10.2" r="1.6" />
          <path d="m4.4 17.2 4.3-4.1a1.6 1.6 0 0 1 2.2 0l3 2.9" />
          <path d="m14.2 15.4 1.9-1.8a1.6 1.6 0 0 1 2.2 0l2.3 2.2" />
        </svg>
      </span>

      <p className="text-sm font-bold text-white">{caption}</p>
      <p className="text-xs leading-relaxed text-ink-muted">
        Add to <span className="text-white/80">/public/meta-ads/</span>
        <br />
        1200 × 900 · PNG or WebP
      </p>
    </div>
  );
}

export function MetaAds() {
  const scroller = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  /* --- What stops the carousel advancing itself --------------------------
     - `taken`  the visitor scrolled it or pressed a dot. Permanent: once
                someone is driving, the page must never yank it back.
     - `hover`  the pointer is over it, so they are probably reading.
     - `onShow` it is off screen — no point animating what nobody can see.
     - `still`  the visitor asked their OS for reduced motion.
     ---------------------------------------------------------------------- */
  const [taken, setTaken] = useState(false);
  const [hover, setHover] = useState(false);
  const [onShow, setOnShow] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setStill(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setOnShow(entry.isIntersecting),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const el = scroller.current;
      const first = el?.firstElementChild as HTMLElement | null;
      if (!el || !first) return;
      el.scrollTo({
        left: i * (first.offsetWidth + 16), // card width + gap-4
        behavior: still ? "auto" : "smooth",
      });
    },
    [still],
  );

  /* Auto-advance. It depends on `active`, so the timer restarts from zero
     every time the card changes — including when the visitor moves it
     themselves, which is what stops a slide flashing past half-read. */
  useEffect(() => {
    if (taken || hover || !onShow || still) return;
    const id = window.setTimeout(
      () => goTo((active + 1) % metaAdsShots.length),
      DWELL,
    );
    return () => window.clearTimeout(id);
  }, [active, taken, hover, onShow, still, goTo]);

  const handleScroll = useCallback(() => {
    const el = scroller.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    const step = first.offsetWidth + 16;
    setActive(
      Math.min(metaAdsShots.length - 1, Math.round(el.scrollLeft / step)),
    );
  }, []);

  return (
    <Section bg="ink" className="grain relative overflow-hidden">
      {/* Meta mark, oversized and bled off the right edge — it says what the
          section is about before a word is read, and the placeholder cards are
          translucent so it shows faintly through them.

          It tracks the CARDS, not the section. Stacked, the cards sit at the
          bottom, so centring it vertically put it squarely behind the copy and
          made the phone look busy. Bottom-right below lg, centre-right above,
          and dimmer on the phone where it has less room to be subtle. */}
      <MetaGlyph className="pointer-events-none absolute right-[-30%] bottom-[1%] w-[360px] text-[#0082FB] opacity-[0.09] sm:right-[-20%] sm:w-[520px] lg:top-1/2 lg:right-[-8%] lg:bottom-auto lg:w-[760px] lg:-translate-y-1/2 lg:opacity-[0.13] xl:w-[860px]" />

      <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[44fr_56fr] lg:gap-14">
        {/* ---------------- Copy, left ---------------- */}
        <Reveal>
          <div>
            <h2 className="balance text-[30px] leading-[1.12] font-extrabold tracking-tight text-white md:text-[40px] lg:text-[46px]">
              <Heading />
            </h2>

            {/* Capability rows.
                The spec body paragraph used to sit above these and said the
                same three things in prose — lead ads, click-to-WhatsApp,
                spend against deal value. One statement of it is enough, and
                the rows scan far better on a phone. */}
            <ul className="mt-8 space-y-3">
              {metaAds.points.map((p) => (
                <li
                  key={p.text}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 md:p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-tint/15 md:h-12 md:w-12">
                    <Icon
                      name={p.icon as IconName}
                      className="h-5 w-5 text-emerald-tint md:h-6 md:w-6"
                    />
                  </span>
                  <span className="text-[15px] leading-snug font-bold text-white md:text-base">
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Required, and never softened */}
            <p className="mt-8 text-sm leading-relaxed text-ink-muted">
              {metaAds.disclaimer}
            </p>
          </div>
        </Reveal>

        {/* ---------------- Screenshot carousel, right ---------------- */}
        <Reveal delay={120}>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <ul
              ref={scroller}
              onScroll={handleScroll}
              /* A drag or a wheel means the visitor is driving. Hand it over
                 for good rather than grabbing it back every few seconds. */
              onPointerDown={() => setTaken(true)}
              onTouchStart={() => setTaken(true)}
              onWheel={() => setTaken(true)}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {metaAdsShots.map((shot) => (
                <li
                  key={shot.caption}
                  /* The next card peeks past the edge, so it reads as a
                     carousel without needing arrows or a hint. */
                  className="aspect-[4/3] w-[86%] shrink-0 snap-center sm:w-[70%] lg:w-[78%]"
                >
                  {shot.src ? (
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1200}
                      height={900}
                      className="h-full w-full rounded-[20px] object-cover"
                    />
                  ) : (
                    <Placeholder caption={shot.caption} />
                  )}
                </li>
              ))}
            </ul>

            {/* Dot pagination */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {metaAdsShots.map((shot, i) => (
                <button
                  key={shot.caption}
                  type="button"
                  onClick={() => {
                    setTaken(true);
                    goTo(i);
                  }}
                  aria-label={`Go to ${shot.caption}`}
                  aria-current={i === active || undefined}
                  className="flex h-11 w-6 items-center justify-center"
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all duration-200 ${
                      i === active ? "w-7 bg-primary" : "w-2.5 bg-white/25"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <CtaRow onDark />
      </div>
    </Section>
  );
}
