/* ==========================================================================
   LOGO — mark + wordmark
   --------------------------------------------------------------------------
   Matches the reference's lockup: the mark followed by the wordmark with
   "AI" picked out in the brand green.

   TWO THINGS WERE WRONG HERE AND BOTH WERE SILENT.

   The mark was filled with a <linearGradient>. Gradients were ruled out for
   this page, and this was the last one outside the third-party channel logos
   in brand.tsx, which have to keep their own. It is a flat forest fill now.

   And "AI" was set in `text-teal`, a class from the palette this page had
   before #007743 arrived. The token no longer exists, so Tailwind emitted
   nothing and the two letters quietly inherited forest like the rest of the
   wordmark - the accent had not rendered for some time.

   TODO BEFORE LAUNCH: replace the mark below with the official logo file.
   ========================================================================== */

type P = { className?: string };

export const LogoMark = ({ className }: P) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <rect width="40" height="40" rx="12" fill="#123526" />
    {/* Abstract "S" — two conversation strokes flowing into one */}
    <path
      d="M26.5 13.5c-1.6-1.6-4-2.2-6.4-1.6-3 .8-4.8 3.4-4.3 6 .4 2.2 2.4 3.3 5.2 4 3.2.8 4.6 1.8 4.9 3.4.4 2.4-1.5 4.6-4.3 5.2-2.3.5-4.6-.1-6.1-1.6"
      fill="none"
      stroke="#FFF"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="h-7 w-7 shrink-0 md:h-10 md:w-10" />
      <span
        className={`whitespace-nowrap text-lg font-extrabold tracking-tight md:text-2xl ${
          onDark ? "text-ink-fg" : "text-forest"
        }`}
      >
        iSuite<span className="text-primary"> AI</span>
      </span>
    </span>
  );
}
