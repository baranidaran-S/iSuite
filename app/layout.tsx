import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Plus_Jakarta_Sans } from "next/font/google";
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
 * The reference the client's senior supplied names exactly two faces, by role
 * and not by section: --headlinefont: 'Barlow Condensed', --contentfont:
 * 'Inter'. Its headlines are CONDENSED, and that one difference in letter
 * shape is what separates it from every SaaS page — it is what the client had
 * read as "a different font in every section". So: two faces, one condensed,
 * one not. That is the whole system.
 *
 * WHY NOT BARLOW CONDENSED, WHICH IS WHAT THE REFERENCE USES. It was set that
 * way first and it is the safe answer, not the right one: Barlow is a neutral
 * face, built to get out of the way, which is the opposite of the job. Big
 * Shoulders is narrower still and has squared terminals and flat curves — it
 * looks engineered, and nobody mistakes it for a default.
 *
 * Condensed also pays for itself in space. Its capitals run roughly 0.42em
 * against Plus Jakarta ExtraBold's 0.72em, so about 70% more fits on a line.
 * The hero headline was seven lines at 39px; it is four at 53px. Bigger and
 * shorter at once, which is not a trade you usually get.
 *
 * NO `weight`, DELIBERATELY — that loads the VARIABLE font, so the whole
 * 100-900 range arrives in one file. It is why this face was chosen over
 * Anton and Bebas Neue, which ship a single weight and could therefore never
 * carry the eyebrows, the 01-13 numerals and the headings all at once.
 *
 * Google folded "Big Shoulders Display" into "Big Shoulders"; the old name is
 * kept in the CSS fallback chain for anyone whose machine still has it.
 *
 * Their body face is Inter. Ours stays Plus Jakarta Sans: Inter is the most
 * worn-out UI face on the web, and copying it would make this MORE generic.
 */
const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bigshoulders",
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
    "iSuite AI brings WhatsApp, Instagram, Facebook, website and Meta ad enquiries into one system — with an AI sales assistant that responds, qualifies, books appointments and follows up. Book a free 30-minute demo.",
  openGraph: {
    title:
      "iSuite AI — One Inbox for WhatsApp, Instagram and Facebook Enquiries",
    description:
      "One system for every enquiry, follow-up and deal. Book a free 30-minute demo with MnT Future, on Google Meet.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iSuite AI — one inbox for every enquiry. Free 30-minute demo.",
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
    <html lang="en" className={`${jakarta.variable} ${bigShoulders.variable}`}>
      <body>{children}</body>
    </html>
  );
}
