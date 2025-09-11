import Header from "./header";
import Footer from "./footer";
import HeroSection from "./hero";
import AboutSection from "./about";
import ServicesSection from "./service";
import { ClientsSection, ProjectsSection, SafetySection } from "./other";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollToTop, ScrollToHash } from "./lib/scrall";
import fb from './assets/fb.png';
import ig from './assets/ig.png';
import linkedin from './assets/in.png';
import x from './assets/x.png';

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function Home() {
  return (
    <div className="font-lato antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SafetySection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const [isLanding, setIsLanding] = useState(location.pathname === '/');

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsLanding(false);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <ScrollToHash />
      <SocialSidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


function SocialSidebar() {
  return (
    <div className="fixed left-0 top-2/5 z-50 flex flex-col space-y-2">
      <a href="https://facebook.com/people/TerraCore/61573495764602" target="_blank" rel="noopener noreferrer">
        <img src={fb} alt="Facebook" className="w-10 h-10 opacity-75" />
      </a>
      <a href="https://x.com/TerraCoreme" target="_blank" rel="noopener noreferrer">
        <img src={x} alt="Twitter" className="w-10 h-10 opacity-75" />
      </a>
      <a href="https://www.instagram.com/terracoreme.ae/" target="_blank" rel="noopener noreferrer">
        <img src={ig} alt="Instagram" className="w-10 h-10 opacity-75" />
      </a>
      <a href="https://linkedin.com/company/terracore-ae" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="w-10 h-10 opacity-75" />
      </a>
    </div>
  );
}

function Landing({ landing }: any) {
  return (
    <div className="min-h-screen bg-white">
    </div>
  );
}
