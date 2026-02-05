
import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import ThreeDViewer from '../components/ThreeDViewer';
import { SERVICES } from '../data';

const DraggableCarousel = ({ items }: { items: typeof SERVICES }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [velocity, setVelocity] = React.useState(0);
  const requestRef = React.useRef<number>();
  const isDragging = React.useRef(false);
  const lastX = React.useRef(0);

  // Auto-scroll loop
  const animate = React.useCallback(() => {
    if (scrollRef.current) {
      if (!isDown) {
        // Auto-scroll logic or momentum
        if (Math.abs(velocity) > 0.1) {
          scrollRef.current.scrollLeft += velocity;
          setVelocity(v => v * 0.95); // Friction
        } else {
          scrollRef.current.scrollLeft += 1; // Base auto-scroll speed
        }

        // Infinite Loop Reset
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth / 2)) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [isDown, velocity]);

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [animate]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    isDragging.current = true;
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
      lastX.current = e.pageX;
    }
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    setIsDown(false);
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    const vel = e.pageX - lastX.current;
    lastX.current = e.pageX;
    setVelocity(-vel); // Inverse velocity for natural throw
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch Events support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDown(true);
    isDragging.current = true;
    if (scrollRef.current) {
      setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
      lastX.current = e.touches[0].pageX;
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDown || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const vel = e.touches[0].pageX - lastX.current;
    lastX.current = e.touches[0].pageX;
    setVelocity(-vel);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }

  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-black to-transparent z-10 pointer-events-none"></div>

      <div
        ref={scrollRef}
        className="flex gap-8 py-8 px-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
        style={{ width: '100%', scrollBehavior: 'auto' }}
      >
        {/* Duplicated for loop */}
        {[...items, ...items, ...items].map((service, index) => (
          <div
            key={`${service.id}-${index}`}
            className="flex-shrink-0 w-[300px] md:w-[400px] bg-white dark:bg-[#111] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:border-primary/50 group/card flex flex-col select-none"
          >
            <div className="h-56 overflow-hidden relative pointer-events-none">
              <LazyImage
                src={service.image}
                alt={service.title}
                className="w-full h-full"
                imgClassName="transition-transform duration-700 group-hover/card:scale-110"
                placeholderColor="bg-gray-100 dark:bg-gray-800"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                <span className="text-[10px] bg-primary text-white font-bold px-2 py-1 rounded uppercase tracking-tighter">Region {index % 6 + 1}</span>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors">
                  <i className="fas fa-arrow-right text-xs"></i>
                </div>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col pointer-events-none">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center text-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-gray-900 dark:text-white text-lg transition-colors">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-6 font-medium italic flex-1">"{service.shortDescription}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  // Client Logos Data
  const clients = [
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Google Cloud', icon: 'fab fa-google' },
    { name: 'Microsoft Azure', icon: 'fab fa-microsoft' },
    { name: 'Oracle', icon: 'fas fa-server' },
    { name: 'Cisco', icon: 'fas fa-network-wired' },
    { name: 'IBM', icon: 'fas fa-microchip' },
    { name: 'Intel', icon: 'fas fa-memory' },
    { name: 'Nvidia', icon: 'fas fa-brain' }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-[#1F2937] rounded-2xl overflow-hidden shadow-soft border border-gray-100 dark:border-gray-700 reveal-up">
        <div className="grid lg:grid-cols-2 gap-0 relative">
          <div className="relative group h-[33vh] lg:h-[500px] overflow-hidden parallax-wrapper">
            <LazyImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnnPGx675hBo1Ip9A9SfaCrh_vT-LcEq23gdYuFoMl0ozK7_zoUlL8TMJr1PlJ8KOeXNtANFzibuX_k_XcczrzujTlQElgHzz6YjJLIOOQuYo_ufYEeH78dTPZw6UpmktFjYAEgRZ2lZp7KNS8_4_0NkCdXGmlSaZ6M7arxPNj9uo7t6QfA95tzXpGb_KdQ1-CxC0C6AzXGFts-zza1BN-ob7k1u9rWZpkWLdIFBtyjDTW2RJb9dcUwBKfj3gQR820dH-baZAuoAA"
              alt="Messy server room with tangled wires"
              className="absolute inset-0 w-full h-full"
              imgClassName="object-cover filter grayscale group-hover:grayscale-0 transition duration-700 parallax-img scale-110"
              placeholderColor="bg-gray-800"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-8 text-center">
              <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded mb-4 uppercase tracking-widest animate-pulse">Legacy Bottlenecks</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 uppercase leading-tight">IT Infrastructure<br />Reloaded</h2>
              <p className="text-gray-400 max-w-sm text-sm">Fragmented legacy systems holding back your business growth.</p>
            </div>
          </div>
          <div className="relative group h-[33vh] lg:h-[500px] overflow-hidden border-l border-white/10 parallax-wrapper">
            <LazyImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdB6gDuIKfnsIaPfuN1oIm9v1ziXVNqtsqevto_Jp2oldN74G-JDWxgMjj-I2-9Y-DnyvUnLTZVgH3ZjxFOFpfcFUcOzmWQqhGhrUAZb4u0N2lg13yMvQFXPHco7-p2MuYpKO825HE4GZTLi2I1BkLJXMrfP6ipaIo0U_2Ny-domde5mN85IEJhDPlGRMRdJBwnlICLe92rh58yV4HJD11F7_AbLcdsqjaBYjoqGDlXPyOAMa29XgcP0cjJWwZbmaMYR7m4DGMaJA"
              alt="Modern clean data center with blue lights"
              className="absolute inset-0 w-full h-full"
              imgClassName="object-cover transition-transform duration-[20s] ease-in-out scale-100 hover:scale-110 animate-[float_20s_infinite_alternate]"
              placeholderColor="bg-gray-900"
            />
            <div className="absolute inset-0 bg-primary/80 flex flex-col justify-center items-center p-8 text-center mix-blend-multiply"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center z-10">
              <div className="bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded mb-4 uppercase tracking-widest shadow-glow">Agile Ecosystems</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 uppercase leading-tight">Scalable Cloud<br />Dominance</h2>
              <p className="text-white/90 max-w-sm text-sm">Multilayered, high-performance IT architecture by THYNKIT.</p>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 z-30 hidden lg:block reveal-scale stagger-5">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-4 rounded-xl shadow-2xl max-w-xs border border-white/20 hover:scale-105 transition duration-300 cursor-pointer group/card">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg group-hover/card:bg-primary/20 transition-colors">
                  <i className="fas fa-microchip text-primary text-xl"></i>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-primary font-bold uppercase tracking-wider mb-0.5">Systems Highlight</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white leading-snug">Hybrid Cloud: Bridging Efficiency & Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black dark:bg-gray-900 text-white text-center py-5 px-4 relative z-20 flex items-center justify-center">
          <p className="font-heading font-bold text-base md:text-lg tracking-[0.1em] uppercase">The Old Way <span className="text-primary mx-3 italic">vs.</span> The <span className="uppercase">TH<span className="inline-block transform scale-y-[-1] text-primary">Y</span>NKIT</span> Way</p>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Architecting Your Digital Future</h2>
          <p className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white">Why Modern Enterprises Choose THYNKIT</p>
        </div>
        <div className="relative grid md:grid-cols-3 gap-0 max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-200 dark:border-gray-700 -translate-y-24 z-0"></div>

          <div className="relative z-10 flex flex-col items-center px-6 reveal-up stagger-1">
            <div className="w-20 h-20 mb-8 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-sm border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform duration-300">
              <div className="flex flex-wrap justify-center gap-1.5 p-3">
                <span className="material-symbols-outlined text-2xl text-gray-400">lan</span>
                <span className="material-symbols-outlined text-2xl text-gray-400">cloud_off</span>
                <span className="material-symbols-outlined text-2xl text-gray-400">link_off</span>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">Fragmented Systems</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                Competitors offer siloed tools and high maintenance, leaving your team reactive rather than strategic.
              </p>
            </div>
          </div>

          <div className="relative z-20 flex flex-col items-center px-6 mt-12 md:mt-0 reveal-up stagger-2">
            <div className="w-24 h-24 mb-8 rounded-full bg-primary flex items-center justify-center shadow-glow border-4 border-white dark:border-black transform -translate-y-4 hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-network-wired text-white text-3xl"></i>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-primary uppercase tracking-tight">THYNKIT Unified Stack</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium max-w-xs mx-auto">
                The Bridge: We consolidate legacy debt into a seamless, multilayered ecosystem designed for speed and security.
              </p>
            </div>
            <div className="mt-6 hidden md:block">
              <i className="fas fa-chevron-right text-primary opacity-20 text-3xl"></i>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 mt-12 md:mt-0 reveal-up stagger-3">
            <div className="w-20 h-20 mb-8 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center shadow-sm border border-green-100 dark:border-green-800 hover:scale-110 transition-transform duration-300">
              <div className="flex flex-wrap justify-center gap-1.5 p-3">
                <span className="material-symbols-outlined text-2xl text-green-500">speed</span>
                <span className="material-symbols-outlined text-2xl text-green-500">rocket_launch</span>
                <span className="material-symbols-outlined text-2xl text-green-500">monitoring</span>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">Hyper-Scaled Performance</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                Your business, accelerated. High availability and automated orchestration powering your global operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section - Draggable & Auto-Scrolling */}
      <section className="py-12 reveal-up overflow-hidden select-none">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.3em]">Our Expertise</span>
          <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mt-4">Multilayered Digital Solutions</h2>
        </div>

        <DraggableCarousel items={SERVICES} />
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto reveal-scale">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-xl p-8 md:p-10 shadow-glow text-center transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-primary mb-2 uppercase">
            STOP SYSTEM DOWNTIME.
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
            START SCALING INFRASTRUCTURE.
          </h3>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
          <span className="font-bold text-primary">NEW:</span> THYNKIT introduces <span className="font-semibold text-gray-900 dark:text-white">AI-Optimized Ops</span> for enterprise scale. Transition from reactive firefighting to proactive, multilayered IT resilience.
        </p>
        <div className="pt-2">
          <a className="inline-flex items-center gap-2 text-primary font-semibold hover:underline uppercase text-sm tracking-widest" href="mailto:ops@thynkit.com">
            Request an infrastructure audit <i className="fas fa-arrow-right ml-2 text-xs"></i>
          </a>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-6 reveal-up">
          <h3 className="text-sm font-bold text-primary uppercase tracking-widest">The Transformation</h3>
          <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">Trapped in Legacy Architecture?</h2>
          <div className="prose prose-gray dark:prose-invert">
            <p>You've invested millions in technical debt that barely keeps the lights on. Imagine a shift where IT isn't a cost center, but a performance engine. <strong>Clear visibility. Total control.</strong></p>
            <p>No more midnight outages or security blind spots. Just a robust foundation built for the future of your enterprise.</p>
            <p className="font-medium">Experience the THYNKIT standard:</p>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mt-1">
                <i className="fas fa-check text-xs"></i>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white uppercase text-xs tracking-wider">NETWORK CLARITY</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total observability across your entire tech stack.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mt-1">
                <i className="fas fa-shield-alt text-xs"></i>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white uppercase text-xs tracking-wider">SECURITY CONTROL</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Zero-trust architecture protecting every endpoint.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mt-1">
                <i className="fas fa-gem text-xs"></i>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white uppercase text-xs tracking-wider">INFRASTRUCTURE CONFIDENCE</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">High availability by design, not by chance.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white dark:bg-[#1F2937] rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col h-full transform transition hover:-translate-y-1 reveal-scale stagger-2">
          {/* Integrated 3D Viewer for High Tech Feel */}
          <div className="relative h-64 overflow-hidden bg-gray-900">
            <div className="absolute inset-0">
              <ThreeDViewer color="#F05A28" />
            </div>
            <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded shadow pointer-events-none">NEXT COHORT: Q3 2025</div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20 pointer-events-none">
              <h4 className="text-white font-bold text-lg uppercase">Systems Architecture Bootcamp</h4>
              <p className="text-yellow-400 text-sm italic">For Enterprise CTOs & Lead Architects</p>
            </div>
          </div>
          <div className="p-8 flex-grow">
            <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400 text-sm font-medium">
              <i className="fas fa-microchip text-primary"></i> Silicon Valley Hub
              <span className="mx-2">•</span> 3-Day Intensive
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              Join elite IT leaders to master the migration from legacy to multilayered ecosystems. Learn the THYNKIT methodology firsthand.
            </p>
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <p><i className="fas fa-calendar-alt w-5 text-center mr-2"></i> Oct 15-17, 2025</p>
              <p><i className="fas fa-users w-5 text-center mr-2"></i> Limited to 15 Tier-1 Organizations</p>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 border-t border-gray-100 dark:border-gray-700">
            <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded font-bold uppercase text-xs tracking-widest hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors">
              Apply for Invitation
            </button>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16">
        <div className="mb-12 reveal-up">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Our Workflow</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white">The THYNKIT Deployment <span className="text-primary">Process</span></h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl text-lg">We architect with precision. No guesswork, just documented engineering milestones.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 dark:bg-gray-800 z-0"></div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative z-10 flex flex-col items-start group reveal-up stagger-1">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100/50 dark:border-blue-800/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-blue-500">search_check</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white dark:border-black">1</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-tighter">Systems Audit</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">A deep dive into your current environment to identify risks and bottlenecks.</p>
            </div>
            <div className="relative z-10 flex flex-col items-start group reveal-up stagger-2">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center shadow-sm border border-purple-100/50 dark:border-purple-800/50 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-purple-500">architecture</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white dark:border-black">2</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-tighter">Architecture Blueprint</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Designing the multilayered roadmap for your future-proof IT ecosystem.</p>
            </div>
            <div className="relative z-10 flex flex-col items-start group reveal-up stagger-3">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-pink-50 dark:bg-pink-900/20 rounded-2xl flex items-center justify-center shadow-sm border border-pink-100/50 dark:border-pink-800/50 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-pink-500">settings_suggest</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white dark:border-black">3</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-tighter">Agile Deployment</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Zero-downtime integration of new protocols and infrastructure layers.</p>
            </div>
            <div className="relative z-10 flex flex-col items-start group reveal-up stagger-4">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center shadow-sm border border-orange-100/50 dark:border-orange-800/50 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-orange-500">support_agent</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white dark:border-black">4</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-tighter">24/7 Managed Ops</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Continuous monitoring, optimization, and expert support around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Verified Direct Video Link */}
      <section className="space-y-6 reveal-up">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">Client Success Story</h2>
            <p className="text-primary font-medium">Inside the Digital Transformation</p>
          </div>
          <div className="hidden md:block h-px flex-grow bg-gray-200 dark:bg-gray-700 ml-8 mb-2"></div>
        </div>
        <div className="relative w-full aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
          {/* Using a verified direct MP4 link to avoid external configuration errors */}
          <CustomVideoPlayer
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            poster="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"
          />
        </div>
      </section>

      {/* Client Logos Section (Animated Carousel) */}
      <section className="py-12 bg-gray-50 dark:bg-[#111827] border-y border-gray-100 dark:border-gray-800 rounded-xl reveal-up overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">Trusted By Industry Leaders</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 dark:from-[#111827] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 dark:from-[#111827] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="flex items-center gap-3 mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300 group cursor-pointer">
                <i className={`${client.icon} text-3xl md:text-4xl text-gray-700 dark:text-white group-hover:text-primary transition-colors`}></i>
                <span className="font-heading font-bold text-xl text-gray-700 dark:text-white hidden md:block">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-surface-light dark:bg-[#1F2937] py-20 border-t border-gray-200 dark:border-gray-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">Enterprise IT Solutions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic">Scale with precision through THYNKIT's specialized operational layers.</p>
            <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/services/website-design-development" className="group relative bg-white dark:bg-black rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 block hover:scale-105 hover:shadow-glow hover:border-primary transition-all duration-300 reveal-up stagger-1">
              <div className="aspect-[4/3] overflow-hidden">
                <LazyImage
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
                  alt="Corporate Office"
                  className="w-full h-full"
                  imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary group-hover:animate-pulse">web</span>
                  <h3 className="font-bold text-gray-900 dark:text-white uppercase text-sm tracking-wide">Website Design</h3>
                </div>
                <p className="text-[11px] text-primary font-bold uppercase mb-2">Immersive Experiences</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Crafting high-performance websites that blend aesthetics with functionality.</p>
              </div>
            </Link>

            <Link to="/services/app-development" className="group relative bg-white dark:bg-black rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 block hover:scale-105 hover:shadow-glow hover:border-primary transition-all duration-300 reveal-up stagger-2">
              <div className="aspect-[4/3] overflow-hidden relative">
                <LazyImage
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070"
                  alt="App Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary group-hover:animate-pulse">smartphone</span>
                  <h3 className="font-bold text-gray-900 dark:text-white uppercase text-sm tracking-wide">App Development</h3>
                </div>
                <p className="text-[11px] text-primary font-bold uppercase mb-2">Native & Hybrid</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Engage your audience on the go with cutting-edge mobile applications.</p>
              </div>
            </Link>

            <Link to="/services/digital-marketing-seo" className="group relative bg-white dark:bg-black rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 block hover:scale-105 hover:shadow-glow hover:border-primary transition-all duration-300 reveal-up stagger-3">
              <div className="aspect-[4/3] overflow-hidden">
                <LazyImage
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
                  alt="Digital Marketing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary group-hover:animate-pulse">campaign</span>
                  <h3 className="font-bold text-gray-900 dark:text-white uppercase text-sm tracking-wide">Marketing & SEO</h3>
                </div>
                <p className="text-[11px] text-primary font-bold uppercase mb-2">Data-Driven Growth</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Amplify your brand visibility with targeted strategies and technical SEO.</p>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12 reveal-up">
            <Link to="/services/software-development" className="inline-block border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold py-3 px-8 rounded hover:bg-primary hover:border-primary hover:text-white dark:hover:bg-primary dark:hover:border-primary dark:hover:text-white transition-all duration-300 uppercase text-xs tracking-widest">
              Explore More Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
