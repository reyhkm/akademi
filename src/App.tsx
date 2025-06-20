import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CurriculumPage from './pages/CurriculumPage';
import StudentLifePage from './pages/StudentLifePage';
import RegistrationPage from './pages/RegistrationPage';
import ContactPage from './pages/ContactPage';
import Modal from './components/ui/Modal';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/kurikulum" element={<CurriculumPage />} />
            <Route path="/kehidupan-siswa" element={<StudentLifePage />} />
            <Route path="/pendaftaran" element={<RegistrationPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/berita" element={<NewsPage />} />
            <Route path="/berita/:slug" element={<NewsDetailPage />} />
            <Route path="/program/:slug" element={<ProgramDetailPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Modal />
      <ScrollToTopButton />
    </>
  );
}

export default App;
