import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Plus_Jakarta_Sans } from "next/font/google";
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
 * STILL MISSING: an og:image. Meta renders a blank card without one, which
 * is the first thing a person sees when this link is shared — and this page
 * exists to be shared by Meta. It needs a real 1200x630 image in public/.
 */
export const metadata: Metadata = {
  title: "iSuite AI — One Inbox for WhatsApp, Instagram and Facebook Enquiries",
  description:
    "iSuite AI brings WhatsApp, Instagram, Facebook, website and Meta ad enquiries into one system — with an AI sales assistant that responds, qualifies, books appointments and follows up. Book a free 30-minute demo.",
  openGraph: {
    title:
      "iSuite AI — One Inbox for WhatsApp, Instagram and Facebook Enquiries",
    description:
      "One system for every enquiry, follow-up and deal. Book a free 30-minute demo with MnT Future, on Google Meet.",
    type: "website",
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
