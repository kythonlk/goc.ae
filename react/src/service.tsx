import { ArrowRight, CheckCircle } from "lucide-react";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "CIVIL WORKS",
      description:
        "Leading large-scale construction projects is what we do best including the full spectrum of construction engineering sectors including civil, mechanical, electrical and instrumentation.",
      image: s1,
      features: [
        "Large-scale Construction",
        "Engineering Design",
        "Project Management",
        "Quality Assurance",
      ],
    },
    {
      id: 2,
      title: "INFRASTRUCTURE WORKS",
      description:
        "Infrastructure that is intelligently, sustainably, and purposefully developed lays the foundation for prosperity, economic growth, and well-being. Green Oasis is proud to deliver infrastructure solutions across the United Arab Emirates.",
      image: s2,
      features: [
        "Roads & Highways",
        "Water Systems",
        "Urban Planning",
        "Smart Infrastructure",
      ],
    },
    {
      id: 3,
      title: "ELECTROMECHANICAL WORKS",
      description:
        "Our in-house team of qualified engineers produced our design with our technical expertise and experience, and our well-trained technician and project teams implemented and carried out the design.",
      image: s3,
      features: [
        "HVAC Systems",
        "Electrical Installation",
        "MEP Design",
        "Automation Systems",
      ],
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden" style={{
      background: "linear-gradient(to right, #3d8b40 0% 30%, #e5e7eb 30% 100%)",
    }} >
      <div className="absolute top-0 left-0 w-full sm:w-2/5 h-full bg-goc-green transform sm:skew-x-12 translate-x-1/4"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-goc-green rounded-full blur-3xl"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Title Section */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                OUR
                <span className="block text-gray-900">
                  SERVICES
                </span>
              </h2>
              <div className="w-24 h-1 bg-white mx-auto lg:mx-0 mb-6"></div>
              <p className="text-white/90 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Comprehensive engineering solutions designed to build tomorrow's
                infrastructure today
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 max-w-sm mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    500+
                  </div>
                  <div className="text-white/70 text-sm">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    24/7
                  </div>
                  <div className="text-white/70 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="lg:col-span-8 space-y-8 lg:space-y-16">
            {services.map((service, index) => (
              <ServiceItem key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceItem = ({
  title,
  description,
  image,
  features,
  index,
}: {
  title: string;
  description: string;
  image: string;
  features: string[];
  index: number;
}) => {
  return (
    <div
      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-6 lg:gap-12`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Overlay content */}
          <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex items-center space-x-2">
              <ArrowRight size={20} />
              <span className="font-semibold">Explore Service</span>
            </div>
          </div>
        </div>

        {/* Decorative number */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-goc-green rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
          0{index + 1}
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-tight">
            {title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

          {/* Features list */}
          <div className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <CheckCircle
                  size={18}
                  className="text-goc-green flex-shrink-0"
                />
                <span className="text-gray-700 text-sm font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="group bg-goc-green text-white py-3 px-6 rounded-full font-semibold hover:bg-goc-green-dark transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
            <span>Learn More</span>
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
