
import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES } from '../data';
import { ContentBlock } from '../types';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import ThreeDViewer from '../components/ThreeDViewer';

const ServicePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = SERVICES.find(s => s.slug === slug);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Premium Scroll Reveal Trigger
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [slug, service.contentBlocks]);

    if (!service) {
        return <Navigate to="/" />;
    }

    const renderContentBlock = (block: ContentBlock, idx: number) => {
        switch (block.type) {
            case 'tech_ecosystem_map':
                return (
                    <section key={idx} className="py-24 bg-white dark:bg-black overflow-hidden reveal-up">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 dark:text-white mb-4 uppercase">{block.title}</h2>
                                <p className="text-gray-500 max-w-2xl mx-auto">{block.subtitle}</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {block.techEcosystem?.map((category, i) => (
                                    <div key={i} className="bg-gray-50 dark:bg-[#0a0a0a] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all group">
                                        <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-widest">{category.category}</h3>
                                        <div className="space-y-4">
                                            {category.techs.map((tech, j) => (
                                                <div key={j} className="flex items-center justify-between group/item">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform">
                                                            <i className={`${tech.icon} text-gray-600 dark:text-gray-400 group-hover/item:text-primary transition-colors`}></i>
                                                        </div>
                                                        <span className="font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
                                                    </div>
                                                    <div className="h-1 w-20 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-primary transition-all duration-1000 group-hover:scale-x-110 origin-left"
                                                            style={{ width: `${tech.importance * 10}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'comparison_table':
                return (
                    <section key={idx} className="py-24 bg-gray-50 dark:bg-black reveal-up">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 dark:text-white mb-4 uppercase">{block.title}</h2>
                            </div>
                            <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl">
                                <table className="w-full text-left border-collapse bg-white dark:bg-[#0a0a0a]">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-800">
                                            <th className="p-8 text-xs font-bold uppercase tracking-widest text-gray-400">Feature</th>
                                            {block.comparisonTable?.headers.map((header, i) => (
                                                <th key={i} className={`p-8 font-heading font-black uppercase tracking-tighter text-xl ${i === 0 ? 'text-primary' : 'text-gray-500'}`}>{header}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {block.comparisonTable?.rows.map((row, i) => (
                                            <tr key={i} className="border-b border-gray-100 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                <td className="p-8 font-bold text-gray-700 dark:text-gray-300">{row.label}</td>
                                                {row.values.map((val, j) => (
                                                    <td key={j} className="p-8">
                                                        {val === 'check' ? (
                                                            <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                                                <i className="fas fa-check text-xs"></i>
                                                            </div>
                                                        ) : val === 'cross' ? (
                                                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                                                <i className="fas fa-times text-xs"></i>
                                                            </div>
                                                        ) : (
                                                            <span className={`text-sm font-medium ${j === 0 ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>{val}</span>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                );

            case 'case_study_highlight':
                return (
                    <section key={idx} className="py-32 bg-black text-white relative overflow-hidden reveal-up">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full"></div>
                        <div className="max-w-7xl mx-auto px-6 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div className="space-y-8">
                                    <div className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-xs font-bold uppercase tracking-[0.2em]">Case Study</div>
                                    <h2 className="text-4xl md:text-6xl font-heading font-black uppercase leading-none">
                                        Client: <span className="text-primary">{block.caseStudy?.client}</span>
                                    </h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-gray-500 text-xs font-bold uppercase mb-2 tracking-widest">Challenge</h4>
                                            <p className="text-xl font-light leading-relaxed">{block.caseStudy?.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-500 text-xs font-bold uppercase mb-2 tracking-widest">Solution</h4>
                                            <p className="text-xl font-light leading-relaxed">{block.caseStudy?.solution}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                        {block.caseStudy?.metrics?.map((m, i) => (
                                            <div key={i}>
                                                <div className="text-4xl font-heading font-black text-primary">{m.value}</div>
                                                <div className="text-xs uppercase tracking-widest text-gray-500">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative group perspective-1000">
                                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(240,90,40,0.2)] transform transition-transform duration-1000 group-hover:rotate-y-6 group-hover:scale-[1.02]">
                                        <LazyImage src={block.caseStudy?.image || ''} alt="Case Study" className="w-full h-full" imgClassName="object-cover" />
                                    </div>
                                    <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-3xl shadow-2xl hidden md:block">
                                        <i className="fas fa-quote-left text-4xl text-white/40 mb-4"></i>
                                        <p className="text-lg font-bold italic">"{block.caseStudy?.result}"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case 'media_collage':
                return (
                    <section key={idx} className="py-24 bg-white dark:bg-[#050505] reveal-up">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[350px]">
                                {block.mediaCollage?.items.map((item, i) => {
                                    const spanClass = item.span === 'row' ? 'col-span-2' :
                                        item.span === 'col' ? 'row-span-2' :
                                            item.span === 'both' ? 'col-span-2 row-span-2' : '';
                                    return (
                                        <div key={i} className={`relative rounded-3xl overflow-hidden shadow-xl group ${spanClass}`}>
                                            <LazyImage src={item.src} alt="" className="w-full h-full" imgClassName="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                );

            case 'service_tiers':
                return (
                    <section key={idx} className="py-32 bg-gray-50 dark:bg-black reveal-up">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-20">
                                <h2 className="text-3xl md:text-6xl font-heading font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">{block.title}</h2>
                                <p className="text-gray-500 max-w-2xl mx-auto text-lg">{block.subtitle}</p>
                            </div>
                            <div className="grid lg:grid-cols-3 gap-8">
                                {block.serviceTiers?.map((tier, i) => (
                                    <div key={i} className={`relative flex flex-col p-10 rounded-[3rem] border-2 transition-all duration-500 group
                                        ${tier.isPopular ? 'bg-black dark:bg-[#0a0a0a] border-primary text-white scale-105 shadow-[0_30px_60px_-15px_rgba(240,90,40,0.3)]' : 'bg-white dark:bg-[#111] border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white'}
                                    `}>
                                        {tier.isPopular && (
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full">Recommended</div>
                                        )}
                                        <div className="mb-10">
                                            <h3 className="text-2xl font-black uppercase mb-2">{tier.name}</h3>
                                            <div className="text-4xl font-heading font-black transition-colors group-hover:text-primary">{tier.price || 'Custom'}</div>
                                            <p className={`mt-4 text-sm font-light ${tier.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>{tier.description}</p>
                                        </div>
                                        <ul className="flex-1 space-y-4 mb-10">
                                            {tier.features.map((f, j) => (
                                                <li key={j} className="flex gap-3 text-sm">
                                                    <i className="fas fa-check-circle text-primary mt-1"></i>
                                                    <span className={tier.isPopular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/contact" className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs text-center transition-all
                                            ${tier.isPopular ? 'bg-primary text-white hover:bg-white hover:text-black' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-black hover:text-white'}
                                        `}>
                                            {tier.ctaText || 'Get Started'}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'infographic_row':
                return (
                    <section key={idx} className="py-12 md:py-24 bg-gray-50 dark:bg-black overflow-hidden relative reveal-up">
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-2xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-10 md:mb-16 max-w-2xl leading-tight relative z-10 reveal-up">
                                {block.title}
                            </h2>
                            {block.infographics?.some(i => i.type === 'pill') ? (
                                /* New Tech Cloud Layout for 'pill' type */
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    {block.infographics?.map((item, i) => (
                                        <div key={i} className={`relative overflow-hidden rounded-full py-3 px-8 border transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default reveal-scale stagger-${i % 5}
                                            ${item.colorTheme === 'green' ? 'border-green-400/50 text-green-500 bg-green-50/20 hover:bg-green-500 hover:text-white' : ''}
                                            ${item.colorTheme === 'purple' ? 'border-purple-400/50 text-purple-500 bg-purple-50/20 hover:bg-purple-500 hover:text-white' : ''}
                                            ${item.colorTheme === 'blue' ? 'border-blue-400/50 text-blue-500 bg-blue-50/20 hover:bg-blue-500 hover:text-white' : ''}
                                            ${item.colorTheme === 'orange' ? 'border-orange-400/50 text-orange-500 bg-orange-50/20 hover:bg-orange-500 hover:text-white' : ''}
                                            ${!item.colorTheme ? 'border-gray-400/50 text-gray-500 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black' : ''}
                                        `}>
                                            <span className="font-bold text-sm md:text-lg whitespace-nowrap">{item.label || item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                /* Standard Row for other types */
                                <div className="space-y-6 md:space-y-12">
                                    {block.infographics?.map((item, i) => (
                                        <div key={i} className={`flex flex-col md:flex-row gap-4 md:gap-8 items-start group reveal-up stagger-${i + 1}`}>
                                            <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
                                                <span className="text-4xl md:text-8xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 block leading-none">{item.value}</span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                );

            case 'stats_row':
                return (
                    <section key={idx} className="py-12 md:py-20 bg-primary text-white relative overflow-hidden reveal-up">
                        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center relative z-10">
                            {block.statsList?.map((stat, i) => (
                                <div key={i} className="reveal-up">
                                    <div className="text-2xl md:text-6xl font-heading font-black mb-1">{stat.value}</div>
                                    <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            case 'external_project_showcase':
                return (
                    <section key={idx} className="py-16 md:py-32 bg-white dark:bg-[#080808] relative reveal-up">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-12 md:mb-24">
                                <h2 className="text-3xl md:text-6xl font-heading font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
                                    {block.title || "Featured Deployments"}
                                </h2>
                                <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light">
                                    {block.subtitle}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-10">
                                {block.externalProjects?.map((project, i) => (
                                    <a
                                        key={i}
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative block rounded-xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-500"
                                    >
                                        <div className="relative aspect-video max-h-[300px] md:max-h-[600px] overflow-hidden bg-gray-100 dark:bg-gray-900">
                                            <LazyImage
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full"
                                                imgClassName="object-cover w-full h-full"
                                            />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                                                <h3 className="text-xl md:text-4xl font-heading font-bold text-white mb-2 uppercase">{project.title}</h3>
                                                <p className="text-gray-200 text-xs md:text-base max-w-xl hidden sm:block">{project.details}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'grid_cards':
                return (
                    <section key={idx} className="py-12 md:py-24 bg-surface-light dark:bg-[#111827] relative reveal-up">
                        <div className="max-w-7xl mx-auto px-6 relative z-10">
                            {block.title && (
                                <div className="mb-10 md:mb-16 text-center">
                                    <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-3">{block.title}</h2>
                                    {block.subtitle && <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-xs md:text-base">{block.subtitle}</p>}
                                </div>
                            )}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {block.cards?.map((card, i) => (
                                    <div key={i} className={`flex flex-col items-center text-center p-6 bg-white dark:bg-[#1F2937] rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 group hover:-translate-y-1 
                                    ${card.colorTheme === 'purple' ? 'hover:border-purple-500/50' : ''}
                                `}>
                                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 flex items-center justify-center transition-colors overflow-hidden
                                        ${card.colorTheme === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' : 'bg-primary/10 text-primary'}
                                    `}>
                                            {card.iconImage ? (
                                                <LazyImage src={card.iconImage} alt={card.title} className="w-8 h-8 md:w-10 md:h-10" imgClassName="object-contain" />
                                            ) : (
                                                <span className="material-symbols-outlined text-2xl md:text-3xl">{card.icon}</span>
                                            )}
                                        </div>
                                        <h3 className="text-base md:text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{card.title}</h3>
                                        <p className="text-[11px] md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{card.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'feature_split':
                return (
                    <section key={idx} className="py-12 md:py-24 bg-white dark:bg-black overflow-hidden reveal-up">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className={`flex flex-col lg:flex-row items-center gap-10 md:gap-20 ${block.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="flex-1 space-y-4 md:space-y-8 text-center md:text-left">
                                    <h3 className="text-2xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight">{block.title}</h3>
                                    <div className="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: block.content || '' }}></div>
                                </div>
                                <div className="flex-1 w-full max-h-[300px] md:max-h-none overflow-hidden rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800">
                                    <LazyImage src={block.image || ''} alt={block.title || ''} className="w-full h-full" imgClassName="object-cover" />
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case 'process_timeline':
                return (
                    <section key={idx} className="py-12 md:py-24 bg-black text-white relative reveal-up">
                        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-5xl font-heading font-bold mb-8 md:mb-12 text-center md:text-left">{block.title}</h2>
                                <div className="space-y-4">
                                    {block.timeline?.map((item, i) => (
                                        <div key={i} className="group border-b border-gray-800 pb-3">
                                            <div className="flex items-center gap-4 py-2">
                                                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary text-white">{item.step}</span>
                                                <span className="text-base md:text-xl font-bold group-hover:text-primary transition-colors">{item.title}</span>
                                            </div>
                                            <p className="text-gray-400 text-[11px] md:text-sm pl-10 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative h-[250px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                                <LazyImage src={block.image || ''} alt="Process" className="w-full h-full" imgClassName="object-cover grayscale" />
                            </div>
                        </div>
                    </section>
                );

            case 'cta_curved':
                return (
                    <section key={idx} className="bg-[#1F2937] dark:bg-black py-12 md:py-24 relative overflow-hidden reveal-up">
                        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl md:text-5xl font-heading font-bold mb-2 md:mb-6 text-white leading-tight">{block.title}</h2>
                                <p className="text-gray-400 text-sm md:text-lg">{block.subtitle}</p>
                            </div>
                            <Link to="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold uppercase text-[10px] md:text-sm tracking-widest transition-all shadow-lg hover:-translate-y-1 whitespace-nowrap">
                                {block.ctaText}
                            </Link>
                        </div>
                    </section>
                );

            case 'simple_text':
                return (
                    <section key={idx} className="py-24 bg-white dark:bg-[#111827] text-center reveal-up">
                        <div className="max-w-3xl mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight">{block.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{block.content}</p>
                        </div>
                    </section>
                );

            case 'portfolio_masonry':
                return (
                    <section key={idx} className="py-20 bg-white dark:bg-[#050505]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <div className="text-center mb-16 reveal-up">
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">{block.title}</h2>
                                <p className="text-gray-500 max-w-2xl mx-auto">{block.subtitle}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                                {block.projects?.map((project, i) => {
                                    // Dynamic sizing based on 'size' prop
                                    const spanClass = project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                        project.size === 'wide' ? 'md:col-span-2' :
                                            project.size === 'tall' ? 'md:row-span-2' : '';

                                    return (
                                        <div key={i} className={`group relative rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 ${spanClass} reveal-scale`}>
                                            <LazyImage
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full"
                                                imgClassName="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</p>
                                                <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                );

            case 'faq_accordion':
                return (
                    <section key={idx} className="py-24 bg-gray-50 dark:bg-[#111827]">
                        <div className="max-w-3xl mx-auto px-6">
                            <div className="text-center mb-16 reveal-up">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">{block.title}</h2>
                                <p className="text-gray-500">{block.subtitle}</p>
                            </div>
                            <div className="space-y-4">
                                {block.faqs?.map((item, i) => (
                                    <details key={i} className="group bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 reveal-up">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                            <h4 className="font-bold text-gray-900 dark:text-white text-lg">{item.q}</h4>
                                            <span className="transform group-open:rotate-180 transition-transform duration-300 bg-gray-100 dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                                                <i className="fas fa-chevron-down text-gray-500"></i>
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                            {item.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            default:
                return null;
        }
    };

    return (
        <div className="overflow-hidden">
            <SEO title={service.title} description={service.shortDescription} />

            {/* Dynamic Hero Section Engine */}
            {(() => {
                switch (service.heroVariant) {
                    case 'cinematic':
                        return (
                            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden text-center text-white reveal-up">
                                <div className="absolute inset-0 z-0">
                                    {service.heroVideo ? (
                                        <video
                                            key={service.heroVideo}
                                            className="w-full h-full object-cover scale-105"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            poster={service.image}
                                        >
                                            <source src={service.heroVideo} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <LazyImage src={service.heroImages?.[0] || service.image} className="w-full h-full" imgClassName="object-cover scale-105 animate-pulse-slow" alt="" />
                                    )}
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                                </div>
                                <div className="relative z-10 max-w-5xl mx-auto px-6">
                                    <span className="inline-block py-1 px-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-bold tracking-widest uppercase mb-6">{service.category}</span>
                                    <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 leading-tight">{service.heroHeadline || service.title}</h1>
                                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-10">{service.heroSubheadline || service.shortDescription}</p>
                                    <button className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105 shadow-[0_0_30px_rgba(240,90,40,0.5)]">
                                        {service.heroCtaText || "Start Project"}
                                    </button>
                                </div>
                            </section>
                        );

                    case 'minimal':
                        return (
                            <section className="relative px-6 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center reveal-up">
                                <div className="max-w-5xl">
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-gray-900 dark:text-white tracking-tighter mb-8 leading-none">
                                        {service.heroHeadline}<span className="text-primary">.</span>
                                    </h1>
                                    <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-800 my-8"></div>
                                    <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                                        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light max-w-xl leading-relaxed">{service.heroSubheadline}</p>
                                        <div className="flex gap-4">
                                            <button className="px-8 py-3 border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors text-sm">
                                                Explore
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );

                    case 'split_edge':
                        return (
                            <section className="relative lg:h-screen min-h-[800px] flex flex-col lg:flex-row bg-white dark:bg-black reveal-up">
                                <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center order-2 lg:order-1">
                                    <div>
                                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">{service.category} Service</span>
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-gray-900 dark:text-white mb-6 leading-none uppercase">{service.heroHeadline}</h1>
                                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">{service.heroSubheadline}</p>
                                        <div className="flex gap-6">
                                            <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary dark:hover:bg-primary transition-colors text-sm">
                                                {service.heroCtaText}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-12 grid grid-cols-3 gap-6">
                                        {service.stats?.slice(0, 3).map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">{stat.value}</div>
                                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:w-1/2 h-[40vh] lg:h-auto relative order-1 lg:order-2">
                                    <LazyImage src={service.image} className="absolute inset-0 w-full h-full" imgClassName="object-cover" alt="" />
                                </div>
                            </section>
                        );

                    default: // 'standard'
                        return (
                            <section className="relative px-6 max-w-7xl mx-auto pt-8 pb-10 md:pt-20 md:pb-24 reveal-up">
                                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                                    <div className="text-center lg:text-left z-10">
                                        <span className="text-[10px] md:text-xs font-bold text-primary tracking-[0.2em] uppercase mb-3 block">Our Services</span>
                                        <h1 className="text-4xl md:text-7xl font-heading font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                                            {service.heroHeadline || service.title}
                                        </h1>
                                        <div className="w-16 h-1 bg-primary rounded-full mb-8 mx-auto lg:mx-0"></div>
                                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 font-light">
                                            {service.heroSubheadline || service.shortDescription}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                            <button className="bg-[#1F2937] dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-primary dark:hover:bg-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                                {service.heroCtaText || "Get Started"}
                                            </button>
                                            <Link to="/contact" className="flex items-center justify-center gap-2 text-gray-900 dark:text-white font-bold hover:text-primary text-sm px-6 py-4">
                                                Get a Quote <i className="fas fa-arrow-right ml-1"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Conditional 3D Viewer or Image Collage */}
                                    <div className="relative h-[400px] md:h-[600px] w-full hidden lg:block">
                                        {service.use3DHero ? (
                                            <div className="absolute inset-0 z-0">
                                                <ThreeDViewer color={service.hero3DColor || '#F05A28'} />
                                            </div>
                                        ) : (
                                            <>
                                                <div className="absolute top-0 right-10 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl z-20 bg-gray-100">
                                                    <LazyImage src={service.heroImages?.[0] || service.image} className="w-full h-full" imgClassName="object-cover" alt="" loading="eager" />
                                                </div>
                                                <div className="absolute top-32 left-10 w-64 h-64 rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-10 rotate-[-5deg] bg-gray-100">
                                                    <LazyImage src={service.heroImages?.[1] || service.image} className="w-full h-full" imgClassName="object-cover" alt="" loading="eager" />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </section>
                        );
                }
            })()}

            {service.video && (
                <section className="py-10 md:py-20 bg-black reveal-up">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                            <CustomVideoPlayer
                                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                poster={service.video.thumbnail}
                            />
                        </div>
                    </div>
                </section>
            )}

            {service.contentBlocks && service.contentBlocks.map((block, idx) => renderContentBlock(block, idx))}

            {!service.contentBlocks?.some(b => b.type === 'cta_curved') && (
                <section className="bg-[#111827] py-16 md:py-24 text-center reveal-up">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-2xl md:text-5xl font-heading font-bold mb-4 text-white">
                            {service.ctaTitle || "Ready for digital success?"}
                        </h2>
                        <p className="text-gray-400 text-sm md:text-lg mb-8">
                            {service.ctaText || "Got a vision? We have the expertise to build it."}
                        </p>
                        <Link to="/contact" className="inline-block bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-bold py-3 px-8 rounded uppercase text-[10px] md:text-xs">
                            Start now
                        </Link>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ServicePage;
