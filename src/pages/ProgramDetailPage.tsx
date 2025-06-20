import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import programsData from '@/data/programs.json';
import PageTransition from '@/components/layout/PageTransition';
import { Button } from '@/components/ui/Button';

const ProgramDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programsData.find(item => item.slug === slug);

  if (!program) {
    return (
      <PageTransition title="Program Tidak Ditemukan">
        <div className="container mx-auto px-4 py-28 sm:py-36 text-center">
          <h1 className="text-4xl font-bold text-white">404 - Program Tidak Ditemukan</h1>
          <p className="text-text-dark mt-4">Maaf, program yang Anda cari tidak ada.</p>
          <Button asChild variant="link" className="mt-8">
            <Link to="/kurikulum">
              Kembali ke Kurikulum
            </Link>
          </Button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition title={program.title} description={program.shortDescription}>
      <div className="container mx-auto px-4 py-28 sm:py-36">
        <div className="max-w-4xl mx-auto">
          <Link to="/kurikulum" className="flex items-center text-primary hover:text-secondary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Kurikulum
          </Link>

          <article>
            <img src={program.imageUrl} alt={program.title} className="w-full h-auto max-h-[400px] object-cover rounded-xl mb-8" />
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{program.title}</h1>
            <p className="text-lg text-text-dark mb-8">{program.fullDescription}</p>

            <div className="grid md:grid-cols-2 gap-8 bg-gray-900/50 p-8 rounded-xl border border-white/10">
              <div>
                <h3 className="font-semibold text-secondary text-xl mb-4">Topik Utama</h3>
                <ul className="space-y-2">
                  {program.keyTopics.map((topic) => (
                    <li key={topic} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-secondary text-xl mb-4">Hasil Pembelajaran</h3>
                <ul className="space-y-2">
                  {program.learningOutcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProgramDetailPage;
