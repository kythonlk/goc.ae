import { Phone, Mail, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import m from '../assets/markers/m.png';
import m2 from '../assets/markers/m2.png';
import t from '../assets/markers/t.png';

export default function WorkWithUs() {

  return (
    <>
      <title>Contact US  | GREEN OASIS - GENERAL CONTRACTING</title>
      <meta name="description" content="Terracore is a ground engineering company that provides engineering solutions for the construction industry. We offer a wide range of services, including site surveys, soil testing, and foundation design. Our team of experienced engineers is dedicated to providing high-quality work that meets the needs of our clients." />
      <div className="bg-[#cfd0d0] min-h-screen">
        <MapComponent />
        <div className="py-10 sm:py-20 bg-[#cfd0d0] text-gray-900" id="contact-form">
          <div className="mx-4 sm:mx-20 px-2 sm:px-6 lg:px-8">
            <div className="p-2 sm:p-8 mb-8 flex flex-col items-center justify-center font-bp">
              <h2 className="text-4xl font-bold mb-6">
                Ready to start your Project?
              </h2>
              <h2 className="text-3xl font-bold fi">Get in touch with our experts</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              <div className="mx-2 sm:mx-6 2xl:mx-12 flex flex-col items-center justify-end">
                <iframe src="https://extraco-mailer.vercel.app/terracore/contact" width="100%" className='w-full h-[750px] rounded-lg shadow-lg' ></iframe>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full p-2 mr-4">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a className="font-bp" href='tel:+97145120777' target='_blank'>+971 4 512 0777</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full p-2 mr-4">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a className="font-bp" href="mailto:info@goc.ae" target='_blank'>info@goc.ae</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full p-2 mr-4">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Address</p>
                        <a className="font-bp" href='https://maps.app.goo.gl/bC9EfmntjH82Eu4w6' target='_blank' >IMPZ, Production City, Galadari Bldg. B-16, 2nd Floor</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.915347183015!2d55.18028677612656!3d25.036946738171483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dce28555555%3A0x381294290dd0ffc!2sGreen%20Oasis%20General%20Cont.%20Co.%20L.L.C!5e0!3m2!1sen!2sae!4v1757753466844!5m2!1sen!2sae"
                    width="820" height="400" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: m2,
  iconUrl: m,
  shadowUrl: t
});

const locations = [
  {
    lat: 25.0369447,
    lng: 55.1828645,
    title: "Green Oasis General Cont. Co. L.L.C",
    description: "Dubai Production City - Dubai - United Arab Emirates",
    link: "https://maps.app.goo.gl/v4rBWrEUyiTu3sYN6"
  },
  {
    lat: 25.1232901,
    lng: 55.2302357,
    title: "Green Oasis General Contracting - Al Quoz Office",
    description: "Al Quoz - Al Quoz Industrial Area 4 - Dubai - United Arab Emirates",
    link: "https://maps.app.goo.gl/UkZkpAcTF3s855bU8"
  },
];

const customIcon = new L.divIcon({
  className: '',
  html: `<div class="pulsing-marker">
             <div class="dot"></div>
             <div class="pulse"></div>
             <div class="pulse pulse-delay"></div>
           </div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6] // Anchor point should be the center of the dot
});

//@ts-ignore

const MapComponent = () => {
  return (
    <MapContainer center={[25.0738923, 55.2003156]} zoom={12} style={{ height: "90vh", width: "100%", filter: 'invert(90%) hue-rotate(180deg)' }} className='z-0'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, idx) => (
        <Marker key={idx} position={[location.lat, location.lng]} icon={customIcon}>
          <Popup>
            <h6>{location.title}</h6>
            <p>{location.description}</p>
            {location.link && <a href={location.link} target="_blank" rel="noopener noreferrer">Get Directions</a>}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
