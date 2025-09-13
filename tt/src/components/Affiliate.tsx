import Cl1 from '../assets/cl/cl1.webp';
import Cl2 from '../assets/cl/cl2.png';
import Cl3 from '../assets/cl/cl3.webp';
import Cl4 from '../assets/cl/cl4.webp';
import Cl5 from '../assets/cl/cl5.webp';
import Cl6 from '../assets/cl/cl6.webp';
import Cl7 from '../assets/cl/cl7.webp';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Affiliates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const affiliates = [
    {
      id: 1,
      logo: Cl1,
      description: "Extra Co is leading industrial organization offering comprehensive solutions across multiple sectors. Our expertise includes construction, manufacturing, and industrial services with modern technology and professional excellence."
    },
    {
      id: 2,
      logo: Cl2,
      description: "Extra Co is a leading organization offering innovative solutions across various sectors. We provide comprehensive industrial and commercial services with advanced technology solutions."
    },
    {
      id: 3,
      logo: Cl3,
      description: "Al Badr delivers exceptional construction and consulting services. Our team provides innovative solutions with superior quality and professional excellence across multiple industrial sectors."
    },
    {
      id: 4,
      logo: Cl4,
      description: "Fixperts is a leading provider for engineering solutions. Professional electrical experts specialize in delivering quality solutions and expert maintenance services."
    },
    {
      id: 5,
      logo: Cl5,
      description: "Fixperts Group your leading partner for industrial solutions. Comprehensive industrial solutions including construction, maintenance and technical expertise."
    },
    {
      id: 6,
      logo: Cl6,
      description: "Fixperts Front Facing offering expert solutions across multiple industrial sectors. Specialized technical services for modern industrial requirements."
    },
    {
      id: 7,
      logo: Cl7,
      description: "TerraCore offers comprehensive construction and infrastructure solutions. Leading provider of engineering services with advanced technology and expertise."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % affiliates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + affiliates.length) % affiliates.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    const cardCount = window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4;
    for (let i = 0; i < cardCount; i++) {
      const index = (currentIndex + i) % affiliates.length;
      cards.push(affiliates[index]);
    }
    return cards;
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 p-4 sm:p-6">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">Our Affiliates</h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Green Oasis General Contracting Co. LLC has a diversified business group
          committed to excellence, innovation, and delivering high-quality solutions
          across multiple sectors. Our portfolio includes a range of specialized companies.
        </p>
      </div>
      <div className="relative mb-8 sm:mb-16">
        <div className="flex items-center">
          <button
            onClick={prevSlide}
            className="hidden sm:block p-2 sm:p-3 transition-all duration-200 z-10 mr-3 sm:mr-6 absolute top-8 sm:top-12 -left-8 sm:-left-20"
          >
            <ChevronLeft className="w-8 h-8 sm:w-12 md:w-16 lg:w-20 sm:h-12 md:h-16 lg:h-20 text-gray-700" />
          </button>
          <div className="flex-1 overflow-hidden px-2 sm:px-0">
            <div className="flex gap-3 sm:gap-6 transition-transform duration-500 ease-in-out">
              {getVisibleCards().map((affiliate, index) => (
                <div
                  key={`${affiliate.id}-${currentIndex}-${index}`}
                  className="group flex-1 min-w-0 transition-all duration-300 relative overflow-hidden cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-center bg-gray-300 py-4 sm:py-6 md:py-8 rounded-lg hover:rounded-b-none">
                      <div className="bg-white shadow-xl border border-gray-100">
                        <img src={affiliate.logo} alt={affiliate.description} className="w-auto h-24 sm:h-32 md:h-36 lg:h-40 max-h-24 sm:max-h-32 md:max-h-36 lg:max-h-40 object-contain mx-auto p-2 sm:p-4" />
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 md:p-6 flex items-center bg-gray-300 rounded-b-lg justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                        {affiliate.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="hidden sm:block p-2 sm:p-3 transition-all duration-200 z-10 ml-3 sm:ml-6 absolute top-8 sm:top-12 -right-8 sm:-right-20"
          >
            <ChevronRight className="w-8 h-8 sm:w-12 md:w-16 lg:w-20 sm:h-12 md:h-16 lg:h-20 text-gray-700" />
          </button>
        </div>

        {/* Mobile navigation dots */}
        <div className="flex justify-center mt-4 sm:hidden space-x-2">
          {affiliates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};
