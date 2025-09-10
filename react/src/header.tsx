import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./assets/logo.jpeg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img
              src={Logo}
              alt="GOC Logo"
              className="h-12 sm:h-14 transition-all duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#safety">Safety</NavLink>
            <NavLink href="#clients">Clients</NavLink>
            <a
              href="#contact"
              className="bg-goc-green text-white py-3 px-6 rounded-full hover:bg-goc-green-dark transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-goc-gray" />
            ) : (
              <Menu size={24} className="text-goc-gray" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#about" onClick={closeMenu}>
                About
              </MobileNavLink>
              <MobileNavLink href="#services" onClick={closeMenu}>
                Services
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={closeMenu}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="#safety" onClick={closeMenu}>
                Safety
              </MobileNavLink>
              <MobileNavLink href="#clients" onClick={closeMenu}>
                Clients
              </MobileNavLink>
              <a
                href="#contact"
                onClick={closeMenu}
                className="bg-goc-green text-white py-3 px-6 rounded-full hover:bg-goc-green-dark transition-all duration-300 font-bold text-center shadow-lg hover:shadow-xl transform hover:scale-105 mt-4"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-goc-gray hover:text-goc-green font-semibold transition-all duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-goc-green transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-goc-gray hover:text-goc-green font-semibold py-2 px-4 rounded-lg hover:bg-white transition-all duration-300 border-l-4 border-transparent hover:border-goc-green"
    >
      {children}
    </a>
  );
};
