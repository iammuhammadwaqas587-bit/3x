import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES_DATA, BUSINESS_SERVICES_DOMAINS } from '../data/contentData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  Sparkles,
  Server,
  Code2
} from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenConsultation,
  onNavigate,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'Managed IT': return <Cpu className="w-4 h-4 text-emerald-600" />;
      case 'Data Governance': return <Database className="w-4 h-4 text-blue-600" />;
      case 'Enterprise Architecture': return <Layers className="w-4 h-4 text-purple-600" />;
      case 'Cloud Data Architecture': return <Cloud className="w-4 h-4 text-sky-600" />;
      case 'Virtualization': return <Server className="w-4 h-4 text-teal-600" />;
      case 'Visualization': return <BarChart3 className="w-4 h-4 text-amber-600" />;
      case 'Modernisation': return <Layers className="w-4 h-4 text-indigo-600" />;
      case 'Application Development': return <Code2 className="w-4 h-4 text-violet-600" />;
      case 'Cybersecurity': return <Lock className="w-4 h-4 text-rose-600" />;
      default: return <Sparkles className="w-4 h-4 text-slate-500" />;
    }
  };

  const filteredServices = selectedDomain
    ? SERVICES_DATA.filter(s => s.serviceMatrix?.includes(selectedDomain))
    : SERVICES_DATA;

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero Header with Signature Visual Grammar */}
      <section className="bg-[#F8FAFC] border-b border-slate-200 py-16 sm:py-20 lg:py-24">
        <div className="w-[90%] mx-auto">
          {/* Top Tag: Cyan vertical accent bar + Pill badge */}
          <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
            <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
            <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
              Capabilities & Business Structure
            </span>
          </div>

          <div className="max-w-4xl mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] mb-4">
              IT services that cover systems, data, cloud and security.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
              3XTech offers the sections found in the actual business service structure: managed IT, data governance, enterprise architecture, cloud data architecture, virtualization, visualization, modernisation, application development and cybersecurity.
            </p>
          </div>

          {/* 9 Business Domains Interactive Chips */}
          <div className="pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Filter by Business Service Domain:
              </span>
              {selectedDomain && (
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="text-xs text-[#0B6B38] hover:underline font-semibold cursor-pointer"
                >
                  Show all services ({SERVICES_DATA.length})
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDomain(null)}
                className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-normal ${
                  selectedDomain === null
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                All Capabilities
              </button>
              {BUSINESS_SERVICES_DOMAINS.map(domain => {
                const isSelected = selectedDomain === domain;
                return (
                  <button
                    key={domain}
                    onClick={() => setSelectedDomain(isSelected ? null : domain)}
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-normal ${
                      isSelected
                        ? 'bg-[#00D2D3] text-slate-950 font-semibold shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {getDomainIcon(domain)}
                    <span>{domain}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Service Offerings Cards Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                Core Delivery Offerings
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal mt-1">
                {selectedDomain 
                  ? `Displaying services connected with ${selectedDomain}`
                  : 'Engineered for predictable uptime, operational clarity, and demonstrable ROI'}
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>Request Scoping Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredServices.map(service => {
              const deliverables = service.deliverables || service.keyFeatures;
              const deliverablesHeading = service.deliverablesTitle || 'What We Deliver:';

              return (
                <div
                  key={service.id}
                  className="bg-slate-50/80 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Top Image + Subtitle Banner */}
                  <div>
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 text-slate-900 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                          {service.categoryLabel}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-5 right-5 text-white">
                        <h3 className="text-2xl font-normal text-white tracking-tight leading-tight">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-[#00D2D3] font-normal mt-0.5">
                            {service.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 sm:p-7">
                      <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Deliverables / Highlights list */}
                      <div className="bg-white rounded-xl border border-slate-200 p-5 mb-6">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                          {deliverablesHeading}
                        </h4>
                        <ul className="space-y-2">
                          {deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Integrated Business Domains */}
                      {service.serviceMatrix && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {service.serviceMatrix.map(domain => (
                            <span
                              key={domain}
                              className="text-[11px] bg-slate-200/80 text-slate-800 font-medium px-2.5 py-0.5 rounded"
                            >
                              {domain}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: View Single Service Page Button */}
                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500 font-normal block">Audited Metric</span>
                      <span className="text-base font-normal text-slate-900">{service.metrics.stat}</span>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#0B6B38] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>View Full Service Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Systems, Data, Cloud & Security Coverage Matrix */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="w-[90%] mx-auto">
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00D2D3]">
                Architectural Foundations
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight leading-snug mb-3">
              Total coverage across Systems, Data, Cloud and Security
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Every solution we deliver is backed by unified cross-domain governance, ensuring reliability and zero gaps between infrastructure and business users.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Systems */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-[#00D2D3] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Systems</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4">
                Compute, enterprise virtualization, server modernization, operating systems, and managed workplace technology.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 font-normal">
                <div>• Enterprise Virtualization</div>
                <div>• Managed Workplace IT</div>
                <div>• Zero-Downtime Patching</div>
              </div>
            </div>

            {/* Data */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Data</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4">
                Data governance, cloud data architecture, real-time analytics visualization, ETL pipelines, and reporting.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 font-normal">
                <div>• Data Governance & Cataloging</div>
                <div>• Cloud Data Warehouses</div>
                <div>• Executive BI Visualization</div>
              </div>
            </div>

            {/* Cloud */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Cloud</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4">
                Multi-cloud migrations (Azure, AWS), hybrid enterprise topology, Kubernetes containerization, and modern apps.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 font-normal">
                <div>• Cloud Architecture Advisory</div>
                <div>• Application Modernisation</div>
                <div>• Resilient Hybrid Deployments</div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Security</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4">
                Zero-Trust network architecture, 24/7 endpoint defense, ISO 27001 compliance audits, and proactive risk assessments.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 font-normal">
                <div>• Next-Gen Managed Firewalls</div>
                <div>• Cyber Essentials Plus Audits</div>
                <div>• Continuous Threat Telemetry</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
