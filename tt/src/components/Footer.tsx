// import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import bg from "../assets/s2.webp"

export default function Footer() {

  // const services = [
  //   { path: '/services/soil', label: 'Soil Improvement' },
  //   { path: '/services/piling', label: 'Piling' },
  //   { path: '/services/shoring', label: 'Shoring' },
  //   { path: '/services/ndrc', label: 'NDRC/NDM' },
  //   { path: '/services/dewatering', label: 'Dewatering' },
  //   { path: '/services/logistics', label: 'Logistics' },
  // ];
  // const Links = [
  //   { name: 'Home', href: '/' },
  //   { name: 'About Us', href: '/about' },
  //   { name: 'Services', href: '/services' },
  //   { name: 'Opportunities', href: '/opportunities' },
  //   { name: 'Work With Us', href: '/work-with-us' },
  // ];

  return (
    <footer className="bg-bp text-gray-800 py-12" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat" }}>
      <div className="mx-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
          <div>
            <img src={Logo} alt="Logo" className="w-32 mb-4" />
            <p >
              Over 40 years of trusted excellence in civil engineering, built on quality, safety, and sustainability.
            </p>
          </div>
          {/* <div> */}
          {/*   <h4 className="text-lg font-semibold mb-4">Quick Links</h4> */}
          {/*   <ul className="space-y-2"> */}
          {/*     {Links.map((link) => ( */}
          {/*       <li key={link.name}> */}
          {/*         <Link to={link.href} className="hover:text-white"> */}
          {/*           {link.name} */}
          {/*         </Link> */}
          {/*       </li> */}
          {/*     ))} */}
          {/*   </ul> */}
          {/* </div> */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>Dubai Production City , Dubai, UAE</li>
              <li>Phone: <a href='tel:+97145120777' target='_blank'>+971 4 512 0777</a></li>
              <li>Email: <a href="mailto:info@goc.ae" target='_blank'>info@goc.ae</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.915347183015!2d55.18028677612656!3d25.036946738171483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dce28555555%3A0x381294290dd0ffc!2sGreen%20Oasis%20General%20Cont.%20Co.%20L.L.C!5e0!3m2!1sen!2sae!4v1757753466844!5m2!1sen!2sae"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} GREEN OASIS GENERAL CONTRACTING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

