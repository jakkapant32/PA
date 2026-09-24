"use client";

import { useState } from "react";
import { process } from "@/data/content";
import { IconChevronLeft, IconChevronRight } from "./icons";

const stepColors = [
  "bg-fuchsia-500",
  "bg-orange-500",
  "bg-amber-400",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-cyan-500",
  "bg-rose-500",
];

export function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const step = process.steps[active];

  return (
    <div className="mt-8">
      <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory">
        {process.steps.map((s, i) => (
          <button
            key={s.n}
            type="button"
            onClick={() => setActive(i)}
            className={`snap-start min-w-[9.5rem] shrink-0 rounded-xl border px-4 py-3 text-left transition-all duration-300 md:min-w-[10.5rem] ${
              active === i
                ? "scale-[1.03] border-[var(--primary)] bg-[var(--primary)] text-white shadow-lg"
                : "border-[var(--border)] bg-white hover:border-[var(--primary)]/40"
            }`}
          >
            <span
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ${
                active === i ? "bg-white/20" : stepColors[i]
              }`}
            >
              {s.n}
            </span>
            <p
              className={`mt-3 text-xs font-semibold uppercase tracking-wider ${
                active === i ? "text-[var(--accent-gold)]" : "text-[var(--text-muted)]"
              }`}
            >
              {s.en}
            </p>
            <p
              className={`mt-1 text-base font-medium leading-snug ${
                active === i ? "text-white" : "text-[var(--primary)]"
              }`}
            >
              {s.th}
            </p>
          </button>
        ))}
      </div>

      <div className="card mt-6 overflow-hidden border-l-4 border-[var(--accent-gold)] p-6 animate-fade-in">
        <span
          className={`inline-block rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${stepColors[active]}`}
        >
          ขั้นที่ {step.n} · {step.en}
        </span>
        <h3 className="mt-3 text-xl font-bold text-[var(--primary)]">{step.th}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
          {step.detail}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={active === 0}
            onClick={() => setActive((a) => a - 1)}
            className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-1.5 text-sm disabled:opacity-40"
          >
            <IconChevronLeft size={20} />
            ก่อนหน้า
          </button>
          <button
            type="button"
            disabled={active === process.steps.length - 1}
            onClick={() => setActive((a) => a + 1)}
            className="inline-flex items-center gap-2 rounded-md bg-[var(--primary)] px-3 py-1.5 text-sm text-white disabled:opacity-40"
          >
            ถัดไป
            <IconChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
