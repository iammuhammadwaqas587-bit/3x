import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/contentData';
import { X, Send, CheckCircle2, Phone, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'cloud',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'cloud',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-[#C026D3] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded mb-2">
            Priority Engagement
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Schedule Strategic Consultation
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Connect with a 3XTECH Solution Services enterprise architect to evaluate operational scope and modernization timelines.
          </p>

          {/* Quick Call pill */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs">
            <a href={COMPANY_INFO.phoneHref} className="flex items-center gap-1.5 text-emerald-400 font-semibold hover:underline">
              <Phone className="w-3.5 h-3.5" /> Call: {COMPANY_INFO.phone}
            </a>
            <a href={COMPANY_INFO.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Desk
            </a>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#0B6B38] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">
                Consultation Request Confirmed
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto mb-6">
                Thank you, {formData.name}. Our practice lead will contact you shortly to confirm the scheduled video conference or in-person session.
              </p>
              <button
                onClick={handleResetAndClose}
                className="bg-slate-900 text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6B38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="j.doe@enterprise.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6B38]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 ..."
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6B38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Organization name"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6B38]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Focus Capability
                </label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6B38]"
                >
                  {SERVICES_DATA.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Objectives or Timelines (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Target launch date, key compliance requirements, or operational constraints..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6B38]"
                />
              </div>

              {/* High contrast action button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-sm py-3 rounded-lg shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Securing Architect Consultation...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Consultation Booking</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Protected under UK Enterprise Confidentiality Agreement</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
