"use client";

import { useState } from "react";
import { assessment } from "@/data/content";
import { IconChevronRight } from "./icons";

export function AssessmentExplorer() {
  const [row, setRow] = useState(0);
  const current = assessment.rows[row];

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2.5">
        {assessment.rows.map((r, i) => (
          <button
            key={r.aspect}
            type="button"
            onClick={() => setRow(i)}
            className={`rounded-lg px-3 py-2 text-xs font-medium transition-all sm:text-sm ${
              row === i
                ? "bg-[var(--primary)] text-white shadow-md"
                : "border border-[var(--border)] bg-white text-[var(--text-muted)] hover:border-[var(--primary)]/30"
            }`}
          >
            {i + 1}. {r.aspect}
          </button>
        ))}
      </div>

      <div className="card mt-4 grid gap-4 p-6 md:grid-cols-2 animate-fade-in">
        <div>
          <p className="text-xs font-semibold uppercase text-[var(--accent-gold)]">
            ด้านที่ประเมิน
          </p>
          <p className="mt-1 text-lg font-bold text-[var(--primary)]">
            {current.aspect}
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-semibold text-[var(--primary)]">เครื่องมือ: </span>
            <span className="text-[var(--text-muted)]">{current.tool}</span>
          </div>
          <div>
            <span className="font-semibold text-[var(--primary)]">วิธีประเมิน: </span>
            <span className="text-[var(--text-muted)]">{current.method}</span>
          </div>
          <div>
            <span className="font-semibold text-[var(--primary)]">ผลที่ต้องการ: </span>
            <span className="text-[var(--text-muted)]">{current.outcome}</span>
          </div>
        </div>
      </div>

      <details className="card mt-4 group">
        <summary className="cursor-pointer list-none px-5 py-4 text-base font-semibold text-[var(--primary)] marker:content-none md:text-lg">
          <span className="inline-flex items-center gap-2">
            <IconChevronRight
              size={20}
              className="transition group-open:rotate-90"
            />
            ดูตารางประเมินฉบับเต็ม
          </span>
        </summary>
        <div className="overflow-x-auto border-t border-[var(--border)]">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[var(--primary)] text-white">
                <th className="px-4 py-3 font-semibold">ด้านที่ประเมิน</th>
                <th className="px-4 py-3 font-semibold">เครื่องมือ</th>
                <th className="px-4 py-3 font-semibold">วิธีประเมิน</th>
                <th className="px-4 py-3 font-semibold">หลักฐาน / ผลที่ต้องการ</th>
              </tr>
            </thead>
            <tbody>
              {assessment.rows.map((r, i) => (
                <tr
                  key={r.aspect}
                  className={`cursor-pointer ${
                    i === row ? "bg-amber-50" : i % 2 === 0 ? "bg-white" : "bg-[var(--background)]"
                  }`}
                  onClick={() => setRow(i)}
                >
                  <td className="border-t border-[var(--border)] px-4 py-3 font-medium text-[var(--primary)]">
                    {r.aspect}
                  </td>
                  <td className="border-t border-[var(--border)] px-4 py-3 text-[var(--text-muted)]">
                    {r.tool}
                  </td>
                  <td className="border-t border-[var(--border)] px-4 py-3 text-[var(--text-muted)]">
                    {r.method}
                  </td>
                  <td className="border-t border-[var(--border)] px-4 py-3 text-[var(--text-muted)]">
                    {r.outcome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
