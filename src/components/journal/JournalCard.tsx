import React from 'react';
import Link from 'next/link';
import { JournalArticle } from '@/types/journal';
import SafeImage from '@/components/ui/SafeImage';

interface JournalCardProps {
  article: JournalArticle;
  featured?: boolean;
}

export default function JournalCard({ article, featured = false }: JournalCardProps) {
  if (featured) {
    return (
      <Link
        href={`/journal/${article.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 bg-surface rounded-3xl border border-border-stone/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
      >
        <div className="lg:col-span-7 aspect-[16/10] relative overflow-hidden rounded-2xl bg-stone/10">
          <SafeImage
            src={article.heroImage}
            alt={article.title}
            fallbackTitle={article.title}
            fallbackCategory={article.category}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center space-x-2 text-xs">
            <span className="px-3 py-1 bg-sage text-olive font-mono text-[10px] uppercase tracking-wider rounded-full font-medium">
              {article.category}
            </span>
            <span className="text-stone font-mono text-xs">• {article.readingTime}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal group-hover:text-olive transition-colors duration-300 leading-tight">
            {article.title}
          </h2>
          <p className="text-sm text-stone line-clamp-3 leading-relaxed font-sans">
            {article.excerpt}
          </p>
          <div className="pt-2 text-xs uppercase tracking-[0.2em] text-olive font-medium group-hover:text-clay transition-colors inline-flex items-center">
            Read Article <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group block bg-surface rounded-3xl p-5 border border-border-stone/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 focus:outline-none"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-stone/10 mb-4">
        <SafeImage
          src={article.heroImage}
          alt={article.title}
          fallbackTitle={article.title}
          fallbackCategory={article.category}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="space-y-2 px-1 pb-1">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 bg-sage text-olive font-mono text-[10px] uppercase tracking-wider rounded-full font-medium">
            {article.category}
          </span>
          <span className="text-[11px] text-stone font-mono">{article.readingTime}</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl text-charcoal group-hover:text-olive transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-xs text-stone font-sans line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
