"use client";

import { useState } from "react";
import { challenge } from "@/data/content";
import { competencyIcons } from "./icons";

const styles: Record<string, string> = {
  rose: "from-rose-500/15 to-rose-50 border-rose-200 ring-rose-300/60",
  sky: "from-sky-500/15 to-sky-50 border-sky-200 ring-sky-300/60",
  emerald: "from-emerald-500/15 to-emerald-50 border-emerald-200 ring-emerald-300/60",
  amber: "from-amber-500/15 to-amber-50 border-amber-200 ring-amber-300/60",
};

export function CompetencyGrid() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {challenge.competencies.map((c, i) => {
          const Icon = competencyIcons[i];
          return (
            <button
              key={c.title}
              type="button"
              onClick={() => setActive(i)}
              className={`card border-l-4 bg-gradient-to-br p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${styles[c.color]} ${
                active === i ? "ring-2 ring-offset-2" : ""
              }`}
            >
              <span className="inline-flex rounded-lg border border-[var(--border)] bg-white/80 p-2.5 text-[var(--primary)]">
                <Icon size={22} />
              </span>
              <p className="mt-3 text-base font-semibold text-[var(--primary)]">
                {c.title}
              </p>
            </button>
          );
        })}
      </div>
      <div className="card mt-4 border-l-4 border-[var(--accent-gold)] bg-[var(--background)] p-5 animate-fade-in">
        <p className="text-base font-semibold text-[var(--primary)]">
          {challenge.competencies[active].title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
          {challenge.competencies[active].hint}
        </p>
      </div>
    </div>
  );
}
