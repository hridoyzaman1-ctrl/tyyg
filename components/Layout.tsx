
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SERVICES } from '../data';
import ChatBot from './ChatBot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  // Mobile Accordion States
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ title: string, path: string, type: string }[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Back to Top State
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll State for Sticky Header
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Initial dark mode check (system preference or default)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Animation & Parallax Logic
  useEffect(() => {
    // 1. Reveal on Scroll Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale');
    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Parallax Effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsScrolled(scrolled > 50);
      setShowBackToTop(scrolled > 500);

      // Disable Parallax on Mobile
      if (window.innerWidth < 768) return;

      const parallaxImages = document.querySelectorAll('.parallax-img');
      parallaxImages.forEach((img: any) => {
        const speed = img.dataset.speed || 0.05;
        const yPos = -(scrolled * speed);
        img.style.transform = `translateY(${yPos}px) scale(1.1)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 1) {
      const results = [
        // Static Pages
        { title: 'Home', path: '/', type: 'Page' },
        { title: 'About Us', path: '/about', type: 'Page' },
        { title: 'Our Team', path: '/team', type: 'Page' },
        { title: 'Strategy', path: '/strategy', type: 'Page' },
        { title: 'Contact', path: '/contact', type: 'Page' },
        // Services
        ...SERVICES.map(s => ({
          title: s.title,
          path: `/services/${s.slug}`,
          type: 'Service'
        }))
      ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const executeSearch = (path: string) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchQuery('');
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <div className={`min-h-screen flex flex-col font-display ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative z-50">
              <div className="mr-2 transform group-hover:rotate-12 transition-transform duration-500">
                <i className="fas fa-lightbulb text-3xl text-primary animate-pulse-slow"></i>
              </div>
              <span className="text-2xl font-heading font-black tracking-tighter text-gray-900 dark:text-white">
                TH<span className="inline-block transform scale-y-[-1] text-primary">Y</span>NKIT
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              <Link to="/" className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Home</Link>

              <Link to="/why-thynkit" className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Why THYNKIT?</Link>

              <Link to="/strategy" className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Our Strategy</Link>

              <Link to="/services" className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Services Hub</Link>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsServiceDropdownOpen(true)}
                onMouseLeave={() => setIsServiceDropdownOpen(false)}
              >
                <button className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Services <i className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-300 ${isServiceDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {/* Mega Menu Dropdown */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white dark:bg-[#111827] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6 grid grid-cols-2 gap-4 transition-all duration-300 origin-top ${isServiceDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  {/* Arrow Pointer */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-[#111827] transform rotate-45 border-t border-l border-gray-100 dark:border-gray-700"></div>

                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group/item"
                    >
                      <span className="material-symbols-outlined text-primary group-hover/item:scale-110 transition-transform">{service.icon}</span>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-primary">{service.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{service.shortDescription}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-4 border-t border-gray-100 dark:border-gray-700 text-center">
                    <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">View All Services</Link>
                  </div>
                </div>
              </div>

              {/* About Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  About <i className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white dark:bg-[#111827] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 py-3 transition-all duration-300 origin-top ${isAboutDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-[#111827] transform rotate-45 border-t border-l border-gray-100 dark:border-gray-700"></div>

                  <Link to="/about" className="block px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800">About Us</Link>
                  <Link to="/team" className="block px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800">Our Team</Link>
                  <Link to="/privacy-policy" className="block px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800">Privacy Policy</Link>
                  <Link to="/terms-conditions" className="block px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800">Terms & Conditions</Link>
                </div>
              </div>

              <Link to="/contact" className="text-sm font-bold uppercase tracking-widest text-primary hover:text-primary-hover transition-colors">Contact</Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Search Toggle */}
              <div className="relative">
                <button onClick={toggleSearch} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                  <i className="fas fa-search text-lg"></i>
                </button>
                {/* Search Dropdown */}
                <div className={`absolute right-0 top-full mt-4 w-80 bg-white dark:bg-[#111827] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 transition-all duration-300 origin-top-right ${isSearchOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white"
                  />
                  {searchResults.length > 0 && (
                    <div className="mt-2 max-h-60 overflow-y-auto custom-scrollbar">
                      {searchResults.map((result, idx) => (
                        <div
                          key={idx}
                          onClick={() => executeSearch(result.path)}
                          className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded cursor-pointer group"
                        >
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary">{result.title}</span>
                          <span className="text-[10px] uppercase text-gray-400 border border-gray-200 dark:border-gray-700 px-1 rounded">{result.type}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Theme Toggle */}
              <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-4">
              <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-300">
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors p-2"
                aria-label="Open Menu"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HIGH VISIBILITY Mobile Menu Overlay - MOVED OUTSIDE NAV TO FIX SCROLLING BUG */}
      <div className={`fixed inset-0 z-[100] transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* SOLID Background - Ensuring Zero Blend Issues */}
        <div className="absolute inset-0 bg-white dark:bg-black"></div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col p-6 overflow-y-auto">

          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 dark:border-gray-800 pb-6">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 group">
              <i className="fas fa-lightbulb text-2xl text-primary"></i>
              <span className="text-2xl font-heading font-black tracking-tighter text-gray-900 dark:text-white">
                TH<span className="inline-block transform scale-y-[-1] text-primary">Y</span>NKIT
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white hover:bg-primary hover:text-white transition-all shadow-md group border border-gray-200 dark:border-gray-700"
              aria-label="Close Menu"
            >
              <i className="fas fa-times text-lg group-hover:rotate-90 transition-transform duration-300"></i>
            </button>
          </div>

          {/* Mobile Search */}
          <div className="relative mb-8">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"></i>
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-3 pl-12 pr-4 text-base font-medium text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-500"
            />
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50 max-h-60 overflow-y-auto">
                {searchResults.map((result, idx) => (
                  <div
                    key={idx}
                    onClick={() => executeSearch(result.path)}
                    className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 last:border-0 active:bg-gray-100 dark:active:bg-gray-800"
                  >
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{result.title}</span>
                    <i className="fas fa-chevron-right text-xs text-gray-400"></i>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Menu Links */}
          <div className="space-y-1 flex-grow">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-heading font-bold text-gray-900 dark:text-white py-4 border-b border-gray-100 dark:border-gray-800 hover:text-primary dark:hover:text-primary transition-colors">
              Home
            </Link>

            {/* Services Accordion - Improved Visibility */}
            <div className="border-b border-gray-100 dark:border-gray-800">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center py-4 text-xl font-heading font-bold text-gray-900 dark:text-white focus:outline-none"
              >
                Services
                <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 bg-primary text-white' : ''}`}>
                  <i className="fas fa-chevron-down text-sm"></i>
                </span>
              </button>

              {/* Dropdown Content Container */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileServicesOpen ? 'max-h-[60vh] pb-4' : 'max-h-0'}`}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl mt-2 p-2 border border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col">
                    {SERVICES.map(s => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-4 py-3 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-black hover:text-primary dark:hover:text-primary rounded-lg transition-all flex items-center justify-between group"
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
                          {s.title}
                        </span>
                        {/* Optional Arrow for UX */}
                        <i className="fas fa-arrow-right text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary"></i>
                      </Link>
                    ))}
                    <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 px-4 py-3 text-center text-sm font-bold text-white bg-primary rounded-lg uppercase tracking-wider shadow-sm hover:bg-primary-hover">
                      View Full Directory
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/why-thynkit" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-heading font-bold text-gray-900 dark:text-white py-4 border-b border-gray-100 dark:border-gray-800 hover:text-primary dark:hover:text-primary transition-colors">
              Why Thynkit?
            </Link>
            <Link to="/strategy" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-heading font-bold text-gray-900 dark:text-white py-4 border-b border-gray-100 dark:border-gray-800 hover:text-primary dark:hover:text-primary transition-colors">
              Our Strategy
            </Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-heading font-bold text-gray-900 dark:text-white py-4 border-b border-gray-100 dark:border-gray-800 hover:text-primary dark:hover:text-primary transition-colors">
              Services Hub
            </Link>

            {/* Company Accordion */}
            <div className="border-b border-gray-100 dark:border-gray-800">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex justify-between items-center py-4 text-xl font-heading font-bold text-gray-900 dark:text-white focus:outline-none"
              >
                Company
                <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180 bg-primary text-white' : ''}`}>
                  <i className="fas fa-chevron-down text-sm"></i>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileAboutOpen ? 'max-h-[300px] pb-4' : 'max-h-0'}`}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl mt-2 p-2 border border-gray-100 dark:border-gray-800 flex flex-col">
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-black hover:text-primary rounded-lg transition-colors">About Us</Link>
                  <Link to="/team" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-black hover:text-primary rounded-lg transition-colors">Our Team</Link>
                  <Link to="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-black hover:text-primary rounded-lg transition-colors">Privacy Policy</Link>
                  <Link to="/terms-conditions" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-black hover:text-primary rounded-lg transition-colors">Terms & Conditions</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-8">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full bg-black dark:bg-white text-white dark:text-black text-center font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity">
              Start a Project
            </Link>

            {/* Socials Mobile */}
            <div className="flex justify-center gap-8 mt-8 text-gray-400">
              <a href="#" className="hover:text-primary transition-colors p-2"><i className="fab fa-twitter text-2xl"></i></a>
              <a href="#" className="hover:text-primary transition-colors p-2"><i className="fab fa-linkedin text-2xl"></i></a>
              <a href="#" className="hover:text-primary transition-colors p-2"><i className="fab fa-github text-2xl"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* THYNKBot AI Assistant */}
      <ChatBot />

      {/* Footer - Black and Orange Theme */}
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center mb-4 group">
                <i className="fas fa-lightbulb text-2xl text-primary mr-2 transform group-hover:rotate-12 transition-transform"></i>
                <span className="text-xl font-heading font-black tracking-tighter text-white">
                  TH<span className="inline-block transform scale-y-[-1] text-primary">Y</span>NKIT
                </span>
              </Link>
              <p className="text-sm max-w-sm text-gray-400">
                Engineering the future of digital infrastructure. We build scalable, secure, and high-performance systems for the modern enterprise.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary uppercase tracking-wider mb-4 text-xs">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services/website-design-development" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link to="/services/app-development" className="hover:text-white transition-colors">App Development</Link></li>
                <li><Link to="/services/digital-marketing-seo" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link to="/services/graphics-design" className="hover:text-white transition-colors">Graphics Design</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary uppercase tracking-wider mb-4 text-xs">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} THYNKIT. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

    </div>
  );
};

export default Layout;
