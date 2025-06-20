import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryData from '@/data/gallery.json';
import { Card } from '@/components/ui/Card';
import PageTransition from '@/components/layout/PageTransition';
import { useStore } from '@/hooks/useStore';

const categories = ['Semua', 'Akademik', 'Olahraga', 'Seni', 'Komunitas'];

const StudentLifePage = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const openModal = useStore((state) => state.openModal);

  const filteredGallery = activeCategory === 'Semua'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  const handleImageClick = (imageUrl: string, title: string) => {
    openModal(
      <div className="p-4">
        <img src={imageUrl} alt={title} className="max-w-full max-h-[80vh] mx-auto rounded-lg" />
        <p className="text-center text-white mt-4 text-lg">{title}</p>
      </div>
    );
  };

  return (
    <PageTransition 
      title="Kehidupan Siswa"
      description="Lihat galeri kegiatan siswa kami. Belajar, berkarya, dan bertumbuh bersama dalam komunitas yang suportif dan dinamis."
    >
      <div className="container mx-auto px-4 py-28 sm:py-36">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Kehidupan Siswa</h1>
          <p className="mt-4 max-w-2xl mx-auto text-text-dark">
            Belajar, berkarya, dan bertumbuh bersama dalam komunitas yang suportif dan dinamis.
          </p>
        </header>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 bg-gray-900/50 p-2 rounded-lg border border-border-color">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'text-text-dark hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => handleImageClick(item.imageUrl, item.title)}
              >
                <Card className="overflow-hidden h-full border-transparent group-hover:border-primary group-hover:-translate-y-1">
                  <div className="relative">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white font-semibold font-display">{item.title}</h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default StudentLifePage;
