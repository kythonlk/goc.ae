import Cl1 from '../assets/cl/cl1.webp';
import Cl2 from '../assets/cl/cl2.png';
import Cl3 from '../assets/cl/cl3.webp';
import Cl4 from '../assets/cl/cl4.webp';
import Cl5 from '../assets/cl/cl5.webp';
import Cl6 from '../assets/cl/cl6.webp';
import Cl7 from '../assets/cl/cl7.webp';

const affiliates = [
  {
    id: 1,
    logo: Cl1,
    description: "Extra Co is leading industrial organization offering comprehensive solutions across multiple sectors. Our expertise includes construction, manufacturing, and industrial services with modern technology and professional excellence.",
    link: "https://extraco.ae"
  },
  {
    id: 2,
    logo: Cl2,
    link: "https://extraco.ae",
    description: "Extra Co is a leading organization offering innovative solutions across various sectors. We provide comprehensive industrial and commercial services with advanced technology solutions."
  },
  {
    id: 3,
    logo: Cl3,
    link: "https://albadr.ae",
    description: "Al Badr delivers exceptional construction and consulting services. Our team provides innovative solutions with superior quality and professional excellence across multiple industrial sectors."
  },
  {
    id: 4,
    logo: Cl4,
    link: "https://fixperts.ae",
    description: "Fixperts is a leading provider for engineering solutions. Professional electrical experts specialize in delivering quality solutions and expert maintenance services."
  },
  {
    id: 5,
    logo: Cl5,
    link: "https://fixperts.shop",
    description: "Fixperts Group your leading partner for industrial solutions. Comprehensive industrial solutions including construction, maintenance and technical expertise."
  },
  {
    id: 6,
    logo: Cl6,
    link: "https://freshliving.ae",
    description: "Fixperts Front Facing offering expert solutions across multiple industrial sectors. Specialized technical services for modern industrial requirements."
  },
  {
    id: 7,
    logo: Cl7,
    link: "https://terracoreme.ae",
    description: "TerraCore offers comprehensive construction and infrastructure solutions. Leading provider of engineering services with advanced technology and expertise."
  }
];

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function Affiliates() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="px-4 sm:px-8 lg:px-32 p-4 sm:p-10 bg-gray-100">
      <div className="text-center mb-8 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 sm:mb-8">
          Our Affiliates
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Green Oasis General Contracting Co. LLC has a diversified business group
          committed to excellence, innovation, and delivering high-quality solutions
          across multiple sectors. Our portfolio includes a range of specialized companies.
        </p>
      </div>
      <div className="relative my-4">
        <button
          onClick={scrollPrev}
          className="hidden sm:block p-2 sm:p-3 transition-all duration-200 z-10 mr-3 sm:mr-6 absolute top-8 sm:top-12 -left-8 sm:-left-20"
        >
          <ChevronLeft className="w-8 h-8 sm:w-12 md:w-16 lg:w-20 sm:h-12 md:h-16 lg:h-20 text-gray-700" />
        </button>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {affiliates.map((affiliate) => (
              <div
                key={affiliate.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33%] lg:flex-[0_0_20%] px-10"
              >
                <div className="group flex flex-col transition-all duration-300 relative overflow-hidden cursor-pointer h-full">
                  <div className="text-justify bg-gray-300 rounded-xl flex flex-col  h-full">
                    <div className="text-center  py-6 md:py-8 ">
                      <div className="bg-white shadow-xl border border-gray-100">
                        <img
                          src={affiliate.logo}
                          alt={affiliate.description}
                          className="w-auto h-24 sm:h-32 md:h-36 lg:h-40 object-contain mx-auto p-4"
                        />
                      </div>
                    </div>
                    <div className="p-4 md:p-6 flex flex-col items-center  justify-between  transition-opacity duration-300">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                        {affiliate.description}
                      </p>
                      <a
                        href={affiliate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-xs sm:text-sm text-gray-600 px-4 py-2 mt-4 rounded-full bg-white text-center">
                          Check Website
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollNext}
          className="hidden sm:block p-2 sm:p-3 transition-all duration-200 z-10 ml-3 sm:ml-6 absolute top-8 sm:top-12 -right-8 sm:-right-20"
        >
          <ChevronRight className="w-8 h-8 sm:w-12 md:w-16 lg:w-20 sm:h-12 md:h-16 lg:h-20 text-gray-700" />
        </button>
      </div>
      <div className="flex justify-center mt-4 sm:hidden space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${index === selectedIndex ? "bg-gray-700" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
