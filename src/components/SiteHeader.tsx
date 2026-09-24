"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/content";
import { IconChevronDown } from "./icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md">
      <div className="site-container flex items-center justify-between gap-4 py-3">
        <Link href="/" className="min-w-0 shrink">
          <p className="truncate text-xs font-medium uppercase tracking-wider text-[var(--accent-gold)]">
            {site.collegeEn}
          </p>
          <p className="truncate text-[0.9375rem] font-semibold text-[var(--primary)] lg:text-base">
            {site.subtitle}
          </p>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="เมนูหลัก">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition-colors ${
                  active
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text-muted)] hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 text-base font-medium text-[var(--primary)] xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          เมนู
          <IconChevronDown
            size={18}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[var(--surface)] xl:hidden"
        >
          <ul className="site-container flex flex-col gap-1 py-4">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-3 text-base font-medium ${
                      active
                        ? "bg-[var(--primary)] text-white"
                        : "text-[var(--text-muted)] hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
