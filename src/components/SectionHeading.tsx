type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-[1.75rem] font-bold leading-tight text-[var(--primary)] md:text-[2.125rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl text-[1.05rem] leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>
      )}
      <div className="mt-4 h-1 w-14 rounded-full bg-[var(--accent-gold)]" />
    </div>
  );
}
