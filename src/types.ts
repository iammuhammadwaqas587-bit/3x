export type PageId = 'home' | 'solutions' | 'industries' | 'case-studies' | 'insights' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  category: 'project-management' | 'technical-support' | 'managed-network' | 'consulting' | string;
  categoryLabel: string;
  title: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  metrics: {
    stat: string;
    label: string;
  };
  image: string;
  subtitle?: string;
  deliverablesTitle?: string;
  deliverables?: string[];
  serviceMatrix?: string[];
  processSteps?: { title: string; desc: string }[];
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challengesSolved: string[];
  image: string;
  featuredStat: string;
  statDescription: string;
}

export interface CaseStudyItem {
  id: string;
  clientName: string;
  sector: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  impactMetric: string;
  impactLabel: string;
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface InsightArticle {
  id: string;
  category: 'Whitepaper' | 'Industry Report' | 'Executive Brief' | 'Case Insight' | 'Project Management' | 'Technical Support' | 'Network Services' | 'Consulting' | string;
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  author: {
    name: string;
    role: string;
    image?: string;
    bio?: string;
  };
  keyTakeaways?: string[];
  contentSections?: {
    heading: string;
    paragraphs: string[];
    callout?: string;
  }[];
  tags?: string[];
  relatedServiceId?: string;
  relatedIndustryId?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}
