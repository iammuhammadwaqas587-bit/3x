import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/contentData';
import { CaseStudyItem } from '../types';
import { ArrowRight, Quote, CheckCircle2, TrendingUp, Sparkles, Building2 } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenConsultation: () => void;
  isStandalonePage?: boolean;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenConsultation,
  isStandalonePage = false,
}) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);
  const featured = CASE_STUDIES_DATA[0];
  const others = CASE_STUDIES_DATA.slice(1);

  return (
    <section id="case-studies-section" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="w-[90%] mx-auto">
        {/* Header - Capita editorial style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-4 bg-[#0B6B38] rounded-full inline-block" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Proven Client Impact & Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-semibold text-slate-900 tracking-tight leading-tight">
              Real outcomes for critical organizations
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed font-normal">
              Discover how 3XTECH Solution Services enables banking giants, regional public councils, and national telecom providers to modernize operations.
            </p>
          </div>
        </div>

        {/* Featured Case Study - Capita flagship spotlight card */}
        <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-xl border border-slate-800 mb-12 grid grid-cols-1 lg:grid-cols-12 group">
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="bg-[#C026D3] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                  Featured Case Study
                </span>
                <span className="bg-slate-800 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-md border border-slate-700">
                  {featured.sector}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-emerald-300 transition-colors">
                {featured.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {featured.summary}
              </p>

              {/* Outcomes list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {featured.outcomes.slice(0, 4).map((out, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C026D3] shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-3xl font-black text-[#C026D3]">{featured.impactMetric}</div>
                <div className="text-xs text-slate-400">{featured.impactLabel}</div>
              </div>

              <button
                onClick={() => setSelectedCase(featured)}
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
            
            {featured.testimonial && (
              <div className="absolute bottom-6 inset-x-6 bg-slate-950/85 backdrop-blur-md p-5 rounded-xl border border-slate-800 text-xs">
                <Quote className="w-5 h-5 text-[#C026D3] mb-2 opacity-80" />
                <p className="text-slate-200 italic mb-2">"{featured.testimonial.quote}"</p>
                <div className="font-bold text-white">{featured.testimonial.author}</div>
                <div className="text-slate-400 text-[11px]">{featured.testimonial.role}</div>
              </div>
            )}
          </div>
        </div>

        {/* Modular Grid of Additional Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {item.sector}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white text-xs font-bold px-2.5 py-1 rounded-md border border-slate-700">
                    <span className="text-[#C026D3]">{item.impactMetric}</span> {item.impactLabel}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold text-slate-400 block mb-1">
                    {item.clientName}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#0B6B38] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedCase(item)}
                  className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View case breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Full Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div className="relative h-60">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider bg-[#C026D3] px-2.5 py-1 rounded-md text-white">
                  {selectedCase.sector}
                </span>
                <h3 className="text-2xl font-bold mt-2 leading-tight">
                  {selectedCase.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Impact Banner */}
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mb-6 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-[#0B6B38]">{selectedCase.impactMetric}</div>
                  <div className="text-xs font-semibold text-slate-700">{selectedCase.impactLabel}</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-400 uppercase">Sector</span>
                  <div className="text-sm font-bold text-slate-800">{selectedCase.sector}</div>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  The Client Challenge
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedCase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  The 3XTECH Solution
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedCase.solution}
                </p>
              </div>

              {/* Measurable Outcomes */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Transformation Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCase.outcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-800 bg-slate-50 p-2.5 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote if available */}
              {selectedCase.testimonial && (
                <div className="bg-slate-900 text-white p-5 rounded-xl mb-8">
                  <p className="italic text-sm text-slate-200 mb-2">
                    "{selectedCase.testimonial.quote}"
                  </p>
                  <div className="font-bold text-sm text-emerald-400">{selectedCase.testimonial.author}</div>
                  <div className="text-xs text-slate-400">{selectedCase.testimonial.role}</div>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    onOpenConsultation();
                  }}
                  className="bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md flex items-center gap-2"
                >
                  <span>Replicate These Results</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
