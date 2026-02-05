
import React from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon?: string;
  iconImage?: string; // New: For tech stack logos or specific images
  image?: string; // For carousel cards
  ctaText?: string;
  colorTheme?: 'purple' | 'green' | 'yellow' | 'dark-purple' | 'light-purple' | 'blue' | 'orange' | 'white';
}

export type HeroVariant = 'standard' | 'cinematic' | 'minimal' | 'split_edge' | 'video_canvas';

export interface InfographicItem {
  label?: string;
  text: string;
  type: 'pill' | 'stat';
  colorTheme?: 'green' | 'purple' | 'white' | 'blue' | 'orange';
  value?: string;
}

export interface TimelineItem {
  step: string;
  title: string;
  description?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: { linkedin?: string; twitter?: string };
}

export interface ProjectItem {
  title: string;
  details: string;
  image: string;
  url: string;
  tags?: string[];
}

export interface ContentBlock {
  type: 'banner' | 'feature_split' | 'testimonials' | 'simple_text' | 'infographic_row' | 'grid_cards' | 'stats_row' | 'process_timeline' | 'logo_strip' | 'feature_grid_highlight' | 'portfolio_masonry' | 'logo_grid' | 'cta_curved' | 'carousel_services' | 'image_row' | 'portfolio_showcase' | 'testimonial_single' | 'team_grid' | 'vertical_list_icons' | 'centered_image' | 'before_after_comparison' | 'external_project_showcase' | 'faq_accordion' | 'tech_ecosystem_map' | 'comparison_table' | 'interactive_stats_grid' | 'case_study_highlight' | 'media_collage' | 'service_tiers';
  title?: string;
  subtitle?: string;
  content?: string;
  image?: string;
  align?: 'left' | 'right' | 'center';
  background?: 'light' | 'dark' | 'primary' | 'black' | 'transparent';
  ctaText?: string;
  ctaLink?: string;
  accent?: string; // Optional hex color or Tailwind class
  testimonials?: Testimonial[];

  // New fields for complex blocks
  cards?: ServiceCard[];
  infographics?: InfographicItem[];
  statsList?: { value: string; label: string; colorTheme: string }[];
  timeline?: TimelineItem[];
  images?: string[]; // For portfolio/logos
  logos?: { src: string; alt: string }[];
  team?: TeamMember[];

  // Highlight Feature specific
  highlightCard?: {
    title: string;
    description: string;
    ctaText: string;
    colorTheme: 'purple' | 'blue' | 'green' | 'orange';
  };

  // Portfolio Showcase specific
  projects?: {
    title: string;
    category: string;
    image: string;
    size: 'large' | 'normal' | 'wide' | 'tall';
  }[];

  // External Project Showcase specific
  externalProjects?: ProjectItem[];

  // Single Testimonial
  testimonialSingle?: {
    image: string;
    quote: string;
    author: string;
    role: string;
  };

  // Vertical List Icons Specific
  listItems?: {
    icon: string;
    text: string;
  }[];

  // Before/After Specific
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    beforeLabel: string;
    afterLabel: string;
    description?: string;
  };

  // FAQ
  faqs?: { q: string; a: string }[];

  // Comparison Table
  comparisonTable?: {
    headers: string[];
    rows: { label: string; values: string[] }[];
  };

  // Tech Ecosystem
  techEcosystem?: {
    category: string;
    techs: { name: string; icon: string; importance: number }[];
  }[];

  // Interactive Stats Grid
  interactiveStats?: {
    value: string;
    label: string;
    description: string;
    icon: string;
    color: string;
  }[];

  // Case Study Highlight
  caseStudy?: {
    client: string;
    challenge: string;
    solution: string;
    result: string;
    image: string;
    metrics?: { label: string; value: string }[];
  };

  // Media Collage
  mediaCollage?: {
    items: { type: 'image' | 'video'; src: string; span?: 'row' | 'col' | 'both' }[];
  };

  // Service Tiers / Pricing
  serviceTiers?: {
    name: string;
    price?: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    ctaText?: string;
  }[];
}

export type ServiceCategory = 'Development' | 'Marketing' | 'Design' | 'Strategy';

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  category: ServiceCategory; // Added category
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
  // Premium fields
  heroVariant?: HeroVariant;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroCtaText?: string;
  heroImages?: string[]; // For Hero Collage
  heroAvatars?: string[]; // For Hero Social Proof
  stats?: { label: string; value: string }[];
  heroVideo?: string; // Background video for hero sections

  // 3D Hero Support
  use3DHero?: boolean;
  hero3DColor?: string;

  // Video Section
  video?: {
    thumbnail: string;
    url?: string; // Optional real URL, usually just a placeholder UI
  };

  // Process / Solutions Grid
  processTitle?: string;
  processSubtitle?: string;
  process?: { title: string; description: string; icon: string }[];

  // Modular Blocks (Extra Sections)
  contentBlocks?: ContentBlock[];

  // Bottom CTA Customization
  ctaTitle?: string;
  ctaText?: string;

  gallery?: string[];
}

export interface PageContent {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  image?: string;
  contentBlocks?: ContentBlock[];
}
