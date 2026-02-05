
import React, { useEffect, useState, useRef } from 'react';
import { STRATEGY_DETAILED } from '../data';

const StrategyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { philosophy, steps, pillars } = STRATEGY_DETAILED;
  
  // Animation States
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "> initializing core_systems...",
    "> loading modules: [security, scale, velocity]...",
    "> connecting to global_edge_network..."
  ]);
  const [animateBars, setAnimateBars] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for Bar Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateBars(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (barsRef.current) {
      observer.observe(barsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Terminal Typing Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalLines(prev => {
        if (prev.length > 8) return prev.slice(1);
        const newLines = [
          "> optimizing latency...",
          "> deploying containers to region: us-east-1...",
          "> scaling groups: active...",
          "> zero_trust_policy: enforced...",
          "> monitoring throughput: 10GB/s...",
          "> automated_recovery: enabled...",
          "> sync complete."
        ];
        return [...prev, newLines[Math.floor(Math.random() * newLines.length)]];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-[#000] text-gray-900 dark:text-white overflow-hidden font-display transition-colors duration-500">
      
      {/* 1. HERO SECTION (Cinematic - Always Dark Theme for Video Impact) */}
      <section className="relative h-[90vh] min-h-[600px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
         {/* Background Video */}
         <div className="absolute inset-0 z-0">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-60"
            >
                <source src="https://cdn.coverr.co/videos/coverr-abstract-digital-background-4726/1080p.mp4" type="video/mp4" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>
            </video>
            
            {/* Cinematic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
         </div>

         <div className="relative z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center justify-center h-full pt-16">
            {/* Premium Pill */}
            <div className="reveal-up">
                <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-black/40 backdrop-blur-xl rounded-full px-4 py-2 sm:px-6 sm:py-2 mb-6 sm:mb-8 shadow-[0_0_30px_rgba(6,182,212,0.15)] animate-pulse-slow">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
                    <span className="text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">System Architecture v2.0</span>
                </div>
            </div>
            
            {/* Massive Title with Overlay Effect */}
            <div className="reveal-scale relative mix-blend-overlay opacity-90">
                <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-heading font-black text-white leading-[0.9] sm:leading-[0.85] tracking-tighter uppercase text-center drop-shadow-2xl">
                    Engineering<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600">Business</span><br/>
                    Velocity
                </h1>
            </div>
         </div>
         
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
             <i className="fas fa-chevron-down text-white text-2xl"></i>
         </div>
      </section>

      {/* 2. THE NEURAL GRID (Light/Dark Adaptive) */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-[#050505] relative overflow-hidden border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div className="reveal-up text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                      The <span className="text-primary">Nervous System</span> of Modern Enterprise
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                      We don't just build websites; we build intelligent organisms. Our architecture creates a feedback loop between your infrastructure, your data, and your users.
                  </p>
                  <div className="flex justify-center lg:justify-start gap-8 sm:gap-12 border-t border-gray-200 dark:border-gray-800 pt-8">
                      <div className="group text-center lg:text-left">
                          <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">50ms</p>
                          <p className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">Global Latency</p>
                      </div>
                      <div className="group text-center lg:text-left">
                          <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">99.99%</p>
                          <p className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">Availability</p>
                      </div>
                  </div>
              </div>
              
              {/* Animated Network Visual */}
              <div className="relative h-[450px] sm:h-[500px] w-full reveal-scale delay-200 flex items-center justify-center">
                  <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
                      {/* Orbital Rings - Refined Animation */}
                      <div className="absolute inset-0 border border-gray-300 dark:border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                      <div className="absolute inset-[30px] sm:inset-[40px] border border-gray-300 dark:border-cyan-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                      <div className="absolute inset-[70px] sm:inset-[100px] border border-gray-200 dark:border-purple-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                      
                      {/* Central Core */}
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-primary dark:to-purple-900 rounded-full blur-[40px] opacity-60 animate-pulse"></div>
                          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-black rounded-full border-2 border-gray-100 dark:border-gray-800 flex items-center justify-center shadow-2xl">
                              <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary animate-pulse-slow">hub</span>
                          </div>
                      </div>
                      
                      {/* Floating Nodes */}
                      <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(240,90,40,0.6)] animate-float" style={{animationDelay: '0s'}}></div>
                      <div className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)] animate-float" style={{animationDelay: '1.5s'}}></div>
                      <div className="absolute top-1/2 left-0 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] animate-float" style={{animationDelay: '2.5s'}}></div>
                  </div>

                  {/* Premium Glass Card Overlay - Animated Bars */}
                  <div ref={barsRef} className="absolute bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-0 md:right-10 bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-5 sm:p-6 rounded-2xl shadow-xl dark:shadow-2xl w-[90%] sm:w-72 transform transition-transform hover:-translate-y-1 duration-500 z-20">
                      <div className="flex items-center gap-3 mb-4">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                          </span>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-green-400">System Healthy</p>
                      </div>
                      <div className="space-y-4">
                          <div className="space-y-1">
                              <div className="flex justify-between text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">
                                  <span>Throughput</span>
                                  <span>98%</span>
                              </div>
                              <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-primary rounded-full transition-all duration-[1500ms] ease-out"
                                    style={{ width: animateBars ? '98%' : '0%' }}
                                  ></div>
                              </div>
                          </div>
                          <div className="space-y-1">
                              <div className="flex justify-between text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">
                                  <span>Edge Caching</span>
                                  <span>85%</span>
                              </div>
                              <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-cyan-500 rounded-full transition-all duration-[1500ms] ease-out delay-100"
                                    style={{ width: animateBars ? '85%' : '0%' }}
                                  ></div>
                              </div>
                          </div>
                          <div className="space-y-1">
                              <div className="flex justify-between text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">
                                  <span>Security</span>
                                  <span>100%</span>
                              </div>
                              <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-purple-500 rounded-full transition-all duration-[1500ms] ease-out delay-200"
                                    style={{ width: animateBars ? '100%' : '0%' }}
                                  ></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 border-b border-gray-100 dark:border-gray-800">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div className="reveal-up text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
                      {philosophy.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed border-l-4 border-primary pl-6 text-left">
                      {philosophy.content}
                  </p>
                  
                  {/* Stat Box */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 inline-block shadow-lg border border-gray-100 dark:border-gray-800">
                      <div className="text-4xl sm:text-5xl font-mono font-bold text-primary mb-2">{philosophy.stat}</div>
                      <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-500">{philosophy.statLabel}</div>
                  </div>
              </div>
              
              {/* Visual: Code vs Architecture */}
              <div className="relative h-[350px] sm:h-[500px] bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 reveal-scale delay-200 group">
                  {/* Abstract Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                          <div className="absolute inset-0 border-4 border-dashed border-gray-300 dark:border-primary/50 rounded-full animate-spin-slow"></div>
                          <div className="absolute inset-4 border-4 border-dashed border-gray-400 dark:border-blue-500/50 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                              <span className="material-symbols-outlined text-5xl sm:text-6xl text-gray-400 dark:text-white drop-shadow-lg">hub</span>
                          </div>
                      </div>
                  </div>
                  {/* Floating labels */}
                  <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-white dark:bg-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md text-[10px] sm:text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-300 animate-float">Scalability</div>
                  <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 bg-white dark:bg-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md text-[10px] sm:text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-300 animate-float" style={{animationDelay: '1s'}}>Reliability</div>
              </div>
          </div>
      </section>

      {/* 4. LIVE OPS (Refined Terminal & Light Mode Support) */}
      <section className="py-20 sm:py-32 bg-white dark:bg-black text-gray-900 dark:text-white relative transition-colors duration-500">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="mb-12 sm:mb-16 text-center reveal-up">
                  <span className="text-primary font-bold tracking-widest uppercase text-xs">Total Observability</span>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">Infrastructure as Code</h2>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* Terminal Window - Premium Look */}
                  <div className="lg:col-span-2 bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden font-mono text-sm reveal-up transform transition-transform hover:scale-[1.01] duration-500 ring-1 ring-black/5 dark:ring-white/10 order-2 lg:order-1">
                      {/* Window Controls */}
                      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-[#3e3e3e]">
                          <div className="flex gap-2">
                              <div className="w-3 h-3 bg-[#FF5F56] rounded-full hover:bg-[#FF5F56]/80 transition-colors cursor-pointer"></div>
                              <div className="w-3 h-3 bg-[#FFBD2E] rounded-full hover:bg-[#FFBD2E]/80 transition-colors cursor-pointer"></div>
                              <div className="w-3 h-3 bg-[#27C93F] rounded-full hover:bg-[#27C93F]/80 transition-colors cursor-pointer"></div>
                          </div>
                          <div className="text-xs text-gray-500 font-medium">bash — 80x24</div>
                          <div className="w-10"></div> {/* Spacer */}
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 sm:p-6 h-[300px] sm:h-[400px] overflow-y-auto custom-scrollbar">
                          <div className="text-gray-400 mb-4 text-xs sm:text-sm">Last login: {new Date().toDateString()} on ttys000</div>
                          {terminalLines.map((line, i) => (
                              <div key={i} className="mb-1.5 font-medium tracking-wide text-xs sm:text-sm break-words">
                                  <span className="text-green-400 mr-2">➜</span>
                                  <span className="text-blue-400">~</span>
                                  <span className="text-gray-300 ml-2">{line}</span>
                              </div>
                          ))}
                          <div className="flex items-center mt-2">
                              <span className="text-green-400 mr-2">➜</span>
                              <span className="text-blue-400">~</span>
                              <span className="ml-2 w-2.5 h-5 bg-gray-400 animate-pulse block"></span>
                          </div>
                      </div>
                  </div>

                  {/* Metrics Cards - Adaptive Colors */}
                  <div className="space-y-4 sm:space-y-6 reveal-up stagger-1 order-1 lg:order-2">
                      <div className="bg-white dark:bg-[#0B0F19] p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                          <div className="flex justify-between items-start mb-4">
                              <span className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-bold">Deployment Time</span>
                              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                  <i className="fas fa-rocket text-primary group-hover:text-white"></i>
                              </div>
                          </div>
                          <p className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">45s</p>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium flex items-center gap-1">
                              <i className="fas fa-arrow-down"></i> 85% reduction
                          </p>
                      </div>

                      <div className="bg-white dark:bg-[#0B0F19] p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1">
                          <div className="flex justify-between items-start mb-4">
                              <span className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-bold">Auto-Scaling</span>
                              <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                  <i className="fas fa-layer-group text-blue-500 group-hover:text-white"></i>
                              </div>
                          </div>
                          <p className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Instant</p>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium flex items-center gap-1">
                              <i className="fas fa-bolt"></i> Event-driven
                          </p>
                      </div>

                      <div className="bg-white dark:bg-[#0B0F19] p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1">
                          <div className="flex justify-between items-start mb-4">
                              <span className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-bold">Security Score</span>
                              <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                  <i className="fas fa-shield-alt text-purple-500 group-hover:text-white"></i>
                              </div>
                          </div>
                          <p className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">A+</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">
                              ISO 27001 Compliant
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. PROCESS TIMELINE */}
      <section className="py-20 sm:py-24 bg-gray-50 dark:bg-[#0B0F19] relative border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-16 sm:mb-20 reveal-up">
                  <span className="text-primary font-bold tracking-widest uppercase text-sm">The Roadmap</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mt-2">From Audit to Automation</h2>
              </div>

              <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-800 transform md:-translate-x-1/2"></div>

                  <div className="space-y-16 sm:space-y-24">
                      {steps.map((step, index) => (
                          <div key={index} className={`relative flex flex-col md:flex-row gap-6 sm:gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} reveal-up group`}>
                              
                              {/* Icon Marker */}
                              <div className="absolute left-6 sm:left-8 md:left-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-gray-900 border-4 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-xl">
                                  <span className="material-symbols-outlined text-xl sm:text-3xl text-gray-400 group-hover:text-primary transition-colors">{step.icon}</span>
                              </div>

                              {/* Content Card */}
                              <div className="ml-16 sm:ml-24 md:ml-0 md:w-1/2 p-0 sm:p-4 w-[calc(100%-64px)] sm:w-[calc(100%-96px)] md:w-1/2">
                                  <div className={`bg-white dark:bg-[#1F2937] p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 relative group-hover:-translate-y-2 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                      <div className={`absolute top-0 left-0 w-2 h-full rounded-l-2xl 
                                          ${step.color === 'blue' ? 'bg-blue-500' : ''}
                                          ${step.color === 'purple' ? 'bg-purple-500' : ''}
                                          ${step.color === 'orange' ? 'bg-orange-500' : ''}
                                          ${step.color === 'green' ? 'bg-green-500' : ''}
                                      `}></div>
                                      <span className="text-4xl sm:text-6xl font-black text-gray-100 dark:text-gray-800 absolute top-4 right-4 z-0 pointer-events-none select-none transition-colors">{step.id}</span>
                                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 relative z-10">{step.title}</h3>
                                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10 text-xs sm:text-sm">
                                          {step.description}
                                      </p>
                                  </div>
                              </div>
                              
                              {/* Spacer for alignment */}
                              <div className="hidden md:block md:w-1/2"></div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* 6. DEFENSE IN DEPTH (Light Mode Friendly) */}
      <section className="py-20 sm:py-32 bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 overflow-hidden transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="reveal-up order-2 lg:order-1">
                      {/* 3D Layers Visual - Refined for Light Mode */}
                      <div className="relative h-[300px] sm:h-[400px] w-full perspective-1000 group max-w-[500px] mx-auto lg:max-w-none">
                          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-xl transform rotate-x-12 translate-y-0 scale-90 border border-gray-300 dark:border-gray-700 opacity-60 shadow-xl flex items-center justify-center transition-transform group-hover:translate-y-4">
                              <span className="text-gray-500 font-bold uppercase tracking-widest text-xs sm:text-base">Physical Layer</span>
                          </div>
                          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl transform rotate-x-12 -translate-y-8 sm:-translate-y-12 scale-95 border border-gray-300 dark:border-gray-600 opacity-80 shadow-xl flex items-center justify-center z-10 transition-transform group-hover:-translate-y-8">
                              <span className="text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest text-xs sm:text-base">Network Layer</span>
                          </div>
                          <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl transform rotate-x-12 -translate-y-16 sm:-translate-y-24 scale-100 border border-primary/50 dark:border-primary/50 opacity-100 shadow-glow flex items-center justify-center z-20 transition-transform group-hover:-translate-y-20">
                              <div className="text-center">
                                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                      <i className="fas fa-shield-alt text-2xl sm:text-4xl text-primary"></i>
                                  </div>
                                  <p className="text-gray-900 dark:text-white font-bold uppercase tracking-widest text-xs sm:text-base">Application Layer</p>
                                  <p className="text-[10px] sm:text-xs text-primary mt-1 font-bold">Active Protection</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="reveal-up order-1 lg:order-2 text-center lg:text-left">
                      <span className="text-purple-600 dark:text-purple-500 font-bold tracking-widest uppercase text-sm">Security First</span>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mt-2 mb-6">Defense in Depth</h2>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                          Security isn't a feature; it's physics. We implement zero-trust architecture at every level of the stack. Identity-aware proxies, end-to-end encryption, and automated compliance checks ensuring your data is bulletproof.
                      </p>
                      <ul className="space-y-4 inline-block text-left">
                          <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                              <i className="fas fa-check-circle text-green-500"></i> SOC 2 Type II Ready
                          </li>
                          <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                              <i className="fas fa-check-circle text-green-500"></i> Automated Penetration Testing
                          </li>
                          <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                              <i className="fas fa-check-circle text-green-500"></i> DDoS Mitigation at Edge
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. STRATEGIC PILLARS */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 reveal-up">
          <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">Core Pillars</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8 sm:p-10 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl dark:shadow-none hover:border-gray-300 dark:hover:border-gray-600">
                      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 dark:bg-white/5 rounded-bl-full transition-transform group-hover:scale-150 duration-700"></div>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md">
                          <span className="material-symbols-outlined text-2xl sm:text-3xl text-primary dark:text-white">{pillar.icon}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-4">{pillar.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                          {pillar.desc}
                      </p>
                  </div>
              ))}
          </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="relative py-24 sm:py-32 bg-primary text-white overflow-hidden text-center reveal-up">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          
          <div className="max-w-3xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-6 sm:mb-8 leading-none">
                  READY TO<br/>ARCHITECT?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 sm:mb-12 font-light">
                  Stop patching the old. Start building the new.
              </p>
              <button className="bg-white text-primary px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300 shadow-2xl transform hover:scale-105 text-sm sm:text-base">
                  Schedule Audit
              </button>
          </div>
      </section>

    </div>
  );
};

export default StrategyPage;
