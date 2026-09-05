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
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-10 border-b border-border-stone"
      >
        <div className="lg:col-span-7 aspect-[16/10] relative overflow-hidden bg-stone/10">
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
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-stone">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal group-hover:text-clay transition-colors duration-300 leading-tight">
            {article.title}
          </h2>
          <p className="text-sm text-stone line-clamp-3 leading-relaxed font-sans">
            {article.excerpt}
          </p>
          <div className="pt-2 text-xs uppercase tracking-[0.2em] text-charcoal font-medium group-hover:text-clay transition-colors inline-flex items-center">
            Read Article <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group block space-y-4 focus:outline-none focus:ring-1 focus:ring-clay"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-stone/10">
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

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-stone uppercase tracking-[0.15em]">
          <span>{article.category}</span>
          <span>{article.readingTime}</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl text-charcoal group-hover:text-clay transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-xs text-stone font-sans line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
