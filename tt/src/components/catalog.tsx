import iso from '../assets/iso.webp'
import goc from '../assets/goc.pdf'

export default function Catalog() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = goc;
    link.download = 'Green-Oasis-Catalogue.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-center items-center max-w-6xl mx-auto">
        <div className="bg-gray-300 p-4 w-full max-w-80 mx-auto order-2 md:order-1">
          <button
            onClick={handleDownload}
            className="bg-white p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer rounded w-full text-sm sm:text-base"
          >
            Download Our Catalogue
          </button>
        </div>
        <div className="p-4 text-center mx-auto order-1 md:order-2">
          <h4 className="py-1 sm:py-2 font-semibold text-sm sm:text-base">
            ISO 9001:2015 Certified
          </h4>
          <p className="py-1 sm:py-2 mb-2 text-xs sm:text-sm text-gray-600">
            Quality Management System Standard
          </p>
          <h4 className="py-1 sm:py-2 font-semibold text-sm sm:text-base">
            ISO 45001:2018 Certified
          </h4>
          <p className="py-1 sm:py-2 mb-2 text-xs sm:text-sm text-gray-600">
            Occupational Health and Safety Management System Standard
          </p>
          <h4 className="py-1 sm:py-2 font-semibold text-sm sm:text-base">
            ISO 14001:2015 Certified
          </h4>
          <p className="py-1 sm:py-2 mb-2 text-xs sm:text-sm text-gray-600">
            Environmental Management System Standard
          </p>
        </div>
        <div className="p-4 mx-auto order-3">
          <img src={iso} alt="iso" className="w-auto h-32 sm:h-40 md:h-48 object-contain mx-auto" />
        </div>
      </div>
    </section>
  );
}
