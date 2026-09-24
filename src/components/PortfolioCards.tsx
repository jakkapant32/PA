"use client";

import { useState } from "react";
import { portfolio } from "@/data/content";
import { IconCheck } from "./icons";

export function PortfolioCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {portfolio.projects.map((project, i) => (
        <article
          key={project.title}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className={`card p-6 transition-all duration-300 ${
            hovered === i
              ? "-translate-y-1 border-[var(--accent-gold)] shadow-lg"
              : hovered !== null
                ? "opacity-85"
                : ""
          }`}
        >
          <h3 className="text-lg font-bold text-[var(--primary)]">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-[var(--accent-gold)]">
            {project.tagline}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
            {project.points.map((pt, j) => (
              <li
                key={pt}
                className="flex gap-3 transition-all duration-300"
                style={{
                  transitionDelay: hovered === i ? `${j * 40}ms` : "0ms",
                }}
              >
                <IconCheck
                  size={20}
                  className="mt-1 shrink-0 text-[var(--primary)]"
                />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
