"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages, presentationSlides } from "@/data/content";
import { IconExpand } from "./icons";
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
          สไลด์ 9 หน้า (เรียงตามชื่อไฟล์ 01.jpg – 09)
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {presentationSlides.map((slide) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => openAt(slide.src)}
              className="group card overflow-hidden text-left transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] bg-[var(--background)]">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-contain p-2 transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={slide.page <= 2}
                />
                <span className="absolute left-4 top-4 rounded-md bg-[var(--primary)] px-2.5 py-1 text-xs font-bold text-white">
                  {String(slide.page).padStart(2, "0")}
                </span>
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md bg-black/70 px-3 py-1.5 text-sm text-white opacity-0 transition group-hover:opacity-100">
                  <IconExpand size={16} />
                  ขยาย
                </span>
              </div>
              <div className="border-t border-[var(--border)] px-5 py-4">
                <p className="text-base font-semibold text-[var(--primary)]">
                  {slide.title}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {slide.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

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
