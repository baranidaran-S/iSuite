# iSuite AI — Meta Ads Landing Page: Full Build Spec

**Workflow:** Build desktop first → adapt down to mobile (mobile-critical decisions locked in from the start, per notes below)
**Goal:** Book a Demo (single CTA, repeated 3x + sticky mobile bar)

---

## 1. COLOR PALETTE

Use exactly these colors — nothing else. Every color has one job only.

| Role | Color | Hex | Usage | % of page |
|---|---|---|---|---|
| **Primary (Brand)** | Deep Navy | `#0F2A4A` | Header background, section headings, footer | ~50–60% |
| **Neutral — Background** | Off-White | `#F7F8FA` | Page background, card backgrounds | ~30% |
| **Neutral — Text** | Charcoal | `#1E1E1E` | Body copy, paragraph text | text only |
| **Neutral — Secondary Text** | Slate Gray | `#5A6472` | Subheadings, captions, disclaimers | text only |
| **Accent (CTA ONLY)** | Teal | `#12B5A6` | "Book a Demo" button — used NOWHERE else on the page | ~5–10% |
| **Border/Divider** | Light Gray | `#E3E6EA` | Card borders, section dividers | minimal |

**Rule:** The teal accent (`#12B5A6`) must not appear on icons, links, or decorative elements — only the primary CTA button. This keeps it visually "shouting" every time it appears.

**Dark section color (Hero + Final CTA, optionally Meta Ads Connection):**
| Role | Color | Hex | Usage |
|---|---|---|---|
| **Dark Section Background** | Charcoal-Navy | `#101826` | Hero, Final CTA, optional Meta Ads Connection |
| **Text on Dark** | Off-White | `#F5F7FA` | Headlines/body copy on dark sections |
| **Secondary Text on Dark** | Muted Blue-Gray | `#9AA6B5` | Captions/disclaimers on dark sections |

**Rule:** Only 2–3 sections total use the dark background (Hero, Final CTA, and optionally Meta Ads Connection). Every other section stays on the light palette (`#FFFFFF` / `#F7F8FA`) — this is not a dark-themed page, just strategic dark "anchor" moments. The Lead Form must always stay on a light background for usability/trust.

---

## 2. TYPOGRAPHY

**Tone target:** Not fully corporate, not funky — approachable and normal by default, with personality allowed only in specific accent spots (see below).

**Primary font family (body, subheads, most headings):** A clean, humanist sans-serif with some warmth — recommend **Plus Jakarta Sans** or **Sora** (friendlier curves than Helvetica/Arial without being playful). **Inter** or **General Sans** are safe fallbacks if a more neutral/normal feel is preferred. Avoid serif or decorative fonts.

**Accent font/weight (Hero Headline only):** Use the same family's **Display or Extrabold cut** if available (e.g., Sora Extrabold, Plus Jakarta Sans Display) for a bit more character in the one spot visitors expect personality. Do not use a different font family — just a bolder/more expressive weight of the same one, so it still feels cohesive.

| Element | Desktop Size | Mobile Size | Weight | Color | Style Zone |
|---|---|---|---|---|---|
| Hero Headline (H1) | 52–60px | 30–34px | 800 (Extrabold/Display) | `#0F2A4A` | Accent (a bit of personality allowed) |
| Section Headings (H2) | 36–40px | 24–26px | 700 (Bold) | `#0F2A4A` | Normal |
| Subheadings (H3) | 22–24px | 18–20px | 600 (Semibold) | `#0F2A4A` | Normal |
| Body Copy | 18px | 16px | 400 (Regular) | `#1E1E1E` | Strictly normal/readable |
| Form Labels / FAQ / Disclaimers | 14–16px | 13–15px | 400 (Regular) | `#5A6472` | Strictly normal/readable — never stylized |
| Button Text | 18px | 16px | 600 (Semibold) | White (`#FFFFFF`) on teal | Normal |

**Where personality is allowed (non-text):**
- Icons in "How It Works" and "Core Benefits" — slightly playful/hand-drawn-style line icons instead of stiff corporate icons
- Micro-interactions — soft hover bounce on CTA button, smooth accordion expand on FAQ

**Where it must stay strictly normal:** Body copy, form fields, FAQ answers, disclaimers, pricing/consent text — anything the visitor needs to read and trust.

**Line height:** 1.4–1.5 for body text, 1.2 for headlines.
**Max line length:** ~65–75 characters on desktop paragraphs; mobile naturally shortens this.

---

## 3. SPACING & GRID SYSTEM

- **Base unit:** 8px (all spacing values are multiples of 8 — 8, 16, 24, 32, 48, 64, 96)
- **Desktop max content width:** 1200px, centered
- **Desktop section vertical padding:** 96px top/bottom
- **Mobile section vertical padding:** 48px top/bottom
- **Desktop grid:** 12-column grid, 24px gutters
- **Mobile grid:** single column, 16px side margins

**Section-to-section rhythm:** Alternate background between `#F7F8FA` (off-white) and `#FFFFFF` (pure white) for light sections — creates visual separation without needing borders or dividers. Dark sections (`#101826`) act as visual "anchors" at the Hero (top) and Final CTA (bottom), with an optional third dark anchor at Meta Ads Connection — everything else stays light.

---

## 4. HEADER

**Desktop:**
- Height: 80px
- Background: White (`#FFFFFF`), subtle bottom border `#E3E6EA`
- Logo: left-aligned, ~40px height
- CTA button: right-aligned, "Book a Demo" (teal, see button spec below)
- No navigation links

**Mobile:**
- Height: 64px
- Same structure, smaller logo (~28px height)
- CTA button: smaller version, still tappable (min 44x44px)
- No hamburger menu icon

---

## 5. STICKY MOBILE CTA BAR (mobile only — not present on desktop)

- Fixed to bottom of viewport, full width
- Height: 64px
- Background: Deep Navy (`#0F2A4A`)
- Content: Full-width "Book a Demo" button (teal), centered
- Appears after user scrolls past the hero section
- z-index above all other content

---

## 6. BUTTON SPECS

**Primary CTA ("Book a Demo"):**
- Background: `#12B5A6` (teal)
- Text: White, 600 weight
- Desktop size: 56px height, 32px horizontal padding, border-radius 8px
- Mobile size: 48px height (sticky bar: 56px), full-width on mobile where used inline
- Hover (desktop): darken to `#0E9689`
- Min tap target (mobile): 44x44px

**Secondary CTA ("See How It Works"):**
- Text-only link, no background
- Color: `#0F2A4A` (navy), underlined on hover
- Size: 16px, 500 weight
- Positioned directly below/beside primary CTA, visually smaller

---

## 7. FULL PAGE CONTENT & LAYOUT (section by section)

### 7.1 Hero — DARK ANCHOR SECTION
- Background: `#101826` (charcoal-navy) — full-bleed, this is the first dark anchor moment on the page
- **Layout (desktop):** Two-column — left 55% text block, right 45% product screenshot. **Layout (mobile):** stacked — text first, image below, single column.
- **Headline:** "Turn Every Enquiry Into a Clear Sales Journey." — color `#F5F7FA` (off-white)
- **Subhead:** "iSuite AI brings WhatsApp, Instagram, Messenger, website and Meta ad enquiries into one system — with an AI sales assistant that responds, qualifies, books appointments and follows up." — color `#9AA6B5`
- **CTA row:** [Book a Demo] (teal — pops strongly against dark background) &nbsp; See How It Works ↓ (color `#F5F7FA`, underline on hover)
- **Visual:** Real screenshot of unified inbox or AI conversation — light-UI screenshots contrast strongly against this dark background, making the product look premium. Desktop: wide crop; mobile: portrait/square crop (prepare two versions)
- **Height constraint (mobile):** Must fit in ~600–700px so it's visible without scrolling on a standard phone screen

### 7.2 Proof Strip
- Background: `#F7F8FA` (light — transition strip back to light after the dark Hero), navy text, centered
- Copy: "Built for showrooms, clinics, salons, studios, schools, agencies and service businesses."
- Height: ~80px desktop, ~64px mobile

### 7.3 Problem Section
- Background: White
- **Heading:** "Stop Losing Enquiries Between Ads, Chats and Follow-ups."
- **Layout:** 4 short bullet points, icon + text, 2x2 grid on desktop, stacked on mobile
  - Missed WhatsApp enquiries
  - Scattered conversations across channels
  - No clear sales pipeline
  - Ad-generated leads hard to track

### 7.4 Solution Intro
- Background: `#F7F8FA`
- **Heading:** "Meet iSuite AI — Your AI Sales System."
- Two short paragraphs, centered, max-width 700px

### 7.5 How It Works
- Background: White
- **Layout (desktop):** horizontal row of 6 steps with connecting line/arrow between icons. **Layout (mobile):** vertical stack, no connecting line (or a simple vertical line).
- Each step: icon + 3-6 word title
  1. Customer Enquires
  2. AI Responds
  3. Lead Gets Qualified
  4. Appointment Booked
  5. Team Takes Over
  6. Business Tracks Progress

### 7.6 Core Benefits (6-card grid)
- Background: `#F7F8FA`
- **Layout (desktop):** 3 columns x 2 rows, card gap 24px. **Layout (mobile):** 1 column, stacked, full width, gap 16px.
- Each card: white background, `#E3E6EA` border, 24px internal padding, border-radius 12px
  - One Shared Inbox — Manage WhatsApp, Instagram, Messenger and website chat from one place.
  - AI Sales Assistance — Responds in the customer's language, qualifies leads, books appointments, follows up.
  - Clear Sales Pipeline — Turn enquiries into contacts and deals — track every stage.
  - Follow-up Visibility — Track due and overdue follow-ups automatically.
  - Connected Meta Ads — See ad spend, clicks, leads and deal value in one view.
  - Team Control — Manage roles, permissions and AI action history.
- **CTA below grid:** Book a Demo (repeat #2)

### 7.7 Meta Ads Connection — OPTIONAL THIRD DARK ANCHOR
- Background: `#101826` (charcoal-navy, optional) — makes this differentiator section visually stand out mid-page. If skipped, keep background White as a light section instead.
- **Heading:** "Connect Your Ads to the Enquiries They Generate." — color `#F5F7FA` if dark, `#0F2A4A` if light
- Copy: "iSuite AI supports Meta lead ads and click-to-WhatsApp workflows — connecting ad performance directly to enquiries and sales progress." — color `#9AA6B5` if dark, `#1E1E1E` if light
- Disclaimer (14px): "Meta advertising charges and approval requirements are separate from MnT Future charges and timelines." — color `#9AA6B5` if dark, `#5A6472` if light

### 7.8 Suitable Business Types
- Background: `#F7F8FA`
- **Layout (desktop):** single row, 8 icons with labels. **Layout (mobile):** 2 per row grid.
- Showrooms · Clinics · Salons · Studios · Schools · Agencies · Consultants · Service Businesses

### 7.9 Trust / Transparency
- Background: White
- Short centered paragraph, max-width 650px
- Includes pricing line: "Pricing is based on business requirements and discussed during consultation."

### 7.10 FAQ (Accordion)
- Background: `#F7F8FA`
- Closed by default, click/tap to expand — only one open at a time
- 5 questions:
  1. What is iSuite AI?
  2. Does it replace my sales team?
  3. Can it connect WhatsApp, Instagram and Messenger?
  4. Are Meta WhatsApp charges included?
  5. Is Meta approval guaranteed?
- Link below: "More questions? See full FAQ →" (to website)

### 7.11 Final CTA — DARK ANCHOR SECTION (bookends the Hero)
- Background: `#101826` (charcoal-navy) — second/final dark anchor moment, mirrors the Hero for a bookend effect
- **Heading:** "Ready to Bring Your Enquiries Into One Sales System?" — color `#F5F7FA`
- Copy: "See how iSuite AI fits your enquiry handling, follow-up and sales process." — color `#9AA6B5`
- **CTA:** Book a Demo (repeat #3 — teal button, pops against dark background, same treatment as Hero CTA)

### 7.12 Lead Form
- Background: White
- Card-style form, centered, max-width 480px, `#E3E6EA` border, 12px border-radius, 32px padding
- Fields (stacked, full-width inputs, 48px height each):
  - Full Name
  - WhatsApp Number (use `tel` input type on mobile)
  - Business Name
  - Business Type (dropdown)
  - Main Enquiry Channel (dropdown)
- Consent checkbox: "I agree to be contacted by MnT Future regarding iSuite AI and related business solutions."
- Submit button: full-width, teal, "Book a Demo"

### 7.13 Footer
- Background: `#101826` (charcoal-navy, matches the dark anchor sections), `#F5F7FA`/`#9AA6B5` text
- Company name, contact email, phone number, WhatsApp link, privacy/consent link
- No additional navigation

---

## 8. IMAGERY RULES

- Real product screenshots only — no stock photos, no AI-generated robot graphics
- No fake dashboard numbers or invented metrics in any screenshot
- Prepare two crops of the hero visual: wide (desktop) and portrait/square (mobile)
- Compress all images to WebP format
- Lazy-load all images below the Proof Strip section (section 7.2) — only hero image loads immediately

---

## 9. PERFORMANCE TARGETS

- Mobile load time: under 3 seconds
- All tap targets: minimum 44x44px
- Test on actual phone screen width (375px) before final approval, not just a resized browser window

---

## 10. CTA COUNT SUMMARY (for QA check before launch)

1. Header — Book a Demo
2. Hero — Book a Demo (+ See How It Works secondary)
3. After Core Benefits — Book a Demo
4. Final CTA section — Book a Demo
5. Lead Form submit — Book a Demo
6. Sticky mobile bar (mobile only) — Book a Demo
7. Floating WhatsApp icon (mobile only) — secondary contact option

---

*End of build spec. This document reflects the approved structure from iSuite-AI-Landing-Page-Requirements.md, adapted for Meta ads with 2026 landing page conventions and mobile-first priority.*
