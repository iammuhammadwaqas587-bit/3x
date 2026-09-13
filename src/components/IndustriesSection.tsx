import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/contentData';
import { IndustryItem, PageId } from '../types';
import { ArrowRight, Building2, Check, Landmark, PhoneCall, ShoppingBag, HeartPulse, Train } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenConsultation: () => void;
  isStandalonePage?: boolean;
  onNavigate?: (page: PageId, detailId?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenConsultation,
  isStandalonePage = false,
  onNavigate,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  const handleCardClick = (industry: IndustryItem) => {
    if (onNavigate) {
      onNavigate('industries', industry.id);
    } else {
      setSelectedIndustry(industry);
    }
  };

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'financial-services': return <Landmark className="w-5 h-5 text-emerald-600" />;
      case 'public-sector': return <Building2 className="w-5 h-5 text-[#C026D3]" />;
      case 'telecoms-media': return <PhoneCall className="w-5 h-5 text-emerald-600" />;
      case 'retail-logistics': return <ShoppingBag className="w-5 h-5 text-[#C026D3]" />;
      case 'health-care': return <HeartPulse className="w-5 h-5 text-emerald-600" />;
      default: return <Train className="w-5 h-5 text-[#C026D3]" />;
    }
  };

  return (
    <section id="industries-section" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
              <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
              <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
                Sectors & Markets
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] max-w-5xl mb-4">
              Specialized domain expertise for regulated industries
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-4xl">
              We understand the intricate compliance, security, and operational nuances of the sectors that keep society running.
            </p>
          </div>

          {!isStandalonePage && onNavigate && (
            <div className="mt-6 md:mt-0 shrink-0">
              <button
                onClick={() => onNavigate('industries')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B6B38] hover:text-[#084e29] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-5 py-2.5 rounded-full transition-all cursor-pointer group"
              >
                <span>View all sectors & regulations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

        {/* Modular Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map(industry => (
            <div
              key={industry.id}
              onClick={() => handleCardClick(industry)}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                {/* Sector banner image */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                    {getIndustryIcon(industry.id)}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-lg font-normal text-white leading-tight drop-shadow-xs">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-[#0B6B38] mb-2">
                    {industry.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {industry.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    {industry.challengesSolved.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Stat & Action */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between">
                <div>
                  <div className="text-base font-black text-slate-900">{industry.featuredStat}</div>
                  <div className="text-[10px] text-slate-500 line-clamp-1">{industry.statDescription}</div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(industry);
                  }}
                  className="bg-white hover:bg-slate-900 text-slate-900 hover:text-white border border-slate-200 text-xs font-bold px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 cursor-pointer group/btn"
                >
                  <span>Explore Sector</span>
                  <ArrowRight className="w-3 h-3 text-[#C026D3] group-hover/btn:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Detail Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div className="relative h-52">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 to-transparent" />
              <button
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider bg-[#0B6B38] px-2.5 py-1 rounded-md text-white">
                  Sector Specialism
                </span>
                <h3 className="text-2xl font-bold mt-2">
                  {selectedIndustry.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs font-bold text-[#0B6B38] mb-2">{selectedIndustry.subtitle}</p>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                {selectedIndustry.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Sector Solutions We Deploy
              </h4>
              <div className="space-y-2 mb-6">
                {selectedIndustry.challengesSolved.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
                <div className="flex items-center gap-3">
                  {onNavigate && (
                    <button
                      onClick={() => {
                        const ind = selectedIndustry;
                        setSelectedIndustry(null);
                        onNavigate('industries', ind.id);
                      }}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Full Sector Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setSelectedIndustry(null);
                      onOpenConsultation();
                    }}
                    className="bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-sm px-6 py-2.5 rounded-lg shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Sector Briefing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
