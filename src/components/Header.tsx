import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICES_DATA, INDUSTRIES_DATA } from '../data/contentData';
import { 
  Phone, 
  MessageCircle, 
  Search, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Briefcase,
  Headphones,
  Network,
  Lightbulb
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenSearch: () => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'solutions' | 'industries' | null>(null);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);

  const handleNavClick = (page: PageId, detailId?: string) => {
    onNavigate(page, detailId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'project-management': return <Briefcase className="w-4 h-4 text-emerald-600" />;
      case 'technical-support': return <Headphones className="w-4 h-4 text-[#C026D3]" />;
      case 'managed-network': return <Network className="w-4 h-4 text-[#00D2D3]" />;
      case 'consulting': return <Lightbulb className="w-4 h-4 text-amber-500" />;
      default: return <Briefcase className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <header className="w-full bg-white z-40 border-b border-slate-200/90 shadow-xs relative">
      {/* Top utility bar - Capita style */}
      <div className="bg-[#0D1F18] text-slate-300 text-xs py-2 px-0 sm:px-2 border-b border-emerald-950">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-2 text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Enterprise Transformation & Business Solutions
            </span>
            <span className="text-slate-400 hidden md:inline">|</span>
            <span className="text-slate-300 text-xs hidden md:inline">
              UK & Global Managed Operations
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <a
              href={COMPANY_INFO.phoneHref}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Direct Telephone"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-white">{COMPANY_INFO.phone}</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              title="Connect via WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>

            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors pl-2 border-l border-slate-700 cursor-pointer"
              title="Search Site"
              id="header-utility-search"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Static Navigation Bar */}
      <div className="w-[90%] mx-auto px-0 sm:px-2 py-3.5 flex items-center justify-between">
        {/* Brand Logo - 3XTECH Solution Services */}
        <div onClick={() => handleNavClick('home')} className="flex items-center">
          <Logo size="md" variant="dark" showSubtitle={true} />
        </div>

        {/* Desktop Primary Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              currentPage === 'home'
                ? 'text-[#0B6B38] bg-emerald-50'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            Home
          </button>

          {/* Solutions & Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('solutions')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'solutions'
                  ? 'text-[#0B6B38] bg-emerald-50'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span>Solutions & Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180 text-[#C026D3]' : ''
                }`}
              />
            </button>

            {/* Solutions Dropdown Menu */}
            {activeDropdown === 'solutions' && (
              <div className="absolute top-full left-0 w-[540px] bg-white rounded-xl shadow-2xl border border-slate-200/90 py-4 px-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Enterprise Capabilities
                  </span>
                  <button
                    onClick={() => handleNavClick('solutions')}
                    className="text-xs font-semibold text-[#C026D3] hover:text-[#A21CAF] flex items-center gap-1 cursor-pointer"
                  >
                    View all solutions <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {SERVICES_DATA.map(service => (
                    <div
                      key={service.id}
                      onClick={() => handleNavClick('solutions', service.id)}
                      className="group p-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 rounded-md bg-slate-100 group-hover:bg-white flex items-center justify-center shadow-xs">
                          {getServiceIcon(service.category)}
                        </div>
                        <span className="text-sm font-bold text-slate-800 group-hover:text-[#0B6B38] transition-colors line-clamp-1">
                          {service.categoryLabel}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 bg-slate-50/80 -mx-5 -mb-4 px-5 py-3 rounded-b-xl flex items-center justify-between text-xs text-slate-600">
                  <span>Need specialized advisory?</span>
                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenConsultation();
                    }}
                    className="font-bold text-[#C026D3] hover:underline"
                  >
                    Request custom solution blueprint →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Industries with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('industries')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'industries'
                  ? 'text-[#0B6B38] bg-emerald-50'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'industries' ? 'rotate-180 text-[#C026D3]' : ''
                }`}
              />
            </button>

            {/* Industries Dropdown */}
            {activeDropdown === 'industries' && (
              <div className="absolute top-full left-0 w-[460px] bg-white rounded-xl shadow-2xl border border-slate-200/90 py-4 px-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Sectors & Markets
                  </span>
                  <button
                    onClick={() => handleNavClick('industries')}
                    className="text-xs font-semibold text-[#0B6B38] hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                  >
                    All sectors <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {INDUSTRIES_DATA.map(ind => (
                    <div
                      key={ind.id}
                      onClick={() => handleNavClick('industries', ind.id)}
                      className="p-2 rounded-lg hover:bg-emerald-50/70 group transition-colors cursor-pointer"
                    >
                      <span className="text-sm font-bold text-slate-800 group-hover:text-[#0B6B38] block line-clamp-1">
                        {ind.title}
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-1">
                        {ind.subtitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Insights */}
          <button
            onClick={() => handleNavClick('insights')}
            className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              currentPage === 'insights'
                ? 'text-[#0B6B38] bg-emerald-50'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            Insights & Research
          </button>

          {/* About Us */}
          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              currentPage === 'about'
                ? 'text-[#0B6B38] bg-emerald-50'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            About Us
          </button>

          {/* Contact */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              currentPage === 'contact'
                ? 'text-[#0B6B38] bg-emerald-50'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Controls & High-Contrast CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* High-Contrast Action Button matching logo magenta */}
          <button
            onClick={onOpenConsultation}
            id="header-cta-get-in-touch"
            className="bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-sm px-5 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Consult an Expert</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[90px] bg-white z-50 overflow-y-auto border-t border-slate-200 animate-in slide-in-from-right-1 duration-200">
          <div className="p-5 flex flex-col gap-4 pb-20">
            {/* Quick Contact Banner */}
            <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Direct Assistance</span>
                <a href={COMPANY_INFO.phoneHref} className="text-sm font-bold text-emerald-400">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <a
                href={COMPANY_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>

            {/* Navigation links */}
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-3 px-3 rounded-lg font-bold text-base ${
                currentPage === 'home' ? 'text-[#0B6B38] bg-emerald-50' : 'text-slate-800'
              }`}
            >
              Home
            </button>

            {/* Solutions Accordion */}
            <div>
              <button
                onClick={() => setMobileSectionOpen(mobileSectionOpen === 'solutions' ? null : 'solutions')}
                className="w-full flex items-center justify-between py-3 px-3 rounded-lg font-bold text-base text-slate-800 hover:bg-slate-50"
              >
                <span>Solutions & Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileSectionOpen === 'solutions' ? 'rotate-180 text-[#C026D3]' : ''
                  }`}
                />
              </button>

              {mobileSectionOpen === 'solutions' && (
                <div className="pl-4 pr-2 py-2 flex flex-col gap-2 border-l-2 border-[#0B6B38] ml-3 mt-1">
                  {SERVICES_DATA.map(service => (
                    <button
                      key={service.id}
                      onClick={() => handleNavClick('solutions', service.id)}
                      className="text-left py-2 px-2 text-sm font-medium text-slate-700 hover:text-[#0B6B38]"
                    >
                      {service.title}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNavClick('solutions')}
                    className="text-left py-2 px-2 text-sm font-bold text-[#C026D3]"
                  >
                    View all solutions →
                  </button>
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div>
              <button
                onClick={() => setMobileSectionOpen(mobileSectionOpen === 'industries' ? null : 'industries')}
                className="w-full flex items-center justify-between py-3 px-3 rounded-lg font-bold text-base text-slate-800 hover:bg-slate-50"
              >
                <span>Industries & Sectors</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileSectionOpen === 'industries' ? 'rotate-180 text-[#C026D3]' : ''
                  }`}
                />
              </button>

              {mobileSectionOpen === 'industries' && (
                <div className="pl-4 pr-2 py-2 flex flex-col gap-2 border-l-2 border-emerald-500 ml-3 mt-1">
                  {INDUSTRIES_DATA.map(ind => (
                    <button
                      key={ind.id}
                      onClick={() => handleNavClick('industries', ind.id)}
                      className="text-left py-2 px-2 text-sm font-medium text-slate-700 hover:text-[#0B6B38]"
                    >
                      {ind.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('insights')}
              className={`text-left py-3 px-3 rounded-lg font-bold text-base ${
                currentPage === 'insights' ? 'text-[#0B6B38] bg-emerald-50' : 'text-slate-800'
              }`}
            >
              Insights & Research
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left py-3 px-3 rounded-lg font-bold text-base ${
                currentPage === 'about' ? 'text-[#0B6B38] bg-emerald-50' : 'text-slate-800'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left py-3 px-3 rounded-lg font-bold text-base ${
                currentPage === 'contact' ? 'text-[#0B6B38] bg-emerald-50' : 'text-slate-800'
              }`}
            >
              Contact Us
            </button>

            {/* High-Contrast Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#C026D3] text-white py-3.5 rounded-lg font-bold text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full bg-[#0B6B38] text-white py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
