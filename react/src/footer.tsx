import Logo from "./assets/logo.jpeg";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <div className="relative bg-goc-green">
        <div className="relative container mx-auto px-6 py-16 text-white grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <img src={Logo} alt="GOC Logo" className="h-16 mb-4" />
            <p className="opacity-80 max-w-sm">A leading Civil Engineering partner synonymous with reliability, commitment, and excellence in every project.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#about" className="hover:opacity-100">About Us</a></li>
              <li><a href="#services" className="hover:opacity-100">Services</a></li>
              <li><a href="#projects" className="hover:opacity-100">Projects</a></li>
              <li><a href="#safety" className="hover:opacity-100">Health & Safety</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 opacity-80">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                <span>P.O.Box 48582 Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <a href="mailto:info@goc.ae" className="hover:opacity-100">info@goc.ae</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <a href="tel:+97145120777" className="hover:opacity-100">+97145120777</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-400 text-center py-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Green Oasis General Contracting Co LLC. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
