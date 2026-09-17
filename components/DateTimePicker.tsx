"use client";

import { useEffect, useMemo, useState } from "react";
import { leadForm } from "@/lib/content";

/* ==========================================================================
   DATE + TIME PICKER — the demo slot on the lead form (§7.12)
   --------------------------------------------------------------------------
   A real month calendar and a real list of times, not a native date input:
   the native picker looks different on every phone and cannot grey out the
   days this business does not work.

   IT RENDERS EMPTY UNTIL IT MOUNTS, AND THAT IS DELIBERATE.

   This page is statically prerendered, so anything the component works out
   while rendering — above all `new Date()` — is frozen into the HTML at BUILD
   time. A calendar built that way would show the build month for as long as
   the page is deployed, and would disagree with the browser the moment it
   hydrated. So `today` is read in an effect, after mount, and until then the
   grid renders its full frame with every cell blank. The frame is the same
   height either way, so nothing jumps when the dates arrive.

   WHAT IT IS NOT. It does not hold a slot and it cannot see a real calendar.
   It captures a PREFERENCE that travels with the lead, and the note beneath
   says the team will confirm on WhatsApp. Do not let this grow into language
   that promises a booked time.

   IT OPENS ON THE FIRST AVAILABLE DAY. Nothing was selected until someone
   clicked, so the time list sat behind "Choose a date to see the times" and
   today's slots were never visible. The calendar now selects the earliest
   day it would accept — today while today still has an hour's notice left on
   it, otherwise the next open day — so the times are there on arrival. The
   time itself is deliberately left blank: the day is a sensible default, the
   hour is a choice.

   BOTH FIELDS ARE REQUIRED, by decision. The form validates them like any
   other field and the errors render beside the label. Flagged once and not
   repeated: on paid traffic these are the only two fields a visitor cannot
   answer without thinking, so if submissions drop this is the first thing to
   loosen.
   ========================================================================== */

const P = leadForm.picker;

/* --- Local-time helpers. Never UTC: `new Date("2026-09-22")` parses as UTC
       midnight and lands on the 21st for anyone west of Greenwich. --------- */

const startOfDay = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());

const addDays = (d: Date, n: number) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

/** "2026-09-22" — what gets submitted, built by hand to stay in local time. */
const toKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;

const fromKey = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const sameDay = (a: Date, b: Date) => toKey(a) === toKey(b);

/** "Tuesday, 22 September" — for the aria-label on each day and the summary. */
const readable = (d: Date) =>
  `${P.weekdays[(d.getDay() + 6) % 7]}, ${d.getDate()} ${P.months[d.getMonth()]}`;

/**
 * The cells of one month, Monday first, padded to whole weeks so the grid is
 * always a clean rectangle and the rows below it never shift.
 */
function monthCells(year: number, month: number): (Date | null)[] {
  const lead = (new Date(year, month, 1).getDay() + 6) % 7;
  const length = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = Array(lead).fill(null);
  for (let d = 1; d <= length; d += 1) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

const Chevron = ({ back = false }: { back?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`h-4 w-4 ${back ? "rotate-180" : ""}`}
  >
    <path d="m9.5 5.5 7 6.5-7 6.5" />
  </svg>
);

export function DateTimePicker({
  date,
  time,
  onDate,
  onTime,
  dateError,
  timeError,
  idPrefix = "picker",
}: {
  /** "YYYY-MM-DD", or "" for nothing chosen. */
  date: string;
  /** A label from `picker.times`, or "". */
  time: string;
  onDate: (value: string) => void;
  onTime: (value: string) => void;
  dateError?: string;
  timeError?: string;
  /** Namespaces this instance's ids — the page renders two forms. */
  idPrefix?: string;
}) {
  /* `null` until mounted — see the header. Everything downstream keys off it. */
  const [now, setNow] = useState<Date | null>(null);
  const [view, setView] = useState<{ year: number; month: number } | null>(
    null,
  );

  useEffect(() => {
    const d = new Date();
    setNow(d);
    setView({ year: d.getFullYear(), month: d.getMonth() });
  }, []);

  /**
   * The first day that can still be asked for.
   *
   * Today counts only while an hour's notice before its LAST time is still
   * possible; past that the calendar opens on tomorrow, and it walks forward
   * over any closed weekday so the first selectable day is never a greyed one.
   */
  const earliest = useMemo(() => {
    if (!now) return null;
    /* The LATEST slot, not the last one listed — so reordering `picker.times`
       in the content file can never quietly cut today off early. */
    const latestMinutes = Math.max(
      ...P.times.map((t) => t.hour * 60 + t.minute),
    );
    const lastToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      Math.floor(latestMinutes / 60),
      latestMinutes % 60,
    );
    let d =
      now.getTime() + 60 * 60 * 1000 <= lastToday.getTime()
        ? startOfDay(now)
        : addDays(startOfDay(now), 1);
    while ((P.closedWeekdays as readonly number[]).includes(d.getDay()))
      d = addDays(d, 1);
    return d;
  }, [now]);

  const latest = useMemo(
    () => (now ? addDays(startOfDay(now), P.daysAhead) : null),
    [now],
  );

  useEffect(() => {
    if (!earliest || date) return;
    onDate(toKey(earliest));
  }, [earliest, date, onDate]);

  const selected = date ? fromKey(date) : null;

  const closed = (d: Date) =>
    (P.closedWeekdays as readonly number[]).includes(d.getDay());

  const unavailable = (d: Date) =>
    !earliest || !latest || d < earliest || d > latest || closed(d);

  /* Month paging stops at the ends of the window rather than letting someone
     leaf through a year of days none of which can be chosen. */
  const canGoBack =
    view && earliest
      ? view.year * 12 + view.month >
        earliest.getFullYear() * 12 + earliest.getMonth()
      : false;

  const canGoForward =
    view && latest
      ? view.year * 12 + view.month <
        latest.getFullYear() * 12 + latest.getMonth()
      : false;

  const step = (delta: number) =>
    setView((v) => {
      if (!v) return v;
      const d = new Date(v.year, v.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });

  const cells = view ? monthCells(view.year, view.month) : Array(42).fill(null);

  /**
   * A time is gone only when the chosen day is today and it has less than an
   * hour left on it. Every other day offers the full list.
   */
  const timeGone = (slot: (typeof P.times)[number]) => {
    if (!now || !selected || !sameDay(selected, now)) return false;
    const at = new Date(
      selected.getFullYear(),
      selected.getMonth(),
      selected.getDate(),
      slot.hour,
      slot.minute,
    );
    return at.getTime() - now.getTime() < 60 * 60 * 1000;
  };

  const everyTimeGone = Boolean(selected) && P.times.every(timeGone);

  return (
    <div className="space-y-4">
      {/* ---------------- Date ---------------- */}
      <div role="group" aria-labelledby={`${idPrefix}-date-label`}>
        <span
          id={`${idPrefix}-date-label`}
          className="t-small font-bold text-forest"
        >
          {P.dateLabel}
        </span>

        <div className="-mx-2 mt-1.5 rounded-card border border-line-strong p-1.5 sm:mx-0 sm:p-2">
          {/* Month bar */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => step(-1)}
              disabled={!canGoBack}
              aria-label={P.prevMonthLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors hover:bg-offwhite disabled:pointer-events-none disabled:text-slate/35 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-forest"
            >
              <Chevron back />
            </button>

            {/* Polite, so a screen reader hears the month change but is not
                interrupted mid-sentence by it. */}
            <span
              aria-live="polite"
              className="text-[15px] font-extrabold text-forest"
            >
              {view ? `${P.months[view.month]} ${view.year}` : " "}
            </span>

            <button
              type="button"
              onClick={() => step(1)}
              disabled={!canGoForward}
              aria-label={P.nextMonthLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors hover:bg-offwhite disabled:pointer-events-none disabled:text-slate/35 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-forest"
            >
              <Chevron />
            </button>
          </div>

          {/* Weekday heads. aria-hidden because every day button already
              carries its full weekday in its own label. */}
          <div
            aria-hidden="true"
            className="mt-1 grid grid-cols-7 text-center text-[11px] font-bold tracking-wide text-slate uppercase"
          >
            {P.weekdayInitials.map((letter, i) => (
              <span key={i} className="py-1">
                {letter}
              </span>
            ))}
          </div>

          {/* Days. gap-0 on purpose: at 375px the card gives each column about
              42px, and a gap would take that under a comfortable tap. */}
          <div className="grid grid-cols-7">
            {cells.map((day, i) => {
              if (!day) return <span key={i} className="h-11" />;

              const off = unavailable(day);
              const isSelected = Boolean(selected && sameDay(selected, day));
              const isToday = Boolean(now && sameDay(now, day));

              return (
                <button
                  key={i}
                  type="button"
                  disabled={off}
                  aria-pressed={isSelected}
                  aria-label={readable(day)}
                  onClick={() => {
                    onDate(toKey(day));
                    onTime("");
                  }}
                  className={`flex h-11 items-center justify-center rounded-[10px] text-[15px] transition-colors duration-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-forest ${
                    isSelected
                      ? "bg-primary font-extrabold text-white"
                      : off
                        ? "cursor-not-allowed font-medium text-slate/35"
                        : isToday
                          ? "font-extrabold text-primary ring-1 ring-primary ring-inset hover:bg-offwhite"
                          : "font-semibold text-charcoal hover:bg-offwhite"
                  }`}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        {dateError && <p className="t-small mt-2 text-forest">{dateError}</p>}
      </div>

      {/* ---------------- Time ---------------- */}
      <fieldset>
        <legend className="t-small font-bold text-forest">{P.timeLabel}</legend>

        {!date ? (
          <p className="t-small mt-2 text-slate">{P.pickDateFirst}</p>
        ) : everyTimeGone ? (
          <p className="t-small mt-2 text-slate">{P.noTimesToday}</p>
        ) : (
          <div className="mt-2 grid grid-cols-3 gap-2">
            {P.times.map((slot) => {
              const gone = timeGone(slot);
              return (
                <label
                  key={slot.label}
                  className={gone ? "cursor-not-allowed" : "cursor-pointer"}
                >
                  {/* A real radio, visually hidden. That is what makes arrow
                      keys, the fieldset grouping and "one of these" semantics
                      work without a hand-rolled ARIA radiogroup. */}
                  <input
                    type="radio"
                    name="preferredTime"
                    value={slot.label}
                    checked={time === slot.label}
                    disabled={gone}
                    onChange={() => onTime(slot.label)}
                    className="peer sr-only"
                  />
                  <span
                    className={`flex min-h-11 items-center justify-center rounded-full border px-2 text-[14px] font-semibold transition-colors duration-150 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest ${
                      gone
                        ? "border-line-strong/45 text-slate/35"
                        : "border-line-strong text-charcoal peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    }`}
                  >
                    {slot.label}
                  </span>
                </label>
              );
            })}
          </div>
        )}
        {timeError && <p className="t-small mt-2 text-forest">{timeError}</p>}
      </fieldset>

      {/* Reads back what was chosen, and says plainly that it is not booked. */}
      <p className="t-small text-slate">
        {selected && time ? (
          <>
            <span className="font-semibold text-charcoal">
              {readable(selected)}, {time}.
            </span>{" "}
            {P.note}
          </>
        ) : (
          P.note
        )}
      </p>
    </div>
  );
}
