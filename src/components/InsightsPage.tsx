import React, { useState, useMemo } from 'react';
import { InsightArticle, PageId } from '../types';
import { INSIGHTS_DATA } from '../data/contentData';
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  BookOpen, 
  Filter, 
  ChevronRight,
  Sparkles,
  TrendingUp,
  Tag
} from 'lucide-react';

interface InsightsPageProps {
  onSelectInsight: (article: InsightArticle) => void;
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onSelectInsight,
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Project Management', 'Technical Support', 'Network Services', 'Consulting'];

  const filteredArticles = useMemo(() => {
    return INSIGHTS_DATA.filter(art => {
      const matchCat = selectedCategory === 'All' || art.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchQuery = !searchQuery.trim() || 
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (art.tags && art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = INSIGHTS_DATA[0];

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-20">
      {/* Top Banner */}
      <div className="bg-[#0D1F18] text-white py-14 px-0 sm:px-2 border-b border-emerald-950">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-4 bg-[#00D2D3] rounded-full inline-block" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Research & Enterprise Thought Leadership
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white max-w-4xl leading-tight">
            Executive Briefings & Technical Insights
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-3xl font-normal leading-relaxed">
            In-depth operational benchmarks, architectural blueprints, and technology governance strategies authored by our senior UK consultants and network architects.
          </p>

          {/* Search Bar inside Hero */}
          <div className="mt-8 max-w-xl relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g., SD-WAN, Agile governance, SLAs, FinOps)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 text-white placeholder-slate-400 pl-11 pr-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00D2D3] focus:bg-white/15 text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-white/10 px-2 py-0.5 rounded-md cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto pt-10">
        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B6B38] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <span className="font-bold text-slate-800">{filteredArticles.length}</span> publication{filteredArticles.length === 1 ? '' : 's'}
          </div>
        </div>

        {/* Featured Blog Highlight (when no filter or query is typed) */}
        {!searchQuery && selectedCategory === 'All' && featuredArticle && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C026D3]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Featured Lead Briefing
              </span>
            </div>

            <div
              onClick={() => onSelectInsight(featuredArticle)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 group cursor-pointer"
            >
              {/* Image side */}
              <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[380px] overflow-hidden bg-slate-900">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1 rounded-md border border-white/10 uppercase tracking-wide">
                  {featuredArticle.category}
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {featuredArticle.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#0B6B38] transition-colors mb-3">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {featuredArticle.author.image ? (
                      <img
                        src={featuredArticle.author.image}
                        alt={featuredArticle.author.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-xs">
                        {featuredArticle.author.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="text-xs font-bold text-slate-800">{featuredArticle.author.name}</div>
                      <div className="text-[11px] text-slate-500">{featuredArticle.author.role}</div>
                    </div>
                  </div>

                  <button className="bg-[#0B6B38] group-hover:bg-[#084e29] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs">
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectInsight(art)}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                <div className="relative h-48 sm:h-52 bg-slate-900 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                    {art.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#0B6B38] transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {art.summary}
                  </p>

                  {/* Tags */}
                  {art.tags && art.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {art.tags.slice(0, 2).map((t, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#C026D3]" />
                  <span>{art.author.name}</span>
                </div>

                <span className="text-[#C026D3] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read full blog <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 my-8">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              No publications found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-4">
              We couldn't find any articles matching "{searchQuery}". Try searching for project management, SD-WAN, support, or advisory.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-[#0B6B38] text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Consultation Box */}
        <div className="mt-20 bg-gradient-to-r from-[#0D1F18] via-[#093520] to-[#0D1F18] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Custom Research & Advisory
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Require tailored architectural research for your board?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Our principal practice leads prepare vendor-neutral whitepapers, modernization feasibility studies, and migration risk assessments for UK enterprise boards.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onOpenConsultation}
              className="bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Advisory Scoping</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
