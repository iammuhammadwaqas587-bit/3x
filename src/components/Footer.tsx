import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICES_DATA, INDUSTRIES_DATA } from '../data/contentData';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Lock, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Check 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [emailSub, setEmailSub] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub) return;
    setSubSuccess(true);
    setTimeout(() => {
      setEmailSub('');
      setSubSuccess(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#0A1612] text-slate-300 border-t border-emerald-950/60 selection:bg-fuchsia-600 selection:text-white">
      {/* Upper Newsletter & Consultation Banner - Capita style */}
      <div className="border-b border-slate-800/80 py-10 px-0 sm:px-2">
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Executive Briefings & Market Intelligence
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Subscribe to 3XTECH quarterly transformation reports
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Curated architectural insights, public sector blueprints, and AI governance analyses delivered directly to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subSuccess ? (
              <div className="bg-emerald-900/60 border border-emerald-500 text-white px-5 py-3 rounded-lg text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed successfully. You will receive the next Executive Briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-[420px]">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email..."
                  value={emailSub}
                  onChange={e => setEmailSub(e.target.value)}
                  className="bg-slate-900/90 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C026D3] flex-1"
                />
                {/* High-Contrast Accent Button */}
                <button
                  type="submit"
                  className="bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-md transition-all active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Corporate Footer Link Grid */}
      <div className="w-[90%] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column & Direct Contact */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo in footer (variant="light") */}
              <div onClick={() => onNavigate('home')} className="mb-4 inline-block">
                <Logo size="md" variant="light" showSubtitle={true} />
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
                3XTECH Solution Services is a trusted digital transformation partner delivering high-availability cloud systems, intelligent business process operations, and 24/7 customer experience infrastructure across the United Kingdom and global markets.
              </p>

              {/* Direct Phone & WhatsApp box */}
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">Direct Telephone:</span>
                  <a href={COMPANY_INFO.phoneHref} className="font-bold text-white hover:text-emerald-400 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="text-slate-400">WhatsApp Desk:</span>
                  <a
                    href={COMPANY_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#25D366] hover:underline"
                  >
                    +44 7999 500254
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <Mail className="w-4 h-4 text-[#C026D3]" />
                  <span className="text-slate-400">Inquiries:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-200 hover:text-white">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Certifications Badges */}
            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ISO 27001
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-1 rounded">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> Cyber Essentials+
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-1 rounded">
                <Award className="w-3.5 h-3.5 text-emerald-400" /> Crown Commercial
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 pb-2 border-b border-slate-800">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SERVICES_DATA.map(service => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('solutions', service.id)}
                    className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 pb-2 border-b border-slate-800">
              Industry Sectors
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {INDUSTRIES_DATA.map(ind => (
                <li key={ind.id}>
                  <button
                    onClick={() => onNavigate('industries', ind.id)}
                    className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    {ind.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Corporate */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 pb-2 border-b border-slate-800">
              Corporate
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors">
                  Who We Are
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-emerald-400 transition-colors">
                  Insights & Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    setTimeout(() => {
                      document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-emerald-400 transition-colors">
                  Contact & Locations
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="text-[#C026D3] hover:text-[#A21CAF] font-bold mt-2 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Scoping</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Tier - Capita compliance style */}
      <div className="border-t border-slate-900 bg-[#060e0b] py-6 px-0 sm:px-2 text-xs text-slate-500">
        <div className="w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} 3XTECH Solution Services. All rights reserved.</span>
            <span>{COMPANY_INFO.registration}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <a href="#contact-section" className="hover:text-white transition-colors">Privacy Notice</a>
            <span>•</span>
            <a href="#contact-section" className="hover:text-white transition-colors">Cookie Policy</a>
            <span>•</span>
            <a href="#contact-section" className="hover:text-white transition-colors">Accessibility (WCAG 2.2)</a>
            <span>•</span>
            <a href="#contact-section" className="hover:text-white transition-colors">Modern Slavery Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
