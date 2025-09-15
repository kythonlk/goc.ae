import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ci1 from "../assets/ci/ci1.webp";
import ci2 from "../assets/ci/ci2.webp";
import ci3 from "../assets/ci/ci3.webp";
import ci4 from "../assets/ci/ci4.webp";
import ci5 from "../assets/ci/ci5.webp";
import ci6 from "../assets/ci/ci6.webp";

const expertiseData = [
  {
    icon: ci1,
    title: "Civil Works",
    description:
      "The Civil Works Division is the oldest division of Green Oasis. It is involved in all civil aspects of the awarded projects and is the main division in charge of all phases of any project from beginning to end."
  },
  {
    icon: ci2,
    title: "MEP Works",
    description:
      "The Electromechanical Works Division is a major division within GOC consisting of a specialized in-house team in charge of Mechanical, Electrical and Plumbing works."
  },
  {
    icon: ci3,
    title: "Infrastructure Works",
    description:
      "The Infrastructure Works Division consists of a team specialized in infrastructure projects ranging from power substations and water tanks to pipe laying and road works."
  },
  {
    icon: ci4,
    title: "Industrial Works",
    description:
      "The Industrial Works Division handles complex construction projects for factories, warehouses, and specialized industrial facilities."
  },
  {
    icon: ci5,
    title: "Water & Dewatering",
    description:
      "Specialized in water management, dewatering solutions, and reservoir construction to ensure safe and efficient operations on all projects."
  },
  {
    icon: ci6,
    title: "Logistics",
    description:
      "The Logistics Division supports projects with transportation, material handling, and supply chain management services."
  }
];

export default function ExpertiseCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const carouselRef = useRef(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 380 : 540;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="p-4 sm:p-8 md:p-12 lg:p-20 text-center text-gray-900 bg-gray-200">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Expertise</h2>
      <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
        Green Oasis General Contracting CO. LLC. is a flagship company of the Extra Co. Group
        that is dedicated and committed in providing the society with top quality infrastructure,
        commercial and residential projects.
      </p>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-2 sm:-left-6 top-1/3 -translate-y-1/2 z-10 p-1 sm:p-2 hidden sm:block"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 md:w-12 lg:w-20 sm:h-8 md:h-12 lg:h-20 text-gray-700" />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-3 sm:gap-6 scroll-smooth h-80 pb-4"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
        >
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[380px] lg:min-w-[540px] flex-shrink-0 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 p-2"
            >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="min-w-[240px] sm:min-w-[340px] lg:min-w-[400px] bg-white shadow-2xl rounded-xl p-4 sm:p-6 flex flex-col items-center"
              >
                <img src={item.icon} alt={item.title} className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover object-center" />
                <h3 className="text-base sm:text-lg font-semibold mt-2">{item.title}</h3>
              </div>
              <p
                className={`text-xs sm:text-sm text-gray-600 min-w-[240px] sm:min-w-[340px] lg:min-w-[400px] mt-4 transition-all max-w-sm duration-500 ease-in-out px-2 ${hoveredIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
                  }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-2 sm:-right-6 top-1/3 -translate-y-1/2 z-10 p-1 sm:p-2 hidden sm:block"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 md:w-12 lg:w-20 sm:h-8 md:h-12 lg:h-20 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
