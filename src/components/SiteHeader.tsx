"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  navPresentation,
  navPresentationMenuLabel,
  navPrimary,
  site,
} from "@/data/content";
import { IconChevronDown } from "./icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkClass = (active: boolean) =>
  `rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition-colors ${
    active
      ? "bg-[var(--primary)] text-white"
      : "text-[var(--text-muted)] hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
  }`;

const mobileLinkClass = (active: boolean) =>
  `block rounded-md px-3 py-3 text-base font-medium ${
    active
      ? "bg-[var(--primary)] text-white"
      : "text-[var(--text-muted)] hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
  }`;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobilePresentationOpen, setMobilePresentationOpen] = useState(true);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const home = navPrimary[0];
  const slides = navPrimary[1];
  const presentationActive = navPresentation.some((item) =>
    isActive(pathname, item.href),
  );

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!dropdownOpen) return;

    const onPointerDown = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [dropdownOpen]);

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

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="เมนูหลัก"
        >
          <Link
            href={home.href}
            className={linkClass(isActive(pathname, home.href))}
          >
            {home.label}
          </Link>

          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition-colors ${
                presentationActive || dropdownOpen
                  ? "bg-[var(--primary)] text-white"
                  : "text-[var(--text-muted)] hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
              }`}
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
              aria-controls="presentation-nav-menu"
              onClick={() => setDropdownOpen((v) => !v)}
            >
              {navPresentationMenuLabel}
              <IconChevronDown
                size={16}
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <ul
                id="presentation-nav-menu"
                role="menu"
                className="absolute left-0 top-full z-50 mt-1 min-w-[15.5rem] rounded-lg border border-[var(--border)] bg-[var(--surface)] py-1.5 shadow-lg"
              >
                {navPresentation.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href} role="none">
                      <Link
                        href={item.href}
                        role="menuitem"
                        className={`block px-4 py-2.5 text-[0.8125rem] font-medium transition-colors ${
                          active
                            ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                            : "text-[var(--text-muted)] hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
                        }`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <Link
            href={slides.href}
            className={linkClass(isActive(pathname, slides.href))}
          >
            {slides.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 text-base font-medium text-[var(--primary)] lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          เมนู
          <IconChevronDown
            size={18}
            className={`transition-transform ${mobileOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[var(--surface)] lg:hidden"
        >
          <ul className="site-container flex flex-col gap-1 py-4">
            <li>
              <Link
                href={home.href}
                className={mobileLinkClass(isActive(pathname, home.href))}
                onClick={() => setMobileOpen(false)}
              >
                {home.label}
              </Link>
            </li>

            <li className="pt-1">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold uppercase tracking-wide text-[var(--accent-gold)]"
                aria-expanded={mobilePresentationOpen}
                onClick={() => setMobilePresentationOpen((v) => !v)}
              >
                {navPresentationMenuLabel}
                <IconChevronDown
                  size={18}
                  className={`transition-transform ${mobilePresentationOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobilePresentationOpen && (
                <ul className="mt-1 flex flex-col gap-0.5 border-l-2 border-[var(--border)] pl-2">
                  {navPresentation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`${mobileLinkClass(isActive(pathname, item.href))} py-2.5 text-[0.9375rem]`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href={slides.href}
                className={mobileLinkClass(isActive(pathname, slides.href))}
                onClick={() => setMobileOpen(false)}
              >
                {slides.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
