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
    <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-border-stone/80 gap-4">
      {/* Category Tabs */}
      <div
        role="tablist"
        aria-label="Project categories filter"
        className="flex flex-wrap items-center gap-2 sm:gap-4"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat)}
              className={`text-xs uppercase tracking-[0.2em] py-2 px-3 transition-all duration-300 relative focus:outline-none focus:ring-1 focus:ring-clay ${
                isActive
                  ? 'text-charcoal font-medium'
                  : 'text-stone hover:text-charcoal'
              }`}
            >
              {cat}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-clay transition-all duration-300" />
              )}
            </button>
          );
        })}
      </div>

      {/* Result Counter */}
      <div className="text-xs text-stone uppercase tracking-[0.15em] font-sans">
        Showing <span className="text-charcoal font-medium">{filteredCount}</span> of{' '}
        <span>{totalCount}</span> Projects
      </div>
    </div>
  );
}
