import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SafeImage from '@/components/ui/SafeImage';
import { JOURNAL_ARTICLES } from '@/data/journal';
import { PROJECTS } from '@/data/projects';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProjectCard from '@/components/projects/ProjectCard';
import JournalCard from '@/components/journal/JournalCard';
import CTASection from '@/components/ui/CTASection';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = JOURNAL_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Article Not Found — FORMA ATELIER',
    };
  }

  return {
    title: `${article.title} — FORMA ATELIER Journal`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} — FORMA ATELIER Journal`,
      description: article.excerpt,
      images: [{ url: article.heroImage }],
    },
  };
}

export default function JournalArticlePage({ params }: Props) {
  const article = JOURNAL_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    notFound();
  }

  // Related projects resolution
  const relatedProjectSlugs = article.relatedProjects || [];
  const relatedProjects = PROJECTS.filter((p) => relatedProjectSlugs.includes(p.slug));

  // Related articles resolution
  const relatedArticleSlugs = article.relatedArticles || [];
  const relatedArticles = JOURNAL_ARTICLES.filter(
    (a) => a.slug !== article.slug && (relatedArticleSlugs.includes(a.slug) || a.category === article.category)
  ).slice(0, 3);

  return (
    <article className="bg-limestone min-h-screen pt-28 pb-24 space-y-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Journal', href: '/journal' },
            { label: article.title },
          ]}
        />

        {/* Header Metadata */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-clay font-medium">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight leading-[1.05]">
            {article.title}
          </h1>
          <p className="text-base sm:text-xl text-stone font-serif italic leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Hero Image */}
        <div className="space-y-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone/10 border border-border-stone shadow-md">
            <SafeImage
              src={article.heroImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          {article.heroImageCaption && (
            <p className="text-xs font-serif italic text-stone text-center">
              {article.heroImageCaption}
            </p>
          )}
        </div>

        {/* Intro */}
        <div className="prose prose-stone max-w-none">
          <p className="font-serif text-lg text-charcoal leading-relaxed border-l-2 border-clay pl-6 py-1">
            {article.content.intro}
          </p>
        </div>

        {/* Body Sections */}
        <div className="space-y-12 pt-6">
          {article.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  {section.heading}
                </h2>
              )}
              <p className="text-sm sm:text-base text-stone leading-relaxed font-sans">
                {section.body}
              </p>

              {section.quote && (
                <blockquote className="my-8 p-6 bg-surface border-l-4 border-clay font-serif italic text-lg sm:text-xl text-charcoal leading-relaxed">
                  “{section.quote}”
                </blockquote>
              )}

              {section.image && (
                <div className="my-8 space-y-2">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone/10 border border-border-stone">
                    <SafeImage
                      src={section.image.url}
                      alt={section.image.caption}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-stone font-serif italic text-center">
                    {section.image.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="pt-16 border-t border-border-stone space-y-6">
            <h3 className="text-xs uppercase tracking-[0.25em] text-clay font-medium">
              Architectural Context — Related Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="pt-16 border-t border-border-stone space-y-6">
            <h3 className="text-xs uppercase tracking-[0.25em] text-clay font-medium">
              Further Journal Reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <JournalCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>

      <CTASection />
    </article>
  );
}
