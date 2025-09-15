import bg from '../assets/s2.webp';
import p1 from '../assets/projects/1.webp';
import p2 from '../assets/projects/2.webp';
import p3 from '../assets/projects/3.webp';
import p4 from '../assets/projects/4.webp';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: "Infrastructure Projects ",
      image: p4,
      link: "/projects/infrastructure"
    },
    {
      name: "Pipeline Projects",
      image: p3,
      link: "/projects/pipeline"
    },
    {
      name: "Petrol Stations Projects",
      image: p2,
      link: "/projects/petrol-stations"
    },
    {
      name: "Sub Stations Projects",
      image: p1,
      link: "/projects/sub-stations"
    },
  ]
  return (
    <>
      <title>Our Projects | GREEN OASIS - GENERAL CONTRACTING</title>
      <div className="min-h-[60vh]">
        <div className="relative py-8 pb-4 sm:py-40" id="certification">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
            <img src={bg} alt="bg-services" className="w-full h-[150px] sm:h-[300px] object-cover object-bottom" />
          </div>
          <div className="mx-4 sm:mx-40 relative z-10 px-4">
            <h2 className="text-2xl sm:text-5xl font-bold text-white text-center">
              Our Projects
            </h2>
          </div>
        </div>
        <div className="text-gray-900 mb-8 mx-20">
          <p className="mb-10 text-justify mx-40">
            At GOC Group of Companies, we take pride in delivering impactful projects that shape communities, support industries, and drive progress across the region. With a strong foundation in engineering excellence, innovation, and quality execution, our diverse portfolio spans multiple sectors—including infrastructure development, pipeline systems, petrol stations, and electrical substations.
            <br />
            <br />
            Every project we undertake reflects our commitment to precision, sustainability, and client satisfaction. Whether we’re building essential public utilities or advanced industrial facilities, our focus remains on delivering solutions that are safe, reliable, and built to last.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 justify-between">
            {projects.map((p) => (
              <div className='flex flex-col justify-center items-center'>
                <Link
                  key={p.name}
                  to={p.link}
                  className='border border-gray-400 shadow-xl mx-auto w-80 flex flex-col justify-center items-center '
                >
                  <div className="p-4">
                    <img src={p.image} alt={p.name} className="w-auto h-28 object-contain" />
                  </div>
                  <p className="font-bp py-4 text-center">{p.name}</p>
                </Link>
                <Plus className="text-gray-700 text-8xl mt-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
