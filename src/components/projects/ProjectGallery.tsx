'use client';

import React, { useState } from 'react';
import { ProjectGalleryImage } from '@/types/project';
import Lightbox from './Lightbox';
import SafeImage from '@/components/ui/SafeImage';
import { Maximize2 } from 'lucide-react';

interface ProjectGalleryProps {
  images: ProjectGalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <section className="space-y-8 py-8" aria-label="Project Visual Gallery">
      <div className="flex items-center justify-between border-b border-border-stone pb-4">
        <h3 className="font-serif text-2xl text-charcoal">Visual Study</h3>
        <span className="text-xs uppercase tracking-[0.15em] text-stone">
          Click image to expand ({images.length})
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {images.map((img, index) => {
          let colSpan = 'md:col-span-6';
          let aspect = 'aspect-[4/3]';

          if (img.aspectRatio === 'wide') {
            colSpan = 'md:col-span-12';
            aspect = 'aspect-[16/9]';
          } else if (img.aspectRatio === 'square') {
            colSpan = 'md:col-span-6';
            aspect = 'aspect-square';
          } else if (img.aspectRatio === 'tall') {
            colSpan = 'md:col-span-6';
            aspect = 'aspect-[3/4]';
          }

          return (
            <div
              key={index}
              className={`${colSpan} group relative bg-stone/10 overflow-hidden cursor-pointer shadow-sm`}
              onClick={() => setActiveLightboxIndex(index)}
            >
              <div className={`relative w-full ${aspect}`}>
                <SafeImage
                  src={img.url}
                  alt={img.caption || `Gallery image ${index + 1}`}
                  fallbackTitle={`Visual Study ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-graphite/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 bg-surface/90 text-charcoal rounded-full shadow-md transform scale-95 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>
              {img.caption && (
                <p className="p-3 text-xs font-serif italic text-stone bg-surface/50 border-t border-border-stone/40">
                  {img.caption}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Dialog */}
      <Lightbox
        images={images}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </section>
  );
}
