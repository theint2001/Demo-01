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
    <section className="py-24 bg-gradient-to-b from-limestone via-surface to-limestone border-y border-border-stone/60" aria-label="Studio Principles">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-olive font-mono font-medium inline-block px-3.5 py-1 bg-sage rounded-full">
            Core Design Ethos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">
            Four Foundational Pillars
          </h2>
          <p className="text-sm sm:text-base text-stone leading-relaxed font-sans">
            Our architectural practice operates on four core principles, guiding every sketch, material choice, and spatial detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {principles.map((p, idx) => (
            <div key={p.title} className="bg-surface p-8 sm:p-10 rounded-3xl border border-border-stone/60 space-y-4 shadow-sm hover:border-olive transition-all duration-300">
              <span className="text-xs font-mono text-clay px-3 py-1 bg-clay/10 rounded-full inline-block font-medium">0{idx + 1}</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">{p.title}</h3>
              <p className="font-serif italic text-sm text-olive">{p.tagline}</p>
              <p className="text-xs sm:text-sm text-stone leading-relaxed font-sans pt-2">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
