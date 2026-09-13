import React, { useEffect } from 'react';
import { ServiceItem, PageId } from '../types';
import { SERVICES_DATA, BUSINESS_SERVICES_DOMAINS, COMPANY_INFO } from '../data/contentData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  Calendar, 
  FileText,
  Briefcase,
  Headphones,
  Network,
  Lightbulb,
  Cpu,
  Database,
  Cloud,
  Lock,
  Layers,
  BarChart3
} from 'lucide-react';

interface SingleServicePageProps {
  service: ServiceItem;
  onBack: () => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
  onNavigate: (page: PageId) => void;
}

export const SingleServicePage: React.FC<SingleServicePageProps> = ({
  service,
  onBack,
  onSelectService,
  onOpenConsultation,
  onNavigate,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service.id]);

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'project-management':
        return <Briefcase className="w-6 h-6 text-emerald-600" />;
      case 'technical-support':
        return <Headphones className="w-6 h-6 text-[#C026D3]" />;
      case 'managed-network':
        return <Network className="w-6 h-6 text-[#00D2D3]" />;
      case 'consulting':
        return <Lightbulb className="w-6 h-6 text-amber-500" />;
      default:
        return <Briefcase className="w-6 h-6 text-emerald-600" />;
    }
  };

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'Managed IT': return <Cpu className="w-3.5 h-3.5 text-emerald-600" />;
      case 'Data Governance': return <Database className="w-3.5 h-3.5 text-blue-600" />;
      case 'Enterprise Architecture': return <Layers className="w-3.5 h-3.5 text-purple-600" />;
      case 'Cloud Data Architecture': return <Cloud className="w-3.5 h-3.5 text-sky-600" />;
      case 'Virtualization': return <Cpu className="w-3.5 h-3.5 text-teal-600" />;
      case 'Visualization': return <BarChart3 className="w-3.5 h-3.5 text-amber-600" />;
      case 'Modernisation': return <Layers className="w-3.5 h-3.5 text-indigo-600" />;
      case 'Application Development': return <Cpu className="w-3.5 h-3.5 text-violet-600" />;
      case 'Cybersecurity': return <Lock className="w-3.5 h-3.5 text-rose-600" />;
      default: return <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />;
    }
  };

  const deliverables = service.deliverables || service.keyFeatures;
  const deliverablesHeading = service.deliverablesTitle || 'What We Deliver:';

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Navigation Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-3.5">
        <div className="w-[90%] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-slate-900 transition-colors font-medium cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-400">/</span>
            <button
              onClick={onBack}
              className="hover:text-slate-900 transition-colors font-medium cursor-pointer"
            >
              Services & Solutions
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-semibold">{service.title}</span>
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-medium cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all services</span>
          </button>
        </div>
      </div>

      {/* Hero Banner with Unified Styling */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-12 sm:py-16">
        <div className="w-[90%] mx-auto">
          {/* Cyan marker + Pill badge */}
          <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
            <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
            <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
              {service.categoryLabel} • 3XTech Core Service
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] mb-3">
              {service.title}
            </h1>
            {service.subtitle && (
              <p className="text-xl sm:text-2xl text-[#0B6B38] font-normal tracking-tight mb-4">
                {service.subtitle}
              </p>
            )}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Two-Column Detail Layout */}
      <div className="py-12 sm:py-16">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Left Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Visual Hero Image Card */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 aspect-[16/9] relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                    Enterprise SLA Commitment
                  </span>
                  <div className="text-3xl sm:text-4xl font-normal tracking-tight text-white">
                    {service.metrics.stat}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-normal mt-0.5">
                    {service.metrics.label}
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-[#00D2D3] hover:text-slate-950 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md transition-colors cursor-pointer"
                >
                  <span>Book Architecture Scoping</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Exact Deliverables / Why Choose Us Section */}
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                  {getServiceIcon(service.category)}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                    {deliverablesHeading}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    Precision engineering standards executed across all enterprise engagements
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3 shadow-xs hover:border-slate-300 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-normal text-slate-900 leading-snug block">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actual Business Service Structure Alignment */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10">
              <div className="mb-6">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-1 h-5 bg-[#00D2D3] rounded-full inline-block" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Business Service Architecture
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-2">
                  Integrated systems, data, cloud and security capabilities
                </h3>
                <p className="text-base text-slate-600 font-normal leading-relaxed">
                  3XTech combines deep domain proficiencies across the actual business service structure to deliver resilient, end-to-end technology solutions:
                </p>
              </div>

              {/* 9 Business Domains Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {BUSINESS_SERVICES_DOMAINS.map((domain) => {
                  const isHighlighted = service.serviceMatrix?.includes(domain);
                  return (
                    <div
                      key={domain}
                      className={`p-3.5 rounded-xl border transition-all text-left flex items-center gap-2.5 ${
                        isHighlighted
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      <div className={`p-1.5 rounded-md ${isHighlighted ? 'bg-slate-800 text-[#00D2D3]' : 'bg-white'}`}>
                        {getDomainIcon(domain)}
                      </div>
                      <span className="text-xs sm:text-sm font-normal leading-tight">
                        {domain}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Engagement Lifecycle Steps */}
            {service.processSteps && (
              <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-8 sm:p-10">
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    Structured Execution
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                    How we deliver and manage this service
                  </h3>
                </div>

                <div className="space-y-4">
                  {service.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4 shadow-xs"
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-base font-normal text-slate-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-600 font-normal leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6 sticky top-20">
            {/* Consultation Action Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-7 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D2D3]/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="bg-[#00D2D3] text-slate-950 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md inline-block mb-4">
                Architecture Consultation
              </span>
              <h3 className="text-2xl font-normal text-white mb-2 leading-tight">
                Discuss your {service.categoryLabel} requirements
              </h3>
              <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                Connect with our practice leads in Potters Bar, Hertfordshire. We evaluate your current topology and provide actionable roadmaps.
              </p>

              <button
                onClick={onOpenConsultation}
                className="w-full bg-[#00D2D3] hover:bg-[#00D2D3]/90 text-slate-950 font-semibold text-sm py-3 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer mb-5"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Technical Scoping</span>
              </button>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00D2D3]" />
                  <span>{COMPANY_INFO.phoneFormatted} (Direct Desk)</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Practice Lead</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Quick Service Switcher */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h4 className="text-base font-normal text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Explore All Core Services
              </h4>
              <div className="space-y-2">
                {SERVICES_DATA.map((item) => {
                  const isCurrent = item.id === service.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelectService(item)}
                      className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm font-normal cursor-pointer ${
                        isCurrent
                          ? 'bg-slate-900 text-white font-medium'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-[#00D2D3]' : 'bg-slate-400'}`} />
                        <span>{item.title}</span>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#00D2D3]' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Governance & Compliance Standards */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 text-slate-900 font-normal text-sm mb-3">
                <ShieldCheck className="w-4 h-4 text-[#0B6B38]" />
                <span>Governance & Compliance</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                All 3XTech services operate in alignment with strict UK public sector standards, ISO 27001 data security, and Cyber Essentials Plus protocols.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600 font-medium">
                <span className="bg-white border border-slate-200 px-2 py-1 rounded">ISO 27001</span>
                <span className="bg-white border border-slate-200 px-2 py-1 rounded">Cyber Essentials+</span>
                <span className="bg-white border border-slate-200 px-2 py-1 rounded">Net-Zero Pledged</span>
                <span className="bg-white border border-slate-200 px-2 py-1 rounded">Crown Commercial Aligned</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
