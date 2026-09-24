"use client";

import { useState } from "react";
import { background } from "@/data/content";

const tabColors = [
  "bg-[var(--primary)]",
  "bg-emerald-600",
  "bg-amber-500",
  "bg-violet-600",
];

export function PillarTabs() {
  const [tab, setTab] = useState(0);
  const p = background.pillars[tab];

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        {background.pillars.map((pillar, i) => (
          <button
            key={pillar.code}
            type="button"
            onClick={() => setTab(i)}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              tab === i
                ? `${tabColors[i]} text-white shadow-md`
                : "border border-[var(--border)] bg-white text-[var(--primary)] hover:bg-[var(--background)]"
            }`}
          >
            {pillar.code} — {pillar.name.split(" ")[0]}
          </button>
        ))}
      </div>
      <article className="card mt-4 border-l-4 border-[var(--accent-gold)] p-6 animate-fade-in">
        <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent-gold)]">
          {p.code}
        </p>
        <h3 className="mt-1 text-xl font-bold text-[var(--primary)]">
          {p.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
          {p.detail}
        </p>
        <p className="mt-4 inline-block rounded-full bg-[var(--background)] px-3 py-1 text-xs font-medium text-[var(--primary)]">
          {p.tags}
        </p>
      </article>
    </div>
  );
}
