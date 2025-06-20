import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import newsData from '@/data/news.json';
import PageTransition from '@/components/layout/PageTransition';
import { Button } from '@/components/ui/Button';

const NewsDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = newsData.find(item => item.slug === slug);

  if (!article) {
    return (
      <PageTransition title="Artikel Tidak Ditemukan">
        <div className="container mx-auto px-4 py-28 sm:py-36 text-center">
          <h1 className="text-4xl font-bold text-white">404 - Artikel Tidak Ditemukan</h1>
          <p className="text-text-dark mt-4">Maaf, artikel yang Anda cari tidak ada.</p>
          <Button asChild variant="link" className="mt-8">
            <Link to="/berita">
              Kembali ke semua berita
            </Link>
          </Button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition title={article.title} description={article.content.substring(0, 155)}>
      <div className="container mx-auto px-4 py-28 sm:py-36">
        <div className="max-w-4xl mx-auto">
          <Link to="/berita" className="flex items-center text-primary hover:text-secondary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke semua berita
          </Link>

          <article>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{article.title}</h1>
            <div className="flex items-center space-x-4 text-text-dark mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{article.author}</span>
              </div>
            </div>

            <img src={article.thumbnailUrl} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl mb-8" />

            <div className="prose prose-invert prose-lg max-w-none text-text-dark">
              <p>{article.content}</p>
              {/* In a real application, this would be replaced with full HTML content */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.</p>
            </div>
          </article>
        </div>
      </div>
    </PageTransition>
  );
};

export default NewsDetailPage;
