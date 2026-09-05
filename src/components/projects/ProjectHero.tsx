import React from 'react';
import { Project } from '@/types/project';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SafeImage from '@/components/ui/SafeImage';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="pt-24 sm:pt-28 pb-8 sm:pb-12 bg-limestone border-b border-border-stone/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6 sm:space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Projects', href: '/projects' },
            { label: project.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-olive font-mono font-medium block">
              {project.category} — {project.location}
            </span>
            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl text-charcoal tracking-tight leading-[1.05] break-words">
              {project.title}
            </h1>
            <p className="text-sm sm:text-xl text-stone font-serif italic max-w-2xl leading-relaxed">
              “{project.description}”
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap gap-4 sm:gap-6 text-xs uppercase tracking-[0.15em] text-stone pb-2 border-t lg:border-t-0 lg:border-l border-border-stone pt-4 lg:pt-0 lg:pl-8 font-mono">
            <div>
              <span className="text-charcoal font-medium block text-[10px]">Status</span>
              <span>{project.status}</span>
            </div>
            <div>
              <span className="text-charcoal font-medium block text-[10px]">Year</span>
              <span>{project.year}</span>
            </div>
            <div>
              <span className="text-charcoal font-medium block text-[10px]">Area</span>
              <span>{project.area}</span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden bg-surface rounded-2xl shadow-lg mt-6 sm:mt-8 border border-border-stone/60">
          <SafeImage
            src={project.coverImage}
            alt={project.title}
            fallbackTitle={project.title}
            fallbackCategory={project.category}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
