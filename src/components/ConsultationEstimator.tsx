import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/contentData';

interface ConsultationEstimatorProps {
  onOpenConsultation: () => void;
}

export const ConsultationEstimator: React.FC<ConsultationEstimatorProps> = ({ onOpenConsultation }) => {
  const [sector, setSector] = useState<'banking' | 'government' | 'telecom' | 'retail' | 'health'>('banking');
  const [scale, setScale] = useState<'mid' | 'large' | 'enterprise'>('large');
  const [focusArea, setFocusArea] = useState<'project-management' | 'technical-support' | 'managed-network' | 'consulting'>('project-management');

  // Compute calculated metrics
  const getSavingsEstimate = () => {
    let base = 1.2;
    if (sector === 'banking') base = 2.4;
    if (sector === 'government') base = 1.8;
    if (sector === 'telecom') base = 2.1;
    if (sector === 'retail') base = 1.5;
    if (sector === 'health') base = 1.1;

    let multiplier = 1;
    if (scale === 'mid') multiplier = 0.6;
    if (scale === 'large') multiplier = 1.2;
    if (scale === 'enterprise') multiplier = 2.5;

    let focusMultiplier = 1;
    if (focusArea === 'project-management') focusMultiplier = 1.25;
    if (focusArea === 'technical-support') focusMultiplier = 1.15;
    if (focusArea === 'managed-network') focusMultiplier = 1.35;
    if (focusArea === 'consulting') focusMultiplier = 1.4;

    const finalValue = (base * multiplier * focusMultiplier).toFixed(1);
    return `£${finalValue}M`;
  };

  const getEfficiencyGain = () => {
    if (focusArea === 'project-management') return '99.4% on-schedule milestone delivery';
    if (focusArea === 'technical-support') return 'Sub-12-minute SLA resolution & 98% CSAT';
    if (focusArea === 'managed-network') return '99.99% network uptime & zero outage';
    return '35% IT infrastructure cost optimization';
  };

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="w-[90%] mx-auto">
        <div className="bg-gradient-to-br from-slate-900 via-[#0A1612] to-slate-950 rounded-2xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#C026D3] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Enterprise Value Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-3 tracking-tight leading-snug">
                Estimate your operational transformation return
              </h3>
              <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed font-normal">
                Configure your sector and primary modernization bottleneck to model expected annual operational cost savings based on audited 3XTECH client rollouts.
              </p>

              {/* Selector 1: Sector */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                  1. Select Industry Sector
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'banking', label: 'Financial Services' },
                    { id: 'government', label: 'Public Sector' },
                    { id: 'telecom', label: 'Telecoms & Media' },
                    { id: 'retail', label: 'Retail & Supply Chain' },
                    { id: 'health', label: 'Healthcare & Life Sciences' },
                  ].map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSector(s.id as any)}
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all text-left truncate cursor-pointer ${
                        sector === s.id
                          ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-300'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 2: Operational Focus */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                  2. Primary Modernization Objective
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'project-management', label: 'Project Management' },
                    { id: 'technical-support', label: 'Technical Support' },
                    { id: 'managed-network', label: 'Managed Network' },
                    { id: 'consulting', label: 'Consulting Service' },
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setFocusArea(f.id as any)}
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                        focusArea === f.id
                          ? 'bg-[#C026D3] text-white ring-2 ring-fuchsia-300'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 3: Organization Scale */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                  3. Operational Scale
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'mid', label: '250 - 1,000 Employees' },
                    { id: 'large', label: '1,000 - 10,000 Employees' },
                    { id: 'enterprise', label: '10,000+ Enterprise' },
                  ].map(sc => (
                    <button
                      key={sc.id}
                      onClick={() => setScale(sc.id as any)}
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                        scale === sc.id
                          ? 'bg-white text-slate-900 ring-2 ring-slate-300'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Calculated Impact Card */}
            <div className="lg:col-span-5 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Projected Operational Value
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white mb-2 flex items-baseline gap-2">
                  <span className="text-emerald-400">{getSavingsEstimate()}</span>
                  <span className="text-xs text-slate-400 font-normal">est. annual savings</span>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 mb-6 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#C026D3] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Target SLA / Efficiency Shift</div>
                    <div className="text-xs text-emerald-300 font-medium">{getEfficiencyGain()}</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Based on audited 3XTECH enterprise delivery data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Guaranteed SLA precision & UK regulatory alignment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Includes 24/7 UK & global support coverage</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-sm py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Transformation Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[10px] text-slate-400 mt-2">
                  Or call directly at <a href={COMPANY_INFO.phoneHref} className="text-white hover:underline font-bold">{COMPANY_INFO.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
