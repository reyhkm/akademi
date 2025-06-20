import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import curriculumData from '@/data/curriculum.json';
import PageTransition from '@/components/layout/PageTransition';

type Level = 'sd' | 'smp' | 'sma';

const CurriculumPage = () => {
  const [activeLevel, setActiveLevel] = useState<Level>('smp');
  const levels: { id: Level; label: string }[] = [
    { id: 'sd', label: 'Sekolah Dasar' },
    { id: 'smp', label: 'SMP' },
    { id: 'sma', label: 'SMA' },
  ];

  const activeData = curriculumData[activeLevel];

  return (
    <PageTransition 
      title="Kurikulum" 
      description="Jelajahi kurikulum inovatif kami yang dirancang untuk membangun keterampilan relevan abad ke-21 di setiap jenjang pendidikan."
    >
      <div className="container mx-auto px-4 py-28 sm:py-36">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Kurikulum Inovatif</h1>
          <p className="mt-4 max-w-2xl mx-auto text-text-dark">
            Dirancang untuk membangun keterampilan relevan abad ke-21 di setiap jenjang pendidikan.
          </p>
        </header>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-800 p-2 rounded-lg">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors relative ${
                  activeLevel === level.id ? 'text-white' : 'text-text-dark hover:text-white'
                }`}
              >
                {activeLevel === level.id && (
                  <motion.div
                    layoutId="active-curriculum-pill"
                    className="absolute inset-0 bg-primary rounded-md"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{level.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gray-900/50 p-8 rounded-xl border border-white/10">
              <h2 className="text-3xl font-display font-bold text-white mb-4">{activeData.title}</h2>
              <p className="text-text-dark mb-8">{activeData.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-secondary mb-4">Mata Pelajaran Unggulan</h3>
                  <ul className="space-y-2">
                    {activeData.subjects.map((subject) => (
                      <li key={subject} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-4">Contoh Proyek Khas</h3>
                  <ul className="space-y-2">
                    {activeData.projects.map((project) => (
                      <li key={project} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default CurriculumPage;
