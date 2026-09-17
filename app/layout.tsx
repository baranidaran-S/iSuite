import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
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
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
