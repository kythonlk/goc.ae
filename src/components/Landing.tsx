import CropedLogo from '../assets/logo.jpeg';
import bg from '../assets/s2.webp';
import LoadingImg from '../assets/loading.svg';

export default function Landing({ fadeOut }: { fadeOut: any }) {
  return (
    <div
      className={`relative h-screen flex items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      <img
        src={LoadingImg}
        alt="Loading animation"
        className="absolute h-72 w-72 animate-spin z-20"
      />
      <img
        src={CropedLogo}
        className="h-40 relative z-10"
        alt="TerraCore Logo"
      />
    </div>
  );
}
