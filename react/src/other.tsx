import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import s2 from "./assets/s2.png";
import hs from "./assets/h&s.png";
import clients from "./assets/clients.png";
import { Heart, TriangleAlert, Sprout } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="w-full h-1 bg-goc-green"></div>
      <div className="flex w-full items-center">
        <div className="w-1/3 pr-6 text-right bg-gray-100 p-8">
          <h2 className="section-title text-goc-gray">OUR</h2>
          <div className="w-24 h-1 bg-goc-green my-3 ml-auto"></div>
        </div>
        <div className="w-2/3 bg-goc-green text-white p-8">
          <h2 className="section-title">PROJECTS</h2>
          <div className="w-24 h-1 bg-goc-green my-3 ml-auto"></div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-goc-green py-10 max-w-2xl mx-auto text-center">Understanding our clients' needs and bringing that to life is the cornerstone to each of our projects. Whether big or small our passion is in delivering high quality projects on time to budget.</p>
      </div>
      <div className="">
        <img src={p1} alt="Project Image 1" className="w-full h-full object-cover" />
        <img src={p2} alt="Project Image 2" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export const SafetySection = () => {
  return (
    <section id="safety" className="grid lg:grid-cols-2 min-h-[800px]">
      <div className="flex flex-col justify-between bg-goc-green">
        <div className="p-10 flex flex-col justify-between">
          <h2 className="section-title font-black uppercase text-gray-800 leading-tight mt-10">
            HEALTH <br />
            <span className="text-white px-2"> & SAFETY</span>
          </h2>
          <p className="mt-20 text-md text-gray-700">
            In compliance with the legislative regulations outlined in ISO 14001:2015
            and OHSAS 18001:2007, we have maintained an efficient HSE management
            system.
          </p>
        </div>
        <div className="bg-gray-400 text-white p-10 md:p-16">
          <p className="text-md mb-6">
            We are committed to implement Health, Safety & Environment policies that
            adhere to all legal criteria at every work level and are overseen by a group
            of top-notch professionals. For every project we work on, we adhere to
            strict HSE standards and strive for a Zero-Accident-Zero Incident goal.
          </p>
          <div className="flex space-x-6 py-6 text-5xl justify-around w-xl mx-auto">
            <Heart className="text-white h-12 w-12" />
            <TriangleAlert className="text-white h-12 w-12" />
            <Sprout className="text-white h-12 w-12" />
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url('${hs}')` }}
      ></div>
    </section>
  );
};

export const ClientsSection = () => {
  return (
    <section id="clients" >
      <div className="w-full h-1 bg-goc-green"></div>
      <div className="flex w-full items-center">
        <div className="w-1/3 pr-6 text-right">
          <h2 className="section-title text-goc-gray">OUR</h2>
          <div className="w-24 h-1 bg-goc-green mt-3 ml-auto"></div>
        </div>
        <div className="w-2/3 bg-goc-green text-white p-8">
          <h2 className="section-title">CLIENTS</h2>
          <div className="w-24 h-1 bg-goc-green mt-3 ml-auto"></div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <img src={s2} alt="Client 1" className="h-full col-span-2" />
        <img src={clients} alt="Client 1" className="w-full" />
      </div>
    </section>
  );
};
