import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero1 from '../assets/hero1.webp';
import Hero2 from '../assets/hero2.webp';
import Hero3 from '../assets/hero3.webp';
import Hero4 from '../assets/hero4.webp';
// import Hero41 from '../assets/hero4-1.webp';


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: Hero1,
      link: "#company",
    },
    {
      image: Hero2,
      link: "/contact",
    },
    {
      image: Hero3,
      link: "/contact",
    },
    {
      image: Hero4,
      link: "/contact",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousSlide(currentSlide);
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);

        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`
        }}
      />

      {previousSlide !== null && (
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `url(${slides[previousSlide].image})`
          }}
        />
      )}

      <div className="relative h-full flex items-center justify-center px-4">
        <div
          className={`max-w-3xl p-4 sm:p-8 md:p-12 lg:p-20 bg-white/20 rounded-4xl backdrop-blur-sm flex flex-col items-center justify-center text-center transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
            }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-white whitespace-pre-line leading-tight">
            Building A Better <br />
            Future
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl py-3 sm:py-4 md:py-6 px-2">
            Green Oasis General Contracting CO. LLC. is a flagship company of the Extra Co. Group that is dedicated and committed in providing the society with top quality infrastructure, commercial and residential project.
          </p>
          <Link
            to={slides[currentSlide].link}
            className="font-bp bg-white py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-blue-700 transition min-w-32 sm:min-w-40 text-center text-sm sm:text-base"
          >
            View our projects
          </Link>
        </div>
      </div>
    </div>
  );
}
