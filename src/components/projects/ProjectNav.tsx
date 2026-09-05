import React from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectNavProps {
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectNav({ prevProject, nextProject }: ProjectNavProps) {
  return (
    <nav
      aria-label="Project Navigation"
      className="py-12 border-t border-b border-border-stone my-16 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
    >
      {/* Previous Project */}
      <div>
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col space-y-1 p-4 border border-transparent hover:border-border-stone hover:bg-surface/50 transition-all duration-300"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-stone inline-flex items-center group-hover:text-clay">
              <ArrowLeft className="w-3 h-3 mr-2 transition-transform group-hover:-translate-x-1" />
              Previous Project
            </span>
            <span className="font-serif text-lg text-charcoal group-hover:text-clay transition-colors">
              {prevProject.title}
            </span>
            <span className="text-xs text-stone">{prevProject.category} — {prevProject.location}</span>
          </Link>
        ) : (
          <div className="p-4" />
        )}
      </div>

      {/* Next Project */}
      <div className="text-right">
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col space-y-1 p-4 border border-transparent hover:border-border-stone hover:bg-surface/50 transition-all duration-300 items-end"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-stone inline-flex items-center group-hover:text-clay">
              Next Project
              <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="font-serif text-lg text-charcoal group-hover:text-clay transition-colors">
              {nextProject.title}
            </span>
            <span className="text-xs text-stone">{nextProject.category} — {nextProject.location}</span>
          </Link>
        ) : (
          <div className="p-4" />
        )}
      </div>
    </nav>
  );
}
