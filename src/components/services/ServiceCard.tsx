import React from 'react';
import Link from 'next/link';
import { ServiceDetail } from '@/data/services';
import SafeImage from '@/components/ui/SafeImage';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceDetail;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="bg-surface rounded-3xl border border-border-stone/60 space-y-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Service Cover Image */}
      <div className="relative aspect-[16/10] w-full bg-stone/10 overflow-hidden">
        <SafeImage
          src={service.coverImage}
          alt={service.title}
          fallbackTitle={service.title}
          fallbackCategory="Service Discipline"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3.5 py-1 text-[11px] font-mono text-olive border border-border-stone/60 rounded-full font-medium">
          0{index + 1}
        </div>
      </div>

      <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="font-serif text-3xl text-charcoal">{service.title}</h3>
          <p className="font-serif italic text-sm text-stone">{service.tagline}</p>
          <p className="text-xs sm:text-sm text-stone leading-relaxed font-sans">{service.description}</p>

          <div className="space-y-3 pt-4 border-t border-border-stone/60">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-olive font-medium font-mono">Ideal Project Typologies:</h4>
            <ul className="space-y-2">
              {service.idealFor.map((item, i) => (
                <li key={i} className="flex items-start text-xs text-charcoal space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border-stone/60">
          <Link
            href={`/contact?type=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-olive hover:text-clay font-medium transition-colors"
          >
            Discuss {service.title} <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </article>
  );
}
