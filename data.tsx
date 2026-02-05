
import React from 'react';
import { ServiceData, PageContent } from './types';

export const SERVICES: ServiceData[] = [
    {
        id: 'website-design-development',
        title: 'Website Design & Development',
        slug: 'website-design-development',
        category: 'Development',
        shortDescription: 'Immersive Digital Ecosystems',
        fullDescription: 'We don\'t just build websites; we engineer high-performance digital ecosystems. From corporate portals to high-conversion landing pages, our designs are responsive, accessible, and optimized for speed.',
        icon: 'web',
        image: '/assets/images/design-laptop.jpg',
        features: ['Custom UI/UX Design', 'Responsive Frontend Architecture', 'CMS Integration', 'Performance Optimization'],
        heroHeadline: 'Architecting the Future of Web Experience',
        heroSubheadline: 'Where aesthetic mastery meets engineering precision. We construct pixel-perfect, scalable digital headquarters for global brands.',
        heroCtaText: 'Start Your Build',
        heroVariant: 'split_edge',
        heroImages: [
            '/assets/images/design-laptop.jpg',
            'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070'
        ],
        stats: [
            { label: 'Lighthouse Score', value: '100' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Conversion', value: '+45%' }
        ],
        contentBlocks: [
            {
                type: 'stats_row',
                statsList: [
                    { value: '100', label: 'Google Lighthouse', colorTheme: 'green' },
                    { value: '0.4s', label: 'LCP Speed', colorTheme: 'blue' },
                    { value: '500+', label: 'Sites Deployed', colorTheme: 'purple' },
                    { value: '250%', label: 'Avg ROI Increase', colorTheme: 'orange' }
                ]
            },
            {
                type: 'tech_ecosystem_map',
                title: 'The Modern Stack Architecture',
                subtitle: 'We utilize a highly curated selection of enterprise-grade technologies to ensure your project is built for a decade, not a season.',
                techEcosystem: [
                    {
                        category: 'Frontend Core',
                        techs: [
                            { name: 'React 19', icon: 'fab fa-react', importance: 10 },
                            { name: 'Next.js 15', icon: 'fas fa-rocket', importance: 9 },
                            { name: 'TypeScript', icon: 'fas fa-shield-alt', importance: 8 }
                        ]
                    },
                    {
                        category: 'Motion & Visuals',
                        techs: [
                            { name: 'Three.js / WebGL', icon: 'fas fa-cube', importance: 10 },
                            { name: 'Framer Motion', icon: 'fas fa-magic', importance: 9 },
                            { name: 'GSAP', icon: 'fas fa-infinity', importance: 7 }
                        ]
                    },
                    {
                        category: 'Content Engine',
                        techs: [
                            { name: 'Sanity.io', icon: 'fas fa-database', importance: 9 },
                            { name: 'GraphQL', icon: 'fas fa-project-diagram', importance: 8 },
                            { name: 'Redis Cache', icon: 'fas fa-bolt', importance: 7 }
                        ]
                    }
                ]
            },
            {
                type: 'feature_split',
                title: 'Engineering the "Aha!" Moment',
                content: 'We believe that the first 3 seconds of a user\'s visit determine your brand\'s value. Our engineering philosophy centers on <strong>Perceived Performance</strong>. <br/><br/>While others focus on scores, we focus on the feeling. Through strategic asset loading, edge-cached content, and optimistic UI updates, we create digital environments that respond instantly, regardless of the user\'s device or connection speed.',
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
                align: 'right'
            },
            {
                type: 'comparison_table',
                title: 'The Thynkit Advantage',
                comparisonTable: {
                    headers: ['The Thynkit Standard', 'Typical Agency Build'],
                    rows: [
                        { label: 'Architecture', values: ['Custom Component Library', 'Theme-based / Template'] },
                        { label: 'Lighthouse Performance', values: ['95-100 Score', '60-75 Score'] },
                        { label: 'Content Management', values: ['Headless / Real-time', 'Monolithic / Slow Admin'] },
                        { label: 'Mobile Experience', values: ['Native App Feel', 'Standard Responsive'] },
                        { label: 'SEO Readiness', values: ['Schema Markup + SSR', 'Basic Meta Tags'] },
                        { label: 'Ownership', values: ['100% Clean Code', 'Vendor Locked Plugins'] }
                    ]
                }
            },
            {
                type: 'case_study_highlight',
                caseStudy: {
                    client: 'Nexus Financial',
                    challenge: 'A cluttered legacy portal causing 70% drop-off at the KYC (Know Your Customer) stage.',
                    solution: 'Architected a streamlined, multi-step React application with cognitive load-balancing and real-time validation.',
                    result: '+120% increase in completed applications within the first quarter post-launch.',
                    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
                    metrics: [
                        { label: 'Speed Increase', value: '4.2x' },
                        { label: 'Drop-off Reduction', value: '85%' }
                    ]
                }
            },
            {
                type: 'grid_cards',
                title: 'Specialized Web Capabilities',
                subtitle: 'Precision tools for complex digital requirements.',
                cards: [
                    { title: 'Interactive 3D Hubs', description: 'Transforming flat data into immersive 3D landscapes that engage and inform.', icon: 'view_in_ar', colorTheme: 'orange' },
                    { title: 'Enterprise Dashboards', description: 'Complex data visualization for internal operations and client portals.', icon: 'grid_view', colorTheme: 'blue' },
                    { title: 'Micro-SaaS Frontends', description: 'Conversion-optimized landing pages with integrated subscription logic.', icon: 'payments', colorTheme: 'green' },
                    { title: 'E-commerce Flagships', description: 'Bespoke shopping experiences that outperform standard Shopify themes.', icon: 'shopping_bag', colorTheme: 'purple' }
                ]
            },
            {
                type: 'media_collage',
                mediaCollage: {
                    items: [
                        { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000', span: 'both' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000', span: 'row' }
                    ]
                }
            },
            {
                type: 'service_tiers',
                title: 'Tailored Development Tiers',
                subtitle: 'Scalable engagement models for every stage of growth.',
                serviceTiers: [
                    {
                        name: 'Growth Build',
                        price: '$4,999+',
                        description: 'Ideal for high-impact landing pages and startup MVPs.',
                        features: ['Custom Next.js Frontend', 'Basic Content Management', 'Essential SEO Pack', '30 Days Post-Launch Support']
                    },
                    {
                        name: 'Enterprise Hub',
                        price: '$12,499+',
                        description: 'The standard for established brands looking for excellence.',
                        features: ['Full Digital Ecosystem', 'Advanced Headless CMS', 'Custom 3D Elements', 'Third-Party Integration Suite', 'Performance SLA'],
                        isPopular: true
                    },
                    {
                        name: 'Elite custom',
                        price: 'Retainer',
                        description: 'Dedicated agile squad for ongoing platform evolution.',
                        features: ['Unlimited Feature Development', 'Daily DevOps Monitoring', 'Continuous A/B Testing', 'Priority 24/7 Support']
                    }
                ]
            },
            {
                type: 'process_timeline',
                title: 'The Engineering Lifecycle',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
                timeline: [
                    { step: '01', title: 'Technical Discovery', description: 'Deep dive into your existing tech debt and roadmap goals.' },
                    { step: '02', title: 'Architecture Blueprint', description: 'Defining the schema, API endpoints, and component hierarchy.' },
                    { step: '03', title: 'Rapid Prototype', description: 'Interactive wireframes to validate UX flows early.' },
                    { step: '04', title: 'Deep Development', description: 'Executing the build in focused 2-week agile sprints.' },
                    { step: '05', title: 'Stress & Load Testing', description: 'Ensuring your site handles traffic spikes before launch.' }
                ]
            },
            {
                type: 'cta_curved',
                title: 'Build Your Digital Fortress',
                subtitle: 'The best time to innovate was yesterday. The second best time is now.',
                ctaText: 'Deploy Thynkit'
            }
        ]
    },
    {
        id: 'digital-marketing-seo',
        title: 'Digital Marketing Services',
        slug: 'digital-marketing-seo',
        category: 'Marketing',
        shortDescription: 'Data-Driven Growth Engines',
        fullDescription: 'Amplify your brand visibility. We build comprehensive, multi-channel marketing strategies that drive real revenue, not just vanity metrics.',
        icon: 'campaign',
        image: '/assets/images/marketing-diag.jpg',
        features: ['Technical SEO Audits', 'PPC & Ad Campaigns', 'Social Media Strategy', 'Conversion Rate Optimization', 'Marketing Automation'],
        heroHeadline: 'Marketing That Actually Prints Money',
        heroSubheadline: "Stop burning cash on 'brand awareness' that doesn't convert. We engineer data-driven campaigns that target your ideal customer with laser precision and irresistible offers.",
        heroCtaText: 'Scale Your Revenue',
        heroVariant: 'split_edge',
        heroImages: [
            '/assets/images/marketing-diag.jpg',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
            'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000'
        ],
        stats: [
            { label: 'Ad Spend Managed', value: '$50M+' },
            { label: 'Leads Generated', value: '2.5M+' },
            { label: 'Avg. ROI', value: '450%' }
        ],
        contentBlocks: [
            {
                type: 'stats_row',
                statsList: [
                    { value: '$50M+', label: 'Ad Spend Managed', colorTheme: 'orange' },
                    { value: '450%', label: 'Avg Client ROAS', colorTheme: 'green' },
                    { value: '2.5M+', label: 'Leads Generated', colorTheme: 'blue' },
                    { value: '98%', label: 'Retention Rate', colorTheme: 'purple' }
                ]
            },
            {
                type: 'tech_ecosystem_map',
                title: 'Marketing Technology Stack',
                subtitle: 'We don\'t guess; we measure. Our proprietary "Growth Engine" integrates the world\'s most powerful data layers.',
                techEcosystem: [
                    {
                        category: 'Search & Analytics',
                        techs: [
                            { name: 'Google Ads (Search/Display)', icon: 'fab fa-google', importance: 10 },
                            { name: 'SEMRush Enterprise', icon: 'fas fa-search-plus', importance: 9 },
                            { name: 'Google Analytics 4', icon: 'fas fa-chart-line', importance: 10 }
                        ]
                    },
                    {
                        category: 'Conversion & Tracking',
                        techs: [
                            { name: 'Hotjar Behavioral', icon: 'fas fa-fire', importance: 8 },
                            { name: 'Google Tag Manager', icon: 'fas fa-tags', importance: 9 },
                            { name: 'Meta Pixel / API', icon: 'fab fa-facebook', importance: 9 }
                        ]
                    },
                    {
                        category: 'Automation & CRM',
                        techs: [
                            { name: 'HubSpot Marketing', icon: 'fab fa-hubspot', importance: 8 },
                            { name: 'Mailchimp / Klaviyo', icon: 'fas fa-envelope-open-text', importance: 7 },
                            { name: 'Zapier Orchestration', icon: 'fas fa-plug', importance: 8 }
                        ]
                    }
                ]
            },
            {
                type: 'feature_split',
                title: 'The Psychology of the Click',
                content: 'Marketing isn\'t about shouting louder; it\'s about whisper-targeting the right message at the exact moment of intent. <br/><br/>Our <strong>Algorithm-First</strong> approach leverages machine learning to identify high-intent keywords that your competitors are missing. We combine this technical edge with deep neuromarketing principles—crafting copy that doesn\'t just get read, but triggers action.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
                align: 'left'
            },
            {
                type: 'comparison_table',
                title: 'Growth Methodology Comparison',
                comparisonTable: {
                    headers: ['Thynkit Data-First', 'Standard Agency Approach'],
                    rows: [
                        { label: 'Keyword Strategy', values: ['Intent-Based Mapping', 'High-Volume Guessing'] },
                        { label: 'Reporting', values: ['Live Revenue Dashboards', 'Monthly PDF Static Reports'] },
                        { label: 'Ad Optimization', values: ['Daily Bidding Sprints', 'Set-and-Forget Weekly'] },
                        { label: 'Content Quality', values: ['Elite Thought Leadership', 'Generic Content Mills'] },
                        { label: 'Transparency', values: ['Full Admin Access', 'Hidden Markup/Accounts'] }
                    ]
                }
            },
            {
                type: 'case_study_highlight',
                caseStudy: {
                    client: 'SolarStream Tech',
                    challenge: 'High CPL (Cost Per Lead) of $140 making scale impossible in a competitive market.',
                    solution: 'Deep technical SEO audit to fix crawl budget issues combined with a laser-targeted LinkedIn retargeting funnel.',
                    result: 'CPL dropped to $38 while lead quality (MQL to SQL conversion) increased by 45%.',
                    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
                    metrics: [
                        { label: 'CPL Reduction', value: '72%' },
                        { label: 'Lead Volume', value: 'x4.5' }
                    ]
                }
            },
            {
                type: 'grid_cards',
                title: 'Omnichannel Dominance',
                subtitle: 'Scaling your footprint across the entire digital landscape.',
                cards: [
                    { title: 'Technical SEO', description: 'Deep infrastructure audits that make Google fall in love with your server.', icon: 'search', colorTheme: 'blue' },
                    { title: 'Elite PPC', description: 'High-ROAS management of Google, Meta, and LinkedIn ad budgets.', icon: 'ads_click', colorTheme: 'orange' },
                    { title: 'Content Authority', description: 'White-hat link building and thought-leadership content that ranks.', icon: 'description', colorTheme: 'green' },
                    { title: 'Revenue CRO', description: 'Turning existing traffic into buyers through behavioral data and A/B testing.', icon: 'bar_chart', colorTheme: 'purple' }
                ]
            },
            {
                type: 'media_collage',
                mediaCollage: {
                    items: [
                        { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000', span: 'row' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1000' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000', span: 'col' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000' }
                    ]
                }
            },
            {
                type: 'service_tiers',
                title: 'Growth Acceleration Tiers',
                subtitle: 'Pick the engine size that fits your ambition.',
                serviceTiers: [
                    {
                        name: 'Visibility Pack',
                        price: '$2,500/mo',
                        description: 'Foundational SEO and basic social management for growing brands.',
                        features: ['Technical SEO Audit', '10 Target Keywords', '2 High-Authority Backlinks', 'Weekly Performance Sync']
                    },
                    {
                        name: 'The Scaler',
                        price: '$6,000/mo',
                        description: 'Comprehensive PPC and aggressive SEO for market leaders.',
                        features: ['Full Ad Orbit Management', '50+ Target Keywords', 'CRO Heatmapping', 'Integrated Lead-Gen Funnel', 'Real-time ROI Dashboard'],
                        isPopular: true
                    },
                    {
                        name: 'Dominance Tier',
                        price: 'Custom',
                        description: 'Fractional CMO services and elite multi-channel war chest.',
                        features: ['Unlimited Channel Expansion', 'Influencer/PR Management', 'Custom Creative Production', '24/7 Dedicated Account Lead']
                    }
                ]
            },
            {
                type: 'cta_curved',
                title: 'Ready for Growth That Actually Prints Money?',
                subtitle: 'Your competitors are already running Thynkit-tier campaigns. Are you?',
                ctaText: 'Audit My Channel'
            }
        ]
    },
    {
        id: 'graphics-design',
        title: 'Graphics Design',
        slug: 'graphics-design',
        category: 'Design',
        shortDescription: 'Visual Identity & Branding',
        fullDescription: 'Stand out with striking visuals. Our design team creates memorable logos, branding materials, and marketing assets.',
        icon: 'brush',
        image: '/assets/images/design-stationery.jpg',
        features: ['Logo Design & Branding', 'Marketing Collateral', 'Social Media Assets', 'Infographic Design'],
        heroHeadline: 'Transform Your Ideas Into Stunning Visuals',
        heroSubheadline: 'We don\'t just design flat logos; we build multidimensional brand assets ready for the metaverse and AR applications.',
        heroCtaText: 'Brand Your Business',
        heroVariant: 'cinematic',
        use3DHero: true,
        hero3DColor: '#8B5CF6',
        heroImages: ['/assets/images/design-laptop.jpg'], // Fixed high-res abstract

        stats: [
            { label: 'Identities Created', value: '300+' },
            { label: 'Design Awards', value: '15' },
            { label: 'Brand Lift', value: '2x' }
        ],
        contentBlocks: [
            {
                type: 'stats_row',
                statsList: [
                    { value: '300+', label: 'Identities Created', colorTheme: 'purple' },
                    { value: '15', label: 'Design Awards', colorTheme: 'purple' },
                    { value: '98%', label: 'Client Satisfaction', colorTheme: 'purple' },
                    { value: '2x', label: 'Brand Value Lift', colorTheme: 'purple' }
                ]
            },
            {
                type: 'tech_ecosystem_map',
                title: 'Professional Studio Stack',
                subtitle: 'We blend classical design principles with the world\'s most advanced digital creation tools.',
                techEcosystem: [
                    {
                        category: 'Vector & Layout',
                        techs: [
                            { name: 'Adobe Illustrator', icon: 'fas fa-pen-nib', importance: 10 },
                            { name: 'Figma (UI/UX)', icon: 'fab fa-figma', importance: 9 },
                            { name: 'InDesign (Publishing)', icon: 'fas fa-book-open', importance: 7 }
                        ]
                    },
                    {
                        category: 'Imaging & Texture',
                        techs: [
                            { name: 'Adobe Photoshop', icon: 'fas fa-icons', importance: 10 },
                            { name: 'Substance Painter', icon: 'fas fa-paint-brush', importance: 8 },
                            { name: 'Lightroom CC', icon: 'fas fa-adjust', importance: 10 }
                        ]
                    },
                    {
                        category: '3D & Motion',
                        techs: [
                            { name: 'Blender 4.0', icon: 'fas fa-cube', importance: 9 },
                            { name: 'Cinema 4D', icon: 'fas fa-film', importance: 8 },
                            { name: 'After Effects', icon: 'fas fa-magic', importance: 9 }
                        ]
                    }
                ]
            },
            {
                type: 'feature_split',
                title: 'The Soul of the Brand',
                content: 'A logo is just a mark; a brand is a feeling. We dive deep into your company\'s DNA to extract the visual language that speaks to your audience without saying a word. <br/><br/>Our <strong>Identity Architects</strong> don\'t just follow trends; we set them. We build cohesive visual systems that scale from a tiny favicon to a massive skyscraper billboard, ensuring your brand presence is unwavering and iconic.',
                image: '/assets/images/design-stationery.jpg',
                align: 'right'
            },
            {
                type: 'media_collage',
                title: 'Visual Masterpieces',
                mediaCollage: {
                    items: [
                        { type: 'image', src: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1000', span: 'both' },
                        { type: 'image', src: '/assets/images/book-mockup-v2.jpg' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&q=80&w=1000' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=1000', span: 'row' }
                    ]
                }
            },
            {
                type: 'comparison_table',
                title: 'Design Philosophy Comparison',
                comparisonTable: {
                    headers: ['Thynkit Studio', 'Standard Freelancer/Agency'],
                    rows: [
                        { label: 'Branding', values: ['Complete Visual Systems', 'Single Logo Files'] },
                        { label: 'Scalability', values: ['Vector-Ready & AR Proof', 'Basic Raster Exports'] },
                        { label: 'Research', values: ['Deep Competitive Audit', 'Pinterest-based Guessing'] },
                        { label: 'File Delivery', values: ['Organized Brand Vault', 'Single Folder Dump'] },
                        { label: 'Copyright', values: ['100% Client Ownership', 'Hidden Usage Fees'] }
                    ]
                }
            },
            {
                type: 'case_study_highlight',
                caseStudy: {
                    client: 'Lumina Skincare',
                    challenge: 'Generic packaging failing to stand out in a saturated premium market.',
                    solution: 'Developed a minimalist, holographic-inspired visual identity that emphasized "Purity" through negative space and custom typography.',
                    result: 'Listed in Sephora within 6 months of rebranding. Sales increased by 140%.',
                    image: '/assets/images/design-stationery.jpg',
                    metrics: [
                        { label: 'Market Share', value: '+35%' },
                        { label: 'Retail Interest', value: 'High' }
                    ]
                }
            },
            {
                type: 'service_tiers',
                title: 'Creative Engagement Tiers',
                subtitle: 'Branding that fits your business stage.',
                serviceTiers: [
                    {
                        name: 'The Brand Sprint',
                        price: '$3,500',
                        description: 'Essential identity for startups and new ventures.',
                        features: ['Logo Suite (Primary/Secondary)', 'Color & Type Foundation', 'Social Media Templates', 'Mini Brand Guide']
                    },
                    {
                        name: 'Full Identity Vault',
                        price: '$8,000',
                        description: 'Complete visual ecosystem for scale-ready businesses.',
                        features: ['Master Branding System', 'Complete Marketing Collateral', 'Custom Illustration Set', 'Enterprise Style Guide', '3D Asset Bundle'],
                        isPopular: true
                    },
                    {
                        name: 'Design On-Demand',
                        price: '$2,500/mo',
                        description: 'Your own dedicated design studio on a monthly retainer.',
                        features: ['Unlimited Graphics Tasks', 'Priority 48hr Turnaround', 'Daily Creative Syncs', 'Dedicated Art Director']
                    }
                ]
            },
            {
                type: 'cta_curved',
                title: 'Is Your Brand Forgettable?',
                subtitle: 'Let\'s create visuals that leave a lasting legacy.',
                ctaText: 'Start Your Identity'
            }
        ]
    },
    {
        id: 'seo-services',
        title: 'SEO Services',
        slug: 'seo-services',
        category: 'Marketing',
        shortDescription: 'Dominate Search Rankings',
        fullDescription: 'We don\'t just optimize for keywords; we optimize for revenue. Our holistic SEO strategy combines technical hygiene, content authority, and backlink power.',
        icon: 'travel_explore',
        image: '/assets/images/seo-diag.jpg',
        features: ['Technical Site Audits', 'On-Page Optimization', 'High-Quality Link Building', 'Local SEO Dominance'],
        heroHeadline: 'SEO That Dominates The Algorithm',
        heroSubheadline: "Stop guessing what Google wants. We engineer search dominance through data-driven content, technical precision, and white-hat authority building. Rankings are vanity; revenue is sanity. We deliver both.",
        heroCtaText: 'Get Your Free Audit',
        heroVariant: 'minimal',
        heroImages: [
            '/assets/images/seo-diag.jpg',
            'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2074',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2076',
            'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2070'
        ],
        stats: [
            { label: 'Keywords Ranked #1', value: '15k+' },
            { label: 'Traffic Increase', value: '300%' },
            { label: 'Client Retention', value: '96%' }
        ],
        contentBlocks: [
            {
                type: 'stats_row',
                statsList: [
                    { value: '15k+', label: 'Keywords Ranked #1', colorTheme: 'blue' },
                    { value: '300%', label: 'Avg Traffic Increase', colorTheme: 'green' },
                    { value: '96%', label: 'Retention Rate', colorTheme: 'purple' },
                    { value: '$100M+', label: 'Revenue Generated', colorTheme: 'orange' }
                ]
            },
            {
                type: 'tech_ecosystem_map',
                title: 'Technical SEO Weaponry',
                subtitle: 'We don\'t just "check" SEO; we build search infrastructure. These are the tools we use to dominate the SERPs.',
                techEcosystem: [
                    {
                        category: 'Analysis & Data',
                        techs: [
                            { name: 'Ahrefs Enterprise', icon: 'fas fa-dna', importance: 10 },
                            { name: 'SEMRush Master', icon: 'fas fa-chart-pie', importance: 9 },
                            { name: 'Screaming Frog', icon: 'fas fa-frog', importance: 8 }
                        ]
                    },
                    {
                        category: 'Performance & Logs',
                        techs: [
                            { name: 'Google Search Console', icon: 'fab fa-google', importance: 10 },
                            { name: 'Botify / OnCrawl', icon: 'fas fa-robot', importance: 8 },
                            { name: 'Cloudflare Edge SEO', icon: 'fas fa-cloud', importance: 9 }
                        ]
                    },
                    {
                        category: 'Automation',
                        techs: [
                            { name: 'Python (Custom)', icon: 'fab fa-python', importance: 10 },
                            { name: 'OpenAI GPT-4 Turbo', icon: 'fas fa-brain', importance: 9 },
                            { name: 'Google BigQuery', icon: 'fas fa-database', importance: 8 }
                        ]
                    }
                ]
            },
            {
                type: 'feature_split',
                title: 'Rankings are Vanity. Revenue is Sanity.',
                content: 'Most agencies promise "Page 1". We promise "Bank Deposits". <br/><br/>Our <strong>ThynkRank</strong> methodology focuses on high-intent conversion keywords. We don\'t waste your budget ranking for terms that don\'t sell. We fix your technical hygiene, build a cluster-based content architecture, and earn links that your competitors can\'t buy.',
                image: '/assets/images/seo-diag.jpg',
                align: 'left'
            },
            {
                type: 'comparison_table',
                title: 'The ThynkRank Difference',
                comparisonTable: {
                    headers: ['ThynkRank Core', 'Standard SEO Agency'],
                    rows: [
                        { label: 'Keyword Mapping', values: ['LSI & Intent Clusters', 'Single Keyword Lists'] },
                        { label: 'Technical Fixes', values: ['Serverless Edge Patching', 'Support Tickets to Devs'] },
                        { label: 'Link Building', values: ['Earned Tier-1 PR', 'Private Blog Networks'] },
                        { label: 'Reporting', values: ['Revenue & ROI Stats', 'Rank Positioning Only'] },
                        { label: 'Stability', values: ['Algorithm-Proof Assets', 'Volatility & Penalties'] }
                    ]
                }
            },
            {
                type: 'case_study_highlight',
                caseStudy: {
                    client: 'FinSphere Capital',
                    challenge: 'Locked on Page 3 for "Business Loans" for 2 years.',
                    solution: 'Implemented "Content Velocity" framework and fixed technical debt related to canonical loops.',
                    result: 'Reached Position #1 in 4 months, driving $5M in new originations.',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
                    metrics: [
                        { label: 'Traffic Increase', value: '+450%' },
                        { label: 'Organic Revenue', value: 'x12' }
                    ]
                }
            },
            {
                type: 'service_tiers',
                title: 'SEO Growth Packages',
                subtitle: 'Scalable authority for every business size.',
                serviceTiers: [
                    {
                        name: 'Growth Audit & Foundation',
                        price: '$3,000',
                        description: 'A one-time deep dive to fix what\'s broken and map the future.',
                        features: ['200-Point Tech Audit', 'Full Keyword Map', 'Competitor Insight Report', '90-Day Roadmap']
                    },
                    {
                        name: 'Authority Accelerator',
                        price: '$5,500/mo',
                        description: 'Consistent ranking growth for ambitious brands.',
                        features: ['Technical Maintenance', '50 Target Keywords', 'Tiered Link Building', 'Monthly Content Cluster', 'Real-time ROI Dashboard'],
                        isPopular: true
                    },
                    {
                        name: 'Enterprise Dominance',
                        price: 'Custom',
                        description: 'Global search dominance for massive portfolios.',
                        features: ['Unlimited Scale', 'Global PR Link Building', 'Python-Driven Tech SEO', 'Fractional Search Director', 'E-E-A-T Program']
                    }
                ]
            },
            {
                type: 'cta_curved',
                title: 'Is Your Website Invisible?',
                subtitle: 'Let\'s fix that today with a free ROI forecasting audit.',
                ctaText: 'Get My ROI Forecast'
            }
        ]
    },
    {
        id: 'video-editing',
        title: 'Video Editing & Production',
        slug: 'video-editing',
        category: 'Design',
        shortDescription: 'Cinematic Storytelling',
        fullDescription: 'We turn raw footage into compelling narratives. From high-paced social reels to cinematic brand documentaries, our post-production team brings your vision to life.',
        icon: 'movie_creation',
        image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&q=80&w=2070',
        features: ['Post-Production Editing', 'Motion Graphics & VFX', 'Color Grading', 'Sound Design & Mixing'],
        heroHeadline: 'Visuals That Stop The Scroll',
        heroSubheadline: "Attention is the new currency. In a world of 3-second attention spans, we craft visual hooks that grab your audience and refuse to let go. High-end post-production for brands that demand to be seen.",
        heroCtaText: 'Start Your Project',
        heroVariant: 'cinematic',
        heroVideo: 'https://cdn.pixabay.com/video/2019/04/20/22908-331622395_large.mp4',
        heroImages: [
            '/assets/images/marketing-diag.jpg',
            'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2000'
        ],
        video: {
            thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070' // Dark studio
        },
        stats: [
            { label: 'Hours Edited', value: '5000+' },
            { label: 'Reels Created', value: '1.2k' },
            { label: 'Avg. Retention', value: '85%' }
        ],
        contentBlocks: [
            {
                type: 'stats_row',
                statsList: [
                    { value: '5k+', label: 'Hours Rendered', colorTheme: 'orange' },
                    { value: '1.2k', label: 'Social Reels', colorTheme: 'orange' },
                    { value: '85%', label: 'Avg Retention', colorTheme: 'orange' },
                    { value: '4k/6k', label: 'Master Quality', colorTheme: 'orange' }
                ]
            },
            {
                type: 'tech_ecosystem_map',
                title: 'High-Bitrate Production Stack',
                subtitle: 'Cinema-grade post-production for brands that don\'t compromise on quality.',
                techEcosystem: [
                    {
                        category: 'The Cutting Room',
                        techs: [
                            { name: 'Premiere Pro', icon: 'fas fa-file-video', importance: 10 },
                            { name: 'Avid Media Composer', icon: 'fas fa-film', importance: 8 },
                            { name: 'DaVinci Resolve', icon: 'fas fa-palette', importance: 10 }
                        ]
                    },
                    {
                        category: 'Motion & FX',
                        techs: [
                            { name: 'After Effects', icon: 'fas fa-magic', importance: 10 },
                            { name: 'Cinema 4D (Motion)', icon: 'fas fa-cube', importance: 9 },
                            { name: 'Unreal Engine 5', icon: 'fas fa-gamepad', importance: 8 }
                        ]
                    },
                    {
                        category: 'Sonic Mastery',
                        techs: [
                            { name: 'Ableton Live', icon: 'fas fa-music', importance: 9 },
                            { name: 'Pro Tools', icon: 'fas fa-microphone', importance: 10 },
                            { name: 'Waves Plugins', icon: 'fas fa-wave-square', importance: 8 }
                        ]
                    }
                ]
            },
            {
                type: 'media_collage',
                title: 'The Cut Portfolio',
                mediaCollage: {
                    items: [
                        { type: 'image', src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000', span: 'row' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000', span: 'col' },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000' }
                    ]
                }
            },
            {
                type: 'feature_split',
                title: 'Attention is the Only Currency',
                content: 'In a world of infinitive scroll, your first 3 seconds are everything. <br/><br/>Our <strong>Visual Hook</strong> framework ensures that your audience doesn\'t just see your video, they feel it. We combine high-speed editing techniques with professional color grading and immersive sound design to create sensory experiences that convert viewers into fans.',
                image: '/assets/images/design-stationery.jpg',
                align: 'right'
            },
            {
                type: 'service_tiers',
                title: 'Production Tiers',
                subtitle: 'Pick your budget, pick your impact.',
                serviceTiers: [
                    {
                        name: 'Social Reel Pack',
                        price: '$1,500',
                        description: 'High-pace, viral-ready content for IG/TikTok.',
                        features: ['5 Edited Reels', 'Trending Audio Sync', 'Captions & Hooks', 'Fast 48hr Delivery']
                    },
                    {
                        name: 'Brand Story (Main)',
                        price: '$4,500',
                        description: 'The "Hero" video for your website and sales page.',
                        features: ['2-3 Minute Narrative', 'Professional Color Grade', 'Licensed Soundscape', 'Stock/Raw Hybrid', '4K Delivery'],
                        isPopular: true
                    },
                    {
                        name: 'Elite Commercial',
                        price: 'Custom',
                        description: 'Cinema-grade production for major ad campaigns.',
                        features: ['VFX & Motion Design', 'Custom Sound Mix', 'Director of Photography', 'Multi-length Cuts', 'Broadcast Standard']
                    }
                ]
            },
            {
                type: 'cta_curved',
                title: 'Stop Posting Boring Video.',
                subtitle: 'Let\'s create something that people actually want to watch.',
                ctaText: 'View Showreel'
            }
        ]
    },
    {
        id: 'ecommerce-development',
        title: 'E-commerce Development',
        slug: 'ecommerce-development',
        category: 'Development',
        shortDescription: 'Scalable Online Stores',
        fullDescription: 'Transform your retail business with robust e-commerce solutions. We build secure, scalable, and sales-driven storefronts.',
        icon: 'shopping_cart',
        image: '/assets/images/book-mockup-v2.jpg',
        features: ['Custom Shopify/WooCommerce', 'Headless Commerce', 'Payment Gateway Integration', 'Inventory Sync'],
        heroHeadline: 'Stores That Sell While You Sleep',
        heroSubheadline: "Your online store is more than a catalog; it's a 24/7 sales machine. We build friction-free, high-speed shopping experiences designed to maximize Average Order Value (AOV) and Customer Lifetime Value (CLV).",
        heroCtaText: 'Build Your Empire',
        heroVariant: 'minimal',
        heroImages: [
            '/assets/images/marketing-diag.jpg',
            'https://images.unsplash.com/photo-1556740758-90de2742dd78?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1512428559087-560fa0cec845?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070'
        ],
        stats: [
            { label: 'Avg. Revenue Increase', value: '145%' },
            { label: 'Transactions Processed', value: '$50M+' },
            { label: 'Uptime Guarantee', value: '99.99%' }
        ],
        contentBlocks: [
            {
                type: 'stats_row',
                statsList: [
                    { value: '145%', label: 'Avg Revenue Lift', colorTheme: 'green' },
                    { value: '$50M+', label: 'Volume Processed', colorTheme: 'green' },
                    { value: '99.99%', label: 'Uptime Tier', colorTheme: 'green' },
                    { value: '<1s', label: 'Checkout Path', colorTheme: 'green' }
                ]
            },
            {
                type: 'tech_ecosystem_map',
                title: 'High-Volume Commerce Stack',
                subtitle: 'We build commerce engines, not just stores. Optimized for conversion, security, and global scale.',
                techEcosystem: [
                    {
                        category: 'Commerce Core',
                        techs: [
                            { name: 'Shopify Plus', icon: 'fas fa-shopping-bag', importance: 10 },
                            { name: 'BigCommerce', icon: 'fas fa-store', importance: 8 },
                            { name: 'Adobe Commerce', icon: 'fas fa-cart-arrow-down', importance: 9 }
                        ]
                    },
                    {
                        category: 'Headless / Frontend',
                        techs: [
                            { name: 'Next.js (Commerce)', icon: 'fas fa-bolt', importance: 10 },
                            { name: 'Vercel Edge', icon: 'fas fa-cloud', importance: 9 },
                            { name: 'Sanity CMS', icon: 'fas fa-database', importance: 8 }
                        ]
                    },
                    {
                        category: 'Growth Ops',
                        techs: [
                            { name: 'Klaviyo', icon: 'fas fa-envelope-open-text', importance: 10 },
                            { name: 'Stripe Payments', icon: 'fas fa-credit-card', importance: 10 },
                            { name: 'Gorgias Support', icon: 'fas fa-headset', importance: 8 }
                        ]
                    }
                ]
            },
            {
                type: 'feature_split',
                title: 'The Psychology of the Buy Button',
                content: 'Cart abandonment isn\'t a technical error; it\'s a psychological one. <br/><br/>We design commerce experiences around <strong>Frictionless Conversion</strong>. From one-click Apple Pay integration to AI-driven upsell recommendations, we ensure that every pixel on your site is working toward increasing your Average Order Value (AOV). We don\'t just build themes; we engineer revenue pipelines.',
                image: '/assets/images/marketing-diag.jpg',
                align: 'right'
            },
            {
                type: 'comparison_table',
                title: 'Commerce Architecture Comparison',
                comparisonTable: {
                    headers: ['Headless (The Future)', 'Monolithic (The Past)'],
                    rows: [
                        { label: 'Site Speed', values: ['Sub-second Loads', '3-5 Second Bloat'] },
                        { label: 'Creative Freedom', values: ['Infinite Possibilities', 'Locked to Themes'] },
                        { label: 'Omnichannel', values: ['Sell Anywhere (API)', 'Web Browser Only'] },
                        { label: 'Conversion Lift', values: ['Typically +20-40%', 'Industry Standard'] },
                        { label: 'Security', values: ['Naturally Decoupled', 'Highly Vulnerable'] }
                    ]
                }
            },
            {
                type: 'service_tiers',
                title: 'Commerce Launch Paths',
                subtitle: 'Pick the scale that matches your ambition.',
                serviceTiers: [
                    {
                        name: 'Growth Storefront',
                        price: '$6,000',
                        description: 'Custom Shopify/WooCommerce build for emerging brands.',
                        features: ['Custom Visual Theme', 'Core App Integration', 'SEO Setup', 'Training Workshop']
                    },
                    {
                        name: 'Enterprise Headless',
                        price: '$15,000+',
                        description: 'The ultimate performance engine for high-volume retailers.',
                        features: ['Next.js React Frontend', 'Unlimited Creativity', 'Instant Page Loads', 'Advanced Tech Support', 'Global Multi-currency'],
                        isPopular: true
                    },
                    {
                        name: 'D2C Scale Retainer',
                        price: '$3,500/mo',
                        description: 'Ongoing optimization and growth engineering.',
                        features: ['A/B Testing Labs', 'CRO Audits', 'New Feature Development', 'Speed Maintenance']
                    }
                ]
            },
            {
                type: 'cta_curved',
                title: 'Ready to scale your sales?',
                subtitle: 'Let\'s build the last commerce platform you\'ll ever need.',
                ctaText: 'Start Building'
            }
        ]
    },
    {
        id: 'app-development',
        title: 'App Development',
        slug: 'app-development',
        category: 'Development',
        shortDescription: 'Native & Hybrid Solutions',
        fullDescription: 'Engage your audience on the go. We develop cutting-edge mobile applications for iOS and Android, focusing on intuitive interfaces and seamless performance.',
        icon: 'smartphone',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974',
        features: ['iOS & Android Development', 'Cross-Platform Frameworks', 'API Integration', 'App Store Optimization'],
        heroHeadline: 'Apps That Users Actually Love',
        heroSubheadline: 'In a crowded app store, user experience is everything. We build fluid, intuitive, and crash-free mobile applications that become a daily habit for your users.',
        heroCtaText: 'Start Your App',
        heroImages: [
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974'
        ],
        stats: [
            { label: 'Downloads Generated', value: '10M+' },
            { label: '5-Star Ratings', value: '500k' },
            { label: 'Countries Reached', value: '120' }
        ],
        contentBlocks: [
            {
                type: 'stats_row',
                statsList: [
                    { value: '10M+', label: 'Total Downloads', colorTheme: 'blue' },
                    { value: '500k', label: '5-Star Ratings', colorTheme: 'blue' },
                    { value: '120', label: 'Countries Reached', colorTheme: 'blue' },
                    { value: '99.9%', label: 'Crash-Free Tier', colorTheme: 'blue' }
                ]
            },
            {
                type: 'tech_ecosystem_map',
                title: 'Next-Gen Mobile Stack',
                subtitle: 'We build fluid, high-performance mobile experiences using the industry\'s most robust frameworks.',
                techEcosystem: [
                    {
                        category: 'Native Power',
                        techs: [
                            { name: 'Swift (iOS)', icon: 'fab fa-apple', importance: 10 },
                            { name: 'Kotlin (Android)', icon: 'fab fa-android', importance: 10 },
                            { name: 'C++ (Niche Core)', icon: 'fas fa-microchip', importance: 7 }
                        ]
                    },
                    {
                        category: 'Cross-Platform',
                        techs: [
                            { name: 'Flutter', icon: 'fas fa-wind', importance: 10 },
                            { name: 'React Native', icon: 'fab fa-react', importance: 9 },
                            { name: 'Unity (AR/VR)', icon: 'fab fa-unity', importance: 8 }
                        ]
                    },
                    {
                        category: 'Cloud & Sync',
                        techs: [
                            { name: 'Firebase', icon: 'fas fa-fire', importance: 10 },
                            { name: 'AWS Amplify', icon: 'fab fa-aws', importance: 9 },
                            { name: 'GraphQL (Apollo)', icon: 'fas fa-project-diagram', importance: 9 }
                        ]
                    }
                ]
            },
            {
                type: 'feature_split',
                title: 'The "Daily Habit" Experience',
                content: 'In a crowded app store, user retention is the only metric that matters. <br/><br/>We build apps that users actually want to keep. By focusing on <strong>Micro-interactions, Haptic Feedback, and Predictive Loading</strong>, we create a sense of fluidity that makes your app feel like a natural extension of the hardware. We don\'t just ship code; we ship habits.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070',
                align: 'left'
            },
            {
                type: 'case_study_highlight',
                caseStudy: {
                    client: 'Volt Fitness',
                    challenge: 'High churn rate due to slow workout logging and social lag.',
                    solution: 'Re-architected using Flutter for 60fps performance and implemented Offline-First data sync.',
                    result: '300% increase in Daily Active Users (DAU) and Featured in the App Store.',
                    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1000',
                    metrics: [
                        { label: 'Retention Lift', value: '+85%' },
                        { label: 'Avg Rating', value: '4.9' }
                    ]
                }
            },
            {
                type: 'service_tiers',
                title: 'App Development Paths',
                subtitle: 'From zero-to-one and beyond.',
                serviceTiers: [
                    {
                        name: 'The MVP Launchpad',
                        price: '$8,000',
                        description: 'A lean, high-quality build to validate your core idea.',
                        features: ['Core Logic Implementation', 'Selected Native Features', 'UI Design System', 'App Store Launch Support']
                    },
                    {
                        name: 'Full Product Studio',
                        price: '$20,000+',
                        description: 'Complete mobile ecosystem for market dominance.',
                        features: ['iOS + Android (Hybrid)', 'Custom API Backend', 'Advanced Analytics Suite', 'Feature-Rich Roadmap', '6 Months Maintenance'],
                        isPopular: true
                    },
                    {
                        name: 'Growth Partnership',
                        price: '$4,000/mo',
                        description: 'Dedicated team for iteration and feature scaling.',
                        features: ['Unlimited Feature Tweak', 'OS Compatibility Updates', 'Server Management', 'User Feedback Loops']
                    }
                ]
            },
            {
                type: 'cta_curved',
                title: 'Got a disruptive app idea?',
                subtitle: 'Let\'s turn that concept into the next big download.',
                ctaText: 'Start Your Prototype'
            }
        ]
    },
    {
        id: 'software-development',
        title: 'Software Development',
        slug: 'software-development',
        category: 'Development',
        shortDescription: 'Custom Enterprise Solutions',
        fullDescription: 'Tailored software to streamline your business operations. We engineer scalable, secure, and efficient software systems.',
        icon: 'developer_mode',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
        features: ['SaaS Product Development', 'Legacy System Modernization', 'Cloud-Native Architectures', 'Database Design'],
        heroHeadline: 'Mission-Critical Software Engineering',
        heroSubheadline: "We build the invisible engines that power enterprises. From high-frequency trading platforms to supply chain automation, our software is architected for zero failure.",
        heroCtaText: 'Architect Your Solution',
        heroImages: [
            'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2069'
        ],
        stats: [
            { label: 'Lines of Code', value: '50M+' },
            { label: 'APIs Integrated', value: '500+' },
            { label: 'Data Processed', value: '1PB+' }
        ],
        contentBlocks: [
            {
                type: 'stats_row',
                statsList: [
                    { value: '50M+', label: 'Lines of Code', colorTheme: 'blue' },
                    { value: '500+', label: 'APIs Integrated', colorTheme: 'blue' },
                    { value: '99.99%', label: 'System Uptime', colorTheme: 'blue' },
                    { value: '1PB+', label: 'Data Processed', colorTheme: 'blue' }
                ]
            },
            {
                type: 'tech_ecosystem_map',
                title: 'Enterprise Architecture Stack',
                subtitle: 'We engineer resilient, distributed systems using industry-standard enterprise technologies.',
                techEcosystem: [
                    {
                        category: 'Backend Core',
                        techs: [
                            { name: 'Python (Django/FastAPI)', icon: 'fab fa-python', importance: 10 },
                            { name: 'Java (Spring Boot)', icon: 'fab fa-java', importance: 9 },
                            { name: 'Go (Microservices)', icon: 'fas fa-ghost', importance: 8 }
                        ]
                    },
                    {
                        category: 'Cloud & DevOps',
                        techs: [
                            { name: 'AWS / Azure / GCP', icon: 'fas fa-cloud', importance: 10 },
                            { name: 'Docker & Kubernetes', icon: 'fas fa-ship', importance: 10 },
                            { name: 'Terraform (IaC)', icon: 'fas fa-map', importance: 9 }
                        ]
                    },
                    {
                        category: 'Data & Messaging',
                        techs: [
                            { name: 'PostgreSQL / MongoDB', icon: 'fas fa-database', importance: 9 },
                            { name: 'Redis (Caching)', icon: 'fas fa-bolt', importance: 8 },
                            { name: 'Apache Kafka', icon: 'fas fa-broadcast-tower', importance: 9 }
                        ]
                    }
                ]
            },
            {
                type: 'feature_split',
                title: 'Strangling the Monolith',
                content: 'Stop paying the "Technical Debt Tax". <br/><br/> We systematically decouple legacy systems into agile, cloud-native microservices without disrupting your business flow. Our <strong>Strangler Fig</strong> approach allows you to modernize individual components, deploy faster, and reduce operational overhead while moving to a future-proof architecture.',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
                align: 'right'
            },
            {
                type: 'comparison_table',
                title: 'Architecture Evolution',
                comparisonTable: {
                    headers: ['Modern Microservices', 'Legacy Monolith'],
                    rows: [
                        { label: 'Scalability', values: ['Horizontal (Elastic)', 'Vertical (Limited)'] },
                        { label: 'Deployment', values: ['Minute-by-Minute', 'Quarterly Big Bangs'] },
                        { label: 'Resilience', values: ['Self-Healing Clusters', 'Single Point of Failure'] },
                        { label: 'Tech Agility', values: ['Polyglot (Best Tool)', 'Vendor/Language Locked'] },
                        { label: 'Team Velocity', values: ['Independent Squads', 'Bottlenecked Release'] }
                    ]
                }
            },
            {
                type: 'external_project_showcase',
                title: 'Global Enterprise Deployments',
                subtitle: 'Software that powers industries.',
                externalProjects: [
                    {
                        title: 'FinTech Core Hub',
                        details: 'High-frequency trading engine processing 10k transactions/sec with microsecond latency.',
                        image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000',
                        url: '#',
                        tags: ['FinTech', 'Low Latency', 'Kubernetes']
                    },
                    {
                        title: 'HealthGraph Blockchain',
                        details: 'Secure patient data exchange built on private blockchain for HIPAA compliance.',
                        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
                        url: '#',
                        tags: ['Healthcare', 'Security', 'Web3']
                    }
                ]
            },
            {
                type: 'service_tiers',
                title: 'Engagement Modules',
                subtitle: 'Flexible models for enterprise engineering.',
                serviceTiers: [
                    {
                        name: 'Targeted Blueprint',
                        price: '$10,000',
                        description: 'A forensic audit and high-level architectural roadmap.',
                        features: ['Infrastructure Audit', 'Tech Debt Mapping', 'Security Vulnerability Scan', '3-Year Growth Plan']
                    },
                    {
                        name: 'Agile Delivery Squad',
                        price: '$25,000/mo',
                        description: 'Full-stack engineering pod dedicated to your roadmap.',
                        features: ['3 Senior Developers', '1 DevOps Architect', 'Unlimited Cloud Mgmt', 'Daily Deployments', '24/7 SRE Support'],
                        isPopular: true
                    },
                    {
                        name: 'Global Transformation',
                        price: 'Retainer',
                        description: 'Multi-year partnership for full-scale modernization.',
                        features: ['Fractional CTO Advisory', 'Custom Platform Engineering', 'Legacy Migration Squads', 'Compliance Governance']
                    }
                ]
            },
            {
                type: 'cta_curved',
                title: 'Complex system failing to scale?',
                subtitle: 'We love complex problems. Let\'s solve yours together.',
                ctaText: 'Consult an Architect'
            }
        ]
    },
    {
        id: 'content-copywriting',
        title: 'Content & Copywriting',
        slug: 'content-copywriting',
        category: 'Strategy',
        shortDescription: 'Compelling Narratives',
        fullDescription: 'Words that sell. Our expert copywriters create persuasive content that resonates with your audience and drives action.',
        icon: 'article',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=2073',
        features: ['Brand Storytelling', 'SEO Copywriting', 'Technical Writing', 'Blog & Article Creation'],
        heroHeadline: 'Your Trusted Partner for Website Copywriting and SEO',
        heroSubheadline: 'We are a team of experienced copywriters and SEO specialists who are passionate about helping businesses achieve their online goals.',
        heroCtaText: 'Get started',
        heroImages: [
            'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015'
        ],
        stats: [
            { label: 'Words Written', value: '1M+' },
            { label: 'Articles Published', value: '500+' },
            { label: 'Organic Traffic', value: '+200%' }
        ],
        contentBlocks: [
            {
                type: 'feature_split',
                title: 'The Art of Persuasion',
                content: 'Copy is not just words on a page. It is a psychological lever. <br/><br/>We combine <strong>behavioral psychology</strong> with creative flair to craft messages that stick. Whether it is a punchy headline that stops the scroll or a white paper that establishes authority, every sentence is engineered to move the reader one step closer to a "Yes".',
                image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=2073',
                align: 'right'
            },
            {
                type: 'process_timeline',
                title: 'Our Content Strategy',
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070',
                timeline: [
                    { step: '01', title: 'Brand Voice Audit', description: 'We analyze your existing content and define a tone of voice that is uniquely yours.' },
                    { step: '02', title: 'Audience Persona', description: 'Understanding exactly who we are talking to, their pain points, and their desires.' },
                    { step: '03', title: 'Keyword Integration', description: 'Seamlessly weaving high-value SEO keywords into engaging narratives without sounding robotic.' },
                    { step: '04', title: 'Drafting & Refining', description: 'Writing, editing, and polishing until every word earns its place on the page.' }
                ]
            },
            {
                type: 'grid_cards',
                title: 'Types of Copy We Write',
                subtitle: 'From micro-copy to macro-narratives.',
                cards: [
                    { title: 'Landing Pages', description: 'High-conversion sales letters designed to sell.', icon: 'web', colorTheme: 'blue' },
                    { title: 'Email Sequences', description: 'Nurture flows that build trust and drive repeat business.', icon: 'mail', colorTheme: 'purple' },
                    { title: 'Blog Posts', description: 'SEO-optimized articles that answer user intent and build authority.', icon: 'article', colorTheme: 'green' },
                    { title: 'UX Writing', description: 'Clear, concise interface text that guides users through your app.', icon: 'touch_app', colorTheme: 'orange' },
                    { title: 'Video Scripts', description: 'Engaging narratives for explainers, ads, and brand stories.', icon: 'videocam', colorTheme: 'white' },
                    { title: 'Case Studies', description: 'Proof-based storytelling that validates your expertise.', icon: 'verified', colorTheme: 'white' }
                ]
            },
            {
                type: 'infographic_row',
                title: 'The Voice Architecture',
                infographics: [
                    { label: 'Clarity', text: 'We strip away jargon. If a 10-year-old can\'t understand it, we rewrite it.', type: 'pill', colorTheme: 'blue' },
                    { label: 'Empathy', text: 'We speak to the heart. We address the emotional needs behind the logical purchase.', type: 'pill', colorTheme: 'purple' },
                    { label: 'Authority', text: 'We back claims with data, creating trust through demonstrated expertise.', type: 'pill', colorTheme: 'green' }
                ]
            },
            {
                type: 'cta_curved',
                title: 'Need words that work?',
                subtitle: 'Stop boring your customers. Start inspiring them.',
                ctaText: 'Get a Copy Audit'
            }
        ]
    },
    {
        id: 'pricing',
        title: 'Pricing & Packages',
        slug: 'pricing',
        category: 'Strategy',
        shortDescription: 'Transparent & Flexible',
        fullDescription: 'Flexible pricing models tailored to your needs. Whether you need a monthly retainer or a project-based quote.',
        icon: 'payments',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070',
        features: ['Custom Project Quotes', 'Retainer Models', 'Hourly Consultation', 'Enterprise Packages'],
        heroHeadline: 'Invest in Growth',
        heroSubheadline: 'We believe in transparent, value-based pricing. No hidden fees, no surprise invoices. Just clear deliverables and measurable ROI.',
        heroCtaText: 'Request a Quote',
        heroImages: [
            'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000'
        ],
        contentBlocks: [
            {
                type: 'feature_split',
                title: 'Value-Based Pricing',
                content: 'We don\'t just sell hours; we sell outcomes. <br/><br/>Our pricing is structured to align our incentives with yours. Whether you prefer the predictability of a <strong>Monthly Retainer</strong> for ongoing support or a <strong>Fixed-Price Project</strong> for a specific build, we have a model that fits your cash flow.',
                image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=2070',
                align: 'right'
            },
            {
                type: 'grid_cards',
                title: 'Engagement Models',
                subtitle: 'Choose how you want to work with us.',
                cards: [
                    { title: 'Project Based', description: 'Best for: New websites, app builds, or specific campaigns. Fixed scope, fixed budget.', icon: 'assignment', colorTheme: 'blue' },
                    { title: 'Monthly Retainer', description: 'Best for: Ongoing SEO, maintenance, and continuous improvement. Dedicated hours per month.', icon: 'calendar_today', colorTheme: 'purple' },
                    { title: 'Staff Augmentation', description: 'Best for: Scaling your internal team. Hire our developers or designers to work under your management.', icon: 'groups', colorTheme: 'orange' },
                    { title: 'Consulting', description: 'Best for: Strategy audits, architecture reviews, and technical advisory.', icon: 'support_agent', colorTheme: 'green' }
                ]
            },
            {
                type: 'feature_grid_highlight',
                title: 'What\'s Included',
                subtitle: 'Every engagement comes with the Thynkit Standard.',
                highlightCard: {
                    title: 'Dedicated Project Manager',
                    description: 'You will never be left in the dark. Your single point of contact ensures clear communication, timely updates, and proactive problem solving.',
                    ctaText: 'Meet the Team',
                    colorTheme: 'blue'
                },
                cards: [
                    { title: 'QA Testing', description: 'Rigorous bug squashing before anything goes live.', icon: 'bug_report' },
                    { title: 'Source Code', description: 'You own what we build. Full IP transfer upon completion.', icon: 'code' },
                    { title: 'Analytics Setup', description: 'We ensure you can track your success from day one.', icon: 'analytics' },
                    { title: '30-Day Warranty', description: 'We fix any post-launch bugs free of charge.', icon: 'verified_user' }
                ]
            },
            {
                type: 'simple_text',
                title: 'Get a Custom Estimate',
                content: 'Every project is unique. Contact us today for a free consultation and a detailed proposal tailored to your specific requirements.'
            },
            {
                type: 'cta_curved',
                title: 'Ready to talk numbers?',
                subtitle: 'Let\'s find a solution that fits your budget.',
                ctaText: 'Contact Sales'
            }
        ]
    }
];

export const ABOUT_CONTENT: PageContent = {
    title: 'About Thynkit IT',
    subtitle: 'Architects of the Digital Future',
    content: (
        <>
            <p className="mb-6 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                Founded in 2010, <strong className="text-primary">Thynkit IT</strong> emerged from a simple yet radical idea: Technology should be an asset, not a hurdle. We started as a small collective of elite network engineers and software architects tired of the status quo.
            </p>
            <p className="mb-6 leading-relaxed">
                Today, we are a global agency spanning three continents, delivering mission-critical digital infrastructure to Fortune 500 companies and agile startups alike. We don't just write code; we engineer outcomes. We believe in the power of robust systems, clean data, and human-centric design.
            </p>
        </>
    ),
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
    contentBlocks: [
        {
            type: 'stats_row',
            statsList: [
                { value: '14+', label: 'Years of Excellence', colorTheme: 'white' },
                { value: '750+', label: 'Projects Delivered', colorTheme: 'white' },
                { value: '120+', label: 'Global Experts', colorTheme: 'white' },
                { value: '98%', label: 'Client Retention', colorTheme: 'white' }
            ]
        },
        {
            type: 'feature_split',
            title: 'Our Mission & Vision',
            content: 'In a digital-first world, your infrastructure is your heartbeat. <br/><br/>At Thynkit IT, we believe in <strong>empowering people</strong> through robust technology. Our mission is to strip away the complexity of enterprise IT, leaving you with systems that are secure, scalable, and surprisingly simple to manage.<br/><br/><strong style="color: #F05A28">Why we are different:</strong><br/><ul class="space-y-3 mt-4 text-sm"><li class="flex items-center gap-3"><i class="fas fa-check-circle text-[#F05A28]"></i> <span><strong>Engineering First:</strong> We prioritize code quality and system architecture over flashy, short-term trends.</span></li><li class="flex items-center gap-3"><i class="fas fa-check-circle text-[#F05A28]"></i> <span><strong>Radical Transparency:</strong> You get access to our Jira boards, Slack channels, and raw data. No black boxes.</span></li><li class="flex items-center gap-3"><i class="fas fa-check-circle text-[#F05A28]"></i> <span><strong>24/7 Global Ops:</strong> With teams in NYC, London, and Dhaka, we work while you sleep.</span></li></ul>',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070',
            align: 'right'
        },
        {
            type: 'process_timeline',
            title: 'Our Journey',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
            timeline: [
                { step: '2010', title: 'The Inception', description: 'Founded in a small garage in Dhaka by three engineers with a vision to revolutionize IT outsourcing.' },
                { step: '2015', title: 'Global Expansion', description: 'Opened our first overseas liaison office in London, serving UK-based fintech clients.' },
                { step: '2019', title: 'Enterprise Shift', description: 'Pivoted from small projects to large-scale enterprise architecture, landing our first Fortune 500 contract.' },
                { step: '2024', title: 'AI Integration', description: 'Launched our internal AI R&D lab to integrate generative intelligence into all client deployments.' }
            ]
        },
        {
            type: 'infographic_row',
            title: 'Our Core Values',
            infographics: [
                {
                    label: 'Velocity',
                    text: 'Speed matters. We deploy faster than the competition without breaking things, utilizing industry-leading CI/CD and automated testing.',
                    type: 'pill',
                    colorTheme: 'orange'
                },
                {
                    label: 'Integrity',
                    text: 'We speak code, but we lead with truth. If a project isn\'t right for us or you, we\'ll tell you upfront. No surprises.',
                    type: 'pill',
                    colorTheme: 'blue'
                },
                {
                    label: 'Resilience',
                    text: 'We build systems that bend but never break. High availability and disaster recovery are baked in from day one.',
                    type: 'pill',
                    colorTheme: 'green'
                }
            ]
        },
        {
            type: 'team_grid',
            title: 'Meet the Leadership',
            subtitle: 'The minds behind the high-performance machinery.',
            team: [
                { name: 'Abdullah Al Robin', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' },
                { name: 'Sarah Jenkins', role: 'CTO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' },
                { name: 'David Chen', role: 'Head of Infrastructure', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600' },
                { name: 'Elena Rodriguez', role: 'VP of Engineering', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600' }
            ]
        },
        {
            type: 'grid_cards',
            title: 'Our Global Presence',
            subtitle: 'Wherever your business is, we are local.',
            cards: [
                { title: 'Dhaka, BD', description: 'Global Engineering Hub & Delivery Center', icon: 'apartment', colorTheme: 'blue' },
                { title: 'London, UK', description: 'Sales, Strategy & European Relations', icon: 'location_city', colorTheme: 'purple' },
                { title: 'New York, USA', description: 'Client Relations & Innovation Center', icon: 'business', colorTheme: 'orange' }
            ]
        },
        {
            type: 'testimonial_single',
            testimonialSingle: {
                quote: "Thynkit didn't just upgrade our servers; they upgraded our entire business mindset. The velocity and reliability we have now is world-class.",
                author: "Marcus Thorne",
                role: "CTO, FinTech Global",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
            }
        },
        {
            type: 'cta_curved',
            title: 'Join the Digital Revolution',
            subtitle: 'Let\'s build the infrastructure that defines your future.',
            ctaText: 'Contact Our Team'
        }
    ]
};

export const STRATEGY_CONTENT: PageContent = {
    title: 'Our Strategy',
    subtitle: 'The Science of Scalability',
    content: 'Legacy Content',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2070'
};

export const STRATEGY_DETAILED = {
    hero: {
        title: "Engineering Business Velocity",
        subtitle: "A proven methodology to decouple legacy systems and accelerate digital transformation. We don't just write code; we architect your future.",
        cta: "See the Blueprint"
    },
    philosophy: {
        title: "Code is Liability. Architecture is Asset.",
        content: "Most agencies sell you lines of code. We sell you a system that writes its own future. Our strategy isn't about fixing bugs; it's about eliminating the environment where bugs survive.",
        stat: "99.99%",
        statLabel: "Uptime Guaranteed"
    },
    steps: [
        { id: "01", title: "Discovery & Diagnostics", description: "We don't guess. We deploy deep-scan probes into your infrastructure to map every dependency, bottleneck, and security vulnerability.", icon: "radar", color: "blue" },
        { id: "02", title: "The Blueprint", description: "We architect a decoupled, microservices-ready state. This isn't a sketch; it's a mathematically proven engineering document.", icon: "architecture", color: "purple" },
        { id: "03", title: "Agile Construction", description: "Sprint-based execution using CI/CD pipelines. We build the foundation first, ensuring scalability is baked in, not bolted on.", icon: "construction", color: "orange" },
        { id: "04", title: "Automated Governance", description: "We hand over the keys to a self-healing system. Automated testing, auto-scaling, and proactive security protocols.", icon: "security_update_good", color: "green" }
    ],
    pillars: [
        { title: "Zero Trust Security", icon: "shield_lock", desc: "Never trust, always verify. Identity-aware proxies at every layer." },
        { title: "Cloud Native", icon: "cloud_circle", desc: "Leveraging serverless and containerization for infinite scale." },
        { title: "Data Driven", icon: "analytics", desc: "Every decision backed by real-time telemetry and logs." }
    ]
};

export const CONTACT_CONTENT: PageContent = {
    title: 'Contact Us',
    subtitle: 'Let\'s Start the Conversation',
    content: (
        <>
            <p className="mb-8">Ready to transform your infrastructure? Our team of experts is standing by to help you navigate your next big leap.</p>
        </>
    ),
    image: 'https://images.unsplash.com/photo-1423666639041-f1408816f3ba?auto=format&fit=crop&q=80&w=2074'
};

export const WHY_THYNKIT_DATA = {
    theory: { title: 'The Theory', subtitle: 'Our Core Formula', formula: { part1: 'P', part2: 'S', part3: 'I' } },
    process: { title: 'The Process', subtitle: 'Step by Step', steps: [{ id: 1, label: 'Audit' }, { id: 2, label: 'Plan' }, { id: 3, label: 'Build' }, { id: 4, label: 'Scale' }] },
    chemistry: { title: 'The Chemistry', subtitle: 'Elemental Mix', elements: ['Ag', 'Si', 'Fe', 'Au', 'Ne', 'Pt'] },
    science: {
        title: 'The Science',
        subtitle: 'Anatomy of Success',
        items: [
            { icon: 'touch_app', label: 'Tangible', tooltip: 'Physical and virtual assets that translate to real-world operational capacity.' },
            { icon: 'trending_up', label: 'Scalable', tooltip: 'Elastic infrastructure that grows automatically with your user demand.' },
            { icon: 'lock', label: 'Secure', tooltip: 'Zero-trust architecture embedded at the kernel level of your network.' },
            { icon: 'bolt', label: 'Fast', tooltip: 'Low-latency data transmission optimized for high-frequency transactions.' },
            { icon: 'settings', label: 'Efficient', tooltip: 'Resource allocation algorithms that minimize waste and reduce overhead.' },
            { icon: 'devices', label: 'Modern', tooltip: 'Containerized, microservices-based stacks ready for future integration.' }
        ]
    },
    intro: {
        title: 'Why Choose Thynk IT?',
        content: 'We are not just a service provider; we are your strategic partner in the digital age. Our approach combines deep technical expertise with a clear understanding of business dynamics. We don\'t just deliver code; we deliver competitive advantage.'
    },
    regionsTitle: 'The 5 Regions of Excellence',
    regions: [
        { type: 'image_text', title: 'Global Infrastructure', description: 'We operate on a global scale, ensuring your applications are close to your users, no matter where they are. Our distributed network minimizes latency and maximizes availability.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072' },
        { type: 'icons_4', title: 'Agile Development', description: 'Our development teams practice true Agile. We iterate quickly, gather feedback, and adapt, ensuring the final product perfectly aligns with your evolving needs.', icons: ['code', 'bug_report', 'merge', 'rocket_launch'] },
        { type: 'image_text_reverse', title: 'Security First', description: 'Security is not an afterthought; it is baked into every layer of our architecture. From zero-trust networks to automated compliance checks, we keep your data safe.', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070' },
        { type: 'icons_6', title: 'Data Intelligence', description: 'We turn raw data into actionable insights. Our analytics and AI solutions help you make informed decisions and predict market trends.', icons: ['analytics', 'insights', 'database', 'psychology', 'lightbulb', 'monitoring'] },
        { type: 'icons_7', title: 'Cloud Native', description: 'We are experts in cloud-native technologies. Kubernetes, Docker, Serverless - we leverage the full power of the cloud to build resilient and scalable applications.', icons: ['cloud', 'cloud_queue', 'cloud_circle', 'cloud_done', 'cloud_upload', 'cloud_download', 'cloud_sync'] }
    ],
    footer: {
        title: 'Ready to Thynk Bigger?',
        subtitle: 'Choose your path forward.',
        options: [
            { icon: 'call', title: 'Consultation', desc: 'Book a free 30-minute strategy call with our senior architects.', btn: 'Book Now' },
            { icon: 'description', title: 'Audit', desc: 'Get a comprehensive review of your current infrastructure.', btn: 'Request Audit' },
            { icon: 'group_add', title: 'Partnership', desc: 'Explore long-term partnership and dedicated team options.', btn: 'Partner Up' }
        ]
    }
};
