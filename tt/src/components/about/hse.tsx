// import logo1 from '../../assets/about/logo1.webp';
// import logo2 from '../../assets/about/logo2.webp';
// import logo3 from '../../assets/about/logo3.webp';
import bgServices from '../../assets/s2.webp';

export default function Hse() {
  return (
    <div className="min-h-[60vh]">
      <div className="relative py-8 sm:py-40" id="hse-and-quality">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
          <img src={bgServices} alt="bg-services" className="w-full   h-[150px] sm:h-[300px] object-cover object-bottom" />
        </div>
        <div className="mx-4 lg:mx-40 relative z-10">
          <div className="flex justify-center">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white text-center leading-tight">
              HSE and Quality
            </h2>
          </div>
        </div>
      </div>
      <div className="mb-6 p-4 sm:px-40 text-gray-600 text-base">
        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-semibold mb-4">
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
      {/* <div className="flex justify-center sm:justify-between items-top mt-20 sm:mt-16 2xl:mt-20 space-x-4"> */}
      {/*   <img src={logo1} alt="logo1" className="w-24 sm:w-32 md:w-36 xl:w-44 2xl:w-48 h-16 sm:h-24 md:h-28 xl:h-28 2xl:h-36 object-contain" /> */}
      {/*   <img src={logo2} alt="logo2" className="w-20 sm:w-28 md:w-36 xl:w-52 2xl:w-64 h-16 sm:h-24 md:h-28 xl:h-28 2xl:h-36 object-contain" /> */}
      {/*   <img src={logo3} alt="logo3" className="w-20 sm:w-28 md:w-32 xl:w-48 2xl:w-52 h-16 sm:h-20 md:h-24 xl:h-28 2xl:h-36 object-contain" /> */}
      {/* </div> */}
    </div>
  );
};
