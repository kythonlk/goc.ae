import {
  Heart,
  Sprout,
  CheckCircle,
  Users,
  Award,
  Building2,
  Shield,
  Lightbulb,
  Target,
} from "lucide-react";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import s2 from "./assets/s2.png";
import hs from "./assets/h&s.png";
import clients from "./assets/clients.png";

export const ProjectsSection = () => {

  const projectHighlights = [
    "Infrastructure Development",
    "Commercial Buildings",
    "Industrial Facilities",
    "Residential Complexes",
  ];

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full h-1 bg-white"></div>
      <div className="flex w-full items-center flex-col lg:flex-row">
        <div className="hidden lg:block w-full lg:w-1/3 px-4 lg:pr-6 text-center lg:text-right bg-gray-100 py-8 lg:py-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-goc-gray leading-tight">
            OUR
          </h2>
          <div className="w-24 h-1 bg-goc-green mt-3 mx-auto lg:ml-auto lg:mr-0"></div>
        </div>
        <div className="hidden lg:block w-full lg:w-2/3 bg-goc-green text-white p-8 lg:p-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-white mt-3"></div>
        </div>
        <div className="lg:hidden w-full lg:w-1/3 px-4 lg:pr-6 text-center lg:text-right bg-gray-100 py-8 lg:py-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-goc-gray leading-tight">
            OUR PROJECTS
          </h2>
          <div className="w-24 h-1 bg-goc-green mt-3 mx-auto lg:ml-auto lg:mr-0"></div>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-goc-green text-lg sm:text-xl leading-relaxed mb-8">
            Understanding our clients' needs and bringing that to life is the
            cornerstone to each of our projects. Whether big or small our
            passion is in delivering high quality projects on time to budget.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {projectHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 text-gray-700 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle
                  size={18}
                  className="text-goc-green flex-shrink-0"
                />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <img
            src={p1}
            alt="Infrastructure Development Project"
            className="w-full h-64 sm:h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <img
            src={p2}
            alt="Commercial Construction Project"
            className="w-full h-64 sm:h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="text-center bg-goc-green p-8 lg:p-12 rounded-3xl text-white max-w-2xl mx-auto">
            <Building2 size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our
              expertise and commitment to excellence.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-goc-green py-3 px-8 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SafetySection = () => {
  const safetyFeatures = [
    {
      icon: Heart,
      title: "Health First",
      description: "Employee wellness and health monitoring",
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description: "Zero accident, zero incident policy",
    },
    {
      icon: Sprout,
      title: "Environment",
      description: "Sustainable and eco-friendly practices",
    },
  ];

  const certifications = [
    "ISO 14001:2015 Environmental Management",
    "OHSAS 18001:2007 Occupational Health",
    "ISO 9001:2015 Quality Management",
  ];

  return (
    <section id="safety" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-between bg-goc-green relative">
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center flex-1">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                HEALTH
                <span className="block text-gray-900">
                  & SAFETY
                </span>
              </h2>
              <div className="w-24 h-1 bg-white mb-8"></div>

              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg">
                In compliance with the legislative regulations outlined in ISO
                14001:2015 and OHSAS 18001:2007, we have maintained an efficient
                HSE management system.
              </p>
            </div>
            <div className="grid gap-6 mb-12">
              {safetyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-white/20 p-3 rounded-lg">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-white/80 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Target size={32} className="text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-white mb-3">
                    Our Commitment
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    We are committed to implement Health, Safety & Environment
                    policies that adhere to all legal criteria at every work
                    level and are overseen by a group of top-notch
                    professionals. For every project we work on, we adhere to
                    strict HSE standards and strive for a Zero-Accident-Zero
                    Incident goal.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Award size={20} className="mr-2" />
                  Certifications
                </h4>
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-white/80 text-sm"
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-64 lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${hs}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-goc-green/20 lg:to-transparent"></div>
          </div>
          <div className="absolute inset-0 bg-black/40 lg:hidden">
            <div className="flex items-end h-full p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Safety Excellence</h3>
                <p className="text-sm opacity-90">
                  Maintaining the highest standards of workplace safety
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ClientsSection = () => {
  const clientTypes = [
    { icon: Building2, label: "Commercial" },
    { icon: Users, label: "Government" },
    { icon: Lightbulb, label: "Industrial" },
    { icon: Heart, label: "Healthcare" },
  ];

  return (
    <section id="clients" className="bg-gradient-to-br from-white to-gray-200">
      <div className="w-full h-1 bg-white"></div>
      <div className="flex w-full items-center flex-col lg:flex-row">
        <div className="hidden lg:block w-full lg:w-1/3 px-4 lg:pr-6 text-center lg:text-right py-8 lg:py-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-goc-gray leading-tight">
            OUR
          </h2>
          <div className="w-24 h-1 bg-goc-green mt-3 mx-auto lg:ml-auto lg:mr-0"></div>
        </div>
        <div className="hidden lg:block w-full lg:w-2/3 bg-goc-green text-white p-8 lg:p-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
            CLIENTS
          </h2>
          <div className="w-24 h-1 bg-goc-green mt-3"></div>
        </div>
        <div className="lg:hidden w-full lg:w-1/3 px-4 lg:pr-6 text-center lg:text-right py-8 lg:py-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-goc-gray leading-tight">
            OUR CLIENTS
          </h2>
          <div className="w-24 h-1 bg-goc-green mt-3 mx-auto lg:ml-auto lg:mr-0"></div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-goc-green text-lg sm:text-xl leading-relaxed mb-8">
            We are proud to serve a diverse portfolio of clients across multiple
            sectors, building lasting partnerships through trust, reliability,
            and exceptional service.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {clientTypes.map((type, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="bg-goc-green/10 p-4 rounded-xl">
                  <type.icon size={32} className="text-goc-green" />
                </div>
                <span className="font-semibold text-gray-700">
                  {type.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={s2}
              alt="Client Project Showcase"
              className="w-full h-64 sm:h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Project Excellence
                </h3>
                <p className="text-sm sm:text-base opacity-90">
                  Delivering outstanding results for our valued clients
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl h-full">
              <img
                src={clients}
                alt="Client Partnerships"
                className="w-full h-full min-h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold mb-1">Trusted Partners</h3>
                  <p className="text-xs opacity-90">
                    Building long-term relationships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-goc-green rounded-3xl p-8 lg:p-12 text-white text-center max-w-3xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <Users size={48} className="mx-auto mb-6 opacity-80" />
            <blockquote className="text-xl sm:text-2xl font-light italic mb-6 leading-relaxed">
              "Green Oasis has consistently delivered exceptional results,
              exceeding our expectations with their professionalism, quality,
              and commitment to deadlines."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
