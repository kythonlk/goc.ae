import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "CIVIL Works",
      description: "Leading large-scale construction projects is what we do best including the full spectrum of construction engineering sectors including civil, mechanical, electrical and instrumentation.",
      image: s1,
    },
    {
      id: 2,
      title: "INFRASTRUCTURE Works",
      description: "Infrastructure that is intelligently, sustainably, and purposefully developed lays the foundation for prosperity, economic growth, and well-being. Green Oasis is proud to deliver infrastructure solutions across the United Arab Emirates.",
      image: s2,
    },
    {
      id: 3,
      title: "ELECTROMECHANICAL Works",
      description: "Our in-house team of qualified engineers produced our design with our technical expertise and experience, and our well-trained technician and project teams implemented and carried out the design.",
      image: s3,
    }
  ];

  return (
    <section id="services" className="my-20 py-20" style={{
      background: "linear-gradient(to right, #3d8b40 0% 50%, #ffffff 50% 100%)",
    }} >
      <div className=" mx-auto px-6 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3">
          <div className="sticky top-28">
            <h2 className="section-title uppercase font-bold text-white text-5xl leading-tight">OUR<span className="text-gray-900"> SERVICES</span></h2>
            <div className="w-20 h-1.5 bg-white mt-3"></div>
          </div>
        </div>
        <div className="lg:col-span-9 space-y-16">
          {services.map(service => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img src={image} alt={title} className="w-full md:w-1/2 rounded-lg shadow-md" />
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-goc-gray">{description}</p>
      </div>
    </div>
  );
};
