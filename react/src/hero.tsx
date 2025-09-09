import Logo from "./assets/logo.jpeg";
import Home from "./assets/home.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] bg-white flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Home})` }}
      ></div>
      <div className="relative text-center bg-white/70 p-6 rounded-xl">
        <img
          src={Logo}
          alt="Green Oasis General Contracting Logo"
          className="h-40 mx-auto"
        />
        <h2 className="section-title text-goc-green">
          Green Oasis General Contracting
        </h2>
      </div>
    </section>
  );
}
