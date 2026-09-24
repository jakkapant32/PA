import type { ReactNode } from "react";

type IconProps = {
  className?: string;
  size?: number;
};

const base = "shrink-0 fill-none stroke-current";

function Svg({
  size = 22,
  className = "",
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={1.75}
      className={`${base} ${className}`}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconChart({ className, size }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M4 19V5" strokeLinecap="round" />
      <path d="M4 19h16" strokeLinecap="round" />
      <path d="M8 17V11" strokeLinecap="round" />
      <path d="M12 17V7" strokeLinecap="round" />
      <path d="M16 17v-4" strokeLinecap="round" />
    </Svg>
  );
}

export function IconTarget({ className, size }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
    </Svg>
  );
}

export function IconLayers({ className, size }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 3 4 8l8 5 8-5-8-5z" strokeLinejoin="round" />
      <path d="M4 12l8 5 8-5" strokeLinejoin="round" />
      <path d="M4 16l8 5 8-5" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconBriefcase({ className, size }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" strokeLinejoin="round" />
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M4 12h16" strokeLinecap="round" />
    </Svg>
  );
}

export function IconChevronDown({ className, size }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconChevronRight({ className, size }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconChevronLeft({ className, size }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconCheck({ className, size }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconExpand({ className, size }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M8 3H3v5M16 3h5v5M16 21h5v-5M8 21H3v-5" strokeLinecap="round" />
    </Svg>
  );
}

export function IconDot({ className, size }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export const competencyIcons = [IconChart, IconTarget, IconLayers, IconBriefcase];
