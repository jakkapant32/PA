"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages, hdPosters, slides } from "@/data/content";
import { IconChevronRight, IconExpand } from "./icons";
import { Lightbox } from "./Lightbox";

function indexOfSrc(src: string) {
  const i = galleryImages.findIndex((g) => g.src === src);
  return i >= 0 ? i : 0;
}

export function SlideGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (src: string) => {
    setIndex(indexOfSrc(src));
    setOpen(true);
  };

  return (
    <>
      <div className="mt-8">
        <p className="mb-4 text-sm font-semibold text-[var(--primary)]">
          ภาพความคมชัดสูง (แนะนำ)
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {hdPosters.map((poster, i) => (
            <button
              key={poster.src}
              type="button"
              onClick={() => openAt(poster.src)}
              className="group card overflow-hidden text-left transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] bg-[var(--background)]">
                <Image
                  src={poster.src}
                  alt={poster.title}
                  fill
                  className="object-contain p-2 transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1280px) 100vw, 45vw"
                  priority={i < 2}
                />
                <span className="absolute left-4 top-4 rounded-md border border-white/30 bg-[var(--primary)] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  HD
                </span>
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md bg-black/70 px-3 py-1.5 text-sm text-white opacity-0 transition group-hover:opacity-100">
                  <IconExpand size={16} />
                  ขยาย
                </span>
              </div>
              <div className="border-t border-[var(--border)] px-5 py-4">
                <p className="text-base font-semibold text-[var(--primary)] md:text-lg">
                  {poster.title}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)] md:text-base">
                  {poster.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <details className="card mt-10 group">
        <summary className="flex cursor-pointer list-none items-center gap-2 px-5 py-4 text-base font-semibold text-[var(--primary)] marker:content-none md:text-lg">
          <IconChevronRight
            size={20}
            className="transition group-open:rotate-90"
          />
          ดูสไลด์ครบ 9 หน้า (จาก PDF)
        </summary>
        <div className="grid gap-5 border-t border-[var(--border)] p-5 sm:grid-cols-2 lg:grid-cols-3">
          {slides.map((slide) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => openAt(slide.src)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] hover:ring-2 hover:ring-[var(--accent-gold)]"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain p-2"
                sizes="280px"
              />
              <span className="absolute bottom-2 right-2 rounded bg-black/65 px-2 py-0.5 text-xs text-white">
                {slide.caption}
              </span>
            </button>
          ))}
        </div>
      </details>

      <Lightbox
        items={galleryImages}
        index={index}
        open={open}
        onClose={() => setOpen(false)}
        onIndexChange={setIndex}
      />
    </>
  );
}
