import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import newsData from '@/data/news.json';
import PageTransition from '@/components/layout/PageTransition';
import { Button } from '@/components/ui/Button';

const fullContentMap: { [key: string]: string } = {
  "juara-kompetisi-robotika-nasional-2024": `
    <p>Tim robotika kebanggaan Akademi Inovasi Global, 'Inovator Muda', telah menorehkan prestasi gemilang dengan meraih gelar juara pertama dalam ajang bergengsi Kompetisi Robotika Nasional (KRON) 2024 yang diselenggarakan di Jakarta. Mereka berhasil mengungguli puluhan tim dari sekolah-sekolah terbaik di seluruh Indonesia.</p>
    <p>Robot yang mereka kembangkan, 'EcoBot v2', adalah sebuah robot pemilah sampah cerdas yang menggunakan teknologi Computer Vision dan kecerdasan buatan (AI) untuk mengidentifikasi dan memisahkan sampah organik, anorganik, dan logam secara otomatis. Kecepatan dan akurasi EcoBot v2 menjadi kunci kemenangan tim.</p>
    <h3>Proses Pengembangan</h3>
    <p>Dibimbing oleh Bapak Budi Hartono, S.Kom., tim yang terdiri dari lima siswa ini menghabiskan waktu lebih dari enam bulan untuk riset dan pengembangan. 'Tantangan terbesar adalah melatih model AI kami dengan dataset yang terbatas namun harus akurat. Kami begadang berhari-hari untuk melakukan labeling data,' ujar Citra Lestari, ketua tim.</p>
    <p>Kemenangan ini tidak hanya membanggakan sekolah, tetapi juga membuktikan bahwa kurikulum berbasis proyek yang diterapkan di AIG mampu menghasilkan inovator-inovator muda yang siap bersaing di tingkat nasional.</p>
  `,
  "pameran-seni-digital-interaktif": `
    <p>Siswa-siswi dari program Seni Digital & Realitas Virtual sukses menggelar pameran seni interaktif bertajuk 'Metamorfosis' pada akhir pekan lalu. Acara yang diadakan di aula utama sekolah ini berhasil menarik ratusan pengunjung dari kalangan orang tua, siswa, dan masyarakat umum.</p>
    <p>'Metamorfosis' menampilkan beragam karya inovatif yang menggabungkan seni dan teknologi. Beberapa karya yang menjadi sorotan antara lain instalasi seni generatif yang merespons gerakan pengunjung, pengalaman Virtual Reality (VR) yang membawa pengunjung ke dunia fantasi, serta serangkaian karya cetak digital dan animasi pendek.</p>
    <h3>Kolaborasi Seni dan Teknologi</h3>
    <p>'Kami ingin menunjukkan bahwa seni tidak lagi terbatas pada kanvas dan kuas. Teknologi membuka medium baru bagi kami untuk berekspresi,' kata Rian, salah satu seniman muda yang karyanya dipamerkan. Pameran ini menjadi bukti nyata dari visi AIG untuk menyatukan kreativitas dan inovasi teknologi.</p>
  `,
  "program-kewirausahaan-sosial-baru": `
    <p>Akademi Inovasi Global secara resmi meluncurkan program unggulan terbaru untuk siswa SMA, yaitu 'Kewirausahaan Sosial'. Program ini dirancang untuk membekali siswa dengan keterampilan bisnis, kepemimpinan, dan kepekaan sosial yang mendalam.</p>
    <p>Tujuan utama dari program ini adalah mendorong siswa untuk mengidentifikasi masalah nyata di komunitas mereka dan merancang solusi bisnis yang berkelanjutan dan berdampak positif. 'Kami tidak hanya ingin mencetak pengusaha, tapi juga agen perubahan,' ungkap Kepala Sekolah dalam pidato peluncurannya.</p>
    <h3>Kurikulum Berbasis Dampak</h3>
    <p>Siswa dalam program ini akan mempelajari Business Model Canvas, pengukuran dampak sosial (social impact measurement), strategi pemasaran digital, hingga teknik pitching di hadapan investor. Di akhir program, setiap tim diharapkan memiliki prototipe startup sosial yang siap untuk diuji coba di masyarakat.</p>
  `,
};

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

  const fullContent = fullContentMap[article.slug] || `<p>${article.content}</p>`;

  return (
    <PageTransition title={article.title} description={article.content.substring(0, 155)}>
      <div className="bg-gray-900/50">
        <div className="container mx-auto px-4 py-28 sm:py-36">
          <div className="max-w-4xl mx-auto">
            <Link to="/berita" className="flex items-center text-primary hover:text-secondary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke semua berita
            </Link>

            <article>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{article.title}</h1>
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

              <div className="prose-custom max-w-none text-text-dark" dangerouslySetInnerHTML={{ __html: fullContent }} />
            </article>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NewsDetailPage;
