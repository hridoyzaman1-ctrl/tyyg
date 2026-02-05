import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Terms & Conditions" description="Thynkit Terms of Service and Usage Agreement." />
      <div className="bg-gray-50 dark:bg-[#111827] min-h-screen py-20 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-[#1F2937] p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 reveal-up">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
              Terms & Conditions
            </h1>
            
            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <p>
                Please read these Terms & Conditions ("Terms", "Terms of Service") carefully before using the Thynkit website or services (the "Service") operated by Thynkit ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>

              <div className="space-y-8 mt-8">
                <section>
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">1. Services</h3>
                    <p>
                        By engaging Thynkit for IT, development, or marketing services, you agree to the specific scope of work defined in your service agreement or contract. Thynkit reserves the right to refuse service to anyone for any reason at any time.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">2. Intellectual Property</h3>
                    <p>
                        The Service and its original content, features, and functionality are and will remain the exclusive property of Thynkit and its licensors. The Service is protected by copyright, trademark, and other laws of both Bangladesh and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Thynkit.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">3. User Responsibilities</h3>
                    <p>
                        You agree not to use the Service for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Service in any way that could damage the Service, the business of Thynkit, or the experience of other users.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>You must not reverse engineer, reproduce, publish, or distribute derivative works from our content.</li>
                        <li>You must not use automated systems or software to extract data from our website (web scraping).</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">4. Limitation of Liability</h3>
                    <p>
                        In no event shall Thynkit, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">5. Disclaimer</h3>
                    <p>
                        Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">6. Governing Law</h3>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of Dhaka, Bangladesh, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">7. Changes</h3>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">8. Contact Us</h3>
                    <p>
                        If you have any questions about these Terms, please contact us:
                    </p>
                    <div className="bg-gray-50 dark:bg-black p-4 rounded mt-2 border-l-4 border-primary">
                        <p className="font-bold">Thynkit</p>
                        <p>Dhaka, Bangladesh</p>
                        <a href="mailto:info@thynkit.com" className="text-primary hover:underline">info@thynkit.com</a>
                    </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
