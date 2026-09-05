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
            ? 'bg-limestone/90 backdrop-blur-md border-b border-border-stone py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-clay"
          >
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-wider text-charcoal group-hover:text-clay transition-colors duration-300">
              FORMA ATELIER
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone">
              Architecture & Interiors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs uppercase tracking-[0.2em] transition-colors duration-300 py-1 ${
                    isActive ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-clay transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] px-5 py-2.5 border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-surface transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileNavOpen(true)}
            className="md:hidden p-2 text-charcoal hover:text-clay focus:outline-none focus:ring-1 focus:ring-clay"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navLinks={navLinks}
        pathname={pathname}
      />
    </>
  );
}
