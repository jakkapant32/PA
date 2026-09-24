"use client";

import Link from "next/link";
import { challenge, site } from "@/data/content";
import { PosterFrame } from "./PosterFrame";

export function HeroSection() {
  return (
    <section className="hero-pattern relative overflow-hidden border-b border-[var(--primary-dark)] text-white">
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[var(--accent-gold)]/15 blur-3xl animate-float-delayed" />

      <div className="site-container py-14 md:py-16 lg:py-[4.5rem]">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="animate-fade-in">
            <p className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-[var(--accent-gold)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" />
              {site.presenter.document} · {site.college}
            </p>
            <h1 className="mt-4 text-[2rem] font-bold leading-tight md:text-[2.5rem] lg:text-[2.75rem]">
              {site.challengeTopic}
              <span className="mt-2 block text-xl font-semibold text-white/95 md:text-[1.35rem]">
                {site.title}
              </span>
            </h1>
            <p className="mt-3 text-[1.5rem] font-bold text-[var(--accent-gold)] md:text-[1.75rem]">
              {site.subtitle}
            </p>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/90 md:text-[1.125rem]">
              {challenge.purpose}
            </p>
            <p className="mt-4 text-[0.95rem] text-white/75">{site.course}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/model"
                className="rounded-md bg-[var(--accent-gold)] px-5 py-2.5 text-[0.95rem] font-semibold text-[var(--primary-dark)] transition hover:brightness-110"
              >
                ดูแนวคิด KVC-STEM PBL
              </Link>
              <Link
                href="/slides"
                className="rounded-md border border-white/40 px-5 py-2.5 text-[0.95rem] font-semibold text-white transition hover:bg-white/10"
              >
                เปิดสไลด์ HD
              </Link>
            </div>
          </div>

          <div
            className="animate-fade-in lg:justify-self-stretch"
            style={{ animationDelay: "200ms" }}
          >
            <PosterFrame
              src="/images/hero.jpg"
              alt={`${site.challengeTopic} — ${site.subtitle}`}
              title={site.presenter.title}
              caption={`${site.presenter.name} · ${site.presenter.org}`}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
