import bg from '../assets/map.webp'
import water from '../assets/home.mp4'

export default function Map() {

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20"
      style={{ 
        backgroundImage: `url(${bg})`, 
        backgroundSize: "cover", 
        backgroundPosition: 'center', 
        backgroundRepeat: "no-repeat" 
      }}
    >
      <div className="w-full max-w-6xl">
        <video
          className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-cover rounded-lg shadow-2xl"
          autoPlay
          loop
          muted
          playsInline
          style={{ zIndex: 1 }}
        >
          <source src={water} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
