import iso1 from '../../assets/about/iso-1.webp';
import iso2 from '../../assets/about/iso-2.webp';
import iso3 from '../../assets/about/iso-3.webp';
import bgServices from '../../assets/s2.webp';

const certifications = [
  {
    name: 'DUBAI BRANCH',
    description: 'Quality Management System Standard',
    image: iso1,
  },
  {
    name: 'DUBAI BRANCH',
    description: 'Environmental Management System Standard',
    image: iso2,
  },
  {
    name: 'DUBAI BRANCH',
    description: 'Occupational Health and Safety Management System Standard',
    image: iso3,
  }
];

export default function Iso() {
  return (
    <div className="min-h-[60vh]">
      <div className="relative py-8 pb-4 sm:py-40" id="certification">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
          <img src={bgServices} alt="bg-services" className="w-full h-[150px] sm:h-[300px] object-cover object-bottom" />
        </div>
        <div className="mx-4 sm:mx-40 relative z-10 px-4">
          <h2 className="text-2xl sm:text-5xl font-bold text-white text-center">
            ISO CERTIFICATES
          </h2>
        </div>
      </div>

      <div className="py-10 px-0 sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="relative text-center p-4 px-10 bg-bl rounded-lg shadow-lg flex flex-col justify-center items-center mx-auto max-w-[75%] sm:max-w-96"
            >
              <div className="relative w-full">
                <img src={cert.image} alt={cert.name} className="w-full h-auto object-contain" />
                <div className="absolute inset-0 flex items-center justify-center opacity-50 rotate-45 space-x-4">
                  <p className="text-black text-2xl font-bold">TerraCore</p>
                  <p className="text-black text-2xl font-bold">TerraCore</p>
                </div>
              </div>
              <p className="text-white py-4">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
