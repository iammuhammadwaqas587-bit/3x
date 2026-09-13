import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/contentData';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS_LEFT: FAQItem[] = [
  {
    id: 'services',
    question: 'What services does 3xTech provide?',
    answer:
      '3XTech specializes in four core enterprise service pillars: Expert Project Management, Responsive Technical Support, Managed Network Services, and Consulting Services. We deliver resilient infrastructure, strategic engineering, and operational governance tailored to regulated enterprises and growing organizations.',
  },
  {
    id: 'small-business',
    question: 'Do you work with small businesses?',
    answer:
      'Yes. While we deliver complex multi-million pound digital transformations for tier-1 institutions, we also offer agile, cost-effective managed IT support, network security, and infrastructure setups designed specifically for high-growth small and mid-sized enterprises.',
  },
  {
    id: 'cloud-migration',
    question: 'Can you migrate our infrastructure to the cloud?',
    answer:
      'Yes. Our certified cloud specialists architect and execute seamless, zero-downtime migrations across Microsoft Azure, AWS, and Google Cloud, ensuring legacy system interoperability, data integrity, and strict compliance.',
  },
  {
    id: 'cybersecurity',
    question: 'How do you improve cybersecurity?',
    answer:
      'We deploy a defense-in-depth framework aligned with ISO 27001, Cyber Essentials Plus, and NIST guidelines. This encompasses zero-trust network access, continuous endpoint detection and response (EDR), vulnerability auditing, and automated perimeter firewalls.',
  },
];

const FAQS_RIGHT: FAQItem[] = [
  {
    id: 'it-support',
    question: 'Do you provide ongoing IT support?',
    answer:
      'Yes. We provide 24/7/365 proactive monitoring and responsive technical support backed by stringent SLAs. Our dedicated engineers handle incident triage, patch management, hardware diagnostics, and rapid remote and on-site resolution.',
  },
  {
    id: 'ai-integration',
    question: 'Can you integrate AI into our existing systems?',
    answer:
      'Yes. We help enterprises identify high-value automation opportunities and securely integrate practical AI workflows, predictive analytics, and natural language processing into legacy CRM, ERP, and operational pipelines with strict governance and data privacy controls.',
  },
  {
    id: 'industries',
    question: 'Which industries do you serve?',
    answer:
      'We maintain deep domain expertise across heavily regulated environments, including Banking & Financial Services, Public Sector & Local Authorities, Telecommunications, Healthcare, and Logistics & Supply Chain.',
  },
  {
    id: 'get-started',
    question: 'How do we get started?',
    answer:
      'Getting started is straightforward. You can book an initial discovery session through our consultation form, contact our engineering desk directly at +44 7999 500254, or reach out via WhatsApp. We will assess your requirements and supply a comprehensive scoping document.',
  },
];

interface FAQSectionProps {
  onOpenConsultation?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="w-[90%] mx-auto">
        {/* Left-Aligned Header matching other sections */}
        <div className="mb-12 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
            <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
            <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
              F.A.Q.
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] max-w-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-4xl">
            Find clear answers regarding our delivery models, SLA commitments, and technical onboarding across our four core services.
          </p>
        </div>

        {/* 2-Column FAQ Layout matching user's reference with left alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {/* Left Column */}
          <div className="flex flex-col">
            {FAQS_LEFT.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-slate-300 transition-colors"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 group cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg text-slate-900 font-normal group-hover:text-[#0B6B38] transition-colors leading-snug">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-slate-400 group-hover:text-slate-700 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#0B6B38]" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {FAQS_RIGHT.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-slate-300 transition-colors"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 group cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg text-slate-900 font-normal group-hover:text-[#0B6B38] transition-colors leading-snug">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-slate-400 group-hover:text-slate-700 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#0B6B38]" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Supplementary prompt / contact assist - Left aligned */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left bg-slate-50/80 p-6 rounded-xl border border-slate-200">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Have a specific technical query or RFP requirement?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed font-normal">
              Speak directly with an enterprise architect at our Hertfordshire office.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0B6B38] hover:bg-[#09542c] rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <span>Book Discovery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
