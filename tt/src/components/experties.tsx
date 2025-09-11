import { Building2, Bolt, Waypoints, Factory, Droplet, Truck } from "lucide-react";
import { useState, useRef } from "react";

const expertiseData = [
  {
    icon: <Building2 className="h-12 w-12 text-green-600" />,
    title: "Civil Works",
    description:
      "The Civil Works Division is the oldest division of Green Oasis. It is involved in all civil aspects of the awarded projects and is the main division in charge of all phases of any project from beginning to end."
  },
  {
    icon: <Bolt className="h-12 w-12 text-green-600" />,
    title: "MEP Works",
    description:
      "The Electromechanical Works Division is a major division within GOC consisting of a specialized in-house team in charge of Mechanical, Electrical and Plumbing works."
  },
  {
    icon: <Waypoints className="h-12 w-12 text-green-600" />,
    title: "Infrastructure Works",
    description:
      "The Infrastructure Works Division consists of a team specialized in infrastructure projects ranging from power substations and water tanks to pipe laying and road works."
  },
  {
    icon: <Factory className="h-12 w-12 text-green-600" />,
    title: "Industrial Works",
    description:
      "The Industrial Works Division handles complex construction projects for factories, warehouses, and specialized industrial facilities."
  },
  {
    icon: <Droplet className="h-12 w-12 text-green-600" />,
    title: "Water & Dewatering",
    description:
      "Specialized in water management, dewatering solutions, and reservoir construction to ensure safe and efficient operations on all projects."
  },
  {
    icon: <Truck className="h-12 w-12 text-green-600" />,
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
      const scrollAmount = 540;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="p-20 text-center text-gray-900 bg-gray-200">
      <h2 className="text-5xl font-bold mb-6">Our Expertise</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Green Oasis General Contracting CO. LLC. is a flagship company of the Extra Co. Group
        that is dedicated and committed in providing the society with top quality infrastructure,
        commercial and residential projects.
      </p>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/3 -translate-y-1/2 text-7xl"
        >
          ‹
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto  gap-6 scroll-smooth h-60"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
        >
          {expertiseData.map((item, index) => (
            <div
              className="min-w-[540px] flex-shrink-0 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 p-2"
            >
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="min-w-[400px] bg-white shadow-2xl rounded-xl p-6  flex flex-col items-center"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>

              </div>
              <p
                className={`text-sm text-gray-600 min-w-[400px] mt-4 transition-all max-w-sm duration-500 ease-in-out ${hoveredIndex === index
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
          className="absolute -right-6 top-1/3 -translate-y-1/2 text-7xl"
        >
          ›
        </button>
      </div>
    </section>
  );
}
