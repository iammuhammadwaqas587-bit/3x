import React, { useState } from 'react';
import { PageId, IndustryItem } from '../types';
import { INDUSTRIES_DATA, COMPANY_INFO } from '../data/contentData';
import { 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  Landmark, 
  PhoneCall, 
  ShoppingBag, 
  HeartPulse, 
  Train, 
  ShieldCheck, 
  Lock, 
  Calendar,
  Layers,
  Cpu,
  Database,
  Cloud
} from 'lucide-react';

interface IndustriesPageProps {
  onOpenConsultation: () => void;
  onNavigate: (page: PageId) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [activeSectorId, setActiveSectorId] = useState<string | null>(null);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'financial-services': return <Landmark className="w-5 h-5 text-emerald-600" />;
      case 'public-sector': return <Building2 className="w-5 h-5 text-[#C026D3]" />;
      case 'telecoms-media': return <PhoneCall className="w-5 h-5 text-sky-600" />;
      case 'retail-logistics': return <ShoppingBag className="w-5 h-5 text-amber-600" />;
      case 'health-care': return <HeartPulse className="w-5 h-5 text-rose-600" />;
      default: return <Train className="w-5 h-5 text-indigo-600" />;
    }
  };

  const getRegulatoryBadge = (id: string) => {
    switch (id) {
      case 'financial-services': return ['FCA Regulated', 'PCI-DSS v4.0', 'Open Banking', 'ISO 27001'];
      case 'public-sector': return ['Crown Commercial Aligned', 'WCAG 2.2 AA', 'UK Cloud First', 'Cyber Essentials+'];
      case 'telecoms-media': return ['Ofcom Aligned', '99.99% High-Volume SLA', 'GDPR Data Residency'];
      case 'retail-logistics': return ['PCI-DSS Validated', 'EDI / Supply Chain Standards', 'Peak-Scale Cloud'];
      case 'health-care': return ['NHS DSPT Compliant', 'HIPAA / Caldicott Principles', 'ISO 27701 Privacy'];
      default: return ['National Infrastructure Security', 'Critical SLA Guarantees', 'High-Availability'];
    }
  };

  const filteredIndustries = activeSectorId
    ? INDUSTRIES_DATA.filter(i => i.id === activeSectorId)
    : INDUSTRIES_DATA;

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner Header with Signature Visual Grammar */}
      <section className="bg-[#F8FAFC] border-b border-slate-200 py-16 sm:py-20 lg:py-24">
        <div className="w-[90%] mx-auto">
          {/* Cyan vertical accent bar + Pill badge */}
          <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
            <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
            <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
              Sectors & Regulated Markets
            </span>
          </div>

          <div className="max-w-4xl mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] mb-4">
              Specialized domain expertise for regulated industries
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
              We understand the intricate compliance, security, and operational nuances of the sectors that keep society running. From government digital portals to banking-grade cloud security, we align technical solutions with industry mandates.
            </p>
          </div>

          {/* Sector Filter Chips */}
          <div className="pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Jump to Regulated Sector:
              </span>
              {activeSectorId && (
                <button
                  onClick={() => setActiveSectorId(null)}
                  className="text-xs text-[#0B6B38] hover:underline font-semibold cursor-pointer"
                >
                  Show all sectors ({INDUSTRIES_DATA.length})
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSectorId(null)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-full transition-all cursor-pointer font-normal ${
                  activeSectorId === null
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                All Regulated Sectors
              </button>
              {INDUSTRIES_DATA.map(industry => {
                const isSelected = activeSectorId === industry.id;
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveSectorId(isSelected ? null : industry.id)}
                    className={`inline-flex items-center gap-2 text-xs sm:text-sm px-4 py-2 rounded-full transition-all cursor-pointer font-normal ${
                      isSelected
                        ? 'bg-[#00D2D3] text-slate-950 font-semibold shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {getIndustryIcon(industry.id)}
                    <span>{industry.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Sectors List / Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="w-[90%] mx-auto space-y-12 sm:space-y-16">
          {filteredIndustries.map((industry, index) => {
            const isReversed = index % 2 !== 0;
            const badges = getRegulatoryBadge(industry.id);

            return (
              <div
                key={industry.id}
                id={`sector-${industry.id}`}
                className="bg-slate-50/70 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left / Visual Image Column (5 Cols) */}
                  <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative overflow-hidden bg-slate-900 min-h-[320px]">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />

                    {/* Sector Icon & Name Overlay */}
                    <div className="absolute top-5 left-5 bg-white/95 text-slate-900 text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                      {getIndustryIcon(industry.id)}
                      <span>{industry.title}</span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                        Sector Impact Benchmark
                      </span>
                      <div className="text-3xl font-normal text-white">
                        {industry.featuredStat}
                      </div>
                      <div className="text-xs text-slate-200 font-normal mt-0.5">
                        {industry.statDescription}
                      </div>
                    </div>
                  </div>

                  {/* Right / Content Column (7 Cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
                    <div>
                      {/* Regulatory Compliance Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className="bg-emerald-50 text-[#0B6B38] border border-emerald-200 text-[11px] font-semibold px-2.5 py-0.5 rounded"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-2">
                        {industry.title}
                      </h2>
                      <p className="text-base text-[#0B6B38] font-normal mb-3">
                        {industry.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                        {industry.description}
                      </p>
                    </div>

                    {/* Challenges Solved */}
                    <div className="bg-white rounded-xl border border-slate-200 p-5">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                        Operational Challenges Solved:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {industry.challengesSolved.map((chal, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-normal">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{chal}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <div className="text-xs text-slate-500 font-normal">
                        Covered by 3XTech Project Management, Support, Network & Consulting
                      </div>

                      <button
                        onClick={onOpenConsultation}
                        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#0B6B38] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer shadow-xs"
                      >
                        <span>Schedule {industry.title.split(' ')[0]} Scoping</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Regulated Sector Delivery Commitments */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="w-[90%] mx-auto">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Delivery Safeguards
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-snug">
              Why critical and regulated organizations partner with 3XTech
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0B6B38] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-normal text-slate-900 mb-2">UK Data Sovereignty</h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                All cloud architectures, helpdesks, and telemetry data remain strictly within UK jurisdiction, fulfilling GDPR, NHS, and government guidelines.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-[#C026D3] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-normal text-slate-900 mb-2">Zero Operational Interruption</h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Our project delivery and managed network teams execute phased cutovers and dual-run testing to guarantee continuous public or customer service.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-normal text-slate-900 mb-2">Outcome-Linked SLAs</h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                We contractually commit to tangible milestones, resolution latency thresholds, and system availability figures backed by financial guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
