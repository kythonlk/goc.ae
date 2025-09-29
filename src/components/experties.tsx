import { useCallback, useEffect, useState } from "react";
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
      "The Electromechanical Works Division is a major division within GOC consisting of a specialized in-house team in charge of Mechanical, Electrical and Plumbing works that lends its expertise and technical know-how to all projects."
  },
  {
    icon: ci3,
    title: "Infrastructure Works",
    description:
      "The Infrastructure Works Division consists of a team specialized in infrastructure projects ranging from power substations and water tanks to pipe laying and road works."
  },
  {
    icon: ci4,
    title: "Maintenance Works",
    description:
      "The Maintenance Works Division is involved in all buildings and infrastructure where maintenance is required. The team handles all types of projects whether residential units, commercial buildings, hotels, or public infrastructure where maintenance or civil work restructuring or renovation is required."
  },
  {
    icon: ci5,
    title: "Survey Works",
    description:
      "The Survey Works Division consists of a team specialized in infrastructure projects ranging from power substations and water tanks to pipe laying and road works."
  },
  {
    icon: ci6,
    title: "Equipment & Logistics",
    description:
      "The Equipment/Logistics Division is involved in all buildings and infrastructure where maintenance is required. The team handles all types of projects whether residential units, commercial buildings, hotels, or public infrastructure where maintenance or civil work restructuring or renovation is required."
  }
];

import useEmblaCarousel from "embla-carousel-react";


export default function ExpertiseCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setActiveIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="p-4 sm:p-8 lg:p-20 text-center text-gray-900 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-12 text-green-800">Our Expertise</h2>
      <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-32 px-4">
        At Green Oasis Contracting, we are composed of 6 major divisions that has specialized focus and expertise. Our goal is to provide a comprehensive range of services and solutions to meet the needs of our projects. Focused on effective collaboration and successful solutions.We welcome projects of all sizes and are committed to deliver the highest level of value and service to every project.
      </p>
      <div className="relative mb-4 sm:mb-16">
        <button
          onClick={scrollPrev}
          className="absolute -left-2 sm:-left-6 top-1/3 -translate-y-1/2 z-10 p-1 sm:p-2 hidden sm:block"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 md:w-12 lg:w-20 sm:h-8 md:h-12 lg:h-20 text-gray-700" />
        </button>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex h-80 sm:h-96">
            {/* className="min-w-[280px] sm:min-w-[420px] lg:min-w-[540px] flex-shrink-0 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 p-2" */}
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%]  px-4 min-w-[280px] sm:min-w-[420px] lg:min-w-[540px] flex-shrink-0 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 p-2"
              >
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="min-w-full sm:min-w-[380px] lg:min-w-[440px] bg-white shadow-2xl p-4 sm:p-6 flex flex-col items-center"
                >
                  <img src={item.icon} alt={item.title} className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover object-center" />
                  <h3 className="text-md sm:text-lg font-semibold mt-2">{item.title}</h3>
                </div>
                <p
                  className={`text-xs sm:text-sm text-justify text-gray-600 min-w-[180px] sm:min-w-[340px] lg:min-w-[400px] mt-4 transition-all max-w-sm duration-500 ease-in-out px-2 ${hoveredIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-40 opacity-100 sm:max-h-0 sm:opacity-0 overflow-hidden"
                    }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>


        <button
          onClick={scrollNext}
          className="absolute -right-2 sm:-right-6 top-1/3 -translate-y-1/2 z-10 p-1 sm:p-2 hidden sm:block"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 md:w-12 lg:w-20 sm:h-8 md:h-12 lg:h-20 text-gray-700" />
        </button>
      </div>
      <div className="flex justify-center mt-4 sm:hidden space-x-2">
        {expertiseData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${index === activeIndex ? "bg-gray-700" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
