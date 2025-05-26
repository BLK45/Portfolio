import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // เลื่อนแบบ smooth ไปยัง element ที่เจอ
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // ถ้าไม่มี hash เลื่อนขึ้นบนสุดหน้า
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="font-kanit">
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
