'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/projects';
import { ProjectCategory } from '@/types/project';
import ProjectFilter from '@/components/projects/ProjectFilter';
import ProjectGrid from '@/components/projects/ProjectGrid';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  const categories: (ProjectCategory | 'All')[] = [
    'All',
    'Residential',
    'Hospitality',
    'Workplace',
    'Objects / Interior',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 bg-limestone min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <Breadcrumbs items={[{ label: 'Projects Archive' }]} />

        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-clay font-medium block">
            Portfolio Archive
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Selected Architecture &amp; Interiors
          </h1>
          <p className="text-base text-stone font-sans leading-relaxed">
            A comprehensive record of residential houses, mountain retreats, dining environments, and studio headquarters shaped around light, material, and quiet living.
          </p>
        </div>

        {/* Category Filter */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          totalCount={PROJECTS.length}
          filteredCount={filteredProjects.length}
        />

        {/* Projects Grid */}
        <ProjectGrid projects={filteredProjects} layoutMode="editorial" />
      </div>
    </div>
  );
}
