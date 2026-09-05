import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  lightTheme?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  lightTheme = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-4 ${
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'
      }`}
    >
      {eyebrow && (
        <span
          className={`text-[11px] uppercase tracking-[0.25em] font-mono font-medium inline-block px-3 py-1 rounded-full ${
            lightTheme ? 'text-sage bg-white/10' : 'text-olive bg-sage/60'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] ${
          lightTheme ? 'text-surface' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed font-sans ${
            lightTheme ? 'text-limestone/80' : 'text-stone'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
