import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Mail, Phone, MapPin } from 'lucide-react';

// Fix for default marker icon issue with bundlers
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const ContactPage = () => {
  const position: [number, number] = [-6.200000, 106.816666]; // Jakarta coordinates

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-28 sm:py-36"
    >
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Hubungi Kami</h1>
        <p className="mt-4 max-w-2xl mx-auto text-text-dark">
          Kami siap menjawab pertanyaan Anda dan membantu dalam proses pendaftaran.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <ContactInfo icon={<MapPin />} title="Alamat" lines={["Jl. Inovasi No. 123", "Jakarta, Indonesia 12345"]} />
          <ContactInfo icon={<Phone />} title="Telepon" lines={["(021) 555-1234"]} />
          <ContactInfo icon={<Mail />} title="Email" lines={["info@aig.sch.id", "pendaftaran@aig.sch.id"]} />
        </div>
        
        <div className="rounded-lg overflow-hidden border-2 border-primary shadow-lg shadow-primary/20">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Akademi Inovasi Global
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </motion.div>
  );
};

const ContactInfo = ({ icon, title, lines }: { icon: React.ReactNode, title: string, lines: string[] }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-gray-800 p-3 rounded-full text-primary">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {lines.map(line => <p key={line} className="text-text-dark">{line}</p>)}
    </div>
  </div>
);

export default ContactPage;
