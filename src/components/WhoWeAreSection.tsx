import React from 'react';
import { ArrowRight, Briefcase, Headphones, Network, Lightbulb, MapPin } from 'lucide-react';
import { PageId } from '../types';

interface WhoWeAreSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation?: () => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ onNavigate }) => {
  return (
    <section id="who-we-are-section" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-slate-50 via-white to-slate-100/60 border-b border-slate-200/90 relative overflow-hidden">
      {/* Subtle ambient light accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[90%] mx-auto relative z-10">
        {/* Top Tag matching Capita layout: Cyan vertical accent bar + Pill badge */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
          <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
          <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
            Who we are
          </span>
        </div>

        {/* Large Editorial Headline - strictly centered on the 4 services */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] max-w-5xl mb-8 sm:mb-10">
          3XTech Ltd delivers Expert Project Management, Responsive Technical Support, Managed Network Services, and Consulting Services.
        </h2>

        {/* Bottom Split Row: Descriptive Paragraph & Explore Pill Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-2">
          <div className="max-w-3xl">
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
              Based in Potters Bar, Hertfordshire, we work with organisations that need dependable systems, clearer data and better digital services.
            </p>

            {/* Quick location & 4 core specialism pills */}
            <div className="flex flex-wrap items-center gap-2.5 mt-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#00D2D3]" />
                Potters Bar, Hertfordshire
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                Expert Project Management
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                <Headphones className="w-3.5 h-3.5 text-[#C026D3]" />
                Responsive Technical Support
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                <Network className="w-3.5 h-3.5 text-[#00D2D3]" />
                Managed Network Services
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                Consulting Service
              </span>
            </div>
          </div>

          {/* Capita-style Dark Navy Pill CTA Button */}
          <div className="shrink-0 self-start md:self-center">
            <button
              onClick={() => onNavigate('about')}
              id="who-we-are-cta"
              className="inline-flex items-center justify-center gap-3 bg-[#0a1128] hover:bg-[#152042] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 group cursor-pointer"
            >
              <span>Explore who we are</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
