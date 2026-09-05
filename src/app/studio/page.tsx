import React from 'react';
import { Metadata } from 'next';
import SafeImage from '@/components/ui/SafeImage';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import StudioPrinciples from '@/components/studio/StudioPrinciples';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Studio — FORMA ATELIER',
  description:
    'Learn about Forma Atelier design philosophy, material thinking, spatial principles, and quiet architectural process.',
};

export default function StudioPage() {
  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      description: 'Understand the people, site context, sun trajectories, and spatial brief.',
    },
    {
      step: '02',
      title: 'Define',
      description: 'Develop initial spatial direction, volume massing, and material options.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Explore material character, light apertures, and proportion alignments.',
    },
    {
      step: '04',
      title: 'Refine',
      description: 'Resolve joinery details, lighting controls, and technical coordination.',
    },
    {
      step: '05',
      title: 'Deliver',
      description: 'Prepare comprehensive design documentation packages for construction execution.',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-limestone min-h-screen space-y-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <Breadcrumbs items={[{ label: 'Studio Story' }]} />

        {/* Studio Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-clay font-medium block">
              Studio Philosophy
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal tracking-tight leading-[1.05]">
              “We make space for living.”
            </h1>
            <p className="text-base sm:text-xl text-stone font-serif italic leading-relaxed">
              Forma Atelier is an architecture and interior practice dedicated to calm, proportion, and physical materiality.
            </p>
            <p className="text-sm text-stone leading-relaxed font-sans">
              We believe architecture should not compete with everyday life. Instead, a home or hospitality venue should act as a quiet background—capturing morning daylight, insulating against urban noise, and encouraging mindful movement.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-stone/10 border border-border-stone overflow-hidden shadow-lg">
            <SafeImage
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
              alt="Forma Atelier Studio Material Study"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 02. Four Core Pillars */}
      <StudioPrinciples />

      {/* 03. Process & How We Work */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-clay font-medium block">
            Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">How We Work</h2>
          <p className="text-sm text-stone font-sans leading-relaxed">
            Our architectural process is structured, collaborative, and focused on clear communication from initial site exploration to final material delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((s) => (
            <div
              key={s.step}
              className="bg-surface p-6 border border-border-stone space-y-3 hover:border-clay transition-colors"
            >
              <span className="font-mono text-xs text-clay block">{s.step}</span>
              <h3 className="font-serif text-xl text-charcoal">{s.title}</h3>
              <p className="text-xs text-stone font-sans leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04. Material Thinking & Context */}
      <section className="bg-surface py-20 border-y border-border-stone">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[16/10] bg-stone/10 overflow-hidden border border-border-stone">
            <SafeImage
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
              alt="Material detail study"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-clay font-medium block">
              Tactile Exploration
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Material Thinking &amp; Local Context
            </h2>
            <p className="text-sm text-stone leading-relaxed font-sans">
              Every building should belong to its geological landscape. We prioritize regional stone quarries, timber milled from sustainable forests, and breathable lime plasters that react organically to humidity and daylight.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-stone pt-4 border-t border-border-stone">
              <div>
                <span className="text-charcoal font-medium block">Lime Plaster</span>
                <span>Hand-troweled texture</span>
              </div>
              <div>
                <span className="text-charcoal font-medium block">Honed Basalt</span>
                <span>Thermal stability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CTA */}
      <CTASection />
    </div>
  );
}
