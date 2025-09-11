const ClientLogo = ({ imageUrl, altText }: { imageUrl: string; altText: string }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <img
        src={imageUrl}
        alt={altText}
        className="max-h-16 object-contain"
      />
    </div>
  );
};

export default function ClientsSection() {
  const clients = [
    { id: 1, image: 'https://placehold.co/200x100/ffffff/000000?text=UAE+Ministry+of+Interior', alt: 'United Arab Emirates Ministry of Interior' },
    { id: 2, image: 'https://placehold.co/200x100/ffffff/000000?text=RTA', alt: 'Roads & Transport Authority' },
    { id: 3, image: 'https://placehold.co/200x100/ffffff/000000?text=Dubai+Municipality', alt: 'Dubai Municipality' },
    { id: 4, image: 'https://placehold.co/200x100/ffffff/000000?text=Dubai+Properties+Group', alt: 'Dubai Properties Group' },
    { id: 5, image: 'https://placehold.co/200x100/ffffff/000000?text=Engineering+Office', alt: 'Engineering Office' },
    { id: 6, image: 'https://placehold.co/200x100/ffffff/000000?text=Ministry+of+Defence', alt: 'Ministry of Defence' },
    { id: 7, image: 'https://placehold.co/200x100/ffffff/000000?text=Emaar', alt: 'Emaar' },
    { id: 8, image: 'https://placehold.co/200x100/ffffff/000000?text=ABB', alt: 'ABB' },
    { id: 9, image: 'https://placehold.co/200x100/ffffff/000000?text=ADNOC', alt: 'ADNOC' },
    { id: 10, image: 'https://placehold.co/200x100/ffffff/000000?text=Dubai+World', alt: 'Dubai World' },
    { id: 11, image: 'https://placehold.co/200x100/ffffff/000000?text=GE', alt: 'General Electric' },
    { id: 12, image: 'https://placehold.co/200x100/ffffff/000000?text=Smart+Electrical', alt: 'Smart Electrical Solutions' },
    { id: 13, image: 'https://placehold.co/200x100/ffffff/000000?text=enoc', alt: 'ENOC' },
    { id: 14, image: 'https://placehold.co/200x100/ffffff/000000?text=Dubai+Studio+City', alt: 'Dubai Studio City' },
    { id: 15, image: 'https://placehold.co/200x100/ffffff/000000?text=International+Media', alt: 'International Media Production' },
    { id: 16, image: 'https://placehold.co/200x100/ffffff/000000?text=Nakheel', alt: 'Nakheel' },
    { id: 17, image: 'https://placehold.co/200x100/ffffff/000000?text=AG+Power', alt: 'AG Power' },
    { id: 18, image: 'https://placehold.co/200x100/ffffff/000000?text=Toshiba', alt: 'Toshiba' },
    { id: 19, image: 'https://placehold.co/200x100/ffffff/000000?text=Siemens', alt: 'Siemens' },
    { id: 20, image: 'https://placehold.co/200x100/ffffff/000000?text=Alstom', alt: 'Alstom' },
    { id: 21, image: 'https://placehold.co/200x100/ffffff/000000?text=Meydan+Group', alt: 'Meydan Group' },
    { id: 22, image: 'https://placehold.co/200x100/ffffff/000000?text=City+of+Arabia', alt: 'City of Arabia' },
    { id: 23, image: 'https://placehold.co/200x100/ffffff/000000?text=Dubai+Industrial+City', alt: 'Dubai Industrial City' },
    { id: 24, image: 'https://placehold.co/200x100/ffffff/000000?text=Inxon', alt: 'Inxon' },
    { id: 25, image: 'https://placehold.co/200x100/ffffff/000000?text=Nexans', alt: 'Nexans' },
    { id: 26, image: 'https://placehold.co/200x100/ffffff/000000?text=Centaur', alt: 'Centaur' },
    { id: 27, image: 'https://placehold.co/200x100/ffffff/000000?text=EtihadWE', alt: 'Etihad WE' },
    { id: 28, image: 'https://placehold.co/200x100/ffffff/000000?text=Transco', alt: 'Transco' },
    { id: 29, image: 'https://placehold.co/200x100/ffffff/000000?text=Tecom+Group', alt: 'Tecom Group' },
    { id: 30, image: 'https://placehold.co/200x100/ffffff/000000?text=Dubai+Civil+Aviation', alt: 'Dubai Civil Aviation Authority' },
    { id: 31, image: 'https://placehold.co/200x100/ffffff/000000?text=Mitsubishi', alt: 'Mitsubishi' },
  ];

  return (
    <section className="py-12 px-4 mx-20">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Clients</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Green Oasis General Contracting CO. LLC is proud to work with these outstanding companies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-4">
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
