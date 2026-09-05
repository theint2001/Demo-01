import React from 'react';
import { Metadata } from 'next';
import { SERVICES } from '@/data/services';
import ServiceCard from '@/components/services/ServiceCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Services — FORMA ATELIER',
  description:
    'Explore Forma Atelier practice disciplines: Architecture, Interior Architecture, Interior Design, Hospitality Design, Workplace Design, and Spatial Strategy.',
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 bg-limestone min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <Breadcrumbs items={[{ label: 'Services & Disciplines' }]} />

        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-clay font-medium block">
            Practice Capabilities
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Services &amp; Scope
          </h1>
          <p className="text-base text-stone font-sans leading-relaxed">
            We provide full-scope architectural and interior design services tailored to private homeowners, hospitality operators, and creative workplace teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.slug} service={service} index={idx} />
          ))}
        </div>
      </div>

      <CTASection
        title="Discuss Your Project Scope"
        supportingText="We collaborate with clients across early feasibility, full architectural design, and custom interior material specification."
      />
    </div>
  );
}
