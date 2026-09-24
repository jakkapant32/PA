"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/data/content";
import { IconExpand } from "./icons";
import { Lightbox } from "./Lightbox";

type PosterFrameProps = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  priority?: boolean;
};

export function PosterFrame({
  src,
  alt,
  title,
  caption,
  priority = false,
}: PosterFrameProps) {
  const [open, setOpen] = useState(false);
  const startIndex = galleryImages.findIndex((g) => g.src === src);
  const [index, setIndex] = useState(startIndex >= 0 ? startIndex : 0);

  const openLightbox = () => {
    setIndex(startIndex >= 0 ? startIndex : 0);
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className="group card w-full overflow-hidden text-left transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)]"
      >
        <div className="relative aspect-[16/10] bg-[var(--background)]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-2 transition duration-300 group-hover:scale-[1.01]"
            sizes="(max-width: 768px) 100vw, 70vw"
            priority={priority}
          />
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md border border-white/30 bg-[var(--primary)]/90 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
            <IconExpand size={18} />
            ขยายภาพ
          </span>
        </div>
        {(title || caption) && (
          <div className="border-t border-[var(--border)] px-5 py-4">
            {title && (
              <p className="text-[1.05rem] font-semibold text-[var(--primary)]">
                {title}
              </p>
            )}
            {caption && (
              <p className="mt-1 text-[0.9375rem] text-[var(--text-muted)]">
                {caption}
              </p>
            )}
          </div>
        )}
      </button>
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
