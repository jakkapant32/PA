import { site } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--primary)] text-white">
      <div className="site-container py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-lg font-semibold">{site.college}</p>
            <p className="mt-1 text-sm text-white/80">{site.collegeEn}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              {site.course}
              <br />
              {site.courseLevel}
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-medium text-[var(--accent-gold)]">
              {site.presenter.document}
            </p>
            <p className="mt-2 text-lg font-semibold">{site.presenter.name}</p>
            <p className="text-sm text-white/85">{site.presenter.title}</p>
            <p className="text-sm text-white/85">{site.presenter.org}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/80">
          <p>{site.slogan}</p>
          <p className="mt-2 font-medium text-white/95">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
