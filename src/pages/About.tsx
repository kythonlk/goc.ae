import AboutImage from '../assets/about.webp';
import a1 from '../assets/a1.webp';

export default function About() {
  return (
    <>
      <title>About Us | GREEN OASIS - GENERAL CONTRACTING</title>
      <div className="relative z-1">
        <img src={AboutImage} alt="bg" className="w-full h-[40em] object-cover object-bottom z-10 -scale-x-100" />
      </div>
      <div className="p-4 sm:p-20 flex flex-col sm:grid sm:grid-cols-5 gap-4 justify-center items-center">
        <img src={a1} alt="bg" className="w-full h-[40em] object-contain col-span-2" />
        <div className="col-span-3 px-10 text-justify">
          <h1 className="text-5xl font-semibold mb-4">About Green Oasis</h1>
          <p className="mb-4">
            GOC is centric futuristic organization that believes in proactive advancement and development, which satiates esteemed clients. We at GOC, are committed for all its future endeavor, prestigious clients as well as staff and workers. Among the activities we have planned are workshops and Free education GOLD (Green Oasis Learning & Development)
            which aims and gives opportunity to our workers for free education and to improve the physical, social and mental well-being, develop personality, improve skill level, an ability to read, write make them independent, confident. Education liberates their thoughts and actions, making them capable of wisely using the resources available and progressing gradually.
          </p>
          <p className="mb-4">
            Our clients recognize our commitment to deliver the highest quality work on schedule and within budget.  In meeting these objectives, we consistently place our emphasis on health, safety and the environment, Green Oasis has been awarded Quality Management System certification and is certified by OHSAS for its Safety and Health Management System.  Stringent procedures are enforced at every step of every job as we continue our drive to improve performance and exceed client expectations.
          </p>
        </div>
      </div>
    </>
  );
};
