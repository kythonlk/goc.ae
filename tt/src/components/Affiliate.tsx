import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Cl1 from '../assets/cl/cl1.webp';
import Cl2 from '../assets/cl/cl2.webp';
import Cl3 from '../assets/cl/cl3.webp';
import Cl4 from '../assets/cl/cl4.webp';
import Cl5 from '../assets/cl/cl5.webp';
import Cl6 from '../assets/cl/cl6.webp';
import Cl7 from '../assets/cl/cl7.webp';

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
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % affiliates.length;
      cards.push(affiliates[index]);
    }
    return cards;
  };

  return (
    <div className="mx-20 p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Affiliates</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Green Oasis General Contracting Co. LLC has a diversified business group
          committed to excellence, innovation, and delivering high-quality solutions
          across multiple sectors. Our portfolio includes a range of specialized companies.
        </p>
      </div>

      <div className="relative mb-16">
        <div className="flex items-center">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full transition-all duration-200 z-10 mr-6 absolute top-6 -left-20"
          >
            <ChevronLeft className="w-20 h-20 text-gray-700" />
          </button>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {getVisibleCards().map((affiliate, index) => (
                <div
                  key={`${affiliate.id}-${currentIndex}-${index}`}
                  className="group flex-1 min-w-0 transition-all duration-300 relative overflow-hidden cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-center bg-gray-300 p-6 rounded-lg hover:rounded-b-none">
                      <div className="bg-white">
                        <img src={affiliate.logo} alt={affiliate.description} className="w-auto h-40 mx-auto -mx-20" />
                      </div>
                    </div>
                    <div className="p-6 flex items-center bg-gray-300 rounded-b-lg justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ">
                      <p className="text-sm text-gray-600 leading-relaxed text-center">
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
            className="p-3 rounded-full transition-all duration-200 z-10 ml-6 absolute top-6 -right-20"
          >
            <ChevronRight className="w-20 h-20 text-gray-700" />
          </button>
        </div>

      </div>

    </div>
  );
};

