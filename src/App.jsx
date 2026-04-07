import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen show={loading} />
      <ScrollProgress />
      <BackToTop />
      <CustomCursor />

      <motion.div
        initial={false}
        animate={{
          opacity: loading ? 0 : 1,
          visibility: loading ? 'hidden' : 'visible',
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: loading ? 'none' : 'auto' }}
        className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]"
      >
        <div className="pointer-events-none fixed inset-0 z-0 mesh-gradient opacity-28" />
        <motion.div
          className="pointer-events-none fixed -left-40 top-20 z-0 h-80 w-80 rounded-full bg-[var(--neon-purple)] opacity-[0.06] blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none fixed -right-32 bottom-32 z-0 h-96 w-96 rounded-full bg-[var(--neon-blue)] opacity-[0.055] blur-[110px]"
          animate={{ x: [0, -25, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none fixed left-1/3 bottom-10 z-0 h-72 w-72 rounded-full bg-[var(--neon-pink)] opacity-[0.045] blur-[90px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.035, 0.07, 0.035] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern bg-grid opacity-[0.28]" />
        <ParticleBackground />
        <div className="noise-overlay" />

        <main className="relative z-[1]">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      </motion.div>
    </>
  );
}
