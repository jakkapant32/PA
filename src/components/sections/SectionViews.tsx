import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { CompetencyGrid } from "@/components/CompetencyGrid";
import { ProblemAccordion } from "@/components/ProblemAccordion";
import { PillarTabs } from "@/components/PillarTabs";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { AssessmentExplorer } from "@/components/AssessmentExplorer";
import { SlideGallery } from "@/components/SlideGallery";
import { PortfolioCards } from "@/components/PortfolioCards";
import { PosterFrame } from "@/components/PosterFrame";
import { ProcessStepsBar } from "@/components/ProcessStepsBar";
import {
  assessment,
  background,
  challenge,
  outcomes,
  portfolio,
  problems,
  process,
  site,
} from "@/data/content";

export function ChallengeSection() {
  return (
    <section className="site-section">
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            id="challenge-heading"
            eyebrow={site.challengeTopic}
            title="สมรรถนะที่มุ่งพัฒนา"
            description={challenge.motto}
          />
          <CompetencyGrid />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[0.9375rem] font-medium text-[var(--text-muted)]">
            <span>STEM — วิทยาศาสตร์ · เทคโนโลยี · วิศวกรรม · คณิตศาสตร์</span>
            <span className="hidden h-5 w-px bg-[var(--border)] sm:block" />
            <span>PBL — Project-Based Learning</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function ProblemsSection() {
  return (
    <section className="site-section bg-[var(--surface)]">
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            id="problems-heading"
            eyebrow="วิเคราะห์สถานการณ์"
            title="ปัญหาที่พบ"
            description={`${site.course} · ${problems.intro}`}
          />
        </FadeIn>
        <FadeIn delay={100}>
          <div className="mt-10 grid gap-10 xl:grid-cols-2 xl:items-start">
            <PosterFrame
              src="/images/problems.jpg"
              alt="ปัญหาที่พบจากการจัดการเรียนรู้"
              title="สไลด์ปัญหาที่พบ (HD)"
              caption="คลิกเพื่อขยายเต็มจอ"
            />
            <div className="mt-8 xl:mt-0">
              <ProblemAccordion />
            </div>
          </div>
          <blockquote className="card mt-8 border-l-4 border-[var(--accent-gold)] bg-[var(--background)] p-6 text-base leading-relaxed">
            {problems.summary}
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

export function ModelSection() {
  return (
    <section className="site-section">
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            id="model-heading"
            eyebrow="ความเป็นมา / หลักการและเหตุผล"
            title="KVC-STEM PBL Model"
            description={site.course}
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {background.sections.map((s) => (
              <article
                key={s.title}
                className="card p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-[var(--primary)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
          <PillarTabs />
        </FadeIn>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="site-section bg-[var(--surface)]">
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            id="process-heading"
            eyebrow="วิธีการหรือแนวทางในการแก้ไขปัญหา"
            title="การจัดการเรียนรู้ KVC-STEM PBL"
            description={process.unit}
          />
          <div className="mt-10">
            <PosterFrame
              src="/images/process.jpg"
              alt="ขั้นตอน KVC-STEM PBL Model"
              title="แผนภาพขั้นตอนการเรียนรู้ (HD)"
              caption="Connect · Explore · Analyze · Design · Create · Improve · Communicate"
            />
          </div>
          <ProcessTimeline />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="card p-6">
              <h3 className="font-bold text-[var(--primary)]">บทบาทครู</h3>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[var(--text-muted)]">
                {process.teacherRole.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-[var(--primary)]">บทบาทผู้เรียน</h3>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[var(--text-muted)]">
                {process.studentRole.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-sm font-medium text-[var(--primary)]">
            {process.workflow}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section className="site-section">
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            id="outcomes-heading"
            eyebrow="ผลลัพธ์การจัดการเรียนรู้"
            title="ผลลัพธ์ที่เกิดกับนักเรียน / นักศึกษา"
          />
          <div className="mt-10">
            <PosterFrame
              src="/images/outcomes.jpg"
              alt="ผลลัพธ์ที่เกิดกับนักศึกษา"
              title="สไลด์ผลลัพธ์ (HD)"
            />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {outcomes.pillars.map((p) => (
              <article
                key={p.title}
                className="card p-6 transition hover:border-[var(--accent-gold)] hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-[var(--primary)]">
                  {p.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-[var(--accent-gold)] pl-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="card mt-8 p-6">
            <h3 className="font-bold text-[var(--primary)]">
              หลักฐานเชิงประจักษ์ที่ตรวจสอบได้
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {outcomes.evidence.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function AssessmentSection() {
  return (
    <section className="site-section bg-[var(--surface)]">
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            id="assessment-heading"
            eyebrow="การวัดและการประเมินผล"
            title="กรอบการประเมินสอดคล้อง KVC-STEM PBL"
            description={assessment.intro}
          />
          <p className="mt-4 text-center text-base italic text-[var(--primary)]">
            “{assessment.quote}”
          </p>
          <div className="mt-10">
            <PosterFrame
              src="/images/assessment.jpg"
              alt="การวัดและการประเมินผล"
              title="สไลด์การประเมินผล (HD)"
            />
          </div>
          <AssessmentExplorer />
        </FadeIn>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section className="site-section">
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            id="portfolio-heading"
            eyebrow="ผลงานนักเรียน / นักศึกษา"
            title="ตัวอย่างผลงานจาก KVC-STEM PBL"
            description={portfolio.intro}
          />
          <PortfolioCards />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="card p-6">
              <h3 className="font-bold text-[var(--primary)]">
                กระบวนการทำงานของนักศึกษา
              </h3>
              <ProcessStepsBar />
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-[var(--primary)]">
                ผลที่เกิดกับผู้เรียน
              </h3>
              <ul className="mt-4 grid gap-2 text-sm text-[var(--text-muted)] sm:grid-cols-2">
                {portfolio.learnerOutcomes.map((o) => (
                  <li
                    key={o}
                    className="border-l-2 border-[var(--primary)]/30 pl-3"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <blockquote className="card mt-8 border-l-4 border-[var(--primary)] p-6 text-base leading-relaxed">
            {portfolio.closing}
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

export function SlidesSection() {
  return (
    <section className="site-section bg-[var(--surface)]">
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            id="slides-heading"
            eyebrow="เอกสารต้นฉบับ"
            title="สไลด์นำเสนอ (PA 69)"
            description="ภาพ HD จากโฟลเดอร์ 1image — คลิกเพื่อขยายเต็มจอ"
          />
          <SlideGallery />
        </FadeIn>
      </div>
    </section>
  );
}
