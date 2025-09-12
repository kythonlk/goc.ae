import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import bg from "../assets/s2.webp"

export default function Footer() {

  const services = [
    { path: '/services/soil', label: 'Soil Improvement' },
    { path: '/services/piling', label: 'Piling' },
    { path: '/services/shoring', label: 'Shoring' },
    { path: '/services/ndrc', label: 'NDRC/NDM' },
    { path: '/services/dewatering', label: 'Dewatering' },
    { path: '/services/logistics', label: 'Logistics' },
  ];
  const Links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Work With Us', href: '/work-with-us' },
  ];

  return (
    <footer className="bg-bp text-gray-800 py-12" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
          <div>
            <img src={Logo} alt="Logo" className="w-32 mb-4" />
            <p >
              Over 40 years of trusted excellence in civil engineering, built on quality, safety, and sustainability.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {Links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>Dubai Production City , Dubai, UAE</li>
              <li>Phone: <a href='tel:+97145120777' target='_blank'>+971 4 512 0777</a></li>
              <li>Email: <a href="mailto:info@terracoreme.ae" target='_blank'>info@terracoreme.ae</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} GREEN OASIS GENERAL CONTRACTING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

