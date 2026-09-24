"use client";

import { useState } from "react";
import { problems } from "@/data/content";
import { IconChevronDown } from "./icons";

const accents = [
  "border-l-rose-500",
  "border-l-sky-500",
  "border-l-emerald-500",
  "border-l-amber-500",
  "border-l-violet-500",
];

export function ProblemAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <ol className="space-y-4">
      {problems.items.map((item, i) => {
        const expanded = open === i;
        return (
          <li key={item.n}>
            <button
              type="button"
              onClick={() => setOpen(expanded ? 0 : i)}
              className={`card flex w-full gap-4 border-l-4 p-5 text-left transition hover:shadow-md md:p-6 ${accents[i]} ${
                expanded ? "ring-1 ring-[var(--primary)]/15" : ""
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-white">
                {item.n}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug text-[var(--primary)]">
                    {item.title}
                  </h3>
                  <IconChevronDown
                    size={22}
                    className={`mt-1 shrink-0 text-[var(--accent-gold)] transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expanded && (
                  <p className="mt-2 animate-fade-in text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                )}
              </div>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
