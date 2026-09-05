'use client';

import React from 'react';
import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  layoutMode?: 'editorial' | 'standard';
}

export default function ProjectGrid({
  projects,
  layoutMode = 'editorial',
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center space-y-4">
        <h3 className="font-serif text-2xl text-charcoal">No projects found</h3>
        <p className="text-sm text-stone max-w-md mx-auto">
          We do not have projects matching this specific filter criteria at this time.
        </p>
      </div>
    );
  }

  if (layoutMode === 'standard') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index < 3}
          />
        ))}
      </div>
    );
  }

  // Editorial mode: varied rhythm across items
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {projects.map((project, index) => {
          // Editorial rhythm assignment
          const isFeaturedFull = index % 5 === 0;
          const isLargeCol = index % 5 === 1;

          if (isFeaturedFull && index === 0) {
            return (
              <div key={project.slug} className="md:col-span-12">
                <ProjectCard
                  project={project}
                  layoutVariant="horizontal"
                  priority={true}
                />
              </div>
            );
          }

          if (isLargeCol) {
            return (
              <div key={project.slug} className="md:col-span-7">
                <ProjectCard
                  project={project}
                  layoutVariant="large"
                  priority={index < 3}
                />
              </div>
            );
          }

          return (
            <div key={project.slug} className="md:col-span-5">
              <ProjectCard project={project} priority={index < 3} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
