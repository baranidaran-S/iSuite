import Image from "next/image";

/* ==========================================================================
   LOGO — mark + wordmark
   --------------------------------------------------------------------------
   The mark is the real logo file, /public/logo.png. It is a MARK ONLY, with
   no lettering in it, so the "iSuite AI" wordmark beside it stays.

   Served through next/image so the browser never fetches the 1254px original
   for a 40px slot — Next resizes and re-encodes to WebP (see next.config.ts).
   The `sizes` hint keeps it from generating a needlessly wide candidate.

   ON DARK BARS IT NEEDS A PLATE. The mark is mid-green on transparency, and
   the product mocks put it on the forest app bar, where it measures about
   2.6:1 and reads as a smudge. `plate` sets it on a white tile there — which
   is what a real app does with a logo on a dark chrome bar anyway. The old
   drawn mark did not need this: it was a forest tile with a WHITE glyph, so
   the glyph carried the contrast.

   TWO THINGS TO FIX IN THE FILE ITSELF, before launch:
     - 633KB for a logo. Next will not ship that to the browser, but it is in
       the repo and in every clone. A trimmed PNG or an SVG would be a few KB.
     - The edges are speckled with teal fringing from the export. Invisible at
       40px, obvious anywhere it is shown large.
   An SVG would settle both, and would stay sharp at any size.
   ========================================================================== */

type P = { className?: string; plate?: boolean; priority?: boolean };

export const LogoMark = ({ className, plate = false, priority = false }: P) => {
  const mark = (
    <Image
      src="/logo.png"
      alt=""
      width={120}
      height={120}
      sizes="44px"
      priority={priority}
      className={plate ? "h-[76%] w-[76%]" : className}
    />
  );

  if (!plate) return mark;

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-[5px] bg-white ${className ?? ""}`}
    >
      {mark}
    </span>
  );
};

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark priority className="h-8 w-8 shrink-0 md:h-11 md:w-11" />
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
