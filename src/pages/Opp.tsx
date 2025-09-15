import { useState } from 'react';
import sc from '../assets/images/sc.webp';
import pro from '../assets/images/pro.webp';
import bg from '../assets/s2.webp';
import o1 from '../assets/opp/o1.webp';
import o2 from '../assets/opp/o2.webp';
import o3 from '../assets/opp/o3.webp';

export default function WorkWithUs() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

  const opportunities: any = {
    procurement: {
      title: "Procurement",
      description: "Planning, coordination, communication, cost management, strategic alignment, and supplier relationship management.",
      coverimage: pro,
      form: "pro",
      image: o1
    },
    subcontractor: {
      title: "Sub - Contractor",
      description: "Our supply chain is vital for every project. We screen all suppliers to ensure high-quality services and only work with trusted companies.",
      coverimage: sc,
      form: "sc",
      image: o2
    },
    project: {
      title: "Logistics",
      description: "Timely, high-quality delivery. Reduce costs, Increase efficiency, and improve client satisfaction.",
      coverimage: pro,
      form: "pro",
      image: o3
    }
  };

  return (
    <>
      <title>Opportunities  | GREEN OASIS - GENERAL CONTRACTING</title>
      <div className="bg-white">
        <div className="relative h-[28vh] bg-gray-900" style={{ backgroundImage: `url(${bg})` }}>
          <div className="relative h-full flex items-end justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">{selectedOpportunity ? selectedOpportunity.title : 'Opportunities'}</h1>
          </div>
        </div>

        <div className="p-4 sm:p-20">
          {selectedOpportunity ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center text-gray-700">
              <img src={selectedOpportunity.coverimage} alt={selectedOpportunity.title} className="h-full sm:w-1/2 ml-auto mr-4 rounded-lg shadow-xl" />
              <div className="w-full max-w-xl h-full bg-white p-6 rounded-lg shadow-lg border border-gray-900/10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{selectedOpportunity.title} Application</h2>
                <iframe src={"https://extraco-mailer.vercel.app/terracore/opp/" + selectedOpportunity.form} width="100%" className='w-full h-[500px] sm:h-[440px]' ></iframe>
                <button
                  onClick={() => setSelectedOpportunity(null)}
                  className="mt-4 text-gray-600 underline"
                >
                  Back to Opportunities
                </button>
              </div>
            </div>
          ) : (
            <div className="m-4 sm:m-10 2xl:m-20 flex flex-col sm:flex-row items-center justify-around gap-4">
              {Object.entries(opportunities).map(([key, opp]: any) => (
                <div className='w-96 mx-auto'>
                  <div key={key} className="bg-white shadow-2xl flex flex-col items-center justify-center border border-gray-900/10"
                    onClick={() => setSelectedOpportunity(opp)}>
                    <img src={opp.image} alt={opp.title} className="w-28 h-auto object-cover" />
                    <h4 className="text-2xl font-bp my-4">{opp.title}</h4>
                  </div>
                  <p className="text-gray-600 text-center mt-6">{opp.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
