import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetStartedModal from './components/Modals/GetStartedModal';
import AvinzAI from './components/AvinzAI';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

export const App = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    tab: 'quote',
    preselected: ''
  });

  const handleOpenGetStarted = (tab = 'quote', preselected = '') => {
    setModalState({
      isOpen: true,
      tab,
      preselected
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      
      {/* Top Navigation */}
      <Navbar onOpenGetStarted={() => handleOpenGetStarted('quote')} />

      {/* Main Routed Content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home onOpenGetStarted={handleOpenGetStarted} />} />
          <Route path="/about" element={<About onOpenGetStarted={handleOpenGetStarted} />} />
          <Route path="/services" element={<Services onOpenGetStarted={handleOpenGetStarted} />} />
          <Route path="/projects" element={<Projects onOpenGetStarted={handleOpenGetStarted} />} />
          <Route path="/testimonials" element={<Testimonials onOpenGetStarted={handleOpenGetStarted} />} />
          <Route path="/contact" element={<Contact onOpenGetStarted={handleOpenGetStarted} />} />
          {/* Fallback */}
          <Route path="*" element={<Home onOpenGetStarted={handleOpenGetStarted} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Universal Get Started / Enrollment / Quote Modal */}
      <GetStartedModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        defaultTab={modalState.tab}
        preselectedItem={modalState.preselected}
      />

      {/* Floating AI Chat Assistant */}
      <AvinzAI />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
