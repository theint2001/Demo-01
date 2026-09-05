import React from 'react';
import { Metadata } from 'next';
import { JOURNAL_ARTICLES } from '@/data/journal';
import JournalGrid from '@/components/journal/JournalGrid';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Journal — FORMA ATELIER',
  description:
    'Essays and observations on daylight, spatial proportion, materiality, courtyards, and quiet living by Forma Atelier.',
};

export default function JournalPage() {
  return (
    <div className="pt-28 pb-24 bg-limestone min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <Breadcrumbs items={[{ label: 'Journal & Insights' }]} />

        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-clay font-medium block">
            Architectural Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Essays &amp; Observations
          </h1>
          <p className="text-base text-stone font-sans leading-relaxed">
            Written explorations into daylight dynamics, spatial proportion, honest materiality, acoustic quietness, and the daily rituals of living.
          </p>
        </div>

        <JournalGrid articles={JOURNAL_ARTICLES} showFeaturedHero={true} />
      </div>

      <CTASection />
    </div>
  );
}
