import { Section } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/icons";
import { businessTypes } from "@/lib/content";

/* ==========================================================================
   SUITABLE BUSINESS TYPES — build spec §7.8
   --------------------------------------------------------------------------
   Off-white background.
   Desktop: a single row of 8 icons with labels. Mobile: 2 per row.
   Kept short, per the requirements doc.
   ========================================================================== */

export function BusinessTypes() {
  return (
    <Section bg="offwhite">
      <h2 className="t-h2 measure text-forest">{businessTypes.heading}</h2>

      <ul className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-8">
        {businessTypes.items.map((item) => (
          <li
            key={item.label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="lift flex h-16 w-16 items-center justify-center rounded-full border border-line bg-white">
              <Icon
                name={item.icon as IconName}
                className="h-8 w-8 text-forest"
              />
            </span>
            <span className="t-small font-medium text-forest">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
