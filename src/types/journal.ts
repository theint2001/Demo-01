export interface JournalSection {
  heading?: string;
  body: string;
  quote?: string;
  image?: {
    url: string;
    caption: string;
  };
}

export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  heroImage: string;
  heroImageCaption?: string;
  content: {
    intro: string;
    sections: JournalSection[];
  };
  relatedProjects?: string[];
  relatedArticles?: string[];
}
