import bg from '../assets/map.webp'
import water from '../assets/home.mp4'

export default function Map() {

  return (
    <section style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat" }}>
      <video
        className="w-full h-full object-cover px-96 py-40"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 1 }}
      >
        <source src={water} type="video/mp4" />
      </video>
    </section>
  );
};
