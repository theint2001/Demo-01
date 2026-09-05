import React from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import SafeImage from '@/components/ui/SafeImage';

interface ProjectCardProps {
  project: Project;
  layoutVariant?: 'standard' | 'large' | 'horizontal';
  priority?: boolean;
}

export default function ProjectCard({
  project,
  layoutVariant = 'standard',
  priority = false,
}: ProjectCardProps) {
  if (layoutVariant === 'horizontal') {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 bg-surface rounded-3xl border border-border-stone/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
      >
        <div className="lg:col-span-7 aspect-[16/10] relative overflow-hidden rounded-2xl bg-stone/10">
          <SafeImage
            src={project.coverImage}
            alt={project.title}
            fallbackTitle={project.title}
            fallbackCategory={project.category}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center space-x-2 text-xs">
            <span className="px-3 py-1 bg-sage text-olive font-mono text-[10px] uppercase tracking-wider rounded-full font-medium">
              {project.category}
            </span>
            <span className="text-stone font-sans text-xs">• {project.location}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-olive transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone line-clamp-3 leading-relaxed font-sans">
            {project.description}
          </p>
          <div className="pt-2 text-xs uppercase tracking-[0.2em] text-olive font-medium group-hover:text-clay transition-colors inline-flex items-center">
            View Project <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    );
  }

  const isLarge = layoutVariant === 'large';

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-surface rounded-3xl p-5 border border-border-stone/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 focus:outline-none"
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-stone/10 mb-5 ${
          isLarge ? 'aspect-[16/10]' : 'aspect-[4/3]'
        }`}
      >
        <SafeImage
          src={project.coverImage}
          alt={project.title}
          fallbackTitle={project.title}
          fallbackCategory={project.category}
          fill
          sizes={isLarge ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-graphite/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="space-y-2 px-1 pb-1">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 bg-sage text-olive font-mono text-[10px] uppercase tracking-wider rounded-full font-medium">
            {project.category}
          </span>
          <span className="text-xs text-stone font-mono">{project.year}</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl text-charcoal group-hover:text-olive transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-xs text-stone font-sans line-clamp-1">
          {project.location} — {project.type}
        </p>
      </div>
    </Link>
  );
}
