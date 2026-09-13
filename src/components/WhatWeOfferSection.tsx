import React from 'react';
import { ArrowRight, Briefcase, Headphones, Network, Lightbulb } from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/contentData';

interface WhatWeOfferSectionProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onSelectService?: (service: ServiceItem) => void;
  onOpenConsultation?: () => void;
}

interface ServiceCard {
  id: string;
  categoryName: string;
  title: string;
  shortDesc: string;
  image: string;
  serviceDataId: string;
  icon: React.ReactNode;
}

export const WhatWeOfferSection: React.FC<WhatWeOfferSectionProps> = ({
  onNavigate,
  onSelectService,
  onOpenConsultation,
}) => {
  const services: ServiceCard[] = [
    {
      id: 'project-management',
      serviceDataId: 'project-management',
      categoryName: 'Project Management',
      title: 'Expert Project Management',
      shortDesc: 'Rigorous governance, agile sprint leadership, and transparent milestone tracking delivering IT initiatives on time and on budget.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      icon: <Briefcase className="w-4 h-4 text-emerald-600" />,
    },
    {
      id: 'technical-support',
      serviceDataId: 'technical-support',
      categoryName: 'Technical Support',
      title: 'Responsive Technical Support',
      shortDesc: 'Rapid-response Tier 1–3 helpdesk, proactive workstation and server monitoring, and guaranteed sub-15-minute SLA resolution.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      icon: <Headphones className="w-4 h-4 text-[#C026D3]" />,
    },
    {
      id: 'managed-network',
      serviceDataId: 'managed-network',
      categoryName: 'Network Services',
      title: 'Managed Network Services',
      shortDesc: 'Dependable enterprise connectivity, high-availability SD-WAN, and zero-trust perimeter defense engineered for continuous operations.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      icon: <Network className="w-4 h-4 text-[#00D2D3]" />,
    },
    {
      id: 'consulting',
      serviceDataId: 'consulting',
      categoryName: 'Consulting',
      title: 'Consulting Service',
      shortDesc: 'Strategic technology roadmaps, IT infrastructure audits, and vendor-neutral architecture advisory aligned with business goals.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      icon: <Lightbulb className="w-4 h-4 text-amber-500" />,
    },
  ];

  const handleCardClick = (service: ServiceCard) => {
    const found = SERVICES_DATA.find(s => s.id === service.serviceDataId || s.category === service.id);
    if (onSelectService && found) {
      onSelectService(found);
    } else {
      onNavigate('solutions', service.serviceDataId);
    }
  };

  return (
    <section id="what-we-offer-section" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="w-[90%] mx-auto">
        {/* Top Tag: Vertical cyan accent bar + Pill badge matching sample screenshot */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
          <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
          <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
            What we offer
          </span>
        </div>

        {/* Header matching sample: Left headline & subtext + Right outlined pill button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] mb-4">
              Enhancing essential services at scale
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
              We make a difference where it matters most. Our work simplifies processes, improves lives, and delivers results at scale.
            </p>
          </div>

          {/* Right Outlined Pill Button */}
          <div className="shrink-0 self-start lg:self-end">
            <button
              onClick={() => onNavigate('solutions')}
              id="what-we-offer-explore-btn"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-900 text-slate-900 hover:text-white border border-slate-900 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <span>Explore what we do</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Cards Layout matching sample screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service)}
              className="group flex flex-col cursor-pointer text-left focus:outline-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(service);
                }
              }}
            >
              {/* Image Container with rounded corners + signature corner tab with arrow */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Corner tab in bottom-right corner with arrow matching sample screenshot */}
                <div className="absolute bottom-0 right-0 bg-white pt-2 pl-2 rounded-tl-xl flex items-center justify-center shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#0a1128] text-slate-900 group-hover:text-white flex items-center justify-center transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Title & Description under image matching sample */}
              <div className="pt-3.5 flex flex-col">
                <h3 className="text-base sm:text-lg lg:text-[19px] font-normal text-slate-900 leading-snug group-hover:text-[#0a1128] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-1.5">
                  {service.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
