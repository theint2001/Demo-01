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
      className="fixed inset-0 z-50 bg-graphite/60 backdrop-blur-sm transition-opacity duration-300 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className="w-full max-w-sm bg-surface h-full p-8 flex flex-col justify-between shadow-2xl border-l border-border-stone/40 animate-in slide-in-from-right duration-300">
        <div>
          <div className="flex items-center justify-between pb-8 border-b border-border-stone">
            <span className="font-serif text-lg tracking-wider text-charcoal">
              FORMA ATELIER
            </span>
            <button
              onClick={onClose}
              className="p-2 text-stone hover:text-charcoal focus:outline-none"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-6">
            <Link
              href="/"
              onClick={onClose}
              className={`text-sm uppercase tracking-[0.2em] transition-colors ${
                pathname === '/' ? 'text-clay font-medium' : 'text-charcoal hover:text-clay'
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
                  className={`text-sm uppercase tracking-[0.2em] transition-colors ${
                    isActive ? 'text-clay font-medium' : 'text-charcoal hover:text-clay'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-8 border-t border-border-stone space-y-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="block text-center w-full py-3 border border-charcoal text-charcoal text-xs uppercase tracking-[0.2em] hover:bg-charcoal hover:text-surface transition-colors"
          >
            Discuss a Project
          </Link>
          <div className="text-xs text-stone space-y-1">
            <p>Architecture for quiet living.</p>
            <p className="text-[10px] text-stone/80 mt-4">
              Concept website designed &amp; built by Nexora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
