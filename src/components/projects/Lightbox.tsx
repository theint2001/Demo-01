'use client';

import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectGalleryImage } from '@/types/project';
import SafeImage from '@/components/ui/SafeImage';

interface LightboxProps {
  images: ProjectGalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || currentIndex === null) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-graphite/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-limestone text-xs uppercase tracking-[0.2em] z-10">
        <span>
          Image {currentIndex + 1} of {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="p-2 text-limestone/70 hover:text-surface hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-clay"
          aria-label="Close Lightbox (Escape)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 sm:left-4 z-20 p-3 text-limestone/70 hover:text-surface bg-graphite/50 hover:bg-graphite/80 rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-clay"
            aria-label="Previous Image (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center">
          <SafeImage
            src={currentImage.url}
            alt={currentImage.caption || 'Project gallery image'}
            fallbackTitle={`Gallery Image ${currentIndex + 1}`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {images.length > 1 && (
          <button
            type="button"
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-2 sm:right-4 z-20 p-3 text-limestone/70 hover:text-surface bg-graphite/50 hover:bg-graphite/80 rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-clay"
            aria-label="Next Image (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Caption */}
      <div className="text-center max-w-2xl mx-auto z-10">
        {currentImage.caption && (
          <p className="text-xs sm:text-sm font-serif italic text-limestone/80 leading-relaxed">
            {currentImage.caption}
          </p>
        )}
      </div>
    </div>
  );
}
