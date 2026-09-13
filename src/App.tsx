import React, { useState, useEffect } from 'react';
import { PageId, ServiceItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { WhatWeOfferSection } from './components/WhatWeOfferSection';
import { IndustriesSection } from './components/IndustriesSection';
import { InsightsSection } from './components/InsightsSection';
import { AboutSection } from './components/AboutSection';
import { AboutCompanySection } from './components/AboutCompanySection';
import { ForBusinessesAndGovSection } from './components/ForBusinessesAndGovSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { ConsultationEstimator } from './components/ConsultationEstimator';
import { Footer } from './components/Footer';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { ConsultationModal } from './components/ConsultationModal';
import { SearchModal } from './components/SearchModal';
import { SingleServicePage } from './components/SingleServicePage';
import { ServicesPage } from './components/ServicesPage';
import { IndustriesPage } from './components/IndustriesPage';
import { COMPANY_INFO, SERVICES_DATA } from './data/contentData';
import { ArrowRight, Phone, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  // Sync hash with page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'solutions', 'industries', 'insights', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'case-studies') {
        setCurrentPage('solutions');
        window.location.hash = 'solutions';
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateTo = (page: PageId, detailId?: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'solutions') {
      if (detailId) {
        const found = SERVICES_DATA.find(s => s.id === detailId || s.category === detailId);
        if (found) {
          setSelectedServiceDetail(found);
        } else {
          setSelectedServiceDetail(null);
        }
      } else {
        setSelectedServiceDetail(null);
      }
    } else {
      setSelectedServiceDetail(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-fuchsia-600 selection:text-white">
      {/* Static Header on Top - per user requirement: "rember header will remain stattic on top" */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Main Page Routing Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Capita-style Hero */}
            <Hero
              onNavigate={navigateTo}
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Who We Are Section - 3XTech Ltd Cloud, Development & Infrastructure */}
            <WhoWeAreSection
              onNavigate={navigateTo}
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* What We Offer Section - Network, Cloud, Development, Project Management */}
            <WhatWeOfferSection
              onNavigate={navigateTo}
              onSelectService={(s) => setSelectedServiceDetail(s)}
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Interactive Transformation Value Estimator */}
            <ConsultationEstimator
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Regulated Industry Sectors */}
            <IndustriesSection
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Thought Leadership & Research Insights */}
            <InsightsSection
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* About 3XTECH Snapshot */}
            <AboutSection
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Frequently Asked Questions */}
            <FAQSection
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Interactive Contact & Scoping Section */}
            <ContactSection />
          </>
        )}

        {currentPage === 'solutions' && (
          <div className="pt-0">
            {selectedServiceDetail ? (
              <SingleServicePage
                service={selectedServiceDetail}
                onBack={() => setSelectedServiceDetail(null)}
                onSelectService={(s) => setSelectedServiceDetail(s)}
                onOpenConsultation={() => setConsultationOpen(true)}
                onNavigate={navigateTo}
              />
            ) : (
              <>
                <ServicesPage
                  onSelectService={(s) => setSelectedServiceDetail(s)}
                  onOpenConsultation={() => setConsultationOpen(true)}
                  onNavigate={navigateTo}
                />
                <ConsultationEstimator
                  onOpenConsultation={() => setConsultationOpen(true)}
                />
              </>
            )}
            <ContactSection />
          </div>
        )}

        {currentPage === 'industries' && (
          <div className="pt-0">
            <IndustriesPage
              onOpenConsultation={() => setConsultationOpen(true)}
              onNavigate={navigateTo}
            />
            <ContactSection />
          </div>
        )}

        {currentPage === 'insights' && (
          <div className="pt-0">
            <div className="bg-[#0D1F18] text-white py-12 px-0 sm:px-2 border-b border-emerald-950">
              <div className="w-[90%] mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Research & Thought Leadership
                  </span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-normal sm:font-semibold tracking-tight text-white">
                  Executive Briefings & Whitepapers
                </h1>
                <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl font-normal leading-relaxed">
                  In-depth market intelligence, technology benchmarks, and operational roadmaps authored by our principal architects.
                </p>
              </div>
            </div>
            <InsightsSection
              onOpenConsultation={() => setConsultationOpen(true)}
              isStandalonePage={true}
            />
            <ContactSection />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="pt-0">
            <div className="bg-[#0D1F18] text-white py-14 px-0 sm:px-2 border-b border-emerald-950">
              <div className="w-[90%] mx-auto">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    About 3XTech
                  </span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-normal sm:font-semibold tracking-tight text-white max-w-4xl leading-tight">
                  UK technology consultants focused on practical IT outcomes.
                </h1>
                <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-3xl font-normal leading-relaxed">
                  3XTech Ltd provides IT services in cloud, development and infrastructure. Based in Potters Bar, Hertfordshire, we work with organisations that need dependable systems, clearer data and better digital services.
                </p>
              </div>
            </div>
            {/* Section 1: About Company (matching second section on homepage) */}
            <AboutCompanySection onNavigate={setCurrentPage} />

            {/* Section 2: For businesses and government (matching reference layout) */}
            <ForBusinessesAndGovSection onNavigate={setCurrentPage} />

            {/* Section 3: Purpose & Values */}
            <AboutSection
              onOpenConsultation={() => setConsultationOpen(true)}
              isStandalonePage={true}
            />

            {/* Section 4: Frequently Asked Questions */}
            <FAQSection
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            <ContactSection />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-0">
            <div className="bg-[#0D1F18] text-white py-12 px-0 sm:px-2 border-b border-emerald-950">
              <div className="w-[90%] mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-4 bg-[#C026D3] rounded-full inline-block" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Direct Inquiries & Headquarters
                  </span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-normal sm:font-semibold tracking-tight text-white">
                  Contact 3XTECH Solution Services
                </h1>
                <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl font-normal leading-relaxed">
                  Direct telephone: {COMPANY_INFO.phone} • Instant WhatsApp desk • London Headquarters at St Mary Axe
                </p>
              </div>
            </div>
            <ContactSection isStandalonePage={true} />
          </div>
        )}
      </main>

      {/* Capita-style Corporate Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Floating Contact Widget on Bottom-Right per explicit prompt:
          "there should be a floating contac button on right bottom clicking on which will open two options , 
          one whatsapp floating icon and one phone icon, enabling users to choose their preferred method of communication. 
          and this button will be shited to cross icon to close the options for a seamless user experience. 
          +44 7999 500254 use this number for whatsapp and phone" */}
      <FloatingContactWidget />

      {/* Strategic Consultation / Blueprint Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
}
