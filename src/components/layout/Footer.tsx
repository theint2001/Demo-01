import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-graphite text-limestone pt-20 pb-12 border-t border-graphite/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-limestone/15">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl tracking-wider text-surface block">
                FORMA ATELIER
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-limestone/60 mt-1 block">
                Architecture & Interiors
              </span>
            </Link>
            <p className="text-sm font-serif italic text-limestone/80 max-w-sm leading-relaxed">
              “Architecture for quiet living. We design considered spaces where light, material and everyday life work together.”
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-clay font-medium">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-[0.15em]">
              <li>
                <Link href="/projects" className="text-limestone/70 hover:text-surface transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-limestone/70 hover:text-surface transition-colors">
                  Studio Story
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-limestone/70 hover:text-surface transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-limestone/70 hover:text-surface transition-colors">
                  Journal &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-limestone/70 hover:text-surface transition-colors">
                  Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-clay font-medium">
              Studio Reach
            </h4>
            <div className="space-y-2 text-xs text-limestone/70 font-sans leading-relaxed">
              <p>Inquiries: hello@forma-atelier.example</p>
              <p>Locations: Northern Coast &amp; Old Quarter Studios</p>
            </div>
            <div className="pt-4 flex items-center space-x-6 text-xs uppercase tracking-[0.2em] text-limestone/60">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-surface transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-surface transition-colors"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>

        {/* Footer Credit & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-limestone/40 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} FORMA ATELIER. All rights reserved.</p>
          <p className="text-[11px] font-sans tracking-wide">
            Concept website designed &amp; built by Nexora.
          </p>
        </div>
      </div>
    </footer>
  );
}
