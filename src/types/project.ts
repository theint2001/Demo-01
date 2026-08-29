export type ProjectCategory = 'Residential' | 'Hospitality' | 'Workplace' | 'Objects / Interior';

export type ProjectStatus = 'Concept' | 'Completed Concept' | 'Ongoing Concept';

export interface ProjectGalleryImage {
  url: string;
  caption: string;
  aspectRatio?: 'wide' | 'tall' | 'square';
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  location: string;
  status: ProjectStatus;
  area: string;
  type: string;
  description: string;
  longDescription: string;
  challenge: string;
  approach: string;
  designConcept: string;
  materials: string[];
  projectTags: string[];
  featured: boolean;
  coverImage: string;
  galleryImages: ProjectGalleryImage[];
  relatedProjects?: string[];
  relatedJournal?: string[];
  servicesProvided: string[];
  clientScope?: string;
}
