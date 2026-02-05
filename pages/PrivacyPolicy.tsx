import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Privacy Policy" description="Thynkit Privacy Policy - How we collect, use, and protect your data." />
      <div className="bg-gray-50 dark:bg-[#111827] min-h-screen py-20 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-[#1F2937] p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
              Privacy Policy
            </h1>

            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <p>
                This privacy policy has been compiled to serve better those concerned with how their 'Personally Identifiable Information' (PII) is being used online. As described in privacy law and information security, PII is information that can be used on its own or with other information to identify, contact, or locate a single person or identify an individual in context. Please read our privacy policy carefully to understand how we collect, use, protect, or otherwise handle your Personally Identifiable Information per our website.
              </p>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">What personal information do we collect from the people who visit our blog, website, or app?</h3>
              <p>
                When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number, company name, or other details to help you with your experience.
              </p>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">When do we collect information?</h3>
              <p>
                We collect information when you subscribe to a newsletter, fill out a form, request a consultation, or enter information on our site. <strong>By providing a telephone number and submitting this form, you consent to be contacted by SMS text message. Message and data rates may apply. You can reply STOP to opt out of further messaging and get more help by sending HELP.</strong>
              </p>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">How do we use your information?</h3>
              <p>
                We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                <li>To improve our website in order to better serve you.</li>
                <li>To allow us to better service you in responding to your customer service requests.</li>
                <li>To administer a contest, promotion, survey, or other site feature.</li>
                <li>To send periodic emails regarding your order or other products and services.</li>
                <li>To follow up with them after correspondence (live chat, email or phone inquiries).</li>
              </ul>
              <p className="mt-4 text-sm italic">
                * No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">How do we protect your information?</h3>
              <p>
                Our website is regularly scanned for security holes and known vulnerabilities to ensure your visit is as safe as possible. We use regular Malware Scanning.
              </p>
              <p>
                Your personal information is stored in secured networks. It is only accessible to a limited number of persons with special access rights to such systems, and the data must be kept confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
              </p>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">Do we use 'cookies'?</h3>
              <p>
                We do not use cookies for tracking purposes. You can choose to have your computer warn you each time a cookie is being sent or to turn off all cookies. You do this through your browser settings. Since browsers are a little different, look at your browser's Help Menu to learn the correct way to modify your cookies. If you turn cookies off, some features that make your site experience more efficient will be disabled.
              </p>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">Third-party disclosure</h3>
              <p>
                We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">Third-party links</h3>
              <p>
                Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
              </p>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">Google</h3>
              <p>
                Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. We have implemented the following:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Google Display Network Impression Reporting</li>
                <li>Demographics and Interests Reporting</li>
              </ul>
              <p className="mt-2">
                We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.
              </p>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">Fair Information Practices</h3>
              <p>
                The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.
              </p>
              <p className="mt-2">
                In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:
                We will notify you via email within 7 business days.
              </p>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">CAN SPAM Act</h3>
              <p>
                The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.
              </p>
              <p className="mt-2 font-bold">We collect your email address in order to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Send information, respond to inquiries, and/or other requests or questions</li>
                <li>Process orders and to send information and updates pertaining to orders.</li>
                <li>Send you additional information related to your product and/or service</li>
                <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.</li>
              </ul>

              <h3 className="text-gray-900 dark:text-white font-bold mt-8 mb-4">Contacting Us</h3>
              <p>
                If there are any questions regarding this privacy policy, you may contact us using the information below.
              </p>
              <div className="bg-gray-50 dark:bg-black p-6 rounded-lg mt-4 border-l-4 border-primary">
                <p className="font-bold text-gray-900 dark:text-white">Thynkit Agency</p>
                <p>Dhaka, Bangladesh</p>
                <p className="mt-2">
                  <a href="mailto:info@thynkit.com" className="text-primary hover:underline">info@thynkit.com</a>
                </p>
                <p className="text-sm text-gray-500 mt-2">Last Edited on 2024-11-27</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
