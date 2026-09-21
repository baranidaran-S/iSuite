import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
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
 * The reference page the client's senior supplied names exactly two faces, by
 * role, not by section: --headlinefont: 'Barlow Condensed' and --contentfont:
 * 'Inter'. Its headlines are CONDENSED; that single difference in letter
 * shape is what separates it from every SaaS page, and it is what the client
 * had read as "a different font in every section".
 *
 * It also pays for itself in space. Condensed capitals run roughly 0.45em
 * against Plus Jakarta ExtraBold's 0.72em, so about 60% more fits on a line.
 * The hero headline went from seven lines at 39px to four lines at 49px —
 * bigger AND shorter, which is not a trade you usually get to make.
 *
 * Their body face is Inter. Ours stays Plus Jakarta Sans: Inter is the most
 * worn-out UI face on the web and copying it would make this MORE generic,
 * not less. Two faces, one condensed and one not, is the whole system.
 */
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-barlow",
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
    <html lang="en" className={`${jakarta.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
