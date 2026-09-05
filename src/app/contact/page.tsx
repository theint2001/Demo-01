import React, { Suspense } from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact & Project Inquiry — FORMA ATELIER',
  description:
    'Discuss your private residence, mountain sanctuary, dining venue, or workplace project with Forma Atelier.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-limestone min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <Breadcrumbs items={[{ label: 'Inquiry' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Ethos & Details */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-clay font-medium block">
                Start a Conversation
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight">
                Project Inquiry
              </h1>
              <p className="text-sm text-stone font-sans leading-relaxed">
                We accept a limited number of architectural and interior commissions each year to ensure dedicated creative attention and material rigor.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border-stone space-y-4 text-xs">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-clay font-medium">
                Studio Studios &amp; Reach
              </h3>
              <div className="space-y-2 text-stone font-sans">
                <p><strong className="text-charcoal font-medium">Email:</strong> hello@forma-atelier.example</p>
                <p><strong className="text-charcoal font-medium">Northern Coast:</strong> Promontory Studio 04</p>
                <p><strong className="text-charcoal font-medium">Old Quarter:</strong> Heritage Vault Studio 12</p>
              </div>
            </div>

            <div className="p-6 bg-surface border border-border-stone space-y-3 text-xs text-stone">
              <span className="text-[11px] uppercase tracking-[0.2em] text-clay font-medium block">
                Typical Commission Scope
              </span>
              <p className="leading-relaxed">
                Single-Family Residences, Coastal Pavilions, Intimate Dining Rooms, Boutique Wellness Lodges, and Creative Workplace Headquarters.
              </p>
            </div>
          </div>

          {/* Right Column: Progressive Interactive Inquiry Form */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-12 text-stone text-xs">Loading inquiry form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
