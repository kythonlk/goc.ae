import Header from './header';
import Footer from './footer';
import HeroSection from './hero';
import AboutSection from './about';
import ServicesSection from './service';
import { ClientsSection, ProjectsSection, SafetySection } from './other';

export default function App() {
  return (
    <div className="font-lato">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SafetySection />
      <ClientsSection />
      <Footer />
    </div>
  );
};
