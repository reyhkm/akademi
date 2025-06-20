import { motion } from 'framer-motion';
import { ArrowRight, Bot, Code, Palette, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { useStore } from '@/hooks/useStore';

import newsData from '@/data/news.json';
import programsData from '@/data/programs.json';

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

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeroSection />
      <WhyUsSection />
      <FeaturedProgramsSection />
      <VirtualTourSection />
      <LatestNewsSection />
      <CtaSection />
    </motion.div>
  );
};

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920"
      >
        <source src="https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-school-561/1080p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-dark/70"></div>
    </div>
    <div className="relative z-10 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
          <AnimatedText text="Membentuk Inovator," el="span" />
          <br />
          <AnimatedText text="Bukan Pengikut." el="span" />
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-text-dark">
          Selamat datang di Akademi Inovasi Global, tempat para pemimpin masa depan dilahirkan melalui kurikulum berbasis teknologi dan kreativitas.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="primary">
            <Link to="/kurikulum">Jelajahi Kurikulum</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark">
            <Link to="/kontak">Tur Virtual</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const WhyUsSection = () => {
  const pillars = [
    { icon: <Bot className="w-10 h-10 text-primary" />, title: "Kurikulum Berbasis Proyek", description: "Belajar dengan melakukan, menyelesaikan tantangan dunia nyata." },
    { icon: <Code className="w-10 h-10 text-secondary" />, title: "Kecerdasan Buatan & Etika", description: "Menguasai teknologi masa depan dengan landasan etis yang kuat." },
    { icon: <Users className="w-10 h-10 text-accent" />, title: "Kewirausahaan Sosial", description: "Menciptakan bisnis yang berdampak positif bagi masyarakat." },
    { icon: <Palette className="w-10 h-10 text-primary" />, title: "Seni & Desain Digital", description: "Menggabungkan kreativitas dan teknologi untuk menciptakan karya inovatif." },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Mengapa Akademi Inovasi Global?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-dark">Empat pilar utama yang menjadi fondasi pendidikan transformatif kami.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto bg-dark p-4 rounded-full mb-4">
                    {pillar.icon}
                  </div>
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-dark">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProgramsSection = () => {
  return (
    <section className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-4">Kurikulum Unggulan</h2>
        <p className="text-center text-text-dark max-w-2xl mx-auto mb-12">Geser untuk melihat program-program inovatif yang kami tawarkan.</p>
      </div>
      <div className="flex overflow-x-auto space-x-8 pb-12 pl-4 lg:pl-12 scrollbar-hide">
        {programsData.map((program) => (
          <motion.div key={program.id} className="flex-shrink-0 w-[300px] md:w-[350px]">
            <Card className="h-full overflow-hidden">
              <img src={program.imageUrl} alt={program.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-dark">{program.shortDescription}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const VirtualTourSection = () => {
  const openModal = useStore((state) => state.openModal);

  const handleOpenTour = () => {
    openModal(
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/pCve1w1G-RY?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <ParallaxImage src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200" alt="Campus" className="rounded-xl h-96" />
        <div className="mt-[-100px] relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Rasakan Pengalamannya Langsung</h2>
          <p className="mt-4 max-w-xl mx-auto text-text-dark">Jelajahi fasilitas canggih kami dari kenyamanan rumah Anda.</p>
          <Button size="lg" variant="secondary" className="mt-8" onClick={handleOpenTour}>
            Mulai Tur Virtual 360°
          </Button>
        </div>
      </div>
    </section>
  );
};

const LatestNewsSection = () => (
  <section className="py-20 sm:py-32 bg-gray-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Berita & Acara Terbaru</h2>
        <p className="mt-4 max-w-2xl mx-auto text-text-dark">Ikuti terus perkembangan dan pencapaian terbaru dari komunitas kami.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
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
                <a href="#" className="font-semibold text-secondary group-hover:text-primary transition-colors">
                  Baca Selengkapnya <ArrowRight className="inline w-4 h-4 ml-1" />
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="py-20 sm:py-32">
    <div className="container mx-auto px-4">
      <div className="relative rounded-xl p-12 text-center overflow-hidden bg-gradient-to-r from-primary to-secondary">
        <div className="absolute inset-0 bg-dark/30 mix-blend-multiply"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Siap Bergabung dengan Para Inovator?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            Pendaftaran untuk tahun ajaran baru telah dibuka. Ambil langkah pertama menuju masa depan yang cemerlang.
          </p>
          <Button asChild size="lg" variant="accent" className="mt-8">
            <Link to="/pendaftaran">Daftar Sekarang</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;
