import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data';
import { ServiceCategory } from '../types';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';

const ServicesHub: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<ServiceCategory[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredServices, setFilteredServices] = useState(SERVICES);
    const [activeTab, setActiveTab] = useState<'overview' | 'directory'>('overview');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let result = SERVICES;

        // Category Filter (Multi-select)
        if (selectedCategories.length > 0) {
            result = result.filter(s => selectedCategories.includes(s.category));
        }

        // Keyword Search
        if (searchQuery.trim()) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter(s =>
                s.title.toLowerCase().includes(lowerQuery) ||
                s.shortDescription.toLowerCase().includes(lowerQuery) ||
                s.features.some(f => f.toLowerCase().includes(lowerQuery))
            );
        }

        setFilteredServices(result);
    }, [selectedCategories, searchQuery]);

    const toggleCategory = (cat: ServiceCategory) => {
        if (selectedCategories.includes(cat)) {
            setSelectedCategories(selectedCategories.filter(c => c !== cat));
        } else {
            setSelectedCategories([...selectedCategories, cat]);
        }
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setSearchQuery('');
    };

    const allCategories: ServiceCategory[] = ['Development', 'Marketing', 'Design', 'Strategy'];

    // Subsets for Premium Sections
    const devServices = SERVICES.filter(s => s.category === 'Development');
    const marketServices = SERVICES.filter(s => s.category === 'Marketing');
    const designServices = SERVICES.filter(s => s.category === 'Design');

    return (
        <>
            <SEO title="Service Ecosystem" description="Explore Thynkit's comprehensive suite of IT services, from software architecture to digital growth strategies." />
            <div className="bg-gray-50 dark:bg-black min-h-screen transition-colors duration-500 font-display">

                {/* 1. CINEMATIC HERO SECTION */}
                <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
                    {/* Background Video/Image */}
                    <div className="absolute inset-0 z-0">
                        <LazyImage
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                            alt="Technology Abstract"
                            className="w-full h-full"
                            imgClassName="object-cover opacity-60 scale-105 animate-pulse-slow"
                            placeholderColor="bg-black"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,90,40,0.15)_0%,transparent_70%)]"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md rounded-full px-6 py-2 mb-6 shadow-2xl reveal-up">
                            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                            <span className="text-[10px] font-mono text-white/70 uppercase tracking-[0.4em]">Enterprise Ecosystem v2.0</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.85] tracking-tighter uppercase mb-6 reveal-scale">
                            The Thynkit<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-purple-600">Ecosystem</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed reveal-up stagger-1">
                            A unified suite of high-performance digital services architected to scale your enterprise from infrastructure to interface.
                        </p>

                        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 reveal-up stagger-2">
                            <button onClick={() => { setActiveTab('directory'); document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' }) }} className="bg-primary hover:bg-primary-hover text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(240,90,40,0.3)] hover:shadow-[0_0_50px_rgba(240,90,40,0.5)] hover:-translate-y-1">
                                Explore Directory
                            </button>
                            <Link to="/strategy" className="group text-white/70 hover:text-white transition-all uppercase text-xs font-bold tracking-[0.2em] flex items-center gap-2">
                                <span className="border-b border-white/20 group-hover:border-white pb-1">Our Strategy</span>
                                <i className="fas fa-arrow-right text-[10px] text-primary"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                        <i className="fas fa-chevron-down text-white text-2xl"></i>
                    </div>
                </section>

                {/* 2. STATS & PHILOSOPHY STRIP */}
                <section className="py-20 bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
                            <div className="text-center pt-8 md:pt-0 reveal-up">
                                <i className="fas fa-layer-group text-4xl text-primary mb-4"></i>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">40+</h3>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Specialized Modules</p>
                            </div>
                            <div className="text-center pt-8 md:pt-0 reveal-up stagger-1">
                                <i className="fas fa-globe text-4xl text-blue-500 mb-4"></i>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Global</h3>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Infrastructure Ready</p>
                            </div>
                            <div className="text-center pt-8 md:pt-0 reveal-up stagger-2">
                                <i className="fas fa-users text-4xl text-purple-500 mb-4"></i>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Dedicated</h3>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Agile Squads</p>
                            </div>
                            <div className="text-center pt-8 md:pt-0 reveal-up stagger-3">
                                <i className="fas fa-award text-4xl text-yellow-500 mb-4"></i>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Top 1%</h3>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Industry Standards</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CATEGORY DEEP DIVE: DEVELOPMENT */}
                <section className="py-32 bg-gray-50 dark:bg-black relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
                            <div>
                                <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">Region 01</span>
                                <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 dark:text-white uppercase">Engineering Hub</h2>
                            </div>
                            <p className="text-gray-500 max-w-md text-right md:text-left mt-4 md:mt-0">
                                Robust architectures built on modern stacks. Scalable, secure, and built for speed.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {devServices.map((service, idx) => (
                                <Link to={`/services/${service.slug}`} key={idx} className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 reveal-scale" style={{ transitionDelay: `${idx * 100}ms` }}>
                                    <LazyImage
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full"
                                        imgClassName="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <span className="material-symbols-outlined">{service.icon}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{service.title}</h3>
                                        <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {service.shortDescription}
                                        </p>
                                        <span className="mt-4 text-blue-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 flex items-center gap-2">
                                            Explore <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                            {/* Abstract Card */}
                            <div className="bg-[#111] rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-gray-800 reveal-scale">
                                <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center mb-6 animate-spin-slow">
                                    <i className="fas fa-code text-3xl text-gray-500"></i>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
                                <p className="text-gray-500 text-sm mb-6">Need a specific stack? We work with Python, Go, Rust, and more.</p>
                                <Link to="/contact" className="text-white border-b border-white hover:text-primary hover:border-primary transition-colors pb-1 text-sm font-bold uppercase">Talk to an Architect</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. CATEGORY DEEP DIVE: MARKETING */}
                <section className="py-32 bg-white dark:bg-[#0B0F19] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-orange-500/5 to-transparent pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-16 reveal-up">
                            <div className="text-right">
                                <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">Region 02</span>
                                <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 dark:text-white uppercase">Growth Engine</h2>
                            </div>
                            <p className="text-gray-500 max-w-md mt-4 md:mt-0">
                                Data-driven strategies to amplify your brand. SEO, PPC, and Content that converts.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {marketServices.map((service, idx) => (
                                <Link to={`/services/${service.slug}`} key={idx} className="flex bg-gray-50 dark:bg-[#151a25] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:border-orange-500/50 transition-all group reveal-up stagger-1">
                                    <div className="w-1/3 relative overflow-hidden">
                                        <LazyImage src={service.image} alt={service.title} className="w-full h-full" imgClassName="object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-orange-500/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="w-2/3 p-8 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="material-symbols-outlined text-orange-500 text-2xl">{service.icon}</span>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">{service.fullDescription}</p>
                                        <div className="flex gap-2 mt-auto">
                                            {service.features.slice(0, 2).map((f, i) => (
                                                <span key={i} className="text-[10px] bg-white dark:bg-black border border-gray-200 dark:border-gray-700 px-2 py-1 rounded text-gray-500 uppercase tracking-wide">{f}</span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. TECH STACK MARQUEE */}
                <section className="py-20 bg-black border-y border-gray-800 overflow-hidden">
                    <div className="text-center mb-10 reveal-up">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">Powering Your Infrastructure</p>
                    </div>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap gap-16 items-center">
                            {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Figma', 'Adobe CC', 'Google Cloud', 'Azure', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Redis'].map((tech, i) => (
                                <span key={i} className="text-2xl md:text-4xl font-heading font-black text-gray-800 dark:text-gray-700 uppercase hover:text-white transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                            {/* Duplicate for loop */}
                            {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Figma', 'Adobe CC', 'Google Cloud', 'Azure', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Redis'].map((tech, i) => (
                                <span key={`dup-${i}`} className="text-2xl md:text-4xl font-heading font-black text-gray-800 dark:text-gray-700 uppercase hover:text-white transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. CATEGORY DEEP DIVE: DESIGN & STRATEGY */}
                <section className="py-32 bg-gray-50 dark:bg-[#050505] relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 reveal-up">
                            <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-2 block">Region 03</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 dark:text-white uppercase">Creative & Strategy</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...designServices, ...SERVICES.filter(s => s.category === 'Strategy')].map((service, idx) => (
                                <Link to={`/services/${service.slug}`} key={idx} className="relative aspect-square group overflow-hidden rounded-xl reveal-scale" style={{ transitionDelay: `${idx * 50}ms` }}>
                                    <LazyImage
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full"
                                        imgClassName="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    <div className="absolute inset-0 bg-purple-900/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-4xl text-white mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">{service.icon}</span>
                                        <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{service.title}</h3>
                                        <p className="text-purple-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">{service.shortDescription}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. PROCESS / WORKFLOW */}
                <section className="py-24 bg-[#111827] text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="reveal-up">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Workflow</span>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">From Concept to Code</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    We don't just execute tasks; we partner with you to engineer outcomes. Our process is transparent, agile, and obsessed with quality.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-lg">Discovery & Audit</h4>
                                            <p className="text-gray-400 text-sm">Deep dive into your current infrastructure and goals.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-lg">Strategy Blueprint</h4>
                                            <p className="text-gray-400 text-sm">Architecting the solution with a focus on scalability.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-lg">Agile Execution</h4>
                                            <p className="text-gray-400 text-sm">Sprint-based development with regular updates.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700 reveal-scale delay-200">
                                <LazyImage
                                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2070"
                                    alt="Process"
                                    className="w-full h-full"
                                    imgClassName="object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                                        <p className="text-sm font-mono text-green-400 mb-2">&gt; deploy_production.sh</p>
                                        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-400 w-3/4 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. FAQ & INSIGHTS */}
                <section className="py-24 bg-white dark:bg-black">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16 reveal-up">
                            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">Common Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "How do you handle project timelines?", a: "We work in agile sprints (usually 2 weeks). You'll have a dedicated project manager and access to our tracking tools like Jira or Linear." },
                                { q: "Do you offer post-launch support?", a: "Absolutely. We offer various SLA tiers for ongoing maintenance, security updates, and 24/7 monitoring." },
                                { q: "Can you work with existing codebases?", a: "Yes. We start with a technical audit to assess code quality and then propose a refactoring or integration plan." },
                                { q: "What is your pricing model?", a: "We offer both fixed-price project quotes for defined scopes and retainer models for ongoing dedicated teams." }
                            ].map((item, i) => (
                                <details key={i} className="group bg-gray-50 dark:bg-[#111] rounded-xl border border-gray-100 dark:border-gray-800 reveal-up" style={{ transitionDelay: `${i * 50}ms` }}>
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <h4 className="font-bold text-gray-900 dark:text-white">{item.q}</h4>
                                        <span className="transform group-open:rotate-180 transition-transform duration-300">
                                            <i className="fas fa-chevron-down text-gray-400"></i>
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. FINAL CTA */}
                <section className="py-32 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal-up">
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
                            Ready to Scale?
                        </h2>
                        <p className="text-xl text-white/90 mb-12 font-light">
                            Join the industry leaders who trust Thynkit with their digital infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl">
                                Schedule Consultation
                            </Link>
                            <Link to="/team" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all">
                                Meet the Team
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 7. MAIN DIRECTORY (Filterable Grid) - MOVED TO END */}
                <section id="directory" className="py-24 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 reveal-up">
                            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">Complete Service Directory</h2>
                            <p className="text-gray-500">Filter through our capabilities to find your solution.</p>
                        </div>

                        {/* Filters */}
                        <div className="sticky top-20 z-20 bg-white/90 dark:bg-black/90 backdrop-blur-md py-4 mb-12 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="relative w-full md:w-auto md:min-w-[300px]">
                                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    placeholder="Search directory..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                                {allCategories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => toggleCategory(cat)}
                                        className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 border whitespace-nowrap
                                    ${selectedCategories.includes(cat)
                                                ? 'bg-white dark:bg-white text-black border-transparent shadow-lg transform -translate-y-1'
                                                : 'bg-transparent border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-400 dark:hover:border-gray-500'
                                            }
                                `}
                                    >
                                        {cat}
                                    </button>
                                ))}
                                {(selectedCategories.length > 0 || searchQuery) && (
                                    <button onClick={clearFilters} className="text-xs text-red-500 hover:underline ml-2 whitespace-nowrap px-2">
                                        Reset
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* The Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredServices.map((service, idx) => (
                                <Link
                                    to={`/services/${service.slug}`}
                                    key={service.id}
                                    className="group bg-gray-50 dark:bg-[#111] rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl reveal-scale"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm text-gray-900 dark:text-white group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">{service.icon}</span>
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-full">{service.category}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4">{service.shortDescription}</p>
                                    <div className="border-t border-gray-200 dark:border-gray-800 pt-4 flex items-center text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                                        Details <i className="fas fa-arrow-right ml-auto transform group-hover:translate-x-1 transition-transform text-primary"></i>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {filteredServices.length === 0 && (
                            <div className="text-center py-24">
                                <div className="inline-block p-6 rounded-full bg-gray-100 dark:bg-gray-800 mb-4 animate-bounce">
                                    <i className="fas fa-search text-4xl text-gray-400"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No services found</h3>
                                <p className="text-gray-500">Try adjusting your filters.</p>
                                <button onClick={clearFilters} className="mt-6 bg-primary text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-primary-hover">Clear all filters</button>
                            </div>
                        )}
                    </div>
                </section>

            </div>
        </>
    );
};

export default ServicesHub;