import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Headphones } from 'lucide-react';
import { COMPANY_INFO } from '../data/contentData';

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-prompt badge hint after 4 seconds if not interacted
  const [showBadge, setShowBadge] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowBadge(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const toggleWidget = () => {
    setIsOpen(prev => !prev);
    setHasInteracted(true);
    setShowBadge(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Expanded communication options */}
      <div
        className={`flex flex-col items-end gap-3 mb-3 transition-all duration-300 ease-out origin-bottom ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-4 pointer-events-none scale-90'
        }`}
      >
        {/* WhatsApp Option */}
        <a
          href={COMPANY_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/80 transition-all duration-200 hover:scale-105 active:scale-95"
          id="floating-whatsapp-btn"
          title="Chat with us on WhatsApp (+44 7999 500254)"
        >
          <span className="text-sm font-semibold text-slate-800 group-hover:text-emerald-700 whitespace-nowrap">
            WhatsApp <span className="text-xs font-normal text-slate-500 block sm:inline sm:ml-1">+44 7999 500254</span>
          </span>
          <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-transform group-hover:rotate-6">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
        </a>

        {/* Phone Call Option */}
        <a
          href={COMPANY_INFO.phoneHref}
          className="group flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-xl border border-slate-200 hover:border-fuchsia-500 hover:bg-fuchsia-50/80 transition-all duration-200 hover:scale-105 active:scale-95"
          id="floating-phone-btn"
          title="Call 3XTECH Solution Services (+44 7999 500254)"
        >
          <span className="text-sm font-semibold text-slate-800 group-hover:text-fuchsia-700 whitespace-nowrap">
            Direct Line <span className="text-xs font-normal text-slate-500 block sm:inline sm:ml-1">+44 7999 500254</span>
          </span>
          <div className="w-10 h-10 rounded-full bg-[#C026D3] text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-transform group-hover:-rotate-6">
            <Phone className="w-5 h-5 fill-current" />
          </div>
        </a>
      </div>

      {/* Main Toggle Button */}
      <div className="relative pointer-events-auto">
        {/* Notification pill */}
        {showBadge && !isOpen && (
          <div className="absolute -top-10 right-0 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap flex items-center gap-1.5 animate-bounce border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Talk to an Expert (+44 7999 500254)
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-slate-700" />
          </div>
        )}

        <button
          onClick={toggleWidget}
          aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
          id="floating-contact-main-toggle"
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-300 ${
            isOpen
              ? 'bg-slate-900 hover:bg-slate-800 rotate-90 scale-100'
              : 'bg-gradient-to-tr from-[#0A6B38] via-[#0B6B38] to-[#C026D3] hover:scale-105 active:scale-95 shadow-emerald-900/30'
          }`}
        >
          {isOpen ? (
            <X className="w-7 h-7 stroke-[2.5] text-white transition-transform duration-200" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Headphones className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white ring-2 ring-emerald-400/40 animate-pulse" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
