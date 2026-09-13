import React, { useState, useMemo } from 'react';
import { SERVICES_DATA, INDUSTRIES_DATA, INSIGHTS_DATA } from '../data/contentData';
import { PageId } from '../types';
import { Search, X, ArrowRight, Layers, Building2, BookOpen } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const results: Array<{
      type: 'service' | 'industry' | 'insight';
      title: string;
      subtitle: string;
      page: PageId;
      id: string;
    }> = [];

    // Search services
    SERVICES_DATA.forEach(s => {
      if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.tagline.toLowerCase().includes(q)) {
        results.push({
          type: 'service',
          title: s.title,
          subtitle: `Solutions: ${s.tagline}`,
          page: 'solutions',
          id: s.id,
        });
      }
    });

    // Search industries
    INDUSTRIES_DATA.forEach(ind => {
      if (ind.title.toLowerCase().includes(q) || ind.description.toLowerCase().includes(q)) {
        results.push({
          type: 'industry',
          title: ind.title,
          subtitle: `Industry: ${ind.subtitle}`,
          page: 'industries',
          id: ind.id,
        });
      }
    });

    // Search insights
    INSIGHTS_DATA.forEach(ins => {
      if (ins.title.toLowerCase().includes(q) || ins.summary.toLowerCase().includes(q)) {
        results.push({
          type: 'insight',
          title: ins.title,
          subtitle: `Insight: ${ins.category} • ${ins.readTime}`,
          page: 'insights',
          id: ins.id,
        });
      }
    });

    return results.slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  const handleSelectResult = (page: PageId, id: string) => {
    onNavigate(page, id);
    onClose();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return <Layers className="w-4 h-4 text-[#0B6B38]" />;
      case 'industry': return <Building2 className="w-4 h-4 text-[#C026D3]" />;
      default: return <BookOpen className="w-4 h-4 text-[#C026D3]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-4 sm:pt-20 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search services, case studies, insights (e.g. project management, technical support, network, consulting)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-slate-400">
              Type keywords to search across 3XTECH Solution Services (Expert Project Management, Responsive Technical Support, Managed Network Services, Consulting Service).
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No direct matches found for "{query}". Try searching for <span className="font-semibold text-slate-700">"project management"</span>, <span className="font-semibold text-slate-700">"technical support"</span>, <span className="font-semibold text-slate-700">"managed network"</span>, or <span className="font-semibold text-slate-700">"consulting"</span>.
            </div>
          ) : (
            <div className="space-y-2">
              {searchResults.map((res, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectResult(res.page, res.id)}
                  className="p-3 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-200 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-2 rounded-lg bg-slate-100 group-hover:bg-white shadow-xs">
                      {getTypeIcon(res.type)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0B6B38] transition-colors">
                        {res.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {res.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#C026D3] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>Press ESC or click outside to dismiss</span>
          <span className="font-medium text-slate-700">3XTECH Enterprise Search</span>
        </div>
      </div>
    </div>
  );
};
