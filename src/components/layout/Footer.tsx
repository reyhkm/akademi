import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
  ];

  const footerLinks = {
    'Jelajahi': [
      { label: 'Kurikulum', href: '/kurikulum' },
      { label: 'Kehidupan Siswa', href: '/kehidupan-siswa' },
      { label: 'Berita', href: '/berita' },
    ],
    'Pendaftaran': [
      { label: 'Prosedur', href: '/pendaftaran' },
      { label: 'Biaya', href: '/pendaftaran#biaya' },
      { label: 'FAQ', href: '/pendaftaran#faq' },
    ],
    'Hubungi Kami': [
      { label: 'Kontak', href: '/kontak' },
      { label: 'Jadwalkan Tur', href: '/kontak' },
    ],
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-text-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold font-display text-white">
              Akademi Inovasi Global<span className="text-primary">.</span>
            </h3>
            <p className="mt-4 text-sm max-w-xs">
              Membentuk generasi inovator yang siap menghadapi tantangan masa depan.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white tracking-wider uppercase">{title}</h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Akademi Inovasi Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
