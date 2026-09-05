'use client';

import React from 'react';
import { ProjectCategory } from '@/types/project';

interface ProjectFilterProps {
  categories: (ProjectCategory | 'All')[];
  activeCategory: ProjectCategory | 'All';
  onSelectCategory: (category: ProjectCategory | 'All') => void;
  totalCount: number;
  filteredCount: number;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  totalCount,
  filteredCount,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 sm:pb-8 border-b border-border-stone/60 gap-4">
      {/* Category Tabs (Mobile Scrollable Pill Container) */}
      <div
        role="tablist"
        aria-label="Project categories filter"
        className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat)}
              className={`text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] py-2 px-4 sm:px-5 rounded-full transition-all duration-300 font-medium whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-olive shrink-0 ${
                isActive
                  ? 'bg-olive text-surface shadow-xs'
                  : 'bg-surface text-stone border border-border-stone/80 hover:border-olive hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Result Counter */}
      <div className="text-xs text-stone font-mono uppercase tracking-[0.15em] bg-surface px-4 py-2 rounded-full border border-border-stone/60 self-start sm:self-auto shrink-0">
        Showing <span className="text-olive font-bold">{filteredCount}</span> /{' '}
        <span>{totalCount}</span> Projects
      </div>
    </div>
  );
}
