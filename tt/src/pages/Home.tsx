import Hero from '../components/Hero';
import ContactCTA from '../components/ContactCTA';
import Expertise from '../components/experties';
import ClientsSection from '../components/Clients';
import Affiliates from '../components/Affiliate';
import Map from '../components/waterproject.tsx'

const Home = () => {
  return (
    <>
      <title>Home | TerraCore Ground Engineering Solutions</title>
      <meta name="description" content="Terracore is a ground engineering company that provides engineering solutions for the construction industry. We offer a wide range of services, including site surveys, soil testing, and foundation design. Our team of experienced engineers is dedicated to providing high-quality work that meets the needs of our clients." />
      <Hero />
      <Expertise />
      <Map />
      <ClientsSection />
      <Affiliates />
      <ContactCTA />
    </>
  );
};

export default Home;
