import React from 'react';

export default function StudioPrinciples() {
  const principles = [
    {
      title: "Light",
      tagline: "Natural light should shape how a room feels throughout the day.",
      description: "We study daily sun trajectories to ensure daylight enters space gently—washing plaster walls, creating quiet shadow alcoves, and reducing electric light dependence.",
    },
    {
      title: "Material",
      tagline: "Materials should reveal their own character.",
      description: "We work with natural, unlacquered materials—lime plaster, hone limestone, hand-split stone, untreated oak—that wear time and weather gracefully.",
    },
    {
      title: "Proportion",
      tagline: "Good proportion creates calm before decoration begins.",
      description: "Spatial ease comes from harmonious dimensional ratios, clean datum alignments, and controlled sightlines across connected rooms.",
    },
    {
      title: "Life",
      tagline: "Spaces should support how people actually live.",
      description: "Architecture must serve human ritual—morning coffee by a sunlit aperture, quiet reading in acoustic alcoves, gathering around a central hearth.",
    },
  ];

  return (
    <section className="py-20 bg-surface border-y border-border-stone" aria-label="Studio Principles">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        <div className="max-w-2xl space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-clay font-medium block">
            Core Design Ethos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">
            Four Foundational Pillars
          </h2>
          <p className="text-sm sm:text-base text-stone leading-relaxed font-sans">
            Our architectural practice operates on four core principles, guiding every sketch, material choice, and spatial detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {principles.map((p, idx) => (
            <div key={p.title} className="space-y-4 border-l-2 border-clay/40 pl-6">
              <span className="text-xs font-mono text-clay">0{idx + 1}</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">{p.title}</h3>
              <p className="font-serif italic text-sm text-stone">{p.tagline}</p>
              <p className="text-xs sm:text-sm text-stone/90 leading-relaxed font-sans pt-2">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
