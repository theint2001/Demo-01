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
    <div className="space-y-0 overflow-x-hidden">
      {/* 01. HERO SECTION (Adjusted for iPad Viewport) */}
      <section className="relative min-h-[75vh] md:min-h-0 lg:min-h-[90vh] flex flex-col justify-center lg:justify-end pt-24 md:pt-28 lg:pt-32 pb-12 lg:pb-16 bg-gradient-to-b from-mist/50 via-limestone to-limestone overflow-hidden border-b border-border-stone/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-end z-10">
          <div className="md:col-span-7 lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-olive font-mono font-medium inline-block px-3 py-1 bg-sage/80 rounded-full border border-olive/20">
              FORMA ATELIER
            </span>
            <h1 className="font-serif text-4xl sm:text-7xl lg:text-8xl text-charcoal tracking-tight leading-[1.02] sm:leading-[0.98] break-words">
              “Architecture for quiet living.”
            </h1>
            <p className="text-sm sm:text-xl text-stone font-sans max-w-xl leading-relaxed">
              We design considered spaces where light, material and everyday life work together.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-olive text-surface text-xs uppercase tracking-[0.2em] font-medium hover:bg-clay transition-all duration-300 rounded-full shadow-sm"
              >
                Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/studio"
                className="inline-flex items-center justify-center text-xs uppercase tracking-[0.2em] text-stone hover:text-olive transition-colors py-2 font-mono text-center"
              >
                About the Studio
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full bg-surface rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-border-stone p-1.5 sm:p-2">
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
                <SafeImage
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Casa Lume architectural hero"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-surface/95 backdrop-blur-md p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border-stone/60 text-xs text-stone space-y-1 shadow-sm">
                  <p className="text-charcoal font-serif font-medium text-xs sm:text-sm">Casa Lume — Northern Coast</p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-mono text-olive truncate">Lime Plaster • Travertine • Daylight Study</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. FEATURED PROJECT HIGHLIGHT */}
      <section className="py-12 sm:py-24 bg-surface border-b border-border-stone/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-8 sm:space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-stone/60 pb-4 sm:pb-6 gap-3">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-clay font-mono font-medium inline-block px-2.5 py-1 bg-clay/10 rounded-full mb-2">
                Flagship Exploration
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-charcoal">Featured Work</h2>
            </div>
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="text-xs uppercase tracking-[0.2em] text-olive hover:text-clay font-medium font-mono"
            >
              View Full Case Study →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-limestone/50 p-4 sm:p-10 rounded-2xl sm:rounded-3xl border border-border-stone/60">
            <div className="lg:col-span-8 relative aspect-[16/10] bg-surface overflow-hidden rounded-xl sm:rounded-2xl shadow-md">
              <SafeImage
                src={featuredProject.coverImage}
                alt={featuredProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 sm:p-2">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-sage text-olive font-mono text-[10px] uppercase tracking-wider rounded-full font-medium">
                  {featuredProject.category}
                </span>
                <span className="text-xs text-stone font-mono">• {featuredProject.location}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-charcoal">
                {featuredProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone leading-relaxed font-sans">
                “{featuredProject.description}”
              </p>
              <div className="text-xs text-stone space-y-1 border-t border-border-stone/60 pt-3 sm:pt-4 font-mono">
                <p>Status: <span className="text-charcoal font-medium">{featuredProject.status}</span></p>
                <p>Area: <span className="text-charcoal font-medium">{featuredProject.area}</span></p>
              </div>
              <Link
                href={`/projects/${featuredProject.slug}`}
                className="inline-flex items-center justify-center w-full sm:w-auto text-xs uppercase tracking-[0.2em] px-6 py-3 bg-olive text-surface hover:bg-clay transition-all duration-300 rounded-full shadow-xs"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03. STUDIO STATEMENT */}
      <section className="py-16 sm:py-28 bg-gradient-to-b from-sand/30 via-limestone to-mist/30 text-center border-b border-border-stone/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-8">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-olive font-mono font-medium inline-block px-3 py-1 bg-sage rounded-full">
            Studio Statement
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.15]">
            “We make space for living.”
          </h2>
          <p className="text-sm sm:text-lg text-stone leading-relaxed font-sans max-w-2xl mx-auto">
            Forma Atelier is an architecture and interior design studio shaped around calm, function and material honesty. We conceive spaces that honor physical context, human ritual, and quiet daylight.
          </p>
          <div className="pt-2">
            <Link
              href="/studio"
              className="text-xs uppercase tracking-[0.2em] text-olive font-mono border-b border-olive/40 pb-1 hover:text-clay hover:border-clay transition-colors"
            >
              Read Our Full Story &amp; Ethos
            </Link>
          </div>
        </div>
      </section>

      {/* 04. SELECTED WORK */}
      <section className="py-16 sm:py-24 bg-surface border-b border-border-stone/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-16">
          <SectionHeading
            eyebrow="Portfolio Archive"
            title="Selected Architecture & Interiors"
            description="A curated selection of private residences, mountain sanctuaries, dining rooms, and creative workplaces."
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {selectedWork.map((project, index) => {
              if (index === 0) return null;
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

          <div className="text-center pt-4 sm:pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 sm:py-4 border border-olive text-olive text-xs uppercase tracking-[0.2em] hover:bg-olive hover:text-surface transition-all duration-300 rounded-full font-mono shadow-xs"
            >
              Explore All 12 Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* 05. SERVICES */}
      <section className="py-16 sm:py-24 bg-limestone border-b border-border-stone/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-16">
          <SectionHeading
            eyebrow="Practice Disciplines"
            title="Services & Scope"
            description="From early spatial strategy to detailed interior material selection and architectural execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((serv, idx) => (
              <div
                key={serv.slug}
                className="bg-surface p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border-stone/60 space-y-4 hover:border-olive hover:shadow-lg transition-all duration-300"
              >
                <span className="font-mono text-xs text-clay px-2.5 py-1 bg-clay/10 rounded-full inline-block">0{idx + 1}</span>
                <h3 className="font-serif text-2xl text-charcoal">{serv.title}</h3>
                <p className="text-xs text-stone leading-relaxed font-sans">{serv.tagline}</p>
                <Link
                  href="/services"
                  className="text-[11px] uppercase tracking-[0.2em] text-olive hover:text-clay font-mono font-medium block pt-2"
                >
                  Explore Discipline →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. FEATURED PROJECT STORY */}
      <section className="py-16 sm:py-24 bg-surface border-b border-border-stone/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-mist/40 p-6 sm:p-12 rounded-2xl sm:rounded-3xl border border-border-stone/60">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-olive font-mono font-medium inline-block px-3 py-1 bg-sage rounded-full">
                Spatial Study
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal leading-tight">
                {storyProject.title} — Urban Privacy &amp; Water Light
              </h2>
              <p className="text-xs sm:text-sm text-stone leading-relaxed font-sans">
                {storyProject.longDescription}
              </p>
              <div className="p-4 sm:p-6 bg-surface rounded-xl sm:rounded-2xl border-l-4 border-olive space-y-2 shadow-xs">
                <span className="text-xs uppercase tracking-[0.15em] text-olive font-mono font-medium block">
                  Design Approach
                </span>
                <p className="text-xs text-stone font-serif italic">
                  “{storyProject.approach}”
                </p>
              </div>
              <Link
                href={`/projects/${storyProject.slug}`}
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-olive hover:text-clay font-mono font-medium"
              >
                Read Case Study Details →
              </Link>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] bg-surface rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-border-stone/60">
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

      {/* 07. APPROACH / PHILOSOPHY */}
      <StudioPrinciples />

      {/* 08. JOURNAL */}
      <section className="py-16 sm:py-24 bg-limestone border-b border-border-stone/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-stone/60 pb-4 sm:pb-6 gap-3">
            <SectionHeading
              eyebrow="Architectural Journal"
              title="Essays &amp; Observations"
              description="Thoughts on light, materiality, spatial proportion, and the rituals of living."
            />
            <Link
              href="/journal"
              className="text-xs uppercase tracking-[0.2em] text-olive hover:text-clay font-mono font-medium shrink-0"
            >
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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
