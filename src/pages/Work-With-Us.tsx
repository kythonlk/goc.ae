
export default function WorkWithUs() {

  return (
    <>
      <title>Work With Us | GREEN OASIS - GENERAL CONTRACTING</title>
      <div className="bg-[#dbd9d6] min-h-screen">
        <div className="relative h-[60vh] bg-gray-900">
          <div className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop")'
            }}
          />
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Vacancies</h1>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-20">

          <p className="text-gray-700 my-4">
            If you are interested to apply with us you may submit your application.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* <h2 className="text-2xl font-semibold text-[#005aa6] mb-6">Apply Now</h2> */}
            <iframe src="https://extraco-mailer.vercel.app/terracore/cv" width="100%" className='w-full h-[580px]' ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
