'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import MobileNav from './MobileNav';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Studio', href: '/studio' },
    { name: 'Services', href: '/services' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-surface/85 backdrop-blur-md border-b border-border-stone/60 py-3.5 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-olive"
          >
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-wider text-charcoal group-hover:text-olive transition-colors duration-300">
              FORMA ATELIER
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-olive font-mono">
              Architecture &amp; Interiors
            </span>
          </Link>

          {/* Desktop Navigation (Visible on lg screens >= 1024px) */}
          <nav className="hidden lg:flex items-center space-x-1 border border-border-stone/60 bg-surface/60 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[11px] uppercase tracking-[0.18em] transition-all duration-300 px-4 py-1.5 rounded-full ${
                    isActive ? 'text-surface bg-olive font-medium shadow-xs' : 'text-stone hover:text-charcoal hover:bg-sage/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button (Visible on lg screens >= 1024px) */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] px-6 py-2.5 rounded-full border border-olive text-olive hover:bg-olive hover:text-surface transition-all duration-300 font-medium shadow-xs"
            >
              Contact
            </Link>
          </div>

          {/* Mobile & iPad Menu Button (Visible on screens < 1024px including iPad) */}
          <button
            type="button"
            onClick={() => setMobileNavOpen(true)}
            className="lg:hidden p-2 text-charcoal hover:text-olive focus:outline-none"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile & iPad Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navLinks={navLinks}
        pathname={pathname}
      />
    </>
  );
}
