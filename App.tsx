import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import GenericPage from './pages/GenericPage';
import WhyThynkit from './pages/WhyThynkit';
import StrategyPage from './pages/StrategyPage';
import ServicesHub from './pages/ServicesHub';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import TeamPage from './pages/TeamPage';
import { ABOUT_CONTENT } from './data';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          
          <Route path="/about" element={<GenericPage data={ABOUT_CONTENT} />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          
          <Route path="/why-thynkit" element={<WhyThynkit />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
