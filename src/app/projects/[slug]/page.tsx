import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectMetadata from '@/components/projects/ProjectMetadata';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectNav from '@/components/projects/ProjectNav';
import ProjectCard from '@/components/projects/ProjectCard';
import CTASection from '@/components/ui/CTASection';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found — FORMA ATELIER',
    };
  }

  return {
    title: `${project.title} — ${project.category} | FORMA ATELIER`,
    description: project.description,
    openGraph: {
      title: `${project.title} — FORMA ATELIER`,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const project = PROJECTS[currentIndex];
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  // Related projects logic: match by category or relatedProjects field
  const relatedSlugs = project.relatedProjects || [];
  const relatedProjects = PROJECTS.filter(
    (p) => p.slug !== project.slug && (relatedSlugs.includes(p.slug) || p.category === project.category)
  ).slice(0, 3);

  return (
    <article className="bg-limestone min-h-screen">
      {/* 01. Hero & Specifications */}
      <ProjectHero project={project} />

      {/* 02. Main Editorial Narrative Body */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview / Statement */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-clay font-medium block">
                Architectural Statement
              </span>
              <p className="font-serif text-xl sm:text-2xl text-charcoal leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Challenge & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border-stone">
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.2em] text-clay font-medium">
                  The Site Challenge
                </h3>
                <p className="text-xs sm:text-sm text-stone leading-relaxed font-sans">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.2em] text-clay font-medium">
                  Design Approach
                </h3>
                <p className="text-xs sm:text-sm text-stone leading-relaxed font-sans">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Design Concept & Spatial Strategy */}
            <div className="bg-surface p-8 border-l-4 border-clay space-y-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-clay font-medium block">
                Core Spatial Concept
              </span>
              <p className="font-serif text-lg text-charcoal italic leading-relaxed">
                “{project.designConcept}”
              </p>
            </div>
          </div>

          {/* Sidebar AT A GLANCE metadata */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ProjectMetadata project={project} />
          </div>
        </div>

        {/* 03. Visual Gallery & Lightbox */}
        <ProjectGallery images={project.galleryImages} />

        {/* 04. Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="pt-16 border-t border-border-stone space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl text-charcoal">Related Explorations</h3>
              <Link
                href="/projects"
                className="text-xs uppercase tracking-[0.2em] text-stone hover:text-charcoal"
              >
                View Archive →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.slug} project={rel} />
              ))}
            </div>
          </section>
        )}

        {/* 05. Previous / Next Project Navigation */}
        <ProjectNav prevProject={prevProject} nextProject={nextProject} />
      </div>

      {/* 06. Inquiry CTA Section */}
      <CTASection
        title={`Discuss ${project.title}`}
        supportingText={`Would you like to explore a project with a similar architectural program, material palette, or spatial scope?`}
        buttonText="Discuss a Project"
        projectSlug={project.slug}
      />
    </article>
  );
}
