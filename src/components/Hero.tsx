import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  MessageSquare, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { CORPORATE_STATS, INSIGHTS_DATA, CASE_STUDIES_DATA } from '../data/contentData';
import { PageId } from '../types';

interface HeroProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
  onOpenSearch?: () => void;
}

interface NewsCardItem {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
  linkPage: PageId;
  linkId?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  onNavigate, 
  onOpenConsultation,
  onOpenSearch 
}) => {
  const [currentNewsIdx, setCurrentNewsIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Curated scrolling news cards mirroring Capita's live updates module - linked to single blogs
  const newsItems: NewsCardItem[] = [
    {
      id: 'news-1',
      date: 'September 2026',
      category: 'Project Management',
      title: 'Expert Project Management: Why 70% of IT Initiatives Fail Without Agile Governance',
      description: 'A breakdown of key failure factors in complex IT deployments, and how structured sprint governance, milestone tracking, and stakeholder management guarantee delivery success.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      linkPage: 'insights',
      linkId: 'report-expert-project-management',
    },
    {
      id: 'news-2',
      date: 'August 2026',
      category: 'Technical Support',
      title: 'Responsive Technical Support: Transforming Helpdesks into Productivity Drivers',
      description: 'How rapid first-contact resolution, proactive endpoint diagnostics, and Tier 3 engineering escalation keep modern enterprise teams focused and productive.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      linkPage: 'insights',
      linkId: 'report-responsive-technical-support',
    },
    {
      id: 'news-3',
      date: 'July 2026',
      category: 'Network Services',
      title: 'Managed Network Services: Designing Resilient Multi-Site Connectivity with SD-WAN',
      description: 'A practical guide for organizations moving from traditional MPLS to intelligent SD-WAN with automated failover, QoS optimization, and next-generation perimeter defense.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      linkPage: 'insights',
      linkId: 'report-managed-network-services',
    },
    {
      id: 'news-4',
      date: 'June 2026',
      category: 'Consulting',
      title: 'Strategic IT Consulting: Maximizing Organizational Value & Eliminating Technical Debt',
      description: 'Why vendor-neutral technology audits, cloud readiness assessments, and structured roadmaps deliver measurable ROI before investing in new systems.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
      linkPage: 'insights',
      linkId: 'report-consulting-service',
    },
  ];

  // Auto-cycle the news cards every 4.5 seconds (paused on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentNewsIdx(prev => (prev + 1) % newsItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, newsItems.length]);

  const handleNextNews = () => {
    setCurrentNewsIdx(prev => (prev + 1) % newsItems.length);
  };

  const handlePrevNews = () => {
    setCurrentNewsIdx(prev => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToNextSection = () => {
    const el = document.getElementById('who-we-are-section') || document.getElementById('solutions-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenSearch) {
      onOpenSearch();
    } else {
      onNavigate('solutions');
    }
  };

  const currentNews = newsItems[currentNewsIdx];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white select-none">
      {/* 1. Full-Width Background Video Container matching Capita's cinematic hero */}
      <div className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] xl:min-h-[780px] w-full flex flex-col justify-between">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          >
            <source
              src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* High-contrast dark gradient overlay ensuring clear typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />

          {/* Subtle brand color accents (emerald & magenta) diffused into the atmosphere */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Video Control Toggles (Bottom Right subtle floating controls) */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-slate-300">
          <button
            onClick={toggleSound}
            aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            className="hover:text-white transition-colors cursor-pointer p-1"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={togglePlayback}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className="hover:text-white transition-colors cursor-pointer p-1"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          </button>
        </div>

        {/* 2. Main Hero Content Grid with 90% Width Constraint */}
        <div className="relative z-10 w-[90%] mx-auto pt-16 sm:pt-24 lg:pt-28 pb-12 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Capita Bold Typographic Statement & Interactive Help Pill */}
            <div className="w-full lg:col-span-7 flex flex-col items-start text-left">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>3XTECH Solution Services • Global Enterprise Operations</span>
              </div>

              {/* Exact Capita Hero Statement Typography */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08] mb-6">
                Enabled by technology
                <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-emerald-200">
                  Powered by people
                </span>
              </h1>

              {/* Refined corporate description */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
                We deliver Managed Network Services, Responsive Technical Support, Expert Project Management, and Consulting Services that keep your organization operating with complete dependability.
              </p>

              {/* Capita-style Interactive "How can we help you?" Pill */}
              <div className="w-full max-w-lg mb-8">
                <form
                  onSubmit={handleSearchSubmit}
                  className="group relative flex items-center bg-slate-900/80 hover:bg-slate-900/95 border border-white/20 hover:border-white/40 backdrop-blur-md rounded-full px-5 py-3 shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    if (onOpenSearch) onOpenSearch();
                  }}
                >
                  <Search className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 mr-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="How can we help you?"
                    className="w-full bg-transparent text-white placeholder:text-slate-300 text-base sm:text-lg focus:outline-none cursor-pointer"
                    readOnly
                  />
                  <div className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-[#C026D3] text-white shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                </form>

                {/* Fast exploration chips strictly for the 4 services */}
                <div className="flex flex-wrap items-center gap-2 mt-3 pl-2">
                  <span className="text-xs text-slate-400 font-medium">Core Services:</span>
                  <button
                    onClick={() => onNavigate('solutions', 'project-management')}
                    className="text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-full border border-white/10 transition-colors"
                  >
                    Expert Project Management
                  </button>
                  <button
                    onClick={() => onNavigate('solutions', 'technical-support')}
                    className="text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-full border border-white/10 transition-colors"
                  >
                    Responsive Technical Support
                  </button>
                  <button
                    onClick={() => onNavigate('solutions', 'managed-network')}
                    className="text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-full border border-white/10 transition-colors"
                  >
                    Managed Network Services
                  </button>
                  <button
                    onClick={() => onNavigate('solutions', 'consulting')}
                    className="text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-full border border-white/10 transition-colors"
                  >
                    Consulting Service
                  </button>
                </div>
              </div>

              {/* Action Buttons: High-Contrast Magenta & Emerald Accents */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={onOpenConsultation}
                  id="hero-cta-primary"
                  className="w-full sm:w-auto bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Request Strategic Blueprint</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('solutions')}
                  id="hero-cta-secondary"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 font-semibold text-base px-6 py-3.5 rounded-lg backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Right Column: Floating News Cards Scrolling Carousel matching reference - Laptop and Desktop only */}
            <div className="hidden lg:flex lg:col-span-5 flex-col items-center lg:items-end justify-center">
              <div
                className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/40 text-slate-900 transition-all duration-300 hover:shadow-emerald-950/40 relative group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* News card header banner */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0B6B38] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Latest News & Updates
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                    {currentNewsIdx + 1} of {newsItems.length}
                  </span>
                </div>

                {/* News Card Body matching Capita layout: Left Image, Right Text */}
                <div
                  onClick={() => onNavigate(currentNews.linkPage, currentNews.linkId)}
                  className="flex gap-4 items-start cursor-pointer group/card"
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-slate-900 shadow-md">
                    <img
                      src={currentNews.image}
                      alt={currentNews.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 flex flex-col justify-between min-h-[96px]">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-slate-500">
                          {currentNews.date}
                        </span>
                        <span className="text-slate-300 text-xs">•</span>
                        <span className="text-[11px] font-bold text-[#0B6B38] uppercase tracking-wide">
                          {currentNews.category}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-normal text-slate-900 leading-snug group-hover/card:text-[#C026D3] transition-colors line-clamp-2">
                        {currentNews.title}
                      </h3>
                    </div>

                    <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-[#C026D3] group-hover/card:translate-x-1 transition-transform">
                      <span>Read more</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Description snippet */}
                <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  {currentNews.description}
                </p>

                {/* Carousel Controls: Dots & Prev/Next Arrows */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  {/* Pagination Dots */}
                  <div className="flex items-center gap-1.5">
                    {newsItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentNewsIdx(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === currentNewsIdx
                            ? 'w-6 bg-[#0B6B38]'
                            : 'w-2 bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Arrow Controls */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrevNews}
                      aria-label="Previous news article"
                      className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextNews}
                      aria-label="Next news article"
                      className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Capita-style Bottom-Left Scroll Indicator */}
        <div className="relative z-10 w-[90%] mx-auto pb-8 flex items-center justify-between">
          <button
            onClick={scrollToNextSection}
            className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            {/* Capita's signature cyan/emerald accent bar */}
            <span className="w-1 h-5 bg-emerald-400 group-hover:h-6 group-hover:bg-fuchsia-400 transition-all duration-300 rounded-full" />
            <span className="tracking-wide">Scroll for more</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-emerald-400 group-hover:text-fuchsia-400" />
          </button>

          {/* Quick SLA verification badge */}
          <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              99.8% Certified SLA Precision
            </span>
            <span>•</span>
            <span>ISO 27001 & Cyber Essentials Plus</span>
          </div>
        </div>
      </div>

      {/* 4. Capita-style Modular Statistics Bar directly beneath Hero with 90% width */}
      <div className="bg-slate-900/90 border-t border-b border-slate-800 py-8">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {CORPORATE_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-950/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-200"
              >
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1 flex items-baseline gap-1">
                  <span className={idx % 2 === 0 ? 'text-emerald-400' : 'text-[#C026D3]'}>
                    {stat.value}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-200 leading-snug">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

