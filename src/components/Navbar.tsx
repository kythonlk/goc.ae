import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CropedLogo from '../assets/logo.jpeg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  type NavItem = {
    path: string;
    label: string;
    subLinkStyle?: string;
    subLinks?: {
      path: string;
      label: string;
    }[];
  };

  const navItems: NavItem[] = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/about',
      label: 'About',
      subLinkStyle: '',
      subLinks: [
        { path: '/about/mission-and-vision', label: 'Mission and Vision' },
        { path: '/about/hse-and-quality', label: 'HSE and Quality' },
        { path: '/about/certification', label: 'Certification' },
        { path: '/news', label: 'News' }
      ]
    },
    {
      path: '/projects',
      label: 'Projects',
      subLinkStyle: '',
      subLinks: [
        { path: '/projects/infrastructure', label: 'Infrastructure' },
        { path: '/projects/pipeline', label: 'Pipeline' },
        { path: '/projects/petrol-stations', label: 'Petrol Stations' },
        { path: '/projects/sub-stations', label: 'Sub Stations' }
      ]
    },
    {
      path: '/opportunities',
      label: 'Opportunities ',
      subLinkStyle: '',
      subLinks: [
        { path: '/opportunities/careers', label: 'Careers' },
        { path: '/opportunities', label: 'Subcontractors and Suppliers' },
      ]
    },
    {
      path: '/work-with-us',
      label: 'Work With Us',
    },
    {
      path: '/contact',
      label: 'Contact',
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-white/70'} shadow-lg fixed w-full z-50 `}>
      <div className="mx-4 md:mx-8 xl:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 sm:h-24 items-center">
          <Link to="/" className="flex items-center">
            <img src={CropedLogo} className="h-16 sm:h-20" alt="TerraCore Logo" />
            <div className="flex flex-col items-start pl-6">
              <span className="text-3xl font-bold text-gray-900">
                GREEN OASIS
              </span>
              <span className="text-md text-gray-800">
                GENERAL CONTRACTING
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-12">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const hasSubLinks = item.subLinks && item.subLinks.length > 0;
                return (
                  <li
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => hasSubLinks && setIsSubMenuOpen(true)}
                    onMouseLeave={() => hasSubLinks && setIsSubMenuOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`${isActive ? "text-[#367239]" : "text-gray-700"
                        } hover:text-[#367239] relative pb-1 transition-colors duration-200`}
                    >
                      {item.label}
                      {hasSubLinks && <span className="ml-1 text-sm">+</span>}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#367239] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {item.subLinks && item.subLinks.length > 0 && (
                      <div className={`${item.subLinkStyle} ${isSubMenuOpen ? "bg-white/90" : ""} invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-10 w-80 z-10 transition-all duration-300`}>
                        <div className="flex flex-col px-2">
                          {item.subLinks.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="text-gray-700 hover:text-[#367239] py-2 transition-colors duration-200 whitespace-nowrap"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:hidden flex items-center justify-between">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-gray-900 hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subLinks && item.subLinks.length > 0 && (
                    <div className="pl-4">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
