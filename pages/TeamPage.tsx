
import React, { useEffect, useState } from 'react';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';

const TEAM = [
  {
    name: 'Abdullah Al Robin',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    color: 'from-blue-500 to-cyan-500',
    bio: 'Visionary leader with over 15 years of experience in enterprise software architecture and digital transformation strategies.'
  },
  {
    name: 'Hridoy Zaman',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    color: 'from-purple-500 to-pink-500',
    bio: 'Expert in operational scalability and agile methodologies, driving the company\'s mission to deliver high-velocity solutions.'
  },
  {
    name: 'Fatima Begum',
    role: 'Lead Software Engineer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    color: 'from-green-500 to-emerald-500',
    bio: 'Full-stack architect specializing in cloud-native applications and microservices. Leads the core engineering team.'
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Senior Solutions Architect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
    color: 'from-orange-500 to-red-500',
    bio: 'Designing robust, secure, and scalable infrastructure for Fortune 500 clients. AWS and Azure certified professional.'
  },
  {
    name: 'Nusrat Jahan',
    role: 'Head of Digital Marketing',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    color: 'from-pink-500 to-rose-500',
    bio: 'Data-driven marketer focused on ROI and growth hacking. Expert in SEO, PPC, and omnichannel strategies.'
  },
  {
    name: 'Kamrul Hasan',
    role: 'DevOps Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    color: 'from-indigo-500 to-blue-500',
    bio: 'Automating deployment pipelines and ensuring 99.99% uptime. Master of Kubernetes and CI/CD workflows.'
  },
  {
    name: 'Aisha Siddiqua',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600',
    color: 'from-teal-500 to-green-500',
    bio: 'Crafting intuitive and accessible user experiences. Believes that good design is invisible and seamless.'
  },
  {
    name: 'Rahim Uddin',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    color: 'from-yellow-500 to-orange-500',
    bio: 'Pixel-perfect implementation of complex UIs using React and Tailwind. Obsessed with web performance and animation.'
  },
  {
    name: 'Sadia Islam',
    role: 'Content Strategist',
    image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=600',
    color: 'from-red-500 to-pink-500',
    bio: 'Weaving compelling narratives that resonate with audiences. Expert in technical copywriting and brand storytelling.'
  },
  {
    name: 'Arif Hossain',
    role: 'Motion Graphics',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=600',
    color: 'from-cyan-500 to-blue-500',
    bio: 'Bringing brands to life through dynamic motion and visual effects. Creating immersive visual experiences.'
  }
];

interface TeamMemberCardProps {
  member: typeof TEAM[0];
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group relative bg-white dark:bg-[#1a2231] rounded-2xl p-6 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-primary/50 cursor-pointer overflow-hidden reveal-up
                ${isExpanded ? 'shadow-[0_0_40px_rgba(240,90,40,0.15)] scale-[1.02]' : 'hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'}
            `}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image Area */}
      <div className="relative mx-auto w-40 h-40 mb-6 rounded-full p-1 bg-gradient-to-tr from-gray-200 to-white dark:from-gray-700 dark:to-gray-800 shadow-inner overflow-hidden">
        {/* Zoom/Parallax Effect on Scroll is handled by CSS class 'parallax-img' via LazyImage or custom transform here */}
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <LazyImage
            src={member.image}
            alt={member.name}
            className="w-full h-full rounded-full"
            imgClassName="object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Social Icons Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 rounded-full z-10">
          <button className="w-10 h-10 bg-white text-[#0077b5] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
            <i className="fab fa-linkedin-in text-lg"></i>
          </button>
          <button className="w-10 h-10 bg-white text-[#1DA1F2] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100">
            <i className="fab fa-twitter text-lg"></i>
          </button>
        </div>
      </div>

      {/* Text Info */}
      <div className="text-center relative z-10 flex flex-col items-center">
        <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
          {member.role}
        </p>

        {/* Expand Indicator */}
        <div className={`mt-2 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-primary text-white' : 'group-hover:bg-primary/10 group-hover:text-primary'}`}>
          <i className="fas fa-chevron-down text-xs"></i>
        </div>

        {/* Expandable Bio */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${isExpanded ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
        >
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light border-t border-gray-100 dark:border-gray-800 pt-4">
            {member.bio}
          </p>
        </div>
      </div>

      {/* Glow Effect Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
};

const TeamPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Our Team" description="Meet the talented creatives and engineers behind THYNKIT." />
      <div className="bg-gray-50 dark:bg-[#111827] min-h-screen pb-20 transition-colors duration-500 overflow-hidden">

        {/* Header Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="absolute top-0 right-0 p-20 opacity-20 hidden lg:block pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 200 200" className="animate-spin-slow">
              <path d="M100 0 A 100 100 0 0 1 100 200 A 100 100 0 0 1 100 0" stroke="currentColor" fill="none" strokeDasharray="10 10" className="text-gray-400 dark:text-gray-600" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-primary">✦</div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10 reveal-up">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Our Team</span>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-gray-900 dark:text-white mb-6">
              Meet our talented<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">creatives</span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Meet the whole team that works behind the scenes for your success. We are a diverse group of thinkers, builders, and dreamers.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {TEAM.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} index={idx} />
            ))}
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="mt-20 px-6">
          <div className="max-w-5xl mx-auto bg-black rounded-3xl p-12 md:p-20 text-center relative overflow-hidden reveal-up">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px]"></div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 relative z-10">
              Want to join <span className="uppercase">TH<span className="inline-block transform scale-y-[-1] text-primary">Y</span>NKIT</span>?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg relative z-10">
              Find a team of digital marketers you can rely on. Every day, we build trust through communication, transparency, and results.
            </p>
            <a href="/contact" className="inline-block bg-[#6EE7B7] text-black font-bold py-4 px-10 rounded-lg hover:bg-white transition-colors duration-300 shadow-glow uppercase tracking-widest relative z-10">
              Contact Us
            </a>

            {/* Decorative Dashed Line */}
            <div className="absolute bottom-10 left-10 hidden md:block opacity-50">
              <svg width="200" height="50">
                <path d="M0 50 Q 50 0, 200 50" stroke="white" fill="none" strokeDasharray="5 5" />
              </svg>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default TeamPage;
