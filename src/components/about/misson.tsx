import bgServices from '../../assets/s2.webp';

export default function Misson() {
  return (
    <div className="min-h-[60vh]">
      <div className="relative py-6 sm:py-40" id="mission-and-vision">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
          <img src={bgServices} alt="bg-services" className="w-full h-[150px] sm:h-[300px] object-cover object-bottom" />
        </div>
        <div className="sm:mx-40 relative z-10 px-4">
          <h2 className="text-2xl sm:text-5xl font-bold text-white text-center">
            Mission & Vision
          </h2>
        </div>
      </div>
      <div className="py-4 px-4 sm:px-40 text-gray-900 mb-8">
        <h5 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-4 mt-6">
          Mission
        </h5>
        <p className="text-base sm:text-xl text-gray-600">
          Build best quality infrastructures, produce great
          talents and care for environment.
        </p>
        <h5 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-4 mt-6">
          Vision
        </h5>
        <p className="text-base sm:text-xl text-gray-600">
          To constantly deliver high quality products and
          services, exceed client’s expectations and be the
          best in the construction industry in Gulf region.
        </p>
        <h5 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-4 mt-6">
          Values
        </h5>
        <ul className="list-disc sm:space-y-2 text-gray-700 p-4">
          <li>INTEGRITY</li>
          <li>SAFETY</li>
          <li>Innovation</li>
          <li>Quality</li>
        </ul>
      </div>

    </div>
  );
};
