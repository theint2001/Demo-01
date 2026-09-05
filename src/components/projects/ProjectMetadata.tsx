import React from 'react';
import { Project } from '@/types/project';

interface ProjectMetadataProps {
  project: Project;
}

export default function ProjectMetadata({ project }: ProjectMetadataProps) {
  return (
    <aside
      aria-label="Project Specifications"
      className="bg-surface p-5 sm:p-8 rounded-3xl border border-border-stone/60 space-y-6 shadow-sm"
    >
      <h3 className="text-xs uppercase tracking-[0.25em] text-olive font-mono font-medium pb-4 border-b border-border-stone/60">
        Project At A Glance
      </h3>

      <dl className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 text-xs">
        <div>
          <dt className="text-stone uppercase tracking-[0.15em] mb-1 font-mono text-[10px]">Typology</dt>
          <dd className="text-charcoal font-medium">{project.type}</dd>
        </div>

        <div>
          <dt className="text-stone uppercase tracking-[0.15em] mb-1 font-mono text-[10px]">Location</dt>
          <dd className="text-charcoal font-medium">{project.location}</dd>
        </div>

        <div>
          <dt className="text-stone uppercase tracking-[0.15em] mb-1 font-mono text-[10px]">Year</dt>
          <dd className="text-charcoal font-medium">{project.year}</dd>
        </div>

        <div>
          <dt className="text-stone uppercase tracking-[0.15em] mb-1 font-mono text-[10px]">Spatial Area</dt>
          <dd className="text-charcoal font-medium">{project.area}</dd>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <dt className="text-stone uppercase tracking-[0.15em] mb-1 font-mono text-[10px]">Project Status</dt>
          <dd className="text-charcoal font-medium">{project.status}</dd>
        </div>

        {project.servicesProvided && project.servicesProvided.length > 0 && (
          <div className="col-span-2 lg:col-span-1">
            <dt className="text-stone uppercase tracking-[0.15em] mb-1 font-mono text-[10px]">Services Provided</dt>
            <dd className="text-charcoal space-y-1">
              {project.servicesProvided.map((serv) => (
                <span key={serv} className="block font-medium">
                  {serv}
                </span>
              ))}
            </dd>
          </div>
        )}

        {project.materials && project.materials.length > 0 && (
          <div className="col-span-2 lg:col-span-1">
            <dt className="text-stone uppercase tracking-[0.15em] mb-1.5 font-mono text-[10px]">Material Palette</dt>
            <dd className="flex flex-wrap gap-1.5 pt-0.5">
              {project.materials.map((mat) => (
                <span
                  key={mat}
                  className="px-2.5 py-1 bg-sage/60 text-[10px] text-olive font-mono rounded-full border border-olive/20"
                >
                  {mat}
                </span>
              ))}
            </dd>
          </div>
        )}
      </dl>
    </aside>
  );
}
