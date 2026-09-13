import React from 'react';
import { ShieldCheck, Award, Leaf } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenConsultation,
  isStandalonePage = false,
}) => {
  return (
    <section id="about-section" className="py-16 sm:py-20 bg-[#F8FAFC]">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
            <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
            <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
              About 3XTECH Solution Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] max-w-5xl mb-6">
            Purpose-driven digital engineering and operational excellence
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-4xl">
            Based in Potters Bar, Hertfordshire, 3XTech Ltd specializes exclusively in four core offerings: Expert Project Management, Responsive Technical Support, Managed Network Services, and Consulting Services. We partner with organizations that demand dependable systems, clearer data, and better digital services.
          </p>
        </div>

        {/* Modular Grid: Purpose & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs hover:border-[#0B6B38] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#0B6B38] flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-normal text-slate-900 mb-2.5 tracking-tight">Integrity & Governance</h3>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              We operate to the highest governance standards, adhering to strict ISO 27001, Cyber Essentials Plus, and UK public sector frameworks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs hover:border-[#C026D3] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-fuchsia-50 text-[#C026D3] flex items-center justify-center mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-normal text-slate-900 mb-2.5 tracking-tight">Outcome-Centric Delivery</h3>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              We do not measure success by hours billed, but by operational bottlenecks eliminated, SLA precision achieved, and demonstrable ROI delivered.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs hover:border-[#0B6B38] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#0B6B38] flex items-center justify-center mb-5">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-normal text-slate-900 mb-2.5 tracking-tight">Sustainable & Inclusive</h3>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Committed to Net-Zero operations, ethical AI practices, and fostering diverse engineering talent across all corporate levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
