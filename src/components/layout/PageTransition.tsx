import { useEffect } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

interface PageTransitionProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const PageTransition = ({ children, title, description }: PageTransitionProps) => {
  useEffect(() => {
    document.title = `${title} | Akademi Inovasi Global`;
    
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (description && metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', description);
    }
  }, [title, description]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
