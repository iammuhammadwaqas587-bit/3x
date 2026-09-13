import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/contentData';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send,
  ShieldCheck,
  Building
} from 'lucide-react';

interface ContactSectionProps {
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isStandalonePage = false }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    organization: '',
    serviceInterest: 'cloud',
    projectScope: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact-section" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="w-[90%] mx-auto">
        {/* Section Header */}
        <div className="mb-12 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
            <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
            <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
              Connect with 3XTECH Solution Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] max-w-5xl mb-4">
            Start your operational transformation
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-4xl">
            Whether you need to modernize critical cloud infrastructure, scale intelligent customer operations, or automate complex compliance workflows, our practice leaders are ready to engage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Channels & Credentials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Direct Phone Highlight - User's number */}
              <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#0B6B38] text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B6B38]">
                      Direct Telephone Line
                    </span>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="text-2xl font-black text-slate-900 block hover:text-[#0B6B38] transition-colors"
                      id="contact-page-phone-link"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Available Mon-Fri 08:30 to 18:00 GMT. 24/7 dedicated support for contracted SLA partners.
                </p>
              </div>

              {/* WhatsApp Highlight - User's WhatsApp number */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8 border border-slate-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Instant WhatsApp Channel
                    </span>
                    <div className="text-lg font-bold text-white">
                      Chat directly with our solutions team
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mb-4">
                  Connect via WhatsApp for rapid technical inquiries, service scoping, or immediate callback requests.
                </p>
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-page-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Start WhatsApp Chat (+44 7999 500254)</span>
                </a>
              </div>

              {/* Physical Location and Details */}
              <div className="space-y-4 text-xs text-slate-600 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C026D3] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">London Headquarters</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C026D3] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Email Scoping Team</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#0B6B38] hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C026D3] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Operating Hours</strong>
                    <span>{COMPANY_INFO.operatingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance footnote */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>All inquiries protected under strict NDA and GDPR enterprise privacy provisions.</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Scoping Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0B6B38] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Inquiry Received Successfully
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-slate-900">{formData.fullName || 'Partner'}</strong>. A senior solutions architect from 3XTECH Solution Services has been assigned to your request and will contact you within 2 business hours.
                </p>

                <div className="bg-white p-4 rounded-xl border border-slate-200 max-w-sm mx-auto text-xs text-slate-600 mb-6 text-left">
                  <div className="font-bold text-slate-800 mb-1">Direct follow-up:</div>
                  <div>Phone: {formData.phone || COMPANY_INFO.phone}</div>
                  <div>Email: {formData.workEmail || COMPANY_INFO.email}</div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      workEmail: '',
                      phone: '',
                      organization: '',
                      serviceInterest: 'cloud',
                      projectScope: '',
                    });
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    Request an Architecture or Operations Consultation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Provide your requirements and our team will prepare a structured scoping review.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B6B38] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. e.vance@enterprise.co.uk"
                      value={formData.workEmail}
                      onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B6B38] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Direct Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 ..."
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B6B38] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company or Institution *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Barclays, NHS Trust, Vodafone"
                      value={formData.organization}
                      onChange={e => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B6B38] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Service of Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={e => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B6B38]"
                  >
                    <option value="cloud">Cloud Transformation & Hybrid Infrastructure</option>
                    <option value="cx">Intelligent Customer Experience & Contact Center</option>
                    <option value="automation">Business Process Automation (RPA & BPO)</option>
                    <option value="cyber">Cyber Security & Zero-Trust Architecture</option>
                    <option value="ai">Enterprise Data Science & Applied AI</option>
                    <option value="consulting">Strategic Consulting & Target Operating Model</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Scope / Operational Challenge
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your objectives, timelines, and current technology landscape..."
                    value={formData.projectScope}
                    onChange={e => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B6B38]"
                  />
                </div>

                {/* High-Contrast Submit CTA Button matching brand magenta */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-form-submit-btn"
                  className="w-full bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-sm py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Consultation Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Strategic Scoping Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
