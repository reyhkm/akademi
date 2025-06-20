import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import newsData from '@/data/news.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import PageTransition from '@/components/layout/PageTransition';

const NewsPage = () => {
  return (
    <PageTransition 
      title="Berita & Acara"
      description="Ikuti terus perkembangan, pencapaian, dan acara terbaru dari komunitas Akademi Inovasi Global."
    >
      <div className="container mx-auto px-4 py-28 sm:py-36">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Berita & Acara</h1>
          <p className="mt-4 max-w-2xl mx-auto text-text-dark">
            Ikuti terus perkembangan dan pencapaian terbaru dari komunitas Akademi Inovasi Global.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group">
                <div className="overflow-hidden rounded-t-xl">
                  <img src={news.thumbnailUrl} alt={news.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <p className="text-sm text-primary">{news.category} - {news.date}</p>
                  <CardTitle>{news.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-text-dark">{news.content}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link to={`/berita/${news.slug}`} className="font-semibold text-secondary group-hover:text-primary transition-colors">
                    Baca Selengkapnya <ArrowRight className="inline w-4 h-4 ml-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default NewsPage;
