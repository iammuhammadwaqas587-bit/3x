import React, { useState, useEffect } from 'react';
import { InsightArticle, PageId } from '../types';
import { INSIGHTS_DATA, SERVICES_DATA, INDUSTRIES_DATA, COMPANY_INFO } from '../data/contentData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Share2, 
  CheckCircle2, 
  Download, 
  Briefcase, 
  Building2, 
  Phone, 
  Mail, 
  MessageSquare, 
  BookmarkCheck,
  Check,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SingleBlogPageProps {
  article: InsightArticle;
  onBack: () => void;
  onSelectInsight: (article: InsightArticle) => void;
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const SingleBlogPage: React.FC<SingleBlogPageProps> = ({
  article,
  onBack,
  onSelectInsight,
  onNavigate,
  onOpenConsultation,
}) => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  // Find related service and industry
  const relatedService = SERVICES_DATA.find(s => s.id === article.relatedServiceId);
  const relatedIndustry = INDUSTRIES_DATA.find(i => i.id === article.relatedIndustryId);
  const otherArticles = INSIGHTS_DATA.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <article className="bg-white min-h-screen text-slate-900 pb-20">
      {/* Top Banner & Breadcrumbs Bar */}
      <div className="bg-[#0D1F18] text-white py-8 sm:py-10 border-b border-emerald-950">
        <div className="w-[90%] mx-auto">
          {/* Top navigation row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all Insights & Blogs</span>
            </button>

            {/* Breadcrumb path */}
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <button 
                onClick={() => onNavigate('home')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <button 
                onClick={() => onNavigate('insights')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Insights & Blog
              </button>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-emerald-300 font-semibold truncate max-w-[200px] sm:max-w-xs">
                {article.category}
              </span>
            </div>
          </div>

          {/* Article Header Statement */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-5 bg-[#00D2D3] rounded-full inline-block" />
              <span className="bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                {article.category}
              </span>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-xs text-slate-300 flex items-center gap-1 font-medium">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
              <span className="text-slate-400 text-xs hidden sm:inline">•</span>
              <span className="text-xs text-slate-300 hidden sm:flex items-center gap-1 font-medium">
                <Calendar className="w-3 h-3" /> {article.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-[1.2] mb-4">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6">
                {article.subtitle}
              </p>
            )}

            {/* Author bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-emerald-900/80">
              <div className="flex items-center gap-3">
                {article.author.image ? (
                  <img
                    src={article.author.image}
                    alt={article.author.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-emerald-400/40"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-white text-sm">
                    {article.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-sm text-white">
                    {article.author.name}
                  </div>
                  <div className="text-xs text-emerald-300 font-medium">
                    {article.author.role} • 3XTECH Practice Lead
                  </div>
                </div>
              </div>

              {/* Share & Download actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2 rounded-lg border border-white/15 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Share Article"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownload}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{downloaded ? 'PDF Saved ✓' : 'PDF Dossier'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Reading Container */}
      <div className="w-[90%] mx-auto pt-10 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left / Center Column: Article Body (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-slate-900 shadow-lg border border-slate-200">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20">
                  Published by 3XTECH Solution Services Research & Advisory
                </span>
              </div>
            </div>

            {/* Executive Summary Callout Box */}
            <div className="bg-slate-50 border-l-4 border-[#0B6B38] p-5 sm:p-6 rounded-r-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B6B38] mb-1.5 block">
                Executive Overview
              </span>
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                {article.summary}
              </p>
            </div>

            {/* Key Takeaways Card */}
            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <div className="bg-gradient-to-br from-emerald-50/70 to-teal-50/40 border border-emerald-200/80 rounded-2xl p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-[#0B6B38] text-white flex items-center justify-center shadow-xs">
                    <BookmarkCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Key Strategic Takeaways for Technology Leaders
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {article.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6B38] shrink-0 mt-0.5" />
                      <span className="leading-snug">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* In-depth Article Sections */}
            <div className="space-y-8 text-slate-800 text-base leading-relaxed">
              {article.contentSections && article.contentSections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-2 border-t border-slate-100">
                    {sec.heading}
                  </h2>
                  
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-700 leading-relaxed font-normal text-sm sm:text-base">
                      {p}
                    </p>
                  ))}

                  {sec.callout && (
                    <div className="my-5 p-5 bg-fuchsia-50/60 border-l-4 border-[#C026D3] rounded-r-xl">
                      <p className="text-slate-900 font-semibold italic text-base sm:text-lg">
                        "{sec.callout}"
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tags Pills */}
            {article.tags && article.tags.length > 0 && (
              <div className="pt-6 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Topic Classifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Profile Bio Box */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-4">
              {article.author.image && (
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400 shrink-0"
                />
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Author Profile
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {article.author.name}
                </h3>
                <p className="text-xs text-slate-300 mb-2">
                  {article.author.role}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {article.author.bio || 'Advising UK organizations on high-resilience IT infrastructure and measurable transformation results.'}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Attached Related Services, Industry & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            
            {/* Attached Related Service Card */}
            {relatedService && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-6 overflow-hidden relative group">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-4 bg-[#0B6B38] rounded-full inline-block" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Related Core Service
                  </span>
                </div>

                <div className="relative h-36 rounded-xl overflow-hidden mb-4 bg-slate-900">
                  <img
                    src={relatedService.image}
                    alt={relatedService.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 text-white">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                      {relatedService.categoryLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-[#0B6B38] transition-colors">
                  {relatedService.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {relatedService.description}
                </p>

                {/* Key feature list */}
                <div className="space-y-1.5 mb-5 pb-4 border-b border-slate-100">
                  {relatedService.keyFeatures.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('solutions', relatedService.id)}
                  className="w-full bg-[#0B6B38] hover:bg-[#084e29] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>Explore {relatedService.categoryLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* Attached Related Industry Card */}
            {relatedIndustry && (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-4 bg-[#C026D3] rounded-full inline-block" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Industry Specialism
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-100 text-[#C026D3] flex items-center justify-center shadow-xs">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {relatedIndustry.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {relatedIndustry.subtitle}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80 mb-4">
                  <div className="text-base font-extrabold text-slate-900">
                    {relatedIndustry.featuredStat}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {relatedIndustry.statDescription}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('industries', relatedIndustry.id)}
                  className="w-full bg-white hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-300 hover:border-slate-900 font-semibold text-xs py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Industry Framework</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C026D3]" />
                </button>
              </div>
            )}

            {/* Fast Strategic Scoping Consultation Box */}
            <div className="bg-[#0D1F18] text-white rounded-2xl p-5 sm:p-6 shadow-xl border border-emerald-900">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Direct Advisory
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Discuss this paper with our architects
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Schedule a complimentary 30-minute scoping session to review how these methodologies map to your infrastructure.
              </p>

              <button
                onClick={onOpenConsultation}
                className="w-full bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mb-3"
              >
                <span>Request Briefing Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="pt-3 border-t border-emerald-900/60 flex items-center justify-between text-[11px] text-slate-300">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="hover:text-white flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-emerald-400" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white flex items-center gap-1"
                >
                  <Mail className="w-3 h-3 text-emerald-400" />
                  <span>Email Team</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section: Explore Other Articles / Insights */}
        {otherArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-4 bg-[#0B6B38] rounded-full inline-block" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Recommended Reading
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Explore More Enterprise Briefings
                </h2>
              </div>

              <button
                onClick={() => onNavigate('insights')}
                className="mt-4 sm:mt-0 text-xs sm:text-sm font-bold text-[#C026D3] hover:text-[#A21CAF] flex items-center gap-1 cursor-pointer"
              >
                <span>View all research</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => onSelectInsight(art)}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="relative h-44 bg-slate-900 overflow-hidden">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                        {art.category}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{art.date}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{art.readTime}</span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0B6B38] transition-colors line-clamp-2 mb-2 leading-snug">
                        {art.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {art.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-600">{art.author.name}</span>
                    <span className="text-[#C026D3] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Read paper <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
};
