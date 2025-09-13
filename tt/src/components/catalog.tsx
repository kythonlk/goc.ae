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
    <section className="px-20 py-10 text-center grid grid-cols-3 gap-4 justify-center items-center">
      <div className="bg-gray-300 p-4 w-80 mx-auto">
        <button
          onClick={handleDownload}
          className="bg-white p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        >
          Download Our Catalogue
        </button>
      </div>
      <div className="p-4 text-center mx-auto">
        <h4 className="py-2 font-semibold">
          ISO 9001:2015 Certified
        </h4>
        <p className="py-2 mb-2">
          Quality Management System Standard
        </p>
        <h4 className="py-2 font-semibold">
          ISO 45001:2018 Certified
        </h4>
        <p className="py-2 mb-2">
          Occupational Health and Safety Management System Standard
        </p>
        <h4 className="py-2 font-semibold">
          ISO 14001:2015 Certified
        </h4>
        <p className="py-2 mb-2">
          Environmental Management System Standard
        </p>
      </div>
      <div className="p-4 mx-auto">
        <img src={iso} alt="iso" className="w-auto h-48 object-contain" />
      </div>
    </section>
  );
}
