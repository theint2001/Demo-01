import React from 'react';
import { Project } from '@/types/project';

interface ProjectMetadataProps {
  project: Project;
}

export default function ProjectMetadata({ project }: ProjectMetadataProps) {
  return (
    <aside
      aria-label="Project Specifications"
      className="bg-surface p-6 sm:p-8 border border-border-stone space-y-6"
    >
      <h3 className="text-xs uppercase tracking-[0.25em] text-clay font-medium pb-4 border-b border-border-stone">
        Project At A Glance
      </h3>

      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 text-xs">
        <div>
          <dt className="text-stone uppercase tracking-[0.15em] mb-1">Typology</dt>
          <dd className="text-charcoal font-medium">{project.type}</dd>
        </div>

        <div>
          <dt className="text-stone uppercase tracking-[0.15em] mb-1">Location</dt>
          <dd className="text-charcoal font-medium">{project.location}</dd>
        </div>

        <div>
          <dt className="text-stone uppercase tracking-[0.15em] mb-1">Year</dt>
          <dd className="text-charcoal font-medium">{project.year}</dd>
        </div>

        <div>
          <dt className="text-stone uppercase tracking-[0.15em] mb-1">Spatial Area</dt>
          <dd className="text-charcoal font-medium">{project.area}</dd>
        </div>

        <div>
          <dt className="text-stone uppercase tracking-[0.15em] mb-1">Project Status</dt>
          <dd className="text-charcoal font-medium">{project.status}</dd>
        </div>

        {project.servicesProvided && project.servicesProvided.length > 0 && (
          <div>
            <dt className="text-stone uppercase tracking-[0.15em] mb-1">Services Provided</dt>
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
          <div>
            <dt className="text-stone uppercase tracking-[0.15em] mb-1">Material Palette</dt>
            <dd className="flex flex-wrap gap-1.5 pt-1">
              {project.materials.map((mat) => (
                <span
                  key={mat}
                  className="px-2 py-1 bg-limestone text-[11px] text-charcoal border border-border-stone/60"
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
