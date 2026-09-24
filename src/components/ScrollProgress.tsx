"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setPct(scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-r from-[var(--accent-gold)] to-cyan-400 transition-[width] duration-150"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
