import About from "./assets/about.png";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full h-1 bg-goc-green"></div>
      <div className="flex w-full items-center flex-col lg:flex-row">
        <div className="hidden lg:block w-full lg:w-1/3 px-4 lg:pr-6 text-center lg:text-right py-8 lg:py-0">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-goc-gray leading-tight">
            ABOUT
          </h2>
          <div className="w-24 h-1 bg-goc-green mt-3 mx-auto lg:ml-auto lg:mr-0"></div>
        </div>
        <div className="hidden lg:block w-full lg:w-2/3 bg-goc-green text-white p-8 lg:p-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
            US
          </h2>
          <div className="w-24 h-1 bg-goc-green mt-3"></div>
        </div>
        <div className="lg:hidden w-full lg:w-1/3 px-4 lg:pr-6 text-center lg:text-right py-8 lg:py-0">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-goc-gray leading-tight">
            ABOUT US
          </h2>
          <div className="w-24 h-1 bg-goc-green mt-3 mx-auto lg:ml-auto lg:mr-0"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-goc-gray leading-relaxed order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Green Oasis General Contracting Company celebrates over{" "}
                <span className="font-bold text-goc-green">40 years</span> of
                combined experience in delivering high quality infrastructure
                and service initiatives across multiple fields of civil
                engineering.
              </p>
              <p className="text-lg leading-relaxed">
                Best known for its consistency in delivering on{" "}
                <span className="font-semibold text-goc-green">
                  Quality, Schedule and Budget
                </span>
                , Green Oasis Contracting is recognized through its projects and
                clients as a leading Civil Engineering partner synonymous with
                reliability and commitment.
              </p>
              <p className="text-lg leading-relaxed">
                Building sustainable performance through our unwavering focus on
                health, safety and the environment is central to how we continue
                to build our business and develop talent. Our Quality Management
                Certificates and OHSAS Certifications in Health & Safety
                Management Systems is indicative of the professional protocols
                foundational to our continued growth and partnerships.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-goc-green">
                  40+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-goc-green">
                  500+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <div className="text-3xl sm:text-4xl font-bold text-goc-green">
                  100%
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-1 bg-goc-green rounded-full h-16 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-xl lg:text-2xl text-gray-800 mb-4">
                    OUR MISSION
                  </h3>
                  <p className="text-goc-gray leading-relaxed">
                    Partner across the region in building the future through the
                    delivery of environmentally responsible structural and
                    infrastructure projects that deliver technical excellence,
                    enduring functionality and quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-1 bg-goc-green rounded-full h-20 flex-shrink-0"></div>
                <div className="w-full">
                  <h3 className="font-bold text-xl lg:text-2xl text-gray-800 mb-6">
                    OUR VALUES
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:bg-goc-green/10 transition-all duration-300">
                      <div className="w-3 h-3 bg-goc-green rounded-full mb-2"></div>
                      <span className="font-bold text-gray-700 text-sm">
                        SAFETY
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:bg-goc-green/10 transition-all duration-300">
                      <div className="w-3 h-3 bg-goc-green rounded-full mb-2"></div>
                      <span className="font-bold text-gray-700 text-sm">
                        INTEGRITY
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:bg-goc-green/10 transition-all duration-300">
                      <div className="w-3 h-3 bg-goc-green rounded-full mb-2"></div>
                      <span className="font-bold text-gray-700 text-sm">
                        ACCOUNTABILITY
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-goc-green rounded-2xl p-6 lg:p-8 text-white">
              <h3 className="font-bold text-xl lg:text-2xl mb-4">
                CERTIFIED EXCELLENCE
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm lg:text-base">
                    Quality Management Certified
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm lg:text-base">
                    OHSAS Health & Safety Certified
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm lg:text-base">
                    Environmental Management Systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <img
          src={About}
          alt="Green Oasis Team"
          className="w-full h-64 lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            Our Expert Team
          </h3>
          <p className="text-sm sm:text-base opacity-90">
            Dedicated professionals committed to excellence in every project
          </p>
        </div>
      </div>
    </section>
  );
}
