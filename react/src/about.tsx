import About from "./assets/about.png"

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-100">
      <div className="w-full h-1 bg-goc-green"></div>
      <div className="flex w-full items-center">
        <div className="w-1/3 pr-6 text-right">
          <h2 className="section-title text-goc-gray">ABOUT</h2>
          <div className="w-24 h-1 bg-goc-green mt-3 ml-auto"></div>
        </div>
        <div className="w-2/3 bg-goc-green text-white p-8">
          <h2 className="section-title">US</h2>
          <div className="w-24 h-1 bg-goc-green mt-3 ml-auto"></div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-goc-gray leading-relaxed">
            <p className="mb-6">
              Green Oasis General Contracting Company celebrates over 40 year's of combined experience in delivering
              high quality infrastructure and service initiatives across multiple fields of civil engineering. Best
              known for its consistency in delivering on Quality, Schedule and Budget, Green Oasis Contracting is
              recognized through its projects and clients as a leading Civil Engineering partner synonymous with
              reliability and commitment.
            </p>
            <p>
              Building sustainable performance through our unwavering focus on health, safety and the environment is
              central to how we continue to build our business and develop talent. Our Quality Management Certificates
              and OHSAS Certifications in Health & Safety Management Systems is indicative of the professional protocols
              foundational to our continued growth and partnerships.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-2xl text-gray-800 border-l-4 border-goc-green pl-4 mb-3">OUR Mission</h3>
              <p className="text-goc-gray">Partner across the region in building the future through the delivery of
                environmentally responsible structural and infrastructure projects that delivers technical excellence,
                enduring functionality and quality.</p>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-gray-800 border-l-4 border-goc-green pl-4 mb-4">OUR Values</h3>
              <div className="flex items-center space-x-6 text-gray-700 font-bold">
                <span><span className="text-goc-green mr-2">●</span>SAFETY</span>
                <span><span className="text-goc-green mr-2">●</span>INTEGRITY</span>
                <span><span className="text-goc-green mr-2">●</span>ACCOUNTABILITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={About} alt="Green Oasis Team" className="w-full object-cover h-auto" />
    </section>
  );
};
