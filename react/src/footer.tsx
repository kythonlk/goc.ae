import { MapPin, Mail, Phone, Clock, ExternalLink } from "lucide-react";
import Logo from "./assets/logo.jpeg";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      {/* Contact Form Section */}
      <ContactForm />

      {/* Main Footer */}
      <div className="relative bg-goc-green">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  src={Logo}
                  alt="GOC Logo"
                  className="h-16 sm:h-20 mb-4"
                />
              </div>
              <p className="text-white/90 mb-6 leading-relaxed max-w-md">
                A leading Civil Engineering partner synonymous with reliability,
                commitment, and excellence in every project. Building the future
                with 40+ years of experience.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                  aria-label="Facebook"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                  aria-label="Twitter"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xl mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white/40 mt-2"></div>
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white/40 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white/40 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white/40 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#safety"
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white/40 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Health & Safety
                  </a>
                </li>
                <li>
                  <a
                    href="#clients"
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white/40 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Our Clients
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-xl mb-6 relative">
                Contact Info
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white/40 mt-2"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                    <MapPin
                      size={18}
                      className="text-white flex-shrink-0 mt-0.5"
                    />
                  </div>
                  <div>
                    <p className="text-white/90 leading-relaxed">
                      P.O.Box 48582
                      <br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                    <Mail
                      size={18}
                      className="text-white flex-shrink-0 mt-0.5"
                    />
                  </div>
                  <div>
                    <a
                      href="mailto:info@goc.ae"
                      className="text-white/90 hover:text-white transition-colors duration-300"
                    >
                      info@goc.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                    <Phone
                      size={18}
                      className="text-white flex-shrink-0 mt-0.5"
                    />
                  </div>
                  <div>
                    <a
                      href="tel:+97145120777"
                      className="text-white/90 hover:text-white transition-colors duration-300"
                    >
                      +971 4 512 0777
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                    <Clock
                      size={18}
                      className="text-white flex-shrink-0 mt-0.5"
                    />
                  </div>
                  <div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Mon-Fri: 8AM-6PM
                      <br />
                      Sat: 9AM-4PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="text-center">
              <h4 className="font-bold text-lg">
                Certifications & Standards
              </h4>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  ISO 9001:2015 Quality Management
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  OHSAS 18001 Health & Safety
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  ISO 14001 Environmental Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Green Oasis General Contracting
              Co LLC. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
