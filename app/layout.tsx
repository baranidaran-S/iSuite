import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

/**
 * Build spec §2 — primary font family.
 * Plus Jakarta Sans: humanist sans with warmer curves than Helvetica/Arial,
 * and it ships an 800 "extrabold" cut used for the Hero H1 accent moment.
 * One family only — personality comes from weight, never a second typeface.
 */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

/**
 * THE HEADLINE FACE — and the reason the page reads as a poster rather than
 * a product site.
 *
 * SATOSHI, at the client's senior's request, replacing Anton. It is not on
 * Google Fonts — it is Fontshare (Indian Type Foundry), free for commercial
 * use — so it is SELF-HOSTED from app/fonts rather than pulled from a third
 * party at runtime. Fontshare's CDN would have worked with one link tag and
 * cost a render-blocking request to a domain we do not control; next/font
 * fingerprints, preloads and same-origins the file instead.
 *
 * ONE FILE, THE BLACK CUT. Satoshi ships 300-900; only the 900 is here,
 * because only one display weight is ever used and an unused face is bytes
 * on every first paint.
 *
 * `weight: "400"` IS DELIBERATE AND IT IS NOT A MISTAKE. The file is
 * Satoshi Black. Declaring it as 400 means the default `font-weight: normal`
 * matches it EXACTLY, so the browser can never synthesise a bolder cut by
 * smearing the outline — the failure the Anton note warned about, and the
 * reason no font-display element on this page carries a weight class. Do not
 * "fix" this to 900 without also setting font-weight on every consumer.
 *
 * WHAT THE SWAP COST, because it is not free. Anton is ultra-condensed and
 * Satoshi is a wide geometric grotesque:
 *
 *     hero headline, 150 chars   Anton 100%   Satoshi 900 119.7%
 *     cap height                 0.8594em     0.7400em
 *     descender                 -0.1270em    -0.2560em   (twice as deep)
 *     content area               1.5054em     1.2500em
 *
 * Wider AND optically smaller at the same px, so every display size on the
 * page was re-derived rather than carried over. The binding constraint is
 * the light accent: it is an inline-block with whitespace-nowrap, and "already
 * waiting." in the final CTA ran 347px inside a 335px column at the old size
 * — which is not a clipped heading, it is the whole page scrolling sideways.
 * The h2 clamp is sized so that string fits at every width down to 320px.
 *
 * Their body face is Inter. Ours stays Plus Jakarta Sans: Inter is the most
 * worn-out UI face on the web, and copying it would make this MORE generic.
 * It is also the face that still carries every bold on the page, because it
 * has real cuts to carry them with.
 */
const satoshi = localFont({
  src: "./fonts/Satoshi-Black.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-satoshi",
});

/*
 * The <title> is what shows in the browser tab and in the link preview Meta
 * renders when this URL is shared. It is NOT the hero headline and should not
 * be: "Enquiries Everywhere. Nobody Free to Reply." is a hook that works
 * above a subhead explaining it, and works nowhere else. A title has to say
 * what the thing is, on its own, to someone who has no other context.
 *
 * It carried the OLD hero headline until Phase 5, and the description still
 * said "Messenger" long after the channel was renamed to Facebook across the
 * rest of the page. Both fixed.
 *
 * THE OG IMAGE. This is what WhatsApp, Facebook, Instagram and Slack draw
 * when somebody pastes the link, and what Meta uses when an ad points here.
 * Without it they render a blank grey rectangle, which was the first thing
 * anybody saw of a page whose whole purpose is to be shared.
 *
 * 1200x630 because that is the ratio every one of them crops to. JPEG rather
 * than PNG: the artwork carries enough background noise that PNG came out at
 * 684KB, and WhatsApp's crawler skips previews much above 300KB - a blank
 * card again, for a different reason. At quality 92 it is 89KB with no
 * visible artefact on the text edges.
 *
 * metadataBase IS NOT OPTIONAL HERE. og:image must be ABSOLUTE, because the
 * crawler fetching it runs on Meta's servers and "/og-image.jpg" means
 * nothing to them. Next builds that absolute url from metadataBase; with
 * none set it falls back to localhost:3000 and every crawler fails. It is
 * site.siteUrl, which is a placeholder until the real domain is known.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: "iSuite AI — One Inbox for WhatsApp, Instagram and Facebook Enquiries",
  description:
    "iSuite AI brings WhatsApp, Instagram, Facebook, website and Meta ad enquiries into one system — with an AI sales assistant that responds, qualifies, books appointments and follows up. Book a free 45-minute demo.",
  openGraph: {
    title:
      "iSuite AI — One Inbox for WhatsApp, Instagram and Facebook Enquiries",
    description:
      "One system for every enquiry, follow-up and deal. Book a free 45-minute demo with MnT Future, on Google Meet.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        /* The card used to be a designed panel — a headline, the channel
           marks and a FREE 45-MINUTE DEMO pill — and this described it. It
           is the logo on white now, at the client's request, so the alt says
           what is actually in the picture. An alt that describes a previous
           version of an image is worse than none: a screen reader announces
           an offer that is not there. */
        alt: "The iSuite AI logo — product of MnT Future.",
      },
    ],
  },
  /* X ignores og:image sizing and needs telling to use the wide card.
     Without this it draws a small square thumbnail and centre-crops the
     artwork, which cuts the headline in half. */
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Deliberately no maximum-scale — pinch-zoom must stay available (§9 a11y).
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
        <html lang="en" className={`${jakarta.variable} ${satoshi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
