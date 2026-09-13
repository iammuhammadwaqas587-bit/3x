import React from 'react';
import { ArrowRight, Cloud, Server, Code2, Database, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';

interface AboutCompanySectionProps {
  onNavigate: (page: PageId) => void;
}

export const AboutCompanySection: React.FC<AboutCompanySectionProps> = ({ onNavigate }) => {
  return (
    <section id="about-company-section" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-slate-50 via-white to-slate-100/60 border-b border-slate-200/90 relative overflow-hidden">
      {/* Subtle ambient light accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[90%] mx-auto relative z-10">
        {/* Top Tag matching Capita layout: Cyan vertical accent bar + Pill badge */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
          <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
          <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
            About Company
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] max-w-5xl mb-8 sm:mb-10">
          We Bridge Technology Strategy and Everyday Operations.
        </h2>

        {/* Core Body Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            <p className="text-slate-700 font-normal leading-relaxed">
              3XTech helps organisations build, improve and manage technology that supports the way they work. We bring together cloud, infrastructure, software development and data expertise to deliver practical solutions that solve real business challenges.
            </p>

            <p>
              From modernising servers and applications to developing digital platforms, managing data and improving operational systems, we work across the technology landscape to create reliable, scalable and secure solutions.
            </p>

            <p>
              Our approach is straightforward: understand your business, identify what needs to improve, and deliver technology that makes a measurable difference. Whether you need support with an existing environment or are planning your next technology project, we provide clear guidance and hands-on expertise from start to finish.
            </p>

            <p className="border-l-2 border-[#0B6B38] pl-4 text-slate-700 italic">
              Based in the UK, we work with organisations locally and remotely, maintaining direct communication and a collaborative approach from the initial consultation through to ongoing support.
            </p>
          </div>

          {/* Key Capabilities Card */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B6B38] mb-4">
              Integrated Capabilities
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0B6B38] flex items-center justify-center shrink-0 mt-0.5">
                  <Cloud className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-slate-900">Cloud Environments</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Azure, AWS & hybrid cloud transitions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-slate-900">Infrastructure & Networks</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Server modernisation and zero-downtime operations</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-fuchsia-50 text-[#C026D3] flex items-center justify-center shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-slate-900">Software & Digital Platforms</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Custom digital platforms and application modernization</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00D2D3] flex items-center justify-center shrink-0 mt-0.5">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-slate-900">Data & Systems Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Clearer operational data and reliable analytics</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0B6B38]" />
              <span>Certified UK delivery practitioners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
