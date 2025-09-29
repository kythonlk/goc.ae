import bg from '../assets/s2.webp';

export default function Projects({ name, disc, images }: { name: string, disc: string, images: any }) {
  return (
    <>
      <title>Our Projects | GREEN OASIS - GENERAL CONTRACTING</title>
      <div className="min-h-[60vh]">
        <div className="relative py-8 pb-4 sm:py-40">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
            <img src={bg} alt="bg-services" className="w-full h-[150px] sm:h-[300px] object-cover object-bottom" />
          </div>
          <div className="mx-4 sm:mx-40 relative z-10 px-4 pt-16 sm:pt-4">
            <h2 className="text-2xl sm:text-5xl font-bold text-white text-center">
              {name}
            </h2>
          </div>
        </div>
        <div className="text-gray-900 sm:mb-8 sm:mx-20 p-8">
          <p className="sm:mb-10 text-justify sm:mx-40"
            dangerouslySetInnerHTML={{ __html: disc }}></p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {images.map((p: any) => (
              <div
                key={p.name}
                className='border border-gray-400 shadow-xl flex flex-col justify-center items-center mx-auto'
              >
                <img src={p.image} className="w-40 h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
