"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { DateTimePicker } from "@/components/DateTimePicker";
import { cta, leadForm } from "@/lib/content";
import { LEAD_ENDPOINT } from "@/lib/site";

/* ==========================================================================
   LEAD FORM — build spec §7.12
   --------------------------------------------------------------------------
   WHITE background — the spec requires the form to stay on a light background
   for usability and trust, even though the Final CTA above it is dark.

   Card: centred, #E1DFD6 border, 12px radius, 32px padding. 480px in one
   column on a phone; from 768px it opens to 920px and splits — the five
   details on the left, the demo slot on the right, consent and the button
   across the foot.

   THE SPLIT IS WHY. Stacked, the five fields plus a month calendar ran to
   about 1400px: the button sat three screens below the heading, and on
   desktop the whole thing was a thin ribbon down the middle of an empty
   page. Two columns roughly halve it and put the button back in view.
   Fields: the spec's 5, stacked, full-width, 48px height each, plus the two
   OPTIONAL slot rows below them.
   WhatsApp Number uses type="tel" so mobile shows the number pad.

   THERE IS NO DROPDOWN LEFT IN HERE. Business Type was a native <select>,
   and a native select's open list is drawn by the operating system — every
   browser ignores the page's CSS for it, so it could not be made to match
   anything else on the page. It is a row of chips now, the same control the
   Preferred Time row uses, which also saves a tap on a phone: no system
   sheet to open and dismiss.

   THE PICKER IS NOT A BOOKING. It records a preference that travels with the
   lead; the team confirms the real time on WhatsApp. Nothing in it is
   validated — see components/DateTimePicker.tsx.

   DELIVERY IS NOT CONNECTED. While LEAD_ENDPOINT is empty the form validates
   and shows its success state, but sends nothing. See lib/site.ts.
   ========================================================================== */

type Fields = {
  fullName: string;
  whatsapp: string;
  businessName: string;
  businessType: string;
  /** "YYYY-MM-DD", local time, or "" — see DateTimePicker. */
  preferredDate: string;
  preferredTime: string;
};

const empty: Fields = {
  fullName: "",
  whatsapp: "",
  businessName: "",
  businessType: "",
  preferredDate: "",
  preferredTime: "",
};

const fieldBase =
  "h-12 w-full rounded-btn border border-line-strong bg-white px-4 text-base text-charcoal placeholder:text-slate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";

export function LeadForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  function validate(v: Fields) {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!v.fullName.trim()) e.fullName = leadForm.errors.fullName;
    // Deliberately permissive: numbers arrive with country codes, spaces and dashes.
    if (v.whatsapp.replace(/\D/g, "").length < 8)
      e.whatsapp = leadForm.errors.whatsapp;
    if (!v.businessName.trim()) e.businessName = leadForm.errors.businessName;
    if (!v.businessType) e.businessType = leadForm.errors.businessType;
    if (!v.preferredDate) e.preferredDate = leadForm.errors.preferredDate;
    if (!v.preferredTime) e.preferredTime = leadForm.errors.preferredTime;
    return e;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (!LEAD_ENDPOINT) {
      // TODO BEFORE LAUNCH: set LEAD_ENDPOINT in lib/site.ts to deliver leads.
      console.warn(
        "[iSuite AI] Lead captured but not sent — LEAD_ENDPOINT is not set.",
        values,
      );
    }

    setSubmitted(true);
  }

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  // The last content section on the page, and the tallest. It does not need
  // the full 96px the rest of the page's rhythm uses.
  return (
    <Section
      bg="white"
      id="demo-form"
      padded={false}
      className="py-12 md:py-20"
    >
      {/* The heading keeps its own narrower measure — a centred sentence
          stretched across 920px is hard to read back. */}
      <div className="mx-auto max-w-[560px]">
        <h2 className="t-h2 text-center text-forest">{leadForm.heading}</h2>
        <p className="t-small mt-4 text-center text-slate">
          {leadForm.subhead}
        </p>
      </div>

      {/* TAKE THE WIDTH.
          At 480px this was a 1400px ribbon down the middle of an empty page.
          It now opens to 900px at md and 1100px at lg, and the details split
          into two sub-columns so the FOOT — consent and the button — drops
          into the space under them rather than adding its own 150px band
          below everything. That dead space is what was making the card tall:
          the calendar column is the tallest thing here, so anything that
          fits beside it is free. */}
      <div className="mx-auto max-w-[480px] md:max-w-[900px] lg:max-w-[1100px]">
        <div className="mt-6 rounded-card border border-line-strong bg-white p-6 md:mt-8 md:p-7">
          {submitted ? (
            <div role="status" aria-live="polite">
              <h3 className="t-h3 text-forest">{leadForm.success.heading}</h3>
              <p className="t-body mt-2 text-charcoal">
                {leadForm.success.body}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* THREE GRID CHILDREN, PLACED EXPLICITLY — details, picker, foot.

                  DOM order is the MOBILE order: fields, then the demo slot,
                  then the button. It used to be one "left half" holding the
                  fields and the button with the picker beside it, which read
                  correctly on desktop and wrongly on a phone, where the
                  column collapses: the button landed above the date and time
                  it was meant to submit.

                  From md the placement below puts it back — picker on the
                  right spanning both rows, foot under the fields on the left,
                  bottom-aligned with the picker's last line. */}
              <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                {/* ONE FIELD PER LINE.
                      They were two a side, which left this half two rows
                      shorter than the calendar and put a hole under the
                      button. Stacked, the four fields run to roughly the
                      calendar's own height, so both halves finish together
                      and the space fills itself.

                      Main Enquiry Channel used to make it five: it was the
                      one answer a rep gets free in the first half-minute of
                      the call, and the page itself says enquiries "arrive
                      from everywhere" — so a required pick-one contradicted
                      it. See lib/content.ts. */}
                <div className="space-y-5 md:col-start-1 md:row-start-1">
                  <Field
                    id="fullName"
                    label={leadForm.labels.fullName}
                    error={errors.fullName}
                  >
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      className={fieldBase}
                      value={values.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={
                        errors.fullName ? "fullName-error" : undefined
                      }
                    />
                  </Field>

                  <Field
                    id="whatsapp"
                    label={leadForm.labels.whatsapp}
                    error={errors.whatsapp}
                  >
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      className={fieldBase}
                      value={values.whatsapp}
                      onChange={(e) => update("whatsapp", e.target.value)}
                      aria-invalid={Boolean(errors.whatsapp)}
                      aria-describedby={
                        errors.whatsapp ? "whatsapp-error" : undefined
                      }
                    />
                  </Field>

                  <Field
                    id="businessName"
                    label={leadForm.labels.businessName}
                    error={errors.businessName}
                  >
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      autoComplete="organization"
                      className={fieldBase}
                      value={values.businessName}
                      onChange={(e) => update("businessName", e.target.value)}
                      aria-invalid={Boolean(errors.businessName)}
                      aria-describedby={
                        errors.businessName ? "businessName-error" : undefined
                      }
                    />
                  </Field>

                  <ChipChoice
                    name="businessType"
                    label={leadForm.labels.businessType}
                    options={leadForm.businessTypeOptions}
                    value={values.businessType}
                    error={errors.businessType}
                    onSelect={(v) => update("businessType", v)}
                  />
                </div>

                {/* ---- The demo slot: right column, both rows ---- */}
                <div className="md:col-start-2 md:row-span-2 md:row-start-1">
                  <DateTimePicker
                    date={values.preferredDate}
                    time={values.preferredTime}
                    onDate={(v) => update("preferredDate", v)}
                    onTime={(v) => update("preferredTime", v)}
                    dateError={errors.preferredDate}
                    timeError={errors.preferredTime}
                  />
                </div>

                {/* ---- Foot: consent and the button, across both columns ---- */}
                <div className="border-t border-line-strong/45 pt-6 md:col-start-1 md:row-start-2 md:self-end">
                  {/* Consent — legal wording pending review before publishing */}
                  {/* CTA #5 of 7 (§10). Capped rather than edge to edge —
                        an 1100px button reads as a banner, not something to
                        press. */}
                  <div className="mx-auto max-w-[420px]">
                    <Button type="submit" fullWidth>
                      {cta.primary}
                    </Button>
                  </div>

                  {/* The tick box is gone; the consent is not. Pressing the
                        button is the agreement, and the wording sits directly
                        under it rather than buried. NEEDS LEGAL REVIEW — see
                        leadForm.consentNote in lib/content.ts. */}
                  <p className="t-small mx-auto mt-4 max-w-[480px] text-center text-slate">
                    {leadForm.consentNote}
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

/**
 * A row of choice chips — one of several, like a radio group, because that is
 * exactly what it is.
 *
 * Real <input type="radio"> elements, visually hidden, with the chip drawn by
 * the label beside them. That is what makes arrow-key navigation, the grouped
 * <fieldset>/<legend> announcement and "one of these" semantics come for
 * free; a row of <button>s would need a hand-rolled roving tabindex and an
 * ARIA radiogroup to match it.
 *
 * Every chip clears 44px, and the chosen state is a fill rather than a border
 * alone — white on the primary measures 5.65:1, where a 1px ring change would
 * be the only signal and easy to miss on a phone.
 */
function ChipChoice({
  name,
  label,
  options,
  value,
  error,
  onSelect,
}: {
  name: string;
  label: string;
  options: readonly string[];
  value: string;
  error?: string;
  onSelect: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="t-small font-bold text-forest">{label}</legend>

      <div className="mt-1.5 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onSelect(option)}
              className="peer sr-only"
            />
            <span className="flex min-h-11 items-center rounded-full border border-line-strong px-3.5 text-[14px] font-semibold text-charcoal transition-colors duration-150 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest">
              {option}
            </span>
          </label>
        ))}
      </div>

      {error && <p className="t-small mt-2 text-forest">{error}</p>}
    </fieldset>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="t-small block font-bold text-forest">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} className="t-small mt-2 text-forest">
          {error}
        </p>
      )}
    </div>
  );
}
