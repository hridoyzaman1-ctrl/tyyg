
import React from 'react';
import { PageContent, ContentBlock } from '../types';
import LazyImage from '../components/LazyImage';
import { Link } from 'react-router-dom';

interface GenericPageProps {
  data: PageContent;
}

const GenericPage: React.FC<GenericPageProps> = ({ data }) => {
  
  const renderContentBlock = (block: ContentBlock, idx: number) => {
    switch(block.type) {
      case 'infographic_row':
        return (
            <section key={idx} className="py-24 bg-gray-50 dark:bg-black overflow-hidden relative reveal-up">
                <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
                     <svg width="200" height="200" viewBox="0 0 100 100" className="animate-spin-slow">
                        <path d="M50 10 Q 90 10, 90 50 T 50 90 T 10 50 T 50 10" stroke="currentColor" fill="none" className="text-gray-500" strokeWidth="2" strokeDasharray="4 4" />
                     </svg>
                </div>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-16 max-w-2xl leading-tight relative z-10 reveal-up">
                        {block.title}
                    </h2>
                    <div className="space-y-12">
                        {block.infographics?.map((item, i) => (
                            <div key={i} className={`flex flex-col md:flex-row gap-8 items-start group reveal-up stagger-${i+1}`}>
                                {item.type === 'pill' ? (
                                    <div className={`flex-shrink-0 relative overflow-hidden rounded-full py-4 px-8 border-2 transition-all duration-300 w-full md:w-auto text-center md:text-left
                                        ${item.colorTheme === 'green' ? 'border-green-400 text-green-500 bg-green-50/50 dark:bg-green-900/10' : ''}
                                        ${item.colorTheme === 'purple' ? 'border-purple-400 text-purple-500 bg-purple-50/50 dark:bg-purple-900/10' : ''}
                                        ${item.colorTheme === 'blue' ? 'border-blue-400 text-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : ''}
                                        ${item.colorTheme === 'orange' ? 'border-orange-400 text-orange-500 bg-orange-50/50 dark:bg-orange-900/10' : ''}
                                        ${!item.colorTheme ? 'border-gray-400 text-gray-500' : ''}
                                    `}>
                                        <span className="font-bold text-lg md:text-xl whitespace-nowrap">{item.label}</span>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
                                        <span className="text-6xl md:text-8xl font-heading font-extrabold text-gray-900 dark:text-white block leading-none">{item.value}</span>
                                    </div>
                                )}
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed pt-2 max-w-xl">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );

      case 'stats_row':
        return (
            <section key={idx} className="py-20 bg-primary text-white relative overflow-hidden reveal-up">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                    {block.statsList?.map((stat, i) => (
                        <div key={i} className="reveal-up" style={{transitionDelay: `${i*100}ms`}}>
                            <div className="text-4xl md:text-6xl font-heading font-black mb-2">{stat.value}</div>
                            <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        );

      case 'process_timeline':
          return (
              <section key={idx} className="py-24 bg-black text-white relative overflow-hidden reveal-up">
                  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                      <div className="space-y-6">
                          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12">{block.title}</h2>
                          <div className="space-y-4">
                              {block.timeline?.map((item, i) => (
                                  <div key={i} className={`group border-b border-gray-800 pb-4 reveal-up stagger-${i}`}>
                                      <div className="flex items-center justify-between cursor-pointer py-2">
                                          <div className="flex items-center gap-4">
                                              <span className={`text-xs font-bold px-3 py-1 rounded-full ${i % 4 === 0 ? 'bg-[#10B981] text-black' : (i % 4 === 1 ? 'bg-[#D8B4FE] text-black' : (i % 4 === 2 ? 'bg-[#FBBF24] text-black' : 'bg-[#F97316] text-black'))}`}>{item.step}</span>
                                              <span className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</span>
                                          </div>
                                          <i className="fas fa-plus text-gray-600 group-hover:rotate-45 transition-transform duration-300"></i>
                                      </div>
                                      <p className="text-gray-400 text-sm mt-2 pl-12 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden">
                                          {item.description}
                                      </p>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group parallax-wrapper">
                          <LazyImage src={block.image || ''} alt="Process" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 parallax-img" data-speed="0.04" />
                      </div>
                  </div>
              </section>
          );

      case 'grid_cards':
        return (
            <section key={idx} className="py-24 bg-surface-light dark:bg-[#111827] relative reveal-up">
                 <div className="max-w-7xl mx-auto px-6 relative z-10">
                     {block.title && (
                         <div className="mb-16 text-center">
                             <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                                 {block.title}
                             </h2>
                             {block.subtitle && <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{block.subtitle}</p>}
                         </div>
                     )}
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {block.cards?.map((card, i) => (
                                <div key={i} className={`flex flex-col items-center text-center p-8 bg-white dark:bg-[#1F2937] rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 reveal-scale stagger-${i % 4} group hover:shadow-2xl hover:-translate-y-2`}>
                                    
                                    <div className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center transition-all duration-500 bg-primary/10 group-hover:bg-primary`}>
                                        {card.icon ? (
                                             <span className={`material-symbols-outlined text-4xl transition-colors duration-300 text-primary group-hover:text-white`}>
                                                {card.icon}
                                            </span>
                                        ) : (
                                            <img src={card.iconImage} alt="" className="w-12 h-12 object-contain" />
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{card.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{card.description}</p>
                                </div>
                         ))}
                     </div>
                 </div>
            </section>
        );

      case 'banner':
          return (
            <section key={idx} className={`py-24 relative overflow-hidden ${block.background === 'black' ? 'bg-black text-white' : 'bg-primary text-white'} reveal-up`}>
               {block.image && (
                   <div className="absolute inset-0 z-0">
                       <LazyImage src={block.image} alt="Banner" className="w-full h-full object-cover opacity-30" />
                       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                   </div>
               )}
               <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                  {block.title && <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">{block.title}</h2>}
                  {block.content && <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{block.content}</p>}
               </div>
            </section>
          );

      case 'team_grid':
        return (
            <section key={idx} className="py-24 bg-white dark:bg-[#111827] reveal-up">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">{block.title}</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">{block.subtitle}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {block.team?.map((member, i) => (
                            <div key={i} className="group relative text-center">
                                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-primary transition-all duration-300 relative shadow-xl">
                                    <LazyImage src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a href="#" className="text-white hover:text-black transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
                                        <a href="#" className="text-white hover:text-black transition-colors"><i className="fab fa-twitter text-xl"></i></a>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium text-primary">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );

      case 'feature_split':
        return (
          <section key={idx} className="py-24 bg-surface-light dark:bg-black overflow-hidden reveal-up">
             <div className="max-w-7xl mx-auto px-6">
                <div className={`flex flex-col lg:flex-row items-center gap-20 ${block.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                   <div className="flex-1 space-y-8">
                      <h3 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight">{block.title}</h3>
                      <div className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: block.content || '' }}></div>
                      {block.ctaText && (
                        <div className="pt-4">
                           <Link to={block.ctaLink || "/contact"} className="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest hover:text-primary transition-colors border-b-2 border-black dark:border-white pb-1 group">
                              {block.ctaText} <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                           </Link>
                        </div>
                      )}
                   </div>
                   <div className="flex-1 w-full relative">
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#FBBF24] rounded-full opacity-50 blur-xl animate-pulse-slow"></div>
                      <div className={`relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 ${block.align === 'right' ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform duration-500 group`}>
                        <LazyImage src={block.image || ''} alt={block.title || ''} className="w-full h-auto object-cover parallax-img group-hover:scale-105 transition-transform duration-700" data-speed="0.03" />
                      </div>
                   </div>
                </div>
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

      case 'testimonial_single':
          return (
              <section key={idx} className="relative reveal-up mt-24">
                  <div className="max-w-7xl mx-auto px-6">
                      <div className="bg-[#664EAE] dark:bg-[#4C1D95] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
                          <div className="md:w-2/5 relative min-h-[300px]">
                              <LazyImage 
                                  src={block.testimonialSingle?.image || ''} 
                                  alt={block.testimonialSingle?.author || ''} 
                                  className="absolute inset-0 w-full h-full object-cover"
                              />
                          </div>
                          <div className="md:w-3/5 p-12 md:p-16 flex flex-col justify-center text-white relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                              <div className="absolute bottom-0 right-20 w-24 h-24 bg-[#FBBF24] transform rotate-45 translate-y-12"></div>
                              
                              <i className="fas fa-quote-left text-4xl text-white/30 mb-6"></i>
                              <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-8 relative z-10">
                                  "{block.testimonialSingle?.quote}"
                              </h3>
                              <div>
                                  <p className="font-bold text-lg">{block.testimonialSingle?.author}</p>
                                  <p className="text-white/70 text-sm uppercase tracking-wider">{block.testimonialSingle?.role}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          );

      case 'cta_curved':
          return (
             <section key={idx} className="bg-[#1F2937] dark:bg-black py-24 relative overflow-hidden reveal-up transition-colors duration-300 mt-24">
                 <div className="absolute inset-0 bg-[#1F2937] dark:bg-black"></div>
                 <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
                      <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
                          <path d="M400,0 C200,50 100,200 0,400" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M400,50 C250,100 150,250 50,400" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M400,100 C300,150 200,300 100,400" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                 </div>
                 
                 <div className="max-w-6xl mx-auto px-6 text-left relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                     <div className="max-w-2xl">
                         <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
                             {block.title}
                         </h2>
                         <p className="text-gray-400 text-lg">{block.subtitle}</p>
                     </div>
                     <Link to="/contact" className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white px-10 py-4 rounded-lg font-bold uppercase text-sm tracking-widest transition-all shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 whitespace-nowrap">
                         {block.ctaText}
                     </Link>
                 </div>
                 <div className="absolute bottom-10 left-10 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-[#FBBF24] transform rotate-[-15deg] animate-float"></div>
                 <div className="absolute top-10 left-20 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-[#F472B6] transform rotate-[15deg] animate-float" style={{animationDelay: '1s'}}></div>
             </section>
          );

      default:
        return null;
    }
  };

  return (
    <div className="overflow-hidden">
        {/* Top Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 reveal-up">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4 uppercase leading-tight">
                  {data.title}
                </h1>
                <p className="text-xl text-primary font-bold tracking-widest uppercase">
                  {data.subtitle}
                </p>
              </div>
              <div className="prose prose-lg prose-gray dark:prose-invert text-gray-600 dark:text-gray-300">
                {data.content}
              </div>
            </div>
            
            {data.image && (
              <div className="relative reveal-scale delay-200">
                 <div className="absolute -inset-4 bg-primary/20 rounded-2xl transform rotate-3 blur-sm"></div>
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                    <LazyImage 
                      src={data.image} 
                      alt={data.title} 
                      className="w-full h-auto object-cover"
                    />
                 </div>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Content Blocks (Added support for all blocks) */}
        {data.contentBlocks?.map((block, idx) => renderContentBlock(block, idx))}
    </div>
  );
};

export default GenericPage;
