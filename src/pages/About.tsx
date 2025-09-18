import AboutImage from '../assets/about.webp';
import a1 from '../assets/a1.webp';

export default function About() {
  return (
    <>
      <title>About Us | GREEN OASIS - GENERAL CONTRACTING</title>
      <div className="relative z-1">
        <img src={AboutImage} alt="bg" className="w-full h-[100vh] object-cover object-center z-10 -scale-x-100" />
      </div>
      <div className="p-4 sm:p-20 flex flex-col sm:grid sm:grid-cols-5 gap-4 justify-center items-center">
        <img src={a1} alt="bg" className="w-full h-[40em] object-contain col-span-2" />
        <div className="col-span-3 px-10 text-justify">
          <h1 className="text-5xl font-semibold mb-4 text-green-800">About Green Oasis</h1>
          <p className="mb-4">
            GOC is centric futuristic organization that believes in proactive advancement and development, which satiates esteemed clients. We at GOC, are committed for all its future endeavor, prestigious clients as well as staff and workers. Among the activities we have planned are workshops and Free education GOLD (Green Oasis Learning & Development)
            which aims and gives opportunity to our workers for free education and to improve the physical, social and mental well-being, develop personality, improve skill level, an ability to read, write make them independent, confident. Education liberates their thoughts and actions, making them capable of wisely using the resources available and progressing gradually.
          </p>
          <p className="mb-4">
            Our clients recognize our commitment to deliver the highest quality work on schedule and within budget.  In meeting these objectives, we consistently place our emphasis on health, safety and the environment, Green Oasis has been awarded Quality Management System certification and is certified by OHSAS for its Safety and Health Management System.  Stringent procedures are enforced at every step of every job as we continue our drive to improve performance and exceed client expectations.
          </p>
        </div>
      </div>
      <div className="py-4 px-4 sm:px-40 text-gray-900 mb-8 bg-gray-100" id="mission-and-vision" style={{ scrollMarginTop: '50px' }}>
        <h5 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-4 mt-6 text-green-800">
          Mission
        </h5>
        <p className="text-base sm:text-xl text-gray-600">
          Build best quality infrastructures, produce great
          talents and care for environment.
        </p>
        <h5 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-4 mt-6 text-green-800">
          Vision
        </h5>
        <p className="text-base sm:text-xl text-gray-600">
          To constantly deliver high quality products and
          services, exceed client’s expectations and be the
          best in the construction industry in Gulf region.
        </p>
        <h5 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-4 mt-6 text-green-800">
          Values
        </h5>
        <ul className="list-disc sm:space-y-2 text-gray-700 p-4">
          <li>INTEGRITY</li>
          <li>SAFETY</li>
          <li>Innovation</li>
          <li>Quality</li>
        </ul>
      </div>
      <div className="mb-6 p-4 sm:px-40 text-gray-600 text-base" id="hse-and-quality" style={{ scrollMarginTop: '50px' }}>
        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-semibold mb-4 text-green-800">
          HSE and Quality
        </h2>
        <p className="py-4 text-base">
          We have established and maintained Health Safety and Environment management system which assists the organization in meeting applicable legal and HSE regulations which deals with the following:
        </p>
        <ul className='py-4 list-disc pl-10'>
          <li>Organization, Leadership and Commitment</li>
          <li>
            Legal Requirements</li>
          <li>
            HSE Objectives and Targets</li>
          <li>
            Operational Controls</li>
          <li>
            Risk Management</li>
          <li>
            Information, Documentation and Communication</li>
          <li>
            Emergency Management</li>
          <li>
            Audits and Continuous</li>
        </ul>

        <p className="text-gray-600 py-4">
          We adopt constantly high HSE standards and excel in resetting standards. Accomplish the project without Loss Time Injury and Zero Accident-Zero Incident target and deliver them in stipulated time. The HSE management system has been organized to comply with the legal requirements and International standards ISO 14001:2015 & OHSAS 18001:2007.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-center items-center mx-20">
        <div className="p-4 w-full text-center mx-auto">
          <h4 className="py-1 sm:py-2 font-semibold text-md sm:text-2xl">
            ISO 9001:2015 Certified
          </h4>
          <p className="py-1 sm:py-2 mb-2 text-xs sm:text-sm text-gray-600">
            Quality Management System Standard
          </p>
        </div>
        <div className="p-4 text-center mx-auto">
          <h4 className="py-1 sm:py-2 font-semibold text-md sm:text-2xl">
            ISO 45001:2018 Certified
          </h4>
          <p className="py-1 sm:py-2 mb-2 text-xs sm:text-sm text-gray-600">
            Occupational Health and Safety Management System Standard
          </p>
        </div>
        <div className="p-4 text-center mx-auto">
          <h4 className="py-1 sm:py-2 font-semibold text-md sm:text-2xl">
            ISO 14001:2015 Certified
          </h4>
          <p className="py-1 sm:py-2 mb-2 text-xs sm:text-sm text-gray-600">
            Environmental Management System Standard
          </p>
        </div>
      </div>
    </>
  );
};
