// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
// import Landing from './components/Landing';
import WorkWithUs from './pages/Work-With-Us';
import Opportunities from './pages/Opp';
import NotFound from './pages/404';
import ISO from './components/about/iso';
import Misson from './components/about/misson';
import HSE from './components/about/hse';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';
import { ScrollToTop, ScrollToHash } from "./lib/Scrall";
import fb from './assets/fb.webp';
import ig from './assets/ig.webp';
import linkedin from './assets/in.webp';
import x from './assets/x.webp';
import Careers from './pages/Careers';

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const projects = [
  {
    name: "Infrastructure Projects ",
    disc: "We are dedicated in building a better future through innovative infrastructure solutions. Our team of engineers and staff has extensive experience in delivering projects on time and within budget, and we are committed in using our skills, resources and expertise to every project we handle.",
    link: "/projects/infrastructure",
    imgaes: [
    ]
  },
  {
    name: "Pipeline Projects",
    disc: `Our team of experienced engineers, project managers, surveyors and construction experts are committed in delivering water pipeline projects that meet the highest standards of quality, safety and sustainability. We use the latest technologies and materials to ensure our pipelines are efficient, durable and environmentally friendly.<br /><br />Our water pipeline projects are designed to provide communities with a reliable source of water that meets all the health and safety standards set by government. Every pipeline project we have are constructed to benefit the community and the environment.`,
    link: "/projects/pipeline",
    imgaes: [
    ]
  },
  {
    name: "Petrol Stations Projects",
    disc: "We are committed in providing high-quality fuel stations that meets industry standards.",
    link: "/projects/petrol-stations",
    imgaes: [
    ]
  },
  {
    name: "Sub Stations Projects",
    disc: "At Green Oasis Contracting, we are committed in providing communities with reliable and efficient energy distribution through our power substation projects. Our team of experienced engineers, technicians and staff work as one to design and build 400kV and 132 kV power substations that meet the highest standards of quality and safety.",
    link: "/projects/sub-stations",
    imgaes: [
    ]
  },
]


function AppContent() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <ScrollToTop />
      <ScrollToHash />
      <SocialSidebar />
      <main className='w-full overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mission-and-vision" element={<Misson />} />
          <Route path="/about/hse-and-quality" element={<HSE />} />
          <Route path="/about/certification" element={<ISO />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/projects" element={<Projects />} />
          {projects.map((project, index) => (
            <Route key={index} path={project.link} element={<SingleProject name={project.name} disc={project.disc} images={project.imgaes} />} />
          ))}
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function SocialSidebar() {
  return (
    <div className="fixed left-0 top-2/5 z-50 flex flex-col space-y-2">
      <a href="https://www.facebook.com/GOC.UAE" target="_blank" rel="noopener noreferrer" className='w-12 h-12 bg-black flex justify-center items-center'>
        <img src={fb} alt="Facebook" className="w-8 h-auto" />
      </a>
      <a href="https://x.com/GOC_UAE" target="_blank" rel="noopener noreferrer" className='w-12 h-12 bg-black flex justify-center items-center'>
        <img src={x} alt="Twitter" className="w-8 h-auto" />
      </a>
      <a href="https://www.instagram.com/goc_uae/" target="_blank" rel="noopener noreferrer" className='w-12 h-12 bg-black flex justify-center items-center'>
        <img src={ig} alt="Instagram" className="w-8 h-auto" />
      </a>
      <a href="https://www.linkedin.com/company/goc-uae" target="_blank" rel="noopener noreferrer" className='w-12 h-12 bg-black flex justify-center items-center'>
        <img src={linkedin} alt="LinkedIn" className="w-8 h-auto" />
      </a>
    </div>
  );
}

