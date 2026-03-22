import React from "react";

export default function CornerLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-[var(--line-color)] opacity-[0.35]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="0" x2="28%" y2="22%" stroke="currentColor" strokeWidth="1" />
      <line x1="100%" y1="0" x2="72%" y2="22%" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="100%" x2="28%" y2="78%" stroke="currentColor" strokeWidth="1" />
      <line x1="100%" y1="100%" x2="72%" y2="78%" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="18%" stroke="url(#lineGrad)" strokeWidth="1" />
      <line x1="100%" y1="0" x2="100%" y2="18%" stroke="url(#lineGrad)" strokeWidth="1" />
      <line x1="0" y1="100%" x2="0" y2="82%" stroke="url(#lineGrad)" strokeWidth="1" />
      <line x1="100%" y1="100%" x2="100%" y2="82%" stroke="url(#lineGrad)" strokeWidth="1" />
    </svg>
  );
}
