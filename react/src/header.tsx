import Logo from "./assets/logo.jpeg";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src={Logo} alt="GOC Logo" className="h-14" />
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#safety">Safety</NavLink>
          <NavLink href="#clients">Clients</NavLink>
          <a
            href="#contact"
            className="bg-goc-green text-white py-2 px-5 rounded-md hover:bg-goc-green-dark transition font-bold"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-goc-gray hover:text-goc-green font-bold transition"
    >
      {children}
    </a>
  );
};
