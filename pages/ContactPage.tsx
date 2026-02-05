import React, { useState } from 'react';
import SEO from '../components/SEO';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with THYNKIT for enterprise IT solutions and infrastructure consulting." />

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Contact Info & Interactive Elements */}
          <div className="lg:col-span-5 space-y-12 reveal-up">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Get In Touch</span>
              <h1 className="text-5xl md:text-7xl font-heading font-black text-gray-900 dark:text-white mb-8 leading-[0.9]">
                Let's Build<br />The Future.
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                Ready to engineer your digital evolution? Our architects are standing by to audit your infrastructure and map your growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">General Inquiries</h3>
                  <a href="mailto:info@thynkit.com" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">info@thynkit.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <i className="fas fa-shield-alt text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">24/7 Ops Center</h3>
                  <span className="text-gray-500 dark:text-gray-400">Premium Support Clients Only</span>
                </div>
              </div>
            </div>

            {/* Floating Map Card */}
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group perspective-1000">
              <div className="absolute inset-0 bg-gray-900 transform transition-transform duration-700 group-hover:scale-110">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                  className="w-full h-full object-cover opacity-60"
                  alt="Skyscraper HQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-primary font-bold uppercase tracking-widest text-xs mb-1">Global HQ</p>
                    <p className="text-2xl font-bold text-white">Silicon Valley</p>
                    <p className="text-gray-400 text-sm mt-1">123 Tech Boulevard, CA 94025</p>
                  </div>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                    <i className="fas fa-location-arrow transform -rotate-45"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Form */}
          <div className="lg:col-span-7 bg-white/80 dark:bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-white/10 reveal-up stagger-1">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-8">Initiate Protocol</h2>

            {status === 'success' ? (
              <div className="bg-green-50/50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-10 rounded-2xl text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <i className="fas fa-check text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Transmission Received</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">Our intelligence team is reviewing your request. Expect a secure uplink within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-primary font-bold hover:text-primary-hover uppercase tracking-widest text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-primary transition-colors">Name</label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full bg-gray-50 dark:bg-white/5 border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-white/10'} rounded-xl py-4 px-6 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all`}
                      value={formData.name}
                      placeholder="Enter your name"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-primary transition-colors">Email</label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full bg-gray-50 dark:bg-white/5 border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-white/10'} rounded-xl py-4 px-6 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all`}
                      value={formData.email}
                      placeholder="business@company.com"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-primary transition-colors">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full bg-gray-50 dark:bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-white/10'} rounded-xl py-4 px-6 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all`}
                    value={formData.subject}
                    placeholder="Project Inquiry / Partnership"
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1">{errors.subject}</p>}
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-primary transition-colors">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full bg-gray-50 dark:bg-white/5 border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-white/10'} rounded-xl py-4 px-6 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none`}
                    value={formData.message}
                    placeholder="Tell us about your infrastructure challenges..."
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full bg-gradient-to-r from-primary to-orange-600 hover:from-primary-hover hover:to-primary text-white font-bold py-5 rounded-xl uppercase tracking-[0.2em] shadow-lg hover:shadow-[0_0_30px_rgba(240,90,40,0.4)] hover:-translate-y-1 transition-all duration-300 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fas fa-circle-notch fa-spin"></i> Encrypting & Sending...
                    </span>
                  ) : 'Launch Inquiries'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Next Steps Timeline */}
        <div className="mt-24 md:mt-32 border-t border-gray-200 dark:border-gray-800 pt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">What Happens Next?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Review', desc: 'We analyze your request within 24 hours.' },
              { step: '02', title: 'Discovery', desc: 'A 30-min strategy call to align goals.' },
              { step: '03', title: 'Proposal', desc: 'A tailored roadmap and scope of work.' },
              { step: '04', title: 'Launch', desc: 'We deploy resources and start building.' }
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-xl font-bold text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-glow mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                {i !== 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;