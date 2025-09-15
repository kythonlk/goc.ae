import { useState } from 'react';
import c1 from '../assets/opp/1.webp'
import c2 from '../assets/opp/2.webp'
import c3 from '../assets/opp/3.webp'
import bg from '../assets/s2.webp';

export default function Careers() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

  const opportunities: any = {
    procurement: {
      title: "Internship",
      coverimage: c1,
      disc: `We believe that our youth are the future of our organization. Our internship program are designed to help every intern grow skills, gain valuable experience and build a successful career in their chosen field.
<br /><br /> 
Our internship program is open to students and recent graduates who are looking to gain real-world experience and build their professional networks. We welcome applicants from a variety of fields, including engineering, business, construction, and more.
<br /><br /> 
You may send your updated CV at careers@goc.ae `,
    },
    subcontractor: {
      title: "Emiratisation",
      coverimage: c2,
      disc: `In line with Emiratisation policy, Green Oasis Contracting is looking to employ UAE nationals for a wide range of roles in the field of engineering, accounts, business and administrative.
<br /><br /> 
If you are interested in a career with us, please send your CV to careers@goc.ae`,
    },
    project: {
      title: "Learning and Development",
      coverimage: c3,
      disc: "Our learning and development program includes range of opportunities in developing the skills and knowledge of our team. Designed to meet the diverse and technical needs of our team, our program is regularly updated to provide the best practices in the industry, ensuring that our employees are equipped with the skills and knowledge they need to excel in their roles and advance their careers."
    }
  };

  return (
    <>
      <title>Opportunities  | GREEN OASIS - GENERAL CONTRACTING</title>
      <div className="bg-white">
        <div className="relative h-[28vh] bg-gray-900" style={{ backgroundImage: `url(${bg})` }}>
          <div className="relative h-full flex items-end justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">Careers</h1>
          </div>
        </div>

        <div className="p-4 sm:p-20">
          {selectedOpportunity ? (
            <div className="w-full max-w-5xl h-[50vh] p-6 shadow-xl text-gray-900 border border-gray-900/10 mx-auto">
              <h2 className="text-2xl font-semibold my-4">{selectedOpportunity.title}</h2>
              <div
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: selectedOpportunity.disc }}
              />
            </div>
          ) : (
            <div className="m-4 sm:m-10 2xl:m-20 flex flex-col sm:flex-row items-center justify-around gap-4">
              {Object.entries(opportunities).map(([key, opp]: any) => (
                <div key={key} className="bg-white p-4 shadow-2xl flex flex-col items-center justify-center border border-gray-900/10 w-96">
                  <img src={opp.coverimage} alt={opp.title} className="w-20 h-20 object-cover" />
                  <h4 className="text-2xl font-bp my-4">{opp.title}</h4>
                  <button
                    onClick={() => setSelectedOpportunity(opp)}
                    className="text-gray-900 bg-gray-300 py-2 px-6 rounded-full hover:bg-[#3d8b40] transition min-w-40 text-center"
                  >
                    Know More
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
