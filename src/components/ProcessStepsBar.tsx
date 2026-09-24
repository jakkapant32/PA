"use client";

import { portfolio } from "@/data/content";
import { IconChevronRight } from "./icons";

export function ProcessStepsBar() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 md:gap-3">
      {portfolio.studentProcess.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-md bg-[var(--primary)] px-2.5 py-1 text-sm font-medium text-white">
            {step}
          </span>
          {i < portfolio.studentProcess.length - 1 && (
            <IconChevronRight size={18} className="text-[var(--text-muted)]" />
          )}
        </span>
      ))}
    </div>
  );
}
