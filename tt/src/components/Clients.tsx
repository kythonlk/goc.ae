import c1 from '../assets/c/c1.webp'
import c2 from '../assets/c/c2.webp'
import c3 from '../assets/c/c3.webp'
import c4 from '../assets/c/c4.webp'
import c5 from '../assets/c/c5.webp'
import c6 from '../assets/c/c6.webp'
import c7 from '../assets/c/c7.webp'
import c8 from '../assets/c/c8.webp'
import c9 from '../assets/c/c9.webp'
import c10 from '../assets/c/c10.webp'
import c11 from '../assets/c/c11.webp'
import c12 from '../assets/c/c12.webp'
import c13 from '../assets/c/c13.webp'
import c14 from '../assets/c/c14.webp'
import c15 from '../assets/c/c15.webp'
import c16 from '../assets/c/c16.webp'
import c17 from '../assets/c/c17.webp'
import c18 from '../assets/c/c18.webp'
import c19 from '../assets/c/c19.webp'
import c20 from '../assets/c/c20.webp'
import c21 from '../assets/c/c21.webp'
import c22 from '../assets/c/c22.webp'
import c23 from '../assets/c/c23.webp'
import c24 from '../assets/c/c24.webp'
import c25 from '../assets/c/c25.webp'
import c26 from '../assets/c/c26.webp'
import c27 from '../assets/c/c27.webp'
import c28 from '../assets/c/c28.webp'
import c29 from '../assets/c/c29.webp'
import c30 from '../assets/c/c30.webp'
import c31 from '../assets/c/c31.webp'
import c32 from '../assets/c/c32.webp'
import c33 from '../assets/c/c33.webp'
import c34 from '../assets/c/c34.webp'
import c35 from '../assets/c/c35.webp'
import c36 from '../assets/c/c36.webp'


const ClientLogo = ({ imageUrl, altText }: { imageUrl: string; altText: string }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:scale-105 transition duration-300 ease-in-out filter grayscale hover:grayscale-0 ">
      <img
        src={imageUrl}
        alt={altText}
        className="max-h-24 object-contain"
      />
    </div>
  );
};

export default function ClientsSection() {
  const clients = [
    { id: 1, image: c1, alt: 'United Arab Emirates Ministry of Interior' },
    { id: 2, image: c2, alt: 'Roads & Transport Authority' },
    { id: 3, image: c3, alt: 'Dubai Municipality' },
    { id: 4, image: c4, alt: 'Dubai Properties Group' },
    { id: 5, image: c5, alt: 'Engineering Office' },
    { id: 6, image: c6, alt: 'Ministry of Defence' },
    { id: 7, image: c7, alt: 'Emaar' },
    { id: 8, image: c8, alt: 'ABB' },
    { id: 9, image: c9, alt: 'ADNOC' },
    { id: 10, image: c10, alt: 'Dubai World' },
    { id: 11, image: c11, alt: 'General Electric' },
    { id: 12, image: c12, alt: 'Smart Electrical Solutions' },
    { id: 13, image: c13, alt: 'ENOC' },
    { id: 14, image: c14, alt: 'Dubai Studio City' },
    { id: 15, image: c15, alt: 'International Media Production' },
    { id: 16, image: c16, alt: 'Nakheel' },
    { id: 17, image: c17, alt: 'AG Power' },
    { id: 18, image: c18, alt: 'Toshiba' },
    { id: 19, image: c19, alt: 'Siemens' },
    { id: 20, image: c20, alt: 'Alstom' },
    { id: 21, image: c21, alt: 'Meydan Group' },
    { id: 22, image: c22, alt: 'City of Arabia' },
    { id: 23, image: c23, alt: 'Dubai Industrial City' },
    { id: 24, image: c24, alt: 'Inxon' },
    { id: 25, image: c25, alt: 'Nexans' },
    { id: 26, image: c26, alt: 'Centaur' },
    { id: 27, image: c27, alt: 'Etihad WE' },
    { id: 28, image: c28, alt: 'Transco' },
    { id: 29, image: c29, alt: 'Tecom Group' },
    { id: 30, image: c30, alt: 'Emaar Properties' },
    { id: 31, image: c31, alt: 'Emaar Properties' },
    { id: 32, image: c32, alt: 'Emaar Properties' },
    { id: 33, image: c33, alt: 'Emaar Properties' },
    { id: 34, image: c34, alt: 'Emaar Properties' },
    { id: 35, image: c35, alt: 'Emaar Properties' },
    { id: 36, image: c36, alt: 'Emaar Properties' },
  ];

  return (
    <section className="py-12 px-4 sm:mx-20">
      <h2 className="text-5xl font-bold text-center mb-4 text-gray-900">Our Clients</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Green Oasis General Contracting CO. LLC is proud to work with these outstanding companies.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {clients.map(client => (
          <ClientLogo
            key={client.id}
            imageUrl={client.image}
            altText={client.alt}
          />
        ))}
      </div>
    </section>
  );
};
