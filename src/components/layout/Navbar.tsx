import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/kurikulum', label: 'Kurikulum' },
  { href: '/kehidupan-siswa', label: 'Kehidupan Siswa' },
  { href: '/berita', label: 'Berita' },
  { href: '/kontak', label: 'Kontak' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkClass = "text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary";
  const inactiveLinkClass = "text-text-dark hover:text-white transition-colors";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold font-display text-white">
            AIG<span className="text-primary">.</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild variant="primary">
              <Link to="/pendaftaran">Daftar Sekarang</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-white bg-primary' : 'text-text-dark hover:text-white hover:bg-gray-700'}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-4">
                <Button asChild variant="primary" onClick={() => setIsMenuOpen(false)}>
                  <Link to="/pendaftaran">Daftar Sekarang</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
