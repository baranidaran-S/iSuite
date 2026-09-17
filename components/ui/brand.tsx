/* ==========================================================================
   CHANNEL BRAND MARKS
   --------------------------------------------------------------------------
   Real logos for the channels iSuite AI genuinely connects to. These are
   factual product capabilities, documented in the requirements doc §11 and
   §15 — not decoration and not a claim.

   They are the page's source of colour energy, which is why the design
   palette itself stays locked to build spec §1 and teal stays CTA-only.
   ========================================================================== */

type P = { className?: string };

export const WhatsAppMark = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#25D366"
      d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z"
    />
    <path
      fill="#FFF"
      d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.16c-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34Z"
    />
  </svg>
);

export const InstagramMark = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#FDF497" />
        <stop offset="5%" stopColor="#FDF497" />
        <stop offset="45%" stopColor="#FD5949" />
        <stop offset="60%" stopColor="#D6249F" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5.6" fill="url(#ig-grad)" />
    <circle
      cx="12"
      cy="12"
      r="4.2"
      fill="none"
      stroke="#FFF"
      strokeWidth="1.9"
    />
    <circle cx="17.2" cy="6.8" r="1.2" fill="#FFF" />
  </svg>
);

/**
 * Facebook. Replaced the Messenger mark, and the labels moved with it.
 *
 * What connects is Facebook MESSENGER, and Messenger has its own logo — but
 * the chat bubble reads as a generic speech balloon at 20px, while the blue
 * "f" is the mark a business owner recognises instantly. The short labels on
 * the page say "Facebook" to match, which is also what people call it.
 *
 * The precision is kept where there is room for it: the FAQ answer still
 * says "Facebook Messenger" in full. Short label, full name in the detail.
 */
export const FacebookMark = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path
      fill="#FFF"
      d="M14.9 24v-8.9h3l.57-3.48h-3.57V9.36c0-1 .35-1.69 1.79-1.69h1.9V4.56A25 25 0 0 0 15.8 4.4c-2.75 0-4.63 1.68-4.63 4.76v2.46H8.1v3.48h3.07V24h3.73Z"
    />
  </svg>
);

export const MetaMark = ({ className }: P) => (
  /*
   * Meta's mark is a wide 3:2 shape, not a square, so it keeps its own
   * viewBox. Inside a square box it renders full-width and centred, which is
   * correct for the logo.
   */
  <svg viewBox="0 0 287.56 191" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="meta-grad" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#0064E1" />
        <stop offset="100%" stopColor="#0082FB" />
      </linearGradient>
    </defs>
    <g fill="url(#meta-grad)">
      <path d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-51.93l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z" />
      <path d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z" />
      <path d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z" />
    </g>
  </svg>
);

/**
 * The Meta mark as ONE flat shape in `currentColor`, for decorative use at
 * large sizes — a watermark behind a section, for example.
 *
 * Same geometry as MetaMark, but no gradient: a <linearGradient> needs a
 * document-unique id, and MetaMark is already on the page more than once. A
 * third copy behind a section is a texture, not a logo, so it does not need
 * the brand gradient and should not risk the id collision.
 */
export const MetaGlyph = ({ className }: P) => (
  <svg viewBox="0 0 287.56 191" className={className} aria-hidden="true">
    <g fill="currentColor">
      <path d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-51.93l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z" />
      <path d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z" />
      <path d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z" />
    </g>
  </svg>
);

export const WebsiteMark = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#123526" />
    <g fill="none" stroke="#FFF" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="12" cy="12" r="6.4" />
      <path d="M5.7 12h12.6" />
      <path d="M12 5.6c1.7 1.8 2.6 4 2.6 6.4S13.7 16.6 12 18.4c-1.7-1.8-2.6-4-2.6-6.4S10.3 7.4 12 5.6Z" />
    </g>
  </svg>
);

/** The channels the product connects to, in the order the spec lists them. */
export const channelMarks = [
  { name: "WhatsApp", Mark: WhatsAppMark },
  { name: "Instagram", Mark: InstagramMark },
  { name: "Facebook", Mark: FacebookMark },
  { name: "Website", Mark: WebsiteMark },
  { name: "Meta Ads", Mark: MetaMark },
] as const;
