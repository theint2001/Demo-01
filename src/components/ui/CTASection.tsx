import React from 'react';
import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  supportingText?: string;
  buttonText?: string;
  projectSlug?: string;
}

export default function CTASection({
  title = "Tell us about the space.",
  supportingText = "Whether commissioning a new private residence or developing a sanctuary hospitality venue, we welcome early-stage conversations.",
  buttonText = "Discuss a Project",
  projectSlug,
}: CTASectionProps) {
  const targetHref = projectSlug
    ? `/contact?project=${encodeURIComponent(projectSlug)}`
    : '/contact';

  return (
    <section className="py-24 bg-graphite text-limestone relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl space-y-8 bg-white/5 p-10 sm:p-16 rounded-3xl border border-white/10 backdrop-blur-md">
          <span className="text-[11px] uppercase tracking-[0.25em] text-sage font-mono font-medium block bg-white/10 w-max px-3.5 py-1 rounded-full">
            Start a Conversation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-surface leading-[1.1]">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-limestone/80 font-sans max-w-2xl leading-relaxed">
            {supportingText}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href={targetHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-surface text-charcoal font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-clay hover:text-surface transition-all duration-300 rounded-full shadow-md"
            >
              {buttonText}
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-limestone/80 hover:text-surface transition-colors py-2 font-mono"
            >
              Explore All Projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
