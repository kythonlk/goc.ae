import { ArrowDown } from "lucide-react";
import Logo from "./assets/logo.jpeg";
import Home from "./assets/home.jpg";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${Home})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-goc-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-goc-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white/60 glass backdrop-blur-sm p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={Logo}
              alt="Green Oasis General Contracting Logo"
              className="h-24 sm:h-32 lg:h-40 mx-auto drop-shadow-lg"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-goc-green mb-4 leading-tight">
            <span className="block">GREEN OASIS</span>
            <span className="block text-goc-gray">GENERAL CONTRACTING</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <div className="w-2 h-2 bg-goc-green rounded-full"></div>
              <span className="font-semibold text-sm sm:text-base">
                Quality Excellence
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <div className="w-2 h-2 bg-goc-green rounded-full"></div>
              <span className="font-semibold text-sm sm:text-base">
                On-Time Delivery
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <div className="w-2 h-2 bg-goc-green rounded-full"></div>
              <span className="font-semibold text-sm sm:text-base">
                Safety First
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="bg-goc-green text-white py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto"
            >
              Discover Our Story
            </a>
            <a
              href="#contact"
              className="border-2 border-goc-green text-goc-green py-4 px-8 rounded-full font-bold text-lg hover:bg-goc-green hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-goc-green transition-all duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>

    </section>
  );
}
