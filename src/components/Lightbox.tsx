"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { GalleryImage } from "@/data/content";
import { IconChevronLeft, IconChevronRight } from "./icons";

type LightboxProps = {
  items: GalleryImage[];
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({
  items,
  index,
  open,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  const current = items[index];
  const hasMultiple = items.length > 1;
  const canPrev = hasMultiple && index > 0;
  const canNext = hasMultiple && index < items.length - 1;

  const goPrev = useCallback(() => {
    if (canPrev) onIndexChange(index - 1);
  }, [canPrev, index, onIndexChange]);

  const goNext = useCallback(() => {
    if (canNext) onIndexChange(index + 1);
  }, [canNext, index, onIndexChange]);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [onClose, goPrev, goNext],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onKey]);

  if (!open || !mounted || !current) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-[10001] rounded-md border border-white/25 bg-black/70 px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
        onClick={onClose}
      >
        ปิด
      </button>

      {canPrev && (
        <button
          type="button"
          aria-label="ภาพก่อนหน้า"
          className="absolute left-3 top-1/2 z-[10001] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/60 text-white transition hover:bg-black/85 md:left-6 md:h-14 md:w-14"
          onClick={goPrev}
        >
          <IconChevronLeft size={28} />
        </button>
      )}

      {canNext && (
        <button
          type="button"
          aria-label="ภาพถัดไป"
          className="absolute right-3 top-1/2 z-[10001] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/60 text-white transition hover:bg-black/85 md:right-6 md:h-14 md:w-14"
          onClick={goNext}
        >
          <IconChevronRight size={28} />
        </button>
      )}

      <button
        type="button"
        className="absolute inset-0 flex items-center justify-center p-2 md:p-6"
        onClick={onClose}
        aria-label="ปิดการแสดงภาพ"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[100dvh] max-w-[100vw] object-contain"
          draggable={false}
          onClick={(e) => e.stopPropagation()}
        />
      </button>

      <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-[10001] space-y-1 px-4 text-center">
        {current.label && (
          <p className="text-sm font-medium text-white/80">{current.label}</p>
        )}
        {hasMultiple && (
          <p className="text-xs text-white/55">
            {index + 1} / {items.length}
            <span className="hidden sm:inline">
              {" "}
              · ลูกศร ← → หรือปุ่มด้านข้าง
            </span>
          </p>
        )}
        <p className="text-xs text-white/45">Esc หรือคลิกพื้นหลังเพื่อปิด</p>
      </div>
    </div>,
    document.body,
  );
}
