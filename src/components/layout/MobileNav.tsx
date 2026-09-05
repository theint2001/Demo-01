'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  pathname: string;
}

export default function MobileNav({ isOpen, onClose, navLinks, pathname }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-graphite/60 backdrop-blur-md transition-opacity duration-300 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className="w-full max-w-xs sm:max-w-sm bg-surface h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-border-stone/60 animate-in slide-in-from-right duration-300 overflow-y-auto">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-border-stone/60">
            <span className="font-serif text-lg tracking-wider text-charcoal">
              FORMA ATELIER
            </span>
            <button
              onClick={onClose}
              className="p-2.5 text-stone hover:text-charcoal bg-sage/40 rounded-full transition-colors focus:outline-none"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5 text-olive" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-4">
            <Link
              href="/"
              onClick={onClose}
              className={`text-xs uppercase tracking-[0.2em] font-mono p-3 rounded-2xl transition-all ${
                pathname === '/' ? 'bg-olive text-surface font-medium shadow-xs' : 'text-charcoal hover:bg-sage/40'
              }`}
            >
              Overview
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className={`text-xs uppercase tracking-[0.2em] font-mono p-3 rounded-2xl transition-all ${
                    isActive ? 'bg-olive text-surface font-medium shadow-xs' : 'text-charcoal hover:bg-sage/40'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-border-stone/60 space-y-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="block text-center w-full py-3.5 bg-olive text-surface text-xs uppercase tracking-[0.2em] font-medium rounded-full shadow-xs hover:bg-clay transition-colors"
          >
            Discuss a Project
          </Link>
          <div className="text-xs text-stone space-y-1">
            <p className="font-serif italic text-sm text-charcoal">Architecture for quiet living.</p>
            <p className="text-[10px] font-mono text-olive mt-3">
              Concept website designed &amp; built by Nexora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
