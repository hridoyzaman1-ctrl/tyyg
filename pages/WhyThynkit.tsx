
import React, { useEffect } from 'react';
import { WHY_THYNKIT_DATA } from '../data';
import LazyImage from '../components/LazyImage';

const WhyThynkit: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const d = WHY_THYNKIT_DATA;

    const renderScienceItem = (item: any, style: React.CSSProperties, side: 'left' | 'right' | 'center') => {
        return (
            <div className={`absolute group cursor-help pointer-events-auto z-30 hover:z-50`} style={style}>
                <div className={`relative flex items-center gap-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded shadow-sm hover:shadow-glow transition-all duration-300 ${side === 'right' ? 'flex-row-reverse' : ''}`}>
                    <span className="material-symbols-outlined text-sm text-primary group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-gray-800 dark:text-gray-200 whitespace-nowrap">{item.label}</span>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                        <div className="bg-gray-900/95 backdrop-blur-md text-white text-xs p-4 rounded-xl shadow-2xl border border-gray-700 text-center leading-relaxed relative z-10">
                            <p className="font-bold text-primary mb-1 uppercase tracking-wider text-[10px]">{item.label}</p>
                            <p className="text-gray-300">{item.tooltip}</p>
                        </div>
                        {/* Arrow */}
                        <div className="w-3 h-3 bg-gray-900/95 border-r border-b border-gray-700 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1.5 z-0"></div>
                    </div>
                </div>
                {/* Connecting Line Visuals */}
                {side === 'left' && <div className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700 absolute top-1/2 left-full opacity-50"></div>}
                {side === 'right' && <div className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700 absolute top-1/2 right-full opacity-50"></div>}
            </div>
        );
    };

    return (
        <div className="bg-white dark:bg-[#111827]">

            {/* Top Bar - Copyright/Brand Line */}
            <div className="bg-[#555] text-white text-[10px] py-1 text-center font-sans tracking-wide uppercase">
                The Thynkit® Overview - Copyrights 2002-2025
            </div>

            {/* Hero Infographic Section */}
            <section className="bg-gray-100 dark:bg-gray-800 py-8 px-4 border-b border-gray-300 dark:border-gray-700 overflow-hidden">
                <div className="max-w-7xl mx-auto relative">

                    {/* Top Row: Theory, Process, Chemistry */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-12 relative z-10">

                        {/* 1. THEORY (Blackboard Style) */}
                        <div className="flex flex-col items-center reveal-up">
                            <h3 className="font-heading font-bold text-xl uppercase mb-2 tracking-tighter text-gray-900 dark:text-white">
                                {d.theory.title}
                            </h3>
                            <div className="text-xs font-bold text-primary mb-4 uppercase">{d.theory.subtitle}</div>
                            <div className="w-full rounded-lg shadow-xl border-4 border-[#444] min-h-[220px] relative overflow-hidden parallax-wrapper">
                                <LazyImage
                                    src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=2070"
                                    alt="Background"
                                    className="absolute inset-0 w-full h-full"
                                    imgClassName="object-cover parallax-img opacity-80"
                                    data-speed="0.005"
                                />
                                <div className="absolute inset-0 bg-black/80"></div>

                                <div className="relative z-10 p-6 text-center flex flex-col justify-center h-full">
                                    <h4 className="text-white font-serif text-2xl mb-4 italic text-glow">Your Scalability Probability</h4>
                                    <div className="text-white font-mono text-lg leading-relaxed drop-shadow-md">
                                        <span className="text-primary text-2xl font-bold">[</span>{d.theory.formula.part1}<span className="text-primary text-2xl font-bold">]</span> x <span className="text-primary text-2xl font-bold">[</span>{d.theory.formula.part2}<span className="text-primary text-2xl font-bold">]</span>
                                        <br />x<br />
                                        <span className="text-primary text-2xl font-bold">[</span>{d.theory.formula.part3}<span className="text-primary text-2xl font-bold">]</span><sup className="text-xs">3</sup>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. PROCESS (Vertical Steps) */}
                        <div className="flex flex-col items-center reveal-up stagger-1">
                            <h3 className="font-heading font-bold text-xl uppercase mb-2 tracking-tighter text-gray-900 dark:text-white">
                                {d.process.title}
                            </h3>
                            <div className="text-xs font-bold text-primary mb-4 uppercase">{d.process.subtitle}</div>
                            <div className="flex flex-col items-center gap-2 w-full max-w-[200px] relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-gray-400 -translate-x-1/2 z-0"></div>

                                {d.process.steps.map((step, idx) => (
                                    <div key={idx} className={`relative z-10 w-full flex items-center gap-3 reveal-scale stagger-${idx + 1}`}>
                                        <div className="w-10 h-10 bg-gray-800 text-white font-bold text-lg rounded flex items-center justify-center border-2 border-white shadow-md hover:scale-110 transition-transform duration-300">
                                            {step.id}
                                        </div>
                                        <div className="flex-1 bg-white dark:bg-gray-700 px-3 py-2 rounded shadow-sm border border-gray-200 dark:border-gray-600 text-xs font-bold uppercase tracking-wider text-center">
                                            {step.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. CHEMISTRY (Elements) */}
                        <div className="flex flex-col items-center reveal-up stagger-2">
                            <h3 className="font-heading font-bold text-xl uppercase mb-2 tracking-tighter text-gray-900 dark:text-white">
                                {d.chemistry.title}
                            </h3>
                            <div className="text-xs font-bold text-primary mb-4 uppercase">{d.chemistry.subtitle}</div>
                            <div className="relative w-full max-w-[280px] h-[220px]">
                                {/* Simulated Piping */}
                                <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300 -translate-y-1/2 rounded-full"></div>
                                <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-300 -translate-x-1/2 rounded-full"></div>

                                {/* Circles */}
                                <div className="absolute inset-0 flex flex-wrap justify-between content-between p-2">
                                    {d.chemistry.elements.map((el, i) => (
                                        <div key={i} className={`w-20 h-20 rounded-full bg-white dark:bg-gray-700 border-4 border-blue-400 dark:border-blue-600 flex items-center justify-center shadow-lg z-10 hover:scale-110 transition-transform animate-float`} style={{ animationDelay: `${i * 0.5}s` }}>
                                            <span className="text-[9px] font-bold uppercase text-center leading-tight px-1">{el}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Row: SCIENCE (Brain) */}
                    <div className="relative mt-8 text-center pb-12 reveal-up stagger-3">
                        <h3 className="font-heading font-bold text-xl uppercase mb-2 tracking-tighter text-gray-900 dark:text-white">
                            {d.science.title}
                        </h3>
                        <div className="text-xs font-bold text-primary mb-12 uppercase">{d.science.subtitle}</div>

                        <div className="relative max-w-xl mx-auto h-64 flex items-center justify-center">
                            {/* The Brain Circle */}
                            <div className="relative z-10 w-56 h-56 rounded-full bg-gradient-to-br from-orange-100 to-white dark:from-gray-700 dark:to-gray-900 border-[6px] border-white dark:border-gray-600 shadow-2xl flex items-center justify-center animate-pulse-slow">
                                <div className="absolute inset-2 rounded-full border border-orange-200 dark:border-gray-600"></div>
                                <span className="text-2xl font-serif font-medium text-gray-800 dark:text-white">Brain</span>
                            </div>

                            {/* Radiating Items - Interactive Tooltips */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                {/* Position 1: Top Left - Tangible */}
                                {renderScienceItem(d.science.items[0], { top: '50%', left: '4px', transform: 'translate(-100%, -80px)' }, 'left')}

                                {/* Position 2: Bottom Left - Scalable */}
                                {renderScienceItem(d.science.items[1], { top: '50%', left: '4px', transform: 'translate(-100%, 80px)' }, 'left')}

                                {/* Position 3: Top Right - Secure */}
                                {renderScienceItem(d.science.items[2], { top: '50%', right: '4px', transform: 'translate(100%, -80px)' }, 'right')}

                                {/* Position 4: Bottom Right - Fast */}
                                {renderScienceItem(d.science.items[3], { top: '50%', right: '4px', transform: 'translate(100%, 80px)' }, 'right')}

                                {/* Position 5: Center Left - Efficient */}
                                {renderScienceItem(d.science.items[4], { top: '50%', left: '25%', transform: 'translateY(-50%)' }, 'center')}

                                {/* Position 6: Center Right - Modern */}
                                {renderScienceItem(d.science.items[5], { top: '50%', right: '25%', transform: 'translateY(-50%)' }, 'center')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Text Section */}
            <section className="bg-white dark:bg-[#111827] py-20 px-6">
                <div className="max-w-4xl mx-auto text-center reveal-up">
                    <h2 className="text-3xl md:text-4xl font-heading font-medium text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
                        {d.intro.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                        {d.intro.content}
                    </p>
                    <div className="mt-8 font-bold text-gray-800 dark:text-gray-200 text-sm">
                        NEW: You can now earn a Certification as an IT Professional based on Thynkit®. <br />
                        <span className="text-primary cursor-pointer hover:underline">For more information, click here.</span>
                    </div>
                </div>
            </section>

            {/* The 5 Regions Section */}
            <section className="bg-[#f9f9f9] dark:bg-[#1a2231] py-20 px-4">
                <div className="max-w-6xl mx-auto space-y-16">

                    <div className="text-center mb-16 reveal-up">
                        <h2 className="text-2xl font-heading font-medium text-gray-900 dark:text-white mb-2">
                            {d.regionsTitle}
                        </h2>
                        <p className="text-xs text-gray-500 max-w-2xl mx-auto">
                            The Thynkit® model is composed of five regions, each of which gives you valuable insight into the science of scalability.
                        </p>
                    </div>

                    {d.regions.map((region, idx) => (
                        <div key={idx} className={`grid md:grid-cols-12 gap-8 items-center border-b border-gray-200 dark:border-gray-700 pb-12 last:border-0 last:pb-0`}>

                            {/* Visual Column - Separate Reveal */}
                            <div className="md:col-span-5 flex justify-center reveal-up">
                                {region.type === 'image_text' || region.type === 'image_text_reverse' ? (
                                    <LazyImage src={region.image} alt={region.title} className="rounded-lg shadow-md max-w-[250px] md:max-w-full h-auto" imgClassName="object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500" />
                                ) : region.type === 'icons_4' ? (
                                    <div className="flex gap-4">
                                        {region.icons?.map((icon, i) => (
                                            <div key={i} className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                                                <span className="material-symbols-outlined">{icon}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : region.type === 'icons_6' ? (
                                    <div className="grid grid-cols-3 gap-4">
                                        {region.icons?.map((icon, i) => (
                                            <div key={i} className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform animate-float" style={{ animationDelay: `${i * 0.1}s` }}>
                                                <span className="material-symbols-outlined text-xl">{icon}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    /* Fixed Grid for 7 Icons (icons_7) - Overlap Fix */
                                    <div className="flex flex-col gap-4 items-center">
                                        {/* Top Row - 4 Icons */}
                                        <div className="flex gap-4">
                                            {region.icons?.slice(0, 4).map((icon, i) => (
                                                <div key={i} className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer animate-float" style={{ animationDelay: `${i * 0.15}s` }}>
                                                    <span className="material-symbols-outlined text-xl">{icon}</span>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Bottom Row - 3 Icons */}
                                        <div className="flex gap-4">
                                            {region.icons?.slice(4, 7).map((icon, i) => (
                                                <div key={i} className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer animate-float" style={{ animationDelay: `${(i + 4) * 0.15}s` }}>
                                                    <span className="material-symbols-outlined text-xl">{icon}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Text Column - Delayed Reveal */}
                            <div className="md:col-span-7 space-y-4 text-center md:text-left reveal-up stagger-1">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{region.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {region.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* Footer CTA Section - Enhanced Micro-Interactions */}
            <section className="bg-[#f4f4f4] dark:bg-[#111827] py-24 px-4 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto text-center reveal-up">
                    <h2 className="text-2xl md:text-3xl font-heading font-medium text-gray-900 dark:text-white uppercase mb-2">
                        {d.footer.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 font-bold mb-16">{d.footer.subtitle}</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {d.footer.options.map((opt, idx) => (
                            <div key={idx} className={`bg-white dark:bg-[#1F2937] p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 reveal-up stagger-${idx + 1} group overflow-hidden relative`}>

                                {/* Animated Background Fill */}
                                <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-0"></div>

                                <div className="w-20 h-20 bg-[#81C8D4] rounded-full flex items-center justify-center mb-6 shadow-md ring-4 ring-transparent group-hover:ring-blue-200 dark:group-hover:ring-blue-900 transition-all group-hover:scale-110 relative z-10">
                                    <span className="material-symbols-outlined text-4xl text-white">{opt.icon}</span>
                                </div>
                                <h4 className="font-bold text-sm uppercase text-gray-900 dark:text-white mb-4 tracking-widest relative z-10">{opt.title}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xs relative z-10 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                                    {opt.desc}
                                </p>
                                <button className="bg-transparent border-2 border-[#5ea9b6] text-[#5ea9b6] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-glow hover:bg-[#5ea9b6] hover:text-white transform hover:scale-105 mt-auto relative z-10 overflow-hidden">
                                    <span className="relative z-10">{opt.btn}</span>
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WhyThynkit;
