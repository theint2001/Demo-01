import React from 'react';
import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import { PROJECTS } from '@/data/projects';
import { JOURNAL_ARTICLES } from '@/data/journal';
import { SERVICES } from '@/data/services';
import ProjectCard from '@/components/projects/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';
import StudioPrinciples from '@/components/studio/StudioPrinciples';
import JournalCard from '@/components/journal/JournalCard';
import CTASection from '@/components/ui/CTASection';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featuredProject = PROJECTS.find((p) => p.slug === 'casa-lume') || PROJECTS[0];
  const storyProject = PROJECTS.find((p) => p.slug === 'mizu-courtyard') || PROJECTS[2];
  const selectedWork = PROJECTS.slice(0, 7);
  const selectedJournal = JOURNAL_ARTICLES.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 01. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-16 bg-limestone overflow-hidden border-b border-border-stone">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end z-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-clay font-medium block">
              FORMA ATELIER
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-charcoal tracking-tight leading-[0.98]">
              “Architecture for quiet living.”
            </h1>
            <p className="text-base sm:text-xl text-stone font-sans max-w-xl leading-relaxed">
              We design considered spaces where light, material and everyday life work together.
            </p>

            <div className="pt-4 flex items-center space-x-6">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3.5 bg-charcoal text-surface text-xs uppercase tracking-[0.2em] font-medium hover:bg-clay transition-colors"
              >
                Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/studio"
                className="text-xs uppercase tracking-[0.2em] text-stone hover:text-charcoal transition-colors py-2"
              >
                About the Studio
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full bg-stone/10 overflow-hidden shadow-2xl border border-border-stone/60">
              <SafeImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Casa Lume architectural hero"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-sm p-4 border border-border-stone/40 text-xs text-stone space-y-1">
                <p className="text-charcoal font-serif font-medium">Casa Lume — Northern Coast</p>
                <p className="text-[10px] uppercase tracking-wider">Lime Plaster • Travertine • Daylight Study</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. FEATURED PROJECT HIGHLIGHT */}
      <section className="py-24 bg-surface border-b border-border-stone">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-stone pb-6 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-clay font-medium block">
                Flagship Exploration
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Featured Work</h2>
            </div>
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="text-xs uppercase tracking-[0.2em] text-charcoal hover:text-clay font-medium"
            >
              View Full Case Study →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 relative aspect-[16/10] bg-stone/10 overflow-hidden shadow-md">
              <SafeImage
                src={featuredProject.coverImage}
                alt={featuredProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-4 space-y-6 p-2">
              <div className="text-xs uppercase tracking-[0.2em] text-stone space-x-2">
                <span>{featuredProject.category}</span>
                <span>•</span>
                <span>{featuredProject.location}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal">
                {featuredProject.title}
              </h3>
              <p className="text-sm text-stone leading-relaxed font-sans">
                “{featuredProject.description}”
              </p>
              <div className="pt-2 text-xs text-stone space-y-2 border-t border-border-stone pt-4 font-mono">
                <p>Status: {featuredProject.status}</p>
                <p>Area: {featuredProject.area}</p>
              </div>
              <Link
                href={`/projects/${featuredProject.slug}`}
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] px-6 py-3 bg-charcoal text-surface hover:bg-clay transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03. STUDIO STATEMENT */}
      <section className="py-28 bg-limestone text-center border-b border-border-stone">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-clay font-medium">
            Studio Statement
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.15]">
            “We make space for living.”
          </h2>
          <p className="text-base sm:text-lg text-stone leading-relaxed font-sans max-w-2xl mx-auto">
            Forma Atelier is an architecture and interior design studio shaped around calm, function and material honesty. We conceive spaces that honor physical context, human ritual, and quiet daylight.
          </p>
          <div className="pt-4">
            <Link
              href="/studio"
              className="text-xs uppercase tracking-[0.2em] text-charcoal border-b border-charcoal pb-1 hover:text-clay hover:border-clay transition-colors"
            >
              Read Our Full Story &amp; Ethos
            </Link>
          </div>
        </div>
      </section>

      {/* 04. SELECTED WORK (EDITORIAL RHYTHM) */}
      <section className="py-24 bg-surface border-b border-border-stone">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="Portfolio Archive"
            title="Selected Architecture & Interiors"
            description="A curated selection of private residences, mountain sanctuaries, dining rooms, and creative workplaces."
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {selectedWork.map((project, index) => {
              if (index === 0) return null; // Already featured above
              const isLarge = index === 1 || index === 4;
              return (
                <div
                  key={project.slug}
                  className={isLarge ? 'md:col-span-7' : 'md:col-span-5'}
                >
                  <ProjectCard
                    project={project}
                    layoutVariant={isLarge ? 'large' : 'standard'}
                  />
                </div>
              );
            })}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border border-charcoal text-charcoal text-xs uppercase tracking-[0.2em] hover:bg-charcoal hover:text-surface transition-colors"
            >
              Explore All 12 Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* 05. SERVICES / CAPABILITIES */}
      <section className="py-24 bg-limestone border-b border-border-stone">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="Practice Disciplines"
            title="Services & Scope"
            description="From early spatial strategy to detailed interior material selection and architectural execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((serv, idx) => (
              <div
                key={serv.slug}
                className="bg-surface p-8 border border-border-stone space-y-4 hover:border-clay transition-colors"
              >
                <span className="font-mono text-xs text-clay">0{idx + 1}</span>
                <h3 className="font-serif text-2xl text-charcoal">{serv.title}</h3>
                <p className="text-xs text-stone leading-relaxed font-sans">{serv.tagline}</p>
                <Link
                  href="/services"
                  className="text-[11px] uppercase tracking-[0.2em] text-clay hover:text-charcoal font-medium block pt-2"
                >
                  Explore Discipline →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. FEATURED PROJECT STORY (EDITORIAL SPLIT) */}
      <section className="py-24 bg-surface border-b border-border-stone">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-clay font-medium block">
                Spatial Study
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
                {storyProject.title} — Urban Privacy &amp; Water Light
              </h2>
              <p className="text-sm text-stone leading-relaxed font-sans">
                {storyProject.longDescription}
              </p>
              <div className="p-6 bg-limestone border-l-2 border-clay space-y-2">
                <span className="text-xs uppercase tracking-[0.15em] text-clay font-medium block">
                  Design Approach
                </span>
                <p className="text-xs text-stone font-serif italic">
                  “{storyProject.approach}”
                </p>
              </div>
              <Link
                href={`/projects/${storyProject.slug}`}
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-charcoal hover:text-clay font-medium"
              >
                Read Case Study Details →
              </Link>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] bg-stone/10 shadow-lg">
              <SafeImage
                src={storyProject.coverImage}
                alt={storyProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 07. APPROACH / PHILOSOPHY (4 PILLARS) */}
      <StudioPrinciples />

      {/* 08. JOURNAL & INSIGHTS */}
      <section className="py-24 bg-limestone border-b border-border-stone">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-stone pb-6 gap-4">
            <SectionHeading
              eyebrow="Architectural Journal"
              title="Essays &amp; Observations"
              description="Thoughts on light, materiality, spatial proportion, and the rituals of living."
            />
            <Link
              href="/journal"
              className="text-xs uppercase tracking-[0.2em] text-charcoal hover:text-clay font-medium shrink-0"
            >
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedJournal.map((article) => (
              <JournalCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 09. CONTACT CTA */}
      <CTASection />
    </div>
  );
}
