import React from 'react';
import { JournalArticle } from '@/types/journal';
import JournalCard from './JournalCard';

interface JournalGridProps {
  articles: JournalArticle[];
  showFeaturedHero?: boolean;
}

export default function JournalGrid({ articles, showFeaturedHero = true }: JournalGridProps) {
  if (articles.length === 0) return null;

  const featured = showFeaturedHero ? articles[0] : null;
  const list = showFeaturedHero ? articles.slice(1) : articles;

  return (
    <div className="space-y-16">
      {featured && <JournalCard article={featured} featured={true} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {list.map((article) => (
          <JournalCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
